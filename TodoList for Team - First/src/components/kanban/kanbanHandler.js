import { loadTeamMembers } from './loadTeamMembers.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { setCurrentMember } from '../../util/localStorage.js';
import { addTeamMember } from './addTeamMember.js';
import { addMemberTodo } from './addMemberTodo.js';
import { deleteMemberTodo } from './deleteMemberTodo.js';
import { editMemberTodo } from './editMemberTodo.js';

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
};

const addMemberTodoApp = (target) => {
    addMemberTodo(target);
};

const editMemberTodoApp = ({target}) => {
    editMemberTodo(target);
}

export const kanbanHandler = async () => {
    const $todoAppListContainer = document.querySelector('.todoapp-list-container');

    $todoAppListContainer.addEventListener('click', multiTodoApp);
    $todoAppListContainer.addEventListener('keyup', addMemberTodoApp);
    $todoAppListContainer.addEventListener('dblclick', editMemberTodoApp);
    
    const currentTeam = getCurrentTeam();
    loadTeamMembers(currentTeam);
};