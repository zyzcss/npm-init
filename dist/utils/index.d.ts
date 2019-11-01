export * from './prefix';
import { Method, AxiosResponse } from 'axios/index';
export interface axiosParams {
    path: string;
    body: any;
    method: Method;
    params: object;
    callback: any;
    token: string;
}
export declare type uploadCallback = (res: AxiosResponse, flag: boolean) => void;
/**
 * url数据去除首尾空格
 * @param {url} url
 * @author lxh
 */
export declare function tirmUrlValue(url: string): string;
/**
 * 下载文件
 * @param {string} path 路径
 * @param {string} method 方法
 * @param {string} params query参数
 * @param {string} body body参数
 * @param {string} token token
 * @param {string} callback 回调
 */
export declare function handleDownloadFile(downLoadParms: axiosParams): void;
/**
 * 响应请求
 * @param {string} path 路径
 * @param {string} method 方法
 * @param {string} params query参数
 * @param {string} body body参数
 * @param {string} token token
 * @param {string} callback 回调
 */
export declare function handleResponse(responseParams: axiosParams): void;
/**
 * 上传文件的响应 判断是下载文件还是提示错误信息
 * @param {AxiosResponse} res 返回体
 * @param {function} callback 回调
 */
export declare function responseDownloadOrShowMessage(res: AxiosResponse, callback: uploadCallback): void;
