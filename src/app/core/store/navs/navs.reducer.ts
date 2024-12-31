import { createReducer, on } from "@ngrx/store";
import { onActiveNavChange } from "./navs.action";
import { NbySidenavItem } from "@core/components/sidenav/sidenav";

export type NbyNavsState = {
  navs: NbySidenavItem[]
}
export type NbyActiveNavState = NbySidenavItem | null;
const INITIAL_STATE = {
  navs: [
    { link: 'products', name: 'Products' },
    { link: 'categories', name: 'Product Categories' },
  ]
};
export const navsReducer = createReducer<NbyNavsState>(
  INITIAL_STATE
);

const ACTIVE_NAV_INITAL_STATE = INITIAL_STATE.navs[0];
export const activeNavReducer = createReducer<NbyActiveNavState>(
  ACTIVE_NAV_INITAL_STATE,
  on(onActiveNavChange, (state, action) => {
    return {...state, ...action.selectedNav};
  })
)
