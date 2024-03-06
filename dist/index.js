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
})({"1jZC8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c95beb5e32d2b64b";
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
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

},{}],"f2QDv":[function(require,module,exports) {
var _authenticationJs = require("./authentication.js");
var _expenseAndYieldInputHandlerJs = require("./expenseAndYieldInputHandler.js");
var _financesJs = require("./finances.js");
const signupForm = document.querySelector(".authentication--signup");
const loginForm = document.querySelector(".authentication--login");
const dashboard = document.querySelector(".main--dashboard");
const financesPage = document.querySelector(".main--finances");
console.log("hello");
if (signupForm) (0, _authenticationJs.handleSignup)(signupForm);
if (loginForm) (0, _authenticationJs.handleLogin)(loginForm);
if (dashboard) (0, _expenseAndYieldInputHandlerJs.handleExpenseAndYieldInput)();
if (financesPage) (0, _financesJs.handleFinancesPage)();

},{"./authentication.js":"4WnuJ","./expenseAndYieldInputHandler.js":"h1yDZ","./finances.js":"hFxMF"}],"4WnuJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleSignup", ()=>handleSignup);
parcelHelpers.export(exports, "handleLogin", ()=>handleLogin);
var _alertJs = require("./alert.js");
async function signup(data) {
    try {
        (0, _alertJs.showAlert)("loading", "Creating account ...");
        const response = await fetch("/api/v1/authentication/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
        if (result.status !== "success") (0, _alertJs.showAlert)("error", result.message);
        else {
            (0, _alertJs.showAlert)("success", "Account created successfully");
            window.location.assign("/");
        }
    } catch (error) {
        (0, _alertJs.showAlert)("error", "Something went wrong");
        console.error("Error:", error);
    }
}
async function login(data) {
    try {
        (0, _alertJs.showAlert)("loading", "Login in...");
        const response = await fetch("/api/v1/authentication/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
        if (result.status !== "success") (0, _alertJs.showAlert)("error", result.message);
        else {
            (0, _alertJs.showAlert)("success", "Login successful");
            window.location.assign("/");
        }
    } catch (error) {
        (0, _alertJs.showAlert)("error", "Something went wrong");
        console.error("Error:", error);
    }
}
function handleSignup(signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("passwordConfirm").value;
        const data = {
            email,
            password
        };
        signup(data);
    });
}
function handleLogin(loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const data = {
            email,
            password
        };
        login(data);
    });
}

},{"./alert.js":"kxdiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxdiQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showAlert", ()=>showAlert);
const hideAlert = ()=>{
    const el = document.querySelector(".status-box");
    if (el) el.parentElement.removeChild(el);
};
const showAlert = (type, message)=>{
    hideAlert();
    const markup = `<div class="status-box status-box--${type}">    
  <ion-icon class='icon-success'  name="checkmark-circle-outline"></ion-icon>
  <ion-icon  class='icon-error' name="close-circle-outline"></ion-icon>
  <svg stroke="currentColor" class='icon-loading'  fill="#20377d" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
  <span>
  ${message}
  </span> 
  </div>

`;
    document.querySelector(".app-layout").insertAdjacentHTML("afterbegin", markup);
    if (type !== "loading") window.setTimeout(hideAlert, 5000);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h1yDZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleExpenseAndYieldInput", ()=>handleExpenseAndYieldInput);
var _crudOperationsJs = require("./crudOperations.js");
function handleExpenseAndYieldInput() {
    const showHarvestDialogBtn = document.querySelector(".showHarvestDialog");
    const showExpenseDialogBtn = document.querySelector(".showExpenseDialog");
    const harvestDialog = document.getElementById("harvest-dialog");
    const expenseDialog = document.getElementById("expense-dialog");
    const dialogContentEl = document.querySelector(".dialog_content");
    const selectExpenseForm = document.querySelector(".dialog_content--select-expense");
    const inputExpenseDetailsForm = document.querySelector(".dialog_content--input-expense-details");
    const openExpenseFormBtns = document.querySelectorAll(".btn-open-expense-form");
    showHarvestDialogBtn.addEventListener("click", ()=>{
        harvestDialog.showModal();
    });
    showExpenseDialogBtn.addEventListener("click", ()=>{
        expenseDialog.showModal();
    });
    const expenseForms = {
        labour: [
            {
                id: "description",
                label: "Description",
                type: "select",
                options: [
                    "Picking",
                    "Fertilizer Application",
                    "Pesticide Application",
                    "Pruning"
                ]
            },
            {
                id: "numberOfLaborers",
                label: "Number of Laborers",
                type: "number"
            },
            {
                id: "payRate",
                label: "Pay Rate",
                type: "number"
            },
            {
                id: "hoursWorked",
                label: "Hours worked",
                type: "number"
            }
        ],
        pesticides: [
            {
                id: "description",
                label: "Description",
                type: "select",
                options: [
                    "Picking",
                    "Fertilizer Application",
                    "Pesticide Application",
                    "Pruning"
                ]
            },
            {
                id: "costPerUnit",
                label: "Cost per unit",
                type: "number"
            },
            {
                id: "quantity",
                label: "Quantity purchased",
                type: "number"
            }
        ],
        fertilizer: [
            {
                id: "description",
                label: "Description",
                type: "select",
                options: [
                    "Picking",
                    "Fertilizer Application",
                    "Pesticide Application",
                    "Pruning"
                ]
            },
            {
                id: "costPerUnit",
                label: "Cost per unit",
                type: "number"
            },
            {
                id: "quantity",
                label: "Quantity purchased",
                type: "number"
            }
        ],
        miscelleneous: [
            {
                id: "description",
                label: "Description"
            },
            {
                id: "cost",
                label: "Cost",
                type: "number"
            }
        ]
    };
    function openExpenseSelectionForm() {
        console.log("hello");
        openExpenseSelectionFormBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            // dialogContentEl.removeChild(inputExpenseDetailsForm);
            dialogContentEl.appendChild(selectExpenseForm);
        });
    }
    function handleFormOpen(expenseType) {
        const openExpenseSelectionFormBtn1 = document.querySelector(".open-select-expense-form");
        const inputExpenseDetailsForm = document.querySelector(".dialog_content--input-expense-details");
        if (inputExpenseDetailsForm) {
            const inputElements = inputExpenseDetailsForm.querySelectorAll(".input");
            let formData = {
                expenseDetails: {}
            };
            function parseValue(value, type) {
                switch(type){
                    case "number":
                        return parseFloat(value);
                    default:
                        return value.toString();
                }
            }
            inputElements.forEach((el)=>{
                el.addEventListener("change", (e)=>{
                    const key = el.getAttribute("id");
                    const type = el.getAttribute("type");
                    const value = e.target.value;
                    if (key === "transactionDate" || key === "expenseTotal") formData[key] = parseValue(value, type);
                    // formData.expenseDetails.push({ [key]: parseValue(value, type) });
                    formData.expenseDetails = {
                        ...formData.expenseDetails,
                        [key]: parseValue(value, type)
                    };
                });
            });
            inputExpenseDetailsForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                const data = {
                    farm_id: 1,
                    expense_type: expenseType,
                    transaction_date: formData.transactionDate,
                    expense_total: formData.expenseTotal,
                    expense_details: [
                        formData.expenseDetails
                    ]
                };
                console.log(data);
                const req = {
                    url: "/api/v1/expenses/",
                    data,
                    loadingMessage: "Creating expense...",
                    successMessage: "Expense created successfully"
                };
                (0, _crudOperationsJs.post)(req);
                console.log(formData);
            });
            openExpenseSelectionFormBtn1.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                dialogContentEl.removeChild(inputExpenseDetailsForm);
                dialogContentEl.appendChild(selectExpenseForm);
            });
        }
    }
    function openExpenseForm(formDetails, expenseType) {
        const elements = formDetails.map((el)=>{
            const label = `<label for=${el.id}>${el.label}</label>`;
            let input;
            if (el.type !== "select") input = `<input id=${el.id} class="input" type=${el.type} required />`;
            else {
                input = `<select id=${el.id} class="input" required>
                        <option value="">--Please choose an option--</option>`;
                el.options.forEach((option)=>input += `<option value=${option}>${option}</option>`);
                input += `</select>`;
            }
            return `<div class="form-row form-row--horizontal">${label}${input}</div>`;
        });
        let markup = `
                  <form class='form dialog_content--input-expense-details'>
                  <h2>Enter ${expenseType} expense Details</h2>
                    <div class="form-row form-row--horizontal">
                      <label for="transactionDate">Transaction Date</label>
                      <input id='transactionDate' class="input" required type="date" />
                    </div>
                  `;
        elements.forEach((el)=>markup += el);
        markup += `
                  <div class="form-row form-row--horizontal">
                      <label for="total">Total</label>
                      <input id='expenseTotal' class="input" type="number" />
                    </div>
                  <div class="btns-row">
                    <button class="btn btn-secondary btn-large open-select-expense-form" type='button' >Back</button>
                    <button class="btn btn-secondary btn-large">Cancel</button>
                    <button class="btn btn-primary btn-large">Submit</button>
                  </div>
                  </form>`;
        dialogContentEl.removeChild(selectExpenseForm);
        dialogContentEl.insertAdjacentHTML("beforeEnd", markup);
        // formContainerEl.insertAdjacentHTML("afterBegin", markup);
        handleFormOpen(expenseType);
    }
    openExpenseFormBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            const formToOpen = btn.getAttribute("data-opens");
            console.log(expenseForms[formToOpen]);
            openExpenseForm(expenseForms[formToOpen], formToOpen);
        });
    });
}

},{"./crudOperations.js":"2nPvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nPvR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "post", ()=>post);
var _alertJs = require("./alert.js");
async function post(req) {
    const data = JSON.stringify(req.data);
    try {
        (0, _alertJs.showAlert)("loading", req.loadingMessage);
        const res = await fetch(`${req.url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        const result = await res.json();
        if (result.status === "success") (0, _alertJs.showAlert)("success", req.successMessage);
        else (0, _alertJs.showAlert)("error", result.message);
    } catch (err) {
        console.log("err", err);
    }
}

},{"./alert.js":"kxdiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFxMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleFinancesPage", ()=>handleFinancesPage);
function handleFinancesPage() {
    const toggleExpenseDetailsBtns = document.querySelectorAll(".btn-toggle--expense-details");
    const expensesSectionEl = document.querySelector(".section-expenses");
    let financesData = JSON.parse(expensesSectionEl.getAttribute("data-financesData"));
    const { expenses, budget } = financesData;
    console.log(financesData);
    function toggleExpenseDetails() {
        toggleExpenseDetailsBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                console.log("clicked");
                if (btn.style.transform.includes("rotate(180deg)")) btn.style.transform = "";
                else btn.style.transform = "rotate(180deg)";
                const expenseParentEl = btn.closest(".expense");
                const expenseBodyEl = expenseParentEl.querySelector(".expense_body");
                expenseBodyEl.classList.toggle("hidden");
            });
        });
    }
    toggleExpenseDetails();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1jZC8","f2QDv"], "f2QDv", "parcelRequiref6bb")

//# sourceMappingURL=index.js.map
