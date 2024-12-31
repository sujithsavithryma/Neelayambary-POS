import { createAction, props } from "@ngrx/store";

export const onActiveNavChange = createAction(
  '[Nav] onActiveNavChange',
  props<{selectedNav: any}>()
);
