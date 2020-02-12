import { all, fork, put, call } from 'redux-saga/effects';
import { addMovies } from '../reduxSetup/actions';
import { MOVIES_URL } from '../constants';

function* fetchMovie() {
    try {
        const data = yield call(() => {
            return fetch(`${MOVIES_URL}/v1/movies`).then(res => res.json());
        });
        yield put(addMovies(data));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSaga() {
    yield all([fork(fetchMovie)]);
}
