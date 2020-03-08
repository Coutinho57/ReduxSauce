import {takeLatest, all, put, call} from 'redux-saga/effects';
import {Types as userTypes, Creators as useCreators} from '../reducers/todos';
import api from '../../services/api';


export function* getRepos({text}){
  try{
    const response = yield call(api.get, `/${text}/repos`);
    yield put(useCreators.addRepoSuccess(response.data));

  }catch(err){

  }
  
}

export default all([
  takeLatest(userTypes.ADD_REPO, getRepos)
]);