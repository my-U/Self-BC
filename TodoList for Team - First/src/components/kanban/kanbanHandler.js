import { loadTeamMembers } from './loadTeamMembers.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { setCurrentMember } from '../../util/localStorage.js';
import { addTeamMember } from './addTeamMember.js';
import { addMemberTodo } from './addMemberTodo.js';
import { deleteMemberTodo } from './deleteMemberTodo.js';
import { editMemberTodo } from './editMemberTodo.js';
import { deleteMemberAllTodo } from './deleteMemberAllTodo.js';
import { changePriorityMemberTodo } from './changePriorityMemberTodo.js';
import { toggleMemberTodo } from './toggleMemberTodo.js';
import { filterMemberTodo } from './filterMemberTodo.js';

const multiTodoApp = ({ target }) => {
    if(target.classList.contains('ripple')) { 
        addTeamMember();
    }
    else if(target.classList.contains('new-todo')) {
        const currentMember = target.closest('li').id;
        setCurrentMember(currentMember);
    }
    else if(target.classList.contains('destroy')) {
        deleteMemberTodo(target);
    }
    else if(target.classList.contains('clear-completed')){
        deleteMemberAllTodo(target);
    }
    else if(target.classList.contains('toggle')){
        toggleMemberTodo(target);
    }
    else if(target.classList.contains('filters')){
        filterMemberTodo(target)
    }
};

export const kanbanHandler = async () => {
    const $todoAppListContainer = document.querySelector('.todoapp-list-container');

    $todoAppListContainer.addEventListener('click', multiTodoApp);
    $todoAppListContainer.addEventListener('keyup', addMemberTodo);
    $todoAppListContainer.addEventListener('dblclick', editMemberTodo);
    $todoAppListContainer.addEventListener('change', changePriorityMemberTodo);

    const currentTeam = getCurrentTeam();
    loadTeamMembers(currentTeam);
};