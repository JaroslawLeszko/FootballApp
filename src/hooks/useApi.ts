const API_URL = "http://localhost:3000/";

export const useApi = () => {
  const call = async <R, P = object>(
    url: string,
    method: "GET" | "DELETE" | "POST" | "PUT",
    payload?: P,
  ) => {
    const fetchConfig = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: payload ? JSON.stringify(payload) : undefined,
    };

    try {
      const response = await fetch(`${API_URL}${url}`, fetchConfig);
      if (response.ok) {
        const data: R = await response.json();
        return data;
      } else {
        const apiError: string = await response.text();
        throw new Error(apiError);
      }
    } catch (e) {
      console.log(e);
      throw new Error("Some error");
    }
  };

  const apiGet = async <R>(url: string) => {
    return await call<R>(url, "GET");
  };

  const apiDelete = async <R>(url: string) => {
    return await call<R>(url, "DELETE");
  };

  const apiPost = async <R, P>(url: string, payload: P) => {
    return await call<R, P>(url, "POST", payload);
  };

  const apiPut = async <R, P>(url: string, payload: P) => {
    return await call<R, P>(url, "PUT", payload);
  };

  return {
    apiGet,
    apiDelete,
    apiPost,
    apiPut,
  };
};
