import { loadTeams } from './components/team/loadTeam.js';
import { teamHandler } from './components/team/teamHandler.js';

const App = async (target) => {
    teamHandler();
    await loadTeams();
}

window.addEventListener('DOMContentLoaded', App);