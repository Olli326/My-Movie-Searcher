import { all, fork, put, call } from 'redux-saga/effects';
import { addMovies } from '../reduxSetup/actions';
import { API_URL_MOVIE } from '../constants';

function* fetchMovie() {
    try {
        const data = yield call(() => {
            return fetch(API_URL_MOVIE).then(res => res.json());
        });
        yield put(addMovies(data));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSaga() {
    yield all([fork(fetchMovie)]);
}
