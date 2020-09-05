import {Principal} from "./principal.model";
import {SAVE_PRINCIPAL, savePrincipalAction} from "./save.principal.action";


export function principalReducer(state: Principal, action: savePrincipalAction) {
  switch (action.type) {
    case  SAVE_PRINCIPAL:
      state = Object.assign({}, state, action.payload);
      return  state;
      break;
    default:
      return state;
      break;
  }
}

