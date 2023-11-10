import { setLoading } from '@containers/App/actions';
import { setLogin, setUser } from '@containers/Client/actions';
import { getAllUser } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER } from './constants';
import Swal from 'sweetalert2';



function* doLogin({ user }) {
    yield put(setLoading(true))
    try {
        const response = yield call(getAllUser)
        const responseValidate = response.find((el) => el.email === user.email && el.password === user.password)

        if (responseValidate) {
            const { password, ...userData } = responseValidate;
            yield put(setUser(userData));
            yield put(setLogin(true))
            Swal.fire("Login Sukses");
            window.location.reload();
        } else {
            Swal.fire("Invalid Email, Password");
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Invalid Email, Password");
    }
    yield put(setLoading(false))
}

export default function* loginSaga() {
    yield takeLatest(LOGIN_USER, doLogin)
}