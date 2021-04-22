import { addTeam } from './addTeam.js';
import { setCurrentTeam } from '../../util/localStorage.js';

const teamList = ({target}) => {
    if(target.classList.contains('ripple')) {
        addTeam();
    }
    if(target.classList.contains('card')) {
        setCurrnetTeam(target.id);
        console.log(target)
    }
}

export const teamHandler = () => {
    const $teamList = document.querySelector('.team-list-container');
    
    $teamList.addEventListener('click', teamList);
}