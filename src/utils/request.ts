import axios from "axios";
import { BASS_URL } from "./global";
import { DEL_COOKIE, GET_COOKIE, SET_COOKIE } from "./Cookies";
import { config } from "process";
import { error } from "console";
import {message} from 'antd'
const instance = axios.create({
    baseURL: BASS_URL,
    timeout:5000
})
instance.interceptors.request.use(
    config => {
        config.headers.Authorization = GET_COOKIE("token");
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 20000) {
            message.open({
            type: 'error',
            content: '错误信息',
             });
        } else {
             if (res.data ){
                SET_COOKIE("token", res.data.token)
            }
            return res
        }
    }
)

export default instance