import { all } from 'redux-saga/effects';
import repos from './repos';

export default function* sagas() {
  yield all([repos]);
}
