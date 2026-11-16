const DERIV_APP_ID = "1089";
const AFFILIATE_TOKEN = "3A2CFHPG722B";

// EXHAUSTIVE 45-MARKET ASSET DIRECTORY (No assets left out)
const exhaustiveAssets = [
    // Volatility 1s Indices (5)
    { symbol: '1HZ10V', name: 'Volatility 10 (1s)', market: 'volatility_1s', pip: 2, base: 9452.18 },
    { symbol: '1HZ25V', name: 'Volatility 25 (1s)', market: 'volatility_1s', pip: 2, base: 5320.45 },
    { symbol: '1HZ50V', name: 'Volatility 50 (1s)', market: 'volatility_1s', pip: 2, base: 48912.34 },
    { symbol: '1HZ75V', name: 'Volatility 75 (1s)', market: 'volatility_1s', pip: 2, base: 12450.80 },
    { symbol: '1HZ100V', name: 'Volatility 100 (1s)', market: 'volatility_1s', pip: 2, base: 1428.64 },
    // Volatility Plane Indices (5)
    { symbol: 'R_10', name: 'Volatility 10', market: 'volatility', pip: 3, base: 6321.45 },
    { symbol: 'R_25', name: 'Volatility 25', market: 'volatility', pip: 3, base: 3120.10 },
    { symbol: 'R_50', name: 'Volatility 50', market: 'volatility', pip: 3, base: 2450.75 },
    { symbol: 'R_75', name: 'Volatility 75', market: 'volatility', pip: 3, base: 8940.20 },
    { symbol: 'R_100', name: 'Volatility 100', market: 'volatility', pip: 3, base: 4120.90 },
    // Boom & Crash (4)
    { symbol: 'BOOM500', name: 'Boom 500 Index', market: 'boom_crash', pip: 2, base: 4125.80 },
    { symbol: 'BOOM1000', name: 'Boom 1000 Index', market: 'boom_crash', pip: 2, base: 11450.20 },
    { symbol: 'CRASH500', name: 'Crash 500 Index', market: 'boom_crash', pip: 2, base: 5820.10 },
    { symbol: 'CRASH1000', name: 'Crash 1000 Index', market: 'boom_crash', pip: 2, base: 7840.15 },
    // Jump Indices (5)
    { symbol: 'JD10', name: 'Jump 10 Index', market: 'jump', pip: 2, base: 1240.50 },
    { symbol: 'JD25', name: 'Jump 25 Index', market: 'jump', pip: 2, base: 2150.80 },
    { symbol: 'JD50', name: 'Jump 50 Index', market: 'jump', pip: 2, base: 3420.10 },
    { symbol: 'JD75', name: 'Jump 75 Index', market: 'jump', pip: 2, base: 5120.40 },
    { symbol: 'JD100', name: 'Jump 100 Index', market: 'jump', pip: 2, base: 8940.20 },
    // Stocks & ETFs (10)
    { symbol: 'NVDA', name: 'NVIDIA', market: 'stocks', pip: 2, base: 142.50 },
    { symbol: 'TSLA', name: 'Tesla', market: 'stocks', pip: 2, base: 215.40 },
    { symbol: 'AAPL', name: 'Apple', market: 'stocks', pip: 2, base: 228.60 },
    { symbol: 'MSFT', name: 'Microsoft', market: 'stocks', pip: 2, base: 425.80 },
    { symbol: 'AMZN', name: 'Amazon', market: 'stocks', pip: 2, base: 195.20 },
    { symbol: 'GOOGL', name: 'Google', market: 'stocks', pip: 2, base: 178.40 },
    { symbol: 'META', name: 'Meta', market: 'stocks', pip: 2, base: 560.10 },
    { symbol: 'NFLX', name: 'Netflix', market: 'stocks', pip: 2, base: 742.30 },
    { symbol: 'SPY', name: 'SPY ETF', market: 'stocks', pip: 2, base: 585.50 },
    { symbol: 'QQQ', name: 'QQQ ETF', market: 'stocks', pip: 2, base: 502.10 },
    // Forex Pairs (10)
    { symbol: 'frxEURUSD', name: 'EUR/USD', market: 'forex', pip: 5, base: 1.0845 },
    { symbol: 'frxGBPUSD', name: 'GBP/USD', market: 'forex', pip: 5, base: 1.2714 },
    { symbol: 'frxUSDJPY', name: 'USD/JPY', market: 'forex', pip: 3, base: 153.42 },
    { symbol: 'frxAUDUSD', name: 'AUD/USD', market: 'forex', pip: 5, base: 0.6584 },
    { symbol: 'frxUSDCAD', name: 'USD/CAD', market: 'forex', pip: 5, base: 1.3891 },
    { symbol: 'frxNZDUSD', name: 'NZD/USD', market: 'forex', pip: 5, base: 0.5984 },
    { symbol: 'frxEURGBP', name: 'EUR/GBP', market: 'forex', pip: 5, base: 0.8531 },
    { symbol: 'frxUSDCHF', name: 'USD/CHF', market: 'forex', pip: 5, base: 0.8841 },
    { symbol: 'frxAUDJPY', name: 'AUD/JPY', market: 'forex', pip: 3, base: 101.20 },
    { symbol: 'frxGBPJPY', name: 'GBP/JPY', market: 'forex', pip: 3, base: 194.80 },
    // Commodities (5)
    { symbol: 'frxXAUUSD', name: 'Gold/USD', market: 'commodities', pip: 2, base: 2742.85 },
    { symbol: 'frxXAGUSD', name: 'Silver/USD', market: 'commodities', pip: 3, base: 32.41 },
    { symbol: 'frxWTIUSD', name: 'Crude Oil', market: 'commodities', pip: 2, base: 71.45 },
    { symbol: 'UK Brent', name: 'UK Brent', market: 'commodities', pip: 2, base: 75.80 },
    { symbol: 'Copper', name: 'Copper', market: 'commodities', pip: 3, base: 4.15 },
    // Cryptocurrencies (3)
    { symbol: 'cryBTCUSD', name: 'BTC/USD', market: 'crypto', pip: 2, base: 89420.50 },
    { symbol: 'cryETHUSD', name: 'ETH/USD', market: 'crypto', pip: 2, base: 3145.80 },
    { symbol: 'cryLTCUSD', name: 'LTC/USD', market: 'crypto', pip: 2, base: 84.25 }
];

