/**
 * 封装本地存储
*/

/**
 * 设置
*/
export const setItem = (key, value) => {
    // 首先要判断value是不是复杂数据类型，如果是就用Json.stringify()转换成字符串
    // typeof的返回值是一个字符串，不能直接写Object
    if (typeof (value) === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}

/**
 * 获取
*/
export const getItem = (key) => {
    // 判断是否是json格式的字符串，这里很巧妙的用到了trycatch
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(value)
    } catch (err) {
        return value
    }
}

/**
 * 删除
*/
export const removeItem = (key) => {
    window.localStorage.removeItem(key)
}
