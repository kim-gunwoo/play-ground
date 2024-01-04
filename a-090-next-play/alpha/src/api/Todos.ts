import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, GenericAbortSignal, InternalAxiosRequestConfig } from "axios";


interface TodoInterface {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface AxiosRequestConfigWithMetadata extends InternalAxiosRequestConfig {
    metadata?: { startTime: Date; endTime?: Date };
}

interface AxiosResponseWithDuration extends AxiosResponse {
    config: AxiosRequestConfigWithMetadata;
    duration?: number;
}

interface AxiosErrorWithDuration extends AxiosError {
    config: AxiosRequestConfigWithMetadata;
    duration?: number;
}

const onRequest = (config: AxiosRequestConfigWithMetadata) => {
    const { method, url } = config;

    config.metadata = { startTime: new Date() };

    if (method === 'get') {
        // config.timeout = 1000;
        // config.timeout = 100;
    }
    console.debug(`[🚀 API] [${method?.toUpperCase()}] : ${url} | Request`);
    return config;
}

const onResponse = (response: AxiosResponseWithDuration) => {
    const { method, url } = response.config;
    const { status } = response;
    response.config.metadata!.endTime = new Date();
    // response.duration = response.config.metadata!.endTime - response.config.metadata!.startTime;
    const duration = response.config.metadata!.endTime.getMilliseconds() - response.config.metadata!.startTime.getMilliseconds();
    response.duration = duration;
    console.debug(`[🔥 API] [${method?.toUpperCase()}] : ${url} | Response ${status} ${duration}ms`);
    return response;
}

const onErrorResponce = (error: AxiosErrorWithDuration | Error) => {
    if (axios.isAxiosError(error)) {
        const { message, code } = error;
        const { method, url } = error.config as AxiosRequestConfig;
        const { metadata } = error.config as unknown as AxiosRequestConfigWithMetadata;

        metadata!.endTime = new Date();
        const duration = metadata!.endTime.getMilliseconds() - metadata!.startTime.getMilliseconds();
        (error as AxiosErrorWithDuration).duration = duration;

        if (code === "ECONNABORTED") {
            console.error(`[🚨 API] TimeError [${method?.toUpperCase()}] : ${url} | Error ${message} ${duration}ms`);
            return Promise.reject(error);
        }

        const { status, statusText } = error.response as AxiosResponse;

        if (status === 401) {
            // TODO
        }

        console.error(`[🚨 API] [${method?.toUpperCase()}] : ${url} | Error ${status} ${statusText} | ${message} ${duration}ms`);
    } else {
        console.error(`[🚨 API] Error ${error.toString()}`);
    }
    return Promise.reject(error);
}


const setupInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use(onRequest);
    instance.interceptors.response.use(onResponse, onErrorResponce);
    return instance;
}


// const axiosInstance = setupInterceptors(axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' }));
const axiosInstance = setupInterceptors(axios.create({ baseURL: 'http://localhost:9999/api' }));


export class Todos {
    static async getAll(config?: AxiosRequestConfig): Promise<AxiosResponse<TodoInterface[]>> {
        try {
            return await axiosInstance.get('/todos', config);
        } catch (error) {
            throw error;
        }
    }
}


export class Todos2 {
    async getAll(): Promise<AxiosResponse<TodoInterface[]>> {
        try {
            return await axiosInstance.get('/todos');
        } catch (error) {
            throw error;
        }
    }
}



