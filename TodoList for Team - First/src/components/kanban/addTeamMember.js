import { API } from '../../api/api.js';
import { loadTeamMembers } from './loadTeamMembers.js';
import { getCurrentTeam } from '../../util/localStorage.js';

export const addTeamMember = async () => {
        const $newMember = prompt("추가하실 팀원의 이름을 입력해주세요.");
        const currentTeam = getCurrentTeam();
        console.log(currentTeam)
        await API.addTeamMember(currentTeam, $newMember);
        loadTeamMembers(currentTeam);
};