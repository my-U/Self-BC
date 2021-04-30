import { API } from '../../api/api.js';

const teamButtonTemplate = (team) => {
    return `
    <div id="${team._id}" class="team-card-container">
            <a href="./kanban.html" class="card">
            <div class="card-title">
              ${team.name}
            </div>
          </a>
        </div>
    `; 
}

const createDeleteButtonTemplate = () => {
    return `
    <div class="add-team-button-container"><button id="add-team-button" class="ripple"><span class="material-icons">add</span></button></div>
    `
}

export const loadTeams = async () => {
    const teams = await API.getTeams();
    console.log(teams)
    const teamButton = teams.map((team) => teamButtonTemplate(team));

    const teamListContainer = document.querySelector('.team-list-container');
    teamListContainer.innerHTML = teamButton.join('') + createDeleteButtonTemplate();
}