import { url } from "inspector";
import { BASS_URL } from "../utils/global";
import request from "../utils/request"
export function login(data: any) {
    return request({
        url: `${BASS_URL}/api/v1/auth/manager_login`,
        method: "POST",
        data
    })
}