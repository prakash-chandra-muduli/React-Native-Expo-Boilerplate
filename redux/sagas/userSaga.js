import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '@/redux/slices/userSlice';
import { getCall } from '../../network/api';

function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(response));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

// dummy API call
const fetchUsersApi = async () => {
  return fetch('https://api.escuelajs.co/api/v1/users').then((response) =>
    response.json()
  );
};

// Watcher saga
function* watchFetchUsers() {
  yield takeLatest(fetchUsersStart.type, fetchUsersSaga);
}

export default watchFetchUsers;
