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
})({"lGqnZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4efbc4f434398413";
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

},{}],"1DbUn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "idlFactory", ()=>(0, _mindBodyDidJs.idlFactory));
parcelHelpers.export(exports, "canisterId", ()=>canisterId);
parcelHelpers.export(exports, "createActor", ()=>createActor);
parcelHelpers.export(exports, "mind_body", ()=>mind_body);
var _agent = require("@dfinity/agent");
// Imports and re-exports candid interface
var _mindBodyDidJs = require("./mind_body.did.js");
const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
const createActor = (canisterId, options = {})=>{
    const agent = options.agent || new (0, _agent.HttpAgent)({
        ...options.agentOptions
    });
    if (options.agent && options.agentOptions) console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
    agent.fetchRootKey().catch((err)=>{
        console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
        console.error(err);
    });
    // Creates an actor with using the candid interface and the HttpAgent
    return (0, _agent.Actor).createActor((0, _mindBodyDidJs.idlFactory), {
        agent,
        canisterId,
        ...options.actorOptions
    });
};
const mind_body = createActor(canisterId);

},{"@dfinity/agent":"5Kuav","./mind_body.did.js":"1WyNc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Kuav":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polling", ()=>_polling);
/**
 * The CanisterStatus utility is used to request structured data directly from the IC public API. This data can be accessed using agent.readState, but CanisterStatus provides a helpful abstraction with some known paths.
 *
 * You can request a canisters Controllers, ModuleHash, Candid interface, Subnet, or Time, or provide a custom path {@link CanisterStatus.CustomPath} and pass arbitrary buffers for valid paths identified in https://internetcomputer.org/docs/current/references/ic-interface-spec.
 *
 * The primary method for this namespace is {@link CanisterStatus.request}
 */ parcelHelpers.export(exports, "CanisterStatus", ()=>_canisterStatus);
parcelHelpers.export(exports, "Cbor", ()=>_cbor);
var _actor = require("./actor");
parcelHelpers.exportAll(_actor, exports);
var _agent = require("./agent");
parcelHelpers.exportAll(_agent, exports);
var _transforms = require("./agent/http/transforms");
parcelHelpers.exportAll(_transforms, exports);
var _types = require("./agent/http/types");
parcelHelpers.exportAll(_types, exports);
var _auth = require("./auth");
parcelHelpers.exportAll(_auth, exports);
var _asset = require("./canisters/asset");
parcelHelpers.exportAll(_asset, exports);
var _certificate = require("./certificate");
parcelHelpers.exportAll(_certificate, exports);
var _der = require("./der");
parcelHelpers.exportAll(_der, exports);
var _fetchCandid = require("./fetch_candid");
parcelHelpers.exportAll(_fetchCandid, exports);
var _publicKey = require("./public_key");
parcelHelpers.exportAll(_publicKey, exports);
var _requestId = require("./request_id");
parcelHelpers.exportAll(_requestId, exports);
var _bls = require("./utils/bls");
parcelHelpers.exportAll(_bls, exports);
var _buffer = require("./utils/buffer");
parcelHelpers.exportAll(_buffer, exports);
var _random = require("./utils/random");
parcelHelpers.exportAll(_random, exports);
var _polling = require("./polling");
var _canisterStatus = require("./canisterStatus");
var _cbor = require("./cbor");

},{"./actor":"iXcWD","./agent":"cZYac","./agent/http/transforms":"cTcPG","./agent/http/types":"5DQrM","./auth":"9VoIX","./canisters/asset":"fACGJ","./certificate":"bJv6G","./der":"8gvbo","./fetch_candid":"l2EoI","./public_key":"3HXiQ","./request_id":"jsPqV","./utils/bls":"dwKzn","./utils/buffer":"lLl6e","./utils/random":"hRePK","./polling":"6JXl5","./canisterStatus":"3k2wA","./cbor":"his1y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXcWD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActorCallError", ()=>ActorCallError);
parcelHelpers.export(exports, "QueryCallRejectedError", ()=>QueryCallRejectedError);
parcelHelpers.export(exports, "UpdateCallRejectedError", ()=>UpdateCallRejectedError);
parcelHelpers.export(exports, "CanisterInstallMode", ()=>CanisterInstallMode);
/**
 * An actor base class. An actor is an object containing only functions that will
 * return a promise. These functions are derived from the IDL definition.
 */ parcelHelpers.export(exports, "Actor", ()=>Actor);
parcelHelpers.export(exports, "ACTOR_METHOD_WITH_HTTP_DETAILS", ()=>ACTOR_METHOD_WITH_HTTP_DETAILS);
/**
 * Create a management canister actor
 * @param config
 */ parcelHelpers.export(exports, "getManagementCanister", ()=>getManagementCanister);
var _ = require("buffer/");
var _agent = require("./agent");
var _errors = require("./errors");
var _candid = require("@dfinity/candid");
var _polling = require("./polling");
var _principal = require("@dfinity/principal");
var _buffer = require("./utils/buffer");
var _managementIdl = require("./canisters/management_idl");
var _managementIdlDefault = parcelHelpers.interopDefault(_managementIdl);
class ActorCallError extends (0, _errors.AgentError) {
    constructor(canisterId, methodName, type, props){
        super([
            `Call failed:`,
            `  Canister: ${canisterId.toText()}`,
            `  Method: ${methodName} (${type})`,
            ...Object.getOwnPropertyNames(props).map((n)=>`  "${n}": ${JSON.stringify(props[n])}`)
        ].join("\n"));
        this.canisterId = canisterId;
        this.methodName = methodName;
        this.type = type;
        this.props = props;
    }
}
class QueryCallRejectedError extends ActorCallError {
    constructor(canisterId, methodName, result){
        var _a;
        super(canisterId, methodName, "query", {
            Status: result.status,
            Code: (_a = (0, _agent.ReplicaRejectCode)[result.reject_code]) !== null && _a !== void 0 ? _a : `Unknown Code "${result.reject_code}"`,
            Message: result.reject_message
        });
        this.result = result;
    }
}
class UpdateCallRejectedError extends ActorCallError {
    constructor(canisterId, methodName, requestId, response){
        super(canisterId, methodName, "update", Object.assign({
            "Request ID": (0, _buffer.toHex)(requestId)
        }, response.body ? Object.assign(Object.assign({}, response.body.error_code ? {
            "Error code": response.body.error_code
        } : {}), {
            "Reject code": String(response.body.reject_code),
            "Reject message": response.body.reject_message
        }) : {
            "HTTP status code": response.status.toString(),
            "HTTP status text": response.statusText
        }));
        this.requestId = requestId;
        this.response = response;
    }
}
var CanisterInstallMode;
(function(CanisterInstallMode) {
    CanisterInstallMode["Install"] = "install";
    CanisterInstallMode["Reinstall"] = "reinstall";
    CanisterInstallMode["Upgrade"] = "upgrade";
})(CanisterInstallMode || (CanisterInstallMode = {}));
const metadataSymbol = Symbol.for("ic-agent-metadata");
class Actor {
    constructor(metadata){
        this[metadataSymbol] = Object.freeze(metadata);
    }
    /**
     * Get the Agent class this Actor would call, or undefined if the Actor would use
     * the default agent (global.ic.agent).
     * @param actor The actor to get the agent of.
     */ static agentOf(actor) {
        return actor[metadataSymbol].config.agent;
    }
    /**
     * Get the interface of an actor, in the form of an instance of a Service.
     * @param actor The actor to get the interface of.
     */ static interfaceOf(actor) {
        return actor[metadataSymbol].service;
    }
    static canisterIdOf(actor) {
        return (0, _principal.Principal).from(actor[metadataSymbol].config.canisterId);
    }
    static async install(fields, config) {
        const mode = fields.mode === undefined ? CanisterInstallMode.Install : fields.mode;
        // Need to transform the arg into a number array.
        const arg = fields.arg ? [
            ...new Uint8Array(fields.arg)
        ] : [];
        // Same for module.
        const wasmModule = [
            ...new Uint8Array(fields.module)
        ];
        const canisterId = typeof config.canisterId === "string" ? (0, _principal.Principal).fromText(config.canisterId) : config.canisterId;
        await getManagementCanister(config).install_code({
            mode: {
                [mode]: null
            },
            arg,
            wasm_module: wasmModule,
            canister_id: canisterId
        });
    }
    static async createCanister(config) {
        const { canister_id: canisterId } = await getManagementCanister(config || {}).provisional_create_canister_with_cycles({
            amount: [],
            settings: []
        });
        return canisterId;
    }
    static async createAndInstallCanister(interfaceFactory, fields, config) {
        const canisterId = await this.createCanister(config);
        await this.install(Object.assign({}, fields), Object.assign(Object.assign({}, config), {
            canisterId
        }));
        return this.createActor(interfaceFactory, Object.assign(Object.assign({}, config), {
            canisterId
        }));
    }
    static createActorClass(interfaceFactory, options) {
        const service = interfaceFactory({
            IDL: (0, _candid.IDL)
        });
        class CanisterActor extends Actor {
            constructor(config){
                if (!config.canisterId) throw new (0, _errors.AgentError)(`Canister ID is required, but received ${typeof config.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
                const canisterId = typeof config.canisterId === "string" ? (0, _principal.Principal).fromText(config.canisterId) : config.canisterId;
                super({
                    config: Object.assign(Object.assign(Object.assign({}, DEFAULT_ACTOR_CONFIG), config), {
                        canisterId
                    }),
                    service
                });
                for (const [methodName, func] of service._fields){
                    if (options === null || options === void 0 ? void 0 : options.httpDetails) func.annotations.push(ACTOR_METHOD_WITH_HTTP_DETAILS);
                    this[methodName] = _createActorMethod(this, methodName, func, config.blsVerify);
                }
            }
        }
        return CanisterActor;
    }
    static createActor(interfaceFactory, configuration) {
        if (!configuration.canisterId) throw new (0, _errors.AgentError)(`Canister ID is required, but received ${typeof configuration.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
        return new (this.createActorClass(interfaceFactory))(configuration);
    }
    static createActorWithHttpDetails(interfaceFactory, configuration) {
        return new (this.createActorClass(interfaceFactory, {
            httpDetails: true
        }))(configuration);
    }
}
// IDL functions can have multiple return values, so decoding always
// produces an array. Ensure that functions with single or zero return
// values behave as expected.
function decodeReturnValue(types, msg) {
    const returnValues = (0, _candid.IDL).decode(types, (0, _.Buffer).from(msg));
    switch(returnValues.length){
        case 0:
            return undefined;
        case 1:
            return returnValues[0];
        default:
            return returnValues;
    }
}
const DEFAULT_ACTOR_CONFIG = {
    pollingStrategyFactory: (0, _polling.strategy).defaultStrategy
};
const ACTOR_METHOD_WITH_HTTP_DETAILS = "http-details";
function _createActorMethod(actor, methodName, func, blsVerify) {
    let caller;
    if (func.annotations.includes("query") || func.annotations.includes("composite_query")) caller = async (options, ...args)=>{
        var _a, _b;
        // First, if there's a config transformation, call it.
        options = Object.assign(Object.assign({}, options), (_b = (_a = actor[metadataSymbol].config).queryTransform) === null || _b === void 0 ? void 0 : _b.call(_a, methodName, args, Object.assign(Object.assign({}, actor[metadataSymbol].config), options)));
        const agent = options.agent || actor[metadataSymbol].config.agent || (0, _agent.getDefaultAgent)();
        const cid = (0, _principal.Principal).from(options.canisterId || actor[metadataSymbol].config.canisterId);
        const arg = (0, _candid.IDL).encode(func.argTypes, args);
        const result = await agent.query(cid, {
            methodName,
            arg
        });
        switch(result.status){
            case "rejected" /* QueryResponseStatus.Rejected */ :
                throw new QueryCallRejectedError(cid, methodName, result);
            case "replied" /* QueryResponseStatus.Replied */ :
                return func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS) ? {
                    httpDetails: result.httpDetails,
                    result: decodeReturnValue(func.retTypes, result.reply.arg)
                } : decodeReturnValue(func.retTypes, result.reply.arg);
        }
    };
    else caller = async (options, ...args)=>{
        var _a, _b;
        // First, if there's a config transformation, call it.
        options = Object.assign(Object.assign({}, options), (_b = (_a = actor[metadataSymbol].config).callTransform) === null || _b === void 0 ? void 0 : _b.call(_a, methodName, args, Object.assign(Object.assign({}, actor[metadataSymbol].config), options)));
        const agent = options.agent || actor[metadataSymbol].config.agent || (0, _agent.getDefaultAgent)();
        const { canisterId, effectiveCanisterId, pollingStrategyFactory } = Object.assign(Object.assign(Object.assign({}, DEFAULT_ACTOR_CONFIG), actor[metadataSymbol].config), options);
        const cid = (0, _principal.Principal).from(canisterId);
        const ecid = effectiveCanisterId !== undefined ? (0, _principal.Principal).from(effectiveCanisterId) : cid;
        const arg = (0, _candid.IDL).encode(func.argTypes, args);
        const { requestId, response } = await agent.call(cid, {
            methodName,
            arg,
            effectiveCanisterId: ecid
        });
        if (!response.ok || response.body /* IC-1462 */ ) throw new UpdateCallRejectedError(cid, methodName, requestId, response);
        const pollStrategy = pollingStrategyFactory();
        const responseBytes = await (0, _polling.pollForResponse)(agent, ecid, requestId, pollStrategy, blsVerify);
        const shouldIncludeHttpDetails = func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS);
        if (responseBytes !== undefined) return shouldIncludeHttpDetails ? {
            httpDetails: response,
            result: decodeReturnValue(func.retTypes, responseBytes)
        } : decodeReturnValue(func.retTypes, responseBytes);
        else if (func.retTypes.length === 0) return shouldIncludeHttpDetails ? {
            httpDetails: response,
            result: undefined
        } : undefined;
        else throw new Error(`Call was returned undefined, but type [${func.retTypes.join(",")}].`);
    };
    const handler = (...args)=>caller({}, ...args);
    handler.withOptions = (options)=>(...args)=>caller(options, ...args);
    return handler;
}
function getManagementCanister(config) {
    function transform(_methodName, args, _callConfig) {
        const first = args[0];
        let effectiveCanisterId = (0, _principal.Principal).fromHex("");
        if (first && typeof first === "object" && first.canister_id) effectiveCanisterId = (0, _principal.Principal).from(first.canister_id);
        return {
            effectiveCanisterId
        };
    }
    return Actor.createActor((0, _managementIdlDefault.default), Object.assign(Object.assign(Object.assign({}, config), {
        canisterId: (0, _principal.Principal).fromHex("")
    }), {
        callTransform: transform,
        queryTransform: transform
    }));
}

},{"buffer/":"h1KaJ","./agent":"cZYac","./errors":"b8vi6","@dfinity/candid":"aRzWd","./polling":"6JXl5","@dfinity/principal":"lPNel","./utils/buffer":"lLl6e","./canisters/management_idl":"ggfBH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1KaJ":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("92cf4c76e906deec");
const ieee754 = require("6dc3416ac459a72b");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"92cf4c76e906deec":"eIiSV","6dc3416ac459a72b":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"cZYac":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultAgent", ()=>getDefaultAgent);
var _api = require("./api");
parcelHelpers.exportAll(_api, exports);
var _http = require("./http");
parcelHelpers.exportAll(_http, exports);
var _proxy = require("./proxy");
parcelHelpers.exportAll(_proxy, exports);
var global = arguments[3];
function getDefaultAgent() {
    const agent = typeof window === "undefined" ? typeof global === "undefined" ? typeof self === "undefined" ? undefined : self.ic.agent : global.ic.agent : window.ic.agent;
    if (!agent) throw new Error("No Agent could be found.");
    return agent;
}

},{"./api":"bHbrS","./http":"gUBQk","./proxy":"1d5OW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHbrS":[function(require,module,exports) {
/**
 * Codes used by the replica for rejecting a message.
 * See {@link https://sdk.dfinity.org/docs/interface-spec/#reject-codes | the interface spec}.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReplicaRejectCode", ()=>ReplicaRejectCode);
var ReplicaRejectCode;
(function(ReplicaRejectCode) {
    ReplicaRejectCode[ReplicaRejectCode["SysFatal"] = 1] = "SysFatal";
    ReplicaRejectCode[ReplicaRejectCode["SysTransient"] = 2] = "SysTransient";
    ReplicaRejectCode[ReplicaRejectCode["DestinationInvalid"] = 3] = "DestinationInvalid";
    ReplicaRejectCode[ReplicaRejectCode["CanisterReject"] = 4] = "CanisterReject";
    ReplicaRejectCode[ReplicaRejectCode["CanisterError"] = 5] = "CanisterError";
})(ReplicaRejectCode || (ReplicaRejectCode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gUBQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeNonce", ()=>(0, _types.makeNonce));
parcelHelpers.export(exports, "RequestStatusResponseStatus", ()=>RequestStatusResponseStatus);
parcelHelpers.export(exports, "IdentityInvalidError", ()=>IdentityInvalidError);
// A HTTP agent allows users to interact with a client of the internet computer
// using the available methods. It exposes an API that closely follows the
// public view of the internet computer, and is not intended to be exposed
// directly to the majority of users due to its low-level interface.
//
// There is a pipeline to apply transformations to the request before sending
// it to the client. This is to decouple signature, nonce generation and
// other computations so that this class can stay as simple as possible while
// allowing extensions.
parcelHelpers.export(exports, "HttpAgent", ()=>HttpAgent);
var _principal = require("@dfinity/principal");
var _errors = require("../../errors");
var _auth = require("../../auth");
var _cbor = require("../../cbor");
var _requestId = require("../../request_id");
var _buffer = require("../../utils/buffer");
var _transforms = require("./transforms");
var _types = require("./types");
var _errors1 = require("./errors");
var _canisterStatus = require("../../canisterStatus");
var _certificate = require("../../certificate");
var _ed25519 = require("@noble/curves/ed25519");
var _expirableMap = require("../../utils/expirableMap");
var _publicKey = require("../../public_key");
parcelHelpers.exportAll(_transforms, exports);
var global = arguments[3];
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
var _HttpAgent_queryPipeline, _HttpAgent_updatePipeline, _HttpAgent_subnetKeys, _HttpAgent_verifyQuerySignatures, _HttpAgent_verifyQueryResponse;
var RequestStatusResponseStatus;
(function(RequestStatusResponseStatus) {
    RequestStatusResponseStatus["Received"] = "received";
    RequestStatusResponseStatus["Processing"] = "processing";
    RequestStatusResponseStatus["Replied"] = "replied";
    RequestStatusResponseStatus["Rejected"] = "rejected";
    RequestStatusResponseStatus["Unknown"] = "unknown";
    RequestStatusResponseStatus["Done"] = "done";
})(RequestStatusResponseStatus || (RequestStatusResponseStatus = {}));
// Default delta for ingress expiry is 5 minutes.
const DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS = 300000;
// Root public key for the IC, encoded as hex
const IC_ROOT_KEY = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae";
// IC0 domain info
const IC0_DOMAIN = "ic0.app";
const IC0_SUB_DOMAIN = ".ic0.app";
const ICP0_DOMAIN = "icp0.io";
const ICP0_SUB_DOMAIN = ".icp0.io";
const ICP_API_DOMAIN = "icp-api.io";
const ICP_API_SUB_DOMAIN = ".icp-api.io";
class HttpDefaultFetchError extends (0, _errors.AgentError) {
    constructor(message){
        super(message);
        this.message = message;
    }
}
class IdentityInvalidError extends (0, _errors.AgentError) {
    constructor(message){
        super(message);
        this.message = message;
    }
}
function getDefaultFetch() {
    let defaultFetch;
    if (typeof window !== "undefined") {
        // Browser context
        if (window.fetch) defaultFetch = window.fetch.bind(window);
        else throw new HttpDefaultFetchError("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present.");
    } else if (typeof global !== "undefined") {
        // Node context
        if (global.fetch) defaultFetch = global.fetch.bind(global);
        else throw new HttpDefaultFetchError("Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available.");
    } else if (typeof self !== "undefined") {
        if (self.fetch) defaultFetch = self.fetch.bind(self);
    }
    if (defaultFetch) return defaultFetch;
    throw new HttpDefaultFetchError("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context.");
}
class HttpAgent {
    constructor(options = {}){
        this.rootKey = (0, _buffer.fromHex)(IC_ROOT_KEY);
        this._timeDiffMsecs = 0;
        this._rootKeyFetched = false;
        this._isAgent = true;
        _HttpAgent_queryPipeline.set(this, []);
        _HttpAgent_updatePipeline.set(this, []);
        _HttpAgent_subnetKeys.set(this, new (0, _expirableMap.ExpirableMap)({
            expirationTime: 300000
        }));
        _HttpAgent_verifyQuerySignatures.set(this, true);
        /**
         * See https://internetcomputer.org/docs/current/references/ic-interface-spec/#http-query for details on validation
         * @param queryResponse - The response from the query
         * @param subnetStatus - The subnet status, including all node keys
         * @returns ApiQueryResponse
         */ _HttpAgent_verifyQueryResponse.set(this, (queryResponse, subnetStatus)=>{
            if (__classPrivateFieldGet(this, _HttpAgent_verifyQuerySignatures, "f") === false) // This should not be called if the user has disabled verification
            return queryResponse;
            if (!subnetStatus) throw new (0, _certificate.CertificateVerificationError)("Invalid signature from replica signed query: no matching node key found.");
            const { status, signatures = [], requestId } = queryResponse;
            const domainSeparator = new TextEncoder().encode("\vic-response");
            for (const sig of signatures){
                const { timestamp, identity } = sig;
                const nodeId = (0, _principal.Principal).fromUint8Array(identity).toText();
                let hash;
                // Hash is constructed differently depending on the status
                if (status === "replied") {
                    const { reply } = queryResponse;
                    hash = (0, _requestId.hashOfMap)({
                        status: status,
                        reply: reply,
                        timestamp: BigInt(timestamp),
                        request_id: requestId
                    });
                } else if (status === "rejected") {
                    const { reject_code, reject_message, error_code } = queryResponse;
                    hash = (0, _requestId.hashOfMap)({
                        status: status,
                        reject_code: reject_code,
                        reject_message: reject_message,
                        error_code: error_code,
                        timestamp: BigInt(timestamp),
                        request_id: requestId
                    });
                } else throw new Error(`Unknown status: ${status}`);
                const separatorWithHash = (0, _buffer.concat)(domainSeparator, new Uint8Array(hash));
                // FIX: check for match without verifying N times
                const pubKey = subnetStatus === null || subnetStatus === void 0 ? void 0 : subnetStatus.nodeKeys.get(nodeId);
                if (!pubKey) throw new (0, _certificate.CertificateVerificationError)("Invalid signature from replica signed query: no matching node key found.");
                const rawKey = (0, _publicKey.Ed25519PublicKey).fromDer(pubKey).rawKey;
                const valid = (0, _ed25519.ed25519).verify(sig.signature, new Uint8Array(separatorWithHash), new Uint8Array(rawKey));
                if (valid) return queryResponse;
                throw new (0, _certificate.CertificateVerificationError)(`Invalid signature from replica ${nodeId} signed query.`);
            }
            return queryResponse;
        });
        if (options.source) {
            if (!(options.source instanceof HttpAgent)) throw new Error("An Agent's source can only be another HttpAgent");
            this._identity = options.source._identity;
            this._fetch = options.source._fetch;
            this._host = options.source._host;
            this._credentials = options.source._credentials;
        } else {
            this._fetch = options.fetch || getDefaultFetch() || fetch.bind(global);
            this._fetchOptions = options.fetchOptions;
            this._callOptions = options.callOptions;
        }
        if (options.host !== undefined) {
            if (!options.host.match(/^[a-z]+:/) && typeof window !== "undefined") this._host = new URL(window.location.protocol + "//" + options.host);
            else this._host = new URL(options.host);
        } else if (options.source !== undefined) // Safe to ignore here.
        this._host = options.source._host;
        else {
            const location = typeof window !== "undefined" ? window.location : undefined;
            if (!location) {
                this._host = new URL("https://icp-api.io");
                console.warn("Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning.");
            }
            // Mainnet and local will have the api route available
            const knownHosts = [
                "ic0.app",
                "icp0.io",
                "127.0.0.1",
                "localhost"
            ];
            const hostname = location === null || location === void 0 ? void 0 : location.hostname;
            let knownHost;
            if (hostname && typeof hostname === "string") knownHost = knownHosts.find((host)=>hostname.endsWith(host));
            if (location && knownHost) // If the user is on a boundary-node provided host, we can use the same host for the agent
            this._host = new URL(`${location.protocol}//${knownHost}${location.port ? ":" + location.port : ""}`);
            else {
                this._host = new URL("https://icp-api.io");
                console.warn("Could not infer host from window.location, defaulting to mainnet gateway of https://icp-api.io. Please provide a host to the HttpAgent constructor to avoid this warning.");
            }
        }
        if (options.verifyQuerySignatures !== undefined) __classPrivateFieldSet(this, _HttpAgent_verifyQuerySignatures, options.verifyQuerySignatures, "f");
        // Default is 3, only set from option if greater or equal to 0
        this._retryTimes = options.retryTimes !== undefined && options.retryTimes >= 0 ? options.retryTimes : 3;
        // Rewrite to avoid redirects
        if (this._host.hostname.endsWith(IC0_SUB_DOMAIN)) this._host.hostname = IC0_DOMAIN;
        else if (this._host.hostname.endsWith(ICP0_SUB_DOMAIN)) this._host.hostname = ICP0_DOMAIN;
        else if (this._host.hostname.endsWith(ICP_API_SUB_DOMAIN)) this._host.hostname = ICP_API_DOMAIN;
        if (options.credentials) {
            const { name, password } = options.credentials;
            this._credentials = `${name}${password ? ":" + password : ""}`;
        }
        this._identity = Promise.resolve(options.identity || new (0, _auth.AnonymousIdentity)());
        // Add a nonce transform to ensure calls are unique
        this.addTransform("update", (0, _transforms.makeNonceTransform)((0, _types.makeNonce)));
        if (options.useQueryNonces) this.addTransform("query", (0, _transforms.makeNonceTransform)((0, _types.makeNonce)));
    }
    isLocal() {
        const hostname = this._host.hostname;
        return hostname === "127.0.0.1" || hostname.endsWith("127.0.0.1");
    }
    addTransform(type, fn, priority = fn.priority || 0) {
        if (type === "update") {
            // Keep the pipeline sorted at all time, by priority.
            const i = __classPrivateFieldGet(this, _HttpAgent_updatePipeline, "f").findIndex((x)=>(x.priority || 0) < priority);
            __classPrivateFieldGet(this, _HttpAgent_updatePipeline, "f").splice(i >= 0 ? i : __classPrivateFieldGet(this, _HttpAgent_updatePipeline, "f").length, 0, Object.assign(fn, {
                priority
            }));
        } else if (type === "query") {
            // Keep the pipeline sorted at all time, by priority.
            const i = __classPrivateFieldGet(this, _HttpAgent_queryPipeline, "f").findIndex((x)=>(x.priority || 0) < priority);
            __classPrivateFieldGet(this, _HttpAgent_queryPipeline, "f").splice(i >= 0 ? i : __classPrivateFieldGet(this, _HttpAgent_queryPipeline, "f").length, 0, Object.assign(fn, {
                priority
            }));
        }
    }
    async getPrincipal() {
        if (!this._identity) throw new IdentityInvalidError("This identity has expired due this application's security policy. Please refresh your authentication.");
        return (await this._identity).getPrincipal();
    }
    async call(canisterId, options, identity) {
        const id = await (identity !== undefined ? await identity : await this._identity);
        if (!id) throw new IdentityInvalidError("This identity has expired due this application's security policy. Please refresh your authentication.");
        const canister = (0, _principal.Principal).from(canisterId);
        const ecid = options.effectiveCanisterId ? (0, _principal.Principal).from(options.effectiveCanisterId) : canister;
        const sender = id.getPrincipal() || (0, _principal.Principal).anonymous();
        let ingress_expiry = new (0, _transforms.Expiry)(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS);
        // If the value is off by more than 30 seconds, reconcile system time with the network
        if (Math.abs(this._timeDiffMsecs) > 30000) ingress_expiry = new (0, _transforms.Expiry)(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS + this._timeDiffMsecs);
        const submit = {
            request_type: (0, _types.SubmitRequestType).Call,
            canister_id: canister,
            method_name: options.methodName,
            arg: options.arg,
            sender,
            ingress_expiry
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let transformedRequest = await this._transform({
            request: {
                body: null,
                method: "POST",
                headers: Object.assign({
                    "Content-Type": "application/cbor"
                }, this._credentials ? {
                    Authorization: "Basic " + btoa(this._credentials)
                } : {})
            },
            endpoint: "call" /* Endpoint.Call */ ,
            body: submit
        });
        // Apply transform for identity.
        transformedRequest = await id.transformRequest(transformedRequest);
        const body = _cbor.encode(transformedRequest.body);
        // Run both in parallel. The fetch is quite expensive, so we have plenty of time to
        // calculate the requestId locally.
        const request = this._requestAndRetry(()=>this._fetch("" + new URL(`/api/v2/canister/${ecid.toText()}/call`, this._host), Object.assign(Object.assign(Object.assign({}, this._callOptions), transformedRequest.request), {
                body
            })));
        const [response, requestId] = await Promise.all([
            request,
            (0, _requestId.requestIdOf)(submit)
        ]);
        const responseBuffer = await response.arrayBuffer();
        const responseBody = response.status === 200 && responseBuffer.byteLength > 0 ? _cbor.decode(responseBuffer) : null;
        return {
            requestId,
            response: {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                body: responseBody,
                headers: (0, _transforms.httpHeadersTransform)(response.headers)
            }
        };
    }
    async _requestAndRetry(request, tries = 0) {
        let response;
        try {
            response = await request();
        } catch (error) {
            if (this._retryTimes > tries) {
                console.warn(`Caught exception while attempting to make request:\n` + `  ${error}\n` + `  Retrying request.`);
                return await this._requestAndRetry(request, tries + 1);
            }
            throw error;
        }
        if (response.ok) return response;
        const responseText = await response.clone().text();
        const errorMessage = `Server returned an error:\n` + `  Code: ${response.status} (${response.statusText})\n` + `  Body: ${responseText}\n`;
        if (this._retryTimes > tries) {
            console.warn(errorMessage + `  Retrying request.`);
            return await this._requestAndRetry(request, tries + 1);
        }
        throw new (0, _errors1.AgentHTTPResponseError)(errorMessage, {
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
            headers: (0, _transforms.httpHeadersTransform)(response.headers)
        });
    }
    async query(canisterId, fields, identity) {
        const makeQuery = async ()=>{
            const id = await (identity !== undefined ? await identity : await this._identity);
            if (!id) throw new IdentityInvalidError("This identity has expired due this application's security policy. Please refresh your authentication.");
            const canister = (0, _principal.Principal).from(canisterId);
            const sender = (id === null || id === void 0 ? void 0 : id.getPrincipal()) || (0, _principal.Principal).anonymous();
            const request = {
                request_type: "query" /* ReadRequestType.Query */ ,
                canister_id: canister,
                method_name: fields.methodName,
                arg: fields.arg,
                sender,
                ingress_expiry: new (0, _transforms.Expiry)(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS)
            };
            const requestId = await (0, _requestId.requestIdOf)(request);
            // TODO: remove this any. This can be a Signed or UnSigned request.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let transformedRequest = await this._transform({
                request: {
                    method: "POST",
                    headers: Object.assign({
                        "Content-Type": "application/cbor"
                    }, this._credentials ? {
                        Authorization: "Basic " + btoa(this._credentials)
                    } : {})
                },
                endpoint: "read" /* Endpoint.Query */ ,
                body: request
            });
            // Apply transform for identity.
            transformedRequest = await (id === null || id === void 0 ? void 0 : id.transformRequest(transformedRequest));
            const body = _cbor.encode(transformedRequest.body);
            const response = await this._requestAndRetry(()=>this._fetch("" + new URL(`/api/v2/canister/${canister.toText()}/query`, this._host), Object.assign(Object.assign(Object.assign({}, this._fetchOptions), transformedRequest.request), {
                    body
                })));
            const queryResponse = _cbor.decode(await response.arrayBuffer());
            return Object.assign(Object.assign({}, queryResponse), {
                httpDetails: {
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    headers: (0, _transforms.httpHeadersTransform)(response.headers)
                },
                requestId
            });
        };
        const getSubnetStatus = async ()=>{
            if (!__classPrivateFieldGet(this, _HttpAgent_verifyQuerySignatures, "f")) return undefined;
            const subnetStatus = __classPrivateFieldGet(this, _HttpAgent_subnetKeys, "f").get(canisterId.toString());
            if (subnetStatus) return subnetStatus;
            await this.fetchSubnetKeys(canisterId.toString());
            return __classPrivateFieldGet(this, _HttpAgent_subnetKeys, "f").get(canisterId.toString());
        };
        // Make query and fetch subnet keys in parallel
        const [query, subnetStatus] = await Promise.all([
            makeQuery(),
            getSubnetStatus()
        ]);
        // Skip verification if the user has disabled it
        if (!__classPrivateFieldGet(this, _HttpAgent_verifyQuerySignatures, "f")) return query;
        try {
            return __classPrivateFieldGet(this, _HttpAgent_verifyQueryResponse, "f").call(this, query, subnetStatus);
        } catch (_) {
            // In case the node signatures have changed, refresh the subnet keys and try again
            console.warn("Query response verification failed. Retrying with fresh subnet keys.");
            __classPrivateFieldGet(this, _HttpAgent_subnetKeys, "f").delete(canisterId.toString());
            await this.fetchSubnetKeys(canisterId.toString());
            const updatedSubnetStatus = __classPrivateFieldGet(this, _HttpAgent_subnetKeys, "f").get(canisterId.toString());
            if (!updatedSubnetStatus) throw new (0, _certificate.CertificateVerificationError)("Invalid signature from replica signed query: no matching node key found.");
            return __classPrivateFieldGet(this, _HttpAgent_verifyQueryResponse, "f").call(this, query, updatedSubnetStatus);
        }
    }
    async createReadStateRequest(fields, identity) {
        const id = await (identity !== undefined ? await identity : await this._identity);
        if (!id) throw new IdentityInvalidError("This identity has expired due this application's security policy. Please refresh your authentication.");
        const sender = (id === null || id === void 0 ? void 0 : id.getPrincipal()) || (0, _principal.Principal).anonymous();
        // TODO: remove this any. This can be a Signed or UnSigned request.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transformedRequest = await this._transform({
            request: {
                method: "POST",
                headers: Object.assign({
                    "Content-Type": "application/cbor"
                }, this._credentials ? {
                    Authorization: "Basic " + btoa(this._credentials)
                } : {})
            },
            endpoint: "read_state" /* Endpoint.ReadState */ ,
            body: {
                request_type: "read_state" /* ReadRequestType.ReadState */ ,
                paths: fields.paths,
                sender,
                ingress_expiry: new (0, _transforms.Expiry)(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS)
            }
        });
        // Apply transform for identity.
        return id === null || id === void 0 ? void 0 : id.transformRequest(transformedRequest);
    }
    async readState(canisterId, fields, identity, // eslint-disable-next-line
    request) {
        const canister = typeof canisterId === "string" ? (0, _principal.Principal).fromText(canisterId) : canisterId;
        const transformedRequest = request !== null && request !== void 0 ? request : await this.createReadStateRequest(fields, identity);
        const body = _cbor.encode(transformedRequest.body);
        // TODO - https://dfinity.atlassian.net/browse/SDK-1092
        const response = await this._requestAndRetry(()=>this._fetch("" + new URL(`/api/v2/canister/${canister}/read_state`, this._host), Object.assign(Object.assign(Object.assign({}, this._fetchOptions), transformedRequest.request), {
                body
            })));
        if (!response.ok) throw new Error(`Server returned an error:\n` + `  Code: ${response.status} (${response.statusText})\n` + `  Body: ${await response.text()}\n`);
        return _cbor.decode(await response.arrayBuffer());
    }
    /**
     * Allows agent to sync its time with the network. Can be called during intialization or mid-lifecycle if the device's clock has drifted away from the network time. This is necessary to set the Expiry for a request
     * @param {Principal} canisterId - Pass a canister ID if you need to sync the time with a particular replica. Uses the management canister by default
     */ async syncTime(canisterId) {
        const CanisterStatus = await require("fe5c2dc774e88dbe");
        const callTime = Date.now();
        try {
            if (!canisterId) console.log("Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
            const status = await CanisterStatus.request({
                // Fall back with canisterId of the ICP Ledger
                canisterId: canisterId !== null && canisterId !== void 0 ? canisterId : (0, _principal.Principal).from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
                agent: this,
                paths: [
                    "time"
                ]
            });
            const replicaTime = status.get("time");
            if (replicaTime) this._timeDiffMsecs = Number(replicaTime) - Number(callTime);
        } catch (error) {
            console.error("Caught exception while attempting to sync time:", error);
        }
    }
    async status() {
        const headers = this._credentials ? {
            Authorization: "Basic " + btoa(this._credentials)
        } : {};
        const response = await this._requestAndRetry(()=>this._fetch("" + new URL(`/api/v2/status`, this._host), Object.assign({
                headers
            }, this._fetchOptions)));
        return _cbor.decode(await response.arrayBuffer());
    }
    async fetchRootKey() {
        if (!this._rootKeyFetched) {
            // Hex-encoded version of the replica root key
            this.rootKey = (await this.status()).root_key;
            this._rootKeyFetched = true;
        }
        return this.rootKey;
    }
    invalidateIdentity() {
        this._identity = null;
    }
    replaceIdentity(identity) {
        this._identity = Promise.resolve(identity);
    }
    async fetchSubnetKeys(canisterId) {
        const effectiveCanisterId = (0, _principal.Principal).from(canisterId);
        const response = await (0, _canisterStatus.request)({
            canisterId: effectiveCanisterId,
            paths: [
                "subnet"
            ],
            agent: this
        });
        const subnetResponse = response.get("subnet");
        if (subnetResponse && typeof subnetResponse === "object" && "nodeKeys" in subnetResponse) {
            __classPrivateFieldGet(this, _HttpAgent_subnetKeys, "f").set(effectiveCanisterId.toText(), subnetResponse);
            return subnetResponse;
        }
        // If the subnet status is not returned, return undefined
        return undefined;
    }
    _transform(request) {
        let p = Promise.resolve(request);
        if (request.endpoint === "call" /* Endpoint.Call */ ) for (const fn of __classPrivateFieldGet(this, _HttpAgent_updatePipeline, "f"))p = p.then((r)=>fn(r).then((r2)=>r2 || r));
        else for (const fn of __classPrivateFieldGet(this, _HttpAgent_queryPipeline, "f"))p = p.then((r)=>fn(r).then((r2)=>r2 || r));
        return p;
    }
}
_HttpAgent_queryPipeline = new WeakMap(), _HttpAgent_updatePipeline = new WeakMap(), _HttpAgent_subnetKeys = new WeakMap(), _HttpAgent_verifyQuerySignatures = new WeakMap(), _HttpAgent_verifyQueryResponse = new WeakMap();

},{"@dfinity/principal":"lPNel","../../errors":"b8vi6","../../auth":"9VoIX","../../cbor":"his1y","../../request_id":"jsPqV","../../utils/buffer":"lLl6e","./transforms":"cTcPG","./types":"5DQrM","./errors":"3pA2t","../../canisterStatus":"3k2wA","../../certificate":"bJv6G","@noble/curves/ed25519":"f6cMq","../../utils/expirableMap":"5EEKT","../../public_key":"3HXiQ","fe5c2dc774e88dbe":"gB3B3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPNel":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JSON_KEY_PRINCIPAL", ()=>JSON_KEY_PRINCIPAL);
parcelHelpers.export(exports, "Principal", ()=>Principal);
var _base32 = require("./utils/base32");
var _getCrc = require("./utils/getCrc");
var _sha224 = require("./utils/sha224");
const JSON_KEY_PRINCIPAL = "__principal__";
const SELF_AUTHENTICATING_SUFFIX = 2;
const ANONYMOUS_SUFFIX = 4;
const MANAGEMENT_CANISTER_PRINCIPAL_HEX_STR = "aaaaa-aa";
const fromHexString = (hexString)=>{
    var _a;
    return new Uint8Array(((_a = hexString.match(/.{1,2}/g)) !== null && _a !== void 0 ? _a : []).map((byte)=>parseInt(byte, 16)));
};
const toHexString = (bytes)=>bytes.reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
class Principal {
    constructor(_arr){
        this._arr = _arr;
        this._isPrincipal = true;
    }
    static anonymous() {
        return new this(new Uint8Array([
            ANONYMOUS_SUFFIX
        ]));
    }
    /**
     * Utility method, returning the principal representing the management canister, decoded from the hex string `'aaaaa-aa'`
     * @returns {Principal} principal of the management canister
     */ static managementCanister() {
        return this.fromHex(MANAGEMENT_CANISTER_PRINCIPAL_HEX_STR);
    }
    static selfAuthenticating(publicKey) {
        const sha = (0, _sha224.sha224)(publicKey);
        return new this(new Uint8Array([
            ...sha,
            SELF_AUTHENTICATING_SUFFIX
        ]));
    }
    static from(other) {
        if (typeof other === "string") return Principal.fromText(other);
        else if (Object.getPrototypeOf(other) === Uint8Array.prototype) return new Principal(other);
        else if (typeof other === "object" && other !== null && other._isPrincipal === true) return new Principal(other._arr);
        throw new Error(`Impossible to convert ${JSON.stringify(other)} to Principal.`);
    }
    static fromHex(hex) {
        return new this(fromHexString(hex));
    }
    static fromText(text) {
        let maybePrincipal = text;
        // If formatted as JSON string, parse it first
        if (text.includes(JSON_KEY_PRINCIPAL)) {
            const obj = JSON.parse(text);
            if (JSON_KEY_PRINCIPAL in obj) maybePrincipal = obj[JSON_KEY_PRINCIPAL];
        }
        const canisterIdNoDash = maybePrincipal.toLowerCase().replace(/-/g, "");
        let arr = (0, _base32.decode)(canisterIdNoDash);
        arr = arr.slice(4, arr.length);
        const principal = new this(arr);
        if (principal.toText() !== maybePrincipal) throw new Error(`Principal "${principal.toText()}" does not have a valid checksum (original value "${maybePrincipal}" may not be a valid Principal ID).`);
        return principal;
    }
    static fromUint8Array(arr) {
        return new this(arr);
    }
    isAnonymous() {
        return this._arr.byteLength === 1 && this._arr[0] === ANONYMOUS_SUFFIX;
    }
    toUint8Array() {
        return this._arr;
    }
    toHex() {
        return toHexString(this._arr).toUpperCase();
    }
    toText() {
        const checksumArrayBuf = new ArrayBuffer(4);
        const view = new DataView(checksumArrayBuf);
        view.setUint32(0, (0, _getCrc.getCrc32)(this._arr));
        const checksum = new Uint8Array(checksumArrayBuf);
        const bytes = Uint8Array.from(this._arr);
        const array = new Uint8Array([
            ...checksum,
            ...bytes
        ]);
        const result = (0, _base32.encode)(array);
        const matches = result.match(/.{1,5}/g);
        if (!matches) // This should only happen if there's no character, which is unreachable.
        throw new Error();
        return matches.join("-");
    }
    toString() {
        return this.toText();
    }
    /**
     * Serializes to JSON
     * @returns {JsonnablePrincipal} a JSON object with a single key, {@link JSON_KEY_PRINCIPAL}, whose value is the principal as a string
     */ toJSON() {
        return {
            [JSON_KEY_PRINCIPAL]: this.toText()
        };
    }
    /**
     * Utility method taking a Principal to compare against. Used for determining canister ranges in certificate verification
     * @param {Principal} other - a {@link Principal} to compare
     * @returns {'lt' | 'eq' | 'gt'} `'lt' | 'eq' | 'gt'` a string, representing less than, equal to, or greater than
     */ compareTo(other) {
        for(let i = 0; i < Math.min(this._arr.length, other._arr.length); i++){
            if (this._arr[i] < other._arr[i]) return "lt";
            else if (this._arr[i] > other._arr[i]) return "gt";
        }
        // Here, at least one principal is a prefix of the other principal (they could be the same)
        if (this._arr.length < other._arr.length) return "lt";
        if (this._arr.length > other._arr.length) return "gt";
        return "eq";
    }
    /**
     * Utility method checking whether a provided Principal is less than or equal to the current one using the {@link Principal.compareTo} method
     * @param other a {@link Principal} to compare
     * @returns {boolean} boolean
     */ ltEq(other) {
        const cmp = this.compareTo(other);
        return cmp == "lt" || cmp == "eq";
    }
    /**
     * Utility method checking whether a provided Principal is greater than or equal to the current one using the {@link Principal.compareTo} method
     * @param other a {@link Principal} to compare
     * @returns {boolean} boolean
     */ gtEq(other) {
        const cmp = this.compareTo(other);
        return cmp == "gt" || cmp == "eq";
    }
}

},{"./utils/base32":"d9ClU","./utils/getCrc":"f1C1a","./utils/sha224":"ch9wT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9ClU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param input The input array to encode.
 * @returns A Base32 string encoding the input.
 */ parcelHelpers.export(exports, "encode", ()=>encode);
/**
 * @param input The base32 encoded string to decode.
 */ parcelHelpers.export(exports, "decode", ()=>decode);
const alphabet = "abcdefghijklmnopqrstuvwxyz234567";
// Build a lookup table for decoding.
const lookupTable = Object.create(null);
for(let i = 0; i < alphabet.length; i++)lookupTable[alphabet[i]] = i;
// Add aliases for rfc4648.
lookupTable["0"] = lookupTable.o;
lookupTable["1"] = lookupTable.i;
function encode(input) {
    // How many bits will we skip from the first byte.
    let skip = 0;
    // 5 high bits, carry from one byte to the next.
    let bits = 0;
    // The output string in base32.
    let output = "";
    function encodeByte(byte) {
        if (skip < 0) // we have a carry from the previous byte
        bits |= byte >> -skip;
        else // no carry
        bits = byte << skip & 248;
        if (skip > 3) {
            // Not enough data to produce a character, get us another one
            skip -= 8;
            return 1;
        }
        if (skip < 4) {
            // produce a character
            output += alphabet[bits >> 3];
            skip += 5;
        }
        return 0;
    }
    for(let i = 0; i < input.length;)i += encodeByte(input[i]);
    return output + (skip < 0 ? alphabet[bits >> 3] : "");
}
function decode(input) {
    // how many bits we have from the previous character.
    let skip = 0;
    // current byte we're producing.
    let byte = 0;
    const output = new Uint8Array(input.length * 4 / 3 | 0);
    let o = 0;
    function decodeChar(char) {
        // Consume a character from the stream, store
        // the output in this.output. As before, better
        // to use update().
        let val = lookupTable[char.toLowerCase()];
        if (val === undefined) throw new Error(`Invalid character: ${JSON.stringify(char)}`);
        // move to the high bits
        val <<= 3;
        byte |= val >>> skip;
        skip += 5;
        if (skip >= 8) {
            // We have enough bytes to produce an output
            output[o++] = byte;
            skip -= 8;
            if (skip > 0) byte = val << 5 - skip & 255;
            else byte = 0;
        }
    }
    for (const c of input)decodeChar(c);
    return output.slice(0, o);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1C1a":[function(require,module,exports) {
// This file is translated to JavaScript from
// https://lxp32.github.io/docs/a-simple-example-crc32-calculation/
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculate the CRC32 of an ArrayBufferLike.
 * @param buf The BufferLike to calculate the CRC32 of.
 */ parcelHelpers.export(exports, "getCrc32", ()=>getCrc32);
const lookUpTable = new Uint32Array([
    0x00000000,
    0x77073096,
    0xee0e612c,
    0x990951ba,
    0x076dc419,
    0x706af48f,
    0xe963a535,
    0x9e6495a3,
    0x0edb8832,
    0x79dcb8a4,
    0xe0d5e91e,
    0x97d2d988,
    0x09b64c2b,
    0x7eb17cbd,
    0xe7b82d07,
    0x90bf1d91,
    0x1db71064,
    0x6ab020f2,
    0xf3b97148,
    0x84be41de,
    0x1adad47d,
    0x6ddde4eb,
    0xf4d4b551,
    0x83d385c7,
    0x136c9856,
    0x646ba8c0,
    0xfd62f97a,
    0x8a65c9ec,
    0x14015c4f,
    0x63066cd9,
    0xfa0f3d63,
    0x8d080df5,
    0x3b6e20c8,
    0x4c69105e,
    0xd56041e4,
    0xa2677172,
    0x3c03e4d1,
    0x4b04d447,
    0xd20d85fd,
    0xa50ab56b,
    0x35b5a8fa,
    0x42b2986c,
    0xdbbbc9d6,
    0xacbcf940,
    0x32d86ce3,
    0x45df5c75,
    0xdcd60dcf,
    0xabd13d59,
    0x26d930ac,
    0x51de003a,
    0xc8d75180,
    0xbfd06116,
    0x21b4f4b5,
    0x56b3c423,
    0xcfba9599,
    0xb8bda50f,
    0x2802b89e,
    0x5f058808,
    0xc60cd9b2,
    0xb10be924,
    0x2f6f7c87,
    0x58684c11,
    0xc1611dab,
    0xb6662d3d,
    0x76dc4190,
    0x01db7106,
    0x98d220bc,
    0xefd5102a,
    0x71b18589,
    0x06b6b51f,
    0x9fbfe4a5,
    0xe8b8d433,
    0x7807c9a2,
    0x0f00f934,
    0x9609a88e,
    0xe10e9818,
    0x7f6a0dbb,
    0x086d3d2d,
    0x91646c97,
    0xe6635c01,
    0x6b6b51f4,
    0x1c6c6162,
    0x856530d8,
    0xf262004e,
    0x6c0695ed,
    0x1b01a57b,
    0x8208f4c1,
    0xf50fc457,
    0x65b0d9c6,
    0x12b7e950,
    0x8bbeb8ea,
    0xfcb9887c,
    0x62dd1ddf,
    0x15da2d49,
    0x8cd37cf3,
    0xfbd44c65,
    0x4db26158,
    0x3ab551ce,
    0xa3bc0074,
    0xd4bb30e2,
    0x4adfa541,
    0x3dd895d7,
    0xa4d1c46d,
    0xd3d6f4fb,
    0x4369e96a,
    0x346ed9fc,
    0xad678846,
    0xda60b8d0,
    0x44042d73,
    0x33031de5,
    0xaa0a4c5f,
    0xdd0d7cc9,
    0x5005713c,
    0x270241aa,
    0xbe0b1010,
    0xc90c2086,
    0x5768b525,
    0x206f85b3,
    0xb966d409,
    0xce61e49f,
    0x5edef90e,
    0x29d9c998,
    0xb0d09822,
    0xc7d7a8b4,
    0x59b33d17,
    0x2eb40d81,
    0xb7bd5c3b,
    0xc0ba6cad,
    0xedb88320,
    0x9abfb3b6,
    0x03b6e20c,
    0x74b1d29a,
    0xead54739,
    0x9dd277af,
    0x04db2615,
    0x73dc1683,
    0xe3630b12,
    0x94643b84,
    0x0d6d6a3e,
    0x7a6a5aa8,
    0xe40ecf0b,
    0x9309ff9d,
    0x0a00ae27,
    0x7d079eb1,
    0xf00f9344,
    0x8708a3d2,
    0x1e01f268,
    0x6906c2fe,
    0xf762575d,
    0x806567cb,
    0x196c3671,
    0x6e6b06e7,
    0xfed41b76,
    0x89d32be0,
    0x10da7a5a,
    0x67dd4acc,
    0xf9b9df6f,
    0x8ebeeff9,
    0x17b7be43,
    0x60b08ed5,
    0xd6d6a3e8,
    0xa1d1937e,
    0x38d8c2c4,
    0x4fdff252,
    0xd1bb67f1,
    0xa6bc5767,
    0x3fb506dd,
    0x48b2364b,
    0xd80d2bda,
    0xaf0a1b4c,
    0x36034af6,
    0x41047a60,
    0xdf60efc3,
    0xa867df55,
    0x316e8eef,
    0x4669be79,
    0xcb61b38c,
    0xbc66831a,
    0x256fd2a0,
    0x5268e236,
    0xcc0c7795,
    0xbb0b4703,
    0x220216b9,
    0x5505262f,
    0xc5ba3bbe,
    0xb2bd0b28,
    0x2bb45a92,
    0x5cb36a04,
    0xc2d7ffa7,
    0xb5d0cf31,
    0x2cd99e8b,
    0x5bdeae1d,
    0x9b64c2b0,
    0xec63f226,
    0x756aa39c,
    0x026d930a,
    0x9c0906a9,
    0xeb0e363f,
    0x72076785,
    0x05005713,
    0x95bf4a82,
    0xe2b87a14,
    0x7bb12bae,
    0x0cb61b38,
    0x92d28e9b,
    0xe5d5be0d,
    0x7cdcefb7,
    0x0bdbdf21,
    0x86d3d2d4,
    0xf1d4e242,
    0x68ddb3f8,
    0x1fda836e,
    0x81be16cd,
    0xf6b9265b,
    0x6fb077e1,
    0x18b74777,
    0x88085ae6,
    0xff0f6a70,
    0x66063bca,
    0x11010b5c,
    0x8f659eff,
    0xf862ae69,
    0x616bffd3,
    0x166ccf45,
    0xa00ae278,
    0xd70dd2ee,
    0x4e048354,
    0x3903b3c2,
    0xa7672661,
    0xd06016f7,
    0x4969474d,
    0x3e6e77db,
    0xaed16a4a,
    0xd9d65adc,
    0x40df0b66,
    0x37d83bf0,
    0xa9bcae53,
    0xdebb9ec5,
    0x47b2cf7f,
    0x30b5ffe9,
    0xbdbdf21c,
    0xcabac28a,
    0x53b39330,
    0x24b4a3a6,
    0xbad03605,
    0xcdd70693,
    0x54de5729,
    0x23d967bf,
    0xb3667a2e,
    0xc4614ab8,
    0x5d681b02,
    0x2a6f2b94,
    0xb40bbe37,
    0xc30c8ea1,
    0x5a05df1b,
    0x2d02ef8d
]);
function getCrc32(buf) {
    const b = new Uint8Array(buf);
    let crc = -1;
    for(let i = 0; i < b.length; i++){
        const byte = b[i];
        const t = (byte ^ crc) & 0xff;
        crc = lookUpTable[t] ^ crc >>> 8;
    }
    return (crc ^ -1) >>> 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ch9wT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns the SHA224 hash of the buffer.
 * @param data Arraybuffer to encode
 */ parcelHelpers.export(exports, "sha224", ()=>sha224);
var _sha256 = require("@noble/hashes/sha256");
function sha224(data) {
    return (0, _sha256.sha224).create().update(new Uint8Array(data)).digest();
}

},{"@noble/hashes/sha256":"JjjO8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JjjO8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.sha256 = void 0;
const _sha2_js_1 = require("f0369f0173e40550");
const utils_js_1 = require("dd2d5fab8dc388cf");
// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());
exports.sha224 = (0, utils_js_1.wrapConstructor)(()=>new SHA224());

},{"f0369f0173e40550":"6HKeB","dd2d5fab8dc388cf":"2ehgp"}],"6HKeB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA2 = void 0;
const _assert_js_1 = require("96995f5a2c2249c4");
const utils_js_1 = require("c59c675893fdf798");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        (0, _assert_js_1.exists)(this);
        const { view, buffer, blockLen } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.SHA2 = SHA2;

},{"96995f5a2c2249c4":"BFdql","c59c675893fdf798":"2ehgp"}],"BFdql":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== "boolean") throw new Error(`Expected boolean, not ${b}`);
}
exports.bool = bool;
// copied from utils
function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
function bytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== "function" || typeof hash.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"2ehgp":[function(require,module,exports) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
const crypto_1 = require("308a0f9b8753b4af");
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
// Other libraries would silently corrupt the data instead of throwing an error,
// when they don't support it.
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!exports.isLE) throw new Error("Non little-endian hardware is not supported");
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, "0"));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    if (!isBytes(bytes)) throw new Error("Uint8Array expected");
    // pre-caching improves the speed 6x
    let hex = "";
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9) return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F) return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f) return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== "string") throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    if (!isBytes(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        if (!isBytes(a)) throw new Error("Uint8Array expected");
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== "[object Object]") throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    throw new Error("crypto.getRandomValues must be defined");
}
exports.randomBytes = randomBytes;

},{"308a0f9b8753b4af":"85XD8"}],"85XD8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : undefined;

},{}],"b8vi6":[function(require,module,exports) {
/**
 * An error that happens in the Agent. This is the root of all errors and should be used
 * everywhere in the Agent code (this package).
 *
 * @todo https://github.com/dfinity/agent-js/issues/420
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AgentError", ()=>AgentError);
class AgentError extends Error {
    constructor(message){
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, AgentError.prototype);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VoIX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An Identity that can sign blobs.
 */ parcelHelpers.export(exports, "SignIdentity", ()=>SignIdentity);
parcelHelpers.export(exports, "AnonymousIdentity", ()=>AnonymousIdentity);
/**
 * Create an IdentityDescriptor from a @dfinity/identity Identity
 * @param identity - identity describe in returned descriptor
 */ parcelHelpers.export(exports, "createIdentityDescriptor", ()=>createIdentityDescriptor);
var _principal = require("@dfinity/principal");
var _requestId = require("./request_id");
var _buffer = require("./utils/buffer");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const domainSeparator = new TextEncoder().encode("\nic-request");
class SignIdentity {
    /**
     * Get the principal represented by this identity. Normally should be a
     * `Principal.selfAuthenticating()`.
     */ getPrincipal() {
        if (!this._principal) this._principal = (0, _principal.Principal).selfAuthenticating(new Uint8Array(this.getPublicKey().toDer()));
        return this._principal;
    }
    /**
     * Transform a request into a signed version of the request. This is done last
     * after the transforms on the body of a request. The returned object can be
     * anything, but must be serializable to CBOR.
     * @param request - internet computer request to transform
     */ async transformRequest(request) {
        const { body } = request, fields = __rest(request, [
            "body"
        ]);
        const requestId = await (0, _requestId.requestIdOf)(body);
        return Object.assign(Object.assign({}, fields), {
            body: {
                content: body,
                sender_pubkey: this.getPublicKey().toDer(),
                sender_sig: await this.sign((0, _buffer.concat)(domainSeparator, requestId))
            }
        });
    }
}
class AnonymousIdentity {
    getPrincipal() {
        return (0, _principal.Principal).anonymous();
    }
    async transformRequest(request) {
        return Object.assign(Object.assign({}, request), {
            body: {
                content: request.body
            }
        });
    }
}
function createIdentityDescriptor(identity) {
    const identityIndicator = "getPublicKey" in identity ? {
        type: "PublicKeyIdentity",
        publicKey: (0, _buffer.toHex)(identity.getPublicKey().toDer())
    } : {
        type: "AnonymousIdentity"
    };
    return identityIndicator;
}

},{"@dfinity/principal":"lPNel","./request_id":"jsPqV","./utils/buffer":"lLl6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsPqV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * sha256 hash the provided Buffer
 * @param data - input to hash function
 */ parcelHelpers.export(exports, "hash", ()=>hash);
/**
 *
 * @param value unknown value
 * @returns ArrayBuffer
 */ parcelHelpers.export(exports, "hashValue", ()=>hashValue);
/**
 * Get the RequestId of the provided ic-ref request.
 * RequestId is the result of the representation-independent-hash function.
 * https://sdk.dfinity.org/docs/interface-spec/index.html#hash-of-map
 * @param request - ic-ref request to hash into RequestId
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
parcelHelpers.export(exports, "requestIdOf", ()=>requestIdOf);
/**
 * Hash a map into an ArrayBuffer using the representation-independent-hash function.
 * https://sdk.dfinity.org/docs/interface-spec/index.html#hash-of-map
 * @param map - Any non-nested object
 * @returns ArrayBuffer
 */ parcelHelpers.export(exports, "hashOfMap", ()=>hashOfMap);
var _candid = require("@dfinity/candid");
var _borc = require("borc");
var _borcDefault = parcelHelpers.interopDefault(_borc);
var _sha256 = require("@noble/hashes/sha256");
var _buffer = require("./utils/buffer");
function hash(data) {
    return (0, _buffer.uint8ToBuf)((0, _sha256.sha256).create().update(new Uint8Array(data)).digest());
}
function hashValue(value) {
    if (value instanceof (0, _borcDefault.default).Tagged) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return hashValue(value.value);
    else if (typeof value === "string") return hashString(value);
    else if (typeof value === "number") return hash((0, _candid.lebEncode)(value));
    else if (value instanceof ArrayBuffer || ArrayBuffer.isView(value)) return hash(value);
    else if (Array.isArray(value)) {
        const vals = value.map(hashValue);
        return hash((0, _buffer.concat)(...vals));
    } else if (value && typeof value === "object" && value._isPrincipal) return hash(value.toUint8Array());
    else if (typeof value === "object" && value !== null && typeof value.toHash === "function") return hashValue(value.toHash());
    else if (typeof value === "object") return hashOfMap(value);
    else if (typeof value === "bigint") // Do this check much later than the other bigint check because this one is much less
    // type-safe.
    // So we want to try all the high-assurance type guards before this 'probable' one.
    return hash((0, _candid.lebEncode)(value));
    throw Object.assign(new Error(`Attempt to hash a value of unsupported type: ${value}`), {
        // include so logs/callers can understand the confusing value.
        // (when stringified in error message, prototype info is lost)
        value
    });
}
const hashString = (value)=>{
    const encoded = new TextEncoder().encode(value);
    return hash(encoded);
};
function requestIdOf(request) {
    return hashOfMap(request);
}
function hashOfMap(map) {
    const hashed = Object.entries(map).filter(([, value])=>value !== undefined).map(([key, value])=>{
        const hashedKey = hashString(key);
        const hashedValue = hashValue(value);
        return [
            hashedKey,
            hashedValue
        ];
    });
    const traversed = hashed;
    const sorted = traversed.sort(([k1], [k2])=>{
        return (0, _buffer.compare)(k1, k2);
    });
    const concatenated = (0, _buffer.concat)(...sorted.map((x)=>(0, _buffer.concat)(...x)));
    const result = hash(concatenated);
    return result;
}

},{"@dfinity/candid":"aRzWd","borc":"1lEEY","@noble/hashes/sha256":"JjjO8","./utils/buffer":"lLl6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRzWd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IDL", ()=>_idl);
var _candidUi = require("./candid-ui");
parcelHelpers.exportAll(_candidUi, exports);
var _candidCore = require("./candid-core");
parcelHelpers.exportAll(_candidCore, exports);
var _idl = require("./idl");
var _hash = require("./utils/hash");
parcelHelpers.exportAll(_hash, exports);
var _leb128 = require("./utils/leb128");
parcelHelpers.exportAll(_leb128, exports);
var _buffer = require("./utils/buffer");
parcelHelpers.exportAll(_buffer, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./candid-ui":"8c0xy","./candid-core":"bL7RE","./idl":"hYDqa","./utils/hash":"9tk44","./utils/leb128":"kuZPL","./utils/buffer":"59in2","./types":"7wGIH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8c0xy":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inputBox", ()=>inputBox);
parcelHelpers.export(exports, "recordForm", ()=>recordForm);
parcelHelpers.export(exports, "tupleForm", ()=>tupleForm);
parcelHelpers.export(exports, "variantForm", ()=>variantForm);
parcelHelpers.export(exports, "optForm", ()=>optForm);
parcelHelpers.export(exports, "vecForm", ()=>vecForm);
parcelHelpers.export(exports, "Render", ()=>Render);
/**
 *
 * @param t an IDL type
 * @returns an input for that type
 */ parcelHelpers.export(exports, "renderInput", ()=>renderInput);
/**
 *
 * @param t an IDL Type
 * @param input an InputBox
 * @param value any
 * @returns rendering that value to the provided input
 */ parcelHelpers.export(exports, "renderValue", ()=>renderValue);
var _idl = require("./idl");
var _principal = require("@dfinity/principal");
var _candidCore = require("./candid-core");
const InputConfig = {
    parse: parsePrimitive
};
const FormConfig = {
    render: renderInput
};
const inputBox = (t, config)=>{
    return new _candidCore.InputBox(t, Object.assign(Object.assign({}, InputConfig), config));
};
const recordForm = (fields, config)=>{
    return new _candidCore.RecordForm(fields, Object.assign(Object.assign({}, FormConfig), config));
};
const tupleForm = (components, config)=>{
    return new _candidCore.TupleForm(components, Object.assign(Object.assign({}, FormConfig), config));
};
const variantForm = (fields, config)=>{
    return new _candidCore.VariantForm(fields, Object.assign(Object.assign({}, FormConfig), config));
};
const optForm = (ty, config)=>{
    return new _candidCore.OptionForm(ty, Object.assign(Object.assign({}, FormConfig), config));
};
const vecForm = (ty, config)=>{
    return new _candidCore.VecForm(ty, Object.assign(Object.assign({}, FormConfig), config));
};
class Render extends _idl.Visitor {
    visitType(t, d) {
        const input = document.createElement("input");
        input.classList.add("argument");
        input.placeholder = t.display();
        return inputBox(t, {
            input
        });
    }
    visitNull(t, d) {
        return inputBox(t, {});
    }
    visitRecord(t, fields, d) {
        let config = {};
        if (fields.length > 1) {
            const container = document.createElement("div");
            container.classList.add("popup-form");
            config = {
                container
            };
        }
        const form = recordForm(fields, config);
        return inputBox(t, {
            form
        });
    }
    visitTuple(t, components, d) {
        let config = {};
        if (components.length > 1) {
            const container = document.createElement("div");
            container.classList.add("popup-form");
            config = {
                container
            };
        }
        const form = tupleForm(components, config);
        return inputBox(t, {
            form
        });
    }
    visitVariant(t, fields, d) {
        const select = document.createElement("select");
        for (const [key, type] of fields){
            const option = new Option(key);
            select.add(option);
        }
        select.selectedIndex = -1;
        select.classList.add("open");
        const config = {
            open: select,
            event: "change"
        };
        const form = variantForm(fields, config);
        return inputBox(t, {
            form
        });
    }
    visitOpt(t, ty, d) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("open");
        const form = optForm(ty, {
            open: checkbox,
            event: "change"
        });
        return inputBox(t, {
            form
        });
    }
    visitVec(t, ty, d) {
        const len = document.createElement("input");
        len.type = "number";
        len.min = "0";
        len.max = "100";
        len.style.width = "8rem";
        len.placeholder = "len";
        len.classList.add("open");
        const container = document.createElement("div");
        container.classList.add("popup-form");
        const form = vecForm(ty, {
            open: len,
            event: "change",
            container
        });
        return inputBox(t, {
            form
        });
    }
    visitRec(t, ty, d) {
        return renderInput(ty);
    }
}
class Parse extends _idl.Visitor {
    visitNull(t, v) {
        return null;
    }
    visitBool(t, v) {
        if (v === "true") return true;
        if (v === "false") return false;
        throw new Error(`Cannot parse ${v} as boolean`);
    }
    visitText(t, v) {
        return v;
    }
    visitFloat(t, v) {
        return parseFloat(v);
    }
    visitFixedInt(t, v) {
        if (t._bits <= 32) return parseInt(v, 10);
        else return BigInt(v);
    }
    visitFixedNat(t, v) {
        if (t._bits <= 32) return parseInt(v, 10);
        else return BigInt(v);
    }
    visitNumber(t, v) {
        return BigInt(v);
    }
    visitPrincipal(t, v) {
        return (0, _principal.Principal).fromText(v);
    }
    visitService(t, v) {
        return (0, _principal.Principal).fromText(v);
    }
    visitFunc(t, v) {
        const x = v.split(".", 2);
        return [
            (0, _principal.Principal).fromText(x[0]),
            x[1]
        ];
    }
}
class Random extends _idl.Visitor {
    visitNull(t, v) {
        return null;
    }
    visitBool(t, v) {
        return Math.random() < 0.5;
    }
    visitText(t, v) {
        return Math.random().toString(36).substring(6);
    }
    visitFloat(t, v) {
        return Math.random();
    }
    visitInt(t, v) {
        return BigInt(this.generateNumber(true));
    }
    visitNat(t, v) {
        return BigInt(this.generateNumber(false));
    }
    visitFixedInt(t, v) {
        const x = this.generateNumber(true);
        if (t._bits <= 32) return x;
        else return BigInt(v);
    }
    visitFixedNat(t, v) {
        const x = this.generateNumber(false);
        if (t._bits <= 32) return x;
        else return BigInt(v);
    }
    generateNumber(signed) {
        const num = Math.floor(Math.random() * 100);
        if (signed && Math.random() < 0.5) return -num;
        else return num;
    }
}
function parsePrimitive(t, config, d) {
    if (config.random && d === "") return t.accept(new Random(), d);
    else return t.accept(new Parse(), d);
}
function renderInput(t) {
    return t.accept(new Render(), null);
}
function renderValue(t, input, value) {
    return t.accept(new RenderValue(), {
        input,
        value
    });
}
class RenderValue extends _idl.Visitor {
    visitType(t, d) {
        d.input.ui.input.value = t.valueToString(d.value);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    visitNull(t, d) {}
    visitText(t, d) {
        d.input.ui.input.value = d.value;
    }
    visitRec(t, ty, d) {
        renderValue(ty, d.input, d.value);
    }
    visitOpt(t, ty, d) {
        if (d.value.length === 0) return;
        else {
            const form = d.input.ui.form;
            const open = form.ui.open;
            open.checked = true;
            open.dispatchEvent(new Event(form.ui.event));
            renderValue(ty, form.form[0], d.value[0]);
        }
    }
    visitRecord(t, fields, d) {
        const form = d.input.ui.form;
        fields.forEach(([key, type], i)=>{
            renderValue(type, form.form[i], d.value[key]);
        });
    }
    visitTuple(t, components, d) {
        const form = d.input.ui.form;
        components.forEach((type, i)=>{
            renderValue(type, form.form[i], d.value[i]);
        });
    }
    visitVariant(t, fields, d) {
        const form = d.input.ui.form;
        const selected = Object.entries(d.value)[0];
        fields.forEach(([key, type], i)=>{
            if (key === selected[0]) {
                const open = form.ui.open;
                open.selectedIndex = i;
                open.dispatchEvent(new Event(form.ui.event));
                renderValue(type, form.form[0], selected[1]);
            }
        });
    }
    visitVec(t, ty, d) {
        const form = d.input.ui.form;
        const len = d.value.length;
        const open = form.ui.open;
        open.value = len;
        open.dispatchEvent(new Event(form.ui.event));
        d.value.forEach((v, i)=>{
            renderValue(ty, form.form[i], v);
        });
    }
}

},{"./idl":"hYDqa","@dfinity/principal":"lPNel","./candid-core":"bL7RE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYDqa":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Visitor", ()=>Visitor);
/**
 * Represents an IDL type.
 */ parcelHelpers.export(exports, "Type", ()=>Type);
parcelHelpers.export(exports, "PrimitiveType", ()=>PrimitiveType);
parcelHelpers.export(exports, "ConstructType", ()=>ConstructType);
/**
 * Represents an IDL Empty, a type which has no inhabitants.
 * Since no values exist for this type, it cannot be serialised or deserialised.
 * Result types like `Result<Text, Empty>` should always succeed.
 */ parcelHelpers.export(exports, "EmptyClass", ()=>EmptyClass);
/**
 * Represents an IDL Unknown, a placeholder type for deserialization only.
 * When decoding a value as Unknown, all fields will be retained but the names are only available in
 * hashed form.
 * A deserialized unknown will offer it's actual type by calling the `type()` function.
 * Unknown cannot be serialized and attempting to do so will throw an error.
 */ parcelHelpers.export(exports, "UnknownClass", ()=>UnknownClass);
/**
 * Represents an IDL Bool
 */ parcelHelpers.export(exports, "BoolClass", ()=>BoolClass);
/**
 * Represents an IDL Null
 */ parcelHelpers.export(exports, "NullClass", ()=>NullClass);
/**
 * Represents an IDL Reserved
 */ parcelHelpers.export(exports, "ReservedClass", ()=>ReservedClass);
/**
 * Represents an IDL Text
 */ parcelHelpers.export(exports, "TextClass", ()=>TextClass);
/**
 * Represents an IDL Int
 */ parcelHelpers.export(exports, "IntClass", ()=>IntClass);
/**
 * Represents an IDL Nat
 */ parcelHelpers.export(exports, "NatClass", ()=>NatClass);
/**
 * Represents an IDL Float
 */ parcelHelpers.export(exports, "FloatClass", ()=>FloatClass);
/**
 * Represents an IDL fixed-width Int(n)
 */ parcelHelpers.export(exports, "FixedIntClass", ()=>FixedIntClass);
/**
 * Represents an IDL fixed-width Nat(n)
 */ parcelHelpers.export(exports, "FixedNatClass", ()=>FixedNatClass);
/**
 * Represents an IDL Array
 *
 * Arrays of fixed-sized nat/int type (e.g. nat8), are encoded from and decoded to TypedArrays (e.g. Uint8Array).
 * Arrays of float or other non-primitive types are encoded/decoded as untyped array in Javascript.
 * @param {Type} t
 */ parcelHelpers.export(exports, "VecClass", ()=>VecClass);
/**
 * Represents an IDL Option
 * @param {Type} t
 */ parcelHelpers.export(exports, "OptClass", ()=>OptClass);
/**
 * Represents an IDL Record
 * @param {object} [fields] - mapping of function name to Type
 */ parcelHelpers.export(exports, "RecordClass", ()=>RecordClass);
/**
 * Represents Tuple, a syntactic sugar for Record.
 * @param {Type} components
 */ parcelHelpers.export(exports, "TupleClass", ()=>TupleClass);
/**
 * Represents an IDL Variant
 * @param {object} [fields] - mapping of function name to Type
 */ parcelHelpers.export(exports, "VariantClass", ()=>VariantClass);
/**
 * Represents a reference to an IDL type, used for defining recursive data
 * types.
 */ parcelHelpers.export(exports, "RecClass", ()=>RecClass);
/**
 * Represents an IDL principal reference
 */ parcelHelpers.export(exports, "PrincipalClass", ()=>PrincipalClass);
/**
 * Represents an IDL function reference.
 * @param argTypes Argument types.
 * @param retTypes Return types.
 * @param annotations Function annotations.
 */ parcelHelpers.export(exports, "FuncClass", ()=>FuncClass);
parcelHelpers.export(exports, "ServiceClass", ()=>ServiceClass);
/**
 * Encode a array of values
 * @param argTypes
 * @param args
 * @returns {Buffer} serialised value
 */ parcelHelpers.export(exports, "encode", ()=>encode);
/**
 * Decode a binary value
 * @param retTypes - Types expected in the buffer.
 * @param bytes - hex-encoded string, or buffer.
 * @returns Value deserialised to JS type
 */ parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "Empty", ()=>Empty);
parcelHelpers.export(exports, "Reserved", ()=>Reserved);
parcelHelpers.export(exports, "Unknown", ()=>Unknown);
parcelHelpers.export(exports, "Bool", ()=>Bool);
parcelHelpers.export(exports, "Null", ()=>Null);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "Int", ()=>Int);
parcelHelpers.export(exports, "Nat", ()=>Nat);
parcelHelpers.export(exports, "Float32", ()=>Float32);
parcelHelpers.export(exports, "Float64", ()=>Float64);
parcelHelpers.export(exports, "Int8", ()=>Int8);
parcelHelpers.export(exports, "Int16", ()=>Int16);
parcelHelpers.export(exports, "Int32", ()=>Int32);
parcelHelpers.export(exports, "Int64", ()=>Int64);
parcelHelpers.export(exports, "Nat8", ()=>Nat8);
parcelHelpers.export(exports, "Nat16", ()=>Nat16);
parcelHelpers.export(exports, "Nat32", ()=>Nat32);
parcelHelpers.export(exports, "Nat64", ()=>Nat64);
parcelHelpers.export(exports, "Principal", ()=>Principal);
/**
 *
 * @param types array of any types
 * @returns TupleClass from those types
 */ parcelHelpers.export(exports, "Tuple", ()=>Tuple);
/**
 *
 * @param t IDL Type
 * @returns VecClass from that type
 */ parcelHelpers.export(exports, "Vec", ()=>Vec);
/**
 *
 * @param t IDL Type
 * @returns OptClass of Type
 */ parcelHelpers.export(exports, "Opt", ()=>Opt);
/**
 *
 * @param t Record of string and IDL Type
 * @returns RecordClass of string and Type
 */ parcelHelpers.export(exports, "Record", ()=>Record);
/**
 *
 * @param fields Record of string and IDL Type
 * @returns VariantClass
 */ parcelHelpers.export(exports, "Variant", ()=>Variant);
/**
 *
 * @returns new RecClass
 */ parcelHelpers.export(exports, "Rec", ()=>Rec);
/**
 *
 * @param args array of IDL Types
 * @param ret array of IDL Types
 * @param annotations array of strings, [] by default
 * @returns new FuncClass
 */ parcelHelpers.export(exports, "Func", ()=>Func);
/**
 *
 * @param t Record of string and FuncClass
 * @returns ServiceClass
 */ parcelHelpers.export(exports, "Service", ()=>Service);
var _principal = require("@dfinity/principal");
var _buffer = require("./utils/buffer");
var _hash = require("./utils/hash");
var _leb128 = require("./utils/leb128");
var _bigintMath = require("./utils/bigint-math");
const magicNumber = "DIDL";
const toReadableString_max = 400; // will not display arguments after 400chars. Makes sure 2mb blobs don't get inside the error
function zipWith(xs, ys, f) {
    return xs.map((x, i)=>f(x, ys[i]));
}
/**
 * An IDL Type Table, which precedes the data in the stream.
 */ class TypeTable {
    constructor(){
        // List of types. Needs to be an array as the index needs to be stable.
        this._typs = [];
        this._idx = new Map();
    }
    has(obj) {
        return this._idx.has(obj.name);
    }
    add(type, buf) {
        const idx = this._typs.length;
        this._idx.set(type.name, idx);
        this._typs.push(buf);
    }
    merge(obj, knot) {
        const idx = this._idx.get(obj.name);
        const knotIdx = this._idx.get(knot);
        if (idx === undefined) throw new Error("Missing type index for " + obj);
        if (knotIdx === undefined) throw new Error("Missing type index for " + knot);
        this._typs[idx] = this._typs[knotIdx];
        // Delete the type.
        this._typs.splice(knotIdx, 1);
        this._idx.delete(knot);
    }
    encode() {
        const len = (0, _leb128.lebEncode)(this._typs.length);
        const buf = (0, _buffer.concat)(...this._typs);
        return (0, _buffer.concat)(len, buf);
    }
    indexOf(typeName) {
        if (!this._idx.has(typeName)) throw new Error("Missing type index for " + typeName);
        return (0, _leb128.slebEncode)(this._idx.get(typeName) || 0);
    }
}
class Visitor {
    visitType(t, data) {
        throw new Error("Not implemented");
    }
    visitPrimitive(t, data) {
        return this.visitType(t, data);
    }
    visitEmpty(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitBool(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitNull(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitReserved(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitText(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitNumber(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitInt(t, data) {
        return this.visitNumber(t, data);
    }
    visitNat(t, data) {
        return this.visitNumber(t, data);
    }
    visitFloat(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitFixedInt(t, data) {
        return this.visitNumber(t, data);
    }
    visitFixedNat(t, data) {
        return this.visitNumber(t, data);
    }
    visitPrincipal(t, data) {
        return this.visitPrimitive(t, data);
    }
    visitConstruct(t, data) {
        return this.visitType(t, data);
    }
    visitVec(t, ty, data) {
        return this.visitConstruct(t, data);
    }
    visitOpt(t, ty, data) {
        return this.visitConstruct(t, data);
    }
    visitRecord(t, fields, data) {
        return this.visitConstruct(t, data);
    }
    visitTuple(t, components, data) {
        const fields = components.map((ty, i)=>[
                `_${i}_`,
                ty
            ]);
        return this.visitRecord(t, fields, data);
    }
    visitVariant(t, fields, data) {
        return this.visitConstruct(t, data);
    }
    visitRec(t, ty, data) {
        return this.visitConstruct(ty, data);
    }
    visitFunc(t, data) {
        return this.visitConstruct(t, data);
    }
    visitService(t, data) {
        return this.visitConstruct(t, data);
    }
}
class Type {
    /* Display type name */ display() {
        return this.name;
    }
    valueToString(x) {
        return toReadableString(x);
    }
    /* Implement `T` in the IDL spec, only needed for non-primitive types */ buildTypeTable(typeTable) {
        if (!typeTable.has(this)) this._buildTypeTableImpl(typeTable);
    }
}
class PrimitiveType extends Type {
    checkType(t) {
        if (this.name !== t.name) throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`);
        return t;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _buildTypeTableImpl(typeTable) {
        // No type table encoding for Primitive types.
        return;
    }
}
class ConstructType extends Type {
    checkType(t) {
        if (t instanceof RecClass) {
            const ty = t.getType();
            if (typeof ty === "undefined") throw new Error("type mismatch with uninitialized type");
            return ty;
        }
        throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`);
    }
    encodeType(typeTable) {
        return typeTable.indexOf(this.name);
    }
}
class EmptyClass extends PrimitiveType {
    accept(v, d) {
        return v.visitEmpty(this, d);
    }
    covariant(x) {
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue() {
        throw new Error("Empty cannot appear as a function argument");
    }
    valueToString() {
        throw new Error("Empty cannot appear as a value");
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-17 /* IDLTypeIds.Empty */ );
    }
    decodeValue() {
        throw new Error("Empty cannot appear as an output");
    }
    get name() {
        return "empty";
    }
}
class UnknownClass extends Type {
    checkType(t) {
        throw new Error("Method not implemented for unknown.");
    }
    accept(v, d) {
        throw v.visitType(this, d);
    }
    covariant(x) {
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue() {
        throw new Error("Unknown cannot appear as a function argument");
    }
    valueToString() {
        throw new Error("Unknown cannot appear as a value");
    }
    encodeType() {
        throw new Error("Unknown cannot be serialized");
    }
    decodeValue(b, t) {
        let decodedValue = t.decodeValue(b, t);
        if (Object(decodedValue) !== decodedValue) // decodedValue is primitive. Box it, otherwise we cannot add the type() function.
        // The type() function is important for primitives because otherwise we cannot tell apart the
        // different number types.
        decodedValue = Object(decodedValue);
        let typeFunc;
        if (t instanceof RecClass) typeFunc = ()=>t.getType();
        else typeFunc = ()=>t;
        // Do not use 'decodedValue.type = typeFunc' because this would lead to an enumerable property
        // 'type' which means it would be serialized if the value would be candid encoded again.
        // This in turn leads to problems if the decoded value is a variant because these values are
        // only allowed to have a single property.
        Object.defineProperty(decodedValue, "type", {
            value: typeFunc,
            writable: true,
            enumerable: false,
            configurable: true
        });
        return decodedValue;
    }
    _buildTypeTableImpl() {
        throw new Error("Unknown cannot be serialized");
    }
    get name() {
        return "Unknown";
    }
}
class BoolClass extends PrimitiveType {
    accept(v, d) {
        return v.visitBool(this, d);
    }
    covariant(x) {
        if (typeof x === "boolean") return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        return new Uint8Array([
            x ? 1 : 0
        ]);
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-2 /* IDLTypeIds.Bool */ );
    }
    decodeValue(b, t) {
        this.checkType(t);
        switch((0, _leb128.safeReadUint8)(b)){
            case 0:
                return false;
            case 1:
                return true;
            default:
                throw new Error("Boolean value out of range");
        }
    }
    get name() {
        return "bool";
    }
}
class NullClass extends PrimitiveType {
    accept(v, d) {
        return v.visitNull(this, d);
    }
    covariant(x) {
        if (x === null) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue() {
        return new ArrayBuffer(0);
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-1 /* IDLTypeIds.Null */ );
    }
    decodeValue(b, t) {
        this.checkType(t);
        return null;
    }
    get name() {
        return "null";
    }
}
class ReservedClass extends PrimitiveType {
    accept(v, d) {
        return v.visitReserved(this, d);
    }
    covariant(x) {
        return true;
    }
    encodeValue() {
        return new ArrayBuffer(0);
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-16 /* IDLTypeIds.Reserved */ );
    }
    decodeValue(b, t) {
        if (t.name !== this.name) t.decodeValue(b, t);
        return null;
    }
    get name() {
        return "reserved";
    }
}
class TextClass extends PrimitiveType {
    accept(v, d) {
        return v.visitText(this, d);
    }
    covariant(x) {
        if (typeof x === "string") return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        const buf = new TextEncoder().encode(x);
        const len = (0, _leb128.lebEncode)(buf.byteLength);
        return (0, _buffer.concat)(len, buf);
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-15 /* IDLTypeIds.Text */ );
    }
    decodeValue(b, t) {
        this.checkType(t);
        const len = (0, _leb128.lebDecode)(b);
        const buf = (0, _leb128.safeRead)(b, Number(len));
        const decoder = new TextDecoder("utf8", {
            fatal: true
        });
        return decoder.decode(buf);
    }
    get name() {
        return "text";
    }
    valueToString(x) {
        return '"' + x + '"';
    }
}
class IntClass extends PrimitiveType {
    accept(v, d) {
        return v.visitInt(this, d);
    }
    covariant(x) {
        // We allow encoding of JavaScript plain numbers.
        // But we will always decode to bigint.
        if (typeof x === "bigint" || Number.isInteger(x)) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        return (0, _leb128.slebEncode)(x);
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-4 /* IDLTypeIds.Int */ );
    }
    decodeValue(b, t) {
        this.checkType(t);
        return (0, _leb128.slebDecode)(b);
    }
    get name() {
        return "int";
    }
    valueToString(x) {
        return x.toString();
    }
}
class NatClass extends PrimitiveType {
    accept(v, d) {
        return v.visitNat(this, d);
    }
    covariant(x) {
        // We allow encoding of JavaScript plain numbers.
        // But we will always decode to bigint.
        if (typeof x === "bigint" && x >= BigInt(0) || Number.isInteger(x) && x >= 0) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        return (0, _leb128.lebEncode)(x);
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-3 /* IDLTypeIds.Nat */ );
    }
    decodeValue(b, t) {
        this.checkType(t);
        return (0, _leb128.lebDecode)(b);
    }
    get name() {
        return "nat";
    }
    valueToString(x) {
        return x.toString();
    }
}
class FloatClass extends PrimitiveType {
    constructor(_bits){
        super();
        this._bits = _bits;
        if (_bits !== 32 && _bits !== 64) throw new Error("not a valid float type");
    }
    accept(v, d) {
        return v.visitFloat(this, d);
    }
    covariant(x) {
        if (typeof x === "number" || x instanceof Number) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        const buf = new ArrayBuffer(this._bits / 8);
        const view = new DataView(buf);
        if (this._bits === 32) view.setFloat32(0, x, true);
        else view.setFloat64(0, x, true);
        return buf;
    }
    encodeType() {
        const opcode = this._bits === 32 ? -13 /* IDLTypeIds.Float32 */  : -14 /* IDLTypeIds.Float64 */ ;
        return (0, _leb128.slebEncode)(opcode);
    }
    decodeValue(b, t) {
        this.checkType(t);
        const bytes = (0, _leb128.safeRead)(b, this._bits / 8);
        const view = new DataView(bytes);
        if (this._bits === 32) return view.getFloat32(0, true);
        else return view.getFloat64(0, true);
    }
    get name() {
        return "float" + this._bits;
    }
    valueToString(x) {
        return x.toString();
    }
}
class FixedIntClass extends PrimitiveType {
    constructor(_bits){
        super();
        this._bits = _bits;
    }
    accept(v, d) {
        return v.visitFixedInt(this, d);
    }
    covariant(x) {
        const min = (0, _bigintMath.iexp2)(this._bits - 1) * BigInt(-1);
        const max = (0, _bigintMath.iexp2)(this._bits - 1) - BigInt(1);
        let ok = false;
        if (typeof x === "bigint") ok = x >= min && x <= max;
        else if (Number.isInteger(x)) {
            const v = BigInt(x);
            ok = v >= min && v <= max;
        } else ok = false;
        if (ok) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        return (0, _leb128.writeIntLE)(x, this._bits / 8);
    }
    encodeType() {
        const offset = Math.log2(this._bits) - 3;
        return (0, _leb128.slebEncode)(-9 - offset);
    }
    decodeValue(b, t) {
        this.checkType(t);
        const num = (0, _leb128.readIntLE)(b, this._bits / 8);
        if (this._bits <= 32) return Number(num);
        else return num;
    }
    get name() {
        return `int${this._bits}`;
    }
    valueToString(x) {
        return x.toString();
    }
}
class FixedNatClass extends PrimitiveType {
    constructor(_bits){
        super();
        this._bits = _bits;
    }
    accept(v, d) {
        return v.visitFixedNat(this, d);
    }
    covariant(x) {
        const max = (0, _bigintMath.iexp2)(this._bits);
        let ok = false;
        if (typeof x === "bigint" && x >= BigInt(0)) ok = x < max;
        else if (Number.isInteger(x) && x >= 0) {
            const v = BigInt(x);
            ok = v < max;
        } else ok = false;
        if (ok) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        return (0, _leb128.writeUIntLE)(x, this._bits / 8);
    }
    encodeType() {
        const offset = Math.log2(this._bits) - 3;
        return (0, _leb128.slebEncode)(-5 - offset);
    }
    decodeValue(b, t) {
        this.checkType(t);
        const num = (0, _leb128.readUIntLE)(b, this._bits / 8);
        if (this._bits <= 32) return Number(num);
        else return num;
    }
    get name() {
        return `nat${this._bits}`;
    }
    valueToString(x) {
        return x.toString();
    }
}
class VecClass extends ConstructType {
    constructor(_type){
        super();
        this._type = _type;
        // If true, this vector is really a blob and we can just use memcpy.
        //
        // NOTE:
        // With support of encoding/dencoding of TypedArrays, this optimization is
        // only used when plain array of bytes are passed as encoding input in order
        // to be backward compatible.
        this._blobOptimization = false;
        if (_type instanceof FixedNatClass && _type._bits === 8) this._blobOptimization = true;
    }
    accept(v, d) {
        return v.visitVec(this, this._type, d);
    }
    covariant(x) {
        // Special case for ArrayBuffer
        const bits = this._type instanceof FixedNatClass ? this._type._bits : this._type instanceof FixedIntClass ? this._type._bits : 0;
        if (ArrayBuffer.isView(x) && bits == x.BYTES_PER_ELEMENT * 8 || Array.isArray(x) && x.every((v, idx)=>{
            try {
                return this._type.covariant(v);
            } catch (e) {
                throw new Error(`Invalid ${this.display()} argument: \n\nindex ${idx} -> ${e.message}`);
            }
        })) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        const len = (0, _leb128.lebEncode)(x.length);
        if (this._blobOptimization) return (0, _buffer.concat)(len, new Uint8Array(x));
        if (ArrayBuffer.isView(x)) return (0, _buffer.concat)(len, new Uint8Array(x.buffer));
        const buf = new (0, _buffer.PipeArrayBuffer)(new ArrayBuffer(len.byteLength + x.length), 0);
        buf.write(len);
        for (const d of x){
            const encoded = this._type.encodeValue(d);
            buf.write(new Uint8Array(encoded));
        }
        return buf.buffer;
    }
    _buildTypeTableImpl(typeTable) {
        this._type.buildTypeTable(typeTable);
        const opCode = (0, _leb128.slebEncode)(-19 /* IDLTypeIds.Vector */ );
        const buffer = this._type.encodeType(typeTable);
        typeTable.add(this, (0, _buffer.concat)(opCode, buffer));
    }
    decodeValue(b, t) {
        const vec = this.checkType(t);
        if (!(vec instanceof VecClass)) throw new Error("Not a vector type");
        const len = Number((0, _leb128.lebDecode)(b));
        if (this._type instanceof FixedNatClass) {
            if (this._type._bits == 8) return new Uint8Array(b.read(len));
            if (this._type._bits == 16) return new Uint16Array(b.read(len * 2));
            if (this._type._bits == 32) return new Uint32Array(b.read(len * 4));
            if (this._type._bits == 64) return new BigUint64Array(b.read(len * 8));
        }
        if (this._type instanceof FixedIntClass) {
            if (this._type._bits == 8) return new Int8Array(b.read(len));
            if (this._type._bits == 16) return new Int16Array(b.read(len * 2));
            if (this._type._bits == 32) return new Int32Array(b.read(len * 4));
            if (this._type._bits == 64) return new BigInt64Array(b.read(len * 8));
        }
        const rets = [];
        for(let i = 0; i < len; i++)rets.push(this._type.decodeValue(b, vec._type));
        return rets;
    }
    get name() {
        return `vec ${this._type.name}`;
    }
    display() {
        return `vec ${this._type.display()}`;
    }
    valueToString(x) {
        const elements = x.map((e)=>this._type.valueToString(e));
        return "vec {" + elements.join("; ") + "}";
    }
}
class OptClass extends ConstructType {
    constructor(_type){
        super();
        this._type = _type;
    }
    accept(v, d) {
        return v.visitOpt(this, this._type, d);
    }
    covariant(x) {
        try {
            if (Array.isArray(x) && (x.length === 0 || x.length === 1 && this._type.covariant(x[0]))) return true;
        } catch (e) {
            throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)} \n\n-> ${e.message}`);
        }
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        if (x.length === 0) return new Uint8Array([
            0
        ]);
        else return (0, _buffer.concat)(new Uint8Array([
            1
        ]), this._type.encodeValue(x[0]));
    }
    _buildTypeTableImpl(typeTable) {
        this._type.buildTypeTable(typeTable);
        const opCode = (0, _leb128.slebEncode)(-18 /* IDLTypeIds.Opt */ );
        const buffer = this._type.encodeType(typeTable);
        typeTable.add(this, (0, _buffer.concat)(opCode, buffer));
    }
    decodeValue(b, t) {
        const opt = this.checkType(t);
        if (!(opt instanceof OptClass)) throw new Error("Not an option type");
        switch((0, _leb128.safeReadUint8)(b)){
            case 0:
                return [];
            case 1:
                return [
                    this._type.decodeValue(b, opt._type)
                ];
            default:
                throw new Error("Not an option value");
        }
    }
    get name() {
        return `opt ${this._type.name}`;
    }
    display() {
        return `opt ${this._type.display()}`;
    }
    valueToString(x) {
        if (x.length === 0) return "null";
        else return `opt ${this._type.valueToString(x[0])}`;
    }
}
class RecordClass extends ConstructType {
    constructor(fields = {}){
        super();
        this._fields = Object.entries(fields).sort((a, b)=>(0, _hash.idlLabelToId)(a[0]) - (0, _hash.idlLabelToId)(b[0]));
    }
    accept(v, d) {
        return v.visitRecord(this, this._fields, d);
    }
    tryAsTuple() {
        const res = [];
        for(let i = 0; i < this._fields.length; i++){
            const [key, type] = this._fields[i];
            if (key !== `_${i}_`) return null;
            res.push(type);
        }
        return res;
    }
    covariant(x) {
        if (typeof x === "object" && this._fields.every(([k, t])=>{
            // eslint-disable-next-line
            if (!x.hasOwnProperty(k)) throw new Error(`Record is missing key "${k}".`);
            try {
                return t.covariant(x[k]);
            } catch (e) {
                throw new Error(`Invalid ${this.display()} argument: \n\nfield ${k} -> ${e.message}`);
            }
        })) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        const values = this._fields.map(([key])=>x[key]);
        const bufs = zipWith(this._fields, values, ([, c], d)=>c.encodeValue(d));
        return (0, _buffer.concat)(...bufs);
    }
    _buildTypeTableImpl(T) {
        this._fields.forEach(([_, value])=>value.buildTypeTable(T));
        const opCode = (0, _leb128.slebEncode)(-20 /* IDLTypeIds.Record */ );
        const len = (0, _leb128.lebEncode)(this._fields.length);
        const fields = this._fields.map(([key, value])=>(0, _buffer.concat)((0, _leb128.lebEncode)((0, _hash.idlLabelToId)(key)), value.encodeType(T)));
        T.add(this, (0, _buffer.concat)(opCode, len, (0, _buffer.concat)(...fields)));
    }
    decodeValue(b, t) {
        const record = this.checkType(t);
        if (!(record instanceof RecordClass)) throw new Error("Not a record type");
        const x = {};
        let expectedRecordIdx = 0;
        let actualRecordIdx = 0;
        while(actualRecordIdx < record._fields.length){
            const [hash, type] = record._fields[actualRecordIdx];
            if (expectedRecordIdx >= this._fields.length) {
                // skip unexpected left over fields present on the wire
                type.decodeValue(b, type);
                actualRecordIdx++;
                continue;
            }
            const [expectKey, expectType] = this._fields[expectedRecordIdx];
            const expectedId = (0, _hash.idlLabelToId)(this._fields[expectedRecordIdx][0]);
            const actualId = (0, _hash.idlLabelToId)(hash);
            if (expectedId === actualId) {
                // the current field on the wire matches the expected field
                x[expectKey] = expectType.decodeValue(b, type);
                expectedRecordIdx++;
                actualRecordIdx++;
            } else if (actualId > expectedId) {
                // The expected field does not exist on the wire
                if (expectType instanceof OptClass || expectType instanceof ReservedClass) {
                    x[expectKey] = [];
                    expectedRecordIdx++;
                } else throw new Error("Cannot find required field " + expectKey);
            } else {
                // The field on the wire does not exist in the output type, so we can skip it
                type.decodeValue(b, type);
                actualRecordIdx++;
            }
        }
        // initialize left over expected optional fields
        for (const [expectKey, expectType] of this._fields.slice(expectedRecordIdx)){
            if (expectType instanceof OptClass || expectType instanceof ReservedClass) // TODO this assumes null value in opt is represented as []
            x[expectKey] = [];
            else throw new Error("Cannot find required field " + expectKey);
        }
        return x;
    }
    get name() {
        const fields = this._fields.map(([key, value])=>key + ":" + value.name);
        return `record {${fields.join("; ")}}`;
    }
    display() {
        const fields = this._fields.map(([key, value])=>key + ":" + value.display());
        return `record {${fields.join("; ")}}`;
    }
    valueToString(x) {
        const values = this._fields.map(([key])=>x[key]);
        const fields = zipWith(this._fields, values, ([k, c], d)=>k + "=" + c.valueToString(d));
        return `record {${fields.join("; ")}}`;
    }
}
class TupleClass extends RecordClass {
    constructor(_components){
        const x = {};
        _components.forEach((e, i)=>x["_" + i + "_"] = e);
        super(x);
        this._components = _components;
    }
    accept(v, d) {
        return v.visitTuple(this, this._components, d);
    }
    covariant(x) {
        // `>=` because tuples can be covariant when encoded.
        if (Array.isArray(x) && x.length >= this._fields.length && this._components.every((t, i)=>{
            try {
                return t.covariant(x[i]);
            } catch (e) {
                throw new Error(`Invalid ${this.display()} argument: \n\nindex ${i} -> ${e.message}`);
            }
        })) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        const bufs = zipWith(this._components, x, (c, d)=>c.encodeValue(d));
        return (0, _buffer.concat)(...bufs);
    }
    decodeValue(b, t) {
        const tuple = this.checkType(t);
        if (!(tuple instanceof TupleClass)) throw new Error("not a tuple type");
        if (tuple._components.length < this._components.length) throw new Error("tuple mismatch");
        const res = [];
        for (const [i, wireType] of tuple._components.entries())if (i >= this._components.length) // skip value
        wireType.decodeValue(b, wireType);
        else res.push(this._components[i].decodeValue(b, wireType));
        return res;
    }
    display() {
        const fields = this._components.map((value)=>value.display());
        return `record {${fields.join("; ")}}`;
    }
    valueToString(values) {
        const fields = zipWith(this._components, values, (c, d)=>c.valueToString(d));
        return `record {${fields.join("; ")}}`;
    }
}
class VariantClass extends ConstructType {
    constructor(fields = {}){
        super();
        this._fields = Object.entries(fields).sort((a, b)=>(0, _hash.idlLabelToId)(a[0]) - (0, _hash.idlLabelToId)(b[0]));
    }
    accept(v, d) {
        return v.visitVariant(this, this._fields, d);
    }
    covariant(x) {
        if (typeof x === "object" && Object.entries(x).length === 1 && this._fields.every(([k, v])=>{
            try {
                // eslint-disable-next-line
                return !x.hasOwnProperty(k) || v.covariant(x[k]);
            } catch (e) {
                throw new Error(`Invalid ${this.display()} argument: \n\nvariant ${k} -> ${e.message}`);
            }
        })) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        for(let i = 0; i < this._fields.length; i++){
            const [name, type] = this._fields[i];
            // eslint-disable-next-line
            if (x.hasOwnProperty(name)) {
                const idx = (0, _leb128.lebEncode)(i);
                const buf = type.encodeValue(x[name]);
                return (0, _buffer.concat)(idx, buf);
            }
        }
        throw Error("Variant has no data: " + x);
    }
    _buildTypeTableImpl(typeTable) {
        this._fields.forEach(([, type])=>{
            type.buildTypeTable(typeTable);
        });
        const opCode = (0, _leb128.slebEncode)(-21 /* IDLTypeIds.Variant */ );
        const len = (0, _leb128.lebEncode)(this._fields.length);
        const fields = this._fields.map(([key, value])=>(0, _buffer.concat)((0, _leb128.lebEncode)((0, _hash.idlLabelToId)(key)), value.encodeType(typeTable)));
        typeTable.add(this, (0, _buffer.concat)(opCode, len, ...fields));
    }
    decodeValue(b, t) {
        const variant = this.checkType(t);
        if (!(variant instanceof VariantClass)) throw new Error("Not a variant type");
        const idx = Number((0, _leb128.lebDecode)(b));
        if (idx >= variant._fields.length) throw Error("Invalid variant index: " + idx);
        const [wireHash, wireType] = variant._fields[idx];
        for (const [key, expectType] of this._fields)if ((0, _hash.idlLabelToId)(wireHash) === (0, _hash.idlLabelToId)(key)) {
            const value = expectType.decodeValue(b, wireType);
            return {
                [key]: value
            };
        }
        throw new Error("Cannot find field hash " + wireHash);
    }
    get name() {
        const fields = this._fields.map(([key, type])=>key + ":" + type.name);
        return `variant {${fields.join("; ")}}`;
    }
    display() {
        const fields = this._fields.map(([key, type])=>key + (type.name === "null" ? "" : `:${type.display()}`));
        return `variant {${fields.join("; ")}}`;
    }
    valueToString(x) {
        for (const [name, type] of this._fields)// eslint-disable-next-line
        if (x.hasOwnProperty(name)) {
            const value = type.valueToString(x[name]);
            if (value === "null") return `variant {${name}}`;
            else return `variant {${name}=${value}}`;
        }
        throw new Error("Variant has no data: " + x);
    }
}
class RecClass extends ConstructType {
    constructor(){
        super(...arguments);
        this._id = RecClass._counter++;
        this._type = undefined;
    }
    accept(v, d) {
        if (!this._type) throw Error("Recursive type uninitialized.");
        return v.visitRec(this, this._type, d);
    }
    fill(t) {
        this._type = t;
    }
    getType() {
        return this._type;
    }
    covariant(x) {
        if (this._type ? this._type.covariant(x) : false) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        if (!this._type) throw Error("Recursive type uninitialized.");
        return this._type.encodeValue(x);
    }
    _buildTypeTableImpl(typeTable) {
        if (!this._type) throw Error("Recursive type uninitialized.");
        typeTable.add(this, new Uint8Array([]));
        this._type.buildTypeTable(typeTable);
        typeTable.merge(this, this._type.name);
    }
    decodeValue(b, t) {
        if (!this._type) throw Error("Recursive type uninitialized.");
        return this._type.decodeValue(b, t);
    }
    get name() {
        return `rec_${this._id}`;
    }
    display() {
        if (!this._type) throw Error("Recursive type uninitialized.");
        return `\u{3BC}${this.name}.${this._type.name}`;
    }
    valueToString(x) {
        if (!this._type) throw Error("Recursive type uninitialized.");
        return this._type.valueToString(x);
    }
}
RecClass._counter = 0;
function decodePrincipalId(b) {
    const x = (0, _leb128.safeReadUint8)(b);
    if (x !== 1) throw new Error("Cannot decode principal");
    const len = Number((0, _leb128.lebDecode)(b));
    return (0, _principal.Principal).fromUint8Array(new Uint8Array((0, _leb128.safeRead)(b, len)));
}
class PrincipalClass extends PrimitiveType {
    accept(v, d) {
        return v.visitPrincipal(this, d);
    }
    covariant(x) {
        if (x && x._isPrincipal) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        const buf = x.toUint8Array();
        const len = (0, _leb128.lebEncode)(buf.byteLength);
        return (0, _buffer.concat)(new Uint8Array([
            1
        ]), len, buf);
    }
    encodeType() {
        return (0, _leb128.slebEncode)(-24 /* IDLTypeIds.Principal */ );
    }
    decodeValue(b, t) {
        this.checkType(t);
        return decodePrincipalId(b);
    }
    get name() {
        return "principal";
    }
    valueToString(x) {
        return `${this.name} "${x.toText()}"`;
    }
}
class FuncClass extends ConstructType {
    constructor(argTypes, retTypes, annotations = []){
        super();
        this.argTypes = argTypes;
        this.retTypes = retTypes;
        this.annotations = annotations;
    }
    static argsToString(types, v) {
        if (types.length !== v.length) throw new Error("arity mismatch");
        return "(" + types.map((t, i)=>t.valueToString(v[i])).join(", ") + ")";
    }
    accept(v, d) {
        return v.visitFunc(this, d);
    }
    covariant(x) {
        if (Array.isArray(x) && x.length === 2 && x[0] && x[0]._isPrincipal && typeof x[1] === "string") return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue([principal, methodName]) {
        const buf = principal.toUint8Array();
        const len = (0, _leb128.lebEncode)(buf.byteLength);
        const canister = (0, _buffer.concat)(new Uint8Array([
            1
        ]), len, buf);
        const method = new TextEncoder().encode(methodName);
        const methodLen = (0, _leb128.lebEncode)(method.byteLength);
        return (0, _buffer.concat)(new Uint8Array([
            1
        ]), canister, methodLen, method);
    }
    _buildTypeTableImpl(T) {
        this.argTypes.forEach((arg)=>arg.buildTypeTable(T));
        this.retTypes.forEach((arg)=>arg.buildTypeTable(T));
        const opCode = (0, _leb128.slebEncode)(-22 /* IDLTypeIds.Func */ );
        const argLen = (0, _leb128.lebEncode)(this.argTypes.length);
        const args = (0, _buffer.concat)(...this.argTypes.map((arg)=>arg.encodeType(T)));
        const retLen = (0, _leb128.lebEncode)(this.retTypes.length);
        const rets = (0, _buffer.concat)(...this.retTypes.map((arg)=>arg.encodeType(T)));
        const annLen = (0, _leb128.lebEncode)(this.annotations.length);
        const anns = (0, _buffer.concat)(...this.annotations.map((a)=>this.encodeAnnotation(a)));
        T.add(this, (0, _buffer.concat)(opCode, argLen, args, retLen, rets, annLen, anns));
    }
    decodeValue(b) {
        const x = (0, _leb128.safeReadUint8)(b);
        if (x !== 1) throw new Error("Cannot decode function reference");
        const canister = decodePrincipalId(b);
        const mLen = Number((0, _leb128.lebDecode)(b));
        const buf = (0, _leb128.safeRead)(b, mLen);
        const decoder = new TextDecoder("utf8", {
            fatal: true
        });
        const method = decoder.decode(buf);
        return [
            canister,
            method
        ];
    }
    get name() {
        const args = this.argTypes.map((arg)=>arg.name).join(", ");
        const rets = this.retTypes.map((arg)=>arg.name).join(", ");
        const annon = " " + this.annotations.join(" ");
        return `(${args}) -> (${rets})${annon}`;
    }
    valueToString([principal, str]) {
        return `func "${principal.toText()}".${str}`;
    }
    display() {
        const args = this.argTypes.map((arg)=>arg.display()).join(", ");
        const rets = this.retTypes.map((arg)=>arg.display()).join(", ");
        const annon = " " + this.annotations.join(" ");
        return `(${args}) \u{2192} (${rets})${annon}`;
    }
    encodeAnnotation(ann) {
        if (ann === "query") return new Uint8Array([
            1
        ]);
        else if (ann === "oneway") return new Uint8Array([
            2
        ]);
        else if (ann === "composite_query") return new Uint8Array([
            3
        ]);
        else throw new Error("Illegal function annotation");
    }
}
class ServiceClass extends ConstructType {
    constructor(fields){
        super();
        this._fields = Object.entries(fields).sort((a, b)=>{
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        });
    }
    accept(v, d) {
        return v.visitService(this, d);
    }
    covariant(x) {
        if (x && x._isPrincipal) return true;
        throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
    }
    encodeValue(x) {
        const buf = x.toUint8Array();
        const len = (0, _leb128.lebEncode)(buf.length);
        return (0, _buffer.concat)(new Uint8Array([
            1
        ]), len, buf);
    }
    _buildTypeTableImpl(T) {
        this._fields.forEach(([_, func])=>func.buildTypeTable(T));
        const opCode = (0, _leb128.slebEncode)(-23 /* IDLTypeIds.Service */ );
        const len = (0, _leb128.lebEncode)(this._fields.length);
        const meths = this._fields.map(([label, func])=>{
            const labelBuf = new TextEncoder().encode(label);
            const labelLen = (0, _leb128.lebEncode)(labelBuf.length);
            return (0, _buffer.concat)(labelLen, labelBuf, func.encodeType(T));
        });
        T.add(this, (0, _buffer.concat)(opCode, len, ...meths));
    }
    decodeValue(b) {
        return decodePrincipalId(b);
    }
    get name() {
        const fields = this._fields.map(([key, value])=>key + ":" + value.name);
        return `service {${fields.join("; ")}}`;
    }
    valueToString(x) {
        return `service "${x.toText()}"`;
    }
}
/**
 *
 * @param x
 * @returns {string}
 */ function toReadableString(x) {
    const str = JSON.stringify(x, (_key, value)=>typeof value === "bigint" ? `BigInt(${value})` : value);
    return str && str.length > toReadableString_max ? str.substring(0, toReadableString_max - 3) + "..." : str;
}
function encode(argTypes, args) {
    if (args.length < argTypes.length) throw Error("Wrong number of message arguments");
    const typeTable = new TypeTable();
    argTypes.forEach((t)=>t.buildTypeTable(typeTable));
    const magic = new TextEncoder().encode(magicNumber);
    const table = typeTable.encode();
    const len = (0, _leb128.lebEncode)(args.length);
    const typs = (0, _buffer.concat)(...argTypes.map((t)=>t.encodeType(typeTable)));
    const vals = (0, _buffer.concat)(...zipWith(argTypes, args, (t, x)=>{
        try {
            t.covariant(x);
        } catch (e) {
            const err = new Error(e.message + "\n\n");
            throw err;
        }
        return t.encodeValue(x);
    }));
    return (0, _buffer.concat)(magic, table, len, typs, vals);
}
function decode(retTypes, bytes) {
    const b = new (0, _buffer.PipeArrayBuffer)(bytes);
    if (bytes.byteLength < magicNumber.length) throw new Error("Message length smaller than magic number");
    const magicBuffer = (0, _leb128.safeRead)(b, magicNumber.length);
    const magic = new TextDecoder().decode(magicBuffer);
    if (magic !== magicNumber) throw new Error("Wrong magic number: " + JSON.stringify(magic));
    function readTypeTable(pipe) {
        const typeTable = [];
        const len = Number((0, _leb128.lebDecode)(pipe));
        for(let i = 0; i < len; i++){
            const ty = Number((0, _leb128.slebDecode)(pipe));
            switch(ty){
                case -18 /* IDLTypeIds.Opt */ :
                case -19 /* IDLTypeIds.Vector */ :
                    {
                        const t = Number((0, _leb128.slebDecode)(pipe));
                        typeTable.push([
                            ty,
                            t
                        ]);
                        break;
                    }
                case -20 /* IDLTypeIds.Record */ :
                case -21 /* IDLTypeIds.Variant */ :
                    {
                        const fields = [];
                        let objectLength = Number((0, _leb128.lebDecode)(pipe));
                        let prevHash;
                        while(objectLength--){
                            const hash = Number((0, _leb128.lebDecode)(pipe));
                            if (hash >= Math.pow(2, 32)) throw new Error("field id out of 32-bit range");
                            if (typeof prevHash === "number" && prevHash >= hash) throw new Error("field id collision or not sorted");
                            prevHash = hash;
                            const t = Number((0, _leb128.slebDecode)(pipe));
                            fields.push([
                                hash,
                                t
                            ]);
                        }
                        typeTable.push([
                            ty,
                            fields
                        ]);
                        break;
                    }
                case -22 /* IDLTypeIds.Func */ :
                    {
                        const args = [];
                        let argLength = Number((0, _leb128.lebDecode)(pipe));
                        while(argLength--)args.push(Number((0, _leb128.slebDecode)(pipe)));
                        const returnValues = [];
                        let returnValuesLength = Number((0, _leb128.lebDecode)(pipe));
                        while(returnValuesLength--)returnValues.push(Number((0, _leb128.slebDecode)(pipe)));
                        const annotations = [];
                        let annotationLength = Number((0, _leb128.lebDecode)(pipe));
                        while(annotationLength--){
                            const annotation = Number((0, _leb128.lebDecode)(pipe));
                            switch(annotation){
                                case 1:
                                    annotations.push("query");
                                    break;
                                case 2:
                                    annotations.push("oneway");
                                    break;
                                case 3:
                                    annotations.push("composite_query");
                                    break;
                                default:
                                    throw new Error("unknown annotation");
                            }
                        }
                        typeTable.push([
                            ty,
                            [
                                args,
                                returnValues,
                                annotations
                            ]
                        ]);
                        break;
                    }
                case -23 /* IDLTypeIds.Service */ :
                    {
                        let servLength = Number((0, _leb128.lebDecode)(pipe));
                        const methods = [];
                        while(servLength--){
                            const nameLength = Number((0, _leb128.lebDecode)(pipe));
                            const funcName = new TextDecoder().decode((0, _leb128.safeRead)(pipe, nameLength));
                            const funcType = (0, _leb128.slebDecode)(pipe);
                            methods.push([
                                funcName,
                                funcType
                            ]);
                        }
                        typeTable.push([
                            ty,
                            methods
                        ]);
                        break;
                    }
                default:
                    throw new Error("Illegal op_code: " + ty);
            }
        }
        const rawList = [];
        const length = Number((0, _leb128.lebDecode)(pipe));
        for(let i = 0; i < length; i++)rawList.push(Number((0, _leb128.slebDecode)(pipe)));
        return [
            typeTable,
            rawList
        ];
    }
    const [rawTable, rawTypes] = readTypeTable(b);
    if (rawTypes.length < retTypes.length) throw new Error("Wrong number of return values");
    const table = rawTable.map((_)=>Rec());
    function getType(t) {
        if (t < -24) throw new Error("future value not supported");
        if (t < 0) switch(t){
            case -1:
                return Null;
            case -2:
                return Bool;
            case -3:
                return Nat;
            case -4:
                return Int;
            case -5:
                return Nat8;
            case -6:
                return Nat16;
            case -7:
                return Nat32;
            case -8:
                return Nat64;
            case -9:
                return Int8;
            case -10:
                return Int16;
            case -11:
                return Int32;
            case -12:
                return Int64;
            case -13:
                return Float32;
            case -14:
                return Float64;
            case -15:
                return Text;
            case -16:
                return Reserved;
            case -17:
                return Empty;
            case -24:
                return Principal;
            default:
                throw new Error("Illegal op_code: " + t);
        }
        if (t >= rawTable.length) throw new Error("type index out of range");
        return table[t];
    }
    function buildType(entry) {
        switch(entry[0]){
            case -19 /* IDLTypeIds.Vector */ :
                {
                    const ty = getType(entry[1]);
                    return Vec(ty);
                }
            case -18 /* IDLTypeIds.Opt */ :
                {
                    const ty = getType(entry[1]);
                    return Opt(ty);
                }
            case -20 /* IDLTypeIds.Record */ :
                {
                    const fields = {};
                    for (const [hash, ty] of entry[1]){
                        const name = `_${hash}_`;
                        fields[name] = getType(ty);
                    }
                    const record = Record(fields);
                    const tuple = record.tryAsTuple();
                    if (Array.isArray(tuple)) return Tuple(...tuple);
                    else return record;
                }
            case -21 /* IDLTypeIds.Variant */ :
                {
                    const fields = {};
                    for (const [hash, ty] of entry[1]){
                        const name = `_${hash}_`;
                        fields[name] = getType(ty);
                    }
                    return Variant(fields);
                }
            case -22 /* IDLTypeIds.Func */ :
                {
                    const [args, returnValues, annotations] = entry[1];
                    return Func(args.map((t)=>getType(t)), returnValues.map((t)=>getType(t)), annotations);
                }
            case -23 /* IDLTypeIds.Service */ :
                {
                    const rec = {};
                    const methods = entry[1];
                    for (const [name, typeRef] of methods){
                        let type = getType(typeRef);
                        if (type instanceof RecClass) // unpack reference type
                        type = type.getType();
                        if (!(type instanceof FuncClass)) throw new Error("Illegal service definition: services can only contain functions");
                        rec[name] = type;
                    }
                    return Service(rec);
                }
            default:
                throw new Error("Illegal op_code: " + entry[0]);
        }
    }
    rawTable.forEach((entry, i)=>{
        // Process function type first, so that we can construct the correct service type
        if (entry[0] === -22 /* IDLTypeIds.Func */ ) {
            const t = buildType(entry);
            table[i].fill(t);
        }
    });
    rawTable.forEach((entry, i)=>{
        if (entry[0] !== -22 /* IDLTypeIds.Func */ ) {
            const t = buildType(entry);
            table[i].fill(t);
        }
    });
    const types = rawTypes.map((t)=>getType(t));
    const output = retTypes.map((t, i)=>{
        return t.decodeValue(b, types[i]);
    });
    // skip unused values
    for(let ind = retTypes.length; ind < types.length; ind++)types[ind].decodeValue(b, types[ind]);
    if (b.byteLength > 0) throw new Error("decode: Left-over bytes");
    return output;
}
const Empty = new EmptyClass();
const Reserved = new ReservedClass();
const Unknown = new UnknownClass();
const Bool = new BoolClass();
const Null = new NullClass();
const Text = new TextClass();
const Int = new IntClass();
const Nat = new NatClass();
const Float32 = new FloatClass(32);
const Float64 = new FloatClass(64);
const Int8 = new FixedIntClass(8);
const Int16 = new FixedIntClass(16);
const Int32 = new FixedIntClass(32);
const Int64 = new FixedIntClass(64);
const Nat8 = new FixedNatClass(8);
const Nat16 = new FixedNatClass(16);
const Nat32 = new FixedNatClass(32);
const Nat64 = new FixedNatClass(64);
const Principal = new PrincipalClass();
function Tuple(...types) {
    return new TupleClass(types);
}
function Vec(t) {
    return new VecClass(t);
}
function Opt(t) {
    return new OptClass(t);
}
function Record(t) {
    return new RecordClass(t);
}
function Variant(fields) {
    return new VariantClass(fields);
}
function Rec() {
    return new RecClass();
}
function Func(args, ret, annotations = []) {
    return new FuncClass(args, ret, annotations);
}
function Service(t) {
    return new ServiceClass(t);
}

},{"@dfinity/principal":"lPNel","./utils/buffer":"59in2","./utils/hash":"9tk44","./utils/leb128":"kuZPL","./utils/bigint-math":"4sbRv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59in2":[function(require,module,exports) {
/**
 * Concatenate multiple array buffers.
 * @param buffers The buffers to concatenate.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat);
/**
 * Returns an hexadecimal representation of an array buffer.
 * @param bytes The array buffer.
 */ parcelHelpers.export(exports, "toHexString", ()=>toHexString);
/**
 * Return an array buffer from its hexadecimal representation.
 * @param hexString The hexadecimal string.
 */ parcelHelpers.export(exports, "fromHexString", ()=>fromHexString);
/**
 * A class that abstracts a pipe-like ArrayBuffer.
 */ parcelHelpers.export(exports, "PipeArrayBuffer", ()=>PipeArrayBuffer);
function concat(...buffers) {
    const result = new Uint8Array(buffers.reduce((acc, curr)=>acc + curr.byteLength, 0));
    let index = 0;
    for (const b of buffers){
        result.set(new Uint8Array(b), index);
        index += b.byteLength;
    }
    return result;
}
function toHexString(bytes) {
    return new Uint8Array(bytes).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
}
function fromHexString(hexString) {
    var _a;
    return new Uint8Array(((_a = hexString.match(/.{1,2}/g)) !== null && _a !== void 0 ? _a : []).map((byte)=>parseInt(byte, 16)));
}
class PipeArrayBuffer {
    /**
     * Creates a new instance of a pipe
     * @param buffer an optional buffer to start with
     * @param length an optional amount of bytes to use for the length.
     */ constructor(buffer, length = (buffer === null || buffer === void 0 ? void 0 : buffer.byteLength) || 0){
        this._buffer = buffer || new ArrayBuffer(0);
        this._view = new Uint8Array(this._buffer, 0, length);
    }
    get buffer() {
        // Return a copy of the buffer.
        return this._view.slice();
    }
    get byteLength() {
        return this._view.byteLength;
    }
    /**
     * Read `num` number of bytes from the front of the pipe.
     * @param num The number of bytes to read.
     */ read(num) {
        const result = this._view.subarray(0, num);
        this._view = this._view.subarray(num);
        return result.slice().buffer;
    }
    readUint8() {
        const result = this._view[0];
        this._view = this._view.subarray(1);
        return result;
    }
    /**
     * Write a buffer to the end of the pipe.
     * @param buf The bytes to write.
     */ write(buf) {
        const b = new Uint8Array(buf);
        const offset = this._view.byteLength;
        if (this._view.byteOffset + this._view.byteLength + b.byteLength >= this._buffer.byteLength) // Alloc grow the view to include the new bytes.
        this.alloc(b.byteLength);
        else // Update the view to include the new bytes.
        this._view = new Uint8Array(this._buffer, this._view.byteOffset, this._view.byteLength + b.byteLength);
        this._view.set(b, offset);
    }
    /**
     * Whether or not there is more data to read from the buffer
     */ get end() {
        return this._view.byteLength === 0;
    }
    /**
     * Allocate a fixed amount of memory in the buffer. This does not affect the view.
     * @param amount A number of bytes to add to the buffer.
     */ alloc(amount) {
        // Add a little bit of exponential growth.
        const b = new ArrayBuffer((this._buffer.byteLength + amount) * 1.2 | 0);
        const v = new Uint8Array(b, 0, this._view.byteLength + amount);
        v.set(this._view);
        this._buffer = b;
        this._view = v;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9tk44":[function(require,module,exports) {
/**
 * Hashes a string to a number. Algorithm can be found here:
 * https://caml.inria.fr/pub/papers/garrigue-polymorphic_variants-ml98.pdf
 * @param s
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * @param label string
 * @returns number representing hashed label
 */ parcelHelpers.export(exports, "idlLabelToId", ()=>idlLabelToId);
function idlHash(s) {
    const utf8encoder = new TextEncoder();
    const array = utf8encoder.encode(s);
    let h = 0;
    for (const c of array)h = (h * 223 + c) % 2 ** 32;
    return h;
}
function idlLabelToId(label) {
    if (/^_\d+_$/.test(label) || /^_0x[0-9a-fA-F]+_$/.test(label)) {
        const num = +label.slice(1, -1);
        if (Number.isSafeInteger(num) && num >= 0 && num < 2 ** 32) return num;
    }
    return idlHash(label);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuZPL":[function(require,module,exports) {
/* eslint-disable no-constant-condition */ // Note: this file uses buffer-pipe, which on Node only, uses the Node Buffer
//       implementation, which isn't compatible with the NPM buffer package
//       which we use everywhere else. This means that we have to transform
//       one into the other, hence why every function that returns a Buffer
//       actually return `new Buffer(pipe.buffer)`.
// TODO: The best solution would be to have our own buffer type around
//       Uint8Array which is standard.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * @param pipe Pipe from buffer-pipe
 * @param num number
 * @returns Buffer
 */ parcelHelpers.export(exports, "safeRead", ()=>safeRead);
/**
 * @param pipe
 */ parcelHelpers.export(exports, "safeReadUint8", ()=>safeReadUint8);
/**
 * Encode a positive number (or bigint) into a Buffer. The number will be floored to the
 * nearest integer.
 * @param value The number to encode.
 */ parcelHelpers.export(exports, "lebEncode", ()=>lebEncode);
/**
 * Decode a leb encoded buffer into a bigint. The number will always be positive (does not
 * support signed leb encoding).
 * @param pipe A Buffer containing the leb encoded bits.
 */ parcelHelpers.export(exports, "lebDecode", ()=>lebDecode);
/**
 * Encode a number (or bigint) into a Buffer, with support for negative numbers. The number
 * will be floored to the nearest integer.
 * @param value The number to encode.
 */ parcelHelpers.export(exports, "slebEncode", ()=>slebEncode);
/**
 * Decode a leb encoded buffer into a bigint. The number is decoded with support for negative
 * signed-leb encoding.
 * @param pipe A Buffer containing the signed leb encoded bits.
 */ parcelHelpers.export(exports, "slebDecode", ()=>slebDecode);
/**
 *
 * @param value bigint or number
 * @param byteLength number
 * @returns Buffer
 */ parcelHelpers.export(exports, "writeUIntLE", ()=>writeUIntLE);
/**
 *
 * @param value
 * @param byteLength
 */ parcelHelpers.export(exports, "writeIntLE", ()=>writeIntLE);
/**
 *
 * @param pipe Pipe from buffer-pipe
 * @param byteLength number
 * @returns bigint
 */ parcelHelpers.export(exports, "readUIntLE", ()=>readUIntLE);
/**
 *
 * @param pipe Pipe from buffer-pipe
 * @param byteLength number
 * @returns bigint
 */ parcelHelpers.export(exports, "readIntLE", ()=>readIntLE);
var _buffer = require("./buffer");
function eob() {
    throw new Error("unexpected end of buffer");
}
function safeRead(pipe, num) {
    if (pipe.byteLength < num) eob();
    return pipe.read(num);
}
function safeReadUint8(pipe) {
    const byte = pipe.readUint8();
    if (byte === undefined) eob();
    return byte;
}
function lebEncode(value) {
    if (typeof value === "number") value = BigInt(value);
    if (value < BigInt(0)) throw new Error("Cannot leb encode negative values.");
    const byteLength = (value === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(value)))) + 1;
    const pipe = new (0, _buffer.PipeArrayBuffer)(new ArrayBuffer(byteLength), 0);
    while(true){
        const i = Number(value & BigInt(0x7f));
        value /= BigInt(0x80);
        if (value === BigInt(0)) {
            pipe.write(new Uint8Array([
                i
            ]));
            break;
        } else pipe.write(new Uint8Array([
            i | 0x80
        ]));
    }
    return pipe.buffer;
}
function lebDecode(pipe) {
    let weight = BigInt(1);
    let value = BigInt(0);
    let byte;
    do {
        byte = safeReadUint8(pipe);
        value += BigInt(byte & 0x7f).valueOf() * weight;
        weight *= BigInt(128);
    }while (byte >= 0x80);
    return value;
}
function slebEncode(value) {
    if (typeof value === "number") value = BigInt(value);
    const isNeg = value < BigInt(0);
    if (isNeg) value = -value - BigInt(1);
    const byteLength = (value === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(value)))) + 1;
    const pipe = new (0, _buffer.PipeArrayBuffer)(new ArrayBuffer(byteLength), 0);
    while(true){
        const i = getLowerBytes(value);
        value /= BigInt(0x80);
        // prettier-ignore
        if (isNeg && value === BigInt(0) && (i & 0x40) !== 0 || !isNeg && value === BigInt(0) && (i & 0x40) === 0) {
            pipe.write(new Uint8Array([
                i
            ]));
            break;
        } else pipe.write(new Uint8Array([
            i | 0x80
        ]));
    }
    function getLowerBytes(num) {
        const bytes = num % BigInt(0x80);
        if (isNeg) // We swap the bits here again, and remove 1 to do two's complement.
        return Number(BigInt(0x80) - bytes - BigInt(1));
        else return Number(bytes);
    }
    return pipe.buffer;
}
function slebDecode(pipe) {
    // Get the size of the buffer, then cut a buffer of that size.
    const pipeView = new Uint8Array(pipe.buffer);
    let len = 0;
    for(; len < pipeView.byteLength; len++)if (pipeView[len] < 0x80) {
        // If it's a positive number, we reuse lebDecode.
        if ((pipeView[len] & 0x40) === 0) return lebDecode(pipe);
        break;
    }
    const bytes = new Uint8Array(safeRead(pipe, len + 1));
    let value = BigInt(0);
    for(let i = bytes.byteLength - 1; i >= 0; i--)value = value * BigInt(0x80) + BigInt(0x80 - (bytes[i] & 0x7f) - 1);
    return -value - BigInt(1);
}
function writeUIntLE(value, byteLength) {
    if (BigInt(value) < BigInt(0)) throw new Error("Cannot write negative values.");
    return writeIntLE(value, byteLength);
}
function writeIntLE(value, byteLength) {
    value = BigInt(value);
    const pipe = new (0, _buffer.PipeArrayBuffer)(new ArrayBuffer(Math.min(1, byteLength)), 0);
    let i = 0;
    let mul = BigInt(256);
    let sub = BigInt(0);
    let byte = Number(value % mul);
    pipe.write(new Uint8Array([
        byte
    ]));
    while(++i < byteLength){
        if (value < 0 && sub === BigInt(0) && byte !== 0) sub = BigInt(1);
        byte = Number((value / mul - sub) % BigInt(256));
        pipe.write(new Uint8Array([
            byte
        ]));
        mul *= BigInt(256);
    }
    return pipe.buffer;
}
function readUIntLE(pipe, byteLength) {
    let val = BigInt(safeReadUint8(pipe));
    let mul = BigInt(1);
    let i = 0;
    while(++i < byteLength){
        mul *= BigInt(256);
        const byte = BigInt(safeReadUint8(pipe));
        val = val + mul * byte;
    }
    return val;
}
function readIntLE(pipe, byteLength) {
    let val = readUIntLE(pipe, byteLength);
    const mul = BigInt(2) ** (BigInt(8) * BigInt(byteLength - 1) + BigInt(7));
    if (val >= mul) val -= mul * BigInt(2);
    return val;
}

},{"./buffer":"59in2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sbRv":[function(require,module,exports) {
/**
 * Equivalent to `Math.log2(n)` with support for `BigInt` values
 * @param n bigint or integer
 * @returns integer
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ilog2", ()=>ilog2);
/**
 * Equivalent to `2 ** n` with support for `BigInt` values
 * (necessary for browser preprocessors which replace the `**` operator with `Math.pow`)
 * @param n bigint or integer
 * @returns bigint
 */ parcelHelpers.export(exports, "iexp2", ()=>iexp2);
function ilog2(n) {
    const nBig = BigInt(n);
    if (n <= 0) throw new RangeError("Input must be positive");
    return nBig.toString(2).length - 1;
}
function iexp2(n) {
    const nBig = BigInt(n);
    if (n < 0) throw new RangeError("Input must be non-negative");
    return BigInt(1) << nBig;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bL7RE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputBox", ()=>InputBox);
parcelHelpers.export(exports, "InputForm", ()=>InputForm);
parcelHelpers.export(exports, "RecordForm", ()=>RecordForm);
parcelHelpers.export(exports, "TupleForm", ()=>TupleForm);
parcelHelpers.export(exports, "VariantForm", ()=>VariantForm);
parcelHelpers.export(exports, "OptionForm", ()=>OptionForm);
parcelHelpers.export(exports, "VecForm", ()=>VecForm);
class InputBox {
    constructor(idl, ui){
        this.idl = idl;
        this.ui = ui;
        this.label = null;
        this.value = undefined;
        const status = document.createElement("span");
        status.className = "status";
        this.status = status;
        if (ui.input) {
            ui.input.addEventListener("blur", ()=>{
                if (ui.input.value === "") return;
                this.parse();
            });
            ui.input.addEventListener("input", ()=>{
                status.style.display = "none";
                ui.input.classList.remove("reject");
            });
        }
    }
    isRejected() {
        return this.value === undefined;
    }
    parse(config = {}) {
        if (this.ui.form) {
            const value = this.ui.form.parse(config);
            this.value = value;
            return value;
        }
        if (this.ui.input) {
            const input = this.ui.input;
            try {
                const value = this.ui.parse(this.idl, config, input.value);
                if (!this.idl.covariant(value)) throw new Error(`${input.value} is not of type ${this.idl.display()}`);
                this.status.style.display = "none";
                this.value = value;
                return value;
            } catch (err) {
                input.classList.add("reject");
                this.status.style.display = "block";
                this.status.innerHTML = "InputError: " + err.message;
                this.value = undefined;
                return undefined;
            }
        }
        return null;
    }
    render(dom) {
        const container = document.createElement("span");
        if (this.label) {
            const label = document.createElement("label");
            label.innerText = this.label;
            container.appendChild(label);
        }
        if (this.ui.input) {
            container.appendChild(this.ui.input);
            container.appendChild(this.status);
        }
        if (this.ui.form) this.ui.form.render(container);
        dom.appendChild(container);
    }
}
class InputForm {
    constructor(ui){
        this.ui = ui;
        this.form = [];
    }
    renderForm(dom) {
        if (this.ui.container) {
            this.form.forEach((e)=>e.render(this.ui.container));
            dom.appendChild(this.ui.container);
        } else this.form.forEach((e)=>e.render(dom));
    }
    render(dom) {
        if (this.ui.open && this.ui.event) {
            dom.appendChild(this.ui.open);
            const form = this;
            // eslint-disable-next-line
            form.ui.open.addEventListener(form.ui.event, ()=>{
                // Remove old form
                if (form.ui.container) form.ui.container.innerHTML = "";
                else {
                    const oldContainer = form.ui.open.nextElementSibling;
                    if (oldContainer) oldContainer.parentNode.removeChild(oldContainer);
                }
                // Render form
                form.generateForm();
                form.renderForm(dom);
            });
        } else {
            this.generateForm();
            this.renderForm(dom);
        }
    }
}
class RecordForm extends InputForm {
    constructor(fields, ui){
        super(ui);
        this.fields = fields;
        this.ui = ui;
    }
    generateForm() {
        this.form = this.fields.map(([key, type])=>{
            const input = this.ui.render(type);
            // eslint-disable-next-line
            if (this.ui.labelMap && this.ui.labelMap.hasOwnProperty(key)) input.label = this.ui.labelMap[key] + " ";
            else input.label = key + " ";
            return input;
        });
    }
    parse(config) {
        const v = {};
        this.fields.forEach(([key, _], i)=>{
            const value = this.form[i].parse(config);
            v[key] = value;
        });
        if (this.form.some((input)=>input.isRejected())) return undefined;
        return v;
    }
}
class TupleForm extends InputForm {
    constructor(components, ui){
        super(ui);
        this.components = components;
        this.ui = ui;
    }
    generateForm() {
        this.form = this.components.map((type)=>{
            const input = this.ui.render(type);
            return input;
        });
    }
    parse(config) {
        const v = [];
        this.components.forEach((_, i)=>{
            const value = this.form[i].parse(config);
            v.push(value);
        });
        if (this.form.some((input)=>input.isRejected())) return undefined;
        return v;
    }
}
class VariantForm extends InputForm {
    constructor(fields, ui){
        super(ui);
        this.fields = fields;
        this.ui = ui;
    }
    generateForm() {
        const index = this.ui.open.selectedIndex;
        const [_, type] = this.fields[index];
        const variant = this.ui.render(type);
        this.form = [
            variant
        ];
    }
    parse(config) {
        const select = this.ui.open;
        const selected = select.options[select.selectedIndex].value;
        const value = this.form[0].parse(config);
        if (value === undefined) return undefined;
        const v = {};
        v[selected] = value;
        return v;
    }
}
class OptionForm extends InputForm {
    constructor(ty, ui){
        super(ui);
        this.ty = ty;
        this.ui = ui;
    }
    generateForm() {
        if (this.ui.open.checked) {
            const opt = this.ui.render(this.ty);
            this.form = [
                opt
            ];
        } else this.form = [];
    }
    parse(config) {
        if (this.form.length === 0) return [];
        else {
            const value = this.form[0].parse(config);
            if (value === undefined) return undefined;
            return [
                value
            ];
        }
    }
}
class VecForm extends InputForm {
    constructor(ty, ui){
        super(ui);
        this.ty = ty;
        this.ui = ui;
    }
    generateForm() {
        const len = +this.ui.open.value;
        this.form = [];
        for(let i = 0; i < len; i++){
            const t = this.ui.render(this.ty);
            this.form.push(t);
        }
    }
    parse(config) {
        const value = this.form.map((input)=>{
            return input.parse(config);
        });
        if (this.form.some((input)=>input.isRejected())) return undefined;
        return value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wGIH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1lEEY":[function(require,module,exports) {
"use strict";
// exports.Commented = require('./commented')
exports.Diagnose = require("e0490bae74f35fb5");
exports.Decoder = require("61b3f4d4cb10ec35");
exports.Encoder = require("8659651497640d53");
exports.Simple = require("e835a53ed49f6ec8");
exports.Tagged = require("3eb194c7f1fc1c63");
// exports.comment = exports.Commented.comment
exports.decodeAll = exports.Decoder.decodeAll;
exports.decodeFirst = exports.Decoder.decodeFirst;
exports.diagnose = exports.Diagnose.diagnose;
exports.encode = exports.Encoder.encode;
exports.decode = exports.Decoder.decode;
exports.leveldb = {
    decode: exports.Decoder.decodeAll,
    encode: exports.Encoder.encode,
    buffer: true,
    name: "cbor"
};

},{"e0490bae74f35fb5":"juBLK","61b3f4d4cb10ec35":"feNYf","8659651497640d53":"dOdCo","e835a53ed49f6ec8":"11zST","3eb194c7f1fc1c63":"kiImd"}],"juBLK":[function(require,module,exports) {
"use strict";
const { Buffer } = require("36490f56cafe07f5");
const Decoder = require("7e483b4ab59bd4d1");
const utils = require("b98dbde3eb64e54f");
/**
 * Output the diagnostic format from a stream of CBOR bytes.
 *
 */ class Diagnose extends Decoder {
    createTag(tagNumber, value) {
        return `${tagNumber}(${value})`;
    }
    createInt(val) {
        return super.createInt(val).toString();
    }
    createInt32(f, g) {
        return super.createInt32(f, g).toString();
    }
    createInt64(f1, f2, g1, g2) {
        return super.createInt64(f1, f2, g1, g2).toString();
    }
    createInt32Neg(f, g) {
        return super.createInt32Neg(f, g).toString();
    }
    createInt64Neg(f1, f2, g1, g2) {
        return super.createInt64Neg(f1, f2, g1, g2).toString();
    }
    createTrue() {
        return "true";
    }
    createFalse() {
        return "false";
    }
    createFloat(val) {
        const fl = super.createFloat(val);
        if (utils.isNegativeZero(val)) return "-0_1";
        return `${fl}_1`;
    }
    createFloatSingle(a, b, c, d) {
        const fl = super.createFloatSingle(a, b, c, d);
        return `${fl}_2`;
    }
    createFloatDouble(a, b, c, d, e, f, g, h) {
        const fl = super.createFloatDouble(a, b, c, d, e, f, g, h);
        return `${fl}_3`;
    }
    createByteString(raw, len) {
        const val = raw.join(", ");
        if (len === -1) return `(_ ${val})`;
        return `h'${val}`;
    }
    createByteStringFromHeap(start, end) {
        const val = Buffer.from(super.createByteStringFromHeap(start, end)).toString("hex");
        return `h'${val}'`;
    }
    createInfinity() {
        return "Infinity_1";
    }
    createInfinityNeg() {
        return "-Infinity_1";
    }
    createNaN() {
        return "NaN_1";
    }
    createNaNNeg() {
        return "-NaN_1";
    }
    createNull() {
        return "null";
    }
    createUndefined() {
        return "undefined";
    }
    createSimpleUnassigned(val) {
        return `simple(${val})`;
    }
    createArray(arr, len) {
        const val = super.createArray(arr, len);
        if (len === -1) // indefinite
        return `[_ ${val.join(", ")}]`;
        return `[${val.join(", ")}]`;
    }
    createMap(map, len) {
        const val = super.createMap(map);
        const list = Array.from(val.keys()).reduce(collectObject(val), "");
        if (len === -1) return `{_ ${list}}`;
        return `{${list}}`;
    }
    createObject(obj, len) {
        const val = super.createObject(obj);
        const map = Object.keys(val).reduce(collectObject(val), "");
        if (len === -1) return `{_ ${map}}`;
        return `{${map}}`;
    }
    createUtf8String(raw, len) {
        const val = raw.join(", ");
        if (len === -1) return `(_ ${val})`;
        return `"${val}"`;
    }
    createUtf8StringFromHeap(start, end) {
        const val = Buffer.from(super.createUtf8StringFromHeap(start, end)).toString("utf8");
        return `"${val}"`;
    }
    static diagnose(input, enc) {
        if (typeof input === "string") input = Buffer.from(input, enc || "hex");
        const dec = new Diagnose();
        return dec.decodeFirst(input);
    }
}
module.exports = Diagnose;
function collectObject(val) {
    return (acc, key)=>{
        if (acc) return `${acc}, ${key}: ${val[key]}`;
        return `${key}: ${val[key]}`;
    };
}

},{"36490f56cafe07f5":"fCgem","7e483b4ab59bd4d1":"feNYf","b98dbde3eb64e54f":"bZwHE"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
var base64 = require("9c62938f1dccc73c");
var ieee754 = require("aceacb6a4531a9d2");
var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = "";
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    var loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = "";
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = "";
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = "0123456789abcdef";
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"feNYf":[function(require,module,exports) {
var global = arguments[3];
"use strict";
const { Buffer } = require("f4bd1beac517416a");
const ieee754 = require("553ba5fe890b40bd");
const Bignumber = require("6c81b437dd4d316d").BigNumber;
const parser = require("979bb559a8f82811");
const utils = require("17244a3536f07327");
const c = require("10650d3c44a6a10d");
const Simple = require("f21cba6462a8dc7f");
const Tagged = require("c5e1faaddc4aa528");
const { URL } = require("f324c37db7a6afbb");
/**
 * Transform binary cbor data into JavaScript objects.
 */ class Decoder {
    /**
   * @param {Object} [opts={}]
   * @param {number} [opts.size=65536] - Size of the allocated heap.
   */ constructor(opts){
        opts = opts || {};
        if (!opts.size || opts.size < 0x10000) opts.size = 0x10000;
        else // Ensure the size is a power of 2
        opts.size = utils.nextPowerOf2(opts.size);
        // Heap use to share the input with the parser
        this._heap = new ArrayBuffer(opts.size);
        this._heap8 = new Uint8Array(this._heap);
        this._buffer = Buffer.from(this._heap);
        this._reset();
        // Known tags
        this._knownTags = Object.assign({
            0: (val)=>new Date(val),
            1: (val)=>new Date(val * 1000),
            2: (val)=>utils.arrayBufferToBignumber(val),
            3: (val)=>c.NEG_ONE.minus(utils.arrayBufferToBignumber(val)),
            4: (v)=>{
                // const v = new Uint8Array(val)
                return c.TEN.pow(v[0]).times(v[1]);
            },
            5: (v)=>{
                // const v = new Uint8Array(val)
                return c.TWO.pow(v[0]).times(v[1]);
            },
            32: (val)=>new URL(val),
            35: (val)=>new RegExp(val)
        }, opts.tags);
        // Initialize asm based parser
        this.parser = parser(global, {
            // eslint-disable-next-line no-console
            log: console.log.bind(console),
            pushInt: this.pushInt.bind(this),
            pushInt32: this.pushInt32.bind(this),
            pushInt32Neg: this.pushInt32Neg.bind(this),
            pushInt64: this.pushInt64.bind(this),
            pushInt64Neg: this.pushInt64Neg.bind(this),
            pushFloat: this.pushFloat.bind(this),
            pushFloatSingle: this.pushFloatSingle.bind(this),
            pushFloatDouble: this.pushFloatDouble.bind(this),
            pushTrue: this.pushTrue.bind(this),
            pushFalse: this.pushFalse.bind(this),
            pushUndefined: this.pushUndefined.bind(this),
            pushNull: this.pushNull.bind(this),
            pushInfinity: this.pushInfinity.bind(this),
            pushInfinityNeg: this.pushInfinityNeg.bind(this),
            pushNaN: this.pushNaN.bind(this),
            pushNaNNeg: this.pushNaNNeg.bind(this),
            pushArrayStart: this.pushArrayStart.bind(this),
            pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
            pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
            pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
            pushObjectStart: this.pushObjectStart.bind(this),
            pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
            pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
            pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
            pushByteString: this.pushByteString.bind(this),
            pushByteStringStart: this.pushByteStringStart.bind(this),
            pushUtf8String: this.pushUtf8String.bind(this),
            pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
            pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
            pushTagUnassigned: this.pushTagUnassigned.bind(this),
            pushTagStart: this.pushTagStart.bind(this),
            pushTagStart4: this.pushTagStart4.bind(this),
            pushTagStart8: this.pushTagStart8.bind(this),
            pushBreak: this.pushBreak.bind(this)
        }, this._heap);
    }
    get _depth() {
        return this._parents.length;
    }
    get _currentParent() {
        return this._parents[this._depth - 1];
    }
    get _ref() {
        return this._currentParent.ref;
    }
    // Finish the current parent
    _closeParent() {
        var p = this._parents.pop();
        if (p.length > 0) throw new Error(`Missing ${p.length} elements`);
        switch(p.type){
            case c.PARENT.TAG:
                this._push(this.createTag(p.ref[0], p.ref[1]));
                break;
            case c.PARENT.BYTE_STRING:
                this._push(this.createByteString(p.ref, p.length));
                break;
            case c.PARENT.UTF8_STRING:
                this._push(this.createUtf8String(p.ref, p.length));
                break;
            case c.PARENT.MAP:
                if (p.values % 2 > 0) throw new Error("Odd number of elements in the map");
                this._push(this.createMap(p.ref, p.length));
                break;
            case c.PARENT.OBJECT:
                if (p.values % 2 > 0) throw new Error("Odd number of elements in the map");
                this._push(this.createObject(p.ref, p.length));
                break;
            case c.PARENT.ARRAY:
                this._push(this.createArray(p.ref, p.length));
                break;
            default:
                break;
        }
        if (this._currentParent && this._currentParent.type === c.PARENT.TAG) this._dec();
    }
    // Reduce the expected length of the current parent by one
    _dec() {
        const p = this._currentParent;
        // The current parent does not know the epxected child length
        if (p.length < 0) return;
        p.length--;
        // All children were seen, we can close the current parent
        if (p.length === 0) this._closeParent();
    }
    // Push any value to the current parent
    _push(val, hasChildren) {
        const p = this._currentParent;
        p.values++;
        switch(p.type){
            case c.PARENT.ARRAY:
            case c.PARENT.BYTE_STRING:
            case c.PARENT.UTF8_STRING:
                if (p.length > -1) this._ref[this._ref.length - p.length] = val;
                else this._ref.push(val);
                this._dec();
                break;
            case c.PARENT.OBJECT:
                if (p.tmpKey != null) {
                    this._ref[p.tmpKey] = val;
                    p.tmpKey = null;
                    this._dec();
                } else {
                    p.tmpKey = val;
                    if (typeof p.tmpKey !== "string") {
                        // too bad, convert to a Map
                        p.type = c.PARENT.MAP;
                        p.ref = utils.buildMap(p.ref);
                    }
                }
                break;
            case c.PARENT.MAP:
                if (p.tmpKey != null) {
                    this._ref.set(p.tmpKey, val);
                    p.tmpKey = null;
                    this._dec();
                } else p.tmpKey = val;
                break;
            case c.PARENT.TAG:
                this._ref.push(val);
                if (!hasChildren) this._dec();
                break;
            default:
                throw new Error("Unknown parent type");
        }
    }
    // Create a new parent in the parents list
    _createParent(obj, type, len) {
        this._parents[this._depth] = {
            type: type,
            length: len,
            ref: obj,
            values: 0,
            tmpKey: null
        };
    }
    // Reset all state back to the beginning, also used for initiatlization
    _reset() {
        this._res = [];
        this._parents = [
            {
                type: c.PARENT.ARRAY,
                length: -1,
                ref: this._res,
                values: 0,
                tmpKey: null
            }
        ];
    }
    // -- Interface to customize deoding behaviour
    createTag(tagNumber, value) {
        const typ = this._knownTags[tagNumber];
        if (!typ) return new Tagged(tagNumber, value);
        return typ(value);
    }
    createMap(obj, len) {
        return obj;
    }
    createObject(obj, len) {
        return obj;
    }
    createArray(arr, len) {
        return arr;
    }
    createByteString(raw, len) {
        return Buffer.concat(raw);
    }
    createByteStringFromHeap(start, end) {
        if (start === end) return Buffer.alloc(0);
        return Buffer.from(this._heap.slice(start, end));
    }
    createInt(val) {
        return val;
    }
    createInt32(f, g) {
        return utils.buildInt32(f, g);
    }
    createInt64(f1, f2, g1, g2) {
        return utils.buildInt64(f1, f2, g1, g2);
    }
    createFloat(val) {
        return val;
    }
    createFloatSingle(a, b, c, d) {
        return ieee754.read([
            a,
            b,
            c,
            d
        ], 0, false, 23, 4);
    }
    createFloatDouble(a, b, c, d, e, f, g, h) {
        return ieee754.read([
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h
        ], 0, false, 52, 8);
    }
    createInt32Neg(f, g) {
        return -1 - utils.buildInt32(f, g);
    }
    createInt64Neg(f1, f2, g1, g2) {
        const f = utils.buildInt32(f1, f2);
        const g = utils.buildInt32(g1, g2);
        if (f > c.MAX_SAFE_HIGH) return c.NEG_ONE.minus(new Bignumber(f).times(c.SHIFT32).plus(g));
        return -1 - (f * c.SHIFT32 + g);
    }
    createTrue() {
        return true;
    }
    createFalse() {
        return false;
    }
    createNull() {
        return null;
    }
    createUndefined() {
        return undefined;
    }
    createInfinity() {
        return Infinity;
    }
    createInfinityNeg() {
        return -Infinity;
    }
    createNaN() {
        return NaN;
    }
    createNaNNeg() {
        return NaN;
    }
    createUtf8String(raw, len) {
        return raw.join("");
    }
    createUtf8StringFromHeap(start, end) {
        if (start === end) return "";
        return this._buffer.toString("utf8", start, end);
    }
    createSimpleUnassigned(val) {
        return new Simple(val);
    }
    // -- Interface for decoder.asm.js
    pushInt(val) {
        this._push(this.createInt(val));
    }
    pushInt32(f, g) {
        this._push(this.createInt32(f, g));
    }
    pushInt64(f1, f2, g1, g2) {
        this._push(this.createInt64(f1, f2, g1, g2));
    }
    pushFloat(val) {
        this._push(this.createFloat(val));
    }
    pushFloatSingle(a, b, c, d) {
        this._push(this.createFloatSingle(a, b, c, d));
    }
    pushFloatDouble(a, b, c, d, e, f, g, h) {
        this._push(this.createFloatDouble(a, b, c, d, e, f, g, h));
    }
    pushInt32Neg(f, g) {
        this._push(this.createInt32Neg(f, g));
    }
    pushInt64Neg(f1, f2, g1, g2) {
        this._push(this.createInt64Neg(f1, f2, g1, g2));
    }
    pushTrue() {
        this._push(this.createTrue());
    }
    pushFalse() {
        this._push(this.createFalse());
    }
    pushNull() {
        this._push(this.createNull());
    }
    pushUndefined() {
        this._push(this.createUndefined());
    }
    pushInfinity() {
        this._push(this.createInfinity());
    }
    pushInfinityNeg() {
        this._push(this.createInfinityNeg());
    }
    pushNaN() {
        this._push(this.createNaN());
    }
    pushNaNNeg() {
        this._push(this.createNaNNeg());
    }
    pushArrayStart() {
        this._createParent([], c.PARENT.ARRAY, -1);
    }
    pushArrayStartFixed(len) {
        this._createArrayStartFixed(len);
    }
    pushArrayStartFixed32(len1, len2) {
        const len = utils.buildInt32(len1, len2);
        this._createArrayStartFixed(len);
    }
    pushArrayStartFixed64(len1, len2, len3, len4) {
        const len = utils.buildInt64(len1, len2, len3, len4);
        this._createArrayStartFixed(len);
    }
    pushObjectStart() {
        this._createObjectStartFixed(-1);
    }
    pushObjectStartFixed(len) {
        this._createObjectStartFixed(len);
    }
    pushObjectStartFixed32(len1, len2) {
        const len = utils.buildInt32(len1, len2);
        this._createObjectStartFixed(len);
    }
    pushObjectStartFixed64(len1, len2, len3, len4) {
        const len = utils.buildInt64(len1, len2, len3, len4);
        this._createObjectStartFixed(len);
    }
    pushByteStringStart() {
        this._parents[this._depth] = {
            type: c.PARENT.BYTE_STRING,
            length: -1,
            ref: [],
            values: 0,
            tmpKey: null
        };
    }
    pushByteString(start, end) {
        this._push(this.createByteStringFromHeap(start, end));
    }
    pushUtf8StringStart() {
        this._parents[this._depth] = {
            type: c.PARENT.UTF8_STRING,
            length: -1,
            ref: [],
            values: 0,
            tmpKey: null
        };
    }
    pushUtf8String(start, end) {
        this._push(this.createUtf8StringFromHeap(start, end));
    }
    pushSimpleUnassigned(val) {
        this._push(this.createSimpleUnassigned(val));
    }
    pushTagStart(tag) {
        this._parents[this._depth] = {
            type: c.PARENT.TAG,
            length: 1,
            ref: [
                tag
            ]
        };
    }
    pushTagStart4(f, g) {
        this.pushTagStart(utils.buildInt32(f, g));
    }
    pushTagStart8(f1, f2, g1, g2) {
        this.pushTagStart(utils.buildInt64(f1, f2, g1, g2));
    }
    pushTagUnassigned(tagNumber) {
        this._push(this.createTag(tagNumber));
    }
    pushBreak() {
        if (this._currentParent.length > -1) throw new Error("Unexpected break");
        this._closeParent();
    }
    _createObjectStartFixed(len) {
        if (len === 0) {
            this._push(this.createObject({}));
            return;
        }
        this._createParent({}, c.PARENT.OBJECT, len);
    }
    _createArrayStartFixed(len) {
        if (len === 0) {
            this._push(this.createArray([]));
            return;
        }
        this._createParent(new Array(len), c.PARENT.ARRAY, len);
    }
    _decode(input) {
        if (input.byteLength === 0) throw new Error("Input too short");
        this._reset();
        this._heap8.set(input);
        const code = this.parser.parse(input.byteLength);
        if (this._depth > 1) {
            while(this._currentParent.length === 0)this._closeParent();
            if (this._depth > 1) throw new Error("Undeterminated nesting");
        }
        if (code > 0) throw new Error("Failed to parse");
        if (this._res.length === 0) throw new Error("No valid result");
    }
    // -- Public Interface
    decodeFirst(input) {
        this._decode(input);
        return this._res[0];
    }
    decodeAll(input) {
        this._decode(input);
        return this._res;
    }
    /**
   * Decode the first cbor object.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {*}
   */ static decode(input, enc) {
        if (typeof input === "string") input = Buffer.from(input, enc || "hex");
        const dec = new Decoder({
            size: input.length
        });
        return dec.decodeFirst(input);
    }
    /**
   * Decode all cbor objects.
   *
   * @param {Buffer|string} input
   * @param {string} [enc='hex'] - Encoding used if a string is passed.
   * @returns {Array<*>}
   */ static decodeAll(input, enc) {
        if (typeof input === "string") input = Buffer.from(input, enc || "hex");
        const dec = new Decoder({
            size: input.length
        });
        return dec.decodeAll(input);
    }
}
Decoder.decodeFirst = Decoder.decode;
module.exports = Decoder;

},{"f4bd1beac517416a":"fCgem","553ba5fe890b40bd":"cO95r","6c81b437dd4d316d":"57qkX","979bb559a8f82811":"4fW0d","17244a3536f07327":"bZwHE","10650d3c44a6a10d":"3ENYL","f21cba6462a8dc7f":"11zST","c5e1faaddc4aa528":"kiImd","f324c37db7a6afbb":"e9Sz0"}],"57qkX":[function(require,module,exports) {
(function(globalObject) {
    "use strict";
    /*
 *      bignumber.js v9.1.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */ var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 0x1fffffffffffff, // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [
        1,
        10,
        100,
        1e3,
        1e4,
        1e5,
        1e6,
        1e7,
        1e8,
        1e9,
        1e10,
        1e11,
        1e12,
        1e13
    ], SQRT_BASE = 1e7, // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9; // 0 to MAX_INT32
    /*
   * Create and return a BigNumber constructor.
   */ function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber.prototype = {
            constructor: BigNumber,
            toString: null,
            valueOf: null
        }, ONE = new BigNumber(1), //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
        // The default values below must be integers within the inclusive ranges stated.
        // The values can also be changed at run-time using BigNumber.set.
        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20, // The rounding mode used when rounding to the above decimal places, and when using
        // toExponential, toFixed, toFormat and toPrecision, and round (default value).
        // UP         0 Away from zero.
        // DOWN       1 Towards zero.
        // CEIL       2 Towards +Infinity.
        // FLOOR      3 Towards -Infinity.
        // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
        // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
        // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
        // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
        // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
        ROUNDING_MODE = 4, // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7, // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21, // RANGE : [MIN_EXP, MAX_EXP]
        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -10000000, // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 1e7, // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false, // The modulo mode used when calculating the modulus: a mod n.
        // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
        // The remainder (r) is calculated as: r = a - n * q.
        //
        // UP        0 The remainder is positive if the dividend is negative, else is negative.
        // DOWN      1 The remainder has the same sign as the dividend.
        //             This modulo mode is commonly known as 'truncated division' and is
        //             equivalent to (a % n) in JavaScript.
        // FLOOR     3 The remainder has the same sign as the divisor (Python %).
        // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
        // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
        //             The remainder is always positive.
        //
        // The truncated division, floored division, Euclidian division and IEEE 754 remainder
        // modes are commonly used for the modulus operation.
        // Although the other rounding modes can also be used, they may not give useful results.
        MODULO_MODE = 1, // The maximum number of significant digits of the result of the exponentiatedBy operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 0, // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xa0",
            suffix: ""
        }, // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
        // '-', '.', whitespace, or repeated character.
        // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
        ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
        //------------------------------------------------------------------------------------------
        // CONSTRUCTOR
        /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */ function BigNumber(v, b) {
            var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
            // Enable constructor call without `new`.
            if (!(x instanceof BigNumber)) return new BigNumber(v, b);
            if (b == null) {
                if (v && v._isBigNumber === true) {
                    x.s = v.s;
                    if (!v.c || v.e > MAX_EXP) x.c = x.e = null;
                    else if (v.e < MIN_EXP) x.c = [
                        x.e = 0
                    ];
                    else {
                        x.e = v.e;
                        x.c = v.c.slice();
                    }
                    return;
                }
                if ((isNum = typeof v == "number") && v * 0 == 0) {
                    // Use `1 / n` to handle minus zero also.
                    x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                    // Fast path for integers, where n < 2147483648 (2**31).
                    if (v === ~~v) {
                        for(e = 0, i = v; i >= 10; i /= 10, e++);
                        if (e > MAX_EXP) x.c = x.e = null;
                        else {
                            x.e = e;
                            x.c = [
                                v
                            ];
                        }
                        return;
                    }
                    str = String(v);
                } else {
                    if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                    x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
                }
                // Decimal point?
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                // Exponential form?
                if ((i = str.search(/e/i)) > 0) {
                    // Determine exponent.
                    if (e < 0) e = i;
                    e += +str.slice(i + 1);
                    str = str.substring(0, i);
                } else if (e < 0) // Integer.
                e = str.length;
            } else {
                // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
                intCheck(b, 2, ALPHABET.length, "Base");
                // Allow exponential notation to be used with base 10 argument, while
                // also rounding to DECIMAL_PLACES as with other bases.
                if (b == 10 && alphabetHasNormalDecimalDigits) {
                    x = new BigNumber(v);
                    return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }
                str = String(v);
                if (isNum = typeof v == "number") {
                    // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                    if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                    x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                    // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                    if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) throw Error(tooManyDigits + v);
                } else x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                alphabet = ALPHABET.slice(0, b);
                e = i = 0;
                // Check that str is a valid base b number.
                // Don't use RegExp, so alphabet can contain special characters.
                for(len = str.length; i < len; i++)if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                    if (c == ".") // If '.' is not the first character and it has not be found before.
                    {
                        if (i > e) {
                            e = len;
                            continue;
                        }
                    } else if (!caseChanged) // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                    {
                        if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                            caseChanged = true;
                            i = -1;
                            e = 0;
                            continue;
                        }
                    }
                    return parseNumeric(x, String(v), isNum, b);
                }
                // Prevent later check for length on converted number.
                isNum = false;
                str = convertBase(str, b, 10, x.s);
                // Decimal point?
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                else e = str.length;
            }
            // Determine leading zeros.
            for(i = 0; str.charCodeAt(i) === 48; i++);
            // Determine trailing zeros.
            for(len = str.length; str.charCodeAt(--len) === 48;);
            if (str = str.slice(i, ++len)) {
                len -= i;
                // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) throw Error(tooManyDigits + x.s * v);
                // Overflow?
                if ((e = e - i - 1) > MAX_EXP) // Infinity.
                x.c = x.e = null;
                else if (e < MIN_EXP) // Zero.
                x.c = [
                    x.e = 0
                ];
                else {
                    x.e = e;
                    x.c = [];
                    // Transform base
                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = (e + 1) % LOG_BASE;
                    if (e < 0) i += LOG_BASE; // i < 1
                    if (i < len) {
                        if (i) x.c.push(+str.slice(0, i));
                        for(len -= LOG_BASE; i < len;)x.c.push(+str.slice(i, i += LOG_BASE));
                        i = LOG_BASE - (str = str.slice(i)).length;
                    } else i -= len;
                    for(; i--; str += "0");
                    x.c.push(+str);
                }
            } else // Zero.
            x.c = [
                x.e = 0
            ];
        }
        // CONSTRUCTOR PROPERTIES
        BigNumber.clone = clone;
        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;
        /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */ BigNumber.config = BigNumber.set = function(obj) {
            var p, v;
            if (obj != null) {
                if (typeof obj == "object") {
                    // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        DECIMAL_PLACES = v;
                    }
                    // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                    // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                        v = obj[p];
                        intCheck(v, 0, 8, p);
                        ROUNDING_MODE = v;
                    }
                    // EXPONENTIAL_AT {number|number[]}
                    // Integer, -MAX to MAX inclusive or
                    // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                    // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, 0, p);
                            intCheck(v[1], 0, MAX, p);
                            TO_EXP_NEG = v[0];
                            TO_EXP_POS = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                        }
                    }
                    // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                    // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                    // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
                    if (obj.hasOwnProperty(p = "RANGE")) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, -1, p);
                            intCheck(v[1], 1, MAX, p);
                            MIN_EXP = v[0];
                            MAX_EXP = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            if (v) MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                            else throw Error(bignumberError + p + " cannot be zero: " + v);
                        }
                    }
                    // CRYPTO {boolean} true or false.
                    // '[BigNumber Error] CRYPTO not true or false: {v}'
                    // '[BigNumber Error] crypto unavailable'
                    if (obj.hasOwnProperty(p = "CRYPTO")) {
                        v = obj[p];
                        if (v === !!v) {
                            if (v) {
                                if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) CRYPTO = v;
                                else {
                                    CRYPTO = !v;
                                    throw Error(bignumberError + "crypto unavailable");
                                }
                            } else CRYPTO = v;
                        } else throw Error(bignumberError + p + " not true or false: " + v);
                    }
                    // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                    // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                        v = obj[p];
                        intCheck(v, 0, 9, p);
                        MODULO_MODE = v;
                    }
                    // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        POW_PRECISION = v;
                    }
                    // FORMAT {object}
                    // '[BigNumber Error] FORMAT not an object: {v}'
                    if (obj.hasOwnProperty(p = "FORMAT")) {
                        v = obj[p];
                        if (typeof v == "object") FORMAT = v;
                        else throw Error(bignumberError + p + " not an object: " + v);
                    }
                    // ALPHABET {string}
                    // '[BigNumber Error] ALPHABET invalid: {v}'
                    if (obj.hasOwnProperty(p = "ALPHABET")) {
                        v = obj[p];
                        // Disallow if less than two characters,
                        // or if it contains '+', '-', '.', whitespace, or a repeated character.
                        if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                            ALPHABET = v;
                        } else throw Error(bignumberError + p + " invalid: " + v);
                    }
                } else // '[BigNumber Error] Object expected: {v}'
                throw Error(bignumberError + "Object expected: " + obj);
            }
            return {
                DECIMAL_PLACES: DECIMAL_PLACES,
                ROUNDING_MODE: ROUNDING_MODE,
                EXPONENTIAL_AT: [
                    TO_EXP_NEG,
                    TO_EXP_POS
                ],
                RANGE: [
                    MIN_EXP,
                    MAX_EXP
                ],
                CRYPTO: CRYPTO,
                MODULO_MODE: MODULO_MODE,
                POW_PRECISION: POW_PRECISION,
                FORMAT: FORMAT,
                ALPHABET: ALPHABET
            };
        };
        /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */ BigNumber.isBigNumber = function(v) {
            if (!v || v._isBigNumber !== true) return false;
            if (!BigNumber.DEBUG) return true;
            var i, n, c = v.c, e = v.e, s = v.s;
            out: if (({}).toString.call(c) == "[object Array]") {
                if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                    // If the first element is zero, the BigNumber value must be zero.
                    if (c[0] === 0) {
                        if (e === 0 && c.length === 1) return true;
                        break out;
                    }
                    // Calculate number of digits that c[0] should have, based on the exponent.
                    i = (e + 1) % LOG_BASE;
                    if (i < 1) i += LOG_BASE;
                    // Calculate number of digits of c[0].
                    //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
                    if (String(c[0]).length == i) {
                        for(i = 0; i < c.length; i++){
                            n = c[i];
                            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                        }
                        // Last element cannot be zero, unless it is the only element.
                        if (n !== 0) return true;
                    }
                }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) return true;
            throw Error(bignumberError + "Invalid BigNumber: " + v);
        };
        /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.maximum = BigNumber.max = function() {
            return maxOrMin(arguments, -1);
        };
        /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.minimum = BigNumber.min = function() {
            return maxOrMin(arguments, 1);
        };
        /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */ BigNumber.random = function() {
            var pow2_53 = 0x20000000000000;
            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function() {
                return mathfloor(Math.random() * pow2_53);
            } : function() {
                return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
            };
            return function(dp) {
                var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
                if (dp == null) dp = DECIMAL_PLACES;
                else intCheck(dp, 0, MAX);
                k = mathceil(dp / LOG_BASE);
                if (CRYPTO) {
                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {
                        a = crypto.getRandomValues(new Uint32Array(k *= 2));
                        for(; i < k;){
                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if (v >= 9e15) {
                                b = crypto.getRandomValues(new Uint32Array(2));
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {
                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 2;
                            }
                        }
                        i = k / 2;
                    // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {
                        // buffer
                        a = crypto.randomBytes(k *= 7);
                        for(; i < k;){
                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                            if (v >= 9e15) crypto.randomBytes(7).copy(a, i);
                            else {
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        throw Error(bignumberError + "crypto unavailable");
                    }
                }
                // Use Math.random.
                if (!CRYPTO) for(; i < k;){
                    v = random53bitInt();
                    if (v < 9e15) c[i++] = v % 1e14;
                }
                k = c[--i];
                dp %= LOG_BASE;
                // Convert trailing digits to zeros according to dp.
                if (k && dp) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor(k / v) * v;
                }
                // Remove trailing elements which are zero.
                for(; c[i] === 0; c.pop(), i--);
                // Zero?
                if (i < 0) c = [
                    e = 0
                ];
                else {
                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for(e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
                    // Count the digits of the first element of c to determine leading zeros, and...
                    for(i = 1, v = c[0]; v >= 10; v /= 10, i++);
                    // adjust the exponent accordingly.
                    if (i < LOG_BASE) e -= LOG_BASE - i;
                }
                rand.e = e;
                rand.c = c;
                return rand;
            };
        }();
        /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.sum = function() {
            var i = 1, args = arguments, sum = new BigNumber(args[0]);
            for(; i < args.length;)sum = sum.plus(args[i++]);
            return sum;
        };
        // PRIVATE FUNCTIONS
        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = function() {
            var decimal = "0123456789";
            /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */ function toBaseOut(str, baseIn, baseOut, alphabet) {
                var j, arr = [
                    0
                ], arrL, i = 0, len = str.length;
                for(; i < len;){
                    for(arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                    arr[0] += alphabet.indexOf(str.charAt(i++));
                    for(j = 0; j < arr.length; j++)if (arr[j] > baseOut - 1) {
                        if (arr[j + 1] == null) arr[j + 1] = 0;
                        arr[j + 1] += arr[j] / baseOut | 0;
                        arr[j] %= baseOut;
                    }
                }
                return arr.reverse();
            }
            // Convert a numeric string of baseIn to a numeric string of baseOut.
            // If the caller is toString, we are converting from base 10 to baseOut.
            // If the caller is BigNumber, we are converting from baseIn to base 10.
            return function(str, baseIn, baseOut, sign, callerIsToString) {
                var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
                // Non-integer.
                if (i >= 0) {
                    k = POW_PRECISION;
                    // Unlimited precision.
                    POW_PRECISION = 0;
                    str = str.replace(".", "");
                    y = new BigNumber(baseIn);
                    x = y.pow(str.length - i);
                    POW_PRECISION = k;
                    // Convert str as if an integer, then restore the fraction part by dividing the
                    // result by its base raised to a power.
                    y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
                    y.e = y.c.length;
                }
                // Convert the number as integer.
                xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
                // xc now represents str as an integer and converted to baseOut. e is the exponent.
                e = k = xc.length;
                // Remove trailing zeros.
                for(; xc[--k] == 0; xc.pop());
                // Zero?
                if (!xc[0]) return alphabet.charAt(0);
                // Does str represent an integer? If so, no need for the division.
                if (i < 0) --e;
                else {
                    x.c = xc;
                    x.e = e;
                    // The sign is needed for correct rounding.
                    x.s = sign;
                    x = div(x, y, dp, rm, baseOut);
                    xc = x.c;
                    r = x.r;
                    e = x.e;
                }
                // xc now represents str converted to baseOut.
                // THe index of the rounding digit.
                d = e + dp + 1;
                // The rounding digit: the digit to the right of the digit that may be rounded up.
                i = xc[d];
                // Look at the rounding digits and mode to determine whether to round up.
                k = baseOut / 2;
                r = r || d < 0 || xc[d + 1] != null;
                r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
                // If the index of the rounding digit is not greater than zero, or xc represents
                // zero, then the result of the base conversion is zero or, if rounding up, a value
                // such as 0.00001.
                if (d < 1 || !xc[0]) // 1^-dp or 0
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
                else {
                    // Truncate xc to the required number of decimal places.
                    xc.length = d;
                    // Round up?
                    if (r) // Rounding up may mean the previous digit has to be rounded up and so on.
                    for(--baseOut; ++xc[--d] > baseOut;){
                        xc[d] = 0;
                        if (!d) {
                            ++e;
                            xc = [
                                1
                            ].concat(xc);
                        }
                    }
                    // Determine trailing zeros.
                    for(k = xc.length; !xc[--k];);
                    // E.g. [4, 11, 15] becomes 4bf.
                    for(i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]));
                    // Add leading zeros, decimal point and trailing zeros as required.
                    str = toFixedPoint(str, e, alphabet.charAt(0));
                }
                // The caller will add the sign.
                return str;
            };
        }();
        // Perform division in the specified base. Called by div and convertBase.
        div = function() {
            // Assume non-zero x and k.
            function multiply(x, k, base) {
                var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
                for(x = x.slice(); i--;){
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                    carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                    x[i] = temp % base;
                }
                if (carry) x = [
                    carry
                ].concat(x);
                return x;
            }
            function compare(a, b, aL, bL) {
                var i, cmp;
                if (aL != bL) cmp = aL > bL ? 1 : -1;
                else {
                    for(i = cmp = 0; i < aL; i++)if (a[i] != b[i]) {
                        cmp = a[i] > b[i] ? 1 : -1;
                        break;
                    }
                }
                return cmp;
            }
            function subtract(a, b, aL, base) {
                var i = 0;
                // Subtract b from a.
                for(; aL--;){
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }
                // Remove leading zeros.
                for(; !a[0] && a.length > 1; a.splice(0, 1));
            }
            // x: dividend, y: divisor.
            return function(x, y, dp, rm, base) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
                // Either NaN, Infinity or 0?
                if (!xc || !xc[0] || !yc || !yc[0]) return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;
                if (!base) {
                    base = BASE;
                    e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                    s = s / LOG_BASE | 0;
                }
                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for(i = 0; yc[i] == (xc[i] || 0); i++);
                if (yc[i] > (xc[i] || 0)) e--;
                if (s < 0) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;
                    // Normalise xc and yc so highest order digit of yc is >= base / 2.
                    n = mathfloor(base / (yc[0] + 1));
                    // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                    // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
                    if (n > 1) {
                        yc = multiply(yc, n, base);
                        xc = multiply(xc, n, base);
                        yL = yc.length;
                        xL = xc.length;
                    }
                    xi = yL;
                    rem = xc.slice(0, yL);
                    remL = rem.length;
                    // Add zeros to make remainder as long as divisor.
                    for(; remL < yL; rem[remL++] = 0);
                    yz = yc.slice();
                    yz = [
                        0
                    ].concat(yz);
                    yc0 = yc[0];
                    if (yc[1] >= base / 2) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
                    do {
                        n = 0;
                        // Compare divisor and remainder.
                        cmp = compare(yc, rem, yL, remL);
                        // If divisor < remainder.
                        if (cmp < 0) {
                            // Calculate trial digit, n.
                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor(rem0 / yc0);
                            //  Algorithm:
                            //  product = divisor multiplied by trial digit (n).
                            //  Compare product and remainder.
                            //  If product is greater than remainder:
                            //    Subtract divisor from product, decrement trial digit.
                            //  Subtract product from remainder.
                            //  If product was less than remainder at the last compare:
                            //    Compare new remainder and divisor.
                            //    If remainder is greater than divisor:
                            //      Subtract divisor from remainder, increment trial digit.
                            if (n > 1) {
                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;
                                // product = divisor * trial digit.
                                prod = multiply(yc, n, base);
                                prodL = prod.length;
                                remL = rem.length;
                                // Compare product and remainder.
                                // If product > remainder then trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while(compare(prod, rem, prodL, remL) == 1){
                                    n--;
                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {
                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if (n == 0) // divisor < remainder, so n must be at least 1.
                                cmp = n = 1;
                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }
                            if (prodL < remL) prod = [
                                0
                            ].concat(prod);
                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            remL = rem.length;
                            // If product was < remainder.
                            if (cmp == -1) // Compare divisor and new remainder.
                            // If divisor < new remainder, subtract divisor from remainder.
                            // Trial digit n too low.
                            // n is 1 too low about 5% of the time, and very rarely 2 too low.
                            while(compare(yc, rem, yL, remL) < 1){
                                n++;
                                // Subtract divisor from remainder.
                                subtract(rem, yL < remL ? yz : yc, remL, base);
                                remL = rem.length;
                            }
                        } else if (cmp === 0) {
                            n++;
                            rem = [
                                0
                            ];
                        } // else cmp === 1 and n will be 0
                        // Add the next digit, n, to the result array.
                        qc[i++] = n;
                        // Update the remainder.
                        if (rem[0]) rem[remL++] = xc[xi] || 0;
                        else {
                            rem = [
                                xc[xi]
                            ];
                            remL = 1;
                        }
                    }while ((xi++ < xL || rem[0] != null) && s--);
                    more = rem[0] != null;
                    // Leading zero?
                    if (!qc[0]) qc.splice(0, 1);
                }
                if (base == BASE) {
                    // To calculate q.e, first get the number of digits of qc[0].
                    for(i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                    round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }
                return q;
            };
        }();
        /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */ function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;
            if (i == null) {
                str = coeffToString(n.c);
                str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
            } else {
                n = round(new BigNumber(n), i, rm);
                // n.e may have changed if the value was rounded up.
                e = n.e;
                str = coeffToString(n.c);
                len = str.length;
                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.
                // Exponential notation.
                if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                    // Append zeros?
                    for(; len < i; str += "0", len++);
                    str = toExponential(str, e);
                // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint(str, e, "0");
                    // Append zeros?
                    if (e + 1 > len) {
                        if (--i > 0) for(str += "."; i--; str += "0");
                    } else {
                        i += e - len;
                        if (i > 0) {
                            if (e + 1 == len) str += ".";
                            for(; i--; str += "0");
                        }
                    }
                }
            }
            return n.s < 0 && c0 ? "-" + str : str;
        }
        // Handle BigNumber.max and BigNumber.min.
        // If any number is NaN, return NaN.
        function maxOrMin(args, n) {
            var k, y, i = 1, x = new BigNumber(args[0]);
            for(; i < args.length; i++){
                y = new BigNumber(args[i]);
                if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) x = y;
            }
            return x;
        }
        /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */ function normalise(n, c, e) {
            var i = 1, j = c.length;
            // Remove trailing zeros.
            for(; !c[--j]; c.pop());
            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for(j = c[0]; j >= 10; j /= 10, i++);
            // Overflow?
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) // Infinity.
            n.c = n.e = null;
            else if (e < MIN_EXP) // Zero.
            n.c = [
                n.e = 0
            ];
            else {
                n.e = e;
                n.c = c;
            }
            return n;
        }
        // Handle values that fail the validity test in BigNumber.
        parseNumeric = function() {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(x, str, isNum, b) {
                var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
                // No exception on ±Infinity or NaN.
                if (isInfinityOrNaN.test(s)) x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                else {
                    if (!isNum) {
                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace(basePrefix, function(m, p1, p2) {
                            base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });
                        if (b) {
                            base = b;
                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                        }
                        if (str != s) return new BigNumber(s, base);
                    }
                    // '[BigNumber Error] Not a number: {n}'
                    // '[BigNumber Error] Not a base {b} number: {n}'
                    if (BigNumber.DEBUG) throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
                    // NaN
                    x.s = null;
                }
                x.c = x.e = null;
            };
        }();
        /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */ function round(x, sd, rm, r) {
            var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
            // if x is not Infinity or NaN...
            if (xc) {
                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {
                    // Get the number of digits of the first element of xc.
                    for(d = 1, k = xc[0]; k >= 10; k /= 10, d++);
                    i = sd - d;
                    // If the rounding digit is in the first element of xc...
                    if (i < 0) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ni = 0];
                        // Get the rounding digit at index j of n.
                        rd = mathfloor(n / pows10[d - j - 1] % 10);
                    } else {
                        ni = mathceil((i + 1) / LOG_BASE);
                        if (ni >= xc.length) {
                            if (r) {
                                // Needed by sqrt.
                                for(; xc.length <= ni; xc.push(0));
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else break out;
                        } else {
                            n = k = xc[ni];
                            // Get the number of digits of n.
                            for(d = 1; k >= 10; k /= 10, d++);
                            // Get the index of rd within n.
                            i %= LOG_BASE;
                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;
                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
                        }
                    }
                    r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                    r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                    if (sd < 1 || !xc[0]) {
                        xc.length = 0;
                        if (r) {
                            // Convert sd to decimal places.
                            sd -= x.e + 1;
                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                            x.e = -sd || 0;
                        } else // Zero.
                        xc[0] = x.e = 0;
                        return x;
                    }
                    // Remove excess digits.
                    if (i == 0) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[LOG_BASE - i];
                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                    }
                    // Round up?
                    if (r) {
                        for(;;)// If the digit to be rounded up is in the first element of xc...
                        if (ni == 0) {
                            // i will be the length of xc[0] before k is added.
                            for(i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                            j = xc[0] += k;
                            for(k = 1; j >= 10; j /= 10, k++);
                            // if i != k the length has increased.
                            if (i != k) {
                                x.e++;
                                if (xc[0] == BASE) xc[0] = 1;
                            }
                            break;
                        } else {
                            xc[ni] += k;
                            if (xc[ni] != BASE) break;
                            xc[ni--] = 0;
                            k = 1;
                        }
                    }
                    // Remove trailing zeros.
                    for(i = xc.length; xc[--i] === 0; xc.pop());
                }
                // Overflow? Infinity.
                if (x.e > MAX_EXP) x.c = x.e = null;
                else if (x.e < MIN_EXP) x.c = [
                    x.e = 0
                ];
            }
            return x;
        }
        function valueOf(n) {
            var str, e = n.e;
            if (e === null) return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
            return n.s < 0 ? "-" + str : str;
        }
        // PROTOTYPE/INSTANCE METHODS
        /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */ P.absoluteValue = P.abs = function() {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
        };
        /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */ P.comparedTo = function(y, b) {
            return compare(this, new BigNumber(y, b));
        };
        /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.decimalPlaces = P.dp = function(dp, rm) {
            var c, n, v, x = this;
            if (dp != null) {
                intCheck(dp, 0, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), dp + x.e + 1, rm);
            }
            if (!(c = x.c)) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
            // Subtract the number of trailing zeros of the last number.
            if (v = c[v]) for(; v % 10 == 0; v /= 10, n--);
            if (n < 0) n = 0;
            return n;
        };
        /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.dividedBy = P.div = function(y, b) {
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */ P.dividedToIntegerBy = P.idiv = function(y, b) {
            return div(this, new BigNumber(y, b), 0, 1);
        };
        /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */ P.exponentiatedBy = P.pow = function(n, m) {
            var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
            n = new BigNumber(n);
            // Allow NaN and ±Infinity, but not other non-integers.
            if (n.c && !n.isInteger()) throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
            if (m != null) m = new BigNumber(m);
            // Exponent of MAX_SAFE_INTEGER is 15.
            nIsBig = n.e > 14;
            // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
                // The sign of the result of pow when x is negative depends on the evenness of n.
                // If +n overflows to ±Infinity, the evenness of n would be not be known.
                y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
                return m ? y.mod(m) : y;
            }
            nIsNeg = n.s < 0;
            if (m) {
                // x % m returns NaN if abs(m) is zero, or m is NaN.
                if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
                isModExp = !nIsNeg && x.isInteger() && m.isInteger();
                if (isModExp) x = x.mod(m);
            // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
            // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
                // If x is negative and n is odd, k = -0, else k = 0.
                k = x.s < 0 && isOdd(n) ? -0 : 0;
                // If x >= 1, k = ±Infinity.
                if (x.e > -1) k = 1 / k;
                // If n is negative return ±0, else return ±Infinity.
                return new BigNumber(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
            if (nIsBig) {
                half = new BigNumber(0.5);
                if (nIsNeg) n.s = 1;
                nIsOdd = isOdd(n);
            } else {
                i = Math.abs(+valueOf(n));
                nIsOdd = i % 2;
            }
            y = new BigNumber(ONE);
            // Performs 54 loop iterations for n of 9007199254740991.
            for(;;){
                if (nIsOdd) {
                    y = y.times(x);
                    if (!y.c) break;
                    if (k) {
                        if (y.c.length > k) y.c.length = k;
                    } else if (isModExp) y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                }
                if (i) {
                    i = mathfloor(i / 2);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                } else {
                    n = n.times(half);
                    round(n, n.e + 1, 1);
                    if (n.e > 14) nIsOdd = isOdd(n);
                    else {
                        i = +valueOf(n);
                        if (i === 0) break;
                        nIsOdd = i % 2;
                    }
                }
                x = x.times(x);
                if (k) {
                    if (x.c && x.c.length > k) x.c.length = k;
                } else if (isModExp) x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
            if (isModExp) return y;
            if (nIsNeg) y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */ P.integerValue = function(rm) {
            var n = new BigNumber(this);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
        };
        /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isEqualTo = P.eq = function(y, b) {
            return compare(this, new BigNumber(y, b)) === 0;
        };
        /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */ P.isFinite = function() {
            return !!this.c;
        };
        /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isGreaterThan = P.gt = function(y, b) {
            return compare(this, new BigNumber(y, b)) > 0;
        };
        /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */ P.isInteger = function() {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isLessThan = P.lt = function(y, b) {
            return compare(this, new BigNumber(y, b)) < 0;
        };
        /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isLessThanOrEqualTo = P.lte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */ P.isNaN = function() {
            return !this.s;
        };
        /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */ P.isNegative = function() {
            return this.s < 0;
        };
        /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */ P.isPositive = function() {
            return this.s > 0;
        };
        /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */ P.isZero = function() {
            return !!this.c && this.c[0] == 0;
        };
        /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */ P.minus = function(y, b) {
            var i, j, t, xLTy, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.plus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Either Infinity?
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
                // Either zero?
                if (!xc[0] || !yc[0]) // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Determine which is the bigger number.
            if (a = xe - ye) {
                if (xLTy = a < 0) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }
                t.reverse();
                // Prepend zeros to equalise exponents.
                for(b = a; b--; t.push(0));
                t.reverse();
            } else {
                // Exponents equal. Check digit by digit.
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                for(a = b = 0; b < j; b++)if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
            // x < y? Point xc to the array of the bigger number.
            if (xLTy) {
                t = xc;
                xc = yc;
                yc = t;
                y.s = -y.s;
            }
            b = (j = yc.length) - (i = xc.length);
            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if (b > 0) for(; b--; xc[i++] = 0);
            b = BASE - 1;
            // Subtract yc from xc.
            for(; j > a;){
                if (xc[--j] < yc[j]) {
                    for(i = j; i && !xc[--i]; xc[i] = b);
                    --xc[i];
                    xc[j] += BASE;
                }
                xc[j] -= yc[j];
            }
            // Remove leading zeros and adjust exponent accordingly.
            for(; xc[0] == 0; xc.splice(0, 1), --ye);
            // Zero?
            if (!xc[0]) {
                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [
                    y.e = 0
                ];
                return y;
            }
            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise(y, xc, ye);
        };
        /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */ P.modulo = P.mod = function(y, b) {
            var q, s, x = this;
            y = new BigNumber(y, b);
            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if (!x.c || !y.s || y.c && !y.c[0]) return new BigNumber(NaN);
            else if (!y.c || x.c && !x.c[0]) return new BigNumber(x);
            if (MODULO_MODE == 9) {
                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
            } else q = div(x, y, 0, MODULO_MODE);
            y = x.minus(q.times(y));
            // To match JavaScript %, ensure sign of zero is sign of dividend.
            if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
            return y;
        };
        /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */ P.multipliedBy = P.times = function(y, b) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
            // Either NaN, ±Infinity or ±0?
            if (!xc || !yc || !xc[0] || !yc[0]) {
                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) y.c = y.e = y.s = null;
                else {
                    y.s *= x.s;
                    // Return ±Infinity if either is ±Infinity.
                    if (!xc || !yc) y.c = y.e = null;
                    else {
                        y.c = [
                            0
                        ];
                        y.e = 0;
                    }
                }
                return y;
            }
            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;
            // Ensure xc points to longer array and xcL to its length.
            if (xcL < ycL) {
                zc = xc;
                xc = yc;
                yc = zc;
                i = xcL;
                xcL = ycL;
                ycL = i;
            }
            // Initialise the result array with zeros.
            for(i = xcL + ycL, zc = []; i--; zc.push(0));
            base = BASE;
            sqrtBase = SQRT_BASE;
            for(i = ycL; --i >= 0;){
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;
                for(k = xcL, j = i + k; j > i;){
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                    c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                    zc[j--] = xlo % base;
                }
                zc[j] = c;
            }
            if (c) ++e;
            else zc.splice(0, 1);
            return normalise(y, zc, e);
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */ P.negated = function() {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };
        /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */ P.plus = function(y, b) {
            var t, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.minus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Return ±Infinity if either ±Infinity.
                if (!xc || !yc) return new BigNumber(a / 0);
                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if (a = xe - ye) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }
                t.reverse();
                for(; a--; t.push(0));
                t.reverse();
            }
            a = xc.length;
            b = yc.length;
            // Point xc to the longer array, and b to the shorter length.
            if (a - b < 0) {
                t = yc;
                yc = xc;
                xc = t;
                b = a;
            }
            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for(a = 0; b;){
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }
            if (a) {
                xc = [
                    a
                ].concat(xc);
                ++ye;
            }
            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise(y, xc, ye);
        };
        /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.precision = P.sd = function(sd, rm) {
            var c, n, v, x = this;
            if (sd != null && sd !== !!sd) {
                intCheck(sd, 1, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), sd, rm);
            }
            if (!(c = x.c)) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;
            if (v = c[v]) {
                // Subtract the number of trailing zeros of the last element.
                for(; v % 10 == 0; v /= 10, n--);
                // Add the number of digits of the first element.
                for(v = c[0]; v >= 10; v /= 10, n++);
            }
            if (sd && x.e + 1 > n) n = x.e + 1;
            return n;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */ P.shiftedBy = function(k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times("1e" + k);
        };
        /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.squareRoot = P.sqrt = function() {
            var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber("0.5");
            // Negative/NaN/Infinity/zero?
            if (s !== 1 || !c || !c[0]) return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            // Initial estimate.
            s = Math.sqrt(+valueOf(x));
            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += "0";
                s = Math.sqrt(+n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                if (s == 1 / 0) n = "5e" + e;
                else {
                    n = s.toExponential();
                    n = n.slice(0, n.indexOf("e") + 1) + e;
                }
                r = new BigNumber(n);
            } else r = new BigNumber(s + "");
            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;
                // Newton-Raphson iteration.
                for(;;){
                    t = r;
                    r = half.times(t.plus(div(x, t, dp, 1)));
                    if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if (r.e < e) --s;
                        n = n.slice(s - 3, s + 1);
                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if (n == "9999" || !rep && n == "4999") {
                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if (!rep) {
                                round(t, t.e + DECIMAL_PLACES + 2, 0);
                                if (t.times(t).eq(x)) {
                                    r = t;
                                    break;
                                }
                            }
                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {
                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                                // Truncate to the first rounding digit.
                                round(r, r.e + DECIMAL_PLACES + 2, 1);
                                m = !r.times(r).eq(x);
                            }
                            break;
                        }
                    }
                }
            }
            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toExponential = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp++;
            }
            return format(this, dp, rm, 1);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toFixed = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp = dp + this.e + 1;
            }
            return format(this, dp, rm);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */ P.toFormat = function(dp, rm, format) {
            var str, x = this;
            if (format == null) {
                if (dp != null && rm && typeof rm == "object") {
                    format = rm;
                    rm = null;
                } else if (dp && typeof dp == "object") {
                    format = dp;
                    dp = rm = null;
                } else format = FORMAT;
            } else if (typeof format != "object") throw Error(bignumberError + "Argument not an object: " + format);
            str = x.toFixed(dp, rm);
            if (x.c) {
                var i, arr = str.split("."), g1 = +format.groupSize, g2 = +format.secondaryGroupSize, groupSeparator = format.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
                if (g2) {
                    i = g1;
                    g1 = g2;
                    g2 = i;
                    len -= i;
                }
                if (g1 > 0 && len > 0) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr(0, i);
                    for(; i < len; i += g1)intPart += groupSeparator + intDigits.substr(i, g1);
                    if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = "-" + intPart;
                }
                str = fractionPart ? intPart + (format.decimalSeparator || "") + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format.fractionGroupSeparator || "")) : fractionPart) : intPart;
            }
            return (format.prefix || "") + str + (format.suffix || "");
        };
        /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */ P.toFraction = function(md) {
            var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
            if (md != null) {
                n = new BigNumber(md);
                // Throw if md is less than one or is not an integer, unless it is Infinity.
                if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
            }
            if (!xc) return new BigNumber(x);
            d = new BigNumber(ONE);
            n1 = d0 = new BigNumber(ONE);
            d1 = n0 = new BigNumber(ONE);
            s = coeffToString(xc);
            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);
            // n0 = d1 = 0
            n0.c[0] = 0;
            for(;;){
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.comparedTo(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
            }
            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2;
            // Determine which fraction is closer to x, n0/d0 or n1/d1
            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [
                n1,
                d1
            ] : [
                n0,
                d0
            ];
            MAX_EXP = exp;
            return r;
        };
        /*
     * Return the value of this BigNumber converted to a number primitive.
     */ P.toNumber = function() {
            return +valueOf(this);
        };
        /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.toPrecision = function(sd, rm) {
            if (sd != null) intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
        };
        /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */ P.toString = function(b) {
            var str, n = this, s = n.s, e = n.e;
            // Infinity or NaN?
            if (e === null) {
                if (s) {
                    str = "Infinity";
                    if (s < 0) str = "-" + str;
                } else str = "NaN";
            } else {
                if (b == null) str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
                else if (b === 10 && alphabetHasNormalDecimalDigits) {
                    n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                    str = toFixedPoint(coeffToString(n.c), n.e, "0");
                } else {
                    intCheck(b, 2, ALPHABET.length, "Base");
                    str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
                }
                if (s < 0 && n.c[0]) str = "-" + str;
            }
            return str;
        };
        /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */ P.valueOf = P.toJSON = function() {
            return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null) BigNumber.set(configObject);
        return BigNumber;
    }
    // PRIVATE HELPER FUNCTIONS
    // These functions don't need access to variables,
    // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }
    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + "";
        for(; i < j;){
            s = a[i++] + "";
            z = LOG_BASE - s.length;
            for(; z--; s = "0" + s);
            r += s;
        }
        // Determine trailing zeros.
        for(j = r.length; r.charCodeAt(--j) === 48;);
        return r.slice(0, j + 1 || 1);
    }
    // Compare the value of BigNumbers x and y.
    function compare(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        // Either NaN?
        if (!i || !j) return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;
        // Signs differ?
        if (i != j) return i;
        a = i < 0;
        b = k == l;
        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        // Compare digit by digit.
        for(i = 0; i < j; i++)if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */ function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
    }
    // Assumes finite n.
    function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
    }
    function toFixedPoint(str, e, z) {
        var len, zs;
        // Negative exponent?
        if (e < 0) {
            // Prepend zeros.
            for(zs = z + "."; ++e; zs += z);
            str = zs + str;
        // Positive exponent
        } else {
            len = str.length;
            // Append zeros.
            if (++e > len) {
                for(zs = z, e -= len; --e; zs += z);
                str += zs;
            } else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
        }
        return str;
    }
    // EXPORT
    BigNumber = clone();
    BigNumber["default"] = BigNumber.BigNumber = BigNumber;
    // AMD.
    if (typeof define == "function" && define.amd) define(function() {
        return BigNumber;
    });
    else if (0, module.exports) module.exports = BigNumber;
    else {
        if (!globalObject) globalObject = typeof self != "undefined" && self ? self : window;
        globalObject.BigNumber = BigNumber;
    }
})(this);

},{}],"4fW0d":[function(require,module,exports) {
/* eslint-disable */ module.exports = function decodeAsm(stdlib, foreign, buffer) {
    "use asm";
    // -- Imports
    var heap = new stdlib.Uint8Array(buffer);
    // var log = foreign.log
    var pushInt = foreign.pushInt;
    var pushInt32 = foreign.pushInt32;
    var pushInt32Neg = foreign.pushInt32Neg;
    var pushInt64 = foreign.pushInt64;
    var pushInt64Neg = foreign.pushInt64Neg;
    var pushFloat = foreign.pushFloat;
    var pushFloatSingle = foreign.pushFloatSingle;
    var pushFloatDouble = foreign.pushFloatDouble;
    var pushTrue = foreign.pushTrue;
    var pushFalse = foreign.pushFalse;
    var pushUndefined = foreign.pushUndefined;
    var pushNull = foreign.pushNull;
    var pushInfinity = foreign.pushInfinity;
    var pushInfinityNeg = foreign.pushInfinityNeg;
    var pushNaN = foreign.pushNaN;
    var pushNaNNeg = foreign.pushNaNNeg;
    var pushArrayStart = foreign.pushArrayStart;
    var pushArrayStartFixed = foreign.pushArrayStartFixed;
    var pushArrayStartFixed32 = foreign.pushArrayStartFixed32;
    var pushArrayStartFixed64 = foreign.pushArrayStartFixed64;
    var pushObjectStart = foreign.pushObjectStart;
    var pushObjectStartFixed = foreign.pushObjectStartFixed;
    var pushObjectStartFixed32 = foreign.pushObjectStartFixed32;
    var pushObjectStartFixed64 = foreign.pushObjectStartFixed64;
    var pushByteString = foreign.pushByteString;
    var pushByteStringStart = foreign.pushByteStringStart;
    var pushUtf8String = foreign.pushUtf8String;
    var pushUtf8StringStart = foreign.pushUtf8StringStart;
    var pushSimpleUnassigned = foreign.pushSimpleUnassigned;
    var pushTagStart = foreign.pushTagStart;
    var pushTagStart4 = foreign.pushTagStart4;
    var pushTagStart8 = foreign.pushTagStart8;
    var pushTagUnassigned = foreign.pushTagUnassigned;
    var pushBreak = foreign.pushBreak;
    var pow = stdlib.Math.pow;
    // -- Constants
    // -- Mutable Variables
    var offset = 0;
    var inputLength = 0;
    var code = 0;
    // Decode a cbor string represented as Uint8Array
    // which is allocated on the heap from 0 to inputLength
    //
    // input - Int
    //
    // Returns Code - Int,
    // Success = 0
    // Error > 0
    function parse(input) {
        input = input | 0;
        offset = 0;
        inputLength = input;
        while((offset | 0) < (inputLength | 0)){
            code = jumpTable[heap[offset] & 255](heap[offset] | 0) | 0;
            if ((code | 0) > 0) break;
        }
        return code | 0;
    }
    // -- Helper Function
    function checkOffset(n) {
        n = n | 0;
        if (((offset | 0) + (n | 0) | 0) < (inputLength | 0)) return 0;
        return 1;
    }
    function readUInt16(n) {
        n = n | 0;
        return heap[n | 0] << 8 | heap[n + 1 | 0] | 0;
    }
    function readUInt32(n) {
        n = n | 0;
        return heap[n | 0] << 24 | heap[n + 1 | 0] << 16 | heap[n + 2 | 0] << 8 | heap[n + 3 | 0] | 0;
    }
    // -- Initial Byte Handlers
    function INT_P(octet) {
        octet = octet | 0;
        pushInt(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function UINT_P_8(octet) {
        octet = octet | 0;
        if (checkOffset(1) | 0) return 1;
        pushInt(heap[offset + 1 | 0] | 0);
        offset = offset + 2 | 0;
        return 0;
    }
    function UINT_P_16(octet) {
        octet = octet | 0;
        if (checkOffset(2) | 0) return 1;
        pushInt(readUInt16(offset + 1 | 0) | 0);
        offset = offset + 3 | 0;
        return 0;
    }
    function UINT_P_32(octet) {
        octet = octet | 0;
        if (checkOffset(4) | 0) return 1;
        pushInt32(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0);
        offset = offset + 5 | 0;
        return 0;
    }
    function UINT_P_64(octet) {
        octet = octet | 0;
        if (checkOffset(8) | 0) return 1;
        pushInt64(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0, readUInt16(offset + 5 | 0) | 0, readUInt16(offset + 7 | 0) | 0);
        offset = offset + 9 | 0;
        return 0;
    }
    function INT_N(octet) {
        octet = octet | 0;
        pushInt(-1 - (octet - 32 | 0) | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function UINT_N_8(octet) {
        octet = octet | 0;
        if (checkOffset(1) | 0) return 1;
        pushInt(-1 - (heap[offset + 1 | 0] | 0) | 0);
        offset = offset + 2 | 0;
        return 0;
    }
    function UINT_N_16(octet) {
        octet = octet | 0;
        var val = 0;
        if (checkOffset(2) | 0) return 1;
        val = readUInt16(offset + 1 | 0) | 0;
        pushInt(-1 - (val | 0) | 0);
        offset = offset + 3 | 0;
        return 0;
    }
    function UINT_N_32(octet) {
        octet = octet | 0;
        if (checkOffset(4) | 0) return 1;
        pushInt32Neg(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0);
        offset = offset + 5 | 0;
        return 0;
    }
    function UINT_N_64(octet) {
        octet = octet | 0;
        if (checkOffset(8) | 0) return 1;
        pushInt64Neg(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0, readUInt16(offset + 5 | 0) | 0, readUInt16(offset + 7 | 0) | 0);
        offset = offset + 9 | 0;
        return 0;
    }
    function BYTE_STRING(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var step = 0;
        step = octet - 64 | 0;
        if (checkOffset(step | 0) | 0) return 1;
        start = offset + 1 | 0;
        end = (offset + 1 | 0) + (step | 0) | 0;
        pushByteString(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function BYTE_STRING_8(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var length = 0;
        if (checkOffset(1) | 0) return 1;
        length = heap[offset + 1 | 0] | 0;
        start = offset + 2 | 0;
        end = (offset + 2 | 0) + (length | 0) | 0;
        if (checkOffset(length + 1 | 0) | 0) return 1;
        pushByteString(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function BYTE_STRING_16(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var length = 0;
        if (checkOffset(2) | 0) return 1;
        length = readUInt16(offset + 1 | 0) | 0;
        start = offset + 3 | 0;
        end = (offset + 3 | 0) + (length | 0) | 0;
        if (checkOffset(length + 2 | 0) | 0) return 1;
        pushByteString(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function BYTE_STRING_32(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var length = 0;
        if (checkOffset(4) | 0) return 1;
        length = readUInt32(offset + 1 | 0) | 0;
        start = offset + 5 | 0;
        end = (offset + 5 | 0) + (length | 0) | 0;
        if (checkOffset(length + 4 | 0) | 0) return 1;
        pushByteString(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function BYTE_STRING_64(octet) {
        // NOT IMPLEMENTED
        octet = octet | 0;
        return 1;
    }
    function BYTE_STRING_BREAK(octet) {
        octet = octet | 0;
        pushByteStringStart();
        offset = offset + 1 | 0;
        return 0;
    }
    function UTF8_STRING(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var step = 0;
        step = octet - 96 | 0;
        if (checkOffset(step | 0) | 0) return 1;
        start = offset + 1 | 0;
        end = (offset + 1 | 0) + (step | 0) | 0;
        pushUtf8String(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function UTF8_STRING_8(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var length = 0;
        if (checkOffset(1) | 0) return 1;
        length = heap[offset + 1 | 0] | 0;
        start = offset + 2 | 0;
        end = (offset + 2 | 0) + (length | 0) | 0;
        if (checkOffset(length + 1 | 0) | 0) return 1;
        pushUtf8String(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function UTF8_STRING_16(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var length = 0;
        if (checkOffset(2) | 0) return 1;
        length = readUInt16(offset + 1 | 0) | 0;
        start = offset + 3 | 0;
        end = (offset + 3 | 0) + (length | 0) | 0;
        if (checkOffset(length + 2 | 0) | 0) return 1;
        pushUtf8String(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function UTF8_STRING_32(octet) {
        octet = octet | 0;
        var start = 0;
        var end = 0;
        var length = 0;
        if (checkOffset(4) | 0) return 1;
        length = readUInt32(offset + 1 | 0) | 0;
        start = offset + 5 | 0;
        end = (offset + 5 | 0) + (length | 0) | 0;
        if (checkOffset(length + 4 | 0) | 0) return 1;
        pushUtf8String(start | 0, end | 0);
        offset = end | 0;
        return 0;
    }
    function UTF8_STRING_64(octet) {
        // NOT IMPLEMENTED
        octet = octet | 0;
        return 1;
    }
    function UTF8_STRING_BREAK(octet) {
        octet = octet | 0;
        pushUtf8StringStart();
        offset = offset + 1 | 0;
        return 0;
    }
    function ARRAY(octet) {
        octet = octet | 0;
        pushArrayStartFixed(octet - 128 | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function ARRAY_8(octet) {
        octet = octet | 0;
        if (checkOffset(1) | 0) return 1;
        pushArrayStartFixed(heap[offset + 1 | 0] | 0);
        offset = offset + 2 | 0;
        return 0;
    }
    function ARRAY_16(octet) {
        octet = octet | 0;
        if (checkOffset(2) | 0) return 1;
        pushArrayStartFixed(readUInt16(offset + 1 | 0) | 0);
        offset = offset + 3 | 0;
        return 0;
    }
    function ARRAY_32(octet) {
        octet = octet | 0;
        if (checkOffset(4) | 0) return 1;
        pushArrayStartFixed32(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0);
        offset = offset + 5 | 0;
        return 0;
    }
    function ARRAY_64(octet) {
        octet = octet | 0;
        if (checkOffset(8) | 0) return 1;
        pushArrayStartFixed64(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0, readUInt16(offset + 5 | 0) | 0, readUInt16(offset + 7 | 0) | 0);
        offset = offset + 9 | 0;
        return 0;
    }
    function ARRAY_BREAK(octet) {
        octet = octet | 0;
        pushArrayStart();
        offset = offset + 1 | 0;
        return 0;
    }
    function MAP(octet) {
        octet = octet | 0;
        var step = 0;
        step = octet - 160 | 0;
        if (checkOffset(step | 0) | 0) return 1;
        pushObjectStartFixed(step | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function MAP_8(octet) {
        octet = octet | 0;
        if (checkOffset(1) | 0) return 1;
        pushObjectStartFixed(heap[offset + 1 | 0] | 0);
        offset = offset + 2 | 0;
        return 0;
    }
    function MAP_16(octet) {
        octet = octet | 0;
        if (checkOffset(2) | 0) return 1;
        pushObjectStartFixed(readUInt16(offset + 1 | 0) | 0);
        offset = offset + 3 | 0;
        return 0;
    }
    function MAP_32(octet) {
        octet = octet | 0;
        if (checkOffset(4) | 0) return 1;
        pushObjectStartFixed32(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0);
        offset = offset + 5 | 0;
        return 0;
    }
    function MAP_64(octet) {
        octet = octet | 0;
        if (checkOffset(8) | 0) return 1;
        pushObjectStartFixed64(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0, readUInt16(offset + 5 | 0) | 0, readUInt16(offset + 7 | 0) | 0);
        offset = offset + 9 | 0;
        return 0;
    }
    function MAP_BREAK(octet) {
        octet = octet | 0;
        pushObjectStart();
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_KNOWN(octet) {
        octet = octet | 0;
        pushTagStart(octet - 192 | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_BIGNUM_POS(octet) {
        octet = octet | 0;
        pushTagStart(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_BIGNUM_NEG(octet) {
        octet = octet | 0;
        pushTagStart(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_FRAC(octet) {
        octet = octet | 0;
        pushTagStart(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_BIGNUM_FLOAT(octet) {
        octet = octet | 0;
        pushTagStart(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_UNASSIGNED(octet) {
        octet = octet | 0;
        pushTagStart(octet - 192 | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_BASE64_URL(octet) {
        octet = octet | 0;
        pushTagStart(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_BASE64(octet) {
        octet = octet | 0;
        pushTagStart(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_BASE16(octet) {
        octet = octet | 0;
        pushTagStart(octet | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function TAG_MORE_1(octet) {
        octet = octet | 0;
        if (checkOffset(1) | 0) return 1;
        pushTagStart(heap[offset + 1 | 0] | 0);
        offset = offset + 2 | 0;
        return 0;
    }
    function TAG_MORE_2(octet) {
        octet = octet | 0;
        if (checkOffset(2) | 0) return 1;
        pushTagStart(readUInt16(offset + 1 | 0) | 0);
        offset = offset + 3 | 0;
        return 0;
    }
    function TAG_MORE_4(octet) {
        octet = octet | 0;
        if (checkOffset(4) | 0) return 1;
        pushTagStart4(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0);
        offset = offset + 5 | 0;
        return 0;
    }
    function TAG_MORE_8(octet) {
        octet = octet | 0;
        if (checkOffset(8) | 0) return 1;
        pushTagStart8(readUInt16(offset + 1 | 0) | 0, readUInt16(offset + 3 | 0) | 0, readUInt16(offset + 5 | 0) | 0, readUInt16(offset + 7 | 0) | 0);
        offset = offset + 9 | 0;
        return 0;
    }
    function SIMPLE_UNASSIGNED(octet) {
        octet = octet | 0;
        pushSimpleUnassigned((octet | 0) - 224 | 0);
        offset = offset + 1 | 0;
        return 0;
    }
    function SIMPLE_FALSE(octet) {
        octet = octet | 0;
        pushFalse();
        offset = offset + 1 | 0;
        return 0;
    }
    function SIMPLE_TRUE(octet) {
        octet = octet | 0;
        pushTrue();
        offset = offset + 1 | 0;
        return 0;
    }
    function SIMPLE_NULL(octet) {
        octet = octet | 0;
        pushNull();
        offset = offset + 1 | 0;
        return 0;
    }
    function SIMPLE_UNDEFINED(octet) {
        octet = octet | 0;
        pushUndefined();
        offset = offset + 1 | 0;
        return 0;
    }
    function SIMPLE_BYTE(octet) {
        octet = octet | 0;
        if (checkOffset(1) | 0) return 1;
        pushSimpleUnassigned(heap[offset + 1 | 0] | 0);
        offset = offset + 2 | 0;
        return 0;
    }
    function SIMPLE_FLOAT_HALF(octet) {
        octet = octet | 0;
        var f = 0;
        var g = 0;
        var sign = 1.0;
        var exp = 0.0;
        var mant = 0.0;
        var r = 0.0;
        if (checkOffset(2) | 0) return 1;
        f = heap[offset + 1 | 0] | 0;
        g = heap[offset + 2 | 0] | 0;
        if ((f | 0) & 0x80) sign = -1;
        exp = +(((f | 0) & 0x7C) >> 2);
        mant = +(((f | 0) & 0x03) << 8 | g);
        if (+exp == 0.0) pushFloat(+(+sign * 0.00000005960464477539063 * +mant));
        else if (+exp == 31.0) {
            if (+sign == 1.0) {
                if (+mant > 0.0) pushNaN();
                else pushInfinity();
            } else if (+mant > 0.0) pushNaNNeg();
            else pushInfinityNeg();
        } else pushFloat(+(+sign * pow(2, +(+exp - 25.0)) * +(1024.0 + mant)));
        offset = offset + 3 | 0;
        return 0;
    }
    function SIMPLE_FLOAT_SINGLE(octet) {
        octet = octet | 0;
        if (checkOffset(4) | 0) return 1;
        pushFloatSingle(heap[offset + 1 | 0] | 0, heap[offset + 2 | 0] | 0, heap[offset + 3 | 0] | 0, heap[offset + 4 | 0] | 0);
        offset = offset + 5 | 0;
        return 0;
    }
    function SIMPLE_FLOAT_DOUBLE(octet) {
        octet = octet | 0;
        if (checkOffset(8) | 0) return 1;
        pushFloatDouble(heap[offset + 1 | 0] | 0, heap[offset + 2 | 0] | 0, heap[offset + 3 | 0] | 0, heap[offset + 4 | 0] | 0, heap[offset + 5 | 0] | 0, heap[offset + 6 | 0] | 0, heap[offset + 7 | 0] | 0, heap[offset + 8 | 0] | 0);
        offset = offset + 9 | 0;
        return 0;
    }
    function ERROR(octet) {
        octet = octet | 0;
        return 1;
    }
    function BREAK(octet) {
        octet = octet | 0;
        pushBreak();
        offset = offset + 1 | 0;
        return 0;
    }
    // -- Jump Table
    var jumpTable = [
        // Integer 0x00..0x17 (0..23)
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        INT_P,
        // Unsigned integer (one-byte uint8_t follows)
        UINT_P_8,
        // Unsigned integer (two-byte uint16_t follows)
        UINT_P_16,
        // Unsigned integer (four-byte uint32_t follows)
        UINT_P_32,
        // Unsigned integer (eight-byte uint64_t follows)
        UINT_P_64,
        ERROR,
        ERROR,
        ERROR,
        ERROR,
        // Negative integer -1-0x00..-1-0x17 (-1..-24)
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        INT_N,
        // Negative integer -1-n (one-byte uint8_t for n follows)
        UINT_N_8,
        // Negative integer -1-n (two-byte uint16_t for n follows)
        UINT_N_16,
        // Negative integer -1-n (four-byte uint32_t for nfollows)
        UINT_N_32,
        // Negative integer -1-n (eight-byte uint64_t for n follows)
        UINT_N_64,
        ERROR,
        ERROR,
        ERROR,
        ERROR,
        // byte string (0x00..0x17 bytes follow)
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        BYTE_STRING,
        // byte string (one-byte uint8_t for n, and then n bytes follow)
        BYTE_STRING_8,
        // byte string (two-byte uint16_t for n, and then n bytes follow)
        BYTE_STRING_16,
        // byte string (four-byte uint32_t for n, and then n bytes follow)
        BYTE_STRING_32,
        // byte string (eight-byte uint64_t for n, and then n bytes follow)
        BYTE_STRING_64,
        ERROR,
        ERROR,
        ERROR,
        // byte string, byte strings follow, terminated by "break"
        BYTE_STRING_BREAK,
        // UTF-8 string (0x00..0x17 bytes follow)
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        UTF8_STRING,
        // UTF-8 string (one-byte uint8_t for n, and then n bytes follow)
        UTF8_STRING_8,
        // UTF-8 string (two-byte uint16_t for n, and then n bytes follow)
        UTF8_STRING_16,
        // UTF-8 string (four-byte uint32_t for n, and then n bytes follow)
        UTF8_STRING_32,
        // UTF-8 string (eight-byte uint64_t for n, and then n bytes follow)
        UTF8_STRING_64,
        // UTF-8 string, UTF-8 strings follow, terminated by "break"
        ERROR,
        ERROR,
        ERROR,
        UTF8_STRING_BREAK,
        // array (0x00..0x17 data items follow)
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        ARRAY,
        // array (one-byte uint8_t fo, and then n data items follow)
        ARRAY_8,
        // array (two-byte uint16_t for n, and then n data items follow)
        ARRAY_16,
        // array (four-byte uint32_t for n, and then n data items follow)
        ARRAY_32,
        // array (eight-byte uint64_t for n, and then n data items follow)
        ARRAY_64,
        // array, data items follow, terminated by "break"
        ERROR,
        ERROR,
        ERROR,
        ARRAY_BREAK,
        // map (0x00..0x17 pairs of data items follow)
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        MAP,
        // map (one-byte uint8_t for n, and then n pairs of data items follow)
        MAP_8,
        // map (two-byte uint16_t for n, and then n pairs of data items follow)
        MAP_16,
        // map (four-byte uint32_t for n, and then n pairs of data items follow)
        MAP_32,
        // map (eight-byte uint64_t for n, and then n pairs of data items follow)
        MAP_64,
        ERROR,
        ERROR,
        ERROR,
        // map, pairs of data items follow, terminated by "break"
        MAP_BREAK,
        // Text-based date/time (data item follows; see Section 2.4.1)
        TAG_KNOWN,
        // Epoch-based date/time (data item follows; see Section 2.4.1)
        TAG_KNOWN,
        // Positive bignum (data item "byte string" follows)
        TAG_KNOWN,
        // Negative bignum (data item "byte string" follows)
        TAG_KNOWN,
        // Decimal Fraction (data item "array" follows; see Section 2.4.3)
        TAG_KNOWN,
        // Bigfloat (data item "array" follows; see Section 2.4.3)
        TAG_KNOWN,
        // (tagged item)
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        // Expected Conversion (data item follows; see Section 2.4.4.2)
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        TAG_UNASSIGNED,
        // (more tagged items, 1/2/4/8 bytes and then a data item follow)
        TAG_MORE_1,
        TAG_MORE_2,
        TAG_MORE_4,
        TAG_MORE_8,
        ERROR,
        ERROR,
        ERROR,
        ERROR,
        // (simple value)
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        SIMPLE_UNASSIGNED,
        // False
        SIMPLE_FALSE,
        // True
        SIMPLE_TRUE,
        // Null
        SIMPLE_NULL,
        // Undefined
        SIMPLE_UNDEFINED,
        // (simple value, one byte follows)
        SIMPLE_BYTE,
        // Half-Precision Float (two-byte IEEE 754)
        SIMPLE_FLOAT_HALF,
        // Single-Precision Float (four-byte IEEE 754)
        SIMPLE_FLOAT_SINGLE,
        // Double-Precision Float (eight-byte IEEE 754)
        SIMPLE_FLOAT_DOUBLE,
        ERROR,
        ERROR,
        ERROR,
        // "break" stop code
        BREAK // 0xff
    ];
    // --
    return {
        parse: parse
    };
};

},{}],"bZwHE":[function(require,module,exports) {
"use strict";
const { Buffer } = require("7a27d1ccd4a75acf");
const Bignumber = require("8093a4177b6a178e").BigNumber;
const constants = require("d8c6c5f5b0f63167");
const SHIFT32 = constants.SHIFT32;
const SHIFT16 = constants.SHIFT16;
const MAX_SAFE_HIGH = 0x1fffff;
exports.parseHalf = function parseHalf(buf) {
    var exp, mant, sign;
    sign = buf[0] & 0x80 ? -1 : 1;
    exp = (buf[0] & 0x7C) >> 2;
    mant = (buf[0] & 0x03) << 8 | buf[1];
    if (!exp) return sign * 5.9604644775390625e-8 * mant;
    else if (exp === 0x1f) return sign * (mant ? 0 / 0 : Infinity);
    else return sign * Math.pow(2, exp - 25) * (1024 + mant);
};
function toHex(n) {
    if (n < 16) return "0" + n.toString(16);
    return n.toString(16);
}
exports.arrayBufferToBignumber = function(buf) {
    const len = buf.byteLength;
    let res = "";
    for(let i = 0; i < len; i++)res += toHex(buf[i]);
    return new Bignumber(res, 16);
};
// convert an Object into a Map
exports.buildMap = (obj)=>{
    const res = new Map();
    const keys = Object.keys(obj);
    const length = keys.length;
    for(let i = 0; i < length; i++)res.set(keys[i], obj[keys[i]]);
    return res;
};
exports.buildInt32 = (f, g)=>{
    return f * SHIFT16 + g;
};
exports.buildInt64 = (f1, f2, g1, g2)=>{
    const f = exports.buildInt32(f1, f2);
    const g = exports.buildInt32(g1, g2);
    if (f > MAX_SAFE_HIGH) return new Bignumber(f).times(SHIFT32).plus(g);
    else return f * SHIFT32 + g;
};
exports.writeHalf = function writeHalf(buf, half) {
    // assume 0, -0, NaN, Infinity, and -Infinity have already been caught
    // HACK: everyone settle in.  This isn't going to be pretty.
    // Translate cn-cbor's C code (from Carsten Borman):
    // uint32_t be32;
    // uint16_t be16, u16;
    // union {
    //   float f;
    //   uint32_t u;
    // } u32;
    // u32.f = float_val;
    const u32 = Buffer.allocUnsafe(4);
    u32.writeFloatBE(half, 0);
    const u = u32.readUInt32BE(0);
    // if ((u32.u & 0x1FFF) == 0) { /* worth trying half */
    // hildjj: If the lower 13 bits are 0, we won't lose anything in the conversion
    if ((u & 0x1FFF) !== 0) return false;
    //   int s16 = (u32.u >> 16) & 0x8000;
    //   int exp = (u32.u >> 23) & 0xff;
    //   int mant = u32.u & 0x7fffff;
    var s16 = u >> 16 & 0x8000 // top bit is sign
    ;
    const exp = u >> 23 & 0xff // then 5 bits of exponent
    ;
    const mant = u & 0x7fffff;
    //   if (exp == 0 && mant == 0)
    //     ;              /* 0.0, -0.0 */
    // hildjj: zeros already handled.  Assert if you don't believe me.
    //   else if (exp >= 113 && exp <= 142) /* normalized */
    //     s16 += ((exp - 112) << 10) + (mant >> 13);
    if (exp >= 113 && exp <= 142) s16 += (exp - 112 << 10) + (mant >> 13);
    else if (exp >= 103 && exp < 113) {
        if (mant & (1 << 126 - exp) - 1) return false;
        s16 += mant + 0x800000 >> 126 - exp;
    //   } else if (exp == 255 && mant == 0) { /* Inf */
    //     s16 += 0x7c00;
    // hildjj: Infinity already handled
    //   } else
    //     goto float32;           /* loss of range */
    } else return false;
    //   ensure_writable(3);
    //   u16 = s16;
    //   be16 = hton16p((const uint8_t*)&u16);
    buf.writeUInt16BE(s16, 0);
    return true;
};
exports.keySorter = function(a, b) {
    var lenA = a[0].byteLength;
    var lenB = b[0].byteLength;
    if (lenA > lenB) return 1;
    if (lenB > lenA) return -1;
    return a[0].compare(b[0]);
};
// Adapted from http://www.2ality.com/2012/03/signedzero.html
exports.isNegativeZero = (x)=>{
    return x === 0 && 1 / x < 0;
};
exports.nextPowerOf2 = (n)=>{
    let count = 0;
    // First n in the below condition is for
    // the case where n is 0
    if (n && !(n & n - 1)) return n;
    while(n !== 0){
        n >>= 1;
        count += 1;
    }
    return 1 << count;
};

},{"7a27d1ccd4a75acf":"fCgem","8093a4177b6a178e":"57qkX","d8c6c5f5b0f63167":"3ENYL"}],"3ENYL":[function(require,module,exports) {
"use strict";
const Bignumber = require("f97974c1c89aee45").BigNumber;
exports.MT = {
    POS_INT: 0,
    NEG_INT: 1,
    BYTE_STRING: 2,
    UTF8_STRING: 3,
    ARRAY: 4,
    MAP: 5,
    TAG: 6,
    SIMPLE_FLOAT: 7
};
exports.TAG = {
    DATE_STRING: 0,
    DATE_EPOCH: 1,
    POS_BIGINT: 2,
    NEG_BIGINT: 3,
    DECIMAL_FRAC: 4,
    BIGFLOAT: 5,
    BASE64URL_EXPECTED: 21,
    BASE64_EXPECTED: 22,
    BASE16_EXPECTED: 23,
    CBOR: 24,
    URI: 32,
    BASE64URL: 33,
    BASE64: 34,
    REGEXP: 35,
    MIME: 36
};
exports.NUMBYTES = {
    ZERO: 0,
    ONE: 24,
    TWO: 25,
    FOUR: 26,
    EIGHT: 27,
    INDEFINITE: 31
};
exports.SIMPLE = {
    FALSE: 20,
    TRUE: 21,
    NULL: 22,
    UNDEFINED: 23
};
exports.SYMS = {
    NULL: Symbol("null"),
    UNDEFINED: Symbol("undef"),
    PARENT: Symbol("parent"),
    BREAK: Symbol("break"),
    STREAM: Symbol("stream")
};
exports.SHIFT32 = Math.pow(2, 32);
exports.SHIFT16 = Math.pow(2, 16);
exports.MAX_SAFE_HIGH = 0x1fffff;
exports.NEG_ONE = new Bignumber(-1);
exports.TEN = new Bignumber(10);
exports.TWO = new Bignumber(2);
exports.PARENT = {
    ARRAY: 0,
    OBJECT: 1,
    MAP: 2,
    TAG: 3,
    BYTE_STRING: 4,
    UTF8_STRING: 5
};

},{"f97974c1c89aee45":"57qkX"}],"11zST":[function(require,module,exports) {
"use strict";
const constants = require("b0ce6ab42bde2c3");
const MT = constants.MT;
const SIMPLE = constants.SIMPLE;
const SYMS = constants.SYMS;
/**
 * A CBOR Simple Value that does not map onto a known constant.
 */ class Simple {
    /**
   * Creates an instance of Simple.
   *
   * @param {integer} value - the simple value's integer value
   */ constructor(value){
        if (typeof value !== "number") throw new Error("Invalid Simple type: " + typeof value);
        if (value < 0 || value > 255 || (value | 0) !== value) throw new Error("value must be a small positive integer: " + value);
        this.value = value;
    }
    /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */ toString() {
        return "simple(" + this.value + ")";
    }
    /**
   * Debug string for simple value
   *
   * @returns {string} simple(value)
   */ inspect() {
        return "simple(" + this.value + ")";
    }
    /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */ encodeCBOR(gen) {
        return gen._pushInt(this.value, MT.SIMPLE_FLOAT);
    }
    /**
   * Is the given object a Simple?
   *
   * @param {any} obj - object to test
   * @returns {bool} - is it Simple?
   */ static isSimple(obj) {
        return obj instanceof Simple;
    }
    /**
   * Decode from the CBOR additional information into a JavaScript value.
   * If the CBOR item has no parent, return a "safe" symbol instead of
   * `null` or `undefined`, so that the value can be passed through a
   * stream in object mode.
   *
   * @param {Number} val - the CBOR additional info to convert
   * @param {bool} hasParent - Does the CBOR item have a parent?
   * @returns {(null|undefined|Boolean|Symbol)} - the decoded value
   */ static decode(val, hasParent) {
        if (hasParent == null) hasParent = true;
        switch(val){
            case SIMPLE.FALSE:
                return false;
            case SIMPLE.TRUE:
                return true;
            case SIMPLE.NULL:
                if (hasParent) return null;
                else return SYMS.NULL;
            case SIMPLE.UNDEFINED:
                if (hasParent) return undefined;
                else return SYMS.UNDEFINED;
            case -1:
                if (!hasParent) throw new Error("Invalid BREAK");
                return SYMS.BREAK;
            default:
                return new Simple(val);
        }
    }
}
module.exports = Simple;

},{"b0ce6ab42bde2c3":"3ENYL"}],"kiImd":[function(require,module,exports) {
"use strict";
/**
 * A CBOR tagged item, where the tag does not have semantics specified at the
 * moment, or those semantics threw an error during parsing. Typically this will
 * be an extension point you're not yet expecting.
 */ class Tagged {
    /**
   * Creates an instance of Tagged.
   *
   * @param {Number} tag - the number of the tag
   * @param {any} value - the value inside the tag
   * @param {Error} err - the error that was thrown parsing the tag, or null
   */ constructor(tag, value, err){
        this.tag = tag;
        this.value = value;
        this.err = err;
        if (typeof this.tag !== "number") throw new Error("Invalid tag type (" + typeof this.tag + ")");
        if (this.tag < 0 || (this.tag | 0) !== this.tag) throw new Error("Tag must be a positive integer: " + this.tag);
    }
    /**
   * Convert to a String
   *
   * @returns {String} string of the form '1(2)'
   */ toString() {
        return `${this.tag}(${JSON.stringify(this.value)})`;
    }
    /**
   * Push the simple value onto the CBOR stream
   *
   * @param {cbor.Encoder} gen The generator to push onto
   * @returns {number}
   */ encodeCBOR(gen) {
        gen._pushTag(this.tag);
        return gen.pushAny(this.value);
    }
    /**
   * If we have a converter for this type, do the conversion.  Some converters
   * are built-in.  Additional ones can be passed in.  If you want to remove
   * a built-in converter, pass a converter in whose value is 'null' instead
   * of a function.
   *
   * @param {Object} converters - keys in the object are a tag number, the value
   *   is a function that takes the decoded CBOR and returns a JavaScript value
   *   of the appropriate type.  Throw an exception in the function on errors.
   * @returns {any} - the converted item
   */ convert(converters) {
        var er, f;
        f = converters != null ? converters[this.tag] : undefined;
        if (typeof f !== "function") {
            f = Tagged["_tag" + this.tag];
            if (typeof f !== "function") return this;
        }
        try {
            return f.call(Tagged, this.value);
        } catch (error) {
            er = error;
            this.err = er;
            return this;
        }
    }
}
module.exports = Tagged;

},{}],"e9Sz0":[function(require,module,exports) {
"use strict";
const { URLWithLegacySupport, format, URLSearchParams, defaultBase } = require("f230d782dd12e4aa");
const relative = require("e6864e1198c1b340");
module.exports = {
    URL: URLWithLegacySupport,
    URLSearchParams,
    format,
    relative,
    defaultBase
};

},{"f230d782dd12e4aa":"jTIXj","e6864e1198c1b340":"5yCit"}],"jTIXj":[function(require,module,exports) {
"use strict";
const defaultBase = self.location ? self.location.protocol + "//" + self.location.host : "";
const URL = self.URL;
class URLWithLegacySupport {
    constructor(url = "", base = defaultBase){
        this.super = new URL(url, base);
        this.path = this.pathname + this.search;
        this.auth = this.username && this.password ? this.username + ":" + this.password : null;
        this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null;
    }
    get hash() {
        return this.super.hash;
    }
    get host() {
        return this.super.host;
    }
    get hostname() {
        return this.super.hostname;
    }
    get href() {
        return this.super.href;
    }
    get origin() {
        return this.super.origin;
    }
    get password() {
        return this.super.password;
    }
    get pathname() {
        return this.super.pathname;
    }
    get port() {
        return this.super.port;
    }
    get protocol() {
        return this.super.protocol;
    }
    get search() {
        return this.super.search;
    }
    get searchParams() {
        return this.super.searchParams;
    }
    get username() {
        return this.super.username;
    }
    set hash(hash) {
        this.super.hash = hash;
    }
    set host(host) {
        this.super.host = host;
    }
    set hostname(hostname) {
        this.super.hostname = hostname;
    }
    set href(href) {
        this.super.href = href;
    }
    set origin(origin) {
        this.super.origin = origin;
    }
    set password(password) {
        this.super.password = password;
    }
    set pathname(pathname) {
        this.super.pathname = pathname;
    }
    set port(port) {
        this.super.port = port;
    }
    set protocol(protocol) {
        this.super.protocol = protocol;
    }
    set search(search) {
        this.super.search = search;
    }
    set searchParams(searchParams) {
        this.super.searchParams = searchParams;
    }
    set username(username) {
        this.super.username = username;
    }
    createObjectURL(o) {
        return this.super.createObjectURL(o);
    }
    revokeObjectURL(o) {
        this.super.revokeObjectURL(o);
    }
    toJSON() {
        return this.super.toJSON();
    }
    toString() {
        return this.super.toString();
    }
    format() {
        return this.toString();
    }
}
function format(obj) {
    if (typeof obj === "string") {
        const url = new URL(obj);
        return url.toString();
    }
    if (!(obj instanceof URL)) {
        const userPass = obj.username && obj.password ? `${obj.username}:${obj.password}@` : "";
        const auth = obj.auth ? obj.auth + "@" : "";
        const port = obj.port ? ":" + obj.port : "";
        const protocol = obj.protocol ? obj.protocol + "//" : "";
        const host = obj.host || "";
        const hostname = obj.hostname || "";
        const search = obj.search || (obj.query ? "?" + obj.query : "");
        const hash = obj.hash || "";
        const pathname = obj.pathname || "";
        const path = obj.path || pathname + search;
        return `${protocol}${userPass || auth}${host || hostname + port}${path}${hash}`;
    }
}
module.exports = {
    URLWithLegacySupport,
    URLSearchParams: self.URLSearchParams,
    defaultBase,
    format
};

},{}],"5yCit":[function(require,module,exports) {
"use strict";
const { URLWithLegacySupport, format } = require("548b12b2260e8559");
module.exports = (url, location = {}, protocolMap = {}, defaultProtocol)=>{
    let protocol = location.protocol ? location.protocol.replace(":", "") : "http";
    // Check protocol map
    protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ":";
    let urlParsed;
    try {
        urlParsed = new URLWithLegacySupport(url);
    } catch (err) {
        urlParsed = {};
    }
    const base = Object.assign({}, location, {
        protocol: protocol || urlParsed.protocol,
        host: location.host || urlParsed.host
    });
    return new URLWithLegacySupport(url, format(base)).toString();
};

},{"548b12b2260e8559":"jTIXj"}],"dOdCo":[function(require,module,exports) {
"use strict";
const { Buffer } = require("47b9fe738f70b6ab");
const { URL } = require("c1b906248460935d");
const Bignumber = require("3becb2bc81811c88").BigNumber;
const utils = require("a6071fb13e829208");
const constants = require("ba257f2a4104b0c0");
const MT = constants.MT;
const NUMBYTES = constants.NUMBYTES;
const SHIFT32 = constants.SHIFT32;
const SYMS = constants.SYMS;
const TAG = constants.TAG;
const HALF = constants.MT.SIMPLE_FLOAT << 5 | constants.NUMBYTES.TWO;
const FLOAT = constants.MT.SIMPLE_FLOAT << 5 | constants.NUMBYTES.FOUR;
const DOUBLE = constants.MT.SIMPLE_FLOAT << 5 | constants.NUMBYTES.EIGHT;
const TRUE = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.TRUE;
const FALSE = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.FALSE;
const UNDEFINED = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.UNDEFINED;
const NULL = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.NULL;
const MAXINT_BN = new Bignumber("0x20000000000000");
const BUF_NAN = Buffer.from("f97e00", "hex");
const BUF_INF_NEG = Buffer.from("f9fc00", "hex");
const BUF_INF_POS = Buffer.from("f97c00", "hex");
function toType(obj) {
    // [object Type]
    // --------8---1
    return ({}).toString.call(obj).slice(8, -1);
}
/**
 * Transform JavaScript values into CBOR bytes
 *
 */ class Encoder {
    /**
   * @param {Object} [options={}]
   * @param {function(Buffer)} options.stream
   */ constructor(options){
        options = options || {};
        this.streaming = typeof options.stream === "function";
        this.onData = options.stream;
        this.semanticTypes = [
            [
                URL,
                this._pushUrl
            ],
            [
                Bignumber,
                this._pushBigNumber
            ]
        ];
        const addTypes = options.genTypes || [];
        const len = addTypes.length;
        for(let i = 0; i < len; i++)this.addSemanticType(addTypes[i][0], addTypes[i][1]);
        this._reset();
    }
    addSemanticType(type, fun) {
        const len = this.semanticTypes.length;
        for(let i = 0; i < len; i++){
            const typ = this.semanticTypes[i][0];
            if (typ === type) {
                const old = this.semanticTypes[i][1];
                this.semanticTypes[i][1] = fun;
                return old;
            }
        }
        this.semanticTypes.push([
            type,
            fun
        ]);
        return null;
    }
    push(val) {
        if (!val) return true;
        this.result[this.offset] = val;
        this.resultMethod[this.offset] = 0;
        this.resultLength[this.offset] = val.length;
        this.offset++;
        if (this.streaming) this.onData(this.finalize());
        return true;
    }
    pushWrite(val, method, len) {
        this.result[this.offset] = val;
        this.resultMethod[this.offset] = method;
        this.resultLength[this.offset] = len;
        this.offset++;
        if (this.streaming) this.onData(this.finalize());
        return true;
    }
    _pushUInt8(val) {
        return this.pushWrite(val, 1, 1);
    }
    _pushUInt16BE(val) {
        return this.pushWrite(val, 2, 2);
    }
    _pushUInt32BE(val) {
        return this.pushWrite(val, 3, 4);
    }
    _pushDoubleBE(val) {
        return this.pushWrite(val, 4, 8);
    }
    _pushNaN() {
        return this.push(BUF_NAN);
    }
    _pushInfinity(obj) {
        const half = obj < 0 ? BUF_INF_NEG : BUF_INF_POS;
        return this.push(half);
    }
    _pushFloat(obj) {
        const b2 = Buffer.allocUnsafe(2);
        if (utils.writeHalf(b2, obj)) {
            if (utils.parseHalf(b2) === obj) return this._pushUInt8(HALF) && this.push(b2);
        }
        const b4 = Buffer.allocUnsafe(4);
        b4.writeFloatBE(obj, 0);
        if (b4.readFloatBE(0) === obj) return this._pushUInt8(FLOAT) && this.push(b4);
        return this._pushUInt8(DOUBLE) && this._pushDoubleBE(obj);
    }
    _pushInt(obj, mt, orig) {
        const m = mt << 5;
        if (obj < 24) return this._pushUInt8(m | obj);
        if (obj <= 0xff) return this._pushUInt8(m | NUMBYTES.ONE) && this._pushUInt8(obj);
        if (obj <= 0xffff) return this._pushUInt8(m | NUMBYTES.TWO) && this._pushUInt16BE(obj);
        if (obj <= 0xffffffff) return this._pushUInt8(m | NUMBYTES.FOUR) && this._pushUInt32BE(obj);
        if (obj <= Number.MAX_SAFE_INTEGER) return this._pushUInt8(m | NUMBYTES.EIGHT) && this._pushUInt32BE(Math.floor(obj / SHIFT32)) && this._pushUInt32BE(obj % SHIFT32);
        if (mt === MT.NEG_INT) return this._pushFloat(orig);
        return this._pushFloat(obj);
    }
    _pushIntNum(obj) {
        if (obj < 0) return this._pushInt(-obj - 1, MT.NEG_INT, obj);
        else return this._pushInt(obj, MT.POS_INT);
    }
    _pushNumber(obj) {
        switch(false){
            case obj === obj:
                return this._pushNaN(obj);
            case isFinite(obj):
                return this._pushInfinity(obj);
            case obj % 1 !== 0:
                return this._pushIntNum(obj);
            default:
                return this._pushFloat(obj);
        }
    }
    _pushString(obj) {
        const len = Buffer.byteLength(obj, "utf8");
        return this._pushInt(len, MT.UTF8_STRING) && this.pushWrite(obj, 5, len);
    }
    _pushBoolean(obj) {
        return this._pushUInt8(obj ? TRUE : FALSE);
    }
    _pushUndefined(obj) {
        return this._pushUInt8(UNDEFINED);
    }
    _pushArray(gen, obj) {
        const len = obj.length;
        if (!gen._pushInt(len, MT.ARRAY)) return false;
        for(let j = 0; j < len; j++){
            if (!gen.pushAny(obj[j])) return false;
        }
        return true;
    }
    _pushTag(tag) {
        return this._pushInt(tag, MT.TAG);
    }
    _pushDate(gen, obj) {
        // Round date, to get seconds since 1970-01-01 00:00:00 as defined in
        // Sec. 2.4.1 and get a possibly more compact encoding. Note that it is
        // still allowed to encode fractions of seconds which can be achieved by
        // changing overwriting the encode function for Date objects.
        return gen._pushTag(TAG.DATE_EPOCH) && gen.pushAny(Math.round(obj / 1000));
    }
    _pushBuffer(gen, obj) {
        return gen._pushInt(obj.length, MT.BYTE_STRING) && gen.push(obj);
    }
    _pushNoFilter(gen, obj) {
        return gen._pushBuffer(gen, obj.slice());
    }
    _pushRegexp(gen, obj) {
        return gen._pushTag(TAG.REGEXP) && gen.pushAny(obj.source);
    }
    _pushSet(gen, obj) {
        if (!gen._pushInt(obj.size, MT.ARRAY)) return false;
        for (const x of obj){
            if (!gen.pushAny(x)) return false;
        }
        return true;
    }
    _pushUrl(gen, obj) {
        return gen._pushTag(TAG.URI) && gen.pushAny(obj.format());
    }
    _pushBigint(obj) {
        let tag = TAG.POS_BIGINT;
        if (obj.isNegative()) {
            obj = obj.negated().minus(1);
            tag = TAG.NEG_BIGINT;
        }
        let str = obj.toString(16);
        if (str.length % 2) str = "0" + str;
        const buf = Buffer.from(str, "hex");
        return this._pushTag(tag) && this._pushBuffer(this, buf);
    }
    _pushBigNumber(gen, obj) {
        if (obj.isNaN()) return gen._pushNaN();
        if (!obj.isFinite()) return gen._pushInfinity(obj.isNegative() ? -Infinity : Infinity);
        if (obj.isInteger()) return gen._pushBigint(obj);
        if (!(gen._pushTag(TAG.DECIMAL_FRAC) && gen._pushInt(2, MT.ARRAY))) return false;
        const dec = obj.decimalPlaces();
        const slide = obj.multipliedBy(new Bignumber(10).pow(dec));
        if (!gen._pushIntNum(-dec)) return false;
        if (slide.abs().isLessThan(MAXINT_BN)) return gen._pushIntNum(slide.toNumber());
        else return gen._pushBigint(slide);
    }
    _pushMap(gen, obj) {
        if (!gen._pushInt(obj.size, MT.MAP)) return false;
        return this._pushRawMap(obj.size, Array.from(obj));
    }
    _pushObject(obj) {
        if (!obj) return this._pushUInt8(NULL);
        var len = this.semanticTypes.length;
        for(var i = 0; i < len; i++){
            if (obj instanceof this.semanticTypes[i][0]) return this.semanticTypes[i][1].call(obj, this, obj);
        }
        var f = obj.encodeCBOR;
        if (typeof f === "function") return f.call(obj, this);
        var keys = Object.keys(obj);
        var keyLength = keys.length;
        if (!this._pushInt(keyLength, MT.MAP)) return false;
        return this._pushRawMap(keyLength, keys.map((k)=>[
                k,
                obj[k]
            ]));
    }
    _pushRawMap(len, map) {
        // Sort keys for canoncialization
        // 1. encode key
        // 2. shorter key comes before longer key
        // 3. same length keys are sorted with lower
        //    byte value before higher
        map = map.map(function(a) {
            a[0] = Encoder.encode(a[0]);
            return a;
        }).sort(utils.keySorter);
        for(var j = 0; j < len; j++){
            if (!this.push(map[j][0])) return false;
            if (!this.pushAny(map[j][1])) return false;
        }
        return true;
    }
    /**
   * Alias for `.pushAny`
   *
   * @param {*} obj
   * @returns {boolean} true on success
   */ write(obj) {
        return this.pushAny(obj);
    }
    /**
   * Push any supported type onto the encoded stream
   *
   * @param {any} obj
   * @returns {boolean} true on success
   */ pushAny(obj) {
        var typ = toType(obj);
        switch(typ){
            case "Number":
                return this._pushNumber(obj);
            case "String":
                return this._pushString(obj);
            case "Boolean":
                return this._pushBoolean(obj);
            case "Object":
                return this._pushObject(obj);
            case "Array":
                return this._pushArray(this, obj);
            case "Uint8Array":
                return this._pushBuffer(this, Buffer.isBuffer(obj) ? obj : Buffer.from(obj));
            case "Null":
                return this._pushUInt8(NULL);
            case "Undefined":
                return this._pushUndefined(obj);
            case "Map":
                return this._pushMap(this, obj);
            case "Set":
                return this._pushSet(this, obj);
            case "URL":
                return this._pushUrl(this, obj);
            case "BigNumber":
                return this._pushBigNumber(this, obj);
            case "Date":
                return this._pushDate(this, obj);
            case "RegExp":
                return this._pushRegexp(this, obj);
            case "Symbol":
                switch(obj){
                    case SYMS.NULL:
                        return this._pushObject(null);
                    case SYMS.UNDEFINED:
                        return this._pushUndefined(undefined);
                    // TODO: Add pluggable support for other symbols
                    default:
                        throw new Error("Unknown symbol: " + obj.toString());
                }
            default:
                throw new Error("Unknown type: " + typeof obj + ", " + (obj ? obj.toString() : ""));
        }
    }
    finalize() {
        if (this.offset === 0) return null;
        var result = this.result;
        var resultLength = this.resultLength;
        var resultMethod = this.resultMethod;
        var offset = this.offset;
        // Determine the size of the buffer
        var size = 0;
        var i = 0;
        for(; i < offset; i++)size += resultLength[i];
        var res = Buffer.allocUnsafe(size);
        var index = 0;
        var length = 0;
        // Write the content into the result buffer
        for(i = 0; i < offset; i++){
            length = resultLength[i];
            switch(resultMethod[i]){
                case 0:
                    result[i].copy(res, index);
                    break;
                case 1:
                    res.writeUInt8(result[i], index, true);
                    break;
                case 2:
                    res.writeUInt16BE(result[i], index, true);
                    break;
                case 3:
                    res.writeUInt32BE(result[i], index, true);
                    break;
                case 4:
                    res.writeDoubleBE(result[i], index, true);
                    break;
                case 5:
                    res.write(result[i], index, length, "utf8");
                    break;
                default:
                    throw new Error("unkown method");
            }
            index += length;
        }
        var tmp = res;
        this._reset();
        return tmp;
    }
    _reset() {
        this.result = [];
        this.resultMethod = [];
        this.resultLength = [];
        this.offset = 0;
    }
    /**
   * Encode the given value
   * @param {*} o
   * @returns {Buffer}
   */ static encode(o) {
        const enc = new Encoder();
        const ret = enc.pushAny(o);
        if (!ret) throw new Error("Failed to encode input");
        return enc.finalize();
    }
}
module.exports = Encoder;

},{"47b9fe738f70b6ab":"fCgem","c1b906248460935d":"e9Sz0","3becb2bc81811c88":"57qkX","a6071fb13e829208":"bZwHE","ba257f2a4104b0c0":"3ENYL"}],"lLl6e":[function(require,module,exports) {
/**
 * Concatenate multiple array buffers.
 * @param buffers The buffers to concatenate.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat);
/**
 * Transforms a buffer to an hexadecimal string. This will use the buffer as an Uint8Array.
 * @param buffer The buffer to return the hexadecimal string of.
 */ parcelHelpers.export(exports, "toHex", ()=>toHex);
/**
 * Transforms a hexadecimal string into an array buffer.
 * @param hex The hexadecimal string to use.
 */ parcelHelpers.export(exports, "fromHex", ()=>fromHex);
/**
 *
 * @param b1 array buffer 1
 * @param b2 array buffer 2
 * @returns number - negative if b1 < b2, positive if b1 > b2, 0 if b1 === b2
 */ parcelHelpers.export(exports, "compare", ()=>compare);
/**
 * Checks two array buffers for equality.
 * @param b1 array buffer 1
 * @param b2 array buffer 2
 * @returns boolean
 */ parcelHelpers.export(exports, "bufEquals", ()=>bufEquals);
/**
 * Returns a true ArrayBuffer from a Uint8Array, as Uint8Array.buffer is unsafe.
 * @param {Uint8Array} arr Uint8Array to convert
 * @returns ArrayBuffer
 */ parcelHelpers.export(exports, "uint8ToBuf", ()=>uint8ToBuf);
function concat(...buffers) {
    const result = new Uint8Array(buffers.reduce((acc, curr)=>acc + curr.byteLength, 0));
    let index = 0;
    for (const b of buffers){
        result.set(new Uint8Array(b), index);
        index += b.byteLength;
    }
    return result.buffer;
}
function toHex(buffer) {
    return [
        ...new Uint8Array(buffer)
    ].map((x)=>x.toString(16).padStart(2, "0")).join("");
}
const hexRe = new RegExp(/^([0-9A-F]{2})*$/i);
function fromHex(hex) {
    if (!hexRe.test(hex)) throw new Error("Invalid hexadecimal string.");
    const buffer = [
        ...hex
    ].reduce((acc, curr, i)=>{
        acc[i / 2 | 0] = (acc[i / 2 | 0] || "") + curr;
        return acc;
    }, []).map((x)=>Number.parseInt(x, 16));
    return new Uint8Array(buffer).buffer;
}
function compare(b1, b2) {
    if (b1.byteLength !== b2.byteLength) return b1.byteLength - b2.byteLength;
    const u1 = new Uint8Array(b1);
    const u2 = new Uint8Array(b2);
    for(let i = 0; i < u1.length; i++){
        if (u1[i] !== u2[i]) return u1[i] - u2[i];
    }
    return 0;
}
function bufEquals(b1, b2) {
    return compare(b1, b2) === 0;
}
function uint8ToBuf(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength).buffer;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"his1y":[function(require,module,exports) {
// This file is based on:
// https://github.com/dfinity-lab/dfinity/blob/9bca65f8edd65701ea6bdb00e0752f9186bbc893/docs/spec/public/index.adoc#cbor-encoding-of-requests-and-responses
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CborTag", ()=>CborTag);
/**
 * Encode a JavaScript value into CBOR.
 */ parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "decode", ()=>decode);
var _borc = require("borc");
var _borcDefault = parcelHelpers.interopDefault(_borc);
var _simpleCbor = require("simple-cbor");
var _buffer = require("./utils/buffer");
// We are using hansl/simple-cbor for CBOR serialization, to avoid issues with
// encoding the uint64 values that the HTTP handler of the client expects for
// canister IDs. However, simple-cbor does not yet provide deserialization so
// we are using `Uint8Array` so that we can use the dignifiedquire/borc CBOR
// decoder.
class PrincipalEncoder {
    get name() {
        return "Principal";
    }
    get priority() {
        return 0;
    }
    match(value) {
        return value && value._isPrincipal === true;
    }
    encode(v) {
        return _simpleCbor.value.bytes(v.toUint8Array());
    }
}
class BufferEncoder {
    get name() {
        return "Buffer";
    }
    get priority() {
        return 1;
    }
    match(value) {
        return value instanceof ArrayBuffer || ArrayBuffer.isView(value);
    }
    encode(v) {
        return _simpleCbor.value.bytes(new Uint8Array(v));
    }
}
class BigIntEncoder {
    get name() {
        return "BigInt";
    }
    get priority() {
        return 1;
    }
    match(value) {
        return typeof value === `bigint`;
    }
    encode(v) {
        // Always use a bigint encoding.
        if (v > BigInt(0)) return _simpleCbor.value.tagged(2, _simpleCbor.value.bytes((0, _buffer.fromHex)(v.toString(16))));
        else return _simpleCbor.value.tagged(3, _simpleCbor.value.bytes((0, _buffer.fromHex)((BigInt("-1") * v).toString(16))));
    }
}
const serializer = (0, _simpleCbor.SelfDescribeCborSerializer).withDefaultEncoders(true);
serializer.addEncoder(new PrincipalEncoder());
serializer.addEncoder(new BufferEncoder());
serializer.addEncoder(new BigIntEncoder());
var CborTag;
(function(CborTag) {
    CborTag[CborTag["Uint64LittleEndian"] = 71] = "Uint64LittleEndian";
    CborTag[CborTag["Semantic"] = 55799] = "Semantic";
})(CborTag || (CborTag = {}));
function encode(value) {
    return serializer.serialize(value);
}
function decodePositiveBigInt(buf) {
    const len = buf.byteLength;
    let res = BigInt(0);
    for(let i = 0; i < len; i++)res = res * BigInt(0x100) + BigInt(buf[i]);
    return res;
}
// A BORC subclass that decodes byte strings to ArrayBuffer instead of the Buffer class.
class Uint8ArrayDecoder extends (0, _borcDefault.default).Decoder {
    createByteString(raw) {
        return (0, _buffer.concat)(...raw);
    }
    createByteStringFromHeap(start, end) {
        if (start === end) return new ArrayBuffer(0);
        return new Uint8Array(this._heap.slice(start, end));
    }
}
function decode(input) {
    const buffer = new Uint8Array(input);
    const decoder = new Uint8ArrayDecoder({
        size: buffer.byteLength,
        tags: {
            // Override tags 2 and 3 for BigInt support (borc supports only BigNumber).
            2: (val)=>decodePositiveBigInt(val),
            3: (val)=>-decodePositiveBigInt(val),
            [CborTag.Semantic]: (value)=>value
        }
    });
    return decoder.decodeFirst(buffer);
}

},{"borc":"1lEEY","simple-cbor":"3ETI4","./utils/buffer":"lLl6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ETI4":[function(require,module,exports) {
"use strict";
function __export(m) {
    for(var p in m)if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__export(require("507c6a9e631785d4"));
const value = __importStar(require("245b50cede5abcce"));
exports.value = value;

},{"507c6a9e631785d4":"4AeDz","245b50cede5abcce":"2Gm0h"}],"4AeDz":[function(require,module,exports) {
"use strict";
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const cbor = __importStar(require("499c6c3a0b48ffa6"));
const BufferClasses = [
    ArrayBuffer,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Float32Array,
    Float64Array
];
class JsonDefaultCborEncoder {
    // @param _serializer The CBOR Serializer to use.
    // @param _stable Whether or not keys from objects should be sorted (stable). This is
    //     particularly useful when testing encodings between JSON objects.
    constructor(_serializer, _stable = false){
        this._serializer = _serializer;
        this._stable = _stable;
        this.name = "jsonDefault";
        this.priority = -100;
    }
    match(value) {
        return [
            "undefined",
            "boolean",
            "number",
            "string",
            "object"
        ].indexOf(typeof value) != -1;
    }
    encode(value) {
        switch(typeof value){
            case "undefined":
                return cbor.undefined_();
            case "boolean":
                return cbor.bool(value);
            case "number":
                if (Math.floor(value) === value) return cbor.number(value);
                else return cbor.doubleFloat(value);
            case "string":
                return cbor.string(value);
            case "object":
                if (value === null) return cbor.null_();
                else if (Array.isArray(value)) return cbor.array(value.map((x)=>this._serializer.serializeValue(x)));
                else if (BufferClasses.find((x)=>value instanceof x)) return cbor.bytes(value.buffer);
                else if (Object.getOwnPropertyNames(value).indexOf("toJSON") !== -1) return this.encode(value.toJSON());
                else if (value instanceof Map) {
                    const m = new Map();
                    for (const [key, item] of value.entries())m.set(key, this._serializer.serializeValue(item));
                    return cbor.map(m, this._stable);
                } else {
                    const m = new Map();
                    for (const [key, item] of Object.entries(value))m.set(key, this._serializer.serializeValue(item));
                    return cbor.map(m, this._stable);
                }
            default:
                throw new Error("Invalid value.");
        }
    }
}
exports.JsonDefaultCborEncoder = JsonDefaultCborEncoder;
class ToCborEncoder {
    constructor(){
        this.name = "cborEncoder";
        this.priority = -90;
    }
    match(value) {
        return typeof value == "object" && typeof value["toCBOR"] == "function";
    }
    encode(value) {
        return value.toCBOR();
    }
}
exports.ToCborEncoder = ToCborEncoder;
class CborSerializer {
    constructor(){
        this._encoders = new Set();
    }
    static withDefaultEncoders(stable = false) {
        const s = new this();
        s.addEncoder(new JsonDefaultCborEncoder(s, stable));
        s.addEncoder(new ToCborEncoder());
        return s;
    }
    removeEncoder(name) {
        // Has to make an extra call to values() to ensure it doesn't break on iteration.
        for (const encoder of this._encoders.values())if (encoder.name == name) this._encoders.delete(encoder);
    }
    addEncoder(encoder) {
        this._encoders.add(encoder);
    }
    getEncoderFor(value) {
        let chosenEncoder = null;
        for (const encoder of this._encoders){
            if (!chosenEncoder || encoder.priority > chosenEncoder.priority) {
                if (encoder.match(value)) chosenEncoder = encoder;
            }
        }
        if (chosenEncoder === null) throw new Error("Could not find an encoder for value.");
        return chosenEncoder;
    }
    serializeValue(value) {
        return this.getEncoderFor(value).encode(value);
    }
    serialize(value) {
        return this.serializeValue(value);
    }
}
exports.CborSerializer = CborSerializer;
class SelfDescribeCborSerializer extends CborSerializer {
    serialize(value) {
        return cbor.raw(new Uint8Array([
            // Self describe CBOR.
            ...new Uint8Array([
                0xd9,
                0xd9,
                0xf7
            ]),
            ...new Uint8Array(super.serializeValue(value))
        ]));
    }
}
exports.SelfDescribeCborSerializer = SelfDescribeCborSerializer;

},{"499c6c3a0b48ffa6":"2Gm0h"}],"2Gm0h":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const MAX_U64_NUMBER = 0x20000000000000;
function _concat(a, ...args) {
    const newBuffer = new Uint8Array(a.byteLength + args.reduce((acc, b)=>acc + b.byteLength, 0));
    newBuffer.set(new Uint8Array(a), 0);
    let i = a.byteLength;
    for (const b of args){
        newBuffer.set(new Uint8Array(b), i);
        i += b.byteLength;
    }
    return newBuffer.buffer;
}
function _serializeValue(major, minor, value) {
    // Remove everything that's not an hexadecimal character. These are not
    // considered errors since the value was already validated and they might
    // be number decimals or sign.
    value = value.replace(/[^0-9a-fA-F]/g, "");
    // Create the buffer from the value with left padding with 0.
    const length = 2 ** (minor - 24 /* Int8 */ );
    value = value.slice(-length * 2).padStart(length * 2, "0");
    const bytes = [
        (major << 5) + minor
    ].concat(value.match(/../g).map((byte)=>parseInt(byte, 16)));
    return new Uint8Array(bytes).buffer;
}
function _serializeNumber(major, value) {
    if (value < 24) return new Uint8Array([
        (major << 5) + value
    ]).buffer;
    else {
        const minor = value <= 0xff ? 24 /* Int8 */  : value <= 0xffff ? 25 /* Int16 */  : value <= 0xffffffff ? 26 /* Int32 */  : 27 /* Int64 */ ;
        return _serializeValue(major, minor, value.toString(16));
    }
}
function _serializeString(str) {
    const utf8 = [];
    for(let i = 0; i < str.length; i++){
        let charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
        else if (charcode < 0xd800 || charcode >= 0xe000) utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        else {
            // Surrogate pair
            i++;
            charcode = (charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff;
            utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        }
    }
    return _concat(new Uint8Array(_serializeNumber(3 /* TextString */ , str.length)), new Uint8Array(utf8));
}
/**
 * Tag a value.
 */ function tagged(tag, value) {
    if (tag == 0xd9d9f7) return _concat(new Uint8Array([
        0xd9,
        0xd9,
        0xf7
    ]), value);
    if (tag < 24) return _concat(new Uint8Array([
        192 + tag
    ]), value);
    else {
        const minor = tag <= 0xff ? 24 /* Int8 */  : tag <= 0xffff ? 25 /* Int16 */  : tag <= 0xffffffff ? 26 /* Int32 */  : 27 /* Int64 */ ;
        const length = 2 ** (minor - 24 /* Int8 */ );
        const value = tag.toString(16).slice(-length * 2).padStart(length * 2, "0");
        const bytes = [
            192 + minor
        ].concat(value.match(/../g).map((byte)=>parseInt(byte, 16)));
        return new Uint8Array(bytes).buffer;
    }
}
exports.tagged = tagged;
/**
 * Set the raw bytes contained by this value. This should only be used with another
 * CborValue, or if you are implementing extensions to CBOR.
 * @param bytes A buffer containing the value.
 */ function raw(bytes) {
    return new Uint8Array(bytes).buffer;
}
exports.raw = raw;
/**
 * Encode a number that is between [0, 23].
 * @param n
 */ function uSmall(n) {
    if (isNaN(n)) throw new RangeError("Invalid number.");
    n = Math.min(Math.max(0, n), 23); // Clamp it.
    const bytes = [
        0 + n
    ];
    return new Uint8Array(bytes).buffer;
}
exports.uSmall = uSmall;
function u8(u8, radix) {
    // Force u8 into a number, and validate it.
    u8 = parseInt("" + u8, radix);
    if (isNaN(u8)) throw new RangeError("Invalid number.");
    u8 = Math.min(Math.max(0, u8), 0xff); // Clamp it.
    u8 = u8.toString(16);
    return _serializeValue(0 /* UnsignedInteger */ , 24 /* Int8 */ , u8);
}
exports.u8 = u8;
function u16(u16, radix) {
    // Force u16 into a number, and validate it.
    u16 = parseInt("" + u16, radix);
    if (isNaN(u16)) throw new RangeError("Invalid number.");
    u16 = Math.min(Math.max(0, u16), 0xffff); // Clamp it.
    u16 = u16.toString(16);
    return _serializeValue(0 /* UnsignedInteger */ , 25 /* Int16 */ , u16);
}
exports.u16 = u16;
function u32(u32, radix) {
    // Force u32 into a number, and validate it.
    u32 = parseInt("" + u32, radix);
    if (isNaN(u32)) throw new RangeError("Invalid number.");
    u32 = Math.min(Math.max(0, u32), 0xffffffff); // Clamp it.
    u32 = u32.toString(16);
    return _serializeValue(0 /* UnsignedInteger */ , 26 /* Int32 */ , u32);
}
exports.u32 = u32;
function u64(u64, radix) {
    // Special consideration for numbers that might be larger than expected.
    if (typeof u64 == "string" && radix == 16) {
        // This is the only case where we guarantee we'll encode the number directly.
        // Validate it's all hexadecimal first.
        if (u64.match(/[^0-9a-fA-F]/)) throw new RangeError("Invalid number.");
        return _serializeValue(0 /* UnsignedInteger */ , 27 /* Int64 */ , u64);
    }
    // Force u64 into a number, and validate it.
    u64 = parseInt("" + u64, radix);
    if (isNaN(u64)) throw new RangeError("Invalid number.");
    u64 = Math.min(Math.max(0, u64), MAX_U64_NUMBER); // Clamp it to actual limit.
    u64 = u64.toString(16);
    return _serializeValue(0 /* UnsignedInteger */ , 27 /* Int64 */ , u64);
}
exports.u64 = u64;
/**
 * Encode a negative number that is between [-24, -1].
 */ function iSmall(n) {
    if (isNaN(n)) throw new RangeError("Invalid number.");
    if (n === 0) return uSmall(0);
    // Negative n, clamped to [1, 24], minus 1 (there's no negative 0).
    n = Math.min(Math.max(0, -n), 24) - 1;
    const bytes = [
        32 + n
    ];
    return new Uint8Array(bytes).buffer;
}
exports.iSmall = iSmall;
function i8(i8, radix) {
    // Force i8 into a number, and validate it.
    i8 = parseInt("" + i8, radix);
    if (isNaN(i8)) throw new RangeError("Invalid number.");
    // Negative n, clamped, minus 1 (there's no negative 0).
    i8 = Math.min(Math.max(0, -i8 - 1), 0xff);
    i8 = i8.toString(16);
    return _serializeValue(1 /* SignedInteger */ , 24 /* Int8 */ , i8);
}
exports.i8 = i8;
function i16(i16, radix) {
    // Force i16 into a number, and validate it.
    i16 = parseInt("" + i16, radix);
    if (isNaN(i16)) throw new RangeError("Invalid number.");
    // Negative n, clamped, minus 1 (there's no negative 0).
    i16 = Math.min(Math.max(0, -i16 - 1), 0xffff);
    i16 = i16.toString(16);
    return _serializeValue(1 /* SignedInteger */ , 25 /* Int16 */ , i16);
}
exports.i16 = i16;
function i32(i32, radix) {
    // Force i32 into a number, and validate it.
    i32 = parseInt("" + i32, radix);
    if (isNaN(i32)) throw new RangeError("Invalid number.");
    // Negative n, clamped, minus 1 (there's no negative 0).
    i32 = Math.min(Math.max(0, -i32 - 1), 0xffffffff);
    i32 = i32.toString(16);
    return _serializeValue(1 /* SignedInteger */ , 26 /* Int32 */ , i32);
}
exports.i32 = i32;
function i64(i64, radix) {
    // Special consideration for numbers that might be larger than expected.
    if (typeof i64 == "string" && radix == 16) {
        if (i64.startsWith("-")) i64 = i64.slice(1);
        else // Clamp it.
        i64 = "0";
        // This is the only case where we guarantee we'll encode the number directly.
        // Validate it's all hexadecimal first.
        if (i64.match(/[^0-9a-fA-F]/) || i64.length > 16) throw new RangeError("Invalid number.");
        // We need to do -1 to the number.
        let done = false;
        let newI64 = i64.split("").reduceRight((acc, x)=>{
            if (done) return x + acc;
            let n = parseInt(x, 16) - 1;
            if (n >= 0) {
                done = true;
                return n.toString(16) + acc;
            } else return "f" + acc;
        }, "");
        if (!done) // This number was 0.
        return u64(0);
        return _serializeValue(1 /* SignedInteger */ , 27 /* Int64 */ , newI64);
    }
    // Force i64 into a number, and validate it.
    i64 = parseInt("" + i64, radix);
    if (isNaN(i64)) throw new RangeError("Invalid number.");
    i64 = Math.min(Math.max(0, -i64 - 1), 0x20000000000000); // Clamp it to actual.
    i64 = i64.toString(16);
    return _serializeValue(1 /* SignedInteger */ , 27 /* Int64 */ , i64);
}
exports.i64 = i64;
/**
 * Encode a number using the smallest amount of bytes, by calling the methods
 * above. e.g. If the number fits in a u8, it will use that.
 */ function number(n) {
    if (n >= 0) {
        if (n < 24) return uSmall(n);
        else if (n <= 0xff) return u8(n);
        else if (n <= 0xffff) return u16(n);
        else if (n <= 0xffffffff) return u32(n);
        else return u64(n);
    } else {
        if (n >= -24) return iSmall(n);
        else if (n >= -255) return i8(n);
        else if (n >= -65535) return i16(n);
        else if (n >= -4294967295) return i32(n);
        else return i64(n);
    }
}
exports.number = number;
/**
 * Encode a byte array. This is different than the `raw()` method.
 */ function bytes(bytes) {
    return _concat(_serializeNumber(2 /* ByteString */ , bytes.byteLength), bytes);
}
exports.bytes = bytes;
/**
 * Encode a JavaScript string.
 */ function string(str) {
    return _serializeString(str);
}
exports.string = string;
/**
 * Encode an array of cbor values.
 */ function array(items) {
    return _concat(_serializeNumber(4 /* Array */ , items.length), ...items);
}
exports.array = array;
/**
 * Encode a map of key-value pairs. The keys are string, and the values are CBOR
 * encoded.
 */ function map(items, stable = false) {
    if (!(items instanceof Map)) items = new Map(Object.entries(items));
    let entries = Array.from(items.entries());
    if (stable) entries = entries.sort(([keyA], [keyB])=>keyA.localeCompare(keyB));
    return _concat(_serializeNumber(5 /* Map */ , items.size), ...entries.map(([k, v])=>_concat(_serializeString(k), v)));
}
exports.map = map;
/**
 * Encode a single (32 bits) precision floating point number.
 */ function singleFloat(f) {
    const single = new Float32Array([
        f
    ]);
    return _concat(new Uint8Array([
        250
    ]), new Uint8Array(single.buffer));
}
exports.singleFloat = singleFloat;
/**
 * Encode a double (64 bits) precision floating point number.
 */ function doubleFloat(f) {
    const single = new Float64Array([
        f
    ]);
    return _concat(new Uint8Array([
        251
    ]), new Uint8Array(single.buffer));
}
exports.doubleFloat = doubleFloat;
function bool(v) {
    return v ? true_() : false_();
}
exports.bool = bool;
/**
 * Encode the boolean true.
 */ function true_() {
    return raw(new Uint8Array([
        245
    ]));
}
exports.true_ = true_;
/**
 * Encode the boolean false.
 */ function false_() {
    return raw(new Uint8Array([
        244
    ]));
}
exports.false_ = false_;
/**
 * Encode the constant null.
 */ function null_() {
    return raw(new Uint8Array([
        246
    ]));
}
exports.null_ = null_;
/**
 * Encode the constant undefined.
 */ function undefined_() {
    return raw(new Uint8Array([
        247
    ]));
}
exports.undefined_ = undefined_;

},{}],"cTcPG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Expiry", ()=>Expiry);
/**
 * Create a Nonce transform, which takes a function that returns a Buffer, and adds it
 * as the nonce to every call requests.
 * @param nonceFn A function that returns a buffer. By default uses a semi-random method.
 */ parcelHelpers.export(exports, "makeNonceTransform", ()=>makeNonceTransform);
/**
 * Create a transform that adds a delay (by default 5 minutes) to the expiry.
 *
 * @param delayInMilliseconds The delay to add to the call time, in milliseconds.
 */ parcelHelpers.export(exports, "makeExpiryTransform", ()=>makeExpiryTransform);
/**
 * Maps the default fetch headers field to the serializable HttpHeaderField.
 *
 * @param headers Fetch definition of the headers type
 * @returns array of header fields
 */ parcelHelpers.export(exports, "httpHeadersTransform", ()=>httpHeadersTransform);
var _candid = require("@dfinity/candid");
var _simpleCbor = require("simple-cbor");
var _types = require("./types");
const NANOSECONDS_PER_MILLISECONDS = BigInt(1000000);
const REPLICA_PERMITTED_DRIFT_MILLISECONDS = 60000;
class Expiry {
    constructor(deltaInMSec){
        // Use bigint because it can overflow the maximum number allowed in a double float.
        const raw_value = BigInt(Math.floor(Date.now() + deltaInMSec - REPLICA_PERMITTED_DRIFT_MILLISECONDS)) * NANOSECONDS_PER_MILLISECONDS;
        // round down to the nearest second
        const ingress_as_seconds = raw_value / BigInt(1000000000);
        // round down to nearest minute
        const ingress_as_minutes = ingress_as_seconds / BigInt(60);
        const rounded_down_nanos = ingress_as_minutes * BigInt(60) * BigInt(1000000000);
        this._value = rounded_down_nanos;
    }
    toCBOR() {
        // TODO: change this to take the minimum amount of space (it always takes 8 bytes now).
        return _simpleCbor.value.u64(this._value.toString(16), 16);
    }
    toHash() {
        return (0, _candid.lebEncode)(this._value);
    }
}
function makeNonceTransform(nonceFn = (0, _types.makeNonce)) {
    return async (request)=>{
        // Nonce needs to be inserted into the header for all requests, to enable logs to be correlated with requests.
        const headers = request.request.headers;
        // TODO: uncomment this when the http proxy supports it.
        // headers.set('X-IC-Request-ID', toHex(new Uint8Array(nonce)));
        request.request.headers = headers;
        // Nonce only needs to be inserted into the body for async calls, to prevent replay attacks.
        if (request.endpoint === "call" /* Endpoint.Call */ ) request.body.nonce = nonceFn();
    };
}
function makeExpiryTransform(delayInMilliseconds) {
    return async (request)=>{
        request.body.ingress_expiry = new Expiry(delayInMilliseconds);
    };
}
function httpHeadersTransform(headers) {
    const headerFields = [];
    headers.forEach((value, key)=>{
        headerFields.push([
            key,
            value
        ]);
    });
    return headerFields;
}

},{"@dfinity/candid":"aRzWd","simple-cbor":"3ETI4","./types":"5DQrM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DQrM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubmitRequestType", ()=>SubmitRequestType);
/**
 * Create a random Nonce, based on random values
 */ parcelHelpers.export(exports, "makeNonce", ()=>makeNonce);
var _random = require("../../utils/random");
var SubmitRequestType;
(function(SubmitRequestType) {
    SubmitRequestType["Call"] = "call";
})(SubmitRequestType || (SubmitRequestType = {}));
function makeNonce() {
    // Encode 128 bits.
    const buffer = new ArrayBuffer(16);
    const view = new DataView(buffer);
    const rand1 = (0, _random.randomNumber)();
    const rand2 = (0, _random.randomNumber)();
    const rand3 = (0, _random.randomNumber)();
    const rand4 = (0, _random.randomNumber)();
    view.setUint32(0, rand1);
    view.setUint32(4, rand2);
    view.setUint32(8, rand3);
    view.setUint32(12, rand4);
    return buffer;
}

},{"../../utils/random":"hRePK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRePK":[function(require,module,exports) {
/**
 * Generates a random unsigned 32-bit integer between 0 and 0xffffffff
 * @returns {number} a random number
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomNumber", ()=>randomNumber);
const randomNumber = ()=>{
    // determine whether browser crypto is available
    if (typeof window !== "undefined" && !!window.crypto && !!window.crypto.getRandomValues) {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0];
    }
    // A second check for webcrypto, in case it is loaded under global instead of window
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
    // determine whether node crypto is available
    if (typeof crypto !== "undefined" && crypto.randomInt) return crypto.randomInt(0, 0xffffffff);
    // fall back to Math.random
    return Math.floor(Math.random() * 0xffffffff);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pA2t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AgentHTTPResponseError", ()=>AgentHTTPResponseError);
class AgentHTTPResponseError extends Error {
    constructor(message, response){
        super(message);
        this.response = response;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3k2wA":[function(require,module,exports) {
/** @module CanisterStatus */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "request", ()=>request);
parcelHelpers.export(exports, "fetchNodeKeys", ()=>fetchNodeKeys);
parcelHelpers.export(exports, "encodePath", ()=>encodePath);
var _principal = require("@dfinity/principal");
var _errors = require("../errors");
var _certificate = require("../certificate");
var _buffer = require("../utils/buffer");
var _cbor = require("../cbor");
var _leb = require("../utils/leb");
const request = async (options)=>{
    const { agent, paths } = options;
    const canisterId = (0, _principal.Principal).from(options.canisterId);
    const uniquePaths = [
        ...new Set(paths)
    ];
    // Map path options to their correct formats
    const encodedPaths = uniquePaths.map((path)=>{
        return encodePath(path, canisterId);
    });
    const status = new Map();
    const promises = uniquePaths.map((path, index)=>{
        return (async ()=>{
            var _a;
            try {
                const response = await agent.readState(canisterId, {
                    paths: [
                        encodedPaths[index]
                    ]
                });
                const cert = await (0, _certificate.Certificate).create({
                    certificate: response.certificate,
                    rootKey: agent.rootKey,
                    canisterId: canisterId
                });
                const lookup = (cert, path)=>{
                    if (path === "subnet") {
                        const data = fetchNodeKeys(response.certificate, canisterId, agent.rootKey);
                        return {
                            path: path,
                            data
                        };
                    } else return {
                        path: path,
                        data: (0, _certificate.lookupResultToBuffer)(cert.lookup(encodePath(path, canisterId)))
                    };
                };
                // must pass in the rootKey if we have no delegation
                const { path, data } = lookup(cert, uniquePaths[index]);
                if (!data) {
                    // Typically, the cert lookup will throw
                    console.warn(`Expected to find result for path ${path}, but instead found nothing.`);
                    if (typeof path === "string") status.set(path, null);
                    else status.set(path.key, null);
                } else switch(path){
                    case "time":
                        status.set(path, (0, _leb.decodeTime)(data));
                        break;
                    case "controllers":
                        status.set(path, decodeControllers(data));
                        break;
                    case "module_hash":
                        status.set(path, decodeHex(data));
                        break;
                    case "subnet":
                        status.set(path, data);
                        break;
                    case "candid":
                        status.set(path, new TextDecoder().decode(data));
                        break;
                    default:
                        // Check for CustomPath signature
                        if (typeof path !== "string" && "key" in path && "path" in path) switch(path.decodeStrategy){
                            case "raw":
                                status.set(path.key, data);
                                break;
                            case "leb128":
                                status.set(path.key, (0, _leb.decodeLeb128)(data));
                                break;
                            case "cbor":
                                status.set(path.key, decodeCbor(data));
                                break;
                            case "hex":
                                status.set(path.key, decodeHex(data));
                                break;
                            case "utf-8":
                                status.set(path.key, decodeUtf8(data));
                        }
                }
            } catch (error) {
                // Break on signature verification errors
                if ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes("Invalid certificate")) throw new (0, _errors.AgentError)(error.message);
                if (typeof path !== "string" && "key" in path && "path" in path) status.set(path.key, null);
                else status.set(path, null);
                console.group();
                console.warn(`Expected to find result for path ${path}, but instead found nothing.`);
                console.warn(error);
                console.groupEnd();
            }
        })();
    });
    // Fetch all values separately, as each option can fail
    await Promise.all(promises);
    return status;
};
const fetchNodeKeys = (certificate, canisterId, root_key)=>{
    if (!canisterId._isPrincipal) throw new Error("Invalid canisterId");
    const cert = _cbor.decode(new Uint8Array(certificate));
    const tree = cert.tree;
    let delegation = cert.delegation;
    let subnetId;
    if (delegation && delegation.subnet_id) subnetId = (0, _principal.Principal).fromUint8Array(new Uint8Array(delegation.subnet_id));
    else if (!delegation && typeof root_key !== "undefined") {
        subnetId = (0, _principal.Principal).selfAuthenticating(new Uint8Array(root_key));
        delegation = {
            subnet_id: subnetId.toUint8Array(),
            certificate: new ArrayBuffer(0)
        };
    } else {
        subnetId = (0, _principal.Principal).selfAuthenticating((0, _principal.Principal).fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe").toUint8Array());
        delegation = {
            subnet_id: subnetId.toUint8Array(),
            certificate: new ArrayBuffer(0)
        };
    }
    const canisterInRange = (0, _certificate.check_canister_ranges)({
        canisterId,
        subnetId,
        tree
    });
    if (!canisterInRange) throw new Error("Canister not in range");
    const nodeTree = (0, _certificate.lookup_path)([
        "subnet",
        delegation === null || delegation === void 0 ? void 0 : delegation.subnet_id,
        "node"
    ], tree);
    const nodeForks = (0, _certificate.flatten_forks)(nodeTree);
    nodeForks.length;
    const nodeKeys = new Map();
    nodeForks.forEach((fork)=>{
        Object.getPrototypeOf(new Uint8Array(fork[1]));
        const node_id = (0, _principal.Principal).from(new Uint8Array(fork[1])).toText();
        const derEncodedPublicKey = (0, _certificate.lookup_path)([
            "public_key"
        ], fork[2]);
        if (derEncodedPublicKey.byteLength !== 44) throw new Error("Invalid public key length");
        else nodeKeys.set(node_id, derEncodedPublicKey);
    });
    return {
        subnetId: (0, _principal.Principal).fromUint8Array(new Uint8Array(delegation.subnet_id)).toText(),
        nodeKeys
    };
};
const encodePath = (path, canisterId)=>{
    const encoder = new TextEncoder();
    const encode = (arg)=>{
        return new DataView(encoder.encode(arg).buffer).buffer;
    };
    const canisterBuffer = new DataView(canisterId.toUint8Array().buffer).buffer;
    switch(path){
        case "time":
            return [
                encode("time")
            ];
        case "controllers":
            return [
                encode("canister"),
                canisterBuffer,
                encode("controllers")
            ];
        case "module_hash":
            return [
                encode("canister"),
                canisterBuffer,
                encode("module_hash")
            ];
        case "subnet":
            return [
                encode("subnet")
            ];
        case "candid":
            return [
                encode("canister"),
                canisterBuffer,
                encode("metadata"),
                encode("candid:service")
            ];
        default:
            // Check for CustomPath signature
            if ("key" in path && "path" in path) {
                // For simplified metadata queries
                if (typeof path["path"] === "string" || path["path"] instanceof ArrayBuffer) {
                    const metaPath = path.path;
                    const encoded = typeof metaPath === "string" ? encode(metaPath) : metaPath;
                    return [
                        encode("canister"),
                        canisterBuffer,
                        encode("metadata"),
                        encoded
                    ];
                // For non-metadata, return the provided custompath
                } else return path["path"];
            }
    }
    throw new Error(`An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${path} was formatted correctly.`);
};
const decodeHex = (buf)=>{
    return (0, _buffer.toHex)(buf);
};
const decodeCbor = (buf)=>{
    return _cbor.decode(buf);
};
const decodeUtf8 = (buf)=>{
    return new TextDecoder().decode(buf);
};
// Controllers are CBOR-encoded buffers
const decodeControllers = (buf)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const controllersRaw = decodeCbor(buf);
    return controllersRaw.map((buf)=>{
        return (0, _principal.Principal).fromUint8Array(new Uint8Array(buf));
    });
};

},{"@dfinity/principal":"lPNel","../errors":"b8vi6","../certificate":"bJv6G","../utils/buffer":"lLl6e","../cbor":"his1y","../utils/leb":"3ejrE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJv6G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A certificate may fail verification with respect to the provided public key
 */ parcelHelpers.export(exports, "CertificateVerificationError", ()=>CertificateVerificationError);
parcelHelpers.export(exports, "NodeId", ()=>NodeId);
/**
 * Make a human readable string out of a hash tree.
 * @param tree
 */ parcelHelpers.export(exports, "hashTreeToString", ()=>hashTreeToString);
parcelHelpers.export(exports, "Certificate", ()=>Certificate);
/**
 * utility function to constrain the type of a path
 * @param {ArrayBuffer | HashTree | undefined} result - the result of a lookup
 * @returns ArrayBuffer or Undefined
 */ parcelHelpers.export(exports, "lookupResultToBuffer", ()=>lookupResultToBuffer);
/**
 * @param t
 */ parcelHelpers.export(exports, "reconstruct", ()=>reconstruct);
/**
 * @param path
 * @param tree
 */ parcelHelpers.export(exports, "lookup_path", ()=>lookup_path);
/**
 * If the tree is a fork, flatten it into an array of trees
 * @param t - the tree to flatten
 * @returns HashTree[] - the flattened tree
 */ parcelHelpers.export(exports, "flatten_forks", ()=>flatten_forks);
/**
 * Check if a canister falls within a range of canisters
 * @param canisterId Principal
 * @param ranges [Principal, Principal][]
 * @returns
 */ parcelHelpers.export(exports, "check_canister_ranges", ()=>check_canister_ranges);
var _cbor = require("./cbor");
var _errors = require("./errors");
var _requestId = require("./request_id");
var _buffer = require("./utils/buffer");
var _principal = require("@dfinity/principal");
var _bls = require("./utils/bls");
var _leb = require("./utils/leb");
class CertificateVerificationError extends (0, _errors.AgentError) {
    constructor(reason){
        super(`Invalid certificate: ${reason}`);
    }
}
const NodeId = {
    Empty: 0,
    Fork: 1,
    Labeled: 2,
    Leaf: 3,
    Pruned: 4
};
function hashTreeToString(tree) {
    const indent = (s)=>s.split("\n").map((x)=>"  " + x).join("\n");
    function labelToString(label) {
        const decoder = new TextDecoder(undefined, {
            fatal: true
        });
        try {
            return JSON.stringify(decoder.decode(label));
        } catch (e) {
            return `data(...${label.byteLength} bytes)`;
        }
    }
    switch(tree[0]){
        case NodeId.Empty:
            return "()";
        case NodeId.Fork:
            if (tree[1] instanceof Array && tree[2] instanceof ArrayBuffer) {
                const left = hashTreeToString(tree[1]);
                const right = hashTreeToString(tree[2]);
                return `sub(\n left:\n${indent(left)}\n---\n right:\n${indent(right)}\n)`;
            } else throw new Error("Invalid tree structure for fork");
        case NodeId.Labeled:
            if (tree[1] instanceof ArrayBuffer && tree[2] instanceof ArrayBuffer) {
                const label = labelToString(tree[1]);
                const sub = hashTreeToString(tree[2]);
                return `label(\n label:\n${indent(label)}\n sub:\n${indent(sub)}\n)`;
            } else throw new Error("Invalid tree structure for labeled");
        case NodeId.Leaf:
            if (!tree[1]) throw new Error("Invalid tree structure for leaf");
            else if (Array.isArray(tree[1])) return JSON.stringify(tree[1]);
            return `leaf(...${tree[1].byteLength} bytes)`;
        case NodeId.Pruned:
            if (!tree[1]) throw new Error("Invalid tree structure for pruned");
            else if (Array.isArray(tree[1])) return JSON.stringify(tree[1]);
            return `pruned(${(0, _buffer.toHex)(new Uint8Array(tree[1]))}`;
        default:
            return `unknown(${JSON.stringify(tree[0])})`;
    }
}
function isBufferEqual(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    const a8 = new Uint8Array(a);
    const b8 = new Uint8Array(b);
    for(let i = 0; i < a8.length; i++){
        if (a8[i] !== b8[i]) return false;
    }
    return true;
}
class Certificate {
    constructor(certificate, _rootKey, _canisterId, _blsVerify, // Default to 5 minutes
    _maxAgeInMinutes = 5){
        this._rootKey = _rootKey;
        this._canisterId = _canisterId;
        this._blsVerify = _blsVerify;
        this._maxAgeInMinutes = _maxAgeInMinutes;
        this.cert = _cbor.decode(new Uint8Array(certificate));
    }
    /**
     * Create a new instance of a certificate, automatically verifying it. Throws a
     * CertificateVerificationError if the certificate cannot be verified.
     * @constructs  Certificate
     * @param {CreateCertificateOptions} options {@link CreateCertificateOptions}
     * @param {ArrayBuffer} options.certificate The bytes of the certificate
     * @param {ArrayBuffer} options.rootKey The root key to verify against
     * @param {Principal} options.canisterId The effective or signing canister ID
     * @param {number} options.maxAgeInMinutes The maximum age of the certificate in minutes. Default is 5 minutes.
     * @throws {CertificateVerificationError}
     */ static async create(options) {
        let blsVerify = options.blsVerify;
        if (!blsVerify) blsVerify = _bls.blsVerify;
        const cert = new Certificate(options.certificate, options.rootKey, options.canisterId, blsVerify, options.maxAgeInMinutes);
        await cert.verify();
        return cert;
    }
    lookup(path) {
        // constrain the type of the result, so that empty HashTree is undefined
        return lookupResultToBuffer(lookup_path(path, this.cert.tree));
    }
    lookup_label(label) {
        return this.lookup([
            label
        ]);
    }
    async verify() {
        const rootHash = await reconstruct(this.cert.tree);
        const derKey = await this._checkDelegationAndGetKey(this.cert.delegation);
        const sig = this.cert.signature;
        const key = extractDER(derKey);
        const msg = (0, _buffer.concat)(domain_sep("ic-state-root"), rootHash);
        let sigVer = false;
        const lookupTime = this.lookup([
            "time"
        ]);
        if (!lookupTime) // Should never happen - time is always present in IC certificates
        throw new CertificateVerificationError("Certificate does not contain a time");
        const FIVE_MINUTES_IN_MSEC = 300000;
        const MAX_AGE_IN_MSEC = this._maxAgeInMinutes * 60000;
        const now = Date.now();
        const earliestCertificateTime = now - MAX_AGE_IN_MSEC;
        const fiveMinutesFromNow = now + FIVE_MINUTES_IN_MSEC;
        const certTime = (0, _leb.decodeTime)(lookupTime);
        if (certTime.getTime() < earliestCertificateTime) throw new CertificateVerificationError(`Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` + certTime.toISOString() + " Current time: " + new Date(now).toISOString());
        else if (certTime.getTime() > fiveMinutesFromNow) throw new CertificateVerificationError("Certificate is signed more than 5 minutes in the future. Certificate time: " + certTime.toISOString() + " Current time: " + new Date(now).toISOString());
        try {
            sigVer = await this._blsVerify(new Uint8Array(key), new Uint8Array(sig), new Uint8Array(msg));
        } catch (err) {
            sigVer = false;
        }
        if (!sigVer) throw new CertificateVerificationError("Signature verification failed");
    }
    async _checkDelegationAndGetKey(d) {
        if (!d) return this._rootKey;
        const cert = await Certificate.create({
            certificate: d.certificate,
            rootKey: this._rootKey,
            canisterId: this._canisterId,
            blsVerify: this._blsVerify,
            // Do not check max age for delegation certificates
            maxAgeInMinutes: Infinity
        });
        const canisterInRange = check_canister_ranges({
            canisterId: this._canisterId,
            subnetId: (0, _principal.Principal).fromUint8Array(new Uint8Array(d.subnet_id)),
            tree: cert.cert.tree
        });
        if (!canisterInRange) throw new CertificateVerificationError(`Canister ${this._canisterId} not in range of delegations for subnet 0x${(0, _buffer.toHex)(d.subnet_id)}`);
        const publicKeyLookup = cert.lookup([
            "subnet",
            d.subnet_id,
            "public_key"
        ]);
        if (!publicKeyLookup) throw new Error(`Could not find subnet key for subnet 0x${(0, _buffer.toHex)(d.subnet_id)}`);
        return publicKeyLookup;
    }
}
const DER_PREFIX = (0, _buffer.fromHex)("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");
const KEY_LENGTH = 96;
function extractDER(buf) {
    const expectedLength = DER_PREFIX.byteLength + KEY_LENGTH;
    if (buf.byteLength !== expectedLength) throw new TypeError(`BLS DER-encoded public key must be ${expectedLength} bytes long`);
    const prefix = buf.slice(0, DER_PREFIX.byteLength);
    if (!isBufferEqual(prefix, DER_PREFIX)) throw new TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${DER_PREFIX}, but get ${prefix}`);
    return buf.slice(DER_PREFIX.byteLength);
}
function lookupResultToBuffer(result) {
    if (result instanceof ArrayBuffer) return result;
    else if (result instanceof Uint8Array) return result.buffer;
    return undefined;
}
async function reconstruct(t) {
    switch(t[0]){
        case NodeId.Empty:
            return (0, _requestId.hash)(domain_sep("ic-hashtree-empty"));
        case NodeId.Pruned:
            return t[1];
        case NodeId.Leaf:
            return (0, _requestId.hash)((0, _buffer.concat)(domain_sep("ic-hashtree-leaf"), t[1]));
        case NodeId.Labeled:
            return (0, _requestId.hash)((0, _buffer.concat)(domain_sep("ic-hashtree-labeled"), t[1], await reconstruct(t[2])));
        case NodeId.Fork:
            return (0, _requestId.hash)((0, _buffer.concat)(domain_sep("ic-hashtree-fork"), await reconstruct(t[1]), await reconstruct(t[2])));
        default:
            throw new Error("unreachable");
    }
}
function domain_sep(s) {
    const len = new Uint8Array([
        s.length
    ]);
    const str = new TextEncoder().encode(s);
    return (0, _buffer.concat)(len, str);
}
function lookup_path(path, tree) {
    if (path.length === 0) switch(tree[0]){
        case NodeId.Leaf:
            // should not be undefined
            if (!tree[1]) throw new Error("Invalid tree structure for leaf");
            if (tree[1] instanceof ArrayBuffer) return tree[1];
            else if (tree[1] instanceof Uint8Array) return tree[1].buffer;
            else return tree[1];
        case NodeId.Fork:
            return tree;
        default:
            return tree;
    }
    const label = typeof path[0] === "string" ? new TextEncoder().encode(path[0]) : path[0];
    const t = find_label(label, flatten_forks(tree));
    if (t) return lookup_path(path.slice(1), t);
}
function flatten_forks(t) {
    switch(t[0]){
        case NodeId.Empty:
            return [];
        case NodeId.Fork:
            return flatten_forks(t[1]).concat(flatten_forks(t[2]));
        default:
            return [
                t
            ];
    }
}
function find_label(l, trees) {
    if (trees.length === 0) return undefined;
    for (const t of trees)if (t[0] === NodeId.Labeled) {
        const p = t[1];
        if (isBufferEqual(l, p)) return t[2];
    }
}
function check_canister_ranges(params) {
    const { canisterId, subnetId, tree } = params;
    const rangeLookup = lookup_path([
        "subnet",
        subnetId.toUint8Array(),
        "canister_ranges"
    ], tree);
    if (!rangeLookup || !(rangeLookup instanceof ArrayBuffer)) throw new Error(`Could not find canister ranges for subnet ${subnetId}`);
    const ranges_arr = _cbor.decode(rangeLookup);
    const ranges = ranges_arr.map((v)=>[
            (0, _principal.Principal).fromUint8Array(v[0]),
            (0, _principal.Principal).fromUint8Array(v[1])
        ]);
    const canisterInRange = ranges.some((r)=>r[0].ltEq(canisterId) && r[1].gtEq(canisterId));
    return canisterInRange;
}

},{"./cbor":"his1y","./errors":"b8vi6","./request_id":"jsPqV","./utils/buffer":"lLl6e","@dfinity/principal":"lPNel","./utils/bls":"dwKzn","./utils/leb":"3ejrE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwKzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "verify", ()=>verify);
/**
 *
 * @param pk primary key: Uint8Array
 * @param sig signature: Uint8Array
 * @param msg message: Uint8Array
 * @returns Promise resolving a boolean
 */ parcelHelpers.export(exports, "blsVerify", ()=>blsVerify);
var _bls = require("../vendor/bls/bls");
var _blsDefault = parcelHelpers.interopDefault(_bls);
let verify;
async function blsVerify(pk, sig, msg) {
    if (!verify) {
        await (0, _blsDefault.default)();
        if ((0, _bls.bls_init)() !== 0) throw new Error("Cannot initialize BLS");
        verify = (pk1, sig1, msg1)=>{
            // Reorder things from what the WASM expects (sig, m, w).
            return (0, _bls.bls_verify)(sig1, msg1, pk1) === 0;
        };
    }
    return verify(pk, sig, msg);
}

},{"../vendor/bls/bls":"geulW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"geulW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @returns {number}
 */ parcelHelpers.export(exports, "bls_init", ()=>bls_init);
/**
 * @param {Uint8Array} sig
 * @param {Uint8Array} m
 * @param {Uint8Array} w
 * @returns {number}
 */ parcelHelpers.export(exports, "bls_verify", ()=>bls_verify);
var _base64Arraybuffer = require("base64-arraybuffer");
// This WASM is generated from the miracl BLS Rust code (see
// https://github.com/dfinity/miracl_core_bls12381/)
var _wasm = require("./wasm");
let wasm;
const wasmBytes = _base64Arraybuffer.decode((0, _wasm.wasmBytesBase64));
function bls_init() {
    let ret = wasm.bls_init();
    return ret;
}
let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    return cachegetUint8Memory0;
}
function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    return [
        ptr,
        arg.length
    ];
}
function bls_verify(sig, m, w) {
    const [ptr0, len0] = passArray8ToWasm0(sig, wasm.__wbindgen_malloc);
    const [ptr1, len1] = passArray8ToWasm0(m, wasm.__wbindgen_malloc);
    const [ptr2, len2] = passArray8ToWasm0(w, wasm.__wbindgen_malloc);
    const ret = wasm.bls_verify(ptr0, len0, ptr1, len1, ptr2, len2);
    return ret;
}
async function load(module, imports) {
    if (typeof Response === "function" && module instanceof Response) {
        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);
        if (instance instanceof WebAssembly.Instance) return {
            instance,
            module
        };
        else return instance;
    }
}
async function init() {
    const imports = {};
    const { instance, module } = await load(wasmBytes, imports);
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    return wasm;
}
/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {InitInput | Promise<InitInput>} module_or_path
 *
 * @returns {Promise<InitOutput>}
 */ exports.default = init;

},{"base64-arraybuffer":"dQodo","./wasm":"bFb2B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQodo":[function(require,module,exports) {
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */ (function() {
    "use strict";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    var lookup = new Uint8Array(256);
    for(var i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
    exports.encode = function(arraybuffer) {
        var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
        for(i = 0; i < len; i += 3){
            base64 += chars[bytes[i] >> 2];
            base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64 += chars[bytes[i + 2] & 63];
        }
        if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";
        else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";
        return base64;
    };
    exports.decode = function(base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") bufferLength--;
        }
        var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
        for(i = 0; i < len; i += 4){
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
    };
})();

},{}],"bFb2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wasmBytesBase64", ()=>wasmBytesBase64);
const wasmBytesBase64 = `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akE4ENABGiACQbgDakEBNgIAIAJBwANqQTgQ0AEaIAJB+ANqQQE2AgAgAkGABGpBOBDQARogAkEBNgK4BCACQcAEakE4ENABGiACQfgEakEBNgIAIAJBgAVqQTgQ0AEaIAJBuAVqQQE2AgAgAkHABWpBOBDQARogAkH4BWpBATYCACACQYAGakE4ENABGiACQQE2ArgGIAJBwAZqQTgQ0AEaIAJB+AZqQQE2AgAgAkGAB2pBOBDQARogAkG4B2pBATYCACACQcAHakE4ENABGiACQfgHakEBNgIAIAIgARAYAkAgASgCgAZBBEYNACAAKAKABkEERg0AIAJBgARqIgMgAEGAAmoQlgEgAyABQYACahAYDAYLIAJBwAxqIgdBOBDQARogAkEBNgL4DCACQYANakE4ENABGiACQbgNakEBNgIAIAJBgAhqIgRBOBDQARogAkEBNgK4CCACQcAIakE4ENABGiACQfgIakEBNgIAIAJBgApqIgMgAEGAA2oiBRBeIAQgAxCZASADIAFBgANqIgYQXiAEIAMQESAHELYBIAEoAoAGQQRHDQMMBAsgACABEAMMBgsgAkHADGoiAyABQYAFahBeIAJBgAxqIgQgA0HAABDRARogAkGABmogBBCnAQsgAkGABmoQZCACQYAIaiIDIAIQlgEgAxArIAJBgAJqIgQgAxCXASAGIAQQlgEgAkGABGoiByADEJYBIAMgABCWASADIAUQlwEgAxCwASACQYAKaiIEIAEQlgEgBCABQYAEahCXASAEELABIAMgBBAYIAcgAxCXASADIAUQlgECQCABKAKABkECRwRAIAJBwAxqIgMgAUGABWoQXiACQYAIaiADEKYBDAELIAJBwAxqIgMgAUGABWoQXiACQYAMaiIBIANBwAAQ0QEaIAJBgAhqIAEQpwELIAJBgAhqIgEQZCACQYAKaiIDIAEQlgEgAxArIAUgAkGABGoQlgEgBSADEJcBIAJBgAZqIgQgAxCXASABEGQgBiABEJcBIAQQsAEgBBBkIAAgAhCWASAAIAQQlwEMAwsgAkGACmoiAyAFEF4gAkHADGoiBCADEJkBIAMgAUGAAmoQXiAEIAMQEQsgACgCgAZBBEcEQCACQYAKaiIDIABBgAJqEF4gAkHADGoiBCADEJkBIAMgBhBeIAQgAxARCyACQYAEaiIDIAJB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AEHcu8AAKAIAQX4gA0EDdndxNgIACyAAIAEQoAEgAEH0vsAAKAIARw0BQey+wAAgATYCAAsPCyABQYACTwRAIAAgARAWDwsgAUEDdiICQQN0QeS7wABqIQECf0Hcu8AAKAIAIgNBASACdCICcQRAIAEoAggMAQtB3LvAACACIANyNgIAIAELIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIC+UDAQN/IwBB0CJrIgMkACADQcAWaiIEQcitwAAQSSADQcgcaiIFQYCuwAAQSSADQQhqIAQgBRBLIANBiAFqQTgQ0AEaIANBwAFqQTgQ0AEaIANB+AFqED0CQCACEIYBBEAgABBVDAELIANB+ARqIgQQPSAEIAEQfSAEEEcgA0H4B2oiARBnIAEgAhB4IAEQRiADQcgcaiICIAEQkAEgA0G4CWogAhCQASACIANBuAhqEJABIANB+AlqIAIQkAEgA0G4CmoiARA9IANBuA1qEFUgASAEEH0gA0HAE2oiARA9IAEgBBB9IAEQogEgA0HAAWogA0GIAWoQUEECayECA0AgAkEBakEBTQRAIANBuA1qIgEQngEgACABQYgGENEBGgUgA0G4DWoQGiADQcAWaiADQbgKaiADQbgJaiADQfgJahALAkACQAJAIANBwAFqIAIQUyADQYgBaiACEFNrQQFqDgMBAgACCyADQcgcaiIBIANBuApqIANB+ARqIANBuAlqIANB+AlqEAogA0HAFmogARADDAELIANByBxqIgEgA0G4CmogA0HAE2ogA0G4CWogA0H4CWoQCiADQcAWaiABEAMLIAJBAWshAiADQbgNaiADQcAWahABDAELCwsgA0HQImokAAvBAwEVfwNAIANBwAFGBEACQCAAQShqIQsgAEEUaigCACIMIQggAEEQaigCACINIQIgAEEMaigCACIOIQEgACgCCCIPIQMgAEEYaigCACIQIQogAEEcaigCACIRIQQgAEEgaigCACISIQcgAEEkaigCACITIQYDQCAHIQkgBCEHIAohBCAFQYACRg0BIAEgAnEhFCABIAJzIRUgBSALaigCACAFQcCiwABqKAIAIAkgBEF/c3EgBCAHcXIgBmogBEEadyAEQRV3cyAEQQd3c2pqaiIGIAhqIQogBUEEaiEFIAIhCCABIQIgAyIBQR53IAFBE3dzIAFBCndzIBQgASAVcXNqIAZqIQMgCSEGDAALAAsFIAAgA2oiAkHoAGogAkEoaigCACACQcwAaigCACACQeAAaigCACIBQQ93IAFBDXdzIAFBCnZzamogAkEsaigCACIBQRl3IAFBDndzIAFBA3ZzajYCACADQQRqIQMMAQsLIAAgBiATajYCJCAAIAkgEmo2AiAgACAHIBFqNgIcIAAgBCAQajYCGCAAIAggDGo2AhQgACACIA1qNgIQIAAgASAOajYCDCAAIAMgD2o2AggL5AEBAn8jAEGAA2siAyQAIAMQPSAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbyAAIAFBgANqIAJBAXNBAWtBH3YQbyAAIAFBgAZqIAJBAnNBAWtBH3YQbyAAIAFBgAlqIAJBA3NBAWtBH3YQbyAAIAFBgAxqIAJBBHNBAWtBH3YQbyAAIAFBgA9qIAJBBXNBAWtBH3YQbyAAIAFBgBJqIAJBBnNBAWtBH3YQbyAAIAFBgBVqIAJBB3NBAWtBH3YQbyADIAAQfSADEKIBIAAgAyAEQQFxEG8gA0GAA2okAAvlAwEIfyMAQZAGayICJAAgAEFAayEIAkAgAUH4AGooAgAgASgCOGqsIABB+ABqKAIAIgcgACgCOCIEaqx+Qv///w9XDQAgBEEBSgR/IAAQHiAAKAJ4BSAHC0EBTA0AIAgQHgsgAkHYpMAAEEkgAkE4aiIHQfAAENABGiACIQNBACECA0AgAkE4RgRAAkAgB0E4aiEEQQAhAgNAIAJBOEYNASACIARqIAIgA2opAwA3AwAgAkEIaiECDAALAAsFIAIgB2pCADcDACACQQhqIQIMAQsLIANBqAFqIgYgABBdIANB4AFqIgUgARBdIANBmAJqIgIgACABEAUgA0GIA2oiBCAIIAFBQGsiARAFIAYgCBBgIAYQQiAFIAEQYCAFEEIgA0H4A2oiCSAGIAUQBUEAIQEgA0HoBGoiBkHwABDQASEFA0AgAUHwAEcEQCABIAVqIAEgAmopAwA3AwAgAUEIaiEBDAELCyAGIAQQYkEAIQEDQCABQfAARwRAIAEgBGoiBSABIAdqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAiAEEGIgAhBIIAkgBhBjIAkQSCADQdgFaiIBIAIQayAAIAEQaiAAQQM2AjggASAJEGsgCCABEGogAEECNgJ4IANBkAZqJAALowIBCH8jAEGABmsiAiQAIAIgAEGAAWoiBxBeIAJBgAFqIgQgBxBeIAQQLSACQYACaiIFIAIQXiAFIABBgAJqIgMQESACQYADaiIBIAMQXiABEC0gAyAEEJkBIAMgBBCaASADEKkBIAMQuAEgAxC4ASADEKkBIAFBDBCrASABEHwgARCpASACQYAEaiIIIAEQXiAIIAMQESACQYAFaiIGIAQQXiAGIAEQmgEgBhCpASADIAUQESAFIAEQmQEgBSABEJoBIAEgBRCaASABEKkBIAQgARB7IAQQqQEgBiAEEBEgBiAIEJoBIAUgABCZASAFIAIQESAAIAQQmQEgABCpASAAIAUQESAAELgBIAAQqQEgByAGEJkBIAcQqQEgAkGABmokAAu8AgEGfyMAQYAIayIBJAAgASAAEIwBIAFBgAJqIgMgAEGABGoiBRCMASABQYAEaiIEIABBgAJqIgYQjAEgAUGABmoiAkE4ENABGiABQQE2ArgGIAFBwAZqQTgQ0AEaIAFB+AZqQQE2AgAgAUGAB2pBOBDQARogAUG4B2pBATYCACABQcAHakE4ENABGiABQfgHakEBNgIAIAAQISACIAAQlgEgAiAAEJcBIAAgAhCXASAAELABIAEQyQEgARCzASAAIAEQlwEgAxAhIAMQZCACIAMQlgEgAiADEJcBIAMgAhCXASADELABIAQQISACIAQQlgEgAiAEEJcBIAQgAhCXASAEELABIAYQsgEgBhCzASAFEMkBIAUQswEgBiADEJcBIAUgBBCXASAAQQU2AoAGIAAQnAEgAUGACGokAAv/AQEHfyMAQcACayIBJAAgASAAQUBrIgYQkAEgARBMIAFBQGsiAyAGEJABIAMgAEGAAWoiAhBKIAFBgAFqIgQgAhCQASAEEEwgAiABEK4BIAIgARB3IAIQQiACEIIBIAIQggEgAhBCIARBDBA0IAFBwAFqIgcgBBCQASAHIAIQSiABQYACaiIFIAEQkAEgBSAEEHcgBRBCIAIgAxBKIAMgBBCuASADIAQQdyAEIAMQdyABIAQQfiABEEIgBSABEEogBSAHEHcgAyAAEK4BIAMgBhBKIAAgARCuASAAEEIgACADEEogABCCASAAEEIgBiAFEK4BIAYQQiABQcACaiQAC84CAgd/An4CQAJAAkBBDSABQTpuIgJrIgRBDU0EQEEMIAJrIgNBDk8NASAAIAAgA0EDdGopAwBBOiABIAJBOmxrIgNrrSIKhyAAIARBA3RqKQMAIAOtIgmGhDcDaCAEQQ1rIQUgAEHgAGohBCACQQFqIQZBACACQQN0ayEHQQshAwNAAkAgA0ECaiAGTQRAIAFBrAZPDQEgACACQQN0aiAAKQMAIAmGQv//////////A4M3AwADQCACRQ0HIABCADcDACACQQFrIQIgAEEIaiEADAALAAsgAyAFakEOTw0EIAQgBCAHaiIIQQhrKQMAIAqHIAgpAwAgCYZC//////////8Dg4Q3AwAgA0EBayEDIARBCGshBAwBCwsgAkEOQYCywAAQOwALIARBDkHQscAAEDsACyADQQ5B4LHAABA7AAtBf0EOQfCxwAAQOwALC6cCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiBDYCHCAEQQJ0Qey9wABqIQMgACECAkACQAJAAkBB4LvAACgCACIAQQEgBHQiBXEEQCADKAIAIQMgBBCfASEAIAMQywEgAUcNASADIQAMAgtB4LvAACAAIAVyNgIAIAMgAjYCAAwDCyABIAB0IQQDQCADIARBHXZBBHFqQRBqIgUoAgAiAEUNAiAEQQF0IQQgACIDEMsBIAFHDQALCyAAKAIIIgEgAjYCDCAAIAI2AgggAiAANgIMIAIgATYCCCACQQA2AhgPCyAFIAI2AgALIAIgAzYCGCACIAI2AgggAiACNgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB7L3AAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHgu8AAQeC7wAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC+UBAQZ/IwBBgARrIgIkACACIAAQXiACQYABaiIFIABBgAFqIgYQXiACQYACaiIDQTgQ0AEaIAJBATYCuAIgAkHAAmpBOBDQARogAkH4AmpBATYCACACQYADaiIEIAYQXiACIAEQESAFIAFBgAFqIgcQESADIAcQmQEgAyABEJoBIAQgABCaASADEKkBIAQQqQEgBCADEBEgAyACEJkBIAMQNiAEIAMQmgEgBBCpASADIAUQmQEgAxA2IAYgBBCZASAGIAMQmgEgBRB8IAAgBRCZASAAIAIQmgEgABCwASACQYAEaiQAC28BDH9BjL/AACgCACICRQRAQZy/wABB/x82AgBBAA8LQYS/wAAhBgNAIAIiASgCCCECIAEoAgQhAyABKAIAIQQgAUEMaigCABogASEGIAVBAWohBSACDQALQZy/wAAgBUH/HyAFQf8fSxs2AgBBAAuAAgEGfyMAQYAIayIBJAAgACgCgAZBAUcEQCABIAAQjAEgAUGAAmoiAiAAQYACaiIEEIwBIAFBgARqIgUgAEGABGoiAxCMASABQYAGaiIGIAAQjAEgARAhIAIgAxAYIAIQswEgAhCwASAFECEgBiAEEBggBhCzASADIAAQlwEgAyAEEJcBIAMQsAEgAxAhIAAgARCWASABIAIQlwEgARCwASABIAUQlwEgASAGEJcBIAEQsAEgARArIAIQZCAFEGQgACACEJcBIAQgBRCWASAEIAYQlwEgAyABEJcBIABBBEEFIAAoAoAGQX5xQQJGGzYCgAYgABCdAQsgAUGACGokAAuZAgEBfyMAQYANayIDJAAgAyABEGkgAxCdASADQYgGaiIBIAIQXSABEEIgA0HABmoiAiABEF0gAkEDECkaIAIQQiADQfgGaiADEGkCQCACEFdFBEAgA0HABmoQKkECayECA0AgAkEBakEBTQRAIANB+AZqIgEQnAEMAwUgA0H4BmoQEwJAAkACQCADQcAGaiACEFMgA0GIBmogAhBTa0EBag4DAQIAAgsgA0H4BmogAxAHDAELIAMQngEgA0H4BmogAxAHIAMQngELIAJBAWshAgwBCwALAAsgA0H4BmoiARC3ASABQYABahC2ASABQYACahCxASABQYAEahCxASABQQE2AoAGCyAAIAFBiAYQ0QEaIANBgA1qJAALhgICBH8BfiMAQTBrIgIkACABQQRqIQQgASgCBEUEQCABKAIAIQMgAkEQaiIFQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIANBEGopAgA3AwAgAkEgaiADQQhqKQIANwMAIAIgAykCADcDGCACQRRqIAJBGGoQDBogBEEIaiAFKAIANgIAIAQgAikDCDcCAAsgAkEgaiIDIARBCGooAgA2AgAgAUEMakEANgIAIAQpAgAhBiABQgE3AgQgAiAGNwMYQQxBBBC5ASIBRQRAQQxBBBDPAQALIAEgAikDGDcCACABQQhqIAMoAgA2AgAgAEGEt8AANgIEIAAgATYCACACQTBqJAAL5AEBAn8jAEHAAWsiAyQAIAMQZyAAIAEgAkEfdSIEIAJzIARBf3NqQQJtIgJBAWtBH3YQbiAAIAFBwAFqIAJBAXNBAWtBH3YQbiAAIAFBgANqIAJBAnNBAWtBH3YQbiAAIAFBwARqIAJBA3NBAWtBH3YQbiAAIAFBgAZqIAJBBHNBAWtBH3YQbiAAIAFBwAdqIAJBBXNBAWtBH3YQbiAAIAFBgAlqIAJBBnNBAWtBH3YQbiAAIAFBwApqIAJBB3NBAWtBH3YQbiADIAAQeCADEKQBIAAgAyAEQQFxEG4gA0HAAWokAAvDAwIGfwN+IwBB8ABrIgEkACABQcCywAAQSSABQThqIAEQXSAAEEICQAJAAkAgAQJ/IAAoAjgiAkEQTARAIAJBAWsQNQwBCyABKQMwIghCAXwiByAIVA0BIAApAzAiCEKAgICAgICAgIB/USAHQn9RcQ0CIAFBOGoiAiAIIAd/pxApIQcgASABKQNoIAdCOoZ8NwNoIAAgAhBhIAAQQkECCyIEECgDQCAERQ0DQQAhAyABIAEpAwgiCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgACkDACAHfSEHIABBCGohBSAAIAFBOGoiAkEBA38gAiADaiAHQv//////////A4M3AwAgB0I6hyEHIANBKEYEfyABIAEpAzBCAYciCDcDMCACIAApAzAgCH0gB3wiBzcDMCAHQj+IpwUgASADaiIGQQhqIAhCAYcgBkEQaikDACIIQjmGQoCAgICAgICAAoOEIgk3AwAgAyAFaikDACAHfCAJfSEHIANBCGohAwwBCwtrEDAgBEEBayEEDAALAAtB4LPAAEEZQcSzwAAQWQALQYC0wABBH0HEs8AAEFkACyAAQQE2AjggAUHwAGokAAvuAQECfyMAQbABayIDJAAgA0EwENABIQMCQAJAA0AgAkEwRgRAIANBMGogAxBwIAFBMGohAUEAIQIDQCACQTBGDQMgAkEwRg0EIAIgA2ogASACai0AADoAACACQQFqIQIMAAsACyACQeAARwRAIAIgA2ogASACai0AADoAACACQQFqIQIMAQsLQeAAQeAAQYCmwAAQOwALIANB8ABqIgEgAxBwIABBOBDQASIAQQE2AjggAEFAa0E4ENABIABB+ABqQQE2AgAgACABEK4BIANBMGoQrgEgA0GwAWokAA8LIAJBMGpB4ABBkKbAABA7AAuPAgEDfyMAQSBrIgUkAEEBIQZB2LvAAEHYu8AAKAIAIgdBAWo2AgACQEGgv8AALQAABEBBpL/AACgCAEEBaiEGDAELQaC/wABBAToAAAtBpL/AACAGNgIAAkACQCAHQQBIIAZBAktyDQAgBSAEOgAYIAUgAzYCFCAFIAI2AhBBzLvAACgCACICQQBIDQBBzLvAACACQQFqIgI2AgBBzLvAAEHUu8AAKAIAIgMEf0HQu8AAKAIAIAUgACABKAIQEQAAIAUgBSkDADcDCCAFQQhqIAMoAhQRAABBzLvAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAucAQEEfyMAQYADayICJAAgAiAAEF4gAkGAAWoiASAAQYABaiIEEF4gAkGAAmoiAyAAEF4gAyAEEBEgAiAEEJoBIAEQfCABIAAQmgEgAhCpASABEKkBIAAgAhCZASAAIAEQESABIAMQmQEgARB8IAEgAxCaASABEKkBIAEQNiAAIAEQmgEgAxC4ASAEIAMQmQEgABCwASACQYADaiQAC7kBAQJ/IwBBIGsiAyQAAkAgASABIAJqIgFLDQAgAEEEaigCACICQQF0IgQgASABIARJGyIBQQggAUEISxshAQJAIAIEQCADQRhqQQE2AgAgAyACNgIUIAMgACgCADYCEAwBCyADQQA2AhALIAMgASADQRBqECYgAygCAARAIANBCGooAgAiAEUNASADKAIEIAAQzwEACyADKAIEIQIgAEEEaiABNgIAIAAgAjYCACADQSBqJAAPCxBlAAusAQECfyMAQYADayIDJAAgA0EIaiABEJABAkAgAgRAIANBCGogAhCuAQwBCyADQQhqEDoLIANByABqIgJB8LTAABBJIANBgAFqIAIQjgEgA0HAAWoiAiADQQhqIgQQkAEgAhBMIAIgARBKIAAgARCQASAAIAQQSiADQYACaiACEJABIAAQViEBIANBwAJqIgIgABCQASACEEMgAhBCIAAgAiABEHIgA0GAA2okAAueAQEFfyMAQYABayICJAAgAkE4ENABIgJBATYCOCACQUBrIgNBOBDQARogAkEBNgJ4IAIgABCuASACIAFBgAFqIgUQSiADIAEQrgEgAyAAQYABaiIGEEoCQCACIAMQWEUNACACIABBQGsQrgEgAiAFEEogAkFAayIAIAFBQGsQrgEgACAGEEogAiAAEFhFDQBBASEECyACQYABaiQAIAQLpwEBA38jAEEwayICJAAgAUEEaiEDIAEoAgRFBEAgASgCACEBIAJBEGoiBEEANgIAIAJCATcDCCACIAJBCGo2AhQgAkEoaiABQRBqKQIANwMAIAJBIGogAUEIaikCADcDACACIAEpAgA3AxggAkEUaiACQRhqEAwaIANBCGogBCgCADYCACADIAIpAwg3AgALIABBhLfAADYCBCAAIAM2AgAgAkEwaiQAC5UBAQJ/AkACQAJAAkACfwJAAkACf0EBIgMgAUEASA0AGiACKAIAIgRFDQEgAigCBCICDQQgAQ0CQQEMAwshA0EAIQEMBgsgAQ0AQQEMAQsgAUEBELkBCyICRQ0BDAILIAQgARCsASICDQELIAAgATYCBEEBIQEMAQsgACACNgIEQQAhAwsgACADNgIAIABBCGogATYCAAvvMwISfwV+IwBBMGsiDiQAIA5BEGogACABEFsgDiAOKAIUIgA2AhwgDiAOKAIQIgg2AhggDkEIaiACIAMQWyAOIA4oAgwiATYCJCAOIA4oAggiAzYCICAOIAQgBRBbIA4gDigCBCIFNgIsIA4gDigCACINNgIoIAAhBCMAQZAVayICJAAjAEGwBmsiCiQAIApBEGpBOBDQARogCkHQAGpBOBDQASEVIApBiAFqQQE2AgAgCkEBNgJIIApBkAFqIgBB2KTAABBJIAAQKiEPIApByAFqIhNBgAIQ0AEaIApB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ABBJAkACQAJAAkADQAJAIAxBMEYEQCAAIAAtAABBH3E6AAAgAEHoAGogABC+ASAEDQFBAEEAQZiBwAAQOwALIAQgDEYNAiAAIAxqIAggDGotAAA6AAAgDEEBaiEMDAELC0EAIQwgCCwAACIJQQBIDQIgCEEwaiEDIARBMCAEQTBLG0EwayEIA0AgDEEwRgRAIABBoAFqIgQgABC+ASMAQYABayIDJAAgARBnIAEgAEHoAGoQwAEgAUFAayIIIAQQwAEgAUGAAWoQygEgARBCIAMgARBPIANBQGsiBCAIEJABIAQQTCAEIAMQWEUEQCABEJIBCyADQYABaiQADAULIAggDEYNAiAAIAxqIAMgDGotAAA6AAAgDEEBaiEMDAALAAsgBCAEQYiBwAAQOwALIAxBMGogBEGogcAAEDsACyMAQcABayIDJAAgAEGgAWoiBBBnIANBOBDQASIDQQE2AjggBCAAQegAahDAASAEEEIgBEGAAWoQygEgA0FAayIIIAQQTwJAAkACQCAIIAMQWkEBRgRAIANBgAFqIgggA0FAayADECMgCBBWDQEMAgsgBBCSAQwCCyADQYABaiIIEEMgCBBCCyAEQUBrIANBgAFqEK4BCyADQcABaiQAIAlBIHEiA0EAIABB4AFqEE0iBEEBRxtBASADIARBAUdyGwRAIABBoAFqEKQBCyABIABBoAFqQcABENEBGgsgAEHgAmokAAJ/QQAhAyMAQcAFayIAJAACQCABEIYBDQAgAEEIaiIIQZCtwAAQSSAAQYAEaiIEQbiuwAAQSSAAQUBrIgkgBBCOASAAQYABaiIEEGcgBCABEHggBCAJEEogAEHAAmoiBCABIAgQvQEgASAEECQNACAAQYAEaiIEIABBwAJqIgEgAEEIahC9ASABIARBwAEQ0QEaIAEQpAEgAEGAAWogARAkRQ0AQQEhAwsgAEHABWokAEF/IANFDQAaIAJBwAFqEKQBIAJBgANqIQhBACEAIwBB4ARrIgEkACABQeAAENABIQECQCAFBEADQCAAQeAARgRAIAEgAS0AAEEfcToAACABQeAAaiABEB9BACEAAkAgDSwAACILQQBOBEAgDUHgAGohAyAFQeAAIAVB4ABLG0HgAGshBANAIABB4ABGBEAgAUHgAWoiACABEB8gCCABQeAAaiAAED8MAwsgACAERwRA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AWoQmQEgACAEEBEgAEGAAWoiASAFQYABahCZASABIAgQESAAIAEQeg0BC0EADAELQQELIQEgAEGAAmokACANQcAHaiQAQX8gAUUNABojAEHgA2siACQAIABBgAFqIgFBwKjAABBJIABBuAFqIgNB+KjAABBJIAAgASADEEsgAEHwAmoiAUGwqcAAEEkgAEGoA2oiA0HoqcAAEEkgAEHwAWoiBCABIAMQSyACQYAGaiIBIAAgBBA/IABB4ANqJAAgAkGACWohByACQYADaiEIIwBBkDRrIgAkACAAQYAoaiIDQcitwAAQSSAAQYguaiIEQYCuwAAQSSAAIAMgBBBLIABBgAFqQTgQ0AEaIABBuAFqQTgQ0AEaIABB8AFqED0CQCACQcABaiIEEIYBRQRAIAIQhgEEQCAHIAEgBBAODAILIABB8ARqIgMQPSADIAEQfSADEEcgAEHwB2oiBRBnIAUgBBB4IAUQRiAAQbAJaiIEED0gBCAIEH0gBBBHIABBsAxqIggQZyAIIAIQeCAIEEYgAEGILmoiASAFEJABIABB8A1qIAEQkAEgASAAQbAIahCQASAAQbAOaiABEJABIAEgCBCQASAAQfAOaiABEJABIAEgAEHwDGoQkAEgAEGwD2ogARCQASAAQfAPaiIBED0gAEHwEmoiBRA9IABB8BVqEFUgASADEH0gBSAEEH0gAEH4G2oiARA9IAEgAxB9IAEQogEgAEH4HmoiARA9IAEgBBB9IAEQogEgAEG4AWogAEGAAWoQUEECayEBA0AgAUEBakEBTQRAIABB8BVqIgEQngEgByABQYgGENEBGgwDBSAAQfAVaiIEEBogAEH4IWoiAyAAQfAPaiAAQfANaiAAQbAOahALIABBgChqIgUgAEHwEmogAEHwDmogAEGwD2oQCyADIAUQAyAEIAMQAQJAAkACQCAAQbgBaiABEFMgAEGAAWogARBTa0EBag4DAQIAAgsgAEGILmoiAyAAQfAPaiAAQfAEaiAAQfANaiAAQbAOahAKIABB+CFqIgQgA0GIBhDRARogAyAAQfASaiAAQbAJaiAAQfAOaiAAQbAPahAKIAQgAxADIABB8BVqIAQQAQwBCyAAQYguaiIDIABB8A9qIABB+BtqIABB8A1qIABBsA5qEAogAEH4IWoiBCADQYgGENEBGiADIABB8BJqIABB+B5qIABB8A5qIABBsA9qEAogBCADEAMgAEHwFWogBBABCyABQQFrIQEMAQsACwALIAcgCCACEA4LIABBkDRqJAAjAEHgH2siCCQAIAhB0BNqIgFByK3AABBJIAhB2BlqIg1BgK7AABBJIAggASANEEsgCEGAAWoiC0GQrcAAEEkgAkGID2oiACAHEGkgCEG4AWoiBSAAEGkjAEGACGsiAyQAIAMgBRCMASADQYACaiIJIAVBgAJqIg8QjAEgA0GABGoiCiAFEIwBIANBgAZqIgRBOBDQARogA0EBNgK4BiADQcAGakE4ENABGiADQfgGakEBNgIAIANBgAdqQTgQ0AEaIANBuAdqQQE2AgAgA0HAB2pBOBDQARogA0H4B2pBATYCACAFEJ0BIAMQISAJIAVBgARqIgwQGCAJEGQgAyAJEHkgAxCwASAJIAwQlgEgCRAhIAkQZCAKIA8QGCAJIAoQeSAJELABIAogDxCWASAKECEgBCAFEJYBIAQgDBAYIAogBBB5IAoQsAEgBCAPEJYBIAQgChAYIAQQZCAFIAMQGCAEIAUQlwEgDCAJEBggDBBkIAQgDBCXASAEELABIwBBgAJrIgYkACAGIAQQXiAGQYABaiIQIARBgAFqIhIQXiAGEC0gEBAtIBAQfCAQEKkBIAYgEBB7IAYQPiAEIAYQESAGEDYgBhCpASASIAYQESAGQYACaiQAIAUgAxCWASAFIAQQGCAPIAkQlgEgDyAEEBggDCAKEJYBIAwgBBAYIAVBBTYCgAYgA0GACGokACAAEJ4BIAAgBRAHIAUgABBtIAAgCBAyIAAgCBAyIAAgBRAHIAhBwAdqIgQgABBpIAQQEyAEIAAQByANIAAgCxAbIAhByA1qIgMgDRBpIAMQngEgASAAEGkgARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gARCeASAAIAMQbSAAIAEQByANIAAgCxAbIAMgDRBtIAMQngEgASAAEG0gASAIEDIgACADEG0gACABEAcgDSAAIAsQGyADIA0QbSANIAMgCxAbIAMgDRBtIAEgABBtIAEgCBAyIAEgCBAyIAMgARAHIAEgABBtIAEQngEgACADEG0gACABEAcgACAEEAcgABCcASAIQeAfaiQAIAcgAEGIBhDRARpBACEAIwBBgAJrIgEkACABEGwCQCAHIAEQegR/IAdBgAFqIAFBgAFqEHoFQQALRQ0AIAdBgAJqEIcBRQ0AIAdBgARqEIcBIQALIAFBgAJqJABBACAADQAaQX8LIAJBkBVqJAAgDkEoahC0ASAOQSBqELQBIA5BGGoQtAEgDkEwaiQAC58BAgJ/BX4gAEEwaiICKQMAIAFBP3GtIgSGIQUgACkDKCIGQTogAWtBP3GtIgiHIQdBBiEBA38gAiAFIAeENwMAIAFBAU0EfyAAIAApAwAgBIZC//////////8DgzcDACAAKQMwQiSHpwUgAUEBayEBIAJBEGsiA0EIaiECIAYgBIZC//////////8DgyEHIAMpAwAiBiAIhyEFDAELCxoLiAECA34DfyMAQRBrIgUkAAN+IAZBOEYEfiAFQRBqJAAgAwUgBSAAIAZqIgcpAwAiAiACQj+HIAGsIgIgAkI/hxAvIAcgBSkDACIEIAN8IgJC//////////8DgzcDACACIARUrSAFQQhqKQMAIANCP4d8fEIGhiACQjqIhCEDIAZBCGohBgwBCwsLigECA38BfiMAQUBqIgIkACACQQhqIgEgABBdIAEQQiACQThqIQFBBiEDQdwCIQACQAJAA0AgA0EATgRAIAEpAwAiBEIAUg0CIAFBCGshASAAQTprIQAgA0EBayEDDAELC0EAIQAMAQsDQCAEUA0BIABBAWohACAEQgJ/IQQMAAsACyACQUBrJAAgAAuHAQEDfyMAQYACayIBJAAgABCwASABIAAQXiABQYABaiICQTgQ0AEaIAFBATYCuAEgAUHAAWpBOBDQARogAUH4AWpBATYCACABIABBgAFqIgMQmgEgARA2IAIgARCZASACIAMQmgEgAyABEJkBIAMgABCaASAAIAIQmQEgABCwASABQYACaiQAC30CBH4BfyABQT9xrSECQTogAWtBP3GtIQRBACEBIAApAwAiBSEDA38gAUEwRgR/IAAgACkDMCAChzcDMCAFQn8gAoZCf4WDpwUgACABaiIGIAMgAocgBkEIaikDACIDIASGQv//////////A4OENwMAIAFBCGohAQwBCwsaC2kBBH8jAEHAAWsiASQAIAEgABCQASABQUBrIgIgABCQASABQYABaiIDIABBQGsiBBCQASABIAQQdyACIAAQdyACEEIgBCACEEogAxBDIAAgAxB3IAEQQiAAEEIgACABEEogAUHAAWokAAuCAQIBfwF+IABB8AAQ0AEhAANAIAJBOEYEQAJAIAAgASkDMCIDQjqHNwM4IAAgA0L//////////wODNwMwIABBQGshAEEAIQIDQCACQTBGDQEgACACakIANwMAIAJBCGohAgwACwALBSAAIAJqIAEgAmopAwA3AwAgAkEIaiECDAELCwtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIAUgAUIgiCIIfiIJIAYgA0IgiCIGfnwiBUIghnwiCjcDACAAIAcgClatIAYgCH4gBSAJVK1CIIYgBUIgiIR8fCABIAR+IAIgA358fDcDCAtqAgF/BX4gASkDCCAAKQMAhSIGQgGGQgGHIQdBACACa6whCAN+IANBOEYEfiAFBSAAIANqIgIgAikDACIEIAaFIAEgA2opAwAgBIUgCIOFIgQgB4U3AwAgBCAFhSEFIANBCGohAwwBCwsaC18CAX8EfkIBIQNBMCECA38gAkF4RgR/IARCAYYgA3ynQQFrBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBCGshAiAFIAaFQgF9QjqHIAODIQMMAQsLC2kBBH8jAEGAAmsiAiQAIAIgARBeIAJBgAFqIgMgARBeIAIQLSADIAIQESAAIAMQmAEgAEGAAmoiBCADEJgBIABBgARqIgUgAxCYASAEIAEQpgEgBSACEKYBIABBBTYCgAYgAkGAAmokAAtiAQJ/IwBBQGoiAiQAIAAQQiACIAAQkAECQCABBEAgACABEK4BDAELIAAQOgtBACEBA0AgA0UEQCAAEExBASABQQFqIAFBAUYiAxshAQwBCwsgACACEEogABAeIAJBQGskAAtnAQJ/IwBBQGoiAyQAAkAgASABQR91IgJqIAJzIgIgACgCOGxBgICAEE4EQCADIAIQOSAAIAMQSgwBCyAAIAIQKRogACAAKAI4IAJsNgI4CyABQQBIBEAgABBDIAAQQgsgA0FAayQAC2cAIABBAXYgAHIiAEECdiAAciIAQQR2IAByIgBBCHYgAHIiAEEQdiAAciIAIABBAXZB1arVqgVxayIAQQJ2QbPmzJkDcSAAQbPmzJkDcWoiAEEEdiAAakGPnrz4AHFBgYKECGxBGHYLYQEDfyMAQYABayIBJAAgASAAEJABIAFBQGsiAkE4ENABGiABQQE2AnggASAAQUBrIgMQdyABEEMgAiABEK4BIAIgAxB3IAMgARCuASADIAAQdyAAIAIQrgEgAUGAAWokAAtVAgJ/AX4jAEHwAGsiASQAIAFBwLLAABBJIAApAwAhAyABQThqIgIgABBdIABBARAsIAIgARBgIAIQQiACQQEQLCAAIAIgA0ICgacQMCABQfAAaiQAC5gBAQZ/IwBBwAFrIgMkACAAIAEQXiAAEC0gA0GIAWoiBkHop8AAEEkjAEFAaiIEJAAgA0EIaiICQTgQ0AEiBUEBNgI4IAVBQGtBOBDQASAFQfgAakEBNgIAIAQgBhCOASAFIAQQrgEQwQEgBEFAayQAIAIQqQEgAhB8IAIQqQEgACABEBEgACACEJoBIAAQtQEgA0HAAWokAAtZAQJ/IwBBQGoiAyQAIABBOBDQASIAQQE2AjgCQCABQQBOBEAgACABEJMBDAELIANBCGoiAkHAssAAEEkgAiABEJMBIAIQQiAAIAIQagsgABBUIANBQGskAAu9CAEKfyMAQYABayIHJAAgB0EIaiIDQcCywAAQSSADQQEQlAECQAJAA0AgAUEwRgRAIANBMGogAykDMEIBhzcDACADQThqIQEDQCACRQ0EIAFCADcDACACQQFrIQIgAUEIaiEBDAALAAsgAUE4Rg0BIAFBOEcEQCABIANqIAEgA2oiBEEIaikDAEI5hkL//////////wODIAQpAwBCAYeENwMAIAVBAWohBSABQQhqIQEMAQsLQQdBB0GEm8AAEDsACyAFQQdB9JrAABA7AAsgA0EBEJQBIANBARAsIAdBQGshBUEAIQIjAEGgCmsiASQAIAFBOBDQASIBQUBrQTgQ0AEhBiABQYABakE4ENABGiABQcABakE4ENABGiABQYACakE4ENABGiABQcACakE4ENABGiABQYADakE4ENABGiABQcADakE4ENABGiABQYAEakE4ENABGiABQcAEakE4ENABGiABQYAFakE4ENABGiABQcAFakE4ENABGiABQYAGakE4ENABGiABQcAGakE4ENABGiABQYAHakE4ENABGiABQcAHakE4ENABGiABQfgHakEBNgIAIAFBuAdqQQE2AgAgAUH4BmpBATYCACABQbgGakEBNgIAIAFB+AVqQQE2AgAgAUG4BWpBATYCACABQfgEakEBNgIAIAFBuARqQQE2AgAgAUH4A2pBATYCACABQbgDakEBNgIAIAFB+AJqQQE2AgAgAUG4AmpBATYCACABQfgBakEBNgIAIAFBuAFqQQE2AgAgAUH4AGpBATYCACABQQE2AjggAUGBCGpB5wAQ0AEaIAFB6AhqIgQgABCQASAEEEIgAUGoCWoiBCADEF0gBBBCIAQQKkEDaiIIQQJ2IgNBAWohCQJAA0AgAiAJRgRAIAEQygEgBiABQegIahCuASABQeAJakE4ENABGiABQQE2ApgKQYB5IQIMAgsgAUGoCWoiBCAEQQQQjwEiChCUASAEEEIgAkHnAEcEQCABQYEIaiACaiAKOgAAIAFBqAlqQQQQLCACQQFqIQIMAQsLQecAQecAQaC0wAAQOwALA0AgAgRAIAFB4AlqIgQgASACaiIGQcAHahCuASAGQYAIaiIGIAQQrgEgBiABQegIahBKIAJBQGshAgwBCwsCQAJAAkACQCAIQZwDSQRAIAFBgQhqIANqLAAAIgJBEE8NASAFIAEgAkEGdGoQkAEgA0EBayICQeYASyEEA0AgAkF/Rg0DIAUQTCAFEEwgBRBMIAUQTCAEDQQgAUGBCGogAmotAAAiA0EQSQRAIAUgASADQQZ0ahBKIAJBAWshAgwBCwsgA0EYdEEYdUEQQeC0wAAQOwALIANB5wBBsLTAABA7AAsgAkEQQcC0wAAQOwALIAUQHiABQaAKaiQADAELIAJB5wBB0LTAABA7AAsgACAFEK4BIAdBgAFqJAALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQE2AgAgA0ICNwIMIANB2LjAADYCCCADQQE2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEGYAC2UBAn8gACAAKAIAIgJBCGoiAzYCACAAIAJBA3ZBPHFqQShqIgIgAUH/AXEgAigCAEEIdHI2AgACQAJAIANFBEAgAEEANgIAIAAgACgCBEEBajYCBAwBCyADQf8DcQ0BCyAAEA8LC1wAIABBOBDQASIAQQE2AjggAEFAa0E4ENABGiAAQfgAakEBNgIAIABBgAFqEFEgAEGAAmpBOBDQARogAEG4AmpBATYCACAAQcACakE4ENABGiAAQfgCakEBNgIAC1sBA38jAEGAAWsiASQAIAAQqQEgASAAEJABIAFBQGsiAiAAQUBrIgMQkAEgARBMIAIQTCABIAIQdyABQQAQMyAAIAEQSiABEEMgARBCIAMgARBKIAFBgAFqJAALYQEBfyMAQYACayIDJAAgABA9IAAgARCZASAAQYABaiIBIAIQmQEgAEGAAmoQtwEgABCpASADIAAQOCADQYABaiICIAEQXiACEC0gAiADEHpFBEAgABCbAQsgA0GAAmokAAtUAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqIAJBCGoQDCACQSBqJAALZwAjAEEwayIBJABBpLvAAC0AAARAIAFBHGpBATYCACABQgI3AgwgAUGQtsAANgIIIAFBATYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQbi2wAAQZgALIAFBMGokAAtiAgF+An8gACkDACEBA34gACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkEoRgR+IAAgACkDMCABfCIBNwMwIAFCJIcFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLGgt8AQV/IwBBQGoiAyQAIANBCGoiAkHAssAAEEkgAiAAKAI4QQFrEDUiBBAoA0AgAUE4RwRAIAAgAWoiBSABIAJqKQMAIAUpAwB9NwMAIAFBCGohAQwBCwsgAEEBIARBAWp0IgI2AjggAkH///8PSgRAIAAQHgsgA0FAayQAC3sBAn8gAEEoaiECA0AgAUGAAkYEQCAAQufMp9DW0Ouzu383AgggAEIANwIAIABBIGpCq7OP/JGjs/DbADcCACAAQRhqQv+kuYjFkdqCm383AgAgAEEQakLy5rvjo6f9p6V/NwIABSABIAJqQQA2AgAgAUEEaiEBDAELCwtUACAAQTgQ0AEiAEEBNgI4IABBQGtBOBDQARogAEH4AGpBATYCACAAQYABakE4ENABGiAAQbgBakEBNgIAIABBwAFqQTgQ0AEaIABB+AFqQQE2AgALWAECfyMAQUBqIgEkAAJAIAAQhgENACABQQEQOSAAQYABaiICIAEQWA0AIAJBABAzIAAgAhBKIAAQHiAAQUBrIgAgAhBKIAAQHiACIAEQrgELIAFBQGskAAtZAQJ/IwBBgAFrIgEkAAJAIAAQigENACABEFEgAEGAAmoiAiABEHoNACACED4gACACEBEgABC1ASAAQYABaiIAIAIQESAAELUBIAIgARCZAQsgAUGAAWokAAtbAgF+An8gACkDACEBA0AgACACaiIDIAFC//////////8DgzcDACABQjqHIQEgAkHgAEYEQCAAIAApA2ggAXw3A2gFIAJBCGohAiADQQhqKQMAIAF8IQEMAQsLC08BAX8gAEE4ENABGgJAA0AgAkEHRwRAIAJBB0YNAiAAIAEpAwA3AwAgAEEIaiEAIAFBCGohASACQQFqIQIMAQsLDwtBB0EHQeSawAAQOwALVAECfyMAQbABayICJAAgATQCOCAANAI4fkL///8PVQRAIAAQHgsgAkEIaiIDIAAgARAFIAJB+ABqIgEgAxBrIAAgARBqIABBAjYCOCACQbABaiQAC1EBAn8jAEFAaiIDJAAgAEE4ENABIgBBATYCOCAAQUBrQTgQ0AEgAEH4AGpBATYCACADIAEQjgEgACADEK4BIAMgAhCOASADEK4BIANBQGskAAvwDAIRfwh+IwBBsAFrIg8kACAANAI4IhIgEn5C////D1YEQCAAEB4LIwBB0AFrIgEkACAPQQhqIgZBCGpB0AAQ0AEaIAFBwAFqIAApAwAiFyAXQj+HIhYgFyAWEC8gBiABKQPAASISQv//////////A4M3AwAgAUHIAWopAwAiFUIGhiASQjqIhCETIBVCOoghGCAAQQhqIgwhDSAAIQlBASEKQQEhBwJAA0AgCkEERgRAIABBGGohCiAAQRBqIQkgAEEoaiEMIAApAzAhF0EHIQUgAUHIAGohCwNAIAVBC0kEQCABQUBrIAVBA3QiCCAAakEwaykDACISIBJCP4cgFyAXQj+HIhYQLyAFQQFqIg1BAXYhByALKQMAIRUgASkDQCESIAkhAiAMIQQgBUEFayIOIQMDQCADIAdJBEAgASACKQMAIhQgFEI/hyAEKQMAIhQgFEI/hxAvIAEpAwAiFCASfCISIBRUrSABQQhqKQMAIBV8fCEVIAJBCGohAiAEQQhrIQQgA0EBaiEDDAELCyAGIAhqIBJCAYYiFCATfCITQv//////////A4M3AwAgAUEwaiAAIA5BA3RqKQMAIhkgGUI/hyAXIBYQLyATIBRU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aikDADcDACACQQhqIQIMAQsLC4QJAg1/Cn4jAEFAaiILJAAgC0EIaiIJQcCywAAQSSMAQZACayICJAAgAEEwENABIQogAkHoAGpB8AAQ0AEaIAJB4AFqQTAQ0AEaIAoQcSACIAEiDCkDACIQQv3/8//P///5AX5C//////////8DgyISNwPYASACQdgAaiASQgAgCSkDACIXIBdCP4ciGBAvIBAgAikDWCIPfCITIA9UrSACQeAAaikDACAQQj+HfHwiEEI6hyABKQMIIg9CP4d8IA8gEEIGhiATQjqIhCITfCIQIBNUrXwhD0EBIQBCACETAkACQANAAkAgAEEHRgRAQQYhB0EAIQhBByEADAELIABBAXYiAUEBaiEGIAggAWshAyABQQN0IgFBCGohBCAHIAFrIQUgAkHIAGogCSAAQQN0Ig1qKQMAIhUgFUI/hyIWIBJCABAvIAJB0ABqKQMAIBAgECATfCIRVq0gDyAUfHx8IBEgAikDSHwiDyARVK18IRAgAEEBaiEBA0AgACAGTQRAIAJB2AFqIA1qIA9C/f/z/8////kBfkL//////////wODIhE3AwAgAkE4aiARQgAgFyAYEC8gAkEoaiARQgAgFSAWEC8gAkHoAGogAEEEdGoiACACQTBqKQMAIhE3AwggACACKQMoIhU3AwAgDyACKQM4IhZ8Ig8gFlStIAJBQGspAwAgEHx8IhBCOocgDCABQQN0aikDACIWQj+HfCAWIBBCBoYgD0I6iIQiD3wiECAPVK18IQ8gEyAVfCITIBVUrSARIBR8fCEUIAdBCGohByAIQQFqIQggASEADAMLIANBB08NAyACQRhqIAQgCWopAwAgBSAJaikDAH0iESARQj+HIAJB2AFqIg4gBWopAwAgBCAOaikDAH0iESARQj+HEC8gAikDGCIRIA98Ig8gEVStIAJBIGopAwAgEHx8IRAgBkEBaiEGIARBCGohBCAFQQhrIQUgA0EBayEDDAALAAsLA0ACQAJAIABBDUcEQCAHIABBAXYiBmshAyAIIAZBA3QiAWshBCABQQhqIQUgDyAUfCAQIBN8Ig8gEFStfCEQIABBAWohAQNAIAZBBUsNAyADQQdPDQIgAkEIaiAFIAlqKQMAIAQgCWpBMGopAwB9IhIgEkI/hyACIARqQYgCaikDACACQdgBaiAFaikDAH0iEiASQj+HEC8gAikDCCISIA98Ig8gElStIAJBEGopAwAgEHx8IRAgBkEBaiEGIARBCGshBCADQQFrIQMgBUEIaiEFDAALAAsgCiAQQv//////////A4M3AzAgAkGQAmokAAwECyADQQdBpJzAABA7AAsgAEEDdCAKakE4ayAPQv//////////A4M3AwAgEEI6hyAMIAFBA3RqKQMAIhJCP4d8IBIgEEIGhiAPQjqIhCIPfCIQIA9UrXwhDyAUIABBBHQgAmpBCGoiAEEIaikDAH0gEyAAKQMAIhJUrX0hFCAIQQhqIQggB0EBaiEHIBMgEn0hEyABIQAMAAsACyADQQdBlJzAABA7AAsgC0FAayQACy4BAX8jAEGAAWsiASQAIAAQRSABEFEgACABEJkBIABBgAFqELYBIAFBgAFqJAALMwAgACABEJYBIABBgAJqIAFBgAJqEJYBIABBgARqIAFBgARqEJYBIAAgASgCgAY2AoAGCygAIAAgASACEHIgAEFAayABQUBrIAIQciAAQYABaiABQYABaiACEHILLQAgACABIAIQjQEgAEGAAWogAUGAAWogAhCNASAAQYACaiABQYACaiACEI0BCycBAn8jAEFAaiICJAAgAkEIaiIDIAEQvgEgACADEI4BIAJBQGskAAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCyUAIAAgASACEDAgAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLJwAgACAAKAIEQQFxIAFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECyMAA0AgAgRAIAAgAS0AABA8IAJBAWshAiABQQFqIQEMAQsLCywAIAAQiwEgACABEJYBIABBgAJqIAIQlgEgAEGABGogAxCWASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEJABIAEQHiABEFcgAUFAayQACykAIAAgARBgIAAgACgCOCABKAI4aiIBNgI4IAFB////D0oEQCAAEB4LCyUAIAAgARCuASAAQUBrIAFBQGsQrgEgAEGAAWogAUGAAWoQrgELKAEBfyMAQYACayICJAAgAiABEIwBIAIQKyAAIAIQlwEgAkGAAmokAAscAQF/IAAgARBYBH8gAEFAayABQUBrEFgFQQALCycBAX8jAEGAAWsiAiQAIAIg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DCELDQALCyAMpyICQeMASwRAIABBAmsiACAGQQlqaiAMpyICIAJB//8DcUHkAG4iAkHkAGxrQf//A3FBAXRB6LjAAGovAAA7AAALAkAgAkEKTwRAIABBAmsiACAGQQlqaiACQQF0Qei4wABqLwAAOwAADAELIABBAWsiACAGQQlqaiACQTBqOgAACwJ/IAZBCWogAGohCEErQYCAxAAgASgCACIDQQFxIgIbIQQgAkEnIABrIglqIQJBlLjAAEEAIANBBHEbIQUCQAJAIAEoAghFBEBBASEAIAEgBCAFEFINAQwCCwJAAkACQAJAIAIgAUEMaigCACIDSQRAIAEtAABBCHENBEEAIQAgAyACayICIQNBASABLQAgIgcgB0EDRhtBA3FBAWsOAgECAwtBASEAIAEgBCAFEFINBAwFC0EAIQMgAiEADAELIAJBAXYhACACQQFqQQF2IQMLIABBAWohACABQRxqKAIAIQcgASgCBCECIAEoAhghCgJAA0AgAEEBayIARQ0BIAogAiAHKAIQEQQARQ0AC0EBDAQLQQEhACACQYCAxABGDQEgASAEIAUQUg0BIAEoAhggCCAJIAEoAhwoAgwRBQANASABKAIcIQQgASgCGCEBQQAhAAJ/A0AgAyAAIANGDQEaIABBAWohACABIAIgBCgCEBEEAEUNAAsgAEEBawsgA0khAAwBCyABKAIEIQcgAUEwNgIEIAEtACAhCkEBIQAgAUEBOgAgIAEgBCAFEFINAEEAIQAgAyACayICIQMCQAJAAkBBASABLQAgIgQgBEEDRhtBA3FBAWsOAgABAgtBACEDIAIhAAwBCyACQQF2IQAgAkEBakEBdiEDCyAAQQFqIQAgAUEcaigCACECIAEoAgQhBCABKAIYIQUCQANAIABBAWsiAEUNASAFIAQgAigCEBEEAEUNAAtBAQwDC0EBIQAgBEGAgMQARg0AIAEoAhggCCAJIAEoAhwoAgwRBQANACABKAIcIQAgASgCGCEFQQAhAgJAA0AgAiADRg0BIAJBAWohAiAFIAQgACgCEBEEAEUNAAtBASEAIAJBAWsgA0kNAQsgASAKOgAgIAEgBzYCBEEADAILIAAMAQsgASgCGCAIIAkgAUEcaigCACgCDBEFAAsgBkEwaiQACwsAIAAQNiAAELABCysCAX8BfkIBIQIDQCAAIAFq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AAANAEHgs8AAC8EHYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAAAAAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93ALAZEAASAAAADAIAAA0AAACwGRAAEgAAABgCAAAmAAAAsBkQABIAAAAYAgAAIwAAALAZEAASAAAAHgIAABcAAACwGRAAEgAAAB4CAAAUAAAAqqr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAAADAAAABAAAAAQAAAAEAAAABQAAAAYAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAoAAOsaEAAVAAAAABsQAA4AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMgGxAAGAAAAEkBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc0gbEAAcAAAARgIAAB8AAABIGxAAHAAAAEcCAAAeAAAABwAAAAwAAAAEAAAACAAAAAMAAAAIAAAABAAAAAkAAAAKAAAAEAAAAAQAAAALAAAADAAAAAMAAAAIAAAABAAAAA0AAAAOAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA6BsQABEAAADMGxAAHAAAAAUCAAAFAAAAEAAAAAAAAAABAAAAEQAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAkHBAAIAAAAEQcEAASAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5yc3JhbmdlIGVuZCBpbmRleCAAAABxHRAAEAAAADAdEAAiAAAAUh0QAB8AAABJAAAABQB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42MS4wIChmZTViMTNkNjggMjAyMi0wNS0xOCkGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgxICgwNjJhYTVmNzAp`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ejrE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeLeb128", ()=>decodeLeb128);
parcelHelpers.export(exports, "decodeTime", ()=>decodeTime);
var _candid = require("@dfinity/candid");
const decodeLeb128 = (buf)=>{
    return (0, _candid.lebDecode)(new (0, _candid.PipeArrayBuffer)(buf));
};
const decodeTime = (buf)=>{
    const decoded = decodeLeb128(buf);
    // nanoseconds to milliseconds
    return new Date(Number(decoded) / 1000000);
};

},{"@dfinity/candid":"aRzWd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f6cMq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hash_to_ristretto255 = exports.hashToRistretto255 = exports.RistrettoPoint = exports.encodeToCurve = exports.hashToCurve = exports.edwardsToMontgomeryPriv = exports.edwardsToMontgomery = exports.edwardsToMontgomeryPub = exports.x25519 = exports.ed25519ph = exports.ed25519ctx = exports.ed25519 = exports.ED25519_TORSION_SUBGROUP = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const sha512_1 = require("e1d8ae49624bb2b6");
const utils_1 = require("b762bec9164f6cb8");
const edwards_js_1 = require("8204d40c15abc71d");
const montgomery_js_1 = require("efe43c4320fa6488");
const modular_js_1 = require("e20cbf22035770bd");
const utils_js_1 = require("bbee43b360c61430");
const hash_to_curve_js_1 = require("59425f280fcf046f");
/**
 * ed25519 Twisted Edwards curve with following addons:
 * - X25519 ECDH
 * - Ristretto cofactor elimination
 * - Elligator hash-to-group / point indistinguishability
 */ const ED25519_P = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
// √(-1) aka √(a) aka 2^((p-1)/4)
const ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _5n = BigInt(5);
// prettier-ignore
const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
function ed25519_pow_2_252_3(x) {
    const P = ED25519_P;
    const x2 = x * x % P;
    const b2 = x2 * x % P; // x^3, 11
    const b4 = (0, modular_js_1.pow2)(b2, _2n, P) * b2 % P; // x^15, 1111
    const b5 = (0, modular_js_1.pow2)(b4, _1n, P) * x % P; // x^31
    const b10 = (0, modular_js_1.pow2)(b5, _5n, P) * b5 % P;
    const b20 = (0, modular_js_1.pow2)(b10, _10n, P) * b10 % P;
    const b40 = (0, modular_js_1.pow2)(b20, _20n, P) * b20 % P;
    const b80 = (0, modular_js_1.pow2)(b40, _40n, P) * b40 % P;
    const b160 = (0, modular_js_1.pow2)(b80, _80n, P) * b80 % P;
    const b240 = (0, modular_js_1.pow2)(b160, _80n, P) * b80 % P;
    const b250 = (0, modular_js_1.pow2)(b240, _10n, P) * b10 % P;
    const pow_p_5_8 = (0, modular_js_1.pow2)(b250, _2n, P) * x % P;
    // ^ To pow to (p+3)/8, multiply it by x.
    return {
        pow_p_5_8,
        b2
    };
}
function adjustScalarBytes(bytes) {
    // Section 5: For X25519, in order to decode 32 random bytes as an integer scalar,
    // set the three least significant bits of the first byte
    bytes[0] &= 248; // 0b1111_1000
    // and the most significant bit of the last to zero,
    bytes[31] &= 127; // 0b0111_1111
    // set the second most significant bit of the last byte to 1
    bytes[31] |= 64; // 0b0100_0000
    return bytes;
}
// sqrt(u/v)
function uvRatio(u, v) {
    const P = ED25519_P;
    const v3 = (0, modular_js_1.mod)(v * v * v, P); // v³
    const v7 = (0, modular_js_1.mod)(v3 * v3 * v, P); // v⁷
    // (p+3)/8 and (p-5)/8
    const pow = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
    let x = (0, modular_js_1.mod)(u * v3 * pow, P); // (uv³)(uv⁷)^(p-5)/8
    const vx2 = (0, modular_js_1.mod)(v * x * x, P); // vx²
    const root1 = x; // First root candidate
    const root2 = (0, modular_js_1.mod)(x * ED25519_SQRT_M1, P); // Second root candidate
    const useRoot1 = vx2 === u; // If vx² = u (mod p), x is a square root
    const useRoot2 = vx2 === (0, modular_js_1.mod)(-u, P); // If vx² = -u, set x <-- x * 2^((p-1)/4)
    const noRoot = vx2 === (0, modular_js_1.mod)(-u * ED25519_SQRT_M1, P); // There is no valid root, vx² = -u√(-1)
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2; // We return root2 anyway, for const-time
    if ((0, modular_js_1.isNegativeLE)(x, P)) x = (0, modular_js_1.mod)(-x, P);
    return {
        isValid: useRoot1 || useRoot2,
        value: x
    };
}
// Just in case
exports.ED25519_TORSION_SUBGROUP = [
    "0100000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
    "0000000000000000000000000000000000000000000000000000000000000080",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
    "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
    "0000000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
];
const Fp = (0, modular_js_1.Field)(ED25519_P, undefined, true);
const ed25519Defaults = {
    // Param: a
    a: BigInt(-1),
    // d is equal to -121665/121666 over finite field.
    // Negative number is P - number, and division is invert(number, P)
    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
    // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
    Fp,
    // Subgroup order: how many points curve has
    // 2n**252n + 27742317777372353535851937790883648493n;
    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
    // Cofactor
    h: BigInt(8),
    // Base point (x, y) aka generator point
    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
    hash: sha512_1.sha512,
    randomBytes: utils_1.randomBytes,
    adjustScalarBytes,
    // dom2
    // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
    // Constant-time, u/√v
    uvRatio
};
exports.ed25519 = (0, edwards_js_1.twistedEdwards)(ed25519Defaults);
function ed25519_domain(data, ctx, phflag) {
    if (ctx.length > 255) throw new Error("Context is too big");
    return (0, utils_1.concatBytes)((0, utils_1.utf8ToBytes)("SigEd25519 no Ed25519 collisions"), new Uint8Array([
        phflag ? 1 : 0,
        ctx.length
    ]), ctx, data);
}
exports.ed25519ctx = (0, edwards_js_1.twistedEdwards)({
    ...ed25519Defaults,
    domain: ed25519_domain
});
exports.ed25519ph = (0, edwards_js_1.twistedEdwards)({
    ...ed25519Defaults,
    domain: ed25519_domain,
    prehash: sha512_1.sha512
});
exports.x25519 = (()=>(0, montgomery_js_1.montgomery)({
        P: ED25519_P,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (x)=>{
            const P = ED25519_P;
            // x^(p-2) aka x^(2^255-21)
            const { pow_p_5_8, b2 } = ed25519_pow_2_252_3(x);
            return (0, modular_js_1.mod)((0, modular_js_1.pow2)(pow_p_5_8, BigInt(3), P) * b2, P);
        },
        adjustScalarBytes,
        randomBytes: utils_1.randomBytes
    }))();
/**
 * Converts ed25519 public key to x25519 public key. Uses formula:
 * * `(u, v) = ((1+y)/(1-y), sqrt(-486664)*u/x)`
 * * `(x, y) = (sqrt(-486664)*u/v, (u-1)/(u+1))`
 * @example
 *   const someonesPub = ed25519.getPublicKey(ed25519.utils.randomPrivateKey());
 *   const aPriv = x25519.utils.randomPrivateKey();
 *   x25519.getSharedSecret(aPriv, edwardsToMontgomeryPub(someonesPub))
 */ function edwardsToMontgomeryPub(edwardsPub) {
    const { y } = exports.ed25519.ExtendedPoint.fromHex(edwardsPub);
    const _1n = BigInt(1);
    return Fp.toBytes(Fp.create((_1n + y) * Fp.inv(_1n - y)));
}
exports.edwardsToMontgomeryPub = edwardsToMontgomeryPub;
exports.edwardsToMontgomery = edwardsToMontgomeryPub; // deprecated
/**
 * Converts ed25519 secret key to x25519 secret key.
 * @example
 *   const someonesPub = x25519.getPublicKey(x25519.utils.randomPrivateKey());
 *   const aPriv = ed25519.utils.randomPrivateKey();
 *   x25519.getSharedSecret(edwardsToMontgomeryPriv(aPriv), someonesPub)
 */ function edwardsToMontgomeryPriv(edwardsPriv) {
    const hashed = ed25519Defaults.hash(edwardsPriv.subarray(0, 32));
    return ed25519Defaults.adjustScalarBytes(hashed).subarray(0, 32);
}
exports.edwardsToMontgomeryPriv = edwardsToMontgomeryPriv;
// Hash To Curve Elligator2 Map (NOTE: different from ristretto255 elligator)
// NOTE: very important part is usage of FpSqrtEven for ELL2_C1_EDWARDS, since
// SageMath returns different root first and everything falls apart
const ELL2_C1 = (Fp.ORDER + BigInt(3)) / BigInt(8); // 1. c1 = (q + 3) / 8       # Integer arithmetic
const ELL2_C2 = Fp.pow(_2n, ELL2_C1); // 2. c2 = 2^c1
const ELL2_C3 = Fp.sqrt(Fp.neg(Fp.ONE)); // 3. c3 = sqrt(-1)
const ELL2_C4 = (Fp.ORDER - BigInt(5)) / BigInt(8); // 4. c4 = (q - 5) / 8       # Integer arithmetic
const ELL2_J = BigInt(486662);
// prettier-ignore
function map_to_curve_elligator2_curve25519(u) {
    let tv1 = Fp.sqr(u); //  1.  tv1 = u^2
    tv1 = Fp.mul(tv1, _2n); //  2.  tv1 = 2 * tv1
    let xd = Fp.add(tv1, Fp.ONE); //  3.   xd = tv1 + 1         # Nonzero: -1 is square (mod p), tv1 is not
    let x1n = Fp.neg(ELL2_J); //  4.  x1n = -J              # x1 = x1n / xd = -J / (1 + 2 * u^2)
    let tv2 = Fp.sqr(xd); //  5.  tv2 = xd^2
    let gxd = Fp.mul(tv2, xd); //  6.  gxd = tv2 * xd        # gxd = xd^3
    let gx1 = Fp.mul(tv1, ELL2_J); //  7.  gx1 = J * tv1         # x1n + J * xd
    gx1 = Fp.mul(gx1, x1n); //  8.  gx1 = gx1 * x1n       # x1n^2 + J * x1n * xd
    gx1 = Fp.add(gx1, tv2); //  9.  gx1 = gx1 + tv2       # x1n^2 + J * x1n * xd + xd^2
    gx1 = Fp.mul(gx1, x1n); //  10. gx1 = gx1 * x1n       # x1n^3 + J * x1n^2 * xd + x1n * xd^2
    let tv3 = Fp.sqr(gxd); //  11. tv3 = gxd^2
    tv2 = Fp.sqr(tv3); //  12. tv2 = tv3^2           # gxd^4
    tv3 = Fp.mul(tv3, gxd); //  13. tv3 = tv3 * gxd       # gxd^3
    tv3 = Fp.mul(tv3, gx1); //  14. tv3 = tv3 * gx1       # gx1 * gxd^3
    tv2 = Fp.mul(tv2, tv3); //  15. tv2 = tv2 * tv3       # gx1 * gxd^7
    let y11 = Fp.pow(tv2, ELL2_C4); //  16. y11 = tv2^c4        # (gx1 * gxd^7)^((p - 5) / 8)
    y11 = Fp.mul(y11, tv3); //  17. y11 = y11 * tv3       # gx1*gxd^3*(gx1*gxd^7)^((p-5)/8)
    let y12 = Fp.mul(y11, ELL2_C3); //  18. y12 = y11 * c3
    tv2 = Fp.sqr(y11); //  19. tv2 = y11^2
    tv2 = Fp.mul(tv2, gxd); //  20. tv2 = tv2 * gxd
    let e1 = Fp.eql(tv2, gx1); //  21.  e1 = tv2 == gx1
    let y1 = Fp.cmov(y12, y11, e1); //  22.  y1 = CMOV(y12, y11, e1)  # If g(x1) is square, this is its sqrt
    let x2n = Fp.mul(x1n, tv1); //  23. x2n = x1n * tv1       # x2 = x2n / xd = 2 * u^2 * x1n / xd
    let y21 = Fp.mul(y11, u); //  24. y21 = y11 * u
    y21 = Fp.mul(y21, ELL2_C2); //  25. y21 = y21 * c2
    let y22 = Fp.mul(y21, ELL2_C3); //  26. y22 = y21 * c3
    let gx2 = Fp.mul(gx1, tv1); //  27. gx2 = gx1 * tv1       # g(x2) = gx2 / gxd = 2 * u^2 * g(x1)
    tv2 = Fp.sqr(y21); //  28. tv2 = y21^2
    tv2 = Fp.mul(tv2, gxd); //  29. tv2 = tv2 * gxd
    let e2 = Fp.eql(tv2, gx2); //  30.  e2 = tv2 == gx2
    let y2 = Fp.cmov(y22, y21, e2); //  31.  y2 = CMOV(y22, y21, e2)  # If g(x2) is square, this is its sqrt
    tv2 = Fp.sqr(y1); //  32. tv2 = y1^2
    tv2 = Fp.mul(tv2, gxd); //  33. tv2 = tv2 * gxd
    let e3 = Fp.eql(tv2, gx1); //  34.  e3 = tv2 == gx1
    let xn = Fp.cmov(x2n, x1n, e3); //  35.  xn = CMOV(x2n, x1n, e3)  # If e3, x = x1, else x = x2
    let y = Fp.cmov(y2, y1, e3); //  36.   y = CMOV(y2, y1, e3)    # If e3, y = y1, else y = y2
    let e4 = Fp.isOdd(y); //  37.  e4 = sgn0(y) == 1        # Fix sign of y
    y = Fp.cmov(y, Fp.neg(y), e3 !== e4); //  38.   y = CMOV(y, -y, e3 XOR e4)
    return {
        xMn: xn,
        xMd: xd,
        yMn: y,
        yMd: _1n
    }; //  39. return (xn, xd, y, 1)
}
const ELL2_C1_EDWARDS = (0, modular_js_1.FpSqrtEven)(Fp, Fp.neg(BigInt(486664))); // sgn0(c1) MUST equal 0
function map_to_curve_elligator2_edwards25519(u) {
    const { xMn, xMd, yMn, yMd } = map_to_curve_elligator2_curve25519(u); //  1.  (xMn, xMd, yMn, yMd) =
    // map_to_curve_elligator2_curve25519(u)
    let xn = Fp.mul(xMn, yMd); //  2.  xn = xMn * yMd
    xn = Fp.mul(xn, ELL2_C1_EDWARDS); //  3.  xn = xn * c1
    let xd = Fp.mul(xMd, yMn); //  4.  xd = xMd * yMn    # xn / xd = c1 * xM / yM
    let yn = Fp.sub(xMn, xMd); //  5.  yn = xMn - xMd
    let yd = Fp.add(xMn, xMd); //  6.  yd = xMn + xMd    # (n / d - 1) / (n / d + 1) = (n - d) / (n + d)
    let tv1 = Fp.mul(xd, yd); //  7. tv1 = xd * yd
    let e = Fp.eql(tv1, Fp.ZERO); //  8.   e = tv1 == 0
    xn = Fp.cmov(xn, Fp.ZERO, e); //  9.  xn = CMOV(xn, 0, e)
    xd = Fp.cmov(xd, Fp.ONE, e); //  10. xd = CMOV(xd, 1, e)
    yn = Fp.cmov(yn, Fp.ONE, e); //  11. yn = CMOV(yn, 1, e)
    yd = Fp.cmov(yd, Fp.ONE, e); //  12. yd = CMOV(yd, 1, e)
    const inv = Fp.invertBatch([
        xd,
        yd
    ]); // batch division
    return {
        x: Fp.mul(xn, inv[0]),
        y: Fp.mul(yn, inv[1])
    }; //  13. return (xn, xd, yn, yd)
}
const htf = /* @__PURE__ */ (()=>(0, hash_to_curve_js_1.createHasher)(exports.ed25519.ExtendedPoint, (scalars)=>map_to_curve_elligator2_edwards25519(scalars[0]), {
        DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
        encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
        p: Fp.ORDER,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: sha512_1.sha512
    }))();
exports.hashToCurve = (()=>htf.hashToCurve)();
exports.encodeToCurve = (()=>htf.encodeToCurve)();
function assertRstPoint(other) {
    if (!(other instanceof RistPoint)) throw new Error("RistrettoPoint expected");
}
// √(-1) aka √(a) aka 2^((p-1)/4)
const SQRT_M1 = ED25519_SQRT_M1;
// √(ad - 1)
const SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
// 1 / √(a-d)
const INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
// 1-d²
const ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
// (d-1)²
const D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
// Calculates 1/√(number)
const invertSqrt = (number)=>uvRatio(_1n, number);
const MAX_255B = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const bytes255ToNumberLE = (bytes)=>exports.ed25519.CURVE.Fp.create((0, utils_js_1.bytesToNumberLE)(bytes) & MAX_255B);
// Computes Elligator map for Ristretto
// https://ristretto.group/formulas/elligator.html
function calcElligatorRistrettoMap(r0) {
    const { d } = exports.ed25519.CURVE;
    const P = exports.ed25519.CURVE.Fp.ORDER;
    const mod = exports.ed25519.CURVE.Fp.create;
    const r = mod(SQRT_M1 * r0 * r0); // 1
    const Ns = mod((r + _1n) * ONE_MINUS_D_SQ); // 2
    let c = BigInt(-1); // 3
    const D = mod((c - d * r) * mod(r + d)); // 4
    let { isValid: Ns_D_is_sq, value: s } = uvRatio(Ns, D); // 5
    let s_ = mod(s * r0); // 6
    if (!(0, modular_js_1.isNegativeLE)(s_, P)) s_ = mod(-s_);
    if (!Ns_D_is_sq) s = s_; // 7
    if (!Ns_D_is_sq) c = r; // 8
    const Nt = mod(c * (r - _1n) * D_MINUS_ONE_SQ - D); // 9
    const s2 = s * s;
    const W0 = mod((s + s) * D); // 10
    const W1 = mod(Nt * SQRT_AD_MINUS_ONE); // 11
    const W2 = mod(_1n - s2); // 12
    const W3 = mod(_1n + s2); // 13
    return new exports.ed25519.ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
}
/**
 * Each ed25519/ExtendedPoint has 8 different equivalent points. This can be
 * a source of bugs for protocols like ring signatures. Ristretto was created to solve this.
 * Ristretto point operates in X:Y:Z:T extended coordinates like ExtendedPoint,
 * but it should work in its own namespace: do not combine those two.
 * https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-ristretto255-decaf448
 */ class RistPoint {
    // Private property to discourage combining ExtendedPoint + RistrettoPoint
    // Always use Ristretto encoding/decoding instead.
    constructor(ep){
        this.ep = ep;
    }
    static fromAffine(ap) {
        return new RistPoint(exports.ed25519.ExtendedPoint.fromAffine(ap));
    }
    /**
     * Takes uniform output of 64-byte hash function like sha512 and converts it to `RistrettoPoint`.
     * The hash-to-group operation applies Elligator twice and adds the results.
     * **Note:** this is one-way map, there is no conversion from point to hash.
     * https://ristretto.group/formulas/elligator.html
     * @param hex 64-byte output of a hash function
     */ static hashToCurve(hex) {
        hex = (0, utils_js_1.ensureBytes)("ristrettoHash", hex, 64);
        const r1 = bytes255ToNumberLE(hex.slice(0, 32));
        const R1 = calcElligatorRistrettoMap(r1);
        const r2 = bytes255ToNumberLE(hex.slice(32, 64));
        const R2 = calcElligatorRistrettoMap(r2);
        return new RistPoint(R1.add(R2));
    }
    /**
     * Converts ristretto-encoded string to ristretto point.
     * https://ristretto.group/formulas/decoding.html
     * @param hex Ristretto-encoded 32 bytes. Not every 32-byte string is valid ristretto encoding
     */ static fromHex(hex) {
        hex = (0, utils_js_1.ensureBytes)("ristrettoHex", hex, 32);
        const { a, d } = exports.ed25519.CURVE;
        const P = exports.ed25519.CURVE.Fp.ORDER;
        const mod = exports.ed25519.CURVE.Fp.create;
        const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
        const s = bytes255ToNumberLE(hex);
        // 1. Check that s_bytes is the canonical encoding of a field element, or else abort.
        // 3. Check that s is non-negative, or else abort
        if (!(0, utils_js_1.equalBytes)((0, utils_js_1.numberToBytesLE)(s, 32), hex) || (0, modular_js_1.isNegativeLE)(s, P)) throw new Error(emsg);
        const s2 = mod(s * s);
        const u1 = mod(_1n + a * s2); // 4 (a is -1)
        const u2 = mod(_1n - a * s2); // 5
        const u1_2 = mod(u1 * u1);
        const u2_2 = mod(u2 * u2);
        const v = mod(a * d * u1_2 - u2_2); // 6
        const { isValid, value: I } = invertSqrt(mod(v * u2_2)); // 7
        const Dx = mod(I * u2); // 8
        const Dy = mod(I * Dx * v); // 9
        let x = mod((s + s) * Dx); // 10
        if ((0, modular_js_1.isNegativeLE)(x, P)) x = mod(-x); // 10
        const y = mod(u1 * Dy); // 11
        const t = mod(x * y); // 12
        if (!isValid || (0, modular_js_1.isNegativeLE)(t, P) || y === _0n) throw new Error(emsg);
        return new RistPoint(new exports.ed25519.ExtendedPoint(x, y, _1n, t));
    }
    /**
     * Encodes ristretto point to Uint8Array.
     * https://ristretto.group/formulas/encoding.html
     */ toRawBytes() {
        let { ex: x, ey: y, ez: z, et: t } = this.ep;
        const P = exports.ed25519.CURVE.Fp.ORDER;
        const mod = exports.ed25519.CURVE.Fp.create;
        const u1 = mod(mod(z + y) * mod(z - y)); // 1
        const u2 = mod(x * y); // 2
        // Square root always exists
        const u2sq = mod(u2 * u2);
        const { value: invsqrt } = invertSqrt(mod(u1 * u2sq)); // 3
        const D1 = mod(invsqrt * u1); // 4
        const D2 = mod(invsqrt * u2); // 5
        const zInv = mod(D1 * D2 * t); // 6
        let D; // 7
        if ((0, modular_js_1.isNegativeLE)(t * zInv, P)) {
            let _x = mod(y * SQRT_M1);
            let _y = mod(x * SQRT_M1);
            x = _x;
            y = _y;
            D = mod(D1 * INVSQRT_A_MINUS_D);
        } else D = D2; // 8
        if ((0, modular_js_1.isNegativeLE)(x * zInv, P)) y = mod(-y); // 9
        let s = mod((z - y) * D); // 10 (check footer's note, no sqrt(-a))
        if ((0, modular_js_1.isNegativeLE)(s, P)) s = mod(-s);
        return (0, utils_js_1.numberToBytesLE)(s, 32); // 11
    }
    toHex() {
        return (0, utils_js_1.bytesToHex)(this.toRawBytes());
    }
    toString() {
        return this.toHex();
    }
    // Compare one point to another.
    equals(other) {
        assertRstPoint(other);
        const { ex: X1, ey: Y1 } = this.ep;
        const { ex: X2, ey: Y2 } = other.ep;
        const mod = exports.ed25519.CURVE.Fp.create;
        // (x1 * y2 == y1 * x2) | (y1 * y2 == x1 * x2)
        const one = mod(X1 * Y2) === mod(Y1 * X2);
        const two = mod(Y1 * Y2) === mod(X1 * X2);
        return one || two;
    }
    add(other) {
        assertRstPoint(other);
        return new RistPoint(this.ep.add(other.ep));
    }
    subtract(other) {
        assertRstPoint(other);
        return new RistPoint(this.ep.subtract(other.ep));
    }
    multiply(scalar) {
        return new RistPoint(this.ep.multiply(scalar));
    }
    multiplyUnsafe(scalar) {
        return new RistPoint(this.ep.multiplyUnsafe(scalar));
    }
    double() {
        return new RistPoint(this.ep.double());
    }
    negate() {
        return new RistPoint(this.ep.negate());
    }
}
exports.RistrettoPoint = (()=>{
    if (!RistPoint.BASE) RistPoint.BASE = new RistPoint(exports.ed25519.ExtendedPoint.BASE);
    if (!RistPoint.ZERO) RistPoint.ZERO = new RistPoint(exports.ed25519.ExtendedPoint.ZERO);
    return RistPoint;
})();
// Hashing to ristretto255. https://www.rfc-editor.org/rfc/rfc9380#appendix-B
const hashToRistretto255 = (msg, options)=>{
    const d = options.DST;
    const DST = typeof d === "string" ? (0, utils_1.utf8ToBytes)(d) : d;
    const uniform_bytes = (0, hash_to_curve_js_1.expand_message_xmd)(msg, DST, 64, sha512_1.sha512);
    const P = RistPoint.hashToCurve(uniform_bytes);
    return P;
};
exports.hashToRistretto255 = hashToRistretto255;
exports.hash_to_ristretto255 = exports.hashToRistretto255; // legacy

},{"e1d8ae49624bb2b6":"jlH7E","b762bec9164f6cb8":"2ehgp","8204d40c15abc71d":"hYY6w","efe43c4320fa6488":"kbKg4","e20cbf22035770bd":"cB5Z5","bbee43b360c61430":"cBmkf","59425f280fcf046f":"2yuJj"}],"jlH7E":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha384 = exports.sha512_256 = exports.sha512_224 = exports.sha512 = exports.SHA512 = void 0;
const _sha2_js_1 = require("de63277d4b9ab571");
const _u64_js_1 = require("eda9289ed6a1f5f2");
const utils_js_1 = require("f18acd6c798648cc");
// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (()=>_u64_js_1.default.split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
    ].map((n)=>BigInt(n))))();
// Temporary buffer, not used to store anything between runs
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends _sha2_js_1.SHA2 {
    constructor(){
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 1779033703;
        this.Al = -205731576;
        this.Bh = -1150833019;
        this.Bl = -2067093701;
        this.Ch = 1013904242;
        this.Cl = -23791573;
        this.Dh = -1521486534;
        this.Dl = 1595750129;
        this.Eh = 1359893119;
        this.El = -1377402159;
        this.Fh = -1694144372;
        this.Fl = 725511199;
        this.Gh = 528734635;
        this.Gl = -79577749;
        this.Hh = 1541459225;
        this.Hl = 327033209;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = _u64_js_1.default.rotrSH(W15h, W15l, 1) ^ _u64_js_1.default.rotrSH(W15h, W15l, 8) ^ _u64_js_1.default.shrSH(W15h, W15l, 7);
            const s0l = _u64_js_1.default.rotrSL(W15h, W15l, 1) ^ _u64_js_1.default.rotrSL(W15h, W15l, 8) ^ _u64_js_1.default.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = _u64_js_1.default.rotrSH(W2h, W2l, 19) ^ _u64_js_1.default.rotrBH(W2h, W2l, 61) ^ _u64_js_1.default.shrSH(W2h, W2l, 6);
            const s1l = _u64_js_1.default.rotrSL(W2h, W2l, 19) ^ _u64_js_1.default.rotrBL(W2h, W2l, 61) ^ _u64_js_1.default.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = _u64_js_1.default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = _u64_js_1.default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = _u64_js_1.default.rotrSH(Eh, El, 14) ^ _u64_js_1.default.rotrSH(Eh, El, 18) ^ _u64_js_1.default.rotrBH(Eh, El, 41);
            const sigma1l = _u64_js_1.default.rotrSL(Eh, El, 14) ^ _u64_js_1.default.rotrSL(Eh, El, 18) ^ _u64_js_1.default.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = _u64_js_1.default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = _u64_js_1.default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = _u64_js_1.default.rotrSH(Ah, Al, 28) ^ _u64_js_1.default.rotrBH(Ah, Al, 34) ^ _u64_js_1.default.rotrBH(Ah, Al, 39);
            const sigma0l = _u64_js_1.default.rotrSL(Ah, Al, 28) ^ _u64_js_1.default.rotrBL(Ah, Al, 34) ^ _u64_js_1.default.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = _u64_js_1.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = _u64_js_1.default.add3L(T1l, sigma0l, MAJl);
            Ah = _u64_js_1.default.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = _u64_js_1.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = _u64_js_1.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = _u64_js_1.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = _u64_js_1.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = _u64_js_1.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = _u64_js_1.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = _u64_js_1.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = _u64_js_1.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
    }
    destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
exports.SHA512 = SHA512;
class SHA512_224 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -1942145080;
        this.Al = 424955298;
        this.Bh = 1944164710;
        this.Bl = -1982016298;
        this.Ch = 502970286;
        this.Cl = 855612546;
        this.Dh = 1738396948;
        this.Dl = 1479516111;
        this.Eh = 258812777;
        this.El = 2077511080;
        this.Fh = 2011393907;
        this.Fl = 79989058;
        this.Gh = 1067287976;
        this.Gl = 1780299464;
        this.Hh = 286451373;
        this.Hl = -1848208735;
        this.outputLen = 28;
    }
}
class SHA512_256 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 573645204;
        this.Al = -64227540;
        this.Bh = -1621794909;
        this.Bl = -934517566;
        this.Ch = 596883563;
        this.Cl = 1867755857;
        this.Dh = -1774684391;
        this.Dl = 1497426621;
        this.Eh = -1775747358;
        this.El = -1467023389;
        this.Fh = -1101128155;
        this.Fl = 1401305490;
        this.Gh = 721525244;
        this.Gl = 746961066;
        this.Hh = 246885852;
        this.Hl = -2117784414;
        this.outputLen = 32;
    }
}
class SHA384 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -876896931;
        this.Al = -1056596264;
        this.Bh = 1654270250;
        this.Bl = 914150663;
        this.Ch = -1856437926;
        this.Cl = 812702999;
        this.Dh = 355462360;
        this.Dl = -150054599;
        this.Eh = 1731405415;
        this.El = -4191439;
        this.Fh = -1900787065;
        this.Fl = 1750603025;
        this.Gh = -619958771;
        this.Gl = 1694076839;
        this.Hh = 1203062813;
        this.Hl = -1090891868;
        this.outputLen = 48;
    }
}
exports.sha512 = (0, utils_js_1.wrapConstructor)(()=>new SHA512());
exports.sha512_224 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_224());
exports.sha512_256 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_256());
exports.sha384 = (0, utils_js_1.wrapConstructor)(()=>new SHA384());

},{"de63277d4b9ab571":"6HKeB","eda9289ed6a1f5f2":"8TbxJ","f18acd6c798648cc":"2ehgp"}],"8TbxJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.add = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = exports.split = exports.fromBig = void 0;
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
exports.fromBig = fromBig;
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
exports.split = split;
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
exports.shrSH = shrSH;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
exports.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
exports.rotrSH = rotrSH;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
exports.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
exports.rotrBH = rotrBH;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
exports.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
exports.rotr32H = rotr32H;
const rotr32L = (h, _l)=>h;
exports.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
exports.rotlSH = rotlSH;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
exports.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
exports.rotlBH = rotlBH;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
exports.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
exports.add = add;
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
exports.add3L = add3L;
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
exports.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
exports.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
exports.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
exports.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
exports.add5H = add5H;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
exports.default = u64;

},{}],"hYY6w":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.twistedEdwards = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Twisted Edwards curve. The formula is: ax² + y² = 1 + dx²y²
const modular_js_1 = require("9dc554786fdce90a");
const ut = require("e8b53bd0c0c12029");
const utils_js_1 = require("e8b53bd0c0c12029");
const curve_js_1 = require("1f0d1b1cd4a4a1c6");
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _8n = BigInt(8);
// verification rule is either zip215 or rfc8032 / nist186-5. Consult fromHex:
const VERIFY_DEFAULT = {
    zip215: true
};
function validateOpts(curve) {
    const opts = (0, curve_js_1.validateBasic)(curve);
    ut.validateObject(curve, {
        hash: "function",
        a: "bigint",
        d: "bigint",
        randomBytes: "function"
    }, {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function"
    });
    // Set defaults
    return Object.freeze({
        ...opts
    });
}
// It is not generic twisted curve for now, but ed25519/ed448 generic implementation
function twistedEdwards(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER, prehash: prehash, hash: cHash, randomBytes, nByteLength, h: cofactor } = CURVE;
    const MASK = _2n << BigInt(nByteLength * 8) - _1n;
    const modP = Fp.create; // Function overrides
    // sqrt(u/v)
    const uvRatio = CURVE.uvRatio || ((u, v)=>{
        try {
            return {
                isValid: true,
                value: Fp.sqrt(u * Fp.inv(v))
            };
        } catch (e) {
            return {
                isValid: false,
                value: _0n
            };
        }
    });
    const adjustScalarBytes = CURVE.adjustScalarBytes || ((bytes)=>bytes); // NOOP
    const domain = CURVE.domain || ((data, ctx, phflag)=>{
        if (ctx.length || phflag) throw new Error("Contexts/pre-hash are not supported");
        return data;
    }); // NOOP
    const inBig = (n)=>typeof n === "bigint" && _0n < n; // n in [1..]
    const inRange = (n, max)=>inBig(n) && inBig(max) && n < max; // n in [1..max-1]
    const in0MaskRange = (n)=>n === _0n || inRange(n, MASK); // n in [0..MASK-1]
    function assertInRange(n, max) {
        // n in [1..max-1]
        if (inRange(n, max)) return n;
        throw new Error(`Expected valid scalar < ${max}, got ${typeof n} ${n}`);
    }
    function assertGE0(n) {
        // n in [0..CURVE_ORDER-1]
        return n === _0n ? n : assertInRange(n, CURVE_ORDER); // GE = prime subgroup, not full group
    }
    const pointPrecomputes = new Map();
    function isPoint(other) {
        if (!(other instanceof Point)) throw new Error("ExtendedPoint expected");
    }
    // Extended Point works in extended coordinates: (x, y, z, t) ∋ (x=x/z, y=y/z, t=xy).
    // https://en.wikipedia.org/wiki/Twisted_Edwards_curve#Extended_coordinates
    class Point {
        constructor(ex, ey, ez, et){
            this.ex = ex;
            this.ey = ey;
            this.ez = ez;
            this.et = et;
            if (!in0MaskRange(ex)) throw new Error("x required");
            if (!in0MaskRange(ey)) throw new Error("y required");
            if (!in0MaskRange(ez)) throw new Error("z required");
            if (!in0MaskRange(et)) throw new Error("t required");
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        static fromAffine(p) {
            if (p instanceof Point) throw new Error("extended point not allowed");
            const { x, y } = p || {};
            if (!in0MaskRange(x) || !in0MaskRange(y)) throw new Error("invalid affine point");
            return new Point(x, y, _1n, modP(x * y));
        }
        static normalizeZ(points) {
            const toInv = Fp.invertBatch(points.map((p)=>p.ez));
            return points.map((p, i)=>p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            this._WINDOW_SIZE = windowSize;
            pointPrecomputes.delete(this);
        }
        // Not required for fromHex(), which always creates valid points.
        // Could be useful for fromAffine().
        assertValidity() {
            const { a, d } = CURVE;
            if (this.is0()) throw new Error("bad point: ZERO"); // TODO: optimize, with vars below?
            // Equation in affine coordinates: ax² + y² = 1 + dx²y²
            // Equation in projective coordinates (X/Z, Y/Z, Z):  (aX² + Y²)Z² = Z⁴ + dX²Y²
            const { ex: X, ey: Y, ez: Z, et: T } = this;
            const X2 = modP(X * X); // X²
            const Y2 = modP(Y * Y); // Y²
            const Z2 = modP(Z * Z); // Z²
            const Z4 = modP(Z2 * Z2); // Z⁴
            const aX2 = modP(X2 * a); // aX²
            const left = modP(Z2 * modP(aX2 + Y2)); // (aX² + Y²)Z²
            const right = modP(Z4 + modP(d * modP(X2 * Y2))); // Z⁴ + dX²Y²
            if (left !== right) throw new Error("bad point: equation left != right (1)");
            // In Extended coordinates we also have T, which is x*y=T/Z: check X*Y == Z*T
            const XY = modP(X * Y);
            const ZT = modP(Z * T);
            if (XY !== ZT) throw new Error("bad point: equation left != right (2)");
        }
        // Compare one point to another.
        equals(other) {
            isPoint(other);
            const { ex: X1, ey: Y1, ez: Z1 } = this;
            const { ex: X2, ey: Y2, ez: Z2 } = other;
            const X1Z2 = modP(X1 * Z2);
            const X2Z1 = modP(X2 * Z1);
            const Y1Z2 = modP(Y1 * Z2);
            const Y2Z1 = modP(Y2 * Z1);
            return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        negate() {
            // Flips point sign to a negative one (-x, y in affine coords)
            return new Point(modP(-this.ex), this.ey, this.ez, modP(-this.et));
        }
        // Fast algo for doubling Extended Point.
        // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
        // Cost: 4M + 4S + 1*a + 6add + 1*2.
        double() {
            const { a } = CURVE;
            const { ex: X1, ey: Y1, ez: Z1 } = this;
            const A = modP(X1 * X1); // A = X12
            const B = modP(Y1 * Y1); // B = Y12
            const C = modP(_2n * modP(Z1 * Z1)); // C = 2*Z12
            const D = modP(a * A); // D = a*A
            const x1y1 = X1 + Y1;
            const E = modP(modP(x1y1 * x1y1) - A - B); // E = (X1+Y1)2-A-B
            const G = D + B; // G = D+B
            const F = G - C; // F = G-C
            const H = D - B; // H = D-B
            const X3 = modP(E * F); // X3 = E*F
            const Y3 = modP(G * H); // Y3 = G*H
            const T3 = modP(E * H); // T3 = E*H
            const Z3 = modP(F * G); // Z3 = F*G
            return new Point(X3, Y3, Z3, T3);
        }
        // Fast algo for adding 2 Extended Points.
        // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
        // Cost: 9M + 1*a + 1*d + 7add.
        add(other) {
            isPoint(other);
            const { a, d } = CURVE;
            const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
            const { ex: X2, ey: Y2, ez: Z2, et: T2 } = other;
            // Faster algo for adding 2 Extended Points when curve's a=-1.
            // http://hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html#addition-add-2008-hwcd-4
            // Cost: 8M + 8add + 2*2.
            // Note: It does not check whether the `other` point is valid.
            if (a === BigInt(-1)) {
                const A = modP((Y1 - X1) * (Y2 + X2));
                const B = modP((Y1 + X1) * (Y2 - X2));
                const F = modP(B - A);
                if (F === _0n) return this.double(); // Same point. Tests say it doesn't affect timing
                const C = modP(Z1 * _2n * T2);
                const D = modP(T1 * _2n * Z2);
                const E = D + C;
                const G = B + A;
                const H = D - C;
                const X3 = modP(E * F);
                const Y3 = modP(G * H);
                const T3 = modP(E * H);
                const Z3 = modP(F * G);
                return new Point(X3, Y3, Z3, T3);
            }
            const A = modP(X1 * X2); // A = X1*X2
            const B = modP(Y1 * Y2); // B = Y1*Y2
            const C = modP(T1 * d * T2); // C = T1*d*T2
            const D = modP(Z1 * Z2); // D = Z1*Z2
            const E = modP((X1 + Y1) * (X2 + Y2) - A - B); // E = (X1+Y1)*(X2+Y2)-A-B
            const F = D - C; // F = D-C
            const G = D + C; // G = D+C
            const H = modP(B - a * A); // H = B-a*A
            const X3 = modP(E * F); // X3 = E*F
            const Y3 = modP(G * H); // Y3 = G*H
            const T3 = modP(E * H); // T3 = E*H
            const Z3 = modP(F * G); // Z3 = F*G
            return new Point(X3, Y3, Z3, T3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, pointPrecomputes, n, Point.normalizeZ);
        }
        // Constant-time multiplication.
        multiply(scalar) {
            const { p, f } = this.wNAF(assertInRange(scalar, CURVE_ORDER));
            return Point.normalizeZ([
                p,
                f
            ])[0];
        }
        // Non-constant-time multiplication. Uses double-and-add algorithm.
        // It's faster, but should only be used when you don't care about
        // an exposed private key e.g. sig verification.
        // Does NOT allow scalars higher than CURVE.n.
        multiplyUnsafe(scalar) {
            let n = assertGE0(scalar); // 0 <= scalar < CURVE.n
            if (n === _0n) return I;
            if (this.equals(I) || n === _1n) return this;
            if (this.equals(G)) return this.wNAF(n).p;
            return wnaf.unsafeLadder(this, n);
        }
        // Checks if point is of small order.
        // If you add something to small order point, you will have "dirty"
        // point with torsion component.
        // Multiplies point by cofactor and checks if the result is 0.
        isSmallOrder() {
            return this.multiplyUnsafe(cofactor).is0();
        }
        // Multiplies point by curve order and checks if the result is 0.
        // Returns `false` is the point is dirty.
        isTorsionFree() {
            return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
        }
        // Converts Extended point to default (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        toAffine(iz) {
            const { ex: x, ey: y, ez: z } = this;
            const is0 = this.is0();
            if (iz == null) iz = is0 ? _8n : Fp.inv(z); // 8 was chosen arbitrarily
            const ax = modP(x * iz);
            const ay = modP(y * iz);
            const zz = modP(z * iz);
            if (is0) return {
                x: _0n,
                y: _1n
            };
            if (zz !== _1n) throw new Error("invZ was invalid");
            return {
                x: ax,
                y: ay
            };
        }
        clearCofactor() {
            const { h: cofactor } = CURVE;
            if (cofactor === _1n) return this;
            return this.multiplyUnsafe(cofactor);
        }
        // Converts hash string or Uint8Array to Point.
        // Uses algo from RFC8032 5.1.3.
        static fromHex(hex, zip215 = false) {
            const { d, a } = CURVE;
            const len = Fp.BYTES;
            hex = (0, utils_js_1.ensureBytes)("pointHex", hex, len); // copy hex to a new array
            const normed = hex.slice(); // copy again, we'll manipulate it
            const lastByte = hex[len - 1]; // select last byte
            normed[len - 1] = lastByte & -129; // clear last bit
            const y = ut.bytesToNumberLE(normed);
            if (y === _0n) ;
            else // RFC8032 prohibits >= p, but ZIP215 doesn't
            if (zip215) assertInRange(y, MASK); // zip215=true [1..P-1] (2^255-19-1 for ed25519)
            else assertInRange(y, Fp.ORDER); // zip215=false [1..MASK-1] (2^256-1 for ed25519)
            // Ed25519: x² = (y²-1)/(dy²+1) mod p. Ed448: x² = (y²-1)/(dy²-1) mod p. Generic case:
            // ax²+y²=1+dx²y² => y²-1=dx²y²-ax² => y²-1=x²(dy²-a) => x²=(y²-1)/(dy²-a)
            const y2 = modP(y * y); // denominator is always non-0 mod p.
            const u = modP(y2 - _1n); // u = y² - 1
            const v = modP(d * y2 - a); // v = d y² + 1.
            let { isValid, value: x } = uvRatio(u, v); // √(u/v)
            if (!isValid) throw new Error("Point.fromHex: invalid y coordinate");
            const isXOdd = (x & _1n) === _1n; // There are 2 square roots. Use x_0 bit to select proper
            const isLastByteOdd = (lastByte & 0x80) !== 0; // x_0, last bit
            if (!zip215 && x === _0n && isLastByteOdd) // if x=0 and x_0 = 1, fail
            throw new Error("Point.fromHex: x=0 and x_0=1");
            if (isLastByteOdd !== isXOdd) x = modP(-x); // if x_0 != x mod 2, set x = p-x
            return Point.fromAffine({
                x,
                y
            });
        }
        static fromPrivateKey(privKey) {
            return getExtendedPublicKey(privKey).point;
        }
        toRawBytes() {
            const { x, y } = this.toAffine();
            const bytes = ut.numberToBytesLE(y, Fp.BYTES); // each y has 2 x values (x, -y)
            bytes[bytes.length - 1] |= x & _1n ? 0x80 : 0; // when compressing, it's enough to store y
            return bytes; // and use the last byte to encode sign of x
        }
        toHex() {
            return ut.bytesToHex(this.toRawBytes()); // Same as toRawBytes, but returns string.
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, _1n, modP(CURVE.Gx * CURVE.Gy));
    Point.ZERO = new Point(_0n, _1n, _1n, _0n); // 0, 1, 1, 0
    const { BASE: G, ZERO: I } = Point;
    const wnaf = (0, curve_js_1.wNAF)(Point, nByteLength * 8);
    function modN(a) {
        return (0, modular_js_1.mod)(a, CURVE_ORDER);
    }
    // Little-endian SHA512 with modulo n
    function modN_LE(hash) {
        return modN(ut.bytesToNumberLE(hash));
    }
    /** Convenience method that creates public key and other stuff. RFC8032 5.1.5 */ function getExtendedPublicKey(key) {
        const len = nByteLength;
        key = (0, utils_js_1.ensureBytes)("private key", key, len);
        // Hash private key with curve's hash function to produce uniformingly random input
        // Check byte lengths: ensure(64, h(ensure(32, key)))
        const hashed = (0, utils_js_1.ensureBytes)("hashed private key", cHash(key), 2 * len);
        const head = adjustScalarBytes(hashed.slice(0, len)); // clear first half bits, produce FE
        const prefix = hashed.slice(len, 2 * len); // second half is called key prefix (5.1.6)
        const scalar = modN_LE(head); // The actual private scalar
        const point = G.multiply(scalar); // Point on Edwards curve aka public key
        const pointBytes = point.toRawBytes(); // Uint8Array representation
        return {
            head,
            prefix,
            scalar,
            point,
            pointBytes
        };
    }
    // Calculates EdDSA pub key. RFC8032 5.1.5. Privkey is hashed. Use first half with 3 bits cleared
    function getPublicKey(privKey) {
        return getExtendedPublicKey(privKey).pointBytes;
    }
    // int('LE', SHA512(dom2(F, C) || msgs)) mod N
    function hashDomainToScalar(context = new Uint8Array(), ...msgs) {
        const msg = ut.concatBytes(...msgs);
        return modN_LE(cHash(domain(msg, (0, utils_js_1.ensureBytes)("context", context), !!prehash)));
    }
    /** Signs message with privateKey. RFC8032 5.1.6 */ function sign(msg, privKey, options = {}) {
        msg = (0, utils_js_1.ensureBytes)("message", msg);
        if (prehash) msg = prehash(msg); // for ed25519ph etc.
        const { prefix, scalar, pointBytes } = getExtendedPublicKey(privKey);
        const r = hashDomainToScalar(options.context, prefix, msg); // r = dom2(F, C) || prefix || PH(M)
        const R = G.multiply(r).toRawBytes(); // R = rG
        const k = hashDomainToScalar(options.context, R, pointBytes, msg); // R || A || PH(M)
        const s = modN(r + k * scalar); // S = (r + k * s) mod L
        assertGE0(s); // 0 <= s < l
        const res = ut.concatBytes(R, ut.numberToBytesLE(s, Fp.BYTES));
        return (0, utils_js_1.ensureBytes)("result", res, nByteLength * 2); // 64-byte signature
    }
    const verifyOpts = VERIFY_DEFAULT;
    function verify(sig, msg, publicKey, options = verifyOpts) {
        const { context, zip215 } = options;
        const len = Fp.BYTES; // Verifies EdDSA signature against message and public key. RFC8032 5.1.7.
        sig = (0, utils_js_1.ensureBytes)("signature", sig, 2 * len); // An extended group equation is checked.
        msg = (0, utils_js_1.ensureBytes)("message", msg);
        if (prehash) msg = prehash(msg); // for ed25519ph, etc
        const s = ut.bytesToNumberLE(sig.slice(len, 2 * len));
        // zip215: true is good for consensus-critical apps and allows points < 2^256
        // zip215: false follows RFC8032 / NIST186-5 and restricts points to CURVE.p
        let A, R, SB;
        try {
            A = Point.fromHex(publicKey, zip215);
            R = Point.fromHex(sig.slice(0, len), zip215);
            SB = G.multiplyUnsafe(s); // 0 <= s < l is done inside
        } catch (error) {
            return false;
        }
        if (!zip215 && A.isSmallOrder()) return false;
        const k = hashDomainToScalar(context, R.toRawBytes(), A.toRawBytes(), msg);
        const RkA = R.add(A.multiplyUnsafe(k));
        // [8][S]B = [8]R + [8][k]A'
        return RkA.subtract(SB).clearCofactor().equals(Point.ZERO);
    }
    G._setWindowSize(8); // Enable precomputes. Slows down first publicKey computation by 20ms.
    const utils = {
        getExtendedPublicKey,
        // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
        randomPrivateKey: ()=>randomBytes(Fp.BYTES),
        /**
         * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
         * values. This slows down first getPublicKey() by milliseconds (see Speed section),
         * but allows to speed-up subsequent getPublicKey() calls up to 20x.
         * @param windowSize 2, 4, 8, 16
         */ precompute (windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3));
            return point;
        }
    };
    return {
        CURVE,
        getPublicKey,
        sign,
        verify,
        ExtendedPoint: Point,
        utils
    };
}
exports.twistedEdwards = twistedEdwards;

},{"9dc554786fdce90a":"cB5Z5","e8b53bd0c0c12029":"cBmkf","1f0d1b1cd4a4a1c6":"etkeY"}],"cB5Z5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapHashToField = exports.getMinHashLength = exports.getFieldBytesLength = exports.hashToPrivateScalar = exports.FpSqrtEven = exports.FpSqrtOdd = exports.Field = exports.nLength = exports.FpIsSquare = exports.FpDiv = exports.FpInvertBatch = exports.FpPow = exports.validateField = exports.isNegativeLE = exports.FpSqrt = exports.tonelliShanks = exports.invert = exports.pow2 = exports.pow = exports.mod = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Utilities for modular arithmetics and finite fields
const utils_js_1 = require("d8ac4b6c79c60614");
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3);
// prettier-ignore
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
// prettier-ignore
const _9n = BigInt(9), _16n = BigInt(16);
// Calculates a modulo b
function mod(a, b) {
    const result = a % b;
    return result >= _0n ? result : b + result;
}
exports.mod = mod;
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */ // TODO: use field version && remove
function pow(num, power, modulo) {
    if (modulo <= _0n || power < _0n) throw new Error("Expected power/modulo > 0");
    if (modulo === _1n) return _0n;
    let res = _1n;
    while(power > _0n){
        if (power & _1n) res = res * num % modulo;
        num = num * num % modulo;
        power >>= _1n;
    }
    return res;
}
exports.pow = pow;
// Does x ^ (2 ^ power) mod p. pow2(30, 4) == 30 ^ (2 ^ 4)
function pow2(x, power, modulo) {
    let res = x;
    while(power-- > _0n){
        res *= res;
        res %= modulo;
    }
    return res;
}
exports.pow2 = pow2;
// Inverses number over modulo
function invert(number, modulo) {
    if (number === _0n || modulo <= _0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    // Euclidean GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while(a !== _0n){
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error("invert: does not exist");
    return mod(x, modulo);
}
exports.invert = invert;
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * Will start an infinite loop if field order P is not prime.
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */ function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - _1n) / _2n;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for(Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++);
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for(Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++);
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + _1n) / _2n;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE)) throw new Error("Cannot find square root");
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while(!Fp.eql(b, Fp.ONE)){
            if (Fp.eql(b, Fp.ZERO)) return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for(let t2 = Fp.sqr(b); m < r; m++){
                if (Fp.eql(t2, Fp.ONE)) break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, _1n << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
exports.tonelliShanks = tonelliShanks;
function FpSqrt(P) {
    // NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
    // For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, _2n);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, _2n), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
            return root;
        };
    }
    // P ≡ 9 (mod 16)
    _9n;
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
exports.FpSqrt = FpSqrt;
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo)=>(mod(num, modulo) & _1n) === _1n;
exports.isNegativeLE = isNegativeLE;
// prettier-ignore
const FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
];
function validateField(field) {
    const initial = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS.reduce((map, val)=>{
        map[val] = "function";
        return map;
    }, initial);
    return (0, utils_js_1.validateObject)(field, opts);
}
exports.validateField = validateField;
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */ function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < _0n) throw new Error("Expected power > 0");
    if (power === _0n) return f.ONE;
    if (power === _1n) return num;
    let p = f.ONE;
    let d = num;
    while(power > _0n){
        if (power & _1n) p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
    }
    return p;
}
exports.FpPow = FpPow;
/**
 * Efficiently invert an array of Field elements.
 * `inv(0)` will return `undefined` here: make sure to throw an error.
 */ function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (f.is0(num)) return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i)=>{
        if (f.is0(num)) return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
exports.FpInvertBatch = FpInvertBatch;
function FpDiv(f, lhs, rhs) {
    return f.mul(lhs, typeof rhs === "bigint" ? invert(rhs, f.ORDER) : f.inv(rhs));
}
exports.FpDiv = FpDiv;
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(f) {
    const legendreConst = (f.ORDER - _1n) / _2n; // Integer arithmetic
    return (x)=>{
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
    };
}
exports.FpIsSquare = FpIsSquare;
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return {
        nBitLength: _nBitLength,
        nByteLength
    };
}
exports.nLength = nLength;
/**
 * Initializes a finite field over prime. **Non-primes are not supported.**
 * Do not init in loop: slow. Very fragile: always run a benchmark on a change.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */ function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= _0n) throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0, utils_js_1.bitMask)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num)=>mod(num, ORDER),
        isValid: (num)=>{
            if (typeof num !== "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
            return _0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num)=>num === _0n,
        isOdd: (num)=>(num & _1n) === _1n,
        neg: (num)=>mod(-num, ORDER),
        eql: (lhs, rhs)=>lhs === rhs,
        sqr: (num)=>mod(num * num, ORDER),
        add: (lhs, rhs)=>mod(lhs + rhs, ORDER),
        sub: (lhs, rhs)=>mod(lhs - rhs, ORDER),
        mul: (lhs, rhs)=>mod(lhs * rhs, ORDER),
        pow: (num, power)=>FpPow(f, num, power),
        div: (lhs, rhs)=>mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num)=>num * num,
        addN: (lhs, rhs)=>lhs + rhs,
        subN: (lhs, rhs)=>lhs - rhs,
        mulN: (lhs, rhs)=>lhs * rhs,
        inv: (num)=>invert(num, ORDER),
        sqrt: redef.sqrt || ((n)=>sqrtP(f, n)),
        invertBatch: (lst)=>FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c)=>c ? b : a,
        toBytes: (num)=>isLE ? (0, utils_js_1.numberToBytesLE)(num, BYTES) : (0, utils_js_1.numberToBytesBE)(num, BYTES),
        fromBytes: (bytes)=>{
            if (bytes.length !== BYTES) throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
            return isLE ? (0, utils_js_1.bytesToNumberLE)(bytes) : (0, utils_js_1.bytesToNumberBE)(bytes);
        }
    });
    return Object.freeze(f);
}
exports.Field = Field;
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd) throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
exports.FpSqrtOdd = FpSqrtOdd;
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd) throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
exports.FpSqrtEven = FpSqrtEven;
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use mapKeyToField instead
 */ function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = (0, utils_js_1.ensureBytes)("privateHash", hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024) throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
    const num = isLE ? (0, utils_js_1.bytesToNumberLE)(hash) : (0, utils_js_1.bytesToNumberBE)(hash);
    return mod(num, groupOrder - _1n) + _1n;
}
exports.hashToPrivateScalar = hashToPrivateScalar;
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */ function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint") throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
exports.getFieldBytesLength = getFieldBytesLength;
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */ function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
exports.getMinHashLength = getMinHashLength;
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */ function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024) throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE ? (0, utils_js_1.bytesToNumberBE)(key) : (0, utils_js_1.bytesToNumberLE)(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = mod(num, fieldOrder - _1n) + _1n;
    return isLE ? (0, utils_js_1.numberToBytesLE)(reduced, fieldLen) : (0, utils_js_1.numberToBytesBE)(reduced, fieldLen);
}
exports.mapHashToField = mapHashToField;

},{"d8ac4b6c79c60614":"cBmkf"}],"cBmkf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateObject = exports.createHmacDrbg = exports.bitMask = exports.bitSet = exports.bitGet = exports.bitLen = exports.utf8ToBytes = exports.equalBytes = exports.concatBytes = exports.ensureBytes = exports.numberToVarBytesBE = exports.numberToBytesLE = exports.numberToBytesBE = exports.bytesToNumberLE = exports.bytesToNumberBE = exports.hexToBytes = exports.hexToNumber = exports.numberToHexUnpadded = exports.bytesToHex = exports.isBytes = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
exports.isBytes = isBytes;
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, "0"));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    if (!isBytes(bytes)) throw new Error("Uint8Array expected");
    // pre-caching improves the speed 6x
    let hex = "";
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
exports.numberToHexUnpadded = numberToHexUnpadded;
function hexToNumber(hex) {
    if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
    // Big Endian
    return BigInt(hex === "" ? "0" : `0x${hex}`);
}
exports.hexToNumber = hexToNumber;
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9) return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F) return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f) return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// BE: Big Endian, LE: Little Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
exports.bytesToNumberBE = bytesToNumberBE;
function bytesToNumberLE(bytes) {
    if (!isBytes(bytes)) throw new Error("Uint8Array expected");
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
exports.bytesToNumberLE = bytesToNumberLE;
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, "0"));
}
exports.numberToBytesBE = numberToBytesBE;
function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
}
exports.numberToBytesLE = numberToBytesLE;
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
exports.numberToVarBytesBE = numberToVarBytesBE;
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */ function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") try {
        res = hexToBytes(hex);
    } catch (e) {
        throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
    }
    else if (isBytes(hex)) // Uint8Array.from() instead of hash.slice() because node.js Buffer
    // is instance of Uint8Array, and its slice() creates **mutable** copy
    res = Uint8Array.from(hex);
    else throw new Error(`${title} must be hex string or Uint8Array`);
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength) throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
exports.ensureBytes = ensureBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        if (!isBytes(a)) throw new Error("Uint8Array expected");
        sum += a.length;
    }
    let res = new Uint8Array(sum);
    let pad = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
exports.concatBytes = concatBytes;
// Compares 2 u8a-s in kinda constant time
function equalBytes(a, b) {
    if (a.length !== b.length) return false;
    let diff = 0;
    for(let i = 0; i < a.length; i++)diff |= a[i] ^ b[i];
    return diff === 0;
}
exports.equalBytes = equalBytes;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== "string") throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */ function bitLen(n) {
    let len;
    for(len = 0; n > _0n; n >>= _1n, len += 1);
    return len;
}
exports.bitLen = bitLen;
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */ function bitGet(n, pos) {
    return n >> BigInt(pos) & _1n;
}
exports.bitGet = bitGet;
/**
 * Sets single bit at position.
 */ const bitSet = (n, pos, value)=>{
    return n | (value ? _1n : _0n) << BigInt(pos);
};
exports.bitSet = bitSet;
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */ const bitMask = (n)=>(_2n << BigInt(n - 1)) - _1n;
exports.bitMask = bitMask;
// DRBG
const u8n = (data)=>new Uint8Array(data); // creates Uint8Array
const u8fr = (arr)=>Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */ function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function") throw new Error("hmacFn must be a function");
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = ()=>{
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b)=>hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n())=>{
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([
            0x00
        ]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0) return;
        k = h(u8fr([
            0x01
        ]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = ()=>{
        // HMAC-DRBG generate() function
        if (i++ >= 1000) throw new Error("drbg: tried 1000 values");
        let len = 0;
        const out = [];
        while(len < qByteLen){
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return concatBytes(...out);
    };
    const genUntil = (seed, pred)=>{
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while(!(res = pred(gen())))reseed();
        reset();
        return res;
    };
    return genUntil;
}
exports.createHmacDrbg = createHmacDrbg;
// Validating curves and fields
const validatorFns = {
    bigint: (val)=>typeof val === "bigint",
    function: (val)=>typeof val === "function",
    boolean: (val)=>typeof val === "boolean",
    string: (val)=>typeof val === "string",
    stringOrUint8Array: (val)=>typeof val === "string" || isBytes(val),
    isSafeInteger: (val)=>Number.isSafeInteger(val),
    array: (val)=>Array.isArray(val),
    field: (val, object)=>object.Fp.isValid(val),
    hash: (val)=>typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional)=>{
        const checkVal = validatorFns[type];
        if (typeof checkVal !== "function") throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined) return;
        if (!checkVal(val, object)) throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
    };
    for (const [fieldName, type] of Object.entries(validators))checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))checkField(fieldName, type, true);
    return object;
}
exports.validateObject = validateObject; // validate type tests
 // const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
 // const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
 // // Should fail type-check
 // const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
 // const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
 // const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
 // const z4 = validateObject(o, { a: 'boolean', z: 'bug' });

},{}],"etkeY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateBasic = exports.wNAF = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Abelian group utilities
const modular_js_1 = require("72c8f755a25fddc3");
const utils_js_1 = require("f90fcba6ea31de55");
const _0n = BigInt(0);
const _1n = BigInt(1);
// Elliptic curve multiplication of Point by scalar. Fragile.
// Scalars should always be less than curve order: this should be checked inside of a curve itself.
// Creates precomputation tables for fast multiplication:
// - private scalar is split by fixed size windows of W bits
// - every window point is collected from window's table & added to accumulator
// - since windows are different, same point inside tables won't be accessed more than once per calc
// - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
// - +1 window is neccessary for wNAF
// - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
// TODO: Research returning 2d JS array of windows, instead of a single window. This would allow
// windows to be in different memory locations
function wNAF(c, bits) {
    const constTimeNegate = (condition, item)=>{
        const neg = item.negate();
        return condition ? neg : item;
    };
    const opts = (W)=>{
        const windows = Math.ceil(bits / W) + 1; // +1, because
        const windowSize = 2 ** (W - 1); // -1 because we skip zero
        return {
            windows,
            windowSize
        };
    };
    return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder (elm, n) {
            let p = c.ZERO;
            let d = elm;
            while(n > _0n){
                if (n & _1n) p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */ precomputeWindow (elm, W) {
            const { windows, windowSize } = opts(W);
            const points = [];
            let p = elm;
            let base = p;
            for(let window = 0; window < windows; window++){
                base = p;
                points.push(base);
                // =1, because we skip zero
                for(let i = 1; i < windowSize; i++){
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */ wNAF (W, precomputes, n) {
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = opts(W);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for(let window = 0; window < windows; window++){
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) // The most important part for const-time getPublicKey
                f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                else p = p.add(constTimeNegate(cond2, precomputes[offset2]));
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return {
                p,
                f
            };
        },
        wNAFCached (P, precomputesMap, n, transform) {
            // @ts-ignore
            const W = P._WINDOW_SIZE || 1;
            // Calculate precomputes on a first run, reuse them after
            let comp = precomputesMap.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1) precomputesMap.set(P, transform(comp));
            }
            return this.wNAF(W, comp, n);
        }
    };
}
exports.wNAF = wNAF;
function validateBasic(curve) {
    (0, modular_js_1.validateField)(curve.Fp);
    (0, utils_js_1.validateObject)(curve, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    });
    // Set defaults
    return Object.freeze({
        ...(0, modular_js_1.nLength)(curve.n, curve.nBitLength),
        ...curve,
        p: curve.Fp.ORDER
    });
}
exports.validateBasic = validateBasic;

},{"72c8f755a25fddc3":"cB5Z5","f90fcba6ea31de55":"cBmkf"}],"kbKg4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.montgomery = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const modular_js_1 = require("d01b1f463cd5a2a7");
const utils_js_1 = require("5722d1983f661de5");
const _0n = BigInt(0);
const _1n = BigInt(1);
function validateOpts(curve) {
    (0, utils_js_1.validateObject)(curve, {
        a: "bigint"
    }, {
        montgomeryBits: "isSafeInteger",
        nByteLength: "isSafeInteger",
        adjustScalarBytes: "function",
        domain: "function",
        powPminus2: "function",
        Gu: "bigint"
    });
    // Set defaults
    return Object.freeze({
        ...curve
    });
}
// NOTE: not really montgomery curve, just bunch of very specific methods for X25519/X448 (RFC 7748, https://www.rfc-editor.org/rfc/rfc7748)
// Uses only one coordinate instead of two
function montgomery(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { P } = CURVE;
    const modP = (n)=>(0, modular_js_1.mod)(n, P);
    const montgomeryBits = CURVE.montgomeryBits;
    const montgomeryBytes = Math.ceil(montgomeryBits / 8);
    const fieldLen = CURVE.nByteLength;
    const adjustScalarBytes = CURVE.adjustScalarBytes || ((bytes)=>bytes);
    const powPminus2 = CURVE.powPminus2 || ((x)=>(0, modular_js_1.pow)(x, P - BigInt(2), P));
    // cswap from RFC7748. But it is not from RFC7748!
    /*
      cswap(swap, x_2, x_3):
           dummy = mask(swap) AND (x_2 XOR x_3)
           x_2 = x_2 XOR dummy
           x_3 = x_3 XOR dummy
           Return (x_2, x_3)
    Where mask(swap) is the all-1 or all-0 word of the same length as x_2
     and x_3, computed, e.g., as mask(swap) = 0 - swap.
    */ function cswap(swap, x_2, x_3) {
        const dummy = modP(swap * (x_2 - x_3));
        x_2 = modP(x_2 - dummy);
        x_3 = modP(x_3 + dummy);
        return [
            x_2,
            x_3
        ];
    }
    // Accepts 0 as well
    function assertFieldElement(n) {
        if (typeof n === "bigint" && _0n <= n && n < P) return n;
        throw new Error("Expected valid scalar 0 < scalar < CURVE.P");
    }
    // x25519 from 4
    // The constant a24 is (486662 - 2) / 4 = 121665 for curve25519/X25519
    const a24 = (CURVE.a - BigInt(2)) / BigInt(4);
    /**
     *
     * @param pointU u coordinate (x) on Montgomery Curve 25519
     * @param scalar by which the point would be multiplied
     * @returns new Point on Montgomery curve
     */ function montgomeryLadder(pointU, scalar) {
        const u = assertFieldElement(pointU);
        // Section 5: Implementations MUST accept non-canonical values and process them as
        // if they had been reduced modulo the field prime.
        const k = assertFieldElement(scalar);
        const x_1 = u;
        let x_2 = _1n;
        let z_2 = _0n;
        let x_3 = u;
        let z_3 = _1n;
        let swap = _0n;
        let sw;
        for(let t = BigInt(montgomeryBits - 1); t >= _0n; t--){
            const k_t = k >> t & _1n;
            swap ^= k_t;
            sw = cswap(swap, x_2, x_3);
            x_2 = sw[0];
            x_3 = sw[1];
            sw = cswap(swap, z_2, z_3);
            z_2 = sw[0];
            z_3 = sw[1];
            swap = k_t;
            const A = x_2 + z_2;
            const AA = modP(A * A);
            const B = x_2 - z_2;
            const BB = modP(B * B);
            const E = AA - BB;
            const C = x_3 + z_3;
            const D = x_3 - z_3;
            const DA = modP(D * A);
            const CB = modP(C * B);
            const dacb = DA + CB;
            const da_cb = DA - CB;
            x_3 = modP(dacb * dacb);
            z_3 = modP(x_1 * modP(da_cb * da_cb));
            x_2 = modP(AA * BB);
            z_2 = modP(E * (AA + modP(a24 * E)));
        }
        // (x_2, x_3) = cswap(swap, x_2, x_3)
        sw = cswap(swap, x_2, x_3);
        x_2 = sw[0];
        x_3 = sw[1];
        // (z_2, z_3) = cswap(swap, z_2, z_3)
        sw = cswap(swap, z_2, z_3);
        z_2 = sw[0];
        z_3 = sw[1];
        // z_2^(p - 2)
        const z2 = powPminus2(z_2);
        // Return x_2 * (z_2^(p - 2))
        return modP(x_2 * z2);
    }
    function encodeUCoordinate(u) {
        return (0, utils_js_1.numberToBytesLE)(modP(u), montgomeryBytes);
    }
    function decodeUCoordinate(uEnc) {
        // Section 5: When receiving such an array, implementations of X25519
        // MUST mask the most significant bit in the final byte.
        const u = (0, utils_js_1.ensureBytes)("u coordinate", uEnc, montgomeryBytes);
        if (fieldLen === 32) u[31] &= 127; // 0b0111_1111
        return (0, utils_js_1.bytesToNumberLE)(u);
    }
    function decodeScalar(n) {
        const bytes = (0, utils_js_1.ensureBytes)("scalar", n);
        const len = bytes.length;
        if (len !== montgomeryBytes && len !== fieldLen) throw new Error(`Expected ${montgomeryBytes} or ${fieldLen} bytes, got ${len}`);
        return (0, utils_js_1.bytesToNumberLE)(adjustScalarBytes(bytes));
    }
    function scalarMult(scalar, u) {
        const pointU = decodeUCoordinate(u);
        const _scalar = decodeScalar(scalar);
        const pu = montgomeryLadder(pointU, _scalar);
        // The result was not contributory
        // https://cr.yp.to/ecdh.html#validate
        if (pu === _0n) throw new Error("Invalid private or public key received");
        return encodeUCoordinate(pu);
    }
    // Computes public key from private. By doing scalar multiplication of base point.
    const GuBytes = encodeUCoordinate(CURVE.Gu);
    function scalarMultBase(scalar) {
        return scalarMult(scalar, GuBytes);
    }
    return {
        scalarMult,
        scalarMultBase,
        getSharedSecret: (privateKey, publicKey)=>scalarMult(privateKey, publicKey),
        getPublicKey: (privateKey)=>scalarMultBase(privateKey),
        utils: {
            randomPrivateKey: ()=>CURVE.randomBytes(CURVE.nByteLength)
        },
        GuBytes: GuBytes
    };
}
exports.montgomery = montgomery;

},{"d01b1f463cd5a2a7":"cB5Z5","5722d1983f661de5":"cBmkf"}],"2yuJj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createHasher = exports.isogenyMap = exports.hash_to_field = exports.expand_message_xof = exports.expand_message_xmd = void 0;
const modular_js_1 = require("eccb35e649679ca");
const utils_js_1 = require("202487820f28c009");
function validateDST(dst) {
    if ((0, utils_js_1.isBytes)(dst)) return dst;
    if (typeof dst === "string") return (0, utils_js_1.utf8ToBytes)(dst);
    throw new Error("DST must be Uint8Array or string");
}
// Octet Stream to Integer. "spec" implementation of os2ip is 2.5x slower vs bytesToNumberBE.
const os2ip = utils_js_1.bytesToNumberBE;
// Integer to Octet Stream (numberToBytesBE)
function i2osp(value, length) {
    if (value < 0 || value >= 1 << 8 * length) throw new Error(`bad I2OSP call: value=${value} length=${length}`);
    const res = Array.from({
        length
    }).fill(0);
    for(let i = length - 1; i >= 0; i--){
        res[i] = value & 0xff;
        value >>>= 8;
    }
    return new Uint8Array(res);
}
function strxor(a, b) {
    const arr = new Uint8Array(a.length);
    for(let i = 0; i < a.length; i++)arr[i] = a[i] ^ b[i];
    return arr;
}
function abytes(item) {
    if (!(0, utils_js_1.isBytes)(item)) throw new Error("Uint8Array expected");
}
function isNum(item) {
    if (!Number.isSafeInteger(item)) throw new Error("number expected");
}
// Produces a uniformly random byte string using a cryptographic hash function H that outputs b bits
// https://www.rfc-editor.org/rfc/rfc9380#section-5.3.1
function expand_message_xmd(msg, DST, lenInBytes, H) {
    abytes(msg);
    abytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    if (DST.length > 255) DST = H((0, utils_js_1.concatBytes)((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-"), DST));
    const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (ell > 255) throw new Error("Invalid xmd length");
    const DST_prime = (0, utils_js_1.concatBytes)(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2); // len_in_bytes_str
    const b = new Array(ell);
    const b_0 = H((0, utils_js_1.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
    b[0] = H((0, utils_js_1.concatBytes)(b_0, i2osp(1, 1), DST_prime));
    for(let i = 1; i <= ell; i++){
        const args = [
            strxor(b_0, b[i - 1]),
            i2osp(i + 1, 1),
            DST_prime
        ];
        b[i] = H((0, utils_js_1.concatBytes)(...args));
    }
    const pseudo_random_bytes = (0, utils_js_1.concatBytes)(...b);
    return pseudo_random_bytes.slice(0, lenInBytes);
}
exports.expand_message_xmd = expand_message_xmd;
// Produces a uniformly random byte string using an extendable-output function (XOF) H.
// 1. The collision resistance of H MUST be at least k bits.
// 2. H MUST be an XOF that has been proved indifferentiable from
//    a random oracle under a reasonable cryptographic assumption.
// https://www.rfc-editor.org/rfc/rfc9380#section-5.3.2
function expand_message_xof(msg, DST, lenInBytes, k, H) {
    abytes(msg);
    abytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    // DST = H('H2C-OVERSIZE-DST-' || a_very_long_DST, Math.ceil((lenInBytes * k) / 8));
    if (DST.length > 255) {
        const dkLen = Math.ceil(2 * k / 8);
        DST = H.create({
            dkLen
        }).update((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(DST).digest();
    }
    if (lenInBytes > 65535 || DST.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
    return H.create({
        dkLen: lenInBytes
    }).update(msg).update(i2osp(lenInBytes, 2))// 2. DST_prime = DST || I2OSP(len(DST), 1)
    .update(DST).update(i2osp(DST.length, 1)).digest();
}
exports.expand_message_xof = expand_message_xof;
/**
 * Hashes arbitrary-length byte strings to a list of one or more elements of a finite field F
 * https://www.rfc-editor.org/rfc/rfc9380#section-5.2
 * @param msg a byte string containing the message to hash
 * @param count the number of elements of F to output
 * @param options `{DST: string, p: bigint, m: number, k: number, expand: 'xmd' | 'xof', hash: H}`, see above
 * @returns [u_0, ..., u_(count - 1)], a list of field elements.
 */ function hash_to_field(msg, count, options) {
    (0, utils_js_1.validateObject)(options, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
    });
    const { p, k, m, hash, expand, DST: _DST } = options;
    abytes(msg);
    isNum(count);
    const DST = validateDST(_DST);
    const log2p = p.toString(2).length;
    const L = Math.ceil((log2p + k) / 8); // section 5.1 of ietf draft link above
    const len_in_bytes = count * m * L;
    let prb; // pseudo_random_bytes
    if (expand === "xmd") prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
    else if (expand === "xof") prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
    else if (expand === "_internal_pass") // for internal tests only
    prb = msg;
    else throw new Error('expand must be "xmd" or "xof"');
    const u = new Array(count);
    for(let i = 0; i < count; i++){
        const e = new Array(m);
        for(let j = 0; j < m; j++){
            const elm_offset = L * (j + i * m);
            const tv = prb.subarray(elm_offset, elm_offset + L);
            e[j] = (0, modular_js_1.mod)(os2ip(tv), p);
        }
        u[i] = e;
    }
    return u;
}
exports.hash_to_field = hash_to_field;
function isogenyMap(field, map) {
    // Make same order as in spec
    const COEFF = map.map((i)=>Array.from(i).reverse());
    return (x, y)=>{
        const [xNum, xDen, yNum, yDen] = COEFF.map((val)=>val.reduce((acc, i)=>field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen); // xNum / xDen
        y = field.mul(y, field.div(yNum, yDen)); // y * (yNum / yDev)
        return {
            x,
            y
        };
    };
}
exports.isogenyMap = isogenyMap;
function createHasher(Point, mapToCurve, def) {
    if (typeof mapToCurve !== "function") throw new Error("mapToCurve() must be defined");
    return {
        // Encodes byte string to elliptic curve.
        // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        hashToCurve (msg, options) {
            const u = hash_to_field(msg, 2, {
                ...def,
                DST: def.DST,
                ...options
            });
            const u0 = Point.fromAffine(mapToCurve(u[0]));
            const u1 = Point.fromAffine(mapToCurve(u[1]));
            const P = u0.add(u1).clearCofactor();
            P.assertValidity();
            return P;
        },
        // Encodes byte string to elliptic curve.
        // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        encodeToCurve (msg, options) {
            const u = hash_to_field(msg, 1, {
                ...def,
                DST: def.encodeDST,
                ...options
            });
            const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
            P.assertValidity();
            return P;
        }
    };
}
exports.createHasher = createHasher;

},{"eccb35e649679ca":"cB5Z5","202487820f28c009":"cBmkf"}],"5EEKT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A map that expires entries after a given time.
 * Defaults to 10 minutes.
 */ parcelHelpers.export(exports, "ExpirableMap", ()=>ExpirableMap);
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
var _ExpirableMap_inner, _ExpirableMap_expirationTime, _a, _b;
class ExpirableMap {
    /**
     * Create a new ExpirableMap.
     * @param {ExpirableMapOptions<any, any>} options - options for the map.
     * @param {Iterable<[any, any]>} options.source - an optional source of entries to initialize the map with.
     * @param {number} options.expirationTime - the time in milliseconds after which entries will expire.
     */ constructor(options = {}){
        // Internals
        _ExpirableMap_inner.set(this, void 0);
        _ExpirableMap_expirationTime.set(this, void 0);
        this[_a] = this.entries.bind(this);
        this[_b] = "ExpirableMap";
        const { source = [], expirationTime = 600000 } = options;
        const currentTime = Date.now();
        __classPrivateFieldSet(this, _ExpirableMap_inner, new Map([
            ...source
        ].map(([key, value])=>[
                key,
                {
                    value,
                    timestamp: currentTime
                }
            ])), "f");
        __classPrivateFieldSet(this, _ExpirableMap_expirationTime, expirationTime, "f");
    }
    /**
     * Prune removes all expired entries.
     */ prune() {
        const currentTime = Date.now();
        for (const [key, entry] of __classPrivateFieldGet(this, _ExpirableMap_inner, "f").entries())if (currentTime - entry.timestamp > __classPrivateFieldGet(this, _ExpirableMap_expirationTime, "f")) __classPrivateFieldGet(this, _ExpirableMap_inner, "f").delete(key);
        return this;
    }
    // Implementing the Map interface
    /**
     * Set the value for the given key. Prunes expired entries.
     * @param key for the entry
     * @param value of the entry
     * @returns this
     */ set(key, value) {
        this.prune();
        const entry = {
            value,
            timestamp: Date.now()
        };
        __classPrivateFieldGet(this, _ExpirableMap_inner, "f").set(key, entry);
        return this;
    }
    /**
     * Get the value associated with the key, if it exists and has not expired.
     * @param key K
     * @returns the value associated with the key, or undefined if the key is not present or has expired.
     */ get(key) {
        const entry = __classPrivateFieldGet(this, _ExpirableMap_inner, "f").get(key);
        if (entry === undefined) return undefined;
        if (Date.now() - entry.timestamp > __classPrivateFieldGet(this, _ExpirableMap_expirationTime, "f")) {
            __classPrivateFieldGet(this, _ExpirableMap_inner, "f").delete(key);
            return undefined;
        }
        return entry.value;
    }
    /**
     * Clear all entries.
     */ clear() {
        __classPrivateFieldGet(this, _ExpirableMap_inner, "f").clear();
    }
    /**
     * Entries returns the entries of the map, without the expiration time.
     * @returns an iterator over the entries of the map.
     */ entries() {
        const iterator = __classPrivateFieldGet(this, _ExpirableMap_inner, "f").entries();
        const generator = function*() {
            for (const [key, value] of iterator)yield [
                key,
                value.value
            ];
        };
        return generator();
    }
    /**
     * Values returns the values of the map, without the expiration time.
     * @returns an iterator over the values of the map.
     */ values() {
        const iterator = __classPrivateFieldGet(this, _ExpirableMap_inner, "f").values();
        const generator = function*() {
            for (const value of iterator)yield value.value;
        };
        return generator();
    }
    /**
     * Keys returns the keys of the map
     * @returns an iterator over the keys of the map.
     */ keys() {
        return __classPrivateFieldGet(this, _ExpirableMap_inner, "f").keys();
    }
    /**
     * forEach calls the callbackfn on each entry of the map.
     * @param callbackfn to call on each entry
     * @param thisArg to use as this when calling the callbackfn
     */ forEach(callbackfn, thisArg) {
        for (const [key, value] of __classPrivateFieldGet(this, _ExpirableMap_inner, "f").entries())callbackfn.call(thisArg, value.value, key, this);
    }
    /**
     * has returns true if the key exists and has not expired.
     * @param key K
     * @returns true if the key exists and has not expired.
     */ has(key) {
        return __classPrivateFieldGet(this, _ExpirableMap_inner, "f").has(key);
    }
    /**
     * delete the entry for the given key.
     * @param key K
     * @returns true if the key existed and has been deleted.
     */ delete(key) {
        return __classPrivateFieldGet(this, _ExpirableMap_inner, "f").delete(key);
    }
    /**
     * get size of the map.
     * @returns the size of the map.
     */ get size() {
        return __classPrivateFieldGet(this, _ExpirableMap_inner, "f").size;
    }
}
_ExpirableMap_inner = new WeakMap(), _ExpirableMap_expirationTime = new WeakMap(), _a = Symbol.iterator, _b = Symbol.toStringTag;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HXiQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ed25519PublicKey", ()=>Ed25519PublicKey);
var _der = require("./der");
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
var _Ed25519PublicKey_rawKey, _Ed25519PublicKey_derKey;
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
        return (0, _der.wrapDER)(publicKey, (0, _der.ED25519_OID)).buffer;
    }
    static derDecode(key) {
        const unwrapped = (0, _der.unwrapDER)(key, (0, _der.ED25519_OID));
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

},{"./der":"8gvbo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8gvbo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodeLenBytes", ()=>encodeLenBytes);
parcelHelpers.export(exports, "encodeLen", ()=>encodeLen);
parcelHelpers.export(exports, "decodeLenBytes", ()=>decodeLenBytes);
parcelHelpers.export(exports, "decodeLen", ()=>decodeLen);
parcelHelpers.export(exports, "DER_COSE_OID", ()=>DER_COSE_OID);
parcelHelpers.export(exports, "ED25519_OID", ()=>ED25519_OID);
parcelHelpers.export(exports, "SECP256K1_OID", ()=>SECP256K1_OID);
/**
 * Wraps the given `payload` in a DER encoding tagged with the given encoded `oid` like so:
 * `SEQUENCE(oid, BITSTRING(payload))`
 *
 * @param payload The payload to encode as the bit string
 * @param oid The DER encoded (and SEQUENCE wrapped!) OID to tag the payload with
 */ parcelHelpers.export(exports, "wrapDER", ()=>wrapDER);
parcelHelpers.export(exports, "unwrapDER", ()=>unwrapDER);
var _buffer = require("./utils/buffer");
const encodeLenBytes = (len)=>{
    if (len <= 0x7f) return 1;
    else if (len <= 0xff) return 2;
    else if (len <= 0xffff) return 3;
    else if (len <= 0xffffff) return 4;
    else throw new Error("Length too long (> 4 bytes)");
};
const encodeLen = (buf, offset, len)=>{
    if (len <= 0x7f) {
        buf[offset] = len;
        return 1;
    } else if (len <= 0xff) {
        buf[offset] = 0x81;
        buf[offset + 1] = len;
        return 2;
    } else if (len <= 0xffff) {
        buf[offset] = 0x82;
        buf[offset + 1] = len >> 8;
        buf[offset + 2] = len;
        return 3;
    } else if (len <= 0xffffff) {
        buf[offset] = 0x83;
        buf[offset + 1] = len >> 16;
        buf[offset + 2] = len >> 8;
        buf[offset + 3] = len;
        return 4;
    } else throw new Error("Length too long (> 4 bytes)");
};
const decodeLenBytes = (buf, offset)=>{
    if (buf[offset] < 0x80) return 1;
    if (buf[offset] === 0x80) throw new Error("Invalid length 0");
    if (buf[offset] === 0x81) return 2;
    if (buf[offset] === 0x82) return 3;
    if (buf[offset] === 0x83) return 4;
    throw new Error("Length too long (> 4 bytes)");
};
const decodeLen = (buf, offset)=>{
    const lenBytes = decodeLenBytes(buf, offset);
    if (lenBytes === 1) return buf[offset];
    else if (lenBytes === 2) return buf[offset + 1];
    else if (lenBytes === 3) return (buf[offset + 1] << 8) + buf[offset + 2];
    else if (lenBytes === 4) return (buf[offset + 1] << 16) + (buf[offset + 2] << 8) + buf[offset + 3];
    throw new Error("Length too long (> 4 bytes)");
};
const DER_COSE_OID = Uint8Array.from([
    0x30,
    0x0c,
    0x06,
    0x0a,
    0x2b,
    0x06,
    0x01,
    0x04,
    0x01,
    0x83,
    0xb8,
    0x43,
    0x01,
    0x01
]);
const ED25519_OID = Uint8Array.from([
    0x30,
    0x05,
    0x06,
    0x03,
    0x2b,
    0x65,
    0x70
]);
const SECP256K1_OID = Uint8Array.from([
    0x30,
    0x10,
    0x06,
    0x07,
    0x2a,
    0x86,
    0x48,
    0xce,
    0x3d,
    0x02,
    0x01,
    0x06,
    0x05,
    0x2b,
    0x81,
    0x04,
    0x00,
    0x0a
]);
function wrapDER(payload, oid) {
    // The Bit String header needs to include the unused bit count byte in its length
    const bitStringHeaderLength = 2 + encodeLenBytes(payload.byteLength + 1);
    const len = oid.byteLength + bitStringHeaderLength + payload.byteLength;
    let offset = 0;
    const buf = new Uint8Array(1 + encodeLenBytes(len) + len);
    // Sequence
    buf[offset++] = 0x30;
    // Sequence Length
    offset += encodeLen(buf, offset, len);
    // OID
    buf.set(oid, offset);
    offset += oid.byteLength;
    // Bit String Header
    buf[offset++] = 0x03;
    offset += encodeLen(buf, offset, payload.byteLength + 1);
    // 0 padding
    buf[offset++] = 0x00;
    buf.set(new Uint8Array(payload), offset);
    return buf;
}
const unwrapDER = (derEncoded, oid)=>{
    let offset = 0;
    const expect = (n, msg)=>{
        if (buf[offset++] !== n) throw new Error("Expected: " + msg);
    };
    const buf = new Uint8Array(derEncoded);
    expect(0x30, "sequence");
    offset += decodeLenBytes(buf, offset);
    if (!(0, _buffer.bufEquals)(buf.slice(offset, offset + oid.byteLength), oid)) throw new Error("Not the expected OID.");
    offset += oid.byteLength;
    expect(0x03, "bit string");
    const payloadLen = decodeLen(buf, offset) - 1; // Subtracting 1 to account for the 0 padding
    offset += decodeLenBytes(buf, offset);
    expect(0x00, "0 padding");
    const result = buf.slice(offset);
    if (payloadLen !== result.length) throw new Error(`DER payload mismatch: Expected length ${payloadLen} actual length ${result.length}`);
    return result;
};

},{"./utils/buffer":"lLl6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gB3B3":[function(require,module,exports) {
module.exports = Promise.resolve(module.bundle.root("3k2wA"));

},{}],"1d5OW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProxyMessageKind", ()=>ProxyMessageKind);
// A Stub Agent that forwards calls to another Agent implementation.
parcelHelpers.export(exports, "ProxyStubAgent", ()=>ProxyStubAgent);
// An Agent that forwards calls to a backend. The calls are serialized
parcelHelpers.export(exports, "ProxyAgent", ()=>ProxyAgent);
var _principal = require("@dfinity/principal");
var ProxyMessageKind;
(function(ProxyMessageKind) {
    ProxyMessageKind["Error"] = "err";
    ProxyMessageKind["GetPrincipal"] = "gp";
    ProxyMessageKind["GetPrincipalResponse"] = "gpr";
    ProxyMessageKind["Query"] = "q";
    ProxyMessageKind["QueryResponse"] = "qr";
    ProxyMessageKind["Call"] = "c";
    ProxyMessageKind["CallResponse"] = "cr";
    ProxyMessageKind["ReadState"] = "rs";
    ProxyMessageKind["ReadStateResponse"] = "rsr";
    ProxyMessageKind["Status"] = "s";
    ProxyMessageKind["StatusResponse"] = "sr";
})(ProxyMessageKind || (ProxyMessageKind = {}));
class ProxyStubAgent {
    constructor(_frontend, _agent){
        this._frontend = _frontend;
        this._agent = _agent;
    }
    onmessage(msg) {
        switch(msg.type){
            case ProxyMessageKind.GetPrincipal:
                this._agent.getPrincipal().then((response)=>{
                    this._frontend({
                        id: msg.id,
                        type: ProxyMessageKind.GetPrincipalResponse,
                        response: response.toText()
                    });
                });
                break;
            case ProxyMessageKind.Query:
                this._agent.query(...msg.args).then((response)=>{
                    this._frontend({
                        id: msg.id,
                        type: ProxyMessageKind.QueryResponse,
                        response
                    });
                });
                break;
            case ProxyMessageKind.Call:
                this._agent.call(...msg.args).then((response)=>{
                    this._frontend({
                        id: msg.id,
                        type: ProxyMessageKind.CallResponse,
                        response
                    });
                });
                break;
            case ProxyMessageKind.ReadState:
                this._agent.readState(...msg.args).then((response)=>{
                    this._frontend({
                        id: msg.id,
                        type: ProxyMessageKind.ReadStateResponse,
                        response
                    });
                });
                break;
            case ProxyMessageKind.Status:
                this._agent.status().then((response)=>{
                    this._frontend({
                        id: msg.id,
                        type: ProxyMessageKind.StatusResponse,
                        response
                    });
                });
                break;
            default:
                throw new Error(`Invalid message received: ${JSON.stringify(msg)}`);
        }
    }
}
class ProxyAgent {
    constructor(_backend){
        this._backend = _backend;
        this._nextId = 0;
        this._pendingCalls = new Map();
        this.rootKey = null;
    }
    onmessage(msg) {
        const id = msg.id;
        const maybePromise = this._pendingCalls.get(id);
        if (!maybePromise) throw new Error("A proxy get the same message twice...");
        this._pendingCalls.delete(id);
        const [resolve, reject] = maybePromise;
        switch(msg.type){
            case ProxyMessageKind.Error:
                return reject(msg.error);
            case ProxyMessageKind.GetPrincipalResponse:
            case ProxyMessageKind.CallResponse:
            case ProxyMessageKind.QueryResponse:
            case ProxyMessageKind.ReadStateResponse:
            case ProxyMessageKind.StatusResponse:
                return resolve(msg.response);
            default:
                throw new Error(`Invalid message being sent to ProxyAgent: ${JSON.stringify(msg)}`);
        }
    }
    async getPrincipal() {
        return this._sendAndWait({
            id: this._nextId++,
            type: ProxyMessageKind.GetPrincipal
        }).then((principal)=>{
            if (typeof principal !== "string") throw new Error("Invalid principal received.");
            return (0, _principal.Principal).fromText(principal);
        });
    }
    readState(canisterId, fields) {
        return this._sendAndWait({
            id: this._nextId++,
            type: ProxyMessageKind.ReadState,
            args: [
                canisterId.toString(),
                fields
            ]
        });
    }
    call(canisterId, fields) {
        return this._sendAndWait({
            id: this._nextId++,
            type: ProxyMessageKind.Call,
            args: [
                canisterId.toString(),
                fields
            ]
        });
    }
    status() {
        return this._sendAndWait({
            id: this._nextId++,
            type: ProxyMessageKind.Status
        });
    }
    query(canisterId, fields) {
        return this._sendAndWait({
            id: this._nextId++,
            type: ProxyMessageKind.Query,
            args: [
                canisterId.toString(),
                fields
            ]
        });
    }
    async _sendAndWait(msg) {
        return new Promise((resolve, reject)=>{
            this._pendingCalls.set(msg.id, [
                resolve,
                reject
            ]);
            this._backend(msg);
        });
    }
    async fetchRootKey() {
        // Hex-encoded version of the replica root key
        const rootKey = (await this.status()).root_key;
        this.rootKey = rootKey;
        return rootKey;
    }
}

},{"@dfinity/principal":"lPNel","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JXl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strategy", ()=>_strategy);
parcelHelpers.export(exports, "defaultStrategy", ()=>(0, _strategy.defaultStrategy));
/**
 * Polls the IC to check the status of the given request then
 * returns the response bytes once the request has been processed.
 * @param agent The agent to use to poll read_state.
 * @param canisterId The effective canister ID.
 * @param requestId The Request ID to poll status for.
 * @param strategy A polling strategy.
 * @param request Request for the readState call.
 */ parcelHelpers.export(exports, "pollForResponse", ()=>pollForResponse);
var _agent = require("../agent");
var _certificate = require("../certificate");
var _buffer = require("../utils/buffer");
var _strategy = require("./strategy");
async function pollForResponse(agent, canisterId, requestId, strategy, // eslint-disable-next-line
request, blsVerify) {
    var _a;
    const path = [
        new TextEncoder().encode("request_status"),
        requestId
    ];
    const currentRequest = request !== null && request !== void 0 ? request : await ((_a = agent.createReadStateRequest) === null || _a === void 0 ? void 0 : _a.call(agent, {
        paths: [
            path
        ]
    }));
    const state = await agent.readState(canisterId, {
        paths: [
            path
        ]
    }, undefined, currentRequest);
    if (agent.rootKey == null) throw new Error("Agent root key not initialized before polling");
    const cert = await (0, _certificate.Certificate).create({
        certificate: state.certificate,
        rootKey: agent.rootKey,
        canisterId: canisterId,
        blsVerify
    });
    const maybeBuf = cert.lookup([
        ...path,
        new TextEncoder().encode("status")
    ]);
    let status;
    if (typeof maybeBuf === "undefined") // Missing requestId means we need to wait
    status = (0, _agent.RequestStatusResponseStatus).Unknown;
    else status = new TextDecoder().decode(maybeBuf);
    switch(status){
        case (0, _agent.RequestStatusResponseStatus).Replied:
            return cert.lookup([
                ...path,
                "reply"
            ]);
        case (0, _agent.RequestStatusResponseStatus).Received:
        case (0, _agent.RequestStatusResponseStatus).Unknown:
        case (0, _agent.RequestStatusResponseStatus).Processing:
            // Execute the polling strategy, then retry.
            await strategy(canisterId, requestId, status);
            return pollForResponse(agent, canisterId, requestId, strategy, currentRequest);
        case (0, _agent.RequestStatusResponseStatus).Rejected:
            {
                const rejectCode = new Uint8Array(cert.lookup([
                    ...path,
                    "reject_code"
                ]))[0];
                const rejectMessage = new TextDecoder().decode(cert.lookup([
                    ...path,
                    "reject_message"
                ]));
                throw new Error(`Call was rejected:\n` + `  Request ID: ${(0, _buffer.toHex)(requestId)}\n` + `  Reject code: ${rejectCode}\n` + `  Reject text: ${rejectMessage}\n`);
            }
        case (0, _agent.RequestStatusResponseStatus).Done:
            // This is _technically_ not an error, but we still didn't see the `Replied` status so
            // we don't know the result and cannot decode it.
            throw new Error(`Call was marked as done but we never saw the reply:\n` + `  Request ID: ${(0, _buffer.toHex)(requestId)}\n`);
    }
    throw new Error("unreachable");
}

},{"../agent":"cZYac","../certificate":"bJv6G","../utils/buffer":"lLl6e","./strategy":"axFXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"axFXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A best practices polling strategy: wait 2 seconds before the first poll, then 1 second
 * with an exponential backoff factor of 1.2. Timeout after 5 minutes.
 */ parcelHelpers.export(exports, "defaultStrategy", ()=>defaultStrategy);
/**
 * Predicate that returns true once.
 */ parcelHelpers.export(exports, "once", ()=>once);
/**
 * Delay the polling once.
 * @param condition A predicate that indicates when to delay.
 * @param timeInMsec The amount of time to delay.
 */ parcelHelpers.export(exports, "conditionalDelay", ()=>conditionalDelay);
/**
 * Error out after a maximum number of polling has been done.
 * @param count The maximum attempts to poll.
 */ parcelHelpers.export(exports, "maxAttempts", ()=>maxAttempts);
/**
 * Throttle polling.
 * @param throttleInMsec Amount in millisecond to wait between each polling.
 */ parcelHelpers.export(exports, "throttle", ()=>throttle);
/**
 * Reject a call after a certain amount of time.
 * @param timeInMsec Time in milliseconds before the polling should be rejected.
 */ parcelHelpers.export(exports, "timeout", ()=>timeout);
/**
 * A strategy that throttle, but using an exponential backoff strategy.
 * @param startingThrottleInMsec The throttle in milliseconds to start with.
 * @param backoffFactor The factor to multiple the throttle time between every poll. For
 *   example if using 2, the throttle will double between every run.
 */ parcelHelpers.export(exports, "backoff", ()=>backoff);
/**
 * Chain multiple polling strategy. This _chains_ the strategies, so if you pass in,
 * say, two throttling strategy of 1 second, it will result in a throttle of 2 seconds.
 * @param strategies A strategy list to chain.
 */ parcelHelpers.export(exports, "chain", ()=>chain);
var _buffer = require("../utils/buffer");
const FIVE_MINUTES_IN_MSEC = 300000;
function defaultStrategy() {
    return chain(conditionalDelay(once(), 1000), backoff(1000, 1.2), timeout(FIVE_MINUTES_IN_MSEC));
}
function once() {
    let first = true;
    return async ()=>{
        if (first) {
            first = false;
            return true;
        }
        return false;
    };
}
function conditionalDelay(condition, timeInMsec) {
    return async (canisterId, requestId, status)=>{
        if (await condition(canisterId, requestId, status)) return new Promise((resolve)=>setTimeout(resolve, timeInMsec));
    };
}
function maxAttempts(count) {
    let attempts = count;
    return async (canisterId, requestId, status)=>{
        if (--attempts <= 0) throw new Error(`Failed to retrieve a reply for request after ${count} attempts:\n` + `  Request ID: ${(0, _buffer.toHex)(requestId)}\n` + `  Request status: ${status}\n`);
    };
}
function throttle(throttleInMsec) {
    return ()=>new Promise((resolve)=>setTimeout(resolve, throttleInMsec));
}
function timeout(timeInMsec) {
    const end = Date.now() + timeInMsec;
    return async (canisterId, requestId, status)=>{
        if (Date.now() > end) throw new Error(`Request timed out after ${timeInMsec} msec:\n` + `  Request ID: ${(0, _buffer.toHex)(requestId)}\n` + `  Request status: ${status}\n`);
    };
}
function backoff(startingThrottleInMsec, backoffFactor) {
    let currentThrottling = startingThrottleInMsec;
    return ()=>new Promise((resolve)=>setTimeout(()=>{
                currentThrottling *= backoffFactor;
                resolve();
            }, currentThrottling));
}
function chain(...strategies) {
    return async (canisterId, requestId, status)=>{
        for (const a of strategies)await a(canisterId, requestId, status);
    };
}

},{"../utils/buffer":"lLl6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggfBH":[function(require,module,exports) {
/**
 * This file is generated from the candid for asset management.
 */ // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ IDL })=>{
    const canister_id = IDL.Principal;
    const definite_canister_settings = IDL.Record({
        controllers: IDL.Vec(IDL.Principal),
        freezing_threshold: IDL.Nat,
        memory_allocation: IDL.Nat,
        compute_allocation: IDL.Nat
    });
    const canister_settings = IDL.Record({
        controllers: IDL.Opt(IDL.Vec(IDL.Principal)),
        freezing_threshold: IDL.Opt(IDL.Nat),
        memory_allocation: IDL.Opt(IDL.Nat),
        compute_allocation: IDL.Opt(IDL.Nat)
    });
    const wasm_module = IDL.Vec(IDL.Nat8);
    return IDL.Service({
        canister_status: IDL.Func([
            IDL.Record({
                canister_id: canister_id
            })
        ], [
            IDL.Record({
                status: IDL.Variant({
                    stopped: IDL.Null,
                    stopping: IDL.Null,
                    running: IDL.Null
                }),
                memory_size: IDL.Nat,
                cycles: IDL.Nat,
                settings: definite_canister_settings,
                module_hash: IDL.Opt(IDL.Vec(IDL.Nat8))
            })
        ], []),
        create_canister: IDL.Func([
            IDL.Record({
                settings: IDL.Opt(canister_settings)
            })
        ], [
            IDL.Record({
                canister_id: canister_id
            })
        ], []),
        delete_canister: IDL.Func([
            IDL.Record({
                canister_id: canister_id
            })
        ], [], []),
        deposit_cycles: IDL.Func([
            IDL.Record({
                canister_id: canister_id
            })
        ], [], []),
        install_code: IDL.Func([
            IDL.Record({
                arg: IDL.Vec(IDL.Nat8),
                wasm_module: wasm_module,
                mode: IDL.Variant({
                    reinstall: IDL.Null,
                    upgrade: IDL.Null,
                    install: IDL.Null
                }),
                canister_id: canister_id
            })
        ], [], []),
        provisional_create_canister_with_cycles: IDL.Func([
            IDL.Record({
                settings: IDL.Opt(canister_settings),
                amount: IDL.Opt(IDL.Nat)
            })
        ], [
            IDL.Record({
                canister_id: canister_id
            })
        ], []),
        provisional_top_up_canister: IDL.Func([
            IDL.Record({
                canister_id: canister_id,
                amount: IDL.Nat
            })
        ], [], []),
        raw_rand: IDL.Func([], [
            IDL.Vec(IDL.Nat8)
        ], []),
        start_canister: IDL.Func([
            IDL.Record({
                canister_id: canister_id
            })
        ], [], []),
        stop_canister: IDL.Func([
            IDL.Record({
                canister_id: canister_id
            })
        ], [], []),
        uninstall_code: IDL.Func([
            IDL.Record({
                canister_id: canister_id
            })
        ], [], []),
        update_settings: IDL.Func([
            IDL.Record({
                canister_id: IDL.Principal,
                settings: canister_settings
            })
        ], [], [])
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fACGJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a management canister actor.
 * @param config
 */ parcelHelpers.export(exports, "createAssetCanisterActor", ()=>createAssetCanisterActor);
var _actor = require("../actor");
var _assetIdl = require("./asset_idl");
var _assetIdlDefault = parcelHelpers.interopDefault(_assetIdl);
function createAssetCanisterActor(config) {
    return (0, _actor.Actor).createActor((0, _assetIdlDefault.default), config);
}

},{"../actor":"iXcWD","./asset_idl":"frB6M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"frB6M":[function(require,module,exports) {
/**
 * This file is generated from the candid for asset management.
 */ // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ({ IDL })=>{
    return IDL.Service({
        retrieve: IDL.Func([
            IDL.Text
        ], [
            IDL.Vec(IDL.Nat8)
        ], [
            "query"
        ]),
        store: IDL.Func([
            IDL.Text,
            IDL.Vec(IDL.Nat8)
        ], [], [])
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l2EoI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retrieves the Candid interface for the specified canister.
 *
 * @param agent The agent to use for the request (usually an `HttpAgent`)
 * @param canisterId A string corresponding to the canister ID
 * @returns Candid source code
 */ parcelHelpers.export(exports, "fetchCandid", ()=>fetchCandid);
var _principal = require("@dfinity/principal");
var _index = require("./canisterStatus/index");
var _http = require("./agent/http");
var _actor = require("./actor");
async function fetchCandid(canisterId, agent) {
    if (!agent) {
        // Create an anonymous `HttpAgent` (adapted from Candid UI)
        agent = new (0, _http.HttpAgent)();
        if (agent.isLocal()) agent.fetchRootKey();
    }
    // Attempt to use canister metadata
    const status = await _index.request({
        agent,
        canisterId: (0, _principal.Principal).fromText(canisterId),
        paths: [
            "candid"
        ]
    });
    const candid = status.get("candid");
    if (candid) return candid;
    // Use `__get_candid_interface_tmp_hack` for canisters without Candid metadata
    const tmpHackInterface = ({ IDL })=>IDL.Service({
            __get_candid_interface_tmp_hack: IDL.Func([], [
                IDL.Text
            ], [
                "query"
            ])
        });
    const actor = (0, _actor.Actor).createActor(tmpHackInterface, {
        agent,
        canisterId
    });
    return await actor.__get_candid_interface_tmp_hack();
}

},{"@dfinity/principal":"lPNel","./canisterStatus/index":"3k2wA","./agent/http":"gUBQk","./actor":"iXcWD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1WyNc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "idlFactory", ()=>idlFactory);
parcelHelpers.export(exports, "init", ()=>init);
const idlFactory = ({ IDL })=>{
    const Vector = IDL.Vec(IDL.Int);
    const NestedArray = IDL.Vec(Vector);
    const HttpHeader = IDL.Record({
        "value": IDL.Text,
        "name": IDL.Text
    });
    const HttpResponsePayload = IDL.Record({
        "status": IDL.Nat,
        "body": IDL.Vec(IDL.Nat8),
        "headers": IDL.Vec(HttpHeader)
    });
    const TransformArgs = IDL.Record({
        "context": IDL.Vec(IDL.Nat8),
        "response": HttpResponsePayload
    });
    const CanisterHttpResponsePayload = IDL.Record({
        "status": IDL.Nat,
        "body": IDL.Vec(IDL.Nat8),
        "headers": IDL.Vec(HttpHeader)
    });
    return IDL.Service({
        "getCanisterBalance": IDL.Func([], [
            IDL.Nat
        ], [
            "query"
        ]),
        "getIcpId": IDL.Func([], [
            IDL.Text
        ], [
            "query"
        ]),
        "getMapping": IDL.Func([
            IDL.Text,
            IDL.Int
        ], [
            IDL.Opt(NestedArray)
        ], [
            "query"
        ]),
        "pushToArray": IDL.Func([
            IDL.Text,
            IDL.Vec(IDL.Int),
            IDL.Int
        ], [], [
            "oneway"
        ]),
        "send_http_blueberry_proxy_get_raw_data": IDL.Func([
            IDL.Text,
            IDL.Text,
            IDL.Text,
            IDL.Text
        ], [
            IDL.Text
        ], []),
        "send_http_blueberry_proxy_login": IDL.Func([
            IDL.Text,
            IDL.Text
        ], [
            IDL.Text
        ], []),
        "transform": IDL.Func([
            TransformArgs
        ], [
            CanisterHttpResponsePayload
        ], [
            "query"
        ])
    });
};
const init = ({ IDL })=>{
    return [];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lGqnZ"], null, "parcelRequire4831")

//# sourceMappingURL=app.34398413.js.map
