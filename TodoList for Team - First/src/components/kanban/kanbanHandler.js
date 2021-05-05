import { loadTeamMembers } from './loadTeamMembers.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { setCurrentMember } from '../../util/localStorage.js';
import { addTeamMember } from './addTeamMember.js';
import { addMemberTodo } from './addMemberTodo.js';
import { deleteMemberTodo } from './deleteMemberTodo.js';

const multiTodoApp = ({ target }) => {
    if(target.classList.contains('ripple')) { 
        addTeamMember();
    }
    else if(target.classList.contains('new-todo')) {
        const currentMember = target.closest('li').id;
        setCurrentMember(currentMember);
    }
    else if(target.classList.contains('destroy')) {
        const currentMember = target.closest('li').parentElement.closest('li').id;
        setCurrentMember(currentMember);
        deleteMemberTodo(target);
    }
};

const addMemberTodoApp = (target) => {
    addMemberTodo(target);
};

export const kanbanHandler = async () => {
    const $todoAppListContainer = document.querySelector('.todoapp-list-container');

    $todoAppListContainer.addEventListener('click', multiTodoApp);
    $todoAppListContainer.addEventListener('keyup', addMemberTodoApp);
    
    const currentTeam = getCurrentTeam();
    loadTeamMembers(currentTeam);
};