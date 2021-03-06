/**
 * lib.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

export const capitalize = (s) => (
    typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1)
);
export const removeSlash = (s) => (
    typeof s !== 'string' ? '' : s.substr(1)
);
export const validEmail = (s) => (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s)
);

export const requestConfig = (getState) => {
    const headers = { 'Content-Type': 'application/json' };
    const { token } = getState().auth;
    if (token) {
        headers['Authorization'] = `Token ${ token }`;
    }
    return {
        headers,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrer: 'no-referrer',
    }
};