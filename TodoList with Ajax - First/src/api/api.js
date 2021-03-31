import { BASE_URL } from '../constant/url.js';

export const postUser = async (name) => {
    try {
        const response = await fetch(
            `${BASE_URL}/api/users`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ name })
            }
        )
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    } catch (err) {
        alert(`💣 Error : ${err} 💣`);
    }
};

export const getUser = async () => {
    try{
        const response = await fetch(

        )
        if (!response.ok) {
            throw new Error(response.status);
        }
    } catch (err) {
        alert(`💣 Error : ${err} 💣`);
    }
}

export const getUsers = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/api/users`
        )
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    } catch (err) {
        alert(`💣 Error : ${err} 💣`);
    }
};

export const dltUser = (userId) => fetch(
    `${BASE_URL}/api/users/${userId}`,
    {
        method: 'DELETE'
    }
);

export const apiAddTodo = async (title, userId) => {
    try {
        const response = await fetch(
            `${BASE_URL}/api/users/${userId}/items/`,
            {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({ contents : title })
            }
        )
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    } catch(err) {
        alert(`💣 Error : ${err} 💣`);
    }
}

export const apiLoadTodo = async (userId) => {
    try{
        const response = await fetch(
            `${BASE_URL}/api/users/${userId}/items/`
        )
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    } catch (err) {
        alert(`💣 Error : ${err} 💣`);
    }
}