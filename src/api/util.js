export const setToken = (token, auto) => {
    if (auto) {
        sessionStorage.setItem('TOKEN_KEY', token)
    } else {
        sessionStorage.setItem('TOKEN_KEY', token)
    }
}

export const getToken = () => {
    const token = sessionStorage.getItem('TOKEN_KEY')
    if (token && token !== null) {
        return token
    } else {
        return false
    }
}