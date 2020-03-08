import {all} from 'redux-saga/effects';
import todos from './todos';

export default function* sagas(){
  yield all([todos]);
}