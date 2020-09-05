import {Action} from "@ngrx/store";
import {Principal} from "./principal.model";

export const SAVE_PRINCIPAL = "SAVE_PRINCIPAL";

export class savePrincipalAction implements Action {

  readonly type: any = SAVE_PRINCIPAL;

  constructor(public payload: Principal) {

  }

}
