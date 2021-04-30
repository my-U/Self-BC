import { CURRENT_TEAM } from "../constant/teamConstant.js";
import { CURRENT_MEMBER } from '../constant/memberConstant.js';

export const setCurrentTeam = (currentTeam) => { 
    localStorage.setItem(CURRENT_TEAM, currentTeam);
};

export const getCurrentTeam = () => {
    return localStorage.getItem(CURRENT_TEAM);
};

export const setCurrentMember = (currentMember) => {
    localStorage.setItem(CURRENT_MEMBER, currentMember);
};

export const getCurrentMember = () => {
    return localStorage.getItem(CURRENT_MEMBER);
};
