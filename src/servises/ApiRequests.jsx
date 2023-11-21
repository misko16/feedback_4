import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://connections-api.herokuapp.com", 
});

export const setToken = token => {
    baseUrl.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
export const registerRequire = async (formData) => {
    const { data } = await baseUrl.post("/users/signup", formData);
    setToken(data.token);
    return data;
};

export const loginRequire = async (formData) => {
    const { data } = await baseUrl.post("/users/login", formData);
    setToken(data.token);
    return data;
}

export const logOutRequest = async () => {
    const { data } = await baseUrl.post("/users/logout");
    return data;
  };
  
  

export const refreshRequest = async () => {
    const { data } = await baseUrl.get("/users/current");
    return data;
};

export const allContactsRequest = async () => {
    const { data } = await baseUrl.get("/contacts");
    return data;
}

export const addRequest = async (newContact) => {
    const { data } = await baseUrl.post("/contacts", newContact);
    return data;
}

export const deleteRequest = async (contactId) => {
    const { data } = await baseUrl.delete(`/contacts/${contactId}`, contactId);
    return data;
}

