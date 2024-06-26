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
var _activityInstructionsJs = require("./activityInstructions.js");
var _authenticationJs = require("./authentication.js");
var _dashboardJs = require("./dashboard.js");
var _expenseAndYieldInputHandlerJs = require("./expenseAndYieldInputHandler.js");
var _farmProfileJs = require("./farmProfile.js");
var _fertilizerApplicationGuideJs = require("./fertilizerApplicationGuide.js");
var _financesJs = require("./finances.js");
var _pestManagementJs = require("./pestManagement.js");
const signupForm = document.querySelector(".authentication--signup");
const loginForm = document.querySelector(".authentication--login");
const dashboard = document.querySelector(".main--dashboard");
const financesPage = document.querySelector(".main--finances");
const farmProfilePage = document.querySelector(".main--farm-profile");
const logoutBtns = document.querySelectorAll(".btn-logout");
const fertilizerApplicationGuide = document.querySelector(".main--fertilizer-application");
const pestManagementGuidePage = document.querySelector(".main--pest-management");
const activityInstructionsPage = document.querySelector(".main--activity-instructions");
if (signupForm) (0, _authenticationJs.handleSignup)(signupForm);
if (loginForm) (0, _authenticationJs.handleLogin)(loginForm);
if (dashboard) // handleExpenseAndYieldInput();
(0, _dashboardJs.HandleDashboardFunctions)();
if (financesPage) (0, _financesJs.handleFinancesPage)();
if (pestManagementGuidePage) (0, _pestManagementJs.handlePestManagementPage)();
if (fertilizerApplicationGuide) (0, _fertilizerApplicationGuideJs.handleFertilizerApplicationGuidePage)();
if (activityInstructionsPage) (0, _activityInstructionsJs.handleActivityInstructions)();
if (farmProfilePage) (0, _farmProfileJs.handleFarmProfilePage)();
if (logoutBtns) logoutBtns.forEach((btn)=>{
    (0, _authenticationJs.handleLogout)(btn);
});

},{"./activityInstructions.js":"jdlzQ","./authentication.js":"4WnuJ","./dashboard.js":"8E1QO","./expenseAndYieldInputHandler.js":"h1yDZ","./farmProfile.js":"lO1Ft","./fertilizerApplicationGuide.js":"11str","./finances.js":"hFxMF","./pestManagement.js":"fzqhH"}],"jdlzQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleActivityInstructions", ()=>handleActivityInstructions);
var _crudOperationsJs = require("./crudOperations.js");
var _pestManagementJs = require("./pestManagement.js");
async function handleActivityInstructions() {
    const currentUrl = window.location.href;
    const activityName = currentUrl.split("farm-guide/")[1];
    const goBackToFarmGuideMenuBtn = document.querySelector(".btn-open-farm-guide-menu");
    goBackToFarmGuideMenuBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.replace("/farm-guide");
    });
    console.log(activityName);
    let isLoading = true;
    const pageElements = [
        ".section-instructions--images",
        ".section-instructions--text"
    ];
    (0, _pestManagementJs.toggleLoading)(isLoading, pageElements);
    (0, _crudOperationsJs.get)({
        url: `farmGuide/${activityName}`
    }).then((result)=>{
        if (result.status === "success") {
            const activityDetails = result.data[0];
            isLoading = false;
            renderActivityInstructionDetails(activityDetails);
            (0, _pestManagementJs.toggleLoading)(isLoading, pageElements);
        }
    });
    function renderActivityInstructionDetails(activityDetails) {
        const { activity_name: activityName, required_tools: requiredTools, activity_procedure: activityProcedure, procedure_images: procedureImages } = activityDetails;
        console.log(activityDetails.activity_procedure);
        const markup = `
    <div class="row row-activity">
    <div class="flex flex-dc gap-md">
      <div class="flex flex-dc gap-sm">
        <p class="instruction_detail">
          <span>Activity</span>
          <span>${activityName}</span>
        </p>
        <p class="instruction_detail">
          <span>Purpose</span>
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</span
          >
        </p>
        <p class="instruction_detail">
          <span>Tools</span> <span>${requiredTools}</span>
        </p>
      </div>
      <div
        class="instruction_detail instruction_detail-procedure flex flex-dc gap-sm"
      >
        <h4>Procedure</h4>

        <ul class="flex flex-dc gap-sm procedure_steps">
        ${activityProcedure.map((step, index)=>`
        <li>
        <div class='flex gap-sm' >
        <span><strong>${index + 1}.</strong></span>
        <p class="procedure_step">
         ${step}
        </p>
        </div>
        </li>
        `).join("")}

        </ul>
        <div class="section-instructions--images">
          <div class="row row-activity">
            <h3>Procedure Images</h3>
            <ul class="list list-activity-images">            
            ${activityProcedure.map((image)=>`
                                  <li>
                                    <figure class="procedure_step-img">
                                      <img
                                        src="/src/fertilizer-application-methods/ring-method.jpg"
                                        alt=""
                                      />
                                      <figcaption>Step 1</figcaption>
                                    </figure>
                                  </li>
                `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
        document.querySelector(".section-instructions--text").innerHTML = "";
        document.querySelector(".section-instructions--text").insertAdjacentHTML("afterbegin", markup);
    }
}

},{"./crudOperations.js":"2nPvR","./pestManagement.js":"fzqhH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nPvR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "post", ()=>post);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "sendDelete", ()=>sendDelete);
var _alertJs = require("./alert.js");
async function post(req) {
    const data = JSON.stringify(req.data);
    console.log(data);
    try {
        (0, _alertJs.showAlert)("loading", req.loadingMessage);
        const res = await fetch(`/api/v1/${req.url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        const result = await res.json();
        if (result.status === "success") {
            (0, _alertJs.showAlert)("success", req.successMessage);
            return result;
        } else {
            (0, _alertJs.showAlert)("error", result.message);
            return result;
        }
    } catch (err) {
        console.log("err", err);
    }
}
async function get(req) {
    console.log(req);
    try {
        const res = await fetch(`/api/v1/${req.url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        if (result.status === "success") return result;
        else return {};
    } catch (err) {
        console.log(err);
    }
}
async function sendDelete(req) {
    try {
        // showAlert("loading", req.loadingMessage);
        const res = await fetch(`/api/v1/${req.url}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
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
  <ion-icon  class='icon-warning'  name="alert-circle-outline"></ion-icon>
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

},{}],"fzqhH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handlePestManagementPage", ()=>handlePestManagementPage);
parcelHelpers.export(exports, "toggleLoading", ()=>toggleLoading);
var _crudOperationsJs = require("./crudOperations.js");
async function handlePestManagementPage() {
    let isLoading = true;
    const pageElements = [
        ".row-probable-pests",
        ".row-other-pests"
    ];
    toggleLoading(isLoading, pageElements);
    const pestListsContainer = document.querySelector(".container--pest-lists");
    const pestDetailsContainer = document.querySelector(".container--pest-details");
    const goBackToFarmGuideMenuBtn = document.querySelector(".btn-open-farm-guide-menu");
    goBackToFarmGuideMenuBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.replace("/farm-guide");
    });
    const goBackToPestListsBtn = document.querySelector(".btn-open-pest-lists");
    goBackToPestListsBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        goBackToPestLists();
    });
    function goBackToPestLists() {
        pestDetailsContainer.classList.add("hidden");
        pestListsContainer.classList.remove("hidden");
    }
    (0, _crudOperationsJs.get)({
        url: "farmGuide/pest-management"
    }).then((result)=>{
        if (result.status === "success") {
            const pests = result.data;
            isLoading = false;
            toggleLoading(isLoading, [
                ".row-other-pests"
            ]);
            console.log(pests);
            renderOtherPestsList(pests);
        }
    });
    function renderPestListItem(pest) {
        const { pest_id: pestId, pest_name: pestName, pest_symptoms: symptoms, required_tools: tools, required_pesticide: pesticide, pesticide_application_procedure: pesticideApplicationProcedure } = pest;
        const markup = ` 
      <li class="pest">
      <div class="pest_img-box">
        <img
          src="../src/Coffee-diseases/coffee-berry-disease-1.jpg"
          alt=""
          class="pest_image"
        />
      </div>
      <span class="pest_name">${pestName}</span>
      <button class="btn btn-primary btn-medium btn-open-more-details" id=${pestId}>
        See more details
      </button>
      </li>

      
`;
        return markup;
    }
    function renderOtherPestsList(otherPestsList) {
        let otherPestsListItemsMarkup = `${otherPestsList.map((pest)=>renderPestListItem(pest)).join("")}`;
        document.querySelector(".list-other-pests").innerHTML = "";
        document.querySelector(".list-other-pests").insertAdjacentHTML("afterbegin", otherPestsListItemsMarkup);
        handlePestLists(otherPestsList);
    }
    function handlePestLists(pestList) {
        const openPestDetailsBtns = document.querySelectorAll(".btn-open-more-details");
        console.log(openPestDetailsBtns);
        openPestDetailsBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                pestListsContainer.classList.add("hidden");
                pestDetailsContainer.classList.remove("hidden");
                console.log("helllooo");
                const selectedPestId = btn.getAttribute("id") * 1;
                const pestToShow = pestList.find((pest)=>pest.pest_id === selectedPestId);
                renderMorePestDetails(pestToShow);
            });
        });
    }
    function renderMorePestDetails(pest) {
        const { pest_id: pestId, pest_name: pestName, pest_symptoms: symptoms, pest_symptoms_images: symptomsImages, required_tools: requiredTools, required_pesticide: requiredPesticide, pesticide_application_procedure: pesticideApplicationProcedure } = pest;
        const pestDetailsMarkup = `
    <div class="row flex flex-dc">
    <div class="flex flex-dc gap-md">
      <div class="flex flex-dc gap-sm">
        <p class="pest_detail">
          <span>Pest Name</span>
          <span>${pestName}</span>
        </p>
        <div class="pest_detail pest_detail-symptoms flex flex-dc gap-sm">
          <h4>Symptoms</h4>
          <ul class="flex flex-dc gap-sm pest_symptoms">
               ${symptoms.map((symptom)=>`<li>
                                  <p class="pest_symptom">
                                  ${symptom}
                                  </p>
                                </li>`).join("")}
          </ul>
        </div>
        <div>
          <div class="pest_detail flex-dc flex gap-sm section-symptoms--images">
            <h4>Symptom Images</h4>
            <ul class="list list-activity-images list-symptoms-images">
                  ${symptoms.map((image)=>`
                                        <li>
                                          <figure class="procedure_step-img">
                                            <img
                                              src="/src/fertilizer-application-methods/ring-method.jpg"
                                              alt=""
                                            />
                                            <figcaption>Step 1</figcaption>
                                          </figure>
                                        </li>
                      `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    `;
        const pestControlDetailsMarkup = `
    <div class="flex flex-dc gap-md">
    <div class="flex flex-dc gap-sm">
      <p class="instruction_detail">
        <span>Required Pesticide</span>
        <span
          >${requiredPesticide}</span
        >
      </p>
      <p class="instruction_detail">
      <span>Required Tools</span>
        <span>${requiredTools}</span>
      </p>
    </div>
    <div
      class="instruction_detail instruction_detail-procedure flex flex-dc gap-sm"
    >
      <h4>Procedure</h4>

      <ul class="flex flex-dc gap-sm procedure_steps">
      ${pesticideApplicationProcedure.map((step, index)=>`
          <li>
          <p class="procedure_step">
        <strong>Step ${index + 1}: </strong>${step}
        </p>
        </li>
          `).join("")}
      </ul>
      <div class="section-instructions--images">
        <div class="row row-activity">
          <h3>Procedure Images</h3>
          <ul class="list list-activity-images">
          ${symptoms.map((image)=>`
                                <li>
                                  <figure class="procedure_step-img">
                                    <img
                                      src="/src/fertilizer-application-methods/ring-method.jpg"
                                      alt=""
                                    />
                                    <figcaption>Step 1</figcaption>
                                  </figure>
                                </li>
              `).join("")}
            
          </ul>
        </div>
      </div>
    </div>
  </div>


`;
        document.querySelector(".section-details--text").innerHTML = "";
        document.querySelector(".pest-control--instructions").innerHTML = "";
        document.querySelector(".section-details--text").insertAdjacentHTML("afterbegin", pestDetailsMarkup);
        document.querySelector(".pest-control--instructions").insertAdjacentHTML("afterbegin", pestControlDetailsMarkup);
    }
}
function toggleLoading(isLoading, elements) {
    if (isLoading) elements.forEach((el)=>{
        document.querySelectorAll(el).forEach((el)=>{
            el.classList.add("loading");
            el.querySelectorAll("button").forEach((btn)=>btn.disabled = true);
            el.querySelectorAll("input").forEach((input)=>input.disabled = true);
        });
    });
    else elements.forEach((el)=>{
        document.querySelectorAll(el).forEach((el)=>{
            el.classList.remove("loading");
            el.querySelectorAll("button").forEach((btn)=>btn.removeAttribute("disabled"));
            el.querySelectorAll("input").forEach((input)=>input.removeAttribute("disabled"));
        });
    });
}

},{"./crudOperations.js":"2nPvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WnuJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleSignup", ()=>handleSignup);
parcelHelpers.export(exports, "handleLogin", ()=>handleLogin);
parcelHelpers.export(exports, "handleLogout", ()=>handleLogout);
var _alertJs = require("./alert.js");
var _crudOperationsJs = require("./crudOperations.js");
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
        (0, _alertJs.showAlert)("loading", "Logging in...");
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
async function logout(data) {
    try {
        (0, _alertJs.showAlert)("loading", "Logging out...");
        const response = await fetch("/api/v1/authentication/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
        if (result.status !== "success") (0, _alertJs.showAlert)("error", result.message);
        else window.location.assign("/login");
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
    const isRedirectFromAuthentication = loginForm.getAttribute("data-isRedirectFromAuthentication");
    if (isRedirectFromAuthentication === "true") (0, _alertJs.showAlert)("warning", "You are not logged in. Login to continue");
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
async function handleLogout(logoutBtn) {
    logoutBtn.addEventListener("click", function(e) {
        e.preventDefault();
        logout();
    });
}

},{"./alert.js":"kxdiQ","./crudOperations.js":"2nPvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8E1QO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HandleDashboardFunctions", ()=>HandleDashboardFunctions);
var _alertJs = require("./alert.js");
var _crudOperationsJs = require("./crudOperations.js");
async function HandleDashboardFunctions() {
    const expenseDialog = document.getElementById("dialog--expenses");
    const scheduleDialog = document.getElementById("dialog--schedule");
    const openDialogBtns = document.querySelectorAll(".btn-open-dialog");
    const showFarmInputBtns = document.querySelectorAll(".btn-show-farmInput");
    const closeDialogBtns = document.querySelectorAll(".btn-close-modal");
    function closeDialog(el) {
        el.closest("dialog").close();
        window.location.reload();
    }
    closeDialogBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            closeDialog(btn);
        });
    });
    // let openExpenseDialogAndFormBtns = document.querySelectorAll(
    //   ".btn-open-expense-dialog-and-form"
    // );
    const openScheduleDialogAndFormBtns = document.querySelectorAll(".btn-open-schedule-dialog-and-form");
    const openExpenseFormBtns = document.querySelectorAll(".btn-open-expense-form");
    const openActivityFormBtns = document.querySelectorAll(".btn-open-activity-form");
    function convertSnakeCaseToCamelCase(word) {
        return word.replace(/_([a-z])/g, function(match, letter) {
            return letter.toUpperCase();
        });
    }
    function convertCamelCaseToSnakeCase(word) {
        return word.replace(/[A-Z]/g, function(match) {
            return "_" + match.toLowerCase();
        });
    }
    function renameObjectKeys(oldObject, namingConvention) {
        const newObject = {};
        if (Object.keys(oldObject).length > 0) for(const key in oldObject){
            let newKey;
            if (namingConvention === "camelCase") newKey = convertSnakeCaseToCamelCase(key);
            if (namingConvention === "snakeCase") newKey = convertCamelCaseToSnakeCase(key);
            newObject[newKey] = oldObject[key];
        }
        return newObject;
    }
    const fetchScheduleActivities = async ()=>{
        const req = {
            url: "activities/"
        };
        const scheduleActivities = await (0, _crudOperationsJs.get)(req).then((result)=>result.data);
        return scheduleActivities;
    };
    const scheduleActivities = await fetchScheduleActivities();
    const thisMonthsRecommendedActivities = await (0, _crudOperationsJs.get)({
        url: "activities/recommended-this-month"
    }).then((result)=>result.data);
    thisMonthsRecommendedActivities.forEach((activity)=>{
        const listItemMarkup = createRecommendedActivitiesListItemMarkup(activity);
        document.querySelector(".recommended-activities").insertAdjacentHTML("afterbegin", listItemMarkup);
        handleRecommendedActivities();
    });
    function renderScheduleActivities() {
        scheduleActivities.forEach((activity)=>{
            const listItemMarkup = createScheduleListItemMarkup(activity.activity_details, activity.activity_id);
            document.querySelector(".schedule_activities-list").insertAdjacentHTML("afterbegin", listItemMarkup);
        });
        handleScheduleActivities();
    }
    renderScheduleActivities();
    const fetchFarmInputs = async ()=>{
        const req = {
            url: "farmInputs/"
        };
        const farmInputs = await (0, _crudOperationsJs.get)(req).then((result)=>result.data);
        let farmInputsWithRenamedDetails = [];
        console.log(farmInputs);
        if (farmInputs.length > 1) farmInputsWithRenamedDetails = farmInputs.map((farmInput)=>{
            return renameObjectKeys(farmInput, "camelCase");
        });
        console.log(farmInputsWithRenamedDetails);
        const availableFarmInputs = Object.groupBy(farmInputsWithRenamedDetails, ({ farmInputType })=>farmInputType);
        return availableFarmInputs;
    };
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
        pesticide: [
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
    const activityFormDefaultFields = [
        {
            id: "activityDate",
            label: "Date",
            type: "date"
        },
        {
            id: "activityTime",
            label: "Time to start",
            type: "time"
        },
        {
            id: "hoursRequired",
            label: "Hours required",
            type: "number"
        },
        {
            id: "subForm",
            heading: "Labour",
            optionButtons: [
                {
                    label: "Do it yourself",
                    unHides: null
                },
                {
                    label: "Hire labourers",
                    unHides: [
                        "numberOfLaborers",
                        "payRate"
                    ]
                }
            ],
            fields: [
                {
                    id: "numberOfLaborers",
                    label: "Number of Laborers",
                    type: "number"
                },
                {
                    id: "payRate",
                    label: "Pay Rate",
                    type: "number"
                }
            ]
        }
    ];
    const activityForms = {
        picking: [
            {
                id: "activityDate",
                label: "Date",
                type: "date"
            },
            {
                id: "activityTime",
                label: "Time to start",
                type: "time"
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
                id: "hoursRequired",
                label: "Hours required",
                type: "number"
            }
        ],
        pruning: [
            {
                id: "activityDate",
                label: "Date",
                type: "date"
            },
            {
                id: "activityTime",
                label: "Time to start",
                type: "time"
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
                id: "hoursRequired",
                label: "Hours required",
                type: "number"
            }
        ],
        pesticideApplication: [
            {
                id: "pesticide",
                label: "Pesticide",
                type: "select",
                options: [
                    "Picking",
                    "Fertilizer Application",
                    "Pesticide Application",
                    "Pruning"
                ]
            },
            {
                id: "quantity",
                label: "Quantity",
                type: "number"
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
                id: "hoursRequired",
                label: "Hours Required",
                type: "number"
            }
        ],
        fertilizerApplication: [
            {
                id: "subForm",
                heading: "fertilizer",
                optionButtons: [
                    "Choose from available Pesticides",
                    "Buy different type"
                ],
                fields: [
                    {
                        id: "fertilizer",
                        label: "Fertilizer",
                        type: "select",
                        options: [
                            "Picking",
                            "Fertilizer Application",
                            "Pesticide Application",
                            "Pruning"
                        ]
                    },
                    {
                        id: "requiredQuantity",
                        label: "Fertilizer quantity required",
                        type: "number"
                    },
                    {
                        id: "quantityToPurchase",
                        label: "Fertilizer quantity to purchase",
                        type: "number"
                    },
                    {
                        id: "purchaseCost",
                        label: "Fertilizer purchase cost",
                        type: "number"
                    }
                ]
            },
            {
                id: "hoursRequired",
                label: "Hours required",
                type: "number"
            }
        ]
    };
    const availableFarmInputs = await fetchFarmInputs();
    function convertKeyNamesfromSnakeToCamelCase(oldObject) {
        const newObject = {};
        if (Object.keys(oldObject).length > 0) for(const key in oldObject){
            const newKey = convertSnakeCaseToCamelCase(key);
            newObject[newKey] = oldObject[key];
        }
        return newObject;
    }
    console.log("item", availableFarmInputs);
    Object.keys(availableFarmInputs).length;
    // console.log(convertCamelCaseToSnakeCase("helloThere"));
    console.log(availableFarmInputs);
    const availableFarmInputss = {
        pesticide: [
            {
                description: "some pesticide",
                quantity: 5,
                measurementUnit: "Litres",
                id: 2
            },
            {
                description: "Another pesticide",
                quantity: 5,
                measurementUnit: "Litres",
                id: 2
            }
        ],
        fertilizer: [
            {
                description: "CAN",
                quantity: 5,
                measurementUnit: "Litres",
                id: 2
            },
            {
                description: "Manure",
                measurementUnit: "Kilograms",
                quantity: 5,
                id: 2
            }
        ]
    };
    function createFarmInputListItemsMarkup(farmInput) {
        const farmInputItems = availableFarmInputs[farmInput] ?? [];
        let listItemsMarkup = ``;
        farmInputItems.forEach((item)=>{
            listItemsMarkup += `
                            <li class="row row--item"
                              data-item-details='${JSON.stringify({
                farmInputId: item.farmInputId,
                farmInputType: item.farmInputType,
                description: item.description,
                currentQuantity: item.quantity,
                measurementUnit: item.measurementUnit
            })}'>
                              <span>${item.description}</span>
                              <span>${item.quantity} ${item.measurementUnit === "Litres" ? "Ltr" : item.measurementUnit === "Kilograms" ? "Kg" : item.measurementUnit}</span>
                              <button
                                class="btn btn-small btn-primary btn-icon btn-open-expense-dialog-and-form"
                                data-opens=${farmInput}
                                data-item-='${item.farmInputId}'>
                                <ion-icon name="add-outline"></ion-icon>
                                <span>Add More</span>
                              </button>
                              <button class="btn btn-icon-only btn-delete-farmInput">
                                <ion-icon name="trash-outline"></ion-icon>
                              </button>
                            </li>
`;
        });
        return listItemsMarkup;
    }
    function renderAvailableFarmInput(btn) {
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            console.log(btn);
            const farmInputToShow = btn.getAttribute("data-shows");
            const listItemsMarkup = createFarmInputListItemsMarkup(farmInputToShow);
            const farmInputInvetoryListEl = document.querySelector(".farm-input-inventory");
            btn.classList.add("disabled");
            showFarmInputBtns.forEach((item)=>{
                if (btn !== item) {
                    item.classList.remove("disabled");
                    item.disabled = false;
                }
            });
            btn.disabled = true;
            farmInputInvetoryListEl.innerHTML = "";
            farmInputInvetoryListEl.insertAdjacentHTML("afterBegin", listItemsMarkup);
            const addDifferentFarmInputBtn = farmInputInvetoryListEl.parentNode.parentNode.querySelector(".btn-add-different-farm-input");
            addDifferentFarmInputBtn.setAttribute("data-opens", farmInputToShow);
            addDifferentFarmInputBtn.querySelector("span").textContent = `Add Different ${capitilizeFirstLetter(farmInputToShow)}`;
            handleFarmInputInventory(btn);
        });
    }
    function handleFarmInputInventory() {
        const openExpenseDialogAndFormBtns = document.querySelectorAll(".btn-open-expense-dialog-and-form");
        const deleteFarmInputBtns = document.querySelectorAll(".btn-delete-farmInput");
        openExpenseDialogAndFormBtns.forEach((btn)=>{
            const farmInputToShow = btn.getAttribute("data-shows");
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                const itemId = btn.getAttribute("data-item-id") * 1;
                const formToOpen = btn.getAttribute("data-opens");
                if (itemId) {
                    const itemDetails = btn.closest("li")?.getAttribute("data-item-details");
                    const formValues = JSON.parse(itemDetails);
                    expenseDialog.showModal();
                    const isEditMode = true;
                    openForm(e, btn, "expense", formValues, isEditMode);
                } else {
                    expenseDialog.showModal();
                    openForm(e, btn, "expense");
                }
            });
        });
        deleteFarmInputBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                const itemDetails = btn.closest("li")?.getAttribute("data-item-details");
                const farmInputData = JSON.parse(itemDetails);
                const { farmInputId, description, farmInputType } = farmInputData;
                const confirmDeleteModal = document.createElement("dialog");
                confirmDeleteModal.setAttribute("id", "dialog-confirm-delete-farmInput");
                confirmDeleteModal.classList.add("dialog");
                const confirmDeleteMarkup = `
        <div class='flex'>
          <button class='btn btn-icon-only btn-close-modal ml-auto'>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <form>
        <h3>Discard ${capitilizeFirstLetter(farmInputType)}</h3>
        <div class='flex flex-dc gap-md'>
        <span class='intruction-text'>
          Are you sure you want ot remove ${description} from the inventory?
        </span>
        <div class="flex gap-md ml-auto">
          <button type='button' class="btn btn-medium btn-secondary btn-close-modal">Cancel</button>
          <button type='button' class="btn btn-medium btn-danger btn-confirm-delete">Delete</button>
        </div>
        </div>
        </form>
`;
                confirmDeleteModal.innerHTML = confirmDeleteMarkup;
                btn.parentElement.insertAdjacentElement("afterbegin", confirmDeleteModal);
                confirmDeleteModal.showModal();
                confirmDeleteModal.querySelectorAll(".btn-close-modal").forEach((btn)=>{
                    btn.addEventListener("click", (e)=>{
                        e.preventDefault();
                        confirmDeleteModal.close();
                    });
                });
                confirmDeleteModal.querySelector(".btn-confirm-delete").addEventListener("click", (e)=>{
                    e.preventDefault();
                    (0, _crudOperationsJs.sendDelete)({
                        url: `farmInputs/${farmInputId}`,
                        loadingMessage: `Removing ${description} from inventory...`
                    }).then((result)=>{
                        if (result.status === "success") {
                            confirmDeleteModal.close();
                            (0, _alertJs.showAlert)("success", `${capitilizeFirstLetter(description)} removed successfully`);
                        }
                    });
                });
                console.log(farmInputData);
            });
        });
    }
    function handleRecommendedActivities() {
        const openScheduleDialogAndFormBtns = document.querySelectorAll(".btn-open-schedule-dialog-and-form");
        openScheduleDialogAndFormBtns.forEach((btn)=>{
            console.log(btn);
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                const formToOpen = btn.getAttribute("data-opens");
                const activityDetails = JSON.parse(btn.closest("li").getAttribute("data-activity-details"));
                const farmInputType = formToOpen.includes("Application") ? formToOpen.split("Application")[0] : false;
                const farmInput = activityDetails.required_farm_input;
                const measurementUnit = activityDetails.farm_input_measurement_unit;
                console.log(farmInput);
                scheduleDialog.showModal();
                // dialogContentEl.removeChild(selectExpenseForm);
                if (farmInput && farmInputType) {
                    let formValues = {};
                    if (availableFarmInputs[farmInputType].find((item)=>item.description === farmInput)) formValues = {
                        [farmInputType]: farmInput,
                        measurementUnit
                    };
                    else formValues = {
                        [`${farmInputType}ToPurchase`]: farmInput,
                        measurementUnit
                    };
                    openForm(e, btn, "activity", formValues);
                }
                console.log(formToOpen);
                openForm(e, btn, "activity");
            // handleFormOpen();
            });
        });
    }
    showFarmInputBtns.forEach((btn)=>{
        renderAvailableFarmInput(btn);
    });
    showFarmInputBtns[0].removeAttribute("disabled");
    showFarmInputBtns[0].click();
    console.log("btn", showFarmInputBtns[0]);
    function createMarkup2(formDetails, formHeading, formType) {
        console.log(formDetails);
        function createFormRow2(el) {
            const label = `<label for=${el.id}>${el.label}</label>`;
            let input;
            if (el.type !== "select") input = `<input id=${el.id} class="input" type=${el.type} required />`;
            else {
                input = `<select id=${el.id} class="input" required>
                                <option value="">--Choose from available ${el.id}s--</option>`;
                el.options.forEach((option)=>input += `<option value=${option}>${option}</option>`);
                input += `</select>`;
            }
            return `<div class="form-row form-row--horizontal">${label}${input}</div>`;
        }
        const elements = activityFormFields.map((el)=>{
            if (el.id === "subForm") {
                let markup = `<div class='subform'>
                        <h3>${el.heading}</h3>`;
                el.fields.forEach((field)=>{
                    markup += createFormRow(field);
                });
                markup += `</div>`;
                return markup;
            } else return createFormRow(el);
        });
        console.log(elements);
        return elements;
    }
    function handleScheduleActivities() {
        const openActivityPopoverBtns = document.querySelectorAll(".btn-trigger-popover");
        const cancelActivityBtns = document.querySelectorAll(".btn-cancel-activity");
        const completeActivityBtns = document.querySelectorAll(".btn-complete-activity");
        openActivityPopoverBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                const currentPopover = btn.closest(".schedule_activity-btns").querySelector(".popover");
                document.querySelectorAll(".popover").forEach((popover)=>{
                    if (popover !== currentPopover) popover.classList.add("hidden");
                });
                currentPopover.classList.toggle("hidden");
            });
        });
        completeActivityBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                const activityListItemEl = btn.closest("li");
                const activityId = activityListItemEl.getAttribute("data-activity-id") * 1;
                const activity = scheduleActivities.find((activity)=>activity.activity_id === activityId);
                btn.textContent = "Updating activity...";
                (0, _crudOperationsJs.post)({
                    url: `activities/${activityId}`,
                    data: {
                        activity_status: "completed"
                    },
                    loadingMessage: "Updating activity...",
                    successMessage: "Activity completed successfully"
                }).then((result)=>{
                    if (result.status === "success") {
                        btn.textContent = "Activity updated";
                        activityListItemEl.parentNode.removeChild(activityListItemEl);
                    }
                });
            });
        });
        cancelActivityBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                const activityListItemEl = btn.closest("li");
                const activityId = activityListItemEl.getAttribute("data-activity-id") * 1;
                const activity = scheduleActivities.find((activity)=>activity.activity_id === activityId);
                btn.textContent = "Cancelling activity...";
                const { farmInputName, farmInputType, requiredQuantity } = activity.activity_details;
                console.log(farmInputName, farmInputType, activity.activity_details);
                if (farmInputName) {
                    const farmInput = availableFarmInputs[farmInputType].find((item)=>item.description === farmInputName);
                    const { farmInputId, quantity } = farmInput;
                    const newQuantity = quantity + requiredQuantity;
                    (0, _crudOperationsJs.post)({
                        url: `farmInputs/${farmInputId}`,
                        data: {
                            farmInputData: {
                                quantity: newQuantity
                            }
                        },
                        loadingMessage: `Updating ${farmInputName} quantity`,
                        successMessage: `${capitilizeFirstLetter(farmInputName)} quantity updated`
                    }).then((result)=>{
                        if (result.status === "success") (0, _crudOperationsJs.sendDelete)({
                            url: `expenses/labour/${activityId}`
                        }).then((result)=>{
                            if (result.status === "success") (0, _crudOperationsJs.post)({
                                url: `activities/${activityId}`,
                                data: {
                                    activity_status: "cancelled"
                                },
                                loadingMessage: "Cancelling activity...",
                                successMessage: "Activity cancelled successfully"
                            }).then((result)=>{
                                if (result.status === "success") {
                                    btn.textContent = "Activity cancelled";
                                    activityListItemEl.parentNode.removeChild(activityListItemEl);
                                }
                            });
                        });
                    });
                } else (0, _crudOperationsJs.sendDelete)({
                    url: `expenses/labour/${activityId}`
                }).then((result)=>{
                    if (result.status === "success") {
                        console.log(activityId);
                        (0, _crudOperationsJs.post)({
                            url: `activities/${activityId}`,
                            data: {
                                activity_status: "cancelled"
                            },
                            loadingMessage: "Cancelling activity...",
                            successMessage: "Activity cancelled successfully"
                        }).then((result)=>{
                            if (result.status === "success") {
                                btn.textContent = "Activity cancelled";
                                activityListItemEl.parentNode.removeChild(activityListItemEl);
                            }
                        });
                    }
                });
                console.log(activity);
            // sendDelete({ url: `activities/${activityId}` }).then((result) => {
            //   if (result.status === "success") {
            //     btn.textContent = "Activity cancelled";
            //     // activityListItemEl.parentNode.removeChild(activityListItemEl);
            //   }
            // });
            });
        });
    }
    function capitilizeFirstLetter(word) {
        const capitilizedFirstLetterWord = word.charAt(0).toUpperCase() + word.slice(1);
        console.log(capitilizedFirstLetterWord);
        return capitilizedFirstLetterWord;
    }
    function createMarkup(farmInput, formType, formHeading, isEditMode) {
        function createExpenseFormDetails(formHeading, farmInput) {
            let formDetails = [
                {
                    id: "transactionDate",
                    label: "Date of Purchase",
                    type: "date"
                },
                {
                    id: "description",
                    label: `${farmInput ? capitilizeFirstLetter(farmInput) : "Description"}`,
                    type: "text"
                }
            ];
            if (farmInput) {
                const quantityPurchasedField = {
                    id: "quantity",
                    label: "Quantity",
                    type: "number"
                };
                formDetails = [
                    ...formDetails,
                    quantityPurchasedField,
                    {
                        id: "measurementUnit",
                        label: "Measurement Unit",
                        defaultOption: "Choose measurement unit",
                        type: "select",
                        options: [
                            "Litres",
                            "Kilograms"
                        ]
                    }
                ];
            }
            formDetails = [
                ...formDetails,
                {
                    id: "cost",
                    label: "Cost",
                    type: "number"
                }
            ];
            return formDetails;
        }
        function createActivityFormDetails(farmInput) {
            let formDetails = [
                ...activityFormDefaultFields
            ];
            if (farmInput) {
                const farmInputRequiredQuantityField = {
                    id: "requiredQuantity",
                    label: `${capitilizeFirstLetter(farmInput.type)} quantity required`,
                    type: "number"
                };
                const farmInputSubForm = {
                    id: "subForm",
                    heading: capitilizeFirstLetter(farmInput.type),
                    optionButtons: [
                        {
                            label: `Choose from available ${farmInput.type}s `,
                            unHides: [
                                farmInput.type,
                                "requiredQuantity"
                            ]
                        },
                        {
                            label: "Buy different type",
                            unHides: [
                                `${farmInput.type}ToPurchase`,
                                "quantityToPurchase",
                                "measurementUnit",
                                "requiredQuantity",
                                "purchaseCost"
                            ]
                        }
                    ],
                    fields: [
                        {
                            id: farmInput.type,
                            label: farmInput.type,
                            defaultOption: `Choose from available ${farmInput.type}s`,
                            type: "select",
                            options: farmInput.availableOptions
                        },
                        {
                            id: `${farmInput.type}ToPurchase`,
                            label: `${capitilizeFirstLetter(farmInput.type)}`,
                            type: "text"
                        },
                        farmInputRequiredQuantityField,
                        {
                            id: "quantityToPurchase",
                            label: `${capitilizeFirstLetter(farmInput.type)} quantity to purchase`,
                            type: "number"
                        },
                        {
                            id: "measurementUnit",
                            label: "Measurement Unit",
                            defaultOption: "Choose measurement unit",
                            type: "select",
                            options: [
                                "Litres",
                                "Kilograms"
                            ]
                        },
                        {
                            id: "purchaseCost",
                            label: `${capitilizeFirstLetter(farmInput.type)} purchase cost`,
                            type: "number"
                        }
                    ]
                };
                formDetails = [
                    ...formDetails,
                    farmInputSubForm
                ];
            }
            console.log(formDetails);
            return formDetails;
        }
        function createFormRow1(el, createHidden = false) {
            const label = `<label for=${el.id}>${el.label}</label>`;
            let input;
            if (el.type !== "select") input = `<input name=${el.id} id=${el.id} class="input" ${createHidden ? "disabled" : ""} type=${el.type} required />`;
            else {
                input = `<select id=${el.id} class="input" ${createHidden ? "disabled" : ""}   required>
                                <option value="">--${el.defaultOption}--</option>`;
                el.options.forEach((option)=>{
                    console.log(option.replace(" ", "-"));
                    return input += `<option  value='${option}'>${option}</option>`;
                });
                input += `</select>`;
            }
            return createHidden ? `<div class="form-row  form-row--horizontal hidden">${label}${input}</div>` : `<div class="form-row form-row--horizontal">${label}${input}</div>`;
        }
        const formDetails = formType === "expense" ? createExpenseFormDetails(formHeading, farmInput) : formType === "activity" ? createActivityFormDetails(farmInput) : false;
        const elements = formDetails?.map((el)=>{
            if (el.id === "subForm") {
                let subFromMarkup = `<div class='sub-form '>
                        <div class="form-row form-row--horizontal sub-form_option-buttons-row">
                          <label class='sub-form_label'>${el.heading}</label>
                          <div class='flex flex-dc gap-sm'>`;
                el.optionButtons.forEach((button)=>{
                    subFromMarkup += `<button  type='button' class='btn btn-medium btn-secondary btn-unHide-form-fields' data-unHides=${JSON.stringify(button.unHides)}>
                              ${button.label}
                              </button>

                          `;
                });
                subFromMarkup += `</div>
                          </div>`;
                el.fields.forEach((field)=>{
                    subFromMarkup += createFormRow1(field, true);
                });
                subFromMarkup += `</div>`;
                return subFromMarkup;
            } else return createFormRow1(el);
        });
        let markup = `
                          <form class='form dialog_content--input dialog_content--input-${formType}-details 'data-isEditMode=${isEditMode}>
                            ${formType === "expense" ? `<h2>Enter ${capitilizeFirstLetter(formHeading)} Expense Details</h2>
                            <div class="form-row form-row--horizontal hidden">
                              <label for="expense">Expense</label>
                              <input id='expense' class="input input--expense " disabled value=${formHeading} required type="text" />
                            </div>

                            ` : `<h2>Enter ${formHeading.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(",").replace(",", " ")} Activity Details</h2>
                                    <div class="form-row form-row--horizontal hidden">
                                      <label for="activity">Activity</label>
                                      <input id='activity' class="input input--activity "  disabled value=${formHeading} required type="text" />
                                    </div>

                                    `}

                          `;
        elements.forEach((el)=>markup += el);
        if (formType === "expense") markup += `
                          <div class="form-row form-row--horizontal">
                              <label for="total">Total</label>
                              <input id='total' class="input" type="number" />
                            </div>
                         `;
        markup += `

                          <div class="btns-row">
                            <button class="btn btn-secondary btn-large open-select-expense-form" type='button' >Back</button>
                            <button class="btn btn-secondary btn-large btn-close-modal"  type='button' >Cancel</button>
                            <button class="btn btn-primary btn-large btn-open-confirm-expense-form">${formType === "expense" ? "Submit" : "Add to schedule"}</button>
                          </div>
                          </form>`;
        return markup;
    }
    const expenseDescriptionDetailValues = {
        labour: {
            activity: "Fertilizer Application",
            laborers: 15,
            payRate: 150,
            hours: 10,
            totalCost: 67500
        },
        pesticidePurchase: {
            pesticide: "Fertilizer Application",
            measurementUnit: "Litres",
            quantity: 15,
            cost: 150,
            totalCost: 6750
        },
        fertilizerPurchase: {
            fertilizer: "Fertilizer Application",
            measurementUnit: "Litres",
            quantity: 15,
            cost: 150,
            totalCost: 67500
        }
    };
    function formatCamelCaseToNormal(word) {
        const formattedWord = word.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(",").replace(",", " ");
        return formattedWord;
    }
    function formatTimeToTwelveHourFormat(timeString) {
        const hours = parseInt(timeString.split(":")[0]);
        const minutes = timeString.split(":")[1];
        console.log(hours - 12);
        const time = hours - 12 === -12 ? `12 : ${minutes} AM` : hours - 12 > 0 ? `${hours - 12}:${minutes} PM` : `${hours.toString().padStart(2, "0")}:${minutes} AM`;
        return time;
    }
    function createRecommendedActivitiesListItemMarkup(activityData) {
        const { activity, required_farm_input: farmInput } = activityData;
        const activityName = capitilizeFirstLetter(formatCamelCaseToNormal(activity));
        const icon = activity.split("Application")[0];
        const markup = `
    <li class="activity" data-activity-details='${JSON.stringify(activityData)}'>
      <span class="icon"
        ><img
          class="image-icon-sm"
          src="../src/${icon}.png"
          alt=""
        />
      </span>
      <div class="activity_details flex flex-dc">
        <span>${activityName}</span>
        <span> ${farmInput ? `- ${farmInput}` : ""}</span>
      </div>

      <button
        class="btn btn-small btn-primary btn-open-schedule-dialog-and-form"
        data-opens="${activity}"
      >
        Add to schedule
      </button>
  </li>
    `;
        return markup;
    }
    function createScheduleListItemMarkup(activityData, activityId) {
        console.log("activityData", activityData);
        let { activity, activityTime, activityDate, farmInputName: farmInput } = activityData;
        // const farmInput =
        //   activityData.fertilizer ?? activityData.pesticide ?? false;
        // const farmInput =
        //   activityData.fertilizer ?? activityData.pesticide ?? false;
        const icon = activity.split("Application")[0];
        activity = formatCamelCaseToNormal(activity);
        activityTime = formatTimeToTwelveHourFormat(activityTime);
        activityDate = new Date(activityDate);
        activityDate = activityDate.toLocaleDateString("en-us", {
            month: "short",
            day: "numeric"
        });
        console.log(activityData);
        const scheduleListItemMarkup = ` 
           <li class="list-item schedule_activity" data-activity-id='${activityId}'>
            <span class="schedule_activity-icon">
              <img class="icon-image" src="../src/${icon}.png" alt="" />
            </span>
            <div class="flex flex-dc">
              <div class='flex max-width'>
                <div class="flex flex-dc">
                <span class="schedule_activity-name">${activity}</span>
                ${farmInput ? `
                <span class="schedule_activity-farmInput">${farmInput}</span>
                  
                  ` : `
                <span class="schedule_activity-farmInput">&nbsp;</span>
                  
                  `}
                </div>
                <div class='schedule_activity-btns max-width ml-auto'>
                <button class='btn btn-icon-only--sm ml-auto btn-trigger-popover' >
                <ion-icon name="ellipsis-vertical"></ion-icon>
                </button>
              
             
                <div class='popover popover--schedule hidden' id='schedule-btns--${activityId}'>
                <button class='btn btn-small btn-icon btn-cancel-activity btn-close-modal'>
                <ion-icon name="trash-outline"></ion-icon>
                
                Cancel activity</button>
                <button class='btn btn-small btn-icon btn-complete-activity'>
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                Mark as done</button>
                </div>
                </div>
              
                </div>
              <div class="flex flex-dr ${farmInput ? "mt-tiny" : "m"} height-max">
                <span class="schedule_activity-date">${activityDate}</span>
                <span class="schedule_activity-time ml-auto"
                  >${activityTime}</span
                >
              </div>
            </div>
          </li>`;
        return scheduleListItemMarkup;
    }
    function createConfirmExpensesFormMarkup(expenseDescriptionDetailValues) {
        const expenseDescriptionDetailLabels = {
            labour: [
                {
                    id: "activity",
                    label: "Activity"
                },
                {
                    id: "laborers",
                    label: "Laborers"
                },
                {
                    id: "payRate",
                    label: "Pay Rate"
                },
                {
                    id: "hoursRequired",
                    label: "Hours"
                }
            ],
            pesticidePurchase: [
                {
                    id: "pesticide",
                    label: "Pesticide"
                },
                {
                    id: "quantity",
                    label: "Quantity"
                },
                {
                    id: "purchaseCost",
                    label: "Cost"
                }
            ],
            fertilizerPurchase: [
                {
                    id: "fertilizer",
                    label: "Fertilizer"
                },
                {
                    id: "quantity",
                    label: "Quantity"
                },
                {
                    id: "purchaseCost",
                    label: "Cost"
                }
            ]
        };
        const expenses = Object.keys(expenseDescriptionDetailValues);
        console.log(expenses);
        let markup = `<form class="form dialog_content dialog_content-confirm">
                                      <h2>Confirm Activity Expenses</h2>
                                      <div class="activity_expenses flex flex-dc gap-md">
                                        <div>
                                          <ul class="list expense_list expense_list--labor">

                                            <li class="expense_list-item header-row">
                                              <span>Expense</span>
                                              <span>Description</span>
                                              <span>Total</span>

                                            </li>
                                        `;
        const expenseListItems = expenses.map((expense)=>{
            let listItemMarkup = ` <li class="expense_list-item values-row">
                                              <span class="item_detail">${expense.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(",").replace(",", " ")}</span>
                                              <div class="item_detail item_detail-description">`;
            const descriptionDetails = expenseDescriptionDetailLabels[expense];
            descriptionDetails.forEach((detail)=>{
                listItemMarkup += `   <div>
                                      <span>${detail.label}</span>
                                      <span>
                                        ${expenseDescriptionDetailValues[expense][detail.id]}
                                      </span>
                                    </div>`;
            });
            listItemMarkup += `     </div>
                                    <span class="item_detail">KSH. ${expenseDescriptionDetailValues[expense].totalCost}</span>
                                 </li>`;
            return listItemMarkup;
        });
        expenseListItems.forEach((item)=>markup += item);
        markup += `         </ul>
                                </div>
                                </div>

                          <div class="btns-row flex">
                                <button  type='button' class="btn btn-secondary btn-large btn-close-modal">Cancel</button>
                                <button type='button' class="btn btn-primary btn-large btn-open-confirm-expense-form">Edit</button>
                                <button class="btn btn-primary btn-large btn-open-confirm-expense-form">Confirm</button>
                          </div>
                        </form>`;
        return markup;
    }
    openDialogBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            const dialogName = btn.getAttribute("data-opens");
            console.log(btn, dialogName);
            const dialogElementToOpen = document.getElementById(dialogName);
            dialogElementToOpen.showModal();
        });
    });
    openExpenseFormBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>openForm(e, btn, "expense"));
    });
    openActivityFormBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>openForm(e, btn, "activity"));
    });
    function openForm(e, btn, formType, formValues = {}, isEditMode = false) {
        e.preventDefault();
        const formToOpen = btn.getAttribute("data-opens");
        const farmInputType = formToOpen.includes("pesticide") ? "pesticide" : formToOpen.includes("fertilizer") ? "fertilizer" : false;
        const farmInputAvailableOptions = farmInputType ? availableFarmInputs[farmInputType]?.map((item)=>item.description) ?? [] : false;
        console.log("farmInputType", farmInputType, availableFarmInputs);
        let farmInput = farmInputType ? {
            type: farmInputType,
            availableOptions: farmInputAvailableOptions
        } : false;
        farmInput = formType === "expense" ? farmInputType : farmInput;
        const markup = createMarkup(farmInput, formType, formToOpen, isEditMode);
        // const dialogContentEl =
        //   btn.closest(".dialog_content") ??
        //   document.querySelector(`.dialog_content`);
        const selectionForm = btn.closest(".dialog_content-select") ?? document.querySelector(`.dialog_content-select--${formType}`);
        const dialogContentEl = selectionForm.closest(".dialog_content");
        console.log(`.dialog_content-select--${formType}`);
        dialogContentEl.removeChild(selectionForm);
        dialogContentEl.insertAdjacentHTML("beforeEnd", markup);
        console.log("formvaaaaaaaaaaaaaaaaalues", formValues);
        if (Object.keys(formValues).length > 0) {
            const inputElements = dialogContentEl.querySelectorAll(".input");
            if (Object.keys(formValues).includes("farmInputId")) {
                const idInputEl = document.createElement("input");
                idInputEl.id = "farmInputId";
                idInputEl.value = formValues.farmInputId;
                idInputEl.classList.add("input");
                idInputEl.classList.add("hidden");
                inputElements[0].parentNode.insertAdjacentElement("beforeend", idInputEl);
            }
            inputElements.forEach((el)=>{
                const key = el.getAttribute("id");
                const tagName = el.tagName;
                console.log("element", tagName);
                if (Object.keys(formValues).includes(key)) {
                    if (tagName === "SELECT") {
                        const inputElement = document.createElement("input");
                        inputElement.id = key;
                        inputElement.value = formValues[key];
                        inputElement.classList.add("input");
                        el.parentNode.replaceChild(inputElement, el);
                    }
                    el.value = formValues[key];
                }
            });
        }
        handleFormOpen(formValues, isEditMode);
    }
    function getFormData(form) {
        const inputElements = form.querySelectorAll(".input");
        let formData = {};
        inputElements.forEach((el)=>{
            const key = el.getAttribute("id");
            const type = el.getAttribute("type");
            const value = el.value;
            formData[key] = type === "number" ? parseFloat(value) : value;
            el.addEventListener("change", (e)=>{
                const value = e.target.value;
                formData[key] = type === "number" ? parseFloat(value) : value;
            });
        });
        return formData;
    }
    function handleFormOpen(existingData = {}, isEditMode = false) {
        const closeDialogBtns = document.querySelectorAll(".btn-close-modal");
        closeDialogBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                closeDialog(btn);
            });
        });
        function addFormValidation(form) {
            const inputElements = form.querySelectorAll("input");
            inputElements.forEach((el)=>{
                if (el.getAttribute("type") === "number") el.setAttribute("min", 1);
                if (el.getAttribute("type") === "date") el.setAttribute("min", new Date().toISOString().split("T")[0]);
            });
        }
        const expensesForm = document.querySelector(".dialog_content--input-expense-details");
        const activityForm = document.querySelector(".dialog_content--input-activity-details");
        function editFormMarkup() {}
        if (activityForm) {
            addFormValidation(activityForm);
            const unHideFormFieldsBtns = document.querySelectorAll(".btn-unHide-form-fields");
            const activity = document.querySelector(".input--activity").value;
            const openExpenseConfirmFormBtn = document.querySelector(".btn-open-confirm-expense-form");
            const subFormLabelEls = activityForm.querySelectorAll(".sub-form_label");
            subFormLabelEls.forEach((el)=>{
                const label = el.textContent.toLowerCase();
                console.log(label);
                if (Object.keys(existingData).includes(label) || Object.keys(existingData).includes(`${label}ToPurchase`)) {
                    const formRowEl = el.parentNode;
                    formRowEl.parentNode.removeChild(formRowEl);
                    const farmInput = existingData[label] ?? existingData[`${label}ToPurchase`];
                    console.log(farmInput, label);
                    const farmInputDetails = getSelectedFarmInputDetails(farmInput, label);
                    const requiredQuantityEl = document.getElementById("requiredQuantity");
                    if (Object.keys(farmInputDetails).length > 0) {
                        document.getElementById(label).closest(".form-row--horizontal").classList.remove("hidden");
                        requiredQuantityEl.closest(".form-row--horizontal").classList.remove("hidden");
                        requiredQuantityEl.removeAttribute("disabled");
                        requiredQuantityEl.addEventListener("change", (e)=>{
                            e.preventDefault();
                            compareAvailableAndRequiredQuantities(farmInputDetails.quantity);
                        });
                    } else {
                        document.getElementById(`${label}ToPurchase`).value = farmInput;
                        const elementsToUnHide = [
                            `${label}ToPurchase`,
                            "requiredQuantity",
                            "measurementUnit",
                            "quantityToPurchase",
                            "purchaseCost"
                        ];
                        elementsToUnHide.forEach((id)=>{
                            const inputEl = document.getElementById(id);
                            inputEl.closest(".form-row--horizontal").classList.remove("hidden");
                            inputEl.removeAttribute("disabled");
                        });
                    }
                }
            });
            // if(optionButtonsRowEl.querySelector('label').textContent.includes(existingData.fo))
            unHideFormFieldsBtns.forEach((btn)=>{
                btn.addEventListener("click", (e)=>{
                    e.preventDefault();
                    const fieldsToUnHide = JSON.parse(btn.getAttribute("data-unHides"));
                    console.log(fieldsToUnHide);
                    fieldsToUnHide?.forEach((field)=>{
                        const inputEl = document.getElementById(field);
                        inputEl.closest(".form-row--horizontal").classList.remove("hidden");
                        inputEl.removeAttribute("disabled");
                    });
                    const buttonsRowEl = btn.closest(".form-row--horizontal");
                    const fieldsToDelete = buttonsRowEl.closest(".sub-form").querySelectorAll(".hidden");
                    // fieldsToDelete.forEach((field) =>
                    //   field.parentNode.removeChild(field)
                    // );
                    buttonsRowEl.parentNode.removeChild(buttonsRowEl);
                });
            });
            let availableFarmInputSelected = "";
            const availableFarmInputSelectEl = activityForm.querySelector("select");
            const requiredQuantityEl = document.getElementById("requiredQuantity");
            const measurementUnitSelectEl = document.getElementById("measurementUnit");
            requiredQuantityEl?.addEventListener("change", (e)=>{
                e.preventDefault();
                compareAvailableAndRequiredQuantities();
            });
            console.log(availableFarmInputSelectEl);
            availableFarmInputSelectEl?.addEventListener("change", (e)=>{
                e.preventDefault();
                if (!availableFarmInputSelectEl.disabled) {
                    addMeasurementUnitToLabel();
                    compareAvailableAndRequiredQuantities();
                }
            });
            function addMeasurementUnitToLabel() {
                const selectedFarmInput = activityForm.querySelector("select").value;
                const farmInputType = availableFarmInputSelectEl.getAttribute("id");
                const selectedFarmInputDetails = getSelectedFarmInputDetails(selectedFarmInput, farmInputType);
                const selectedMeasurementUnit = selectedFarmInputDetails?.measurementUnit;
                const measurementUnitInputEl = document.createElement("input");
                measurementUnitInputEl.classList.add("input");
                // measurementUnitInputEl.classList.add("hidden");
                measurementUnitInputEl.setAttribute("id", "measurementUnit");
                measurementUnitInputEl.setAttribute("value", selectedMeasurementUnit);
                measurementUnitSelectEl.parentNode.replaceChild(measurementUnitInputEl, measurementUnitSelectEl);
                console.log(measurementUnitInputEl.value);
                requiredQuantityEl.parentNode.querySelector("label").textContent += ` (${selectedMeasurementUnit})`;
            }
            function getSelectedFarmInputDetails(selectedFarmInput, farmInputType) {
                console.log(selectedFarmInput, farmInputType);
                const selectedFarmInputDetails = availableFarmInputs[farmInputType].find((item)=>item.description === selectedFarmInput) ?? {};
                console.log(selectedFarmInput);
                return selectedFarmInputDetails;
            }
            function compareAvailableAndRequiredQuantities(availableQuantity = false) {
                let selectedFarmInputQuantity;
                const requiredQuantity = requiredQuantityEl.value * 1;
                function compare(selectedFarmInputQuantity, requiredQuantity) {
                    console.log(document.getElementById("quantityToPurchase"));
                    const quantityToPurchaseEl = document.getElementById("quantityToPurchase");
                    const purchaseCostEl = document.getElementById("purchaseCost");
                    if (selectedFarmInputQuantity < requiredQuantity) {
                        quantityToPurchaseEl.parentElement.classList.remove("hidden");
                        purchaseCostEl.parentElement.classList.remove("hidden");
                        quantityToPurchaseEl.removeAttribute("disabled");
                        purchaseCostEl.removeAttribute("disabled");
                    } else if (selectedFarmInputQuantity > requiredQuantity) {
                        quantityToPurchaseEl.parentElement.classList.add("hidden");
                        purchaseCostEl.parentElement.classList.add("hidden");
                        quantityToPurchaseEl.setAttribute("disabled", true);
                        purchaseCostEl.setAttribute("disabled", true);
                    }
                }
                if (availableQuantity) compare(availableQuantity, requiredQuantity);
                else {
                    if (availableFarmInputSelectEl.disabled) return;
                    if (availableFarmInputSelectEl.value === "") return;
                    const farmInputType = availableFarmInputSelectEl.getAttribute("id");
                    const selectedFarmInput = activityForm.querySelector("select").value;
                    console.log(availableFarmInputSelectEl);
                    const selectedFarmInputDetails = getSelectedFarmInputDetails(selectedFarmInput, farmInputType);
                    selectedFarmInputQuantity = selectedFarmInputDetails?.quantity;
                    compare(selectedFarmInputQuantity, requiredQuantity);
                }
            }
            let activityData = getFormData(activityForm);
            activityData["activity"] = activity;
            console.log(activityData);
            function generateActivityExpenses(activityData, activity) {
                const activityName = activity.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(",").replace(",", " ");
                const farmInputType = activity.split("Application")[0];
                activityData["farmInputType"] = farmInputType;
                const purchasedItemName = activityData[farmInputType].length > 0 ? activityData[farmInputType] : activityData[`${farmInputType}toPurchase`];
                activityData["farmInputName"] = purchasedItemName;
                const { numberOfLaborers: laborers, payRate, hoursRequired, activityDate } = activityData;
                const totalCost = laborers * payRate * hoursRequired;
                const labourExpenseData = {
                    farm_id: 1,
                    expense_type: "labour",
                    expense_total: totalCost,
                    transaction_date: activityDate,
                    expense_details: [
                        {
                            numberOfLaborers: laborers,
                            description: activityName,
                            payRate,
                            hoursWorked: hoursRequired,
                            transactionDate: activityDate,
                            expenseTotal: totalCost
                        }
                    ]
                };
                const labourExpenseDataToDisplay = {
                    laborers,
                    activity: activityName,
                    payRate: `KSH.${payRate}`,
                    hoursRequired,
                    totalCost
                };
                let activityExpensesAndFarmInputDetails = {};
                let activityExpenses = {};
                let activityExpensesDataToDisplay = {};
                if (activityData.numberOfLaborers) {
                    activityExpenses = {
                        labourExpenseData
                    };
                    activityExpensesDataToDisplay = {
                        labour: labourExpenseDataToDisplay
                    };
                    activityExpensesAndFarmInputDetails = {
                        activityExpenses,
                        activityExpensesDataToDisplay
                    };
                }
                function generatePurchaseExpenseDetails(purchasedItem) {
                    let farmInputToUpdate, farmInputToCreate = {};
                    const { activity, purchaseCost, requiredQuantity, quantityToPurchase, activityDate, measurementUnit } = activityData;
                    // const farmInputType = activity.split("Application")[0];
                    // activityData["farmInputType"] = farmInputType;
                    // const purchasedItemName =
                    //   activityData[purchasedItem].length > 0
                    //     ? activityData[purchasedItem]
                    //     : activityData[`${purchasedItem}toPurchase`];
                    // activityData["farmInputName"] = purchasedItemName;
                    let purchaseExpenseData = {
                        farm_id: 1,
                        expense_type: farmInputType,
                        expense_total: purchaseCost,
                        transaction_date: activityDate
                    };
                    let purchaseExpenseDataToDisplay = {
                        [purchasedItem]: purchasedItemName,
                        quantity: `${quantityToPurchase} ${measurementUnit}`,
                        purchaseCost: `KSH.${purchaseCost}`,
                        totalCost: purchaseCost
                    };
                    if (activityData[purchasedItem].length > 1) {
                        const { farmInputId, quantity: currentQuantity, measurementUnit } = getSelectedFarmInputDetails(activityData[purchasedItem], purchasedItem);
                        purchaseExpenseData = {
                            ...purchaseExpenseData,
                            expense_details: [
                                {
                                    expense: farmInputType,
                                    description: purchasedItemName,
                                    quantity: quantityToPurchase,
                                    transactionDate: activityDate,
                                    cost: purchaseCost
                                }
                            ]
                        };
                        purchaseExpenseDataToDisplay = {
                            ...purchaseExpenseDataToDisplay,
                            quantity: `${quantityToPurchase} ${measurementUnit}`
                        };
                        const quantityAfterPurchase = currentQuantity + quantityToPurchase;
                        const quantityAfterSubtractingRequiredQuantity = quantityAfterPurchase - requiredQuantity;
                        const updatedFarmInputDetails = {
                            farmInputId,
                            quantity: quantityAfterSubtractingRequiredQuantity
                        };
                        farmInputToUpdate = updatedFarmInputDetails;
                    }
                    if (activityData[`${purchasedItem}ToPurchase`].length > 1) {
                        const quantityAfterSubtractingRequiredQuantity = quantityToPurchase - requiredQuantity;
                        const newFarmInputDetails = {
                            description: activityData[`${purchasedItem}ToPurchase`],
                            quantity: quantityAfterSubtractingRequiredQuantity,
                            measurement_unit: measurementUnit,
                            farm_input_type: farmInputType
                        };
                        farmInputToCreate = newFarmInputDetails;
                        purchaseExpenseData = {
                            ...purchaseExpenseData,
                            expense_details: [
                                {
                                    expense: farmInputType,
                                    description: purchasedItemName,
                                    quantity: quantityToPurchase,
                                    transactionDate: activityDate,
                                    cost: purchaseCost
                                }
                            ]
                        };
                    }
                    return {
                        purchaseExpenseData,
                        purchaseExpenseDataToDisplay,
                        farmInputToCreate,
                        farmInputToUpdate
                    };
                }
                if (activity === "pesticideApplication" && activityData.purchaseCost) {
                    const { purchaseExpenseData: pesticidePurchase, purchaseExpenseDataToDisplay, farmInputToCreate, farmInputToUpdate } = generatePurchaseExpenseDetails("pesticide");
                    const farmInputToCreateOrUpdate = Object.keys(farmInputToCreate).length > 0 ? farmInputToCreate : Object.keys(farmInputToUpdate).length > 0 ? farmInputToUpdate : false;
                    activityExpenses = {
                        ...activityExpenses,
                        pesticidePurchase
                    };
                    activityExpensesDataToDisplay = {
                        ...activityExpensesDataToDisplay,
                        pesticidePurchase: purchaseExpenseDataToDisplay
                    };
                    activityExpensesAndFarmInputDetails = {
                        activityExpenses,
                        activityExpensesDataToDisplay,
                        farmInputDetails: farmInputToCreateOrUpdate
                    };
                }
                if (activity === "fertilizerApplication" && activityData.purchaseCost) {
                    const { purchaseExpenseData: fertilizerPurchase, purchaseExpenseDataToDisplay, farmInputToCreate, farmInputToUpdate } = generatePurchaseExpenseDetails("fertilizer");
                    const farmInputToCreateOrUpdate = Object.keys(farmInputToCreate).length > 0 ? farmInputToCreate : Object.keys(farmInputToUpdate).length > 0 ? farmInputToUpdate : false;
                    activityExpenses = {
                        ...activityExpenses,
                        fertilizerPurchase
                    };
                    activityExpensesDataToDisplay = {
                        ...activityExpensesDataToDisplay,
                        fertilizerPurchase: purchaseExpenseDataToDisplay
                    };
                    activityExpensesAndFarmInputDetails = {
                        activityExpenses,
                        activityExpensesDataToDisplay,
                        farmInputDetails: farmInputToCreateOrUpdate
                    };
                }
                return activityExpensesAndFarmInputDetails;
            }
            activityForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                const { activityExpenses = {}, farmInputDetails = {}, activityExpensesDataToDisplay = {} } = generateActivityExpenses(activityData, activity);
                let activityCreateRequest = {};
                let expenseCreateRequests = {};
                let farmInputCreateOrUpdateRequest = {};
                if (Object.keys(activityData).length > 0) {
                    const scheduleListItemMarkup = createScheduleListItemMarkup(activityData);
                    const { activity, activityDate, activityTime, numberOfLaborers, farmInputName = false, farmInputType = false, requiredQuantity = false } = activityData;
                    console.log(activityData);
                    const activityDataToUpload = {
                        activity_name: activity,
                        activity_date: activityDate,
                        activity_details: {
                            activity,
                            activityDate,
                            activityTime,
                            numberOfLaborers: isNaN(numberOfLaborers) ? "Do it yourself" : numberOfLaborers,
                            farmInputName,
                            requiredQuantity,
                            farmInputType
                        },
                        activity_status: "pending"
                    };
                    activityCreateRequest = {
                        url: "activities/",
                        data: activityDataToUpload,
                        loadingMessage: "Adding activity to schedule",
                        successMessage: "Activity added successfully"
                    };
                    console.log(activityDataToUpload);
                    // document.querySelector(".activities_list").innerHTML = "";
                    document.querySelector(".activities_list").insertAdjacentHTML("beforeend", scheduleListItemMarkup);
                }
                if (Object.keys(activityExpensesDataToDisplay).length > 0) openConfirmExpensesForm(activityExpensesDataToDisplay);
                if (Object.keys(activityExpenses.length > 0)) {
                    expenseCreateRequests = Object.keys(activityExpenses).map((key)=>{
                        const request = {
                            url: "expenses/",
                            data: activityExpenses[key],
                            loadingMessage: `Creating ${formatCamelCaseToNormal(key.split("ExpenseData")[0])} expense...`,
                            successMessage: `${formatCamelCaseToNormal(key.split("ExpenseData")[0])} expense created successfully`
                        };
                        return request;
                    });
                    if (Object.keys(farmInputDetails).length) {
                        farmInputCreateOrUpdateRequest = {
                            loadingMessage: `Adding ${activityData.activity.split("Application")[0]} to inventory...`,
                            successMessage: `${activityData.activity.split("Application")[0]} added successfully`
                        };
                        if (Object.keys(farmInputDetails).includes("farmInputId")) {
                            const { farmInputId, quantity } = farmInputDetails;
                            const farmInputData = {
                                quantity
                            };
                            farmInputCreateOrUpdateRequest = {
                                ...farmInputCreateOrUpdateRequest,
                                url: `farmInputs/${farmInputId}`,
                                data: {
                                    farmInputData
                                }
                            };
                            console.log(farmInputCreateOrUpdateRequest);
                        } else farmInputCreateOrUpdateRequest = {
                            url: `farmInputs/`,
                            data: farmInputDetails,
                            ...farmInputCreateOrUpdateRequest
                        };
                        (0, _crudOperationsJs.post)(farmInputCreateOrUpdateRequest).then((result)=>{
                            if (result.status === "success") (0, _crudOperationsJs.post)(activityCreateRequest).then((result)=>{
                                if (result.status === "success") expenseCreateRequests.forEach((request)=>{
                                    const { activity_id } = result.data[0];
                                    const updatedRequestData = {
                                        ...request.data,
                                        activity_id
                                    };
                                    request.data = updatedRequestData;
                                    (0, _crudOperationsJs.post)(request);
                                });
                            });
                        });
                    } else (0, _crudOperationsJs.post)(activityCreateRequest).then((result)=>{
                        if (result.status === "success") expenseCreateRequests.forEach((request)=>{
                            const { activity_id } = result.data[0];
                            const updatedRequestData = {
                                ...request.data,
                                activity_id
                            };
                            request.data = updatedRequestData;
                            (0, _crudOperationsJs.post)(request);
                        });
                    });
                }
            });
            function openConfirmExpensesForm(activityExpensesDataToDisplay) {
                const dialogContentEl = activityForm.closest(".dialog_content");
                console.log("dialogContentEl", activityForm.parentNode);
                dialogContentEl.removeChild(activityForm);
                const markup = dialogContentEl.insertAdjacentHTML("afterBegin", createConfirmExpensesFormMarkup(activityExpensesDataToDisplay));
            }
        }
        if (expensesForm) {
            addFormValidation(expensesForm);
            expensesForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                const formData = getFormData(expensesForm);
                console.log("isEditMode", isEditMode);
                if (isEditMode) {
                    if (formData.expense === "fertilizer" || formData.expense === "pesticide") {
                        const newQuantity = existingData.currentQuantity + formData.quantity;
                        const farmInputData = {
                            quantity: newQuantity
                        };
                        const farmInputId = existingData.farmInputId;
                        const farmInputUpdateRequest = {
                            url: `farmInputs/${farmInputId}`,
                            data: {
                                farmInputData
                            },
                            loadingMessage: `Adding more ${formData.expense} to inventory...`,
                            successMessage: `${capitilizeFirstLetter(formData.expense)} added successfully`
                        };
                        const expenseDetails = [
                            {
                                ...formData
                            }
                        ];
                        const expenseData = {
                            transaction_date: formData.transactionDate,
                            expense_type: formData.expense,
                            expense_details: expenseDetails,
                            expense_total: formData.cost,
                            farm_id: 1
                        };
                        const expenseCreateRequest = {
                            url: "expenses/",
                            data: expenseData,
                            loadingMessage: "Creating expense...",
                            successMessage: "Expense created successfully..."
                        };
                        (0, _crudOperationsJs.post)(farmInputUpdateRequest).then((result)=>{
                            if (result.status === "success") (0, _crudOperationsJs.post)(expenseCreateRequest).then((result)=>{
                                if (result.status === "success") {
                                    const dialogEl = document.getElementById("dialog--expenses");
                                    dialogEl.close();
                                }
                            });
                        });
                        return;
                    }
                } else if (formData.expense === "fertilizer" || formData.expense === "pesticide") {
                    const { description, expense, quantity, measurementUnit } = formData;
                    const farmInputData = {
                        description,
                        farm_input_type: expense,
                        quantity,
                        measurement_unit: measurementUnit,
                        farm_id: 1
                    };
                    const expenseDetails = [
                        {
                            ...formData
                        }
                    ];
                    const expenseData = {
                        transaction_date: formData.transactionDate,
                        expense_type: formData.expense,
                        expense_details: expenseDetails,
                        expense_total: formData.cost,
                        farm_id: 1
                    };
                    const farmInputCreateRequest = {
                        url: "farmInputs/",
                        data: farmInputData,
                        loadingMessage: `Adding ${formData.expense} to inventory...`,
                        successMessage: `${capitilizeFirstLetter(formData.expense)} added successfully`
                    };
                    const expenseCreateRequest = {
                        url: "expenses/",
                        data: expenseData,
                        loadingMessage: "Creating expense...",
                        successMessage: "Expense created successfully"
                    };
                    console.log("farmInputData", farmInputData);
                    (0, _crudOperationsJs.post)(farmInputCreateRequest).then((result)=>{
                        if (result.status === "success") (0, _crudOperationsJs.post)(expenseCreateRequest);
                    });
                } else {
                    const { expense, cost, transactionDate } = formData;
                    const expenseDetails = [
                        {
                            ...formData
                        }
                    ];
                    const expenseData = {
                        expense_type: expense,
                        transaction_date: transactionDate,
                        expense_details: expenseDetails,
                        expense_total: cost
                    };
                    const expenseCreateRequest = {
                        url: "expenses/",
                        data: expenseData,
                        loadingMessage: "Creating expense...",
                        successMessage: "Expense created successfully"
                    };
                    (0, _crudOperationsJs.post)(expenseCreateRequest);
                }
            });
        }
    }
    function handleCoffeeHarvestForm() {
        const harvestForm = document.querySelector(".form--coffee-harvest");
        let formData = {};
        harvestForm.querySelectorAll("input").forEach((input)=>{
            input.addEventListener("change", (e)=>{
                const label = input.getAttribute("id");
                const type = input.getAttribute("type");
                const value = type === "number" ? parseFloat(input.value) : input.value;
                formData = {
                    ...formData,
                    [label]: value
                };
            });
        });
        harvestForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            const { harvestQuantity: harvest_amount_kg, harvestDate: harvest_date } = formData;
            const harvestData = {
                harvest_amount_kg,
                harvest_date
            };
            (0, _crudOperationsJs.post)({
                url: "farmProduce/coffee-yield",
                data: harvestData,
                loadingMessage: "Adding yield records...",
                successMessage: "Coffee yield recorded successfully"
            }).then((result)=>{
                if (result.status === "success") closeDialog(harvestForm);
            });
        });
    }
    handleCoffeeHarvestForm();
}

},{"./alert.js":"kxdiQ","./crudOperations.js":"2nPvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1yDZ":[function(require,module,exports) {
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
    const closeDialogBtns = document.querySelectorAll(".btn-close-modal");
    function closeDialog(btn) {
        btn.closest("dialog").close();
        window.location.reload();
    }
    closeDialogBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            closeDialog(btn);
        });
    });
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
                    url: "expenses/",
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

},{"./crudOperations.js":"2nPvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lO1Ft":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleFarmProfilePage", ()=>handleFarmProfilePage);
var _crudOperationsJs = require("./crudOperations.js");
var _pestManagementJs = require("./pestManagement.js");
async function handleFarmProfilePage() {
    let isLoading = true;
    const elementsWaitingForData = [
        ".row--details"
    ];
    (0, _pestManagementJs.toggleLoading)(isLoading, elementsWaitingForData);
    (0, _crudOperationsJs.get)({
        url: "farmProduce/farm-profile"
    }).then((result)=>{
        if (result.status === "success") {
            const profileData = result.data[0];
            const farmId = profileData.farm_id;
            isLoading = false;
            renderProfileDetails(profileData);
            handleProfileDetailsForm(farmId);
            (0, _pestManagementJs.toggleLoading)(isLoading, elementsWaitingForData);
            console.log(profileData);
        }
    });
    function handleProfileDetailsForm(farmId) {
        const farmProfileDetailsForm = document.querySelector(".form--farm-profile");
        const inputEls = farmProfileDetailsForm.querySelectorAll("input");
        let formData = {};
        inputEls.forEach((el)=>{
            el.addEventListener("change", (e)=>{
                e.preventDefault();
                el.closest("section").querySelector(".btns-row").classList.remove("hidden");
                const inputElId = el.getAttribute("id");
                const inputType = el.getAttribute("type");
                let value = el.value;
                value = inputType === "number" ? value * 1 : value;
                formData = {
                    ...formData,
                    [inputElId]: value
                };
            });
        });
        farmProfileDetailsForm.querySelectorAll(".btn-cancel").forEach((btn)=>{
            btn.addEventListener("click", ()=>{
                btn.closest(".btns-row").classList.add("hidden");
            });
        });
        farmProfileDetailsForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            const farmProfileData = renameObjectKeys(formData, "snakeCase");
            console.log(farmProfileData);
            (0, _crudOperationsJs.post)({
                url: `farmProduce/farm-profile/${farmId}`,
                data: farmProfileData,
                loadingMessage: "Updating details",
                successMessage: "Details updated"
            });
        });
    }
    function renderProfileDetails(profileData) {
        const { farm_id: farmId, farmer_name: farmerName, coffee_variety: coffeeVariety, farm_size: farmSize, number_of_coffee_trees: numberOfCoffeeTrees, expected_yearly_yield: expectedYearlyYield, coffee_price_per_kg: coffeePricePerKg } = profileData;
        const formData = renameObjectKeys(profileData, "camelCase");
        const inputEls = document.querySelector(".form--farm-profile").querySelectorAll("input");
        console.log(inputEls);
        inputEls.forEach((el)=>{
            const inputElId = el.getAttribute("id");
            console.log(inputElId);
            console.log(formData);
            el.value = formData[inputElId];
        });
    }
    function renameObjectKeys(oldObject, namingConvention) {
        const newObject = {};
        if (Object.keys(oldObject).length > 0) for(const key in oldObject){
            let newKey;
            if (namingConvention === "camelCase") newKey = key.replace(/_([a-z])/g, function(match, letter) {
                return letter.toUpperCase();
            });
            if (namingConvention === "snakeCase") newKey = key.replace(/[A-Z]/g, function(match) {
                return "_" + match.toLowerCase();
            });
            newObject[newKey] = oldObject[key];
        }
        return newObject;
    }
}

},{"./crudOperations.js":"2nPvR","./pestManagement.js":"fzqhH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11str":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleFertilizerApplicationGuidePage", ()=>handleFertilizerApplicationGuidePage);
var _crudOperationsJs = require("./crudOperations.js");
async function handleFertilizerApplicationGuidePage() {
    let isLoading = true;
    let fertilizers = [];
    const goBackToFarmGuideMenuBtn = document.querySelector(".btn-open-farm-guide-menu");
    goBackToFarmGuideMenuBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.replace("/farm-guide");
    });
    function toggleLoading(isLoading) {
        if (isLoading) {
            document.querySelector(".row-instructions").classList.add("loading");
            document.querySelector(".row-fertilizers").classList.add("loading");
        } else {
            document.querySelector(".row-instructions").classList.remove("loading");
            document.querySelector(".row-fertilizers").classList.remove("loading");
        }
    }
    toggleLoading(isLoading);
    (0, _crudOperationsJs.get)({
        url: "farmGuide/fertilizer-application"
    }).then((result)=>{
        if (result.status === "success") {
            isLoading = false;
            fertilizers = result.data;
            const fertilizerList = fertilizers.map((fertilizer)=>({
                    id: fertilizer.fertilizer_id,
                    name: fertilizer.fertilizer_name,
                    nutrient: fertilizer.fertilizer_name
                }));
            console.log(fertilizers);
            renderFertilizerApplicationInstructions(fertilizers[0]);
            renderFertilizerList(fertilizerList, fertilizers);
            toggleLoading(isLoading);
        } else console.log(result);
    });
    function handleFertilizerList(fertilizers) {
        const fertilizerListEls = document.querySelectorAll(".fertilizer");
        console.log(fertilizerListEls);
        fertilizerListEls.forEach((item)=>{
            item.addEventListener("click", (e)=>{
                e.preventDefault();
                const selectedFertilizerId = item.getAttribute("id") * 1;
                fertilizerListEls.forEach((el)=>{
                    el.classList.remove("active");
                });
                item.classList.add("active");
                const fertilizer = fertilizers.find((item)=>item.fertilizer_id === selectedFertilizerId);
                console.log(fertilizer);
                renderFertilizerApplicationInstructions(fertilizer);
            });
        });
    }
    function renderFertilizerList(fertilizerList, fertilizers) {
        let markup = ``;
        fertilizerList.forEach((fertilizer, index)=>{
            console.log(index);
            markup += `
                <li class="fertilizer  ${index === 0 ? "active" : ""}" id=${fertilizer.id} >
                  <span class="fertilizer_name">
                  ${fertilizer.name}
                  </span>
                  <div class="flex align-center">
                    <span class="fertilizer_nutrient"
                      >Nutrient -
                      <span class="value"> ${fertilizer.nutrient} </span>
                    </span>
                
                  </span>
                </div>
                </li>
  `;
        });
        document.querySelector(".list-fertilizers").innerHTML = "";
        document.querySelector(".list-fertilizers").insertAdjacentHTML("afterbegin", markup);
        handleFertilizerList(fertilizers);
    }
    function renderFertilizerApplicationInstructions(fertilizer) {
        const { fertilizer_name: name, amount_per_tree: amountPerTree, application_procedure: applicationProcedure, required_tools: tools } = fertilizer;
        const markup = `
                  <div class="flex flex-dc gap-sm">
                    <p class="instruction_detail">
                      <span> Fertilizer - </span>
                      <span>${name} </span>
                    </p>
                    <p class="instruction_detail">
                      <span>Amount per tree - </span>
                      <span> ${amountPerTree} </span>
                    </p>
                    <p class="instruction_detail">
                      <span> Tools - </span>
                      <span>${tools.map((tool)=>tool).join("")}</span>
                    </p>
                  </div>

                  <div class="instruction_detail instruction_detail-procedure">
                    <h4>Application Procedure</h4>
                    ${applicationProcedure.map((step)=>{
            const stepMarkup = `<p>${step}</p>`;
            return stepMarkup;
        }).join("")}
                  </div>
               

`;
        document.querySelector(".fertilizer-instructions_text").innerHTML = "";
        document.querySelector(".fertilizer-instructions_text").insertAdjacentHTML("afterbegin", markup);
    }
}

},{"./crudOperations.js":"2nPvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFxMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleFinancesPage", ()=>handleFinancesPage);
var _crudOperationsJs = require("./crudOperations.js");
var _pestManagementJs = require("./pestManagement.js");
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
    async function renderFinancesOverview() {
        let isLoading = true;
        const elementsWaitingForData = [
            ".row-widgets"
        ];
        (0, _pestManagementJs.toggleLoading)(isLoading, elementsWaitingForData);
        function createFinancesOverviewMarkup(financesData) {
            const { total_revenue: income = 0, total_expenses: expensesTotal = 0, profit = 0, budget_amount: budgetAmount = 0, budget_remaining: remainingBudgetAmount = 0 } = financesData || {};
            const markup = `
      <h2 class="heading-secondary">Overview</h2>

      <div class="row row-widgets">
                <div class="widget widget--income">
                  <span class="widget-label">Income</span>
                  <div class="widget-details">
                    <span class="widget-value">${formatCurrency(income)}</span>
                  </div>
                </div>
                <div class="widget widget--expenses">
                  <span class="widget-label">Expenses</span>
                  <div class="widget-details">
                    <span class="widget-value"> ${formatCurrency(expensesTotal)}</span>
                  </div>
                </div>
                <div class="widget widget--profit">
                  <span class="widget-label">Profit</span>
                  <div class="widget-details">
                    <span class="widget-value">${formatCurrency(profit)}</span>
                  </div>
                </div>
                <div class="widget widget--budget">
                  <span class="widget-label">Budget</span>
                  <div class="widget-details">
                    <span class="widget-value">Yearly budget: ${formatCurrency(budgetAmount)}</span>
                    <span class="widget-value"
                      >Remaining Amount: ${formatCurrency(remainingBudgetAmount)}</span
                    >
                  </div>
                </div>
              </div>`;
            return markup;
        }
        (0, _crudOperationsJs.get)({
            url: "farmProduce/finances-overview"
        }).then((result)=>{
            if (result.status === "success") {
                isLoading = false;
                const financesData = result.data[0];
                const financesOverviewMarkup = createFinancesOverviewMarkup(financesData);
                document.querySelector(".section--overview").innerHTML = "";
                document.querySelector(".section--overview").insertAdjacentHTML("afterbegin", financesOverviewMarkup);
                (0, _pestManagementJs.toggleLoading)(isLoading, elementsWaitingForData);
            }
        });
    }
    renderFinancesOverview();
    function formatCurrency(number) {
        return new Intl.NumberFormat("ke-KE", {
            style: "currency",
            currency: "KSH"
        }).format(number);
    }
    function renderIncomeDetails() {
        let isLoading = true;
        const elementsWaitingForData = [
            ".row-income"
        ];
        (0, _pestManagementJs.toggleLoading)(isLoading, elementsWaitingForData);
        function createIncomeDetailsMarkup(incomeData) {
            const { total_harvest_amount_kg: totalYield = 0, coffee_price_per_kg: pricePerKg = 0, total_revenue: expectedRevenue = 0 } = incomeData || {};
            const markup = `
      <h3 class="sub-heading">Coffee Sales</h3>
                <div class="sales-details">
                  <div class="sales-detail sales-detail--price">
                    <span class="label label-price">Price per Kg</span>
                    <span class="value value-price">${formatCurrency(pricePerKg)}</span>
                  </div>

                  <div class="sales-detail sales-detail--yield">
                    <span class="label label-yield">Total Yield</span>
                    <span class="value value-yield">${totalYield} Kg</span>
                  </div>

                  <div class="sales-detail sales-detail--amount">
                    <span class="label label-amount">Expected revenue</span>
                    <span class="value value-amount">${formatCurrency(expectedRevenue)}</span>
                  </div>
      
      `;
            return markup;
        }
        (0, _crudOperationsJs.get)({
            url: "farmProduce/income"
        }).then((result)=>{
            if (result.status === "success") {
                isLoading = false;
                const incomeData = result.data[0];
                const incomeDetailsMarkup = createIncomeDetailsMarkup(incomeData);
                document.querySelector(".row-income").innerHTML = "";
                document.querySelector(".row-income").insertAdjacentHTML("afterbegin", incomeDetailsMarkup);
                (0, _pestManagementJs.toggleLoading)(isLoading, elementsWaitingForData);
            }
        });
    }
    renderIncomeDetails();
    async function renderBugdetChart() {
        const budgetSection = document.querySelector(".section-budget");
        let expenseTotals = [];
        const expenseWidgetEls = document.querySelectorAll(".expense");
        function showExpenseBudgetStatus(budget) {
            expenseWidgetEls.forEach((el)=>{
                const exepenseType = el.getAttribute("data-expense-type");
                const expenseTotal = parseFloat(el.querySelector(".expense_cost-value").getAttribute("data-expense-total"));
                if (budget[exepenseType]) {
                    if (budget[exepenseType] < expenseTotal) {
                        const amountOverBudget = expenseTotal - budget[exepenseType];
                        el.querySelector(".expense_status").textContent = `Over-Budget -- ${formatCurrency(amountOverBudget)}`;
                        el.querySelector(".expense_status").classList.add("expense_status--over-budget");
                    } else {
                        el.querySelector(".expense_status").textContent = "On-Budget";
                        el.querySelector(".expense_status").classList.add("expense_status--on-budget");
                    }
                }
            });
        }
        (0, _crudOperationsJs.get)({
            url: "expenses/budget"
        }).then((result)=>{
            if (result.status === "success") {
                const budget = result.data[0] ?? {};
                const { fertilizer = 0, labour = 0, pesticide = 0, miscelleneous = 0 } = budget || {};
                const budgetChartData = [
                    fertilizer,
                    labour,
                    pesticide,
                    miscelleneous
                ];
                const isGreaterThanOne = (currentValue)=>currentValue < 1;
                const isCreateMode = Object.keys(budget).map((key)=>budget[key]).every(isGreaterThanOne);
                if (!isCreateMode) {
                    const budgetForm = document.querySelector(".form--budget");
                    budgetForm.setAttribute("data-is-edit-mode", true);
                    budgetForm.querySelector("h2").textContent = "Edit budget";
                    document.querySelector(".btn-open-budget-form").textContent = "Edit budget";
                }
                showExpenseBudgetStatus(budget);
                populateBudgetForm(budget);
                const ctx = document.getElementById("myChart");
                new Chart(ctx, {
                    type: "doughnut",
                    data: {
                        labels: [
                            "Fertilizer",
                            "Labour",
                            "Pesticides",
                            "Miscellaneous"
                        ],
                        datasets: [
                            {
                                label: "Allocated amount",
                                data: budgetChartData,
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: "right"
                            }
                        }
                    }
                });
            }
        });
    }
    renderBugdetChart();
    function populateBudgetForm(budget) {
        const inputEls = document.querySelectorAll(".input");
        console.log(budget);
        inputEls.forEach((el)=>{
            const key = el.getAttribute("id");
            console.log(key);
            el.value = budget[key] ?? 0;
        });
    }
    function handleEditCreateBudget() {
        const budgetDialog = document.querySelector(".dialog-budget");
        const budgetForm = document.querySelector(".form--budget");
        const inputEls = document.querySelectorAll(".input");
        const openBudgetDialogBtn = document.querySelector(".btn-open-budget-form");
        const closeDialogBtns = document.querySelectorAll(".btn-close-modal");
        console.log(closeDialogBtns);
        const isEditMode = budgetForm.getAttribute("data-is-edit-mode");
        console.log(isEditMode);
        closeDialogBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                e.preventDefault();
                btn.closest("dialog").close();
            });
        });
        openBudgetDialogBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            budgetDialog.showModal();
        });
        let formData = {};
        inputEls.forEach((el)=>{
            el.addEventListener("change", (e)=>{
                const key = el.getAttribute("id");
                const type = el.getAttribute("type");
                const value = type === "number" ? parseFloat(e.target.value) : value;
                formData[key] = value;
            });
        });
        budgetForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            const req = {
                url: "expenses/budget",
                data: formData,
                loadingMessage: "Creating budget...",
                successMessage: "Budget created successfully"
            };
            (0, _crudOperationsJs.post)(req);
            console.log(formData);
        });
    }
    handleEditCreateBudget(budget);
    toggleExpenseDetails();
}

},{"./crudOperations.js":"2nPvR","./pestManagement.js":"fzqhH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1jZC8","f2QDv"], "f2QDv", "parcelRequiref6bb")

//# sourceMappingURL=index.js.map
