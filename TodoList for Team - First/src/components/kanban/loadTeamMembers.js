import { API } from '../../api/api.js';
import { loadMemberTodo } from './loadMemberTodo.js';

const renderTeamName = (teamName) => {
  const $userTitle = document.querySelector('#user-title strong');
  $userTitle.innerText = teamName;
};

const memberAddButton = () => {
  return `
    <li class="add-user-button-container">
      <button id="add-user-button" class="ripple">
        <span class="material-icons">add</span>
      </button>
    </li>
  `
};

const memberTemplate = (member) => {
  return `
    <li class="todoapp-container" id="${member._id}">
          <h2> 
            <span><strong>${member.name}</strong>'s Todo List</span>
          </h2>
          <div class="todoapp">
            <section class="input-container">
              <input class="new-todo" placeholder="할 일을 입력해주세요."/>
            </section>
            <section class="main">
              <ul class="todo-list">
                ${loadMemberTodo(member.todoList)}
              </ul>
            </section>
            <div class="count-container">
              <span class="todo-count">총 <strong>${member.todoList.length}</strong> 개</span>
              <ul class="filters">
                <li>
                  <a href="#all" class="selected">전체보기</a>
                </li>
                <li>
                  <a href="#priority">우선 순위</a>
                </li>
                <li>
                  <a href="#active">해야할 일</a>
                </li>
                <li>
                  <a href="#completed">완료한 일</a>
                </li>
              </ul>
              <button class="clear-completed">모두 삭제</button>
            </div>
          </div>
        </li>
    `
}

export const loadTeamMembers = async (currentTeam) => {
    const team = await API.getTeam(currentTeam);
    const members = await team.members;
    
    const memberList = members.map((member) => memberTemplate(member));
    const $todoAppListContainer = document.querySelector('.todoapp-list-container');
    $todoAppListContainer.innerHTML = memberList + memberAddButton();
    
    renderTeamName(team.name);
}
