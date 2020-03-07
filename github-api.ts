import axios from 'axios';

const baseURL = 'https://api.github.com/';

export const getUser = async (username: String) => {
    try {
        const { data } = await axios.request({ method: 'GET', baseURL, url: `users/${username}` });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export interface User {
    login: string,
    id: number,

}

export const init = async () => {
    const user = await getUser('luindayk');
    console.log(JSON.stringify(user));
}

init();