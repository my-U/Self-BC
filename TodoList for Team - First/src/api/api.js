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

    addTeamMember: (teamId, name) => {
        const contents = {
            name : name
        }
        return request(`api/teams/${teamId}/members`, option.post(contents));
    },

    getMemberTodo: (teamId, memberId) => {
        return request(`api/teams/${teamId}/members/${memberId}`);
    },

    addMemberTodo: (teamId, memberId, contents) => {
        const content = {
            contents : contents
        }
        return request(`api/teams/${teamId}/members/${memberId}/items`, option.post(content));
    },

    deleteMemberTodo: (teamId, memberId, itemId) => {
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}`, option.delete());
    },

    toggleMemberTodo: (teamId, memberId, itemId) => {
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}/toggle`, option.put());
    },

    editMemberTodo: (teamId, memberId, itemId, contents) => {
        const content = {
            contents : contents
        }
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}`, option.put(content));
    },

    priorityMemberTodo: (teamId, memberId, itemId, priority) => {
        const contents = {
            priority : priority
        }
        return request(`api/teams/${teamId}/members/${memberId}/items/${itemId}/priority`, option.put(contents));
    },

    deleteMemberAllTodo: (teamId, memberId) => {
        return request(`api/teams/${teamId}/members/${memberId}/items`, option.delete());
    }
}