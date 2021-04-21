import { addTeam } from './addTeam.js';

export const teamHandler = () => {
    const $teamAddButton = document.querySelector('#add-team-button');

    
    $teamAddButton.addEventListener('click', addTeam);
    
}