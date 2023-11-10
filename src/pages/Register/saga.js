import { registerRequest, setUser } from '@containers/Client/actions';
import { REGISTER_REQUEST } from '@containers/Client/constants';
import { addUser, getAllUser } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import Swal from 'sweetalert2';

export function* handleRegister({data}) {
    try {
        const users = yield call (getAllUser);
        const { email } = data

        const userExist = users.some((user) => user.email === email)
        if(userExist) {
            Swal.fire("email already exists");
        }else {
            console.log(data, "<<< di saga");
            const newUser = yield call(addUser, data)
    
            // yield put(setUser(newUser))
            Swal.fire("Register sukses");
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* registerSaga() {
    yield takeLatest(REGISTER_REQUEST, handleRegister)
}