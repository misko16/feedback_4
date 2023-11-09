import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});

export const registerRequire = async (formData) => {
    const { data } = await baseUrl.post("/users/signup", formData);
    return data;
};

export const loginRequire = async (formData) => {
    const { data } = await baseUrl.post("/users/login", formData);
    return data;
}

export const logOutRequest = async () => {
    const { data } = await baseUrl.post("/users/logout");
    return data;
}

export const refreshRequest = async () => {
    const { data } = await baseUrl.get("/users/current");
    return data;
}
