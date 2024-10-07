import { call, put, takeLatest } from 'redux-saga/effects';
import { onLogin, updateUserInformation } from '../slices/authSlice';

function* login(action) {
  try {
    const userData = yield call(apiLogin, action.payload);
    yield put(updateUserInformation(userData));
    yield put(onLogin());
  } catch (e) {
    console.error('Login failed', e);
  }
}

function* watchLogin() {
  yield takeLatest(onLogin.type, login);
}

export default function* authSaga() {
  yield watchLogin();
}

// dummy login simulation
function apiLogin(payload) {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve({ id: 1, name: 'John Doe', email: 'john@example.com' }),
      1000
    )
  );
}
