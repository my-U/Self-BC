import { loadUsers } from "./loadUser.js";

export const selectUser = (target) => {
    const userId = target.id;

    loadUsers(userId);
}