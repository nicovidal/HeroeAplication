import { types } from "../types/types";

export const authReducder = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        //en el payload vendra todo el usuario
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
