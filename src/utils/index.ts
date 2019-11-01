export * from './prefix';
import axios from 'axios';
import { stringify } from 'qs';
import nodeUrl from 'url';
import { message } from 'antd';

import { Method, AxiosRequestConfig, AxiosResponse } from 'axios/index';
export interface axiosParams {
  path: string;
  body: any;
  method: Method;
  params: object;
  callback: any;
  token: string;
}

export type uploadCallback = (res: AxiosResponse, flag: boolean) => void;

/**
 * url数据去除首尾空格
 * @param {url} url
 * @author lxh
 */
export function tirmUrlValue(url: string): string {
  const path = url.split('?')[0];
  const urlObj = nodeUrl.parse(url, true);
  const queryObj = urlObj.query;
  for (const p in queryObj) {
    if (typeof queryObj[p] === 'string') {
      queryObj[p] = String(queryObj[p]).trim();
    }
  }
  return path + '?' + stringify(queryObj);
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
export function handleDownloadFile(downLoadParms: axiosParams): void {
  const { path, method, params, body, token, callback } = downLoadParms;
  const url = tirmUrlValue(path);
  const axiosParams: AxiosRequestConfig = {
    url,
    method,
    params,
    data: body,
    responseType: 'blob',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  axios(axiosParams)
    .then((data: AxiosResponse<string>) => {
      const Data: any = eval(String(data));
      if (Data.data.state === 0) {
        message.error(Data.data.message);
      } else if (Data.data.type === 'application/json') {
        // 如果返回json 则读取并提示错误
        const reader = new FileReader();
        reader.onload = e => {
          if (!e.target.result || Number(e.target.result) <= 0) {
            return;
          }
          const _res = JSON.parse(String(e.target.result));
          if (_res.code) {
            message.error(_res.msg);
          }
        };
        reader.readAsText(Data.data);
      } else {
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
      message.error('系统错误，请联系管理员');
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
export function handleResponse(responseParams: axiosParams): void {
  const { path, method, params, body, token, callback } = responseParams;
  const url = tirmUrlValue(path);
  axios({
    url,
    method,
    params,
    data: body,
    responseType: 'blob',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then((data: AxiosResponse<string>) => {
      const Data = eval(String(data));
      callback(Data);
    })
    .catch(err => {
      message.error('系统错误，请联系管理员');
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
export function responseDownloadOrShowMessage(res: AxiosResponse, callback: uploadCallback): void {
  if (!res) return;
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
    } catch (error) {
      console.log(error);
    }
    if (callback) {
      callback(res, flag);
    }
  } else {
    const reader = new FileReader();
    reader.onload = e => {
      const response = JSON.parse(String(e.target.result));
      if (response.code) {
        message.error(response.msg);
      } else {
        message.success(response.msg);
        flag = true;
      }
      if (callback) {
        callback(res, flag);
      }
    };
    reader.readAsText(res.data);
  }
}
