import _ from 'lodash';
import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig} from 'axios';
import { ApiService } from './api.service';
import Config from 'react-native-config';

type LogTypes = 'request' | 'response' | 'error';

export class ApiServiceImpl implements ApiService {
    static parseError(e: any): string | undefined {
        throw new Error("Method not implemented.");
    }
    static readonly API_REQUEST_TIMEOUT = 15000;

    private async getAxiosInstance(): Promise<AxiosInstance> {
        const headers: any = {
          'Cache-Control': 'no-cache',
          'Accept': 'application/json',
        };
        const instance = axios.create({
          baseURL: `${Config.API_ENDPOINT}`,
          timeout: ApiServiceImpl.API_REQUEST_TIMEOUT,
          headers: headers,
        });
    
        instance.interceptors.request.use((request) => {
          this.logger(request, 'request');
          return request;
        });
    
        instance.interceptors.response.use(
          (response) => {
            this.logger(response, 'response');
            return response;
          },
          (error) => {
            this.logger(error.response, 'error');
            return Promise.reject(error);
          },
        );
    
        return instance;
      }

      private logger(data: any, type: LogTypes) {
        if (__DEV__) {
          const formats = {
            request: {
              title: 'REQUEST',
              background: '#1565C0',
            },
            response: {
              title: 'RESPONSE',
              background: '#43A047',
            },
            error: {
              title: 'ERROR',
              background: '#f44336',
            },
          };
          console.log(`%c ${formats[type].title} `, `background: ${formats[type].background}; color: #fff;`, data);
        }
      }

    protected async get(url: string): Promise<AxiosResponse> {
        const api = await this.getAxiosInstance();
        return await api.get(url);
      }
    
      protected async post(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        const api = await this.getAxiosInstance();
        return await api.post(url, data, config);
      }
    
      protected async patch(url: string, data: any): Promise<AxiosResponse> {
        const api = await this.getAxiosInstance();
        return await api.patch(url, data);
      }
    
      protected async put(url: string, data: any): Promise<AxiosResponse> {
        const api = await this.getAxiosInstance();
        return await api.put(url, data);
      }
    
      protected async delete(url: string, data: any): Promise<AxiosResponse> {
        const api = await this.getAxiosInstance();
        return await api.delete(url, data);
      }
}