import { CURRENT_TEAM } from "../constant/teamConstant.js";

export const setCurrentTeam = (currentTeam) => { 
    localStorage.setItem(CURRENT_TEAM, currentTeam);
};

export const getCurrentTeam = () => {
    localStorage.getItem(CURRENT_TEAM);
}