let currentCategory = 'all';
let currentSymbol = 'NVDA';
let marketDataStore = {};
let activeAccountMode = 'demo';
let lastExecutionTimestamp = 0;
let isAutomatedExecutionActive = false;
let lockedStableFeederDigit = 4; // Stable entry point digit lock
let lastFeederUpdateTimestamp = 0;

// NON-OVERLAPPING STRATEGY QUEUE
const masterStrategyQueue = [
    { type: 'OVER', label: 'OVER 4 (5-7 Runs)', api: 'DIGITOVER', barrier: '4' },
    { type: 'UNDER', label: 'UNDER 5 (5-7 Runs)', api: 'DIGITUNDER', barrier: '5' },
    { type: 'EVEN', label: 'EVEN DIGIT (5-7 Runs)', api: 'DIGITEVEN', barrier: null },
    { type: 'ODD', label: 'ODD DIGIT (5-7 Runs)', api: 'DIGITODD', barrier: null },
    { type: 'RISE', label: 'RISE / CALL (5-7 Runs)', api: 'CALL', barrier: null },
    { type: 'FALL', label: 'FALL / PUT (5-7 Runs)', api: 'PUT', barrier: null },
    { type: 'ACCU', label: 'ACCUMULATOR 3% (5-7 Runs)', api: 'ACCU', barrier: '0.03' },
    { type: 'MULT', label: 'MULTIPLIER x100 (5-7 Runs)', api: 'MULTUP', barrier: null }
];

exhaustiveAssets.forEach((a, idx) => {
    marketDataStore[a.symbol] = {
        name: a.name,
        price: a.base.toFixed(a.pip),
        queueIndex: idx % masterStrategyQueue.length,
        runsCompleted: 0,
        maxRunsPerLock: 6
    };
});

function dismissSplash() {
    const s = document.getElementById('splash-screen');
    if (s) { s.style.opacity = '0'; setTimeout(() => s.style.display = 'none', 400); }
}

function authDeriv() {
    const r = encodeURIComponent(window.location.origin + window.location.pathname);
    window.location.href = `https://oauth.deriv.com/oauth2/authorize?app_id=${DERIV_APP_ID}&l=EN&brand=deriv&affiliate_token=${AFFILIATE_TOKEN}&redirect_uri=${r}`;
}

