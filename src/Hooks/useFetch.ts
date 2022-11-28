import { useState } from "react";
import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";

type IFetchResponse<T> = [IFetchHandler, IFetchStates<T>];
export interface IFetchStates<T> {
  data?: T;
  loading?: boolean;
  error?: object;
}
interface IFetchingConfig {
  method: "get" | "post" | "patch" | "delete" | "put";
  headers?: {
    [key: string]: any;
  };
  data?: {
    [key: string]: any;
  };
  options?: {
    newUrl: string;
  };
}

type IFetchHandler = (config: IFetchingConfig) => AxiosPromise;

/**
 * loading, error, data를 반환하는 Fetch Hook
 * @param {string} url 통신할 url
 * @return {[function, {any, boolean, object}]} [fetchHandler, {data, loading, error}]
 * @return {function} fetchHandler fetch 함수
 * @return {any} data : response 데이터
 * @return {boolean} loading : loading 중이면 true, 아니면 false
 * @return {error} error : error
 */

function useFetch<T = any>(url: string): IFetchResponse<T> {
  const [state, setState] = useState<IFetchStates<T>>({
    data: undefined,
    loading: false,
    error: undefined,
  });
  const fetchHandler: IFetchHandler = async ({
    method,
    headers,
    data,
    options,
  }) => {
    setState((current) => ({ ...current, loading: true }));
    return new Promise((resolve, reject) => {
      axios(options?.newUrl ? options.newUrl : url, {
        method,
        headers: {
          ...headers,
        },
        data,
      })
        .then((response) => {
          setState((prev) => ({ ...prev, data: response.data }));
          resolve(response);
        })
        .catch((error) => {
          setState((current) => ({ ...current, error: error }));
          reject(error);
        })
        .finally(() => setState((current) => ({ ...current, loading: false })));
    });
  };
  return [fetchHandler, { ...state }];
}

export default useFetch;
