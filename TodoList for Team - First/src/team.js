import { teamHandler } from './components/team/teamHandler.js';

const App = async () => {
    await teamHandler();
}

window.addEventListener('DOMContentLoaded', App);