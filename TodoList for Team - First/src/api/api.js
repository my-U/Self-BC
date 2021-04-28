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
    },

    getTeamMember: (teamId) => {
        return request(`api/teams/${teamId}/members`);
    },

    addTeamMember: (teamId) => {
        return request(`api/teams/${teamId}/members`);
    },

    loadMemberList: (teamId, memberId) => {
        return request(`api/teams/${teamId}/members/${memberId}`);
    },

    addMemberList: (teamId, memberId) => {
        const contents = {
            content : content
        }
        return request(`api/teams/${teamId}/members/${memberId}/items`, option.post(contents));
    },

    deleteMemberList: (teamId, memberId, itemId) => {
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}`, option.delete());
    },

    toggleMemberList: (teamId, memberId, itemId) => {
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}/toggle`, option.put());
    },

    editMemberList: (teamId, memberId, itemId) => {
        const contents = {
            content : content
        }
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}`, option.put(contents));
    },

    priorityMemberList: (teamId, memberId, itemId) => {
        const contents = {
            priority : priority
        }
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}/priority`, option.put(contents));
    },

    deleteMemberAllList: (teamId, memberId) => {
        return request(`api/teams/${teamId}/members/${memberId}/items`, option.delete());
    }
}