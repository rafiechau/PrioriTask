import { LOGIN_USER } from "./constants";

export const setUser = (user) => ({
    type: LOGIN_USER,
    user
})