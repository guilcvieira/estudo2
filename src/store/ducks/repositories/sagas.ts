import { call, put } from 'redux-saga/effects'
import apiGithub from "../../../services/api_github";

import { loadSuccess, loadFailure } from './actions';

export function load(): any {

    apiGithub.get('/users/guilcvieira/repos').then((response) => {
        console.log(response.data);
        
        put(loadSuccess(response.data))
    }).catch(err => {
        put(loadFailure())
    })
    // try {
    //     const response = yield call(apiGithub.get, '/users/guilcvieira/repos');
    //     yield put(loadSuccess(response.data))
    // } catch (err) {
    //     yield put(loadFailure())
    // }
}