import { kanbanHandler } from './components/kanban/kanbanHandler.js';

const memberApp = () => {
    kanbanHandler();
}

window.addEventListener('DOMContentLoaded', memberApp);