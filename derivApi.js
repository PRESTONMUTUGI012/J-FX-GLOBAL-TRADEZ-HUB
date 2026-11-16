class DerivAPIConnector {
    constructor(numericAppId = "1089") {
        this.appId = /^\d+$/.test(String(numericAppId)) ? String(numericAppId) : "1089";
        this.ws = null;
        this.isConnected = false;
        this.isAuthorized = false;
        this.liveWsReceiving = {};
        this.activeToken = null;
        this.subscribers = {};
        this.multiSubscribers = {};
        this.fallbackInterval = null;
        this.simPrices = {};
        this.onBalanceUpdate = null;
    }

    connect() {
        this.startHybridFallback();
        return new Promise((resolve) => {
            const endpoint = `wss://ws.derivws.com/websockets/v3?app_id=${this.appId}`;
            try {
                this.ws = new WebSocket(endpoint);
            } catch (e) {
                resolve(true);
                return;
            }

            this.ws.onopen = () => {
                this.isConnected = true;
                if (this.activeToken) this.authorize(this.activeToken);
            };

            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.msg_type === 'tick' && data.tick) {
                        this.liveWsReceiving[data.tick.symbol] = Date.now();
                        this.processTick(data.tick);
                    } else if (data.msg_type === 'balance' && data.balance && this.onBalanceUpdate) {
                        this.onBalanceUpdate(data.balance);
                    }
                } catch (err) {}
            };
            resolve(true);
        });
    }

    authorize(token) {
        if (!token) return;
        this.activeToken = token;
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ authorize: token }));
        }
    }

    buyContract({ symbol, contractType, stake, duration = 5, durationUnit = "t", barrier = null, currency = "USD" }) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return false;
        const parameters = {
            amount: Number(stake),
            basis: "stake",
            contract_type: contractType,
            currency: currency,
            duration: Number(duration),
            duration_unit: durationUnit,
            symbol: symbol
        };
        if (barrier !== null && barrier !== undefined && !["DIGITEVEN", "DIGITODD", "CALL", "PUT", "MULTUP"].includes(contractType)) {
            parameters.barrier = String(barrier);
        }
        if (contractType === "ACCU") {
            parameters.growth_rate = Number(barrier) || 0.03;
            delete parameters.barrier;
        }
        this.ws.send(JSON.stringify({ buy: 1, price: Number(stake), parameters: parameters }));
        return true;
    }

    startHybridFallback() {
        if (this.fallbackInterval) return;
        const symbols = [
            '1HZ10V', '1HZ25V', '1HZ50V', '1HZ75V', '1HZ100V',
            'R_10', 'R_25', 'R_50', 'R_75', 'R_100',
            'BOOM500', 'BOOM1000', 'CRASH500', 'CRASH1000',
            'JD10', 'JD25', 'JD50', 'JD75', 'JD100',
            'NVDA', 'TSLA', 'AAPL', 'MSFT', 'AMZN', 'GOOGL', 'META', 'NFLX', 'SPY', 'QQQ',
            'frxEURUSD', 'frxGBPUSD', 'frxUSDJPY', 'frxAUDUSD', 'frxUSDCAD', 'frxNZDUSD', 'frxEURGBP', 'frxUSDCHF', 'frxAUDJPY', 'frxGBPJPY',
            'frxXAUUSD', 'frxXAGUSD', 'frxWTIUSD', 'UK Brent', 'Copper',
            'cryBTCUSD', 'cryETHUSD', 'cryLTCUSD'
        ];
        symbols.forEach(sym => { this.simPrices[sym] = 1000.00; });

        this.fallbackInterval = setInterval(() => {
            const now = Date.now();
            symbols.forEach(sym => {
                if (this.liveWsReceiving[sym] && (now - this.liveWsReceiving[sym] < 3000)) return;
                const step = (Math.random() - 0.485) * 0.5;
                this.simPrices[sym] = Number((this.simPrices[sym] + step).toFixed(2));
                this.processTick({ symbol: sym, quote: this.simPrices[sym], epoch: Math.floor(now / 1000), pip_size: 2 });
            });
        }, 350);
    }

    processTick(tick) {
        if (this.subscribers[tick.symbol]) this.subscribers[tick.symbol](tick);
        if (this.multiSubscribers[tick.symbol]) this.multiSubscribers[tick.symbol](tick);
    }

    subscribeTicks(symbol, cb) {
        this.subscribers[symbol] = cb;
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ ticks: symbol, subscribe: 1 }));
        }
    }

    subscribeMultipleTicks(arr, cb) {
        arr.forEach((sym, i) => {
            this.multiSubscribers[sym] = cb;
            if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                setTimeout(() => { this.ws.send(JSON.stringify({ ticks: sym, subscribe: 1 })); }, i * 30);
            }
        });
    }
}
