import { API } from '../../api/api.js';
import { MIN_TEAM_NAME_LENGTH } from '../../constant/teamLength.js';
import { loadTeams } from './loadTeam.js';

export const addTeam = async () => {
    const teamName = prompt('추가할 팀의 이름을 입력하세요.');
    
    if(teamName.length < MIN_TEAM_NAME_LENGTH) {
        return alert('2글자 이상 입력해주세요.');
    } else {
        await API.addTeam(teamName);
        loadTeams(teamName);
    }
}