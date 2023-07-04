// 存储本地
export const SET_COOKIE = (key: any, value: any) => {
    if (value instanceof Object){
        window.localStorage.setItem(key, JSON.stringify(value));
    } else {
        window.localStorage.setItem(key, value);
    }
}

// 获取本地的值
export const GET_COOKIE = (key: string) => {
    return window.localStorage.getItem(key);
}

// 删除本地的值
export const DEL_COOKIE = (key: string) => {
    window.localStorage.removeItem(key);
}