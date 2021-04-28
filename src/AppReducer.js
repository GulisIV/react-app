/* eslint camelcase: 0 */
import * as ActionTypes from './AppConstants';
import Immutable from 'seamless-immutable';

// eslint-disable-next-line new-cap
const initialState = Immutable({
    // info: [],

    authLoginError: '',
    authPassError: '',
    registerLoginError: '',
    registerPassError: '',
    registerConfirmPassError: '',
    registerNameError: '',
    registerSurnameError: '',
    loginStatus: '',
    doctorInfo: [],
    doctorInfoFetchStatus: '',
    doctorCreate: [],
    doctorCreateStatus: '',
    doctorClients: [],
    doctorClientsFetchStatus: '',
    doctorMessages: [],
    doctorMessagesFetchStatus: '',
    doctorActivateClientStatus: '',
    clientInfo: [],
    clientInfoFetchStatus: '',
    clientCreate: [],
    clientCreateStatus: '',
    clientGames: [],
    clientGamesFetchStatus: '',
    doctorPhoto: '',
    uploadDoctorPhotoStatus: '',
    clientPhoto: '',
    uploadClientPhotoStatus: '',
    userRole: '',
    userLogOut: ''
});

export const FlyserStore = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.AUTH_LOGIN_ERROR}`:
            return state.set('authLoginError', action.payload);
        case `${ActionTypes.AUTH_PASS_ERROR}`:
            return state.set('authPassError', action.payload);

        case `${ActionTypes.REGISTER_LOGIN_ERROR}`:
            return state.set('registerLoginError', action.payload);
        case `${ActionTypes.REGISTER_PASS_ERROR}`:
            return state.set('registerPassError', action.payload);
        case `${ActionTypes.REGISTER_CONFIRM_PASS_ERROR}`:
            return state.set('registerConfirmPassError', action.payload);
        case `${ActionTypes.REGISTER_NAME_ERROR}`:
            return state.set('registerNameError', action.payload);
        case `${ActionTypes.REGISTER_SURNAME_ERROR}`:
            return state.set('registerSurnameError', action.payload);
            
        // log in
        case `${ActionTypes.LOGIN}_PENDING`:
            return state.set('loginStatus', 'pending');
        case `${ActionTypes.LOGIN}_REJECTED`:
            return state.set('loginStatus', 'rejected');
        case `${ActionTypes.LOGIN}_FULFILLED`:
            return state.set('loginStatus', 'fulfilled');

        //log out
        case `${ActionTypes.LOGOUT}_PENDING`:
            return state.set('userLogOut', 'pending');
        case `${ActionTypes.LOGOUT}_REJECTED`:
            return state.set('userLogOut', 'rejected');
        case `${ActionTypes.LOGOUT}_FULFILLED`:
            return state.set('userLogOut', 'fulfilled');

        case `${ActionTypes.USER_ROLE}`:
            return state.set('userRole', action.role);

        // upload doctor photo status
        case `${ActionTypes.UPLOAD_DOCTOR_PHOTO}_PENDING`:
            return state.set('uploadDoctorPhotoStatus', 'pending');
        case `${ActionTypes.UPLOAD_DOCTOR_PHOTO}_REJECTED`:
            return state.set('uploadDoctorPhotoStatus', 'rejected');
        case `${ActionTypes.UPLOAD_DOCTOR_PHOTO}_FULFILLED`:
            return Immutable.merge(state, {
                doctorPhoto: action.payload.url,
                uploadDoctorPhotoStatus: 'fulfilled'
            });

        // upload client photo status
        case `${ActionTypes.UPLOAD_CLIENT_PHOTO}_PENDING`:
            return state.set('uploadClientPhotoStatus', 'pending');
        case `${ActionTypes.UPLOAD_CLIENT_PHOTO}_REJECTED`:
            return state.set('uploadClientPhotoStatus', 'rejected');
        case `${ActionTypes.UPLOAD_CLIENT_PHOTO}_FULFILLED`:
            return Immutable.merge(state, {
                clientPhoto: action.payload.url,
                uploadClientPhotoStatus: 'fulfilled'
            });
        // fetch doctors info
        case `${ActionTypes.DOCTOR_INFO}_PENDING`:
            return state.set('doctorInfoFetchStatus', 'pending');
        case `${ActionTypes.DOCTOR_INFO}_FULFILLED`:
            return Immutable.merge(state, {
                doctorInfo: action.payload,
                doctorInfoFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.DOCTOR_INFO}_REJECTED`:
            return state.set('doctorInfoFetchStatus', 'rejected');

        // register doctor
        case `${ActionTypes.DOCTOR_CREATE}_PENDING`:
            return state.set('doctorCreateStatus', 'pending');
        case `${ActionTypes.DOCTOR_CREATE}_FULFILLED`:
            return Immutable.merge(state, {
                doctorCreate: action.payload,
                doctorCreateStatus: 'fulfilled'
            });
        case `${ActionTypes.DOCTOR_CREATE}_REJECTED`:
            return state.set('doctorCreateStatus', 'rejected');

        // fetch doctor clients
        case `${ActionTypes.DOCTOR_CLIENTS_FETCH}_PENDING`:
            return state.set('doctorClientsFetchStatus', 'pending');
        case `${ActionTypes.DOCTOR_CLIENTS_FETCH}_FULFILLED`:
            return Immutable.merge(state, {
                doctorClients: action.payload,
                doctorClientsFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.DOCTOR_CLIENTS_FETCH}_REJECTED`:
            return state.set('doctorClientsFetchStatus', 'rejected');

        // doctor activate client
        case `${ActionTypes.DOCTOR_ACTIVATE_CLIENT}_PENDING`:
            return state.set('doctorActivateClientStatus', 'pending');
        case `${ActionTypes.DOCTOR_ACTIVATE_CLIENT}_REJECTED`:
            return state.set('doctorActivateClientStatus', 'rejected');
        case `${ActionTypes.DOCTOR_ACTIVATE_CLIENT}_FULFILLED`:
            return state.set('doctorActivateClientStatus', 'fulfilled');

        // fetch single doctor info
        // case `${ActionTypes.DOCTOR_INFO_FETCH}_PENDING`:
        //     return state.set('doctorInfoFetchStatus', 'pending');
        // case `${ActionTypes.DOCTOR_INFO_FETCH}_FULFILLED`:
        //     return Immutable.merge(state, {
        //         doctorInfo: action.payload.data,
        //         doctorInfoFetchStatus: 'fulfilled'
        //     });
        // case `${ActionTypes.DOCTOR_INFO_FETCH}_REJECTED`:
        //     return state.set('doctorInfoFetchStatus', 'rejected');

        // fetch client info
        case `${ActionTypes.CLIENT_INFO}_PENDING`:
            return state.set('clientInfoFetchStatus', 'pending');
        case `${ActionTypes.CLIENT_INFO}_FULFILLED`:
            return Immutable.merge(state, {
                clientInfo: action.payload.data,
                clientInfoFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.CLIENT_INFO}_REJECTED`:
            return state.set('clientInfoFetchStatus', 'rejected');

        // create client
        case `${ActionTypes.CLIENT_CREATE}_PENDING`:
            return state.set('clientCreateStatus', 'pending');
        case `${ActionTypes.CLIENT_CREATE}_FULFILLED`:
            return Immutable.merge(state, {
                clientCreate: action.payload,
                clientCreateStatus: 'fulfilled'
            });
        case `${ActionTypes.CLIENT_CREATE}_REJECTED`:
            return state.set('clientCreateStatus', 'rejected');

        // fetch client games
        case `${ActionTypes.CLIENT_GAMES_FETCH}_PENDING`:
            return state.set('clientGamesFetchStatus', 'pending');
        case `${ActionTypes.CLIENT_GAMES_FETCH}_FULFILLED`:
            return Immutable.merge(state, {
                clientGames: action.payload,
                clientGamesFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.CLIENT_GAMES_FETCH}_REJECTED`:
            return state.set('clientGamesFetchStatus', 'rejected');

        default:
            return Immutable.merge(state, {});
    }
};
