import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const instance = axios.create();

const refreshToken = async () => {
  var id = localStorage.getItem("@lebahbiru_id");
  var refresh_token = localStorage.getItem("@lebahbiru_refresh_token");
  const response = await fetch(
    `${process.env.BASE_URL}/api/v1/users/refresh-token`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json , text/plain",
      },
      body: JSON.stringify({
        id,
        refresh_token,
      }),
    }
  );

  if (!response.ok) {
    throw response.json();
    // return response;
  }
  console.log("res refresh axios", response.json());
  return response;
};

// Interceptor function
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    var token = localStorage.getItem("@lebahbiru_access_token");

    config!.headers!.Authorization! = `Bearer ${token}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       await refreshToken();
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

interface configProps {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  params?: object;
  data?: any;
  headers?: any;
  cancelToken?: any;
  isAuth?: boolean;
}

export const _useAxios = async (props: configProps) => {
  const {
    url,
    method,
    params,
    data,
    headers,
    cancelToken,
    // isAuth = true,
  } = props;

  // const requestHeaders = {
  //   ...(isAuth
  //     ? {
  //         applyInterceptor,
  //       }
  //     : {}),
  //   ...headers,
  // };

  try {
    const response: AxiosResponse = await instance({
      baseURL: process.env.NEXT_PUBLIC_APP_HOST,
      url,
      method,
      params,
      data,
      cancelToken,
      headers,
    });

    return Promise.resolve(response);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err);
      const serverError = err as AxiosError;
      if (serverError && serverError.response) {
        return Promise.reject(serverError.response);
      }
    } else {
      throw new Error("different error than axios");
    }
  }
};