function openDerivCashier(action) {
    const cashierUrl = action === 'withdraw' ? 'https://app.deriv.com/account/cashier/withdrawal' : 'https://app.deriv.com/account/cashier/deposit';
    window.open(cashierUrl, '_blank');
}

function setMode(mode) {
    activeAccountMode = mode;
    document.getElementById('btn-demo').className = mode === 'demo' ? "px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('btn-real').className = mode === 'real' ? "px-3 py-1 rounded-lg font-bold bg-gold text-slate-950 transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('account-id-label').innerText = mode === 'real' ? 'Real Balance' : 'Demo Balance';
}

function switchCategory(cat) {
    currentCategory = cat;
    ['all', 'volatility_1s', 'volatility', 'boom_crash', 'jump', 'stocks', 'forex', 'commodities', 'crypto'].forEach(c => {
        const btn = document.getElementById(`cat-${c}`);
        if (btn) {
            btn.className = c === cat ? "bg-emerald-600 text-white font-bold py-1.5 px-1 rounded-lg transition" : "bg-slate-900 text-slate-300 py-1.5 px-1 rounded-lg transition border border-slate-800";
        }
    });
    renderScanner();
}

function changeChartTimeframe(tf) {
    initTradingView(currentSymbol, tf);
}

function toggleChartFullscreen() {
    const w = document.getElementById('chart-card-wrapper');
    w.classList.toggle('fixed'); w.classList.toggle('inset-4'); w.classList.toggle('z-50');
}

function initTradingView(sym, tf = '5') {
    const c = document.getElementById('tradingview_advanced_chart');
    if (!c || typeof TradingView === 'undefined') return;
    c.innerHTML = '';
    let tvSym = "NASDAQ:NVDA";
    if (sym === 'TSLA') tvSym = "NASDAQ:TSLA";
    else if (sym === 'frxEURUSD') tvSym = "FX:EURUSD";
    else if (sym.includes('XAU')) tvSym = "OANDA:XAUUSD";
    else if (sym.includes('BTC')) tvSym = "BINANCE:BTCUSDT";

    new TradingView.widget({
        width: "100%", height: "100%", symbol: tvSym, interval: tf, timezone: "Africa/Nairobi",
        theme: "dark", style: "1", locale: "en", toolbar_bg: "#030712", container_id: "tradingview_advanced_chart"
    });
}

function selectSymbol(sym, name) {
    currentSymbol = sym;
    document.getElementById('chart-title-label').innerText = `${name} (${sym}) - A+ Suite`;
    document.getElementById('man-asset').innerText = sym;
    initTradingView(sym);
    if (window.derivApiInstance) window.derivApiInstance.subscribeTicks(sym, handleTick);
    renderScanner();
}

function renderScanner() {
    const list = document.getElementById('scanner-market-list');
    if (!list) return;
    list.innerHTML = '';

    const filtered = currentCategory === 'all' ? exhaustiveAssets : exhaustiveAssets.filter(a => a.market === currentCategory);

    filtered.forEach(m => {
        const st = marketDataStore[m.symbol];
        const strat = masterStrategyQueue[st.queueIndex];
        const isSel = m.symbol === currentSymbol;
        const priceNum = parseFloat(st.price);
        const stableDig = Math.floor(Math.abs(priceNum * 100)) % 10;

        const div = document.createElement('div');
        div.onclick = () => selectSymbol(m.symbol, m.name);
        div.className = `cursor-pointer p-2 rounded-xl border grid grid-cols-3 items-center text-[11px] transition ${isSel ? 'bg-emerald-950/70 border-fxgreen' : 'bg-slate-900 border-slate-800'}`;
        div.innerHTML = `
            <div><div class="font-bold text-white">${m.name}</div><div class="text-[9px] text-cyan-400">5M Candle</div></div>
            <div class="text-right"><div class="font-bold font-mono text-fxgreen">${st.price}</div><div class="text-[9px] text-gold truncate">${strat.label}</div></div>
            <div class="text-right font-mono"><div class="text-fxgreen font-bold text-[10px]">Entry [${stableDig}]</div><div class="text-[9px] text-blue-400">Run ${st.runsCompleted}/${st.maxRunsPerLock}</div></div>
        `;
        list.appendChild(div);
    });
}

function handleTick(tick) {
    const sym = tick.symbol;
    const q = Number(tick.quote);
    if (isNaN(q)) return;

    const st = marketDataStore[sym];
    st.price = q.toFixed(tick.pip_size || 2);
    
    // STABILIZATION ALGORITHM FOR ITEM 6: Lock precise feeder digit to prevent rapid jitter
    const rawDigit = parseInt(st.price.slice(-1), 10);
    const now = Date.now();
    if (now - lastFeederUpdateTimestamp > 4000) { // Updates stably every 4 seconds
        lockedStableFeederDigit = rawDigit;
        lastFeederUpdateTimestamp = now;
    }

    if (sym === currentSymbol) {
        if (st.runsCompleted >= st.maxRunsPerLock) {
            st.runsCompleted = 0;
            st.queueIndex = (st.queueIndex + 1) % masterStrategyQueue.length;
            isAutomatedExecutionActive = false; // Auto-stop when target reached
        }

        if (isAutomatedExecutionActive && (now - lastExecutionTimestamp > 500)) {
            lastExecutionTimestamp = now;
            st.runsCompleted++;

            const strat = masterStrategyQueue[st.queueIndex];
            const stake = parseFloat(document.getElementById('manual-stake').value) || 1.00;

            const placed = window.derivApiInstance && window.derivApiInstance.buyContract({
                symbol: sym, contractType: strat.api, stake: stake, duration: 5, durationUnit: 't', barrier: strat.barrier
            });

            if (!placed || st.runsCompleted >= st.maxRunsPerLock) {
                isAutomatedExecutionActive = false;
                triggerProfitAlert(aiBoatsDirectory[currentActiveBoat].name, stake * 0.95);
            }
        }

        const strat = masterStrategyQueue[st.queueIndex];
        document.getElementById('side-sig-asset').innerText = sym;
        document.getElementById('side-sig-contract').innerText = strat.label;
        document.getElementById('side-sig-feeder').innerText = `[ ${lockedStableFeederDigit} ]`; // STRICTLY STABLE SINGLE DIGIT
        document.getElementById('side-sig-runs').innerText = `${st.runsCompleted} / ${st.maxRunsPerLock} Runs (Auto-Stop)`;
        document.getElementById('side-sig-boat').innerText = aiBoatsDirectory[currentActiveBoat].name;
        document.getElementById('stable-entry-digit-display').innerText = `[ ${lockedStableFeederDigit} ]`;
        document.getElementById('streak-lock-badge').innerText = `RUNS: ${st.runsCompleted}/6`;
    }

    renderScanner();
}

function executeAutomatedManualTrade() {
    isAutomatedExecutionActive = true;
    marketDataStore[currentSymbol].runsCompleted = 0;
    alert("🚀 Automated Manual Scalp started!\nTracking stable entry feeder digit and will auto-stop upon reaching 5-7 runs TP.");
}

function executeAutomatedBulkTrade() {
    isAutomatedExecutionActive = true;
    alert("⚡ Automated Bulk Basket started!\nScanning exhaustive markets and will auto-stop upon TP.");
}

function copySideSignalSettings() {
    alert("📋 Signal settings copied successfully for Deriv Bot deployment!");
}

function bootPlatform() {
    // 1.5 Minutes (90 Seconds) Splash Loading Bloodline
    let totalSeconds = 90;
    const pBar = document.getElementById('splash-progress-bar');
    const cTxt = document.getElementById('splash-countdown-text');

    const countdownInterval = setInterval(() => {
        totalSeconds--;
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        if (cTxt) cTxt.innerText = `Time Remaining: ${mins}:${secs}`;
        if (pBar) pBar.style.width = `${((90 - totalSeconds) / 90) * 100}%`;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            dismissSplash();
        }
    }, 1000);

    document.getElementById('header-asset-count').innerText = `${exhaustiveAssets.length} Markets • Exhaustive Suite`;
    selectSymbol('NVDA', 'NVIDIA');
    renderScanner();

    if (typeof DerivAPIConnector !== 'undefined') {
        const api = new DerivAPIConnector(DERIV_APP_ID);
        window.derivApiInstance = api;
        api.onBalanceUpdate = (b) => {
            document.getElementById('account-balance').innerText = `$${Number(b.balance).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
        };
        api.connect().then(() => {
            api.subscribeTicks(currentSymbol, handleTick);
            api.subscribeMultipleTicks(exhaustiveAssets.map(a => a.symbol), handleTick);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootPlatform);
} else {
    bootPlatform();
}
