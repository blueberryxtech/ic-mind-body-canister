// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6bT7h":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6afa515121fa24d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"d9Vw7":[function(require,module,exports) {
/** @module AuthClient */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IdbStorage", ()=>(0, _storage.IdbStorage));
parcelHelpers.export(exports, "LocalStorage", ()=>(0, _storage.LocalStorage));
parcelHelpers.export(exports, "KEY_STORAGE_DELEGATION", ()=>(0, _storage.KEY_STORAGE_DELEGATION));
parcelHelpers.export(exports, "KEY_STORAGE_KEY", ()=>(0, _storage.KEY_STORAGE_KEY));
parcelHelpers.export(exports, "IdbKeyVal", ()=>(0, _db.IdbKeyVal));
parcelHelpers.export(exports, "ERROR_USER_INTERRUPT", ()=>ERROR_USER_INTERRUPT);
/**
 * Tool to manage authentication and identity
 * @see {@link AuthClient}
 */ parcelHelpers.export(exports, "AuthClient", ()=>AuthClient);
var _agent = require("@dfinity/agent");
var _identity = require("@dfinity/identity");
var _idleManager = require("./idleManager");
var _storage = require("./storage");
var _db = require("./db");
parcelHelpers.exportAll(_idleManager, exports);
const IDENTITY_PROVIDER_DEFAULT = "https://identity.ic0.app";
const IDENTITY_PROVIDER_ENDPOINT = "#authorize";
const ECDSA_KEY_LABEL = "ECDSA";
const ED25519_KEY_LABEL = "Ed25519";
const INTERRUPT_CHECK_INTERVAL = 500;
const ERROR_USER_INTERRUPT = "UserInterrupt";
class AuthClient {
    constructor(_identity, _key, _chain, _storage, idleManager, _createOptions, // A handle on the IdP window.
    _idpWindow, // The event handler for processing events from the IdP.
    _eventHandler){
        var _a;
        this._identity = _identity;
        this._key = _key;
        this._chain = _chain;
        this._storage = _storage;
        this.idleManager = idleManager;
        this._createOptions = _createOptions;
        this._idpWindow = _idpWindow;
        this._eventHandler = _eventHandler;
        const logout = this.logout.bind(this);
        const idleOptions = _createOptions === null || _createOptions === void 0 ? void 0 : _createOptions.idleOptions;
        /**
         * Default behavior is to clear stored identity and reload the page.
         * By either setting the disableDefaultIdleCallback flag or passing in a custom idle callback, we will ignore this config
         */ if (!(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.onIdle) && !(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.disableDefaultIdleCallback)) (_a = this.idleManager) === null || _a === void 0 || _a.registerCallback(()=>{
            logout();
            location.reload();
        });
    }
    /**
     * Create an AuthClient to manage authentication and identity
     * @constructs {@link AuthClient}
     * @param {AuthClientCreateOptions} options
     * @see {@link AuthClientCreateOptions}
     * @param options.identity Optional Identity to use as the base
     * @see {@link SignIdentity}
     * @param options.storage Storage mechanism for delegration credentials
     * @see {@link AuthClientStorage}
     * @param options.keyType Type of key to use for the base key
     * @param {IdleOptions} options.idleOptions Configures an {@link IdleManager}
     * @see {@link IdleOptions}
     * Default behavior is to clear stored identity and reload the page when a user goes idle, unless you set the disableDefaultIdleCallback flag or pass in a custom idle callback.
     * @example
     * const authClient = await AuthClient.create({
     *   idleOptions: {
     *     disableIdle: true
     *   }
     * })
     */ static async create(options = {}) {
        var _a, _b, _c;
        const storage = (_a = options.storage) !== null && _a !== void 0 ? _a : new (0, _storage.IdbStorage)();
        const keyType = (_b = options.keyType) !== null && _b !== void 0 ? _b : ECDSA_KEY_LABEL;
        let key = null;
        if (options.identity) key = options.identity;
        else {
            let maybeIdentityStorage = await storage.get((0, _storage.KEY_STORAGE_KEY));
            if (!maybeIdentityStorage && (0, _storage.isBrowser)) // Attempt to migrate from localstorage
            try {
                const fallbackLocalStorage = new (0, _storage.LocalStorage)();
                const localChain = await fallbackLocalStorage.get((0, _storage.KEY_STORAGE_DELEGATION));
                const localKey = await fallbackLocalStorage.get((0, _storage.KEY_STORAGE_KEY));
                // not relevant for Ed25519
                if (localChain && localKey && keyType === ECDSA_KEY_LABEL) {
                    console.log("Discovered an identity stored in localstorage. Migrating to IndexedDB");
                    await storage.set((0, _storage.KEY_STORAGE_DELEGATION), localChain);
                    await storage.set((0, _storage.KEY_STORAGE_KEY), localKey);
                    maybeIdentityStorage = localChain;
                    // clean up
                    await fallbackLocalStorage.remove((0, _storage.KEY_STORAGE_DELEGATION));
                    await fallbackLocalStorage.remove((0, _storage.KEY_STORAGE_KEY));
                }
            } catch (error) {
                console.error("error while attempting to recover localstorage: " + error);
            }
            if (maybeIdentityStorage) try {
                if (typeof maybeIdentityStorage === "object") {
                    if (keyType === ED25519_KEY_LABEL && typeof maybeIdentityStorage === "string") key = await (0, _identity.Ed25519KeyIdentity).fromJSON(maybeIdentityStorage);
                    else key = await (0, _identity.ECDSAKeyIdentity).fromKeyPair(maybeIdentityStorage);
                } else if (typeof maybeIdentityStorage === "string") // This is a legacy identity, which is a serialized Ed25519KeyIdentity.
                key = (0, _identity.Ed25519KeyIdentity).fromJSON(maybeIdentityStorage);
            } catch (e) {
            // Ignore this, this means that the localStorage value isn't a valid Ed25519KeyIdentity or ECDSAKeyIdentity
            // serialization.
            }
        }
        let identity = new (0, _agent.AnonymousIdentity)();
        let chain = null;
        if (key) try {
            const chainStorage = await storage.get((0, _storage.KEY_STORAGE_DELEGATION));
            if (typeof chainStorage === "object" && chainStorage !== null) throw new Error("Delegation chain is incorrectly stored. A delegation chain should be stored as a string.");
            if (options.identity) identity = options.identity;
            else if (chainStorage) {
                chain = (0, _identity.DelegationChain).fromJSON(chainStorage);
                // Verify that the delegation isn't expired.
                if (!(0, _identity.isDelegationValid)(chain)) {
                    await _deleteStorage(storage);
                    key = null;
                } else identity = (0, _identity.DelegationIdentity).fromDelegation(key, chain);
            }
        } catch (e) {
            console.error(e);
            // If there was a problem loading the chain, delete the key.
            await _deleteStorage(storage);
            key = null;
        }
        let idleManager = undefined;
        if ((_c = options.idleOptions) === null || _c === void 0 ? void 0 : _c.disableIdle) idleManager = undefined;
        else if (chain || options.identity) idleManager = (0, _idleManager.IdleManager).create(options.idleOptions);
        if (!key) {
            // Create a new key (whether or not one was in storage).
            if (keyType === ED25519_KEY_LABEL) {
                key = await (0, _identity.Ed25519KeyIdentity).generate();
                await storage.set((0, _storage.KEY_STORAGE_KEY), JSON.stringify(key.toJSON()));
            } else {
                if (options.storage && keyType === ECDSA_KEY_LABEL) console.warn(`You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${ED25519_KEY_LABEL}' as the key type, as it can serialize to a string`);
                key = await (0, _identity.ECDSAKeyIdentity).generate();
                await storage.set((0, _storage.KEY_STORAGE_KEY), key.getKeyPair());
            }
        }
        return new this(identity, key, chain, storage, idleManager, options);
    }
    async _handleSuccess(message, onSuccess) {
        var _a, _b, _c;
        const delegations = message.delegations.map((signedDelegation)=>{
            return {
                delegation: new (0, _identity.Delegation)(signedDelegation.delegation.pubkey, signedDelegation.delegation.expiration, signedDelegation.delegation.targets),
                signature: signedDelegation.signature.buffer
            };
        });
        const delegationChain = (0, _identity.DelegationChain).fromDelegations(delegations, message.userPublicKey.buffer);
        const key = this._key;
        if (!key) return;
        this._chain = delegationChain;
        this._identity = (0, _identity.DelegationIdentity).fromDelegation(key, this._chain);
        (_a = this._idpWindow) === null || _a === void 0 || _a.close();
        if (!this.idleManager) {
            const idleOptions = (_b = this._createOptions) === null || _b === void 0 ? void 0 : _b.idleOptions;
            this.idleManager = (0, _idleManager.IdleManager).create(idleOptions);
            if (!(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.onIdle) && !(idleOptions === null || idleOptions === void 0 ? void 0 : idleOptions.disableDefaultIdleCallback)) (_c = this.idleManager) === null || _c === void 0 || _c.registerCallback(()=>{
                this.logout();
                location.reload();
            });
        }
        this._removeEventListener();
        delete this._idpWindow;
        if (this._chain) await this._storage.set((0, _storage.KEY_STORAGE_DELEGATION), JSON.stringify(this._chain.toJSON()));
        // onSuccess should be the last thing to do to avoid consumers
        // interfering by navigating or refreshing the page
        onSuccess === null || onSuccess === void 0 || onSuccess();
    }
    getIdentity() {
        return this._identity;
    }
    async isAuthenticated() {
        return !this.getIdentity().getPrincipal().isAnonymous() && this._chain !== null;
    }
    /**
     * AuthClient Login -
     * Opens up a new window to authenticate with Internet Identity
     * @param {AuthClientLoginOptions} options
     * @param options.identityProvider Identity provider
     * @param options.maxTimeToLive Expiration of the authentication in nanoseconds
     * @param options.derivationOrigin Origin for Identity Provider to use while generating the delegated identity
     * @param options.windowOpenerFeatures Configures the opened authentication window
     * @param options.onSuccess Callback once login has completed
     * @param options.onError Callback in case authentication fails
     * @example
     * const authClient = await AuthClient.create();
     * authClient.login({
     *  identityProvider: 'http://<canisterID>.127.0.0.1:8000',
     *  maxTimeToLive: BigInt (7) * BigInt(24) * BigInt(3_600_000_000_000), // 1 week
     *  windowOpenerFeatures: "toolbar=0,location=0,menubar=0,width=500,height=500,left=100,top=100",
     *  onSuccess: () => {
     *    console.log('Login Successful!');
     *  },
     *  onError: (error) => {
     *    console.error('Login Failed: ', error);
     *  }
     * });
     */ async login(options) {
        var _a, _b, _c, _d;
        // Set default maxTimeToLive to 8 hours
        const defaultTimeToLive = /* hours */ BigInt(8) * /* nanoseconds */ BigInt(3600000000000);
        // Create the URL of the IDP. (e.g. https://XXXX/#authorize)
        const identityProviderUrl = new URL(((_a = options === null || options === void 0 ? void 0 : options.identityProvider) === null || _a === void 0 ? void 0 : _a.toString()) || IDENTITY_PROVIDER_DEFAULT);
        // Set the correct hash if it isn't already set.
        identityProviderUrl.hash = IDENTITY_PROVIDER_ENDPOINT;
        // If `login` has been called previously, then close/remove any previous windows
        // and event listeners.
        (_b = this._idpWindow) === null || _b === void 0 || _b.close();
        this._removeEventListener();
        // Add an event listener to handle responses.
        this._eventHandler = this._getEventHandler(identityProviderUrl, Object.assign({
            maxTimeToLive: (_c = options === null || options === void 0 ? void 0 : options.maxTimeToLive) !== null && _c !== void 0 ? _c : defaultTimeToLive
        }, options));
        window.addEventListener("message", this._eventHandler);
        // Open a new window with the IDP provider.
        this._idpWindow = (_d = window.open(identityProviderUrl.toString(), "idpWindow", options === null || options === void 0 ? void 0 : options.windowOpenerFeatures)) !== null && _d !== void 0 ? _d : undefined;
        // Check if the _idpWindow is closed by user.
        const checkInterruption = ()=>{
            // The _idpWindow is opened and not yet closed by the client
            if (this._idpWindow) {
                if (this._idpWindow.closed) this._handleFailure(ERROR_USER_INTERRUPT, options === null || options === void 0 ? void 0 : options.onError);
                else setTimeout(checkInterruption, INTERRUPT_CHECK_INTERVAL);
            }
        };
        checkInterruption();
    }
    _getEventHandler(identityProviderUrl, options) {
        return async (event)=>{
            var _a, _b, _c;
            if (event.origin !== identityProviderUrl.origin) {
                console.warn(`WARNING: expected origin '${identityProviderUrl.origin}', got '${event.origin}' (ignoring)`);
                return;
            }
            const message = event.data;
            switch(message.kind){
                case "authorize-ready":
                    {
                        // IDP is ready. Send a message to request authorization.
                        const request = {
                            kind: "authorize-client",
                            sessionPublicKey: new Uint8Array((_a = this._key) === null || _a === void 0 ? void 0 : _a.getPublicKey().toDer()),
                            maxTimeToLive: options === null || options === void 0 ? void 0 : options.maxTimeToLive,
                            derivationOrigin: (_b = options === null || options === void 0 ? void 0 : options.derivationOrigin) === null || _b === void 0 ? void 0 : _b.toString()
                        };
                        (_c = this._idpWindow) === null || _c === void 0 || _c.postMessage(request, identityProviderUrl.origin);
                        break;
                    }
                case "authorize-client-success":
                    // Create the delegation chain and store it.
                    try {
                        await this._handleSuccess(message, options === null || options === void 0 ? void 0 : options.onSuccess);
                    } catch (err) {
                        this._handleFailure(err.message, options === null || options === void 0 ? void 0 : options.onError);
                    }
                    break;
                case "authorize-client-failure":
                    this._handleFailure(message.text, options === null || options === void 0 ? void 0 : options.onError);
                    break;
                default:
                    break;
            }
        };
    }
    _handleFailure(errorMessage, onError) {
        var _a;
        (_a = this._idpWindow) === null || _a === void 0 || _a.close();
        onError === null || onError === void 0 || onError(errorMessage);
        this._removeEventListener();
        delete this._idpWindow;
    }
    _removeEventListener() {
        if (this._eventHandler) window.removeEventListener("message", this._eventHandler);
        this._eventHandler = undefined;
    }
    async logout(options = {}) {
        await _deleteStorage(this._storage);
        // Reset this auth client to a non-authenticated state.
        this._identity = new (0, _agent.AnonymousIdentity)();
        this._chain = null;
        if (options.returnTo) try {
            window.history.pushState({}, "", options.returnTo);
        } catch (e) {
            window.location.href = options.returnTo;
        }
    }
}
async function _deleteStorage(storage) {
    await storage.remove((0, _storage.KEY_STORAGE_KEY));
    await storage.remove((0, _storage.KEY_STORAGE_DELEGATION));
    await storage.remove((0, _storage.KEY_VECTOR));
}

},{"@dfinity/agent":"5Kuav","@dfinity/identity":"gsOUi","./idleManager":"3uwXB","./storage":"8pRUN","./db":"7ssRN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsOUi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ed25519KeyIdentity", ()=>(0, _ed25519.Ed25519KeyIdentity));
parcelHelpers.export(exports, "Ed25519PublicKey", ()=>(0, _ed25519.Ed25519PublicKey));
parcelHelpers.export(exports, "WebAuthnIdentity", ()=>(0, _webauthn.WebAuthnIdentity));
parcelHelpers.export(exports, "wrapDER", ()=>(0, _agent.wrapDER));
parcelHelpers.export(exports, "unwrapDER", ()=>(0, _agent.unwrapDER));
parcelHelpers.export(exports, "DER_COSE_OID", ()=>(0, _agent.DER_COSE_OID));
parcelHelpers.export(exports, "ED25519_OID", ()=>(0, _agent.ED25519_OID));
/**
 * @deprecated due to size of dependencies. Use `@dfinity/identity-secp256k1` instead.
 */ parcelHelpers.export(exports, "Secp256k1KeyIdentity", ()=>Secp256k1KeyIdentity);
