import { get } from "lodash";
export const getPeoplesList = state => get(state, "peoples.res", []);
