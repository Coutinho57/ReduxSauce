import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addRepo: ['text'],
  addRepoSuccess: ['text'],
  removeRepo: ['id'],
});

const INITIAL_STATE = [];

const addRepo = (state = INITIAL_STATE, action) => action.text;

const removeRepo = (state = INITIAL_STATE, action) =>
  state.filter(todo => todo.id !== action.id);

export default createReducer(INITIAL_STATE, {
  [Types.ADD_REPO_SUCCESS]: addRepo,
  [Types.REMOVE_REPO]: removeRepo,
});
