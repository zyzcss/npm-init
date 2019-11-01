(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("antd"), require("axios"), require("qs"), require("url"));
	else if(typeof define === 'function' && define.amd)
		define(["antd", "axios", "qs", "url"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("antd"), require("axios"), require("qs"), require("url")) : factory(root["antd"], root["axios"], root["qs"], root["url"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return globalKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClassName; });
const globalKey = 'cybertron-';
function getClassName(name, status, ele) {
    if (!name) {
        return globalKey;
    }
    if (name && ele && status) {
        return `${globalKey}${name}_${ele}--${status}`;
    }
    if (!ele && !status) {
        return `${globalKey}${name}`;
    }
    if (!status) {
        return `${globalKey}${name}_${ele}`;
    }
    if (!ele) {
        return `${globalKey}${name}--${status}`;
    }
    return globalKey;
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tirmUrlValue", function() { return tirmUrlValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDownloadFile", function() { return handleDownloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseDownloadOrShowMessage", function() { return responseDownloadOrShowMessage; });
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalKey", function() { return _prefix__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return _prefix__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);





/**
 * url数据去除首尾空格
 * @param {url} url
 * @author lxh
 */
function tirmUrlValue(url) {
    const path = url.split('?')[0];
    const urlObj = url__WEBPACK_IMPORTED_MODULE_3___default.a.parse(url, true);
    const queryObj = urlObj.query;
    for (const p in queryObj) {
        if (typeof queryObj[p] === 'string') {
            queryObj[p] = String(queryObj[p]).trim();
        }
    }
    return path + '?' + Object(qs__WEBPACK_IMPORTED_MODULE_2__["stringify"])(queryObj);
}
/**
 * 下载文件
 * @param {string} path 路径
 * @param {string} method 方法
 * @param {string} params query参数
 * @param {string} body body参数
 * @param {string} token token
 * @param {string} callback 回调
 */
function handleDownloadFile(downLoadParms) {
    const { path, method, params, body, token, callback } = downLoadParms;
    const url = tirmUrlValue(path);
    const axiosParams = {
        url,
        method,
        params,
        data: body,
        responseType: 'blob',
        headers: {
            Authorization: 'Bearer ' + token,
        },
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default()(axiosParams)
        .then((data) => {
        const Data = eval(String(data));
        if (Data.data.state === 0) {
            antd__WEBPACK_IMPORTED_MODULE_4__["message"].error(Data.data.message);
        }
        else if (Data.data.type === 'application/json') {
            // 如果返回json 则读取并提示错误
            const reader = new FileReader();
            reader.onload = e => {
                if (!e.target.result || Number(e.target.result) <= 0) {
                    return;
                }
                const _res = JSON.parse(String(e.target.result));
                if (_res.code) {
                    antd__WEBPACK_IMPORTED_MODULE_4__["message"].error(_res.msg);
                }
            };
            reader.readAsText(Data.data);
        }
        else {
            // 创建链接
            const URL = window.URL || window.webkitURL;
            const objectUrl = URL.createObjectURL(Data.data);
            const a = document.createElement('a');
            a.href = objectUrl;
            const fileName = Data.headers['content-disposition']
                ? Data.headers['content-disposition'].split(';')[1].split('=')[1]
                : '下载文件';
            a.download = decodeURIComponent(fileName);
            document.body.appendChild(a);
            a.click();
            a.remove();
            if (callback) {
                callback();
            }
        }
    })
        .catch(er => {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('系统错误，请联系管理员');
        if (callback) {
            callback();
        }
    });
}
/**
 * 响应请求
 * @param {string} path 路径
 * @param {string} method 方法
 * @param {string} params query参数
 * @param {string} body body参数
 * @param {string} token token
 * @param {string} callback 回调
 */
function handleResponse(responseParams) {
    const { path, method, params, body, token, callback } = responseParams;
    const url = tirmUrlValue(path);
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url,
        method,
        params,
        data: body,
        responseType: 'blob',
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })
        .then((data) => {
        const Data = eval(String(data));
        callback(Data);
    })
        .catch(err => {
        antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('系统错误，请联系管理员');
        if (callback) {
            callback();
        }
    });
}
/**
 * 上传文件的响应 判断是下载文件还是提示错误信息
 * @param {AxiosResponse} res 返回体
 * @param {function} callback 回调
 */
function responseDownloadOrShowMessage(res, callback) {
    if (!res)
        return;
    // 成功还是失败的标识
    let flag = false;
    if (res.headers['content-type'] === 'application/octet-stream;charset=utf-8') {
        // 文件下载
        try {
            const URL = window.URL || window.webkitURL;
            const objectUrl = URL.createObjectURL(res.data);
            const a = document.createElement('a');
            a.href = objectUrl;
            const fileName = res.headers['content-disposition'].split(';')[1].split('=')[1];
            a.download = decodeURIComponent(fileName);
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
        catch (error) {
            console.log(error);
        }
        if (callback) {
            callback(res, flag);
        }
    }
    else {
        const reader = new FileReader();
        reader.onload = e => {
            const response = JSON.parse(String(e.target.result));
            if (response.code) {
                antd__WEBPACK_IMPORTED_MODULE_4__["message"].error(response.msg);
            }
            else {
                antd__WEBPACK_IMPORTED_MODULE_4__["message"].success(response.msg);
                flag = true;
            }
            if (callback) {
                callback(res, flag);
            }
        };
        reader.readAsText(res.data);
    }
}


/***/ })
/******/ ]);
});