var _ed25519 = require("./identity/ed25519");
var _ecdsa = require("./identity/ecdsa");
parcelHelpers.exportAll(_ecdsa, exports);
var _delegation = require("./identity/delegation");
parcelHelpers.exportAll(_delegation, exports);
var _webauthn = require("./identity/webauthn");
var _agent = require("@dfinity/agent");
class Secp256k1KeyIdentity {
    constructor(){
        throw new Error("Secp256k1KeyIdentity has been moved to a new repo: @dfinity/identity-secp256k1");
    }
}

},{"./identity/ed25519":"hwxUi","./identity/ecdsa":"j4LMr","./identity/delegation":"8GVfb","./identity/webauthn":"hk0Bd","@dfinity/agent":"5Kuav","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwxUi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ed25519PublicKey", ()=>Ed25519PublicKey);
parcelHelpers.export(exports, "Ed25519KeyIdentity", ()=>Ed25519KeyIdentity);
var _agent = require("@dfinity/agent");
var _ed25519 = require("@noble/curves/ed25519");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ed25519PublicKey_rawKey, _Ed25519PublicKey_derKey, _Ed25519KeyIdentity_publicKey, _Ed25519KeyIdentity_privateKey;
class Ed25519PublicKey {
    // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
    constructor(key){
        _Ed25519PublicKey_rawKey.set(this, void 0);
        _Ed25519PublicKey_derKey.set(this, void 0);
        if (key.byteLength !== Ed25519PublicKey.RAW_KEY_LENGTH) throw new Error("An Ed25519 public key must be exactly 32bytes long");
        __classPrivateFieldSet(this, _Ed25519PublicKey_rawKey, key, "f");
        __classPrivateFieldSet(this, _Ed25519PublicKey_derKey, Ed25519PublicKey.derEncode(key), "f");
    }
    static from(key) {
        return this.fromDer(key.toDer());
    }
    static fromRaw(rawKey) {
        return new Ed25519PublicKey(rawKey);
    }
    static fromDer(derKey) {
        return new Ed25519PublicKey(this.derDecode(derKey));
    }
    static derEncode(publicKey) {
        return (0, _agent.wrapDER)(publicKey, (0, _agent.ED25519_OID)).buffer;
    }
    static derDecode(key) {
        const unwrapped = (0, _agent.unwrapDER)(key, (0, _agent.ED25519_OID));
        if (unwrapped.length !== this.RAW_KEY_LENGTH) throw new Error("An Ed25519 public key must be exactly 32bytes long");
        return unwrapped;
    }
    get rawKey() {
        return __classPrivateFieldGet(this, _Ed25519PublicKey_rawKey, "f");
    }
    get derKey() {
        return __classPrivateFieldGet(this, _Ed25519PublicKey_derKey, "f");
    }
    toDer() {
        return this.derKey;
    }
    toRaw() {
        return this.rawKey;
    }
}
_Ed25519PublicKey_rawKey = new WeakMap(), _Ed25519PublicKey_derKey = new WeakMap();
// The length of Ed25519 public keys is always 32 bytes.
Ed25519PublicKey.RAW_KEY_LENGTH = 32;
class Ed25519KeyIdentity extends (0, _agent.SignIdentity) {
    // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
    constructor(publicKey, privateKey){
        super();
        _Ed25519KeyIdentity_publicKey.set(this, void 0);
        _Ed25519KeyIdentity_privateKey.set(this, void 0);
        __classPrivateFieldSet(this, _Ed25519KeyIdentity_publicKey, Ed25519PublicKey.from(publicKey), "f");
        __classPrivateFieldSet(this, _Ed25519KeyIdentity_privateKey, new Uint8Array(privateKey), "f");
    }
    static generate(seed = new Uint8Array(32)) {
        if (seed && seed.length !== 32) throw new Error("Ed25519 Seed needs to be 32 bytes long.");
        if (!seed) seed = (0, _ed25519.ed25519).utils.randomPrivateKey();
        const sk = new Uint8Array(32);
        for(let i = 0; i < 32; i++)sk[i] = new Uint8Array(seed)[i];
        const pk = (0, _ed25519.ed25519).getPublicKey(sk);
        return Ed25519KeyIdentity.fromKeyPair(pk, sk);
    }
    static fromParsedJson(obj) {
        const [publicKeyDer, privateKeyRaw] = obj;
        return new Ed25519KeyIdentity(Ed25519PublicKey.fromDer((0, _agent.fromHex)(publicKeyDer)), (0, _agent.fromHex)(privateKeyRaw));
    }
    static fromJSON(json) {
        const parsed = JSON.parse(json);
        if (Array.isArray(parsed)) {
            if (typeof parsed[0] === "string" && typeof parsed[1] === "string") return this.fromParsedJson([
                parsed[0],
                parsed[1]
            ]);
            else throw new Error("Deserialization error: JSON must have at least 2 items.");
        }
        throw new Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(json)}`);
    }
    static fromKeyPair(publicKey, privateKey) {
        return new Ed25519KeyIdentity(Ed25519PublicKey.fromRaw(publicKey), privateKey);
    }
    static fromSecretKey(secretKey) {
        const publicKey = (0, _ed25519.ed25519).getPublicKey(new Uint8Array(secretKey));
        return Ed25519KeyIdentity.fromKeyPair(publicKey, secretKey);
    }
    /**
     * Serialize this key to JSON.
     */ toJSON() {
        return [
            (0, _agent.toHex)(__classPrivateFieldGet(this, _Ed25519KeyIdentity_publicKey, "f").toDer()),
            (0, _agent.toHex)(__classPrivateFieldGet(this, _Ed25519KeyIdentity_privateKey, "f"))
        ];
    }
    /**
     * Return a copy of the key pair.
     */ getKeyPair() {
        return {
            secretKey: __classPrivateFieldGet(this, _Ed25519KeyIdentity_privateKey, "f"),
            publicKey: __classPrivateFieldGet(this, _Ed25519KeyIdentity_publicKey, "f")
        };
    }
    /**
     * Return the public key.
     */ getPublicKey() {
        return __classPrivateFieldGet(this, _Ed25519KeyIdentity_publicKey, "f");
    }
    /**
     * Signs a blob of data, with this identity's private key.
     * @param challenge - challenge to sign with this identity's secretKey, producing a signature
     */ async sign(challenge) {
        const blob = new Uint8Array(challenge);
        // Some implementations of Ed25519 private keys append a public key to the end of the private key. We only want the private key.
        const signature = (0, _agent.uint8ToBuf)((0, _ed25519.ed25519).sign(blob, __classPrivateFieldGet(this, _Ed25519KeyIdentity_privateKey, "f").slice(0, 32)));
        // add { __signature__: void; } to the signature to make it compatible with the agent
        Object.defineProperty(signature, "__signature__", {
            enumerable: false,
            value: undefined
        });
        return signature;
    }
    /**
     * Verify
     * @param sig - signature to verify
     * @param msg - message to verify
     * @param pk - public key
     * @returns - true if the signature is valid, false otherwise
     */ static verify(sig, msg, pk) {
        const [signature, message, publicKey] = [
            sig,
            msg,
            pk
        ].map((x)=>{
            if (typeof x === "string") x = (0, _agent.fromHex)(x);
            if (x instanceof Uint8Array) x = x.buffer;
            return new Uint8Array(x);
        });
        return (0, _ed25519.ed25519).verify(message, signature, publicKey);
    }
}
_Ed25519KeyIdentity_publicKey = new WeakMap(), _Ed25519KeyIdentity_privateKey = new WeakMap();

},{"@dfinity/agent":"5Kuav","@noble/curves/ed25519":"f6cMq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4LMr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CryptoError", ()=>CryptoError);
/**
 * An identity interface that wraps an ECDSA keypair using the P-256 named curve. Supports DER-encoding and decoding for agent calls
 */ parcelHelpers.export(exports, "ECDSAKeyIdentity", ()=>ECDSAKeyIdentity);
var _agent = require("@dfinity/agent");
var global = arguments[3];
class CryptoError extends Error {
    constructor(message){
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, CryptoError.prototype);
    }
}
/**
 * Utility method to ensure that a subtleCrypto implementation is provided or is available in the global context
 * @param subtleCrypto SubtleCrypto implementation
 * @returns subleCrypto
 */ function _getEffectiveCrypto(subtleCrypto) {
    if (typeof global !== "undefined" && global["crypto"] && global["crypto"]["subtle"]) return global["crypto"]["subtle"];
    if (subtleCrypto) return subtleCrypto;
    else if (typeof crypto !== "undefined" && crypto["subtle"]) return crypto.subtle;
    else throw new CryptoError("Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto");
}
class ECDSAKeyIdentity extends (0, _agent.SignIdentity) {
    // `fromKeyPair` and `generate` should be used for instantiation, not this constructor.
    constructor(keyPair, derKey, subtleCrypto){
        super();
        this._keyPair = keyPair;
        this._derKey = derKey;
        this._subtleCrypto = subtleCrypto;
    }
    /**
     * Generates a randomly generated identity for use in calls to the Internet Computer.
     * @param {CryptoKeyOptions} options optional settings
     * @param {CryptoKeyOptions['extractable']} options.extractable - whether the key should allow itself to be used. Set to false for maximum security.
     * @param {CryptoKeyOptions['keyUsages']} options.keyUsages - a list of key usages that the key can be used for
     * @param {CryptoKeyOptions['subtleCrypto']} options.subtleCrypto interface
     * @constructs ECDSAKeyIdentity
     * @returns a {@link ECDSAKeyIdentity}
     */ static async generate(options) {
        const { extractable = false, keyUsages = [
            "sign",
            "verify"
        ], subtleCrypto } = options !== null && options !== void 0 ? options : {};
        const effectiveCrypto = _getEffectiveCrypto(subtleCrypto);
        const keyPair = await effectiveCrypto.generateKey({
            name: "ECDSA",
            namedCurve: "P-256"
        }, extractable, keyUsages);
        const derKey = await effectiveCrypto.exportKey("spki", keyPair.publicKey);
        return new this(keyPair, derKey, effectiveCrypto);
    }
    /**
     * generates an identity from a public and private key. Please ensure that you are generating these keys securely and protect the user's private key
     * @param keyPair a {@link CryptoKeyPair}
     * @param subtleCrypto a {@link SubtleCrypto} interface in case one is not available globally
     * @returns an {@link ECDSAKeyIdentity}
     */ static async fromKeyPair(keyPair, subtleCrypto) {
        const effectiveCrypto = _getEffectiveCrypto(subtleCrypto);
        const derKey = await effectiveCrypto.exportKey("spki", keyPair.publicKey);
        return new ECDSAKeyIdentity(keyPair, derKey, effectiveCrypto);
    }
    /**
     * Return the internally-used key pair.
     * @returns a {@link CryptoKeyPair}
     */ getKeyPair() {
        return this._keyPair;
    }
    /**
     * Return the public key.
     * @returns an {@link DerCryptoKey}
     */ getPublicKey() {
        const derKey = this._derKey;
        const key = Object.create(this._keyPair.publicKey);
        key.toDer = function() {
            return derKey;
        };
        return key;
    }
    /**
     * Signs a blob of data, with this identity's private key.
     * @param {ArrayBuffer} challenge - challenge to sign with this identity's secretKey, producing a signature
     * @returns {Promise<Signature>} signature
     */ async sign(challenge) {
        const params = {
            name: "ECDSA",
            hash: {
                name: "SHA-256"
            }
        };
        this._keyPair.privateKey;
        const signature = await this._subtleCrypto.sign(params, this._keyPair.privateKey, challenge);
        return signature;
    }
}
exports.default = ECDSAKeyIdentity;

},{"@dfinity/agent":"5Kuav","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8GVfb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A single delegation object that is signed by a private key. This is constructed by
 * `DelegationChain.create()`.
 *
 * {@see DelegationChain}
 */ parcelHelpers.export(exports, "Delegation", ()=>Delegation);
/**
 * A chain of delegations. This is JSON Serializable.
 * This is the object to serialize and pass to a DelegationIdentity. It does not keep any
 * private keys.
 */ parcelHelpers.export(exports, "DelegationChain", ()=>DelegationChain);
/**
 * An Identity that adds delegation to a request. Everywhere in this class, the name
 * innerKey refers to the SignIdentity that is being used to sign the requests, while
 * originalKey is the identity that is being borrowed. More identities can be used
 * in the middle to delegate.
 */ parcelHelpers.export(exports, "DelegationIdentity", ()=>DelegationIdentity);
/**
 * Analyze a DelegationChain and validate that it's valid, ie. not expired and apply to the
 * scope.
 * @param chain The chain to validate.
 * @param checks Various checks to validate on the chain.
 */ parcelHelpers.export(exports, "isDelegationValid", ()=>isDelegationValid);
var _agent = require("@dfinity/agent");
var _principal = require("@dfinity/principal");
var _simpleCbor = require("simple-cbor");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const domainSeparator = new TextEncoder().encode("\x1aic-request-auth-delegation");
const requestDomainSeparator = new TextEncoder().encode("\nic-request");
function _parseBlob(value) {
    if (typeof value !== "string" || value.length < 64) throw new Error("Invalid public key.");
    return (0, _agent.fromHex)(value);
}
class Delegation {
    constructor(pubkey, expiration, targets){
        this.pubkey = pubkey;
        this.expiration = expiration;
        this.targets = targets;
    }
    toCBOR() {
        // Expiration field needs to be encoded as a u64 specifically.
        return _simpleCbor.value.map(Object.assign({
            pubkey: _simpleCbor.value.bytes(this.pubkey),
            expiration: _simpleCbor.value.u64(this.expiration.toString(16), 16)
        }, this.targets && {
            targets: _simpleCbor.value.array(this.targets.map((t)=>_simpleCbor.value.bytes(t.toUint8Array())))
        }));
    }
    toJSON() {
        // every string should be hex and once-de-hexed,
        // discoverable what it is (e.g. de-hex to get JSON with a 'type' property, or de-hex to DER
        // with an OID). After de-hex, if it's not obvious what it is, it's an ArrayBuffer.
        return Object.assign({
            expiration: this.expiration.toString(16),
            pubkey: (0, _agent.toHex)(this.pubkey)
        }, this.targets && {
            targets: this.targets.map((p)=>p.toHex())
        });
    }
}
/**
 * Sign a single delegation object for a period of time.
 * @param from The identity that lends its delegation.
 * @param to The identity that receives the delegation.
 * @param expiration An expiration date for this delegation.
 * @param targets Limit this delegation to the target principals.
 */ async function _createSingleDelegation(from, to, expiration, targets) {
    const delegation = new Delegation(to.toDer(), BigInt(+expiration) * BigInt(1000000), targets);
    // The signature is calculated by signing the concatenation of the domain separator
    // and the message.
    // Note: To ensure Safari treats this as a user gesture, ensure to not use async methods
    // besides the actualy webauthn functionality (such as `sign`). Safari will de-register
    // a user gesture if you await an async call thats not fetch, xhr, or setTimeout.
    const challenge = new Uint8Array([
        ...domainSeparator,
        ...new Uint8Array((0, _agent.requestIdOf)(delegation))
    ]);
    const signature = await from.sign(challenge);
    return {
        delegation,
        signature
    };
}
class DelegationChain {
    constructor(delegations, publicKey){
        this.delegations = delegations;
        this.publicKey = publicKey;
    }
    /**
     * Create a delegation chain between two (or more) keys. By default, the expiration time
     * will be very short (15 minutes).
     *
     * To build a chain of more than 2 identities, this function needs to be called multiple times,
     * passing the previous delegation chain into the options argument. For example:
     * @example
     * const rootKey = createKey();
     * const middleKey = createKey();
     * const bottomeKey = createKey();
     *
     * const rootToMiddle = await DelegationChain.create(
     *   root, middle.getPublicKey(), Date.parse('2100-01-01'),
     * );
     * const middleToBottom = await DelegationChain.create(
     *   middle, bottom.getPublicKey(), Date.parse('2100-01-01'), { previous: rootToMiddle },
     * );
     *
     * // We can now use a delegation identity that uses the delegation above:
     * const identity = DelegationIdentity.fromDelegation(bottomKey, middleToBottom);
     * @param from The identity that will delegate.
     * @param to The identity that gets delegated. It can now sign messages as if it was the
     *           identity above.
     * @param expiration The length the delegation is valid. By default, 15 minutes from calling
     *                   this function.
     * @param options A set of options for this delegation. expiration and previous
     * @param options.previous - Another DelegationChain that this chain should start with.
     * @param options.targets - targets that scope the delegation (e.g. Canister Principals)
     */ static async create(from, to, expiration = new Date(Date.now() + 900000), options = {}) {
        var _a, _b;
        const delegation = await _createSingleDelegation(from, to, expiration, options.targets);
        return new DelegationChain([
            ...((_a = options.previous) === null || _a === void 0 ? void 0 : _a.delegations) || [],
            delegation
        ], ((_b = options.previous) === null || _b === void 0 ? void 0 : _b.publicKey) || from.getPublicKey().toDer());
    }
    /**
     * Creates a DelegationChain object from a JSON string.
     * @param json The JSON string to parse.
     */ static fromJSON(json) {
        const { publicKey, delegations } = typeof json === "string" ? JSON.parse(json) : json;
        if (!Array.isArray(delegations)) throw new Error("Invalid delegations.");
        const parsedDelegations = delegations.map((signedDelegation)=>{
            const { delegation, signature } = signedDelegation;
            const { pubkey, expiration, targets } = delegation;
            if (targets !== undefined && !Array.isArray(targets)) throw new Error("Invalid targets.");
            return {
                delegation: new Delegation(_parseBlob(pubkey), BigInt("0x" + expiration), targets && targets.map((t)=>{
                    if (typeof t !== "string") throw new Error("Invalid target.");
                    return (0, _principal.Principal).fromHex(t);
                })),
                signature: _parseBlob(signature)
            };
        });
        return new this(parsedDelegations, _parseBlob(publicKey));
    }
    /**
     * Creates a DelegationChain object from a list of delegations and a DER-encoded public key.
     * @param delegations The list of delegations.
     * @param publicKey The DER-encoded public key of the key-pair signing the first delegation.
     */ static fromDelegations(delegations, publicKey) {
        return new this(delegations, publicKey);
    }
    toJSON() {
        return {
            delegations: this.delegations.map((signedDelegation)=>{
                const { delegation, signature } = signedDelegation;
                const { targets } = delegation;
                return {
                    delegation: Object.assign({
                        expiration: delegation.expiration.toString(16),
                        pubkey: (0, _agent.toHex)(delegation.pubkey)
                    }, targets && {
                        targets: targets.map((t)=>t.toHex())
                    }),
                    signature: (0, _agent.toHex)(signature)
                };
            }),
            publicKey: (0, _agent.toHex)(this.publicKey)
        };
    }
}
class DelegationIdentity extends (0, _agent.SignIdentity) {
    constructor(_inner, _delegation){
        super();
        this._inner = _inner;
        this._delegation = _delegation;
    }
    /**
     * Create a delegation without having access to delegateKey.
     * @param key The key used to sign the reqyests.
     * @param delegation A delegation object created using `createDelegation`.
     */ static fromDelegation(key, delegation) {
        return new this(key, delegation);
    }
    getDelegation() {
        return this._delegation;
    }
    getPublicKey() {
        return {
            derKey: this._delegation.publicKey,
            toDer: ()=>this._delegation.publicKey
        };
    }
    sign(blob) {
        return this._inner.sign(blob);
    }
    async transformRequest(request) {
        const { body } = request, fields = __rest(request, [
            "body"
        ]);
        const requestId = await (0, _agent.requestIdOf)(body);
        return Object.assign(Object.assign({}, fields), {
            body: {
                content: body,
                sender_sig: await this.sign(new Uint8Array([
                    ...requestDomainSeparator,
                    ...new Uint8Array(requestId)
                ])),
                sender_delegation: this._delegation.delegations,
                sender_pubkey: this._delegation.publicKey
            }
        });
    }
}
function isDelegationValid(chain, checks) {
    // Verify that the no delegation is expired. If any are in the chain, returns false.
    for (const { delegation } of chain.delegations){
        // prettier-ignore
        if (+new Date(Number(delegation.expiration / BigInt(1000000))) <= +Date.now()) return false;
    }
    // Check the scopes.
    const scopes = [];
    const maybeScope = checks === null || checks === void 0 ? void 0 : checks.scope;
    if (maybeScope) {
        if (Array.isArray(maybeScope)) scopes.push(...maybeScope.map((s)=>typeof s === "string" ? (0, _principal.Principal).fromText(s) : s));
        else scopes.push(typeof maybeScope === "string" ? (0, _principal.Principal).fromText(maybeScope) : maybeScope);
    }
    for (const s of scopes){
        const scope = s.toText();
        for (const { delegation } of chain.delegations){
            if (delegation.targets === undefined) continue;
            let none = true;
            for (const target of delegation.targets)if (target.toText() === scope) {
                none = false;
                break;
            }
            if (none) return false;
        }
    }
    return true;
}

},{"@dfinity/agent":"5Kuav","@dfinity/principal":"lPNel","simple-cbor":"3ETI4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hk0Bd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CosePublicKey", ()=>CosePublicKey);
/**
 * A SignIdentity that uses `navigator.credentials`. See https://webauthn.guide/ for
 * more information about WebAuthentication.
 */ parcelHelpers.export(exports, "WebAuthnIdentity", ()=>WebAuthnIdentity);
var _agent = require("@dfinity/agent");
var _borc = require("borc");
var _borcDefault = parcelHelpers.interopDefault(_borc);
var _utils = require("@noble/hashes/utils");
function _coseToDerEncodedBlob(cose) {
    return (0, _agent.wrapDER)(cose, (0, _agent.DER_COSE_OID)).buffer;
}
/**
 * From the documentation;
 * The authData is a byte array described in the spec. Parsing it will involve slicing bytes from
 * the array and converting them into usable objects.
 *
 * See https://webauthn.guide/#registration (subsection "Example: Parsing the authenticator data").
 * @param authData The authData field of the attestation response.
 * @returns The COSE key of the authData.
 */ function _authDataToCose(authData) {
    const dataView = new DataView(new ArrayBuffer(2));
    const idLenBytes = authData.slice(53, 55);
    [
        ...new Uint8Array(idLenBytes)
    ].forEach((v, i)=>dataView.setUint8(i, v));
    const credentialIdLength = dataView.getUint16(0);
    // Get the public key object.
    return authData.slice(55 + credentialIdLength);
}
class CosePublicKey {
    constructor(_cose){
        this._cose = _cose;
        this._encodedKey = _coseToDerEncodedBlob(_cose);
    }
    toDer() {
        return this._encodedKey;
    }
    getCose() {
        return this._cose;
    }
}
/**
 * Create a challenge from a string or array. The default challenge is always the same
 * because we don't need to verify the authenticity of the key on the server (we don't
 * register our keys with the IC). Any challenge would do, even one per key, randomly
 * generated.
 * @param challenge The challenge to transform into a byte array. By default a hard
 *        coded string.
 */ function _createChallengeBuffer(challenge = "<ic0.app>") {
    if (typeof challenge === "string") return Uint8Array.from(challenge, (c)=>c.charCodeAt(0));
    else return challenge;
}
/**
 * Create a credentials to authenticate with a server. This is necessary in order in
 * WebAuthn to get credentials IDs (which give us the public key and allow us to
 * sign), but in the case of the Internet Computer, we don't actually need to register
 * it, so we don't.
 * @param credentialCreationOptions an optional CredentialCreationOptions object
 */ async function _createCredential(credentialCreationOptions) {
    const creds = await navigator.credentials.create(credentialCreationOptions !== null && credentialCreationOptions !== void 0 ? credentialCreationOptions : {
        publicKey: {
            authenticatorSelection: {
                userVerification: "preferred"
            },
            attestation: "direct",
            challenge: _createChallengeBuffer(),
            pubKeyCredParams: [
                {
                    type: "public-key",
                    alg: PubKeyCoseAlgo.ECDSA_WITH_SHA256
                }
            ],
            rp: {
                name: "Internet Identity Service"
            },
            user: {
                id: (0, _utils.randomBytes)(16),
                name: "Internet Identity",
                displayName: "Internet Identity"
            }
        }
    });
    // Validate that it's the correct type at runtime, since WebAuthn does not HAVE to
    // reply with a PublicKeyCredential.
    if (creds.response === undefined || !(creds.rawId instanceof ArrayBuffer)) return null;
    else return creds;
}
// See https://www.iana.org/assignments/cose/cose.xhtml#algorithms for a complete
// list of these algorithms. We only list the ones we support here.
var PubKeyCoseAlgo;
(function(PubKeyCoseAlgo) {
    PubKeyCoseAlgo[PubKeyCoseAlgo["ECDSA_WITH_SHA256"] = -7] = "ECDSA_WITH_SHA256";
})(PubKeyCoseAlgo || (PubKeyCoseAlgo = {}));
class WebAuthnIdentity extends (0, _agent.SignIdentity) {
    constructor(rawId, cose, authenticatorAttachment){
        super();
        this.rawId = rawId;
        this.authenticatorAttachment = authenticatorAttachment;
        this._publicKey = new CosePublicKey(cose);
    }
    /**
     * Create an identity from a JSON serialization.
     * @param json - json to parse
     */ static fromJSON(json) {
        const { publicKey, rawId } = JSON.parse(json);
        if (typeof publicKey !== "string" || typeof rawId !== "string") throw new Error("Invalid JSON string.");
        return new this((0, _agent.fromHex)(rawId), (0, _agent.fromHex)(publicKey), undefined);
    }
    /**
     * Create an identity.
     * @param credentialCreationOptions an optional CredentialCreationOptions Challenge
     */ static async create(credentialCreationOptions) {
        var _a;
        const creds = await _createCredential(credentialCreationOptions);
        if (!creds || creds.type !== "public-key") throw new Error("Could not create credentials.");
        const response = creds.response;
        if (!(response.attestationObject instanceof ArrayBuffer)) throw new Error("Was expecting an attestation response.");
        // Parse the attestationObject as CBOR.
        const attObject = (0, _borcDefault.default).decodeFirst(new Uint8Array(response.attestationObject));
        return new this(creds.rawId, _authDataToCose(attObject.authData), (_a = creds.authenticatorAttachment) !== null && _a !== void 0 ? _a : undefined);
    }
    getPublicKey() {
        return this._publicKey;
    }
    /**
     * WebAuthn level 3 spec introduces a new attribute on successful WebAuthn interactions,
     * see https://w3c.github.io/webauthn/#dom-publickeycredential-authenticatorattachment.
     * This attribute is already implemented for Chrome, Safari and Edge.
     *
     * Given the attribute is only available after a successful interaction, the information is
     * provided opportunistically and might also be `undefined`.
     */ getAuthenticatorAttachment() {
        return this.authenticatorAttachment;
    }
    async sign(blob) {
        const result = await navigator.credentials.get({
            publicKey: {
                allowCredentials: [
                    {
                        type: "public-key",
                        id: this.rawId
                    }
                ],
                challenge: blob,
                userVerification: "preferred"
            }
        });
        if (result.authenticatorAttachment !== null) this.authenticatorAttachment = result.authenticatorAttachment;
        const response = result.response;
        if (response.signature instanceof ArrayBuffer && response.authenticatorData instanceof ArrayBuffer) {
            const cbor = (0, _borcDefault.default).encode(new (0, _borcDefault.default).Tagged(55799, {
                authenticator_data: new Uint8Array(response.authenticatorData),
                client_data_json: new TextDecoder().decode(response.clientDataJSON),
                signature: new Uint8Array(response.signature)
            }));
            if (!cbor) throw new Error("failed to encode cbor");
            return cbor.buffer;
        } else throw new Error("Invalid response from WebAuthn.");
    }
    /**
     * Allow for JSON serialization of all information needed to reuse this identity.
     */ toJSON() {
        return {
            publicKey: (0, _agent.toHex)(this._publicKey.getCose()),
            rawId: (0, _agent.toHex)(this.rawId)
        };
    }
}

},{"@dfinity/agent":"5Kuav","borc":"1lEEY","@noble/hashes/utils":"2ehgp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uwXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Detects if the user has been idle for a duration of `idleTimeout` ms, and calls `onIdle` and registered callbacks.
 * By default, the IdleManager will log a user out after 10 minutes of inactivity.
 * To override these defaults, you can pass an `onIdle` callback, or configure a custom `idleTimeout` in milliseconds
 */ parcelHelpers.export(exports, "IdleManager", ()=>IdleManager);
const events = [
    "mousedown",
    "mousemove",
    "keydown",
    "touchstart",
    "wheel"
];
class IdleManager {
    /**
     * @protected
     * @param options {@link IdleManagerOptions}
     */ constructor(options = {}){
        var _a;
        this.callbacks = [];
        this.idleTimeout = 600000;
        this.timeoutID = undefined;
        const { onIdle, idleTimeout = 600000 } = options || {};
        this.callbacks = onIdle ? [
            onIdle
        ] : [];
        this.idleTimeout = idleTimeout;
        const _resetTimer = this._resetTimer.bind(this);
        window.addEventListener("load", _resetTimer, true);
        events.forEach(function(name) {
            document.addEventListener(name, _resetTimer, true);
        });
        // eslint-disable-next-line @typescript-eslint/ban-types
        const debounce = (func, wait)=>{
            let timeout;
            return (...args)=>{
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                const context = this;
                const later = function() {
                    timeout = undefined;
                    func.apply(context, args);
                };
                clearTimeout(timeout);
                timeout = window.setTimeout(later, wait);
            };
        };
        if (options === null || options === void 0 ? void 0 : options.captureScroll) {
            // debounce scroll events
            const scroll = debounce(_resetTimer, (_a = options === null || options === void 0 ? void 0 : options.scrollDebounce) !== null && _a !== void 0 ? _a : 100);
            window.addEventListener("scroll", scroll, true);
        }
        _resetTimer();
    }
    /**
     * Creates an {@link IdleManager}
     * @param {IdleManagerOptions} options Optional configuration
     * @see {@link IdleManagerOptions}
     * @param options.onIdle Callback once user has been idle. Use to prompt for fresh login, and use `Actor.agentOf(your_actor).invalidateIdentity()` to protect the user
     * @param options.idleTimeout timeout in ms
     * @param options.captureScroll capture scroll events
     * @param options.scrollDebounce scroll debounce time in ms
     */ static create(options = {}) {
        return new this(options);
    }
    /**
     * @param {IdleCB} callback function to be called when user goes idle
     */ registerCallback(callback) {
        this.callbacks.push(callback);
    }
    /**
     * Cleans up the idle manager and its listeners
     */ exit() {
        clearTimeout(this.timeoutID);
        window.removeEventListener("load", this._resetTimer, true);
        const _resetTimer = this._resetTimer.bind(this);
        events.forEach(function(name) {
            document.removeEventListener(name, _resetTimer, true);
        });
        this.callbacks.forEach((cb)=>cb());
    }
    /**
     * Resets the timeouts during cleanup
     */ _resetTimer() {
        const exit = this.exit.bind(this);
        window.clearTimeout(this.timeoutID);
        this.timeoutID = window.setTimeout(exit, this.idleTimeout);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pRUN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KEY_STORAGE_KEY", ()=>KEY_STORAGE_KEY);
parcelHelpers.export(exports, "KEY_STORAGE_DELEGATION", ()=>KEY_STORAGE_DELEGATION);
parcelHelpers.export(exports, "KEY_VECTOR", ()=>KEY_VECTOR);
parcelHelpers.export(exports, "DB_VERSION", ()=>DB_VERSION);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
/**
 * Legacy implementation of AuthClientStorage, for use where IndexedDb is not available
 */ parcelHelpers.export(exports, "LocalStorage", ()=>LocalStorage);
/**
 * IdbStorage is an interface for simple storage of string key-value pairs built on {@link IdbKeyVal}
 *
 * It replaces {@link LocalStorage}
 * @see implements {@link AuthClientStorage}
 */ parcelHelpers.export(exports, "IdbStorage", ()=>IdbStorage);
var _db = require("./db");
var global = arguments[3];
const KEY_STORAGE_KEY = "identity";
const KEY_STORAGE_DELEGATION = "delegation";
const KEY_VECTOR = "iv";
const DB_VERSION = 1;
const isBrowser = typeof window !== "undefined";
class LocalStorage {
    constructor(prefix = "ic-", _localStorage){
        this.prefix = prefix;
        this._localStorage = _localStorage;
    }
    get(key) {
        return Promise.resolve(this._getLocalStorage().getItem(this.prefix + key));
    }
    set(key, value) {
        this._getLocalStorage().setItem(this.prefix + key, value);
        return Promise.resolve();
    }
    remove(key) {
        this._getLocalStorage().removeItem(this.prefix + key);
        return Promise.resolve();
    }
    _getLocalStorage() {
        if (this._localStorage) return this._localStorage;
        const ls = typeof window === "undefined" ? typeof global === "undefined" ? typeof self === "undefined" ? undefined : self.localStorage : global.localStorage : window.localStorage;
        if (!ls) throw new Error("Could not find local storage.");
        return ls;
    }
}
class IdbStorage {
    get _db() {
        return new Promise((resolve)=>{
            if (this.initializedDb) {
                resolve(this.initializedDb);
                return;
            }
            (0, _db.IdbKeyVal).create({
                version: DB_VERSION
            }).then((db)=>{
                this.initializedDb = db;
                resolve(db);
            });
        });
    }
    async get(key) {
        const db = await this._db;
        return await db.get(key);
    // return (await db.get<string>(key)) ?? null;
    }
    async set(key, value) {
        const db = await this._db;
        await db.set(key, value);
    }
    async remove(key) {
        const db = await this._db;
        await db.remove(key);
    }
}

},{"./db":"7ssRN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ssRN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Simple Key Value store
 * Defaults to `'auth-client-db'` with an object store of `'ic-keyval'`
 */ parcelHelpers.export(exports, "IdbKeyVal", ()=>IdbKeyVal);
var _idb = require("idb");
var _storage = require("./storage");
const AUTH_DB_NAME = "auth-client-db";
const OBJECT_STORE_NAME = "ic-keyval";
const _openDbStore = async (dbName = AUTH_DB_NAME, storeName = OBJECT_STORE_NAME, version)=>{
    // Clear legacy stored delegations
    if ((0, _storage.isBrowser) && (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem((0, _storage.KEY_STORAGE_DELEGATION)))) {
        localStorage.removeItem((0, _storage.KEY_STORAGE_DELEGATION));
        localStorage.removeItem((0, _storage.KEY_STORAGE_KEY));
    }
    return await (0, _idb.openDB)(dbName, version, {
        upgrade: (database)=>{
            database.objectStoreNames;
            if (database.objectStoreNames.contains(storeName)) database.clear(storeName);
            database.createObjectStore(storeName);
        }
    });
};
async function _getValue(db, storeName, key) {
    return await db.get(storeName, key);
}
async function _setValue(db, storeName, key, value) {
    return await db.put(storeName, value, key);
}
async function _removeValue(db, storeName, key) {
    return await db.delete(storeName, key);
}
class IdbKeyVal {
    // Do not use - instead prefer create
    constructor(_db, _storeName){
        this._db = _db;
        this._storeName = _storeName;
    }
    /**
     *
     * @param {DBCreateOptions} options {@link DbCreateOptions}
     * @param {DBCreateOptions['dbName']} options.dbName name for the indexeddb database
     * @default
     * @param {DBCreateOptions['storeName']} options.storeName name for the indexeddb Data Store
     * @default
     * @param {DBCreateOptions['version']} options.version version of the database. Increment to safely upgrade
     * @constructs an {@link IdbKeyVal}
     */ static async create(options) {
        const { dbName = AUTH_DB_NAME, storeName = OBJECT_STORE_NAME, version = 1 } = options !== null && options !== void 0 ? options : {};
        const db = await _openDbStore(dbName, storeName, version);
        return new IdbKeyVal(db, storeName);
    }
    /**
     * Basic setter
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @param value value to set
     * @returns void
     */ async set(key, value) {
        return await _setValue(this._db, this._storeName, key, value);
    }
    /**
     * Basic getter
     * Pass in a type T for type safety if you know the type the value will have if it is found
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @returns `Promise<T | null>`
     * @example
     * await get<string>('exampleKey') -> 'exampleValue'
     */ async get(key) {
        var _a;
        return (_a = await _getValue(this._db, this._storeName, key)) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Remove a key
     * @param key {@link IDBValidKey}
     * @returns void
     */ async remove(key) {
        return await _removeValue(this._db, this._storeName, key);
    }
}

},{"idb":"kozAz","./storage":"8pRUN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kozAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unwrap", ()=>(0, _wrapIdbValueJs.u));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapIdbValueJs.w));
parcelHelpers.export(exports, "deleteDB", ()=>deleteDB);
parcelHelpers.export(exports, "openDB", ()=>openDB);
var _wrapIdbValueJs = require("./wrap-idb-value.js");
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0, _wrapIdbValueJs.w)(request);
    if (upgrade) request.addEventListener("upgradeneeded", (event)=>{
        upgrade((0, _wrapIdbValueJs.w)(request.result), event.oldVersion, event.newVersion, (0, _wrapIdbValueJs.w)(request.transaction), event);
    });
    if (blocked) request.addEventListener("blocked", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    openPromise.then((db)=>{
        if (terminated) db.addEventListener("close", ()=>terminated());
        if (blocking) db.addEventListener("versionchange", (event)=>blocking(event.oldVersion, event.newVersion, event));
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) request.addEventListener("blocked", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    return (0, _wrapIdbValueJs.w)(request).then(()=>undefined);
}
const readMethods = [
    "get",
    "getKey",
    "getAll",
    "getAllKeys",
    "count"
];
const writeMethods = [
    "put",
    "add",
    "delete",
    "clear"
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0, _wrapIdbValueJs.r)((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));

},{"./wrap-idb-value.js":"lS54k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lS54k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>reverseTransformCache);
parcelHelpers.export(exports, "i", ()=>instanceOfAny);
parcelHelpers.export(exports, "r", ()=>replaceTraps);
parcelHelpers.export(exports, "u", ()=>unwrap);
parcelHelpers.export(exports, "w", ()=>wrap);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener("success", success);
            request.removeEventListener("error", error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener("success", success);
        request.addEventListener("error", error);
    });
    promise.then((value)=>{
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) cursorRequestMap.set(value, request);
    // Catching to avoid "Uncaught Promise exceptions"
    }).catch(()=>{});
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener("complete", complete);
            tx.removeEventListener("error", error);
            tx.removeEventListener("abort", error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException("AbortError", "AbortError"));
            unlisten();
        };
        tx.addEventListener("complete", complete);
        tx.addEventListener("error", error);
        tx.addEventListener("abort", error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === "done") return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === "objectStoreNames") return target.objectStoreNames || transactionStoreNamesMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === "store") return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [
            storeNames
        ]);
        return wrap(tx);
    };
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
    };
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === "function") return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6bT7h"], null, "parcelRequire4831")

//# sourceMappingURL=login.21fa24d9.js.map
