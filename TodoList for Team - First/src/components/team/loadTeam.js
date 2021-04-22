import { API } from '../../api/api.js';

const teamButtonTemplate = ({ _id, name }) => {
    return `
    <div id="${_id} "class="team-card-container">
            <a href="/kanban.html" class="card">
            <div class="card-title">
              ${name}
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

export const loadTeams = async (teamName) => {
    const teams = await API.getTeams();

    const teamButton = teams.map((team) => teamButtonTemplate(team));

    const teamListContainer = document.querySelector('.team-list-container');
    teamListContainer.innerHTML = teamButton.join('') + createDeleteButtonTemplate();
}