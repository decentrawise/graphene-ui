import {Apis} from "@decentrawise/graphenejs-ws";
import chainIds from "./lib/chain/chainIds";

/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 */

/**
 * Determine if we are running on testnet or mainnet
 * @private
 */
function _isTestnet() {
    // treat every other chain as testnet
    return Apis.instance().chain_id !== chainIds.MAIN_NET;
}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "Graphene";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://app.mydex.org";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://faucet.mydex.org/onboarding",
        show: true,
        editable: false,
        referrer: "onboarding"
    };
}

export function getTestFaucet() {
    // fixme should be solved by introducing _isTestnet into getFaucet and fixing the mess in the Settings when fetching faucet address
    return {
        url: "https://faucet.testnet.mydex.org",
        show: true,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-ico.png").default;
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "darkTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "wallet";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return ["CORE", "USD", "CNY", "BTC", "EUR", "GBP"];
}

export function getDefaultMarket() {
    if (_isTestnet()) {
        return "USD_TEST";
    }
    return "USD_CORE";
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */
export function getMyMarketsBases() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return ["CORE", "BTC", "CNY", "USD", "USDT", "ETH"];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    let tokens = {
        nativeTokens: [
            "BTC",
            "BTC1.0",
            "BTS",
            "CNY",
            "CNY1.0",
            "EUR",
            "EUR1.0",
            "GOLD",
            "GOLD1.0",
            "RUBLE",
            "RUB1.0",
            "SILVER",
            "SILVER1.0",
            "USD",
            "USD1.0"
        ],
        gdexTokens: [
            "GDEX.BTC",
            "GDEX.BTO",
            "GDEX.EOS",
            "GDEX.ETH",
            "GDEX.BKBT",
            "GDEX.GXC",
            "GDEX.SEER",
            "GDEX.FOTA",
            "GDEX.JRC",
            "GDEX.EOSDAC",
            "GDEX.MTS",
            "GDEX.GUSD",
            "GDEX.IQ",
            "GDEX.NULS",
            "GDEX.USDT"
        ],
        openledgerTokens: [],
        rudexTokens: [],
        piratecashTockens: [
            "PIRATE.PIRATE",
            "PIRATE.BTC",
            "PIRATE.LTC",
            "PIRATE.BCC",
            "PIRATE.DOGE",
            "PIRATE.COSA"
        ],
        xbtsxTokens: [
            "XBTSX.STH",
            "XBTSX.POST",
            "XBTSX.DOGE",
            "XBTSX.BTC",
            "XBTSX.LTC",
            "XBTSX.DASH",
            "XBTSX.BTG",
            "XBTSX.NVC",
            "XBTSX.42",
            "XBTSX.NMC",
            "XBTSX.WAVES",
            "XBTSX.ETH",
            "XBTSX.ONION",
            "XBTSX.EGC",
            "XBTSX.BCH",
            "XBTSX.MDL",
            "XBTSX.SKY",
            "XBTSX.SLB",
            "XBTSX.GRS",
            "XBTSX.XSM",
            "XBTSX.XBB",
            "XBTSX.EXR",
            "XBTSX.BCCX",
            "XBTSX.GUAP",
            "XBTSX.AXAI",
            "XBTSX.TUSD",
            "XBTSX.USDT",
            "XBTSX.RVN",
            "XBTSX.TRD",
            "XBTSX.SCH",
            "XBTSX.USDN",
            "XBTSX.FIL",
            "XBTSX.EOS",
            "XBTSX.RUB",
            "XBTSX.USD",
            "XBTSX.EUR",
            "XBTSX.VTC",
            "XBTSX.USDC",
            "XBTSX.BAT",
            "XBTSX.PING",
            "XBTSX.ATRI",
            "XBTSX.BNB",
            "XBTSX.BUSD",
            "XBTSX.TRX",
            "XBTSX.HT",
            "XBTSX.XRP",
            "XBTSX.SHU",
            "XBTSX.UNI",
            "XBTSX.HIVE",
            "XBTSX.EMC",
            "XBTSX.NESS",
            "XBTSX.PPC",
            "XBTSX.SHIB",
            "XBTSX.HBD",
            "XBTSX.PIVX",
            "XBTSX.AVAX",
            "XBTSX.RTM",
            "XBTSX.XAUT",
            "XBTSX.TUSC",
            "XBTSX.MATIC",
            "XBTSX.HVQ",
            "XBTSX.TCG",
            "XBTSX.NCH",
            "XBTSX.LUNR",
            "XBTSX.LUNAREUM"
        ],
        honestTokens: [
            "HONEST",
            "HONEST.MONEY",
            "HONEST.AGORISM",
            "HONEST.DEV",
            "HONEST.CNY",
            "HONEST.USD",
            "HONEST.BTC",
            "HONEST.XAU",
            "HONEST.XAG",
            "HONEST.ETH",
            "HONEST.XRP",
            "HONEST.XRP1",
            "HONEST.ETH1",
            "HONEST.USDSHORT",
            "HONEST.BTCSHORT",
            "HONEST.ADA",
            "HONEST.DOT",
            "HONEST.LTC",
            "HONEST.SOL",
            "HONEST.XMR",
            "HONEST.ATOM",
            "HONEST.XLM",
            "HONEST.ALGO",
            "HONEST.FIL",
            "HONEST.EOS",
            "HONEST.RUB",
            "HONEST.EUR",
            "HONEST.GBP",
            "HONEST.JPY",
            "HONEST.KRW",
            "HONEST.ADASHORT",
            "HONEST.DOTSHORT",
            "HONEST.LTCSHORT",
            "HONEST.SOLSHORT",
            "HONEST.XMRSHORT",
            "HONEST.ATOMSHORT",
            "HONEST.XLMSHORT",
            "HONEST.ALGOSHORT",
            "HONEST.FILSHORT",
            "HONEST.EOSSHORT",
            "HONEST.RUBSHORT",
            "HONEST.EURSHORT",
            "HONEST.GBPSHORT",
            "HONEST.JPYSHORT",
            "HONEST.KRWSHORT",
            "HONEST.XRPSHORT",
            "HONEST.ETHSHORT",
            "HONEST.XAUSHORT",
            "HONEST.XAGSHORT",
            "HONEST.CNYSHORT"
        ],
        ioxbankTokens: ["IOB.XRP", "IOB.XLM"],
        otherTokens: ["CVCOIN", "HERO", "OCT", "HERTZ", "YOYOW"]
    };

    let allTokens = [];
    for (let type in tokens) {
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = []) {
    if (_isTestnet()) {
        return [["USD", "TEST"]];
    }
    return [
        ["USD", "BTS"],
        ["USD", "GOLD"],
        ["USD", "HERO"],
        ["USD", "GDEX.BTC"],
        ["USD", "GDEX.ETH"],
        ["USD", "GDEX.EOS"],
        ["USD", "GDEX.BTO"],
        ["USD", "HONEST.BTC"],
        ["USD", "HONEST.USD"],
        ["USD", "HONEST.BTCSHORT"],
        ["USD", "HONEST.USDSHORT"],
        ["USD", "HERTZ"],
        ["USD", "URTHR"],
        ["USD", "SKULD"],
        ["USD", "VERTHANDI"],
        ["CNY", "BTS"],
        ["CNY", "USD"],
        ["CNY", "YOYOW"],
        ["CNY", "OCT"],
        ["CNY", "GDEX.BTC"],
        ["CNY", "GDEX.ETH"],
        ["CNY", "GDEX.EOS"],
        ["CNY", "GDEX.BTO"],
        ["CNY", "GDEX.SEER"],
        ["CNY", "GDEX.BKBT"],
        ["CNY", "GDEX.USDT"],
        ["CNY", "GDEX.GXC"],
        ["CNY", "HONEST.BTC"],
        ["CNY", "HONEST.USD"],
        ["CNY", "HONEST.BTCSHORT"],
        ["CNY", "HONEST.USDSHORT"],
        ["CNY", "HONEST.CNY"],
        ["CNY", "HERTZ"],
        ["CNY", "URTHR"],
        ["CNY", "SKULD"],
        ["CNY", "VERTHANDI"],
        ["CORE", "RUBLE"],
        ["CORE", "HERO"],
        ["CORE", "OCT"],
        ["CORE", "SILVER"],
        ["CORE", "GOLD"],
        ["CORE", "GDEX.BTC"],
        ["CORE", "GDEX.ETH"],
        ["CORE", "GDEX.EOS"],
        ["CORE", "GDEX.BTO"],
        ["CORE", "GDEX.USDT"],
        ["CORE", "XBTSX.BTC"],
        ["CORE", "XBTSX.ETH"],
        ["CORE", "XBTSX.EUR"],
        ["CORE", "XBTSX.RUB"],
        ["CORE", "XBTSX.STH"],
        ["CORE", "XBTSX.TUSD"],
        ["CORE", "XBTSX.WAVES"],
        ["CORE", "XBTSX.USD"],
        ["CORE", "XBTSX.USDC"],
        ["CORE", "XBTSX.USDN"],
        ["CORE", "XBTSX.USDT"],
        ["CORE", "HONEST"],
        ["CORE", "HONEST.MONEY"],
        ["CORE", "HONEST.AGORISM"],
        ["CORE", "HONEST.DEV"],
        ["CORE", "HONEST.CNY"],
        ["CORE", "HONEST.USD"],
        ["CORE", "HONEST.BTC"],
        ["CORE", "HONEST.XAU"],
        ["CORE", "HONEST.XAG"],
        ["CORE", "HONEST.ETH"],
        ["CORE", "HONEST.XRP"],
        ["CORE", "HONEST.XRP1"],
        ["CORE", "HONEST.ETH1"],
        ["CORE", "HONEST.USDSHORT"],
        ["CORE", "HONEST.BTCSHORT"],
        ["CORE", "HONEST.ADA"],
        ["CORE", "HONEST.DOT"],
        ["CORE", "HONEST.LTC"],
        ["CORE", "HONEST.SOL"],
        ["CORE", "HONEST.XMR"],
        ["CORE", "HONEST.ATOM"],
        ["CORE", "HONEST.XLM"],
        ["CORE", "HONEST.ALGO"],
        ["CORE", "HONEST.FIL"],
        ["CORE", "HONEST.EOS"],
        ["CORE", "HONEST.RUB"],
        ["CORE", "HONEST.EUR"],
        ["CORE", "HONEST.GBP"],
        ["CORE", "HONEST.JPY"],
        ["CORE", "HONEST.KRW"],
        ["CORE", "HONEST.ADASHORT"],
        ["CORE", "HONEST.DOTSHORT"],
        ["CORE", "HONEST.LTCSHORT"],
        ["CORE", "HONEST.SOLSHORT"],
        ["CORE", "HONEST.XMRSHORT"],
        ["CORE", "HONEST.ATOMSHORT"],
        ["CORE", "HONEST.XLMSHORT"],
        ["CORE", "HONEST.ALGOSHORT"],
        ["CORE", "HONEST.FILSHORT"],
        ["CORE", "HONEST.EOSSHORT"],
        ["CORE", "HONEST.RUBSHORT"],
        ["CORE", "HONEST.EURSHORT"],
        ["CORE", "HONEST.GBPSHORT"],
        ["CORE", "HONEST.JPYSHORT"],
        ["CORE", "HONEST.KRWSHORT"],
        ["CORE", "HONEST.XRPSHORT"],
        ["CORE", "HONEST.ETHSHORT"],
        ["CORE", "HONEST.XAUSHORT"],
        ["CORE", "HONEST.XAGSHORT"],
        ["CORE", "HONEST.CNYSHORT"],
        ["CORE", "IOB.XRP"],
        ["CORE", "IOB.XLM"],
        ["CORE", "HERTZ"],
        ["CORE", "URTHR"],
        ["CORE", "SKULD"],
        ["CORE", "VERTHANDI"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    if (_isTestnet()) {
        return [];
    }
    return ["XBTSX.", "GDEX.", "HONEST.", "IOB.", "PIRATE."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "XBTSX.", "bit"
    return [];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    const allowedGateways = [
        "TRADE",
        "OPEN", // keep to display the warning icon, permanently disabled in gateways.js
        "RUDEX", // keep to display the warning icon, permanently disabled in gateways.js
        "GDEX",
        "PIRATE",
        "XBTSX",
        "IOB",
        "CITADEL", // keep to display the warning icon, permanently disabled in gateways.js
        "BRIDGE", // keep to display the warning icon, permanently disabled in gateways.js
        "SPARKDEX" // keep to display the warning icon, permanently disabled in gateways.js
    ];
    if (!gateway) {
        // answers the question: are any allowed?
        return allowedGateways.length > 0;
    }
    return allowedGateways.indexOf(gateway) >= 0;
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    if (_isTestnet()) {
        assetSymbol = "NOTIFICATIONS";
    } else {
        assetSymbol = "TEST";
    }
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the Graphene UI."
    };
}
