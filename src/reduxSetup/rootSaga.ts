import { all, fork, put, call } from 'redux-saga/effects';
import { addAllMovies } from '../reduxSetup/actions';
import { API_URL_MOVIE } from '../constants/api';

function* fetchMovie() {
    try {
        const data = yield call(() => {
            return fetch(API_URL_MOVIE).then(res => res.json());
        });
        yield put(addAllMovies(data));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSaga() {
    yield all([fork(fetchMovie)]);
}
