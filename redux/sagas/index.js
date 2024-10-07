import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import userSaga from './userSaga';

// Combine all sagas in one root saga
export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
