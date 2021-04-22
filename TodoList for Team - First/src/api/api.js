import { BASE_URL } from '../constant/url.js';

const option = {
    post: (contents) => ({
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(contents)
    }),

    delete: () => ({
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json'}
    }),

    put: (contents) => ({
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(contents)
    })
};

const request = async (url, option = {}) => {
    try{
        const response = await fetch(`${BASE_URL}${url}`, option);
        if(!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    } catch(err) {
        alert(`💣 Error : ${err} 💣`);
    }
};

export const API = {
    getTeam:(teamId) => {
        return request(`api/teams/${teamId}`);
    },

    getTeams: () => {
        return request(`api/teams`);
    },

    addTeam: (name) => {
        const content = {
            name : name
        }
        return request(`api/teams`, option.post(content));
    },

    deleteTeam: (teamId) => {
        return request(`api/teams/${teamId}`);
    }
}