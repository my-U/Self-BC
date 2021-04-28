import { API } from '../../api/api.js';
import { loadTeamMembers } from './loadTeamMembers.js';

export const addTeamMember = async () => {
    const $newMember = prompt("추가하실 팀원의 이름을 입력해주세요.");

    await API.addTeamMember($newMember);
    loadTeamMembers();
};