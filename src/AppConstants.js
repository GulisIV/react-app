/* eslint-disable max-len */
/* eslint-disable camelcase */
// import { createIntl, createIntlCache } from 'react-intl';
// import without from 'lodash/without';
// import messages from './Messages';
// import messagesLocale from '../locales/data';

// const cache = createIntlCache();
// const locale = localStorage.getItem('icdc-lang') || 'en';
// const intl = createIntl({
//     // eslint-disable-next-line no-console
//     onError: console.log,
//     locale,
//     messages: messagesLocale[locale]
// }, cache);

export const ADMIN_ACTIVATIONS = 'ADMIN_ACTIVATIONS';

export const CLIENT_INFO = 'CLIENT_INFO';
export const CLIENT_CREATE = 'CLIENT_CREATE';
export const CLIENT_EDIT = 'CLIENT_EDIT';
export const CLIENT_GAMES_FETCH = 'CLIENT_GAMES_FETCH';
export const CLIENT_ACTIVATE_GAME = 'CLIENT_ACTIVATE_GAME';

export const DOCTOR_INFO = 'DOCTOR_INFO';
export const DOCTOR_CREATE = 'DOCTOR_CREATE';
export const DOCTOR_EDIT = 'DOCTOR_EDIT';
export const DOCTOR_CLIENTS_FETCH = 'DOCTOR_CLIENTS_FETCH';
export const DOCTOR_CREATE_CLIENT = 'DOCTOR_CREATE_CLIENT';
export const DOCTOR_EDIT_CLIENT = 'DOCTOR_EDIT_CLIENT';
export const DOCTOR_CLIENTS_ACTIVATIONS = 'DOCTOR_CLIENTS_ACTIVATIONS';
export const DOCTOR_ACTIVATE_CLIENT = 'DOCTOR_ACTIVATE_CLIENT';
export const DOCTOR_MESSAGES = 'DOCTOR_MESSAGES';
export const DOCTOR_CLIENT_COURSE = 'DOCTOR_CLIENT_COURSE';
export const DOCTOR_CLIENT_COURSES = 'DOCTOR_CLIENT_COURSES';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPLOAD_DOCTOR_PHOTO = 'UPLOAD_DOCTOR_PHOTO';
export const UPLOAD_CLIENT_PHOTO = 'UPLOAD_CLIENT_PHOTO';
export const USER_ROLE = 'USER_ROLE';

export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
export const AUTH_PASS_ERROR = 'AUTH_PASS_ERROR';

export const REGISTER_LOGIN_ERROR = 'REGISTER_LOGIN_ERROR';
export const REGISTER_PASS_ERROR = 'REGISTER_PASS_ERROR';
export const REGISTER_CONFIRM_PASS_ERROR = 'REGISTER_CONFIRM_PASS_ERROR';
export const REGISTER_NAME_ERROR = 'REGISTER_NAME_ERROR';
export const REGISTER_SURNAME_ERROR = 'REGISTER_SURNAME_ERROR';

//URL
export const BASE_URL = 'http://3.125.115.205:8082/api/v1';

export const ADMIN_ACTIVATIONS_URL = `${BASE_URL}/clients/activations`;

export const DOCTOR_INFO_URL = `${BASE_URL}/doctors/info`;
export const DOCTOR_CREATE_URL = `${BASE_URL}/doctors/registration`;
export const DOCTOR_GET_MESSAGES_URL = `${BASE_URL}/doctors/messages`;
export const DOCTOR_GET_CLIENT_URL = (id) => `${BASE_URL}/doctors/client/${id}`;
export const DOCTOR_GET_CLIENTS_URL = `${BASE_URL}/doctors/clients`;
export const DOCTOR_CREATE_CLIENT_URL = `${BASE_URL}/doctors/registration/client`;
export const DOCTOR_CLIENTS_ACTIVATIONS_URL = `${BASE_URL}/clients/activate`;
export const DOCTOR_ACTIVATE_CLIENT_URL = `${BASE_URL}/clients/activate`;
export const DOCTOR_EDIT_URL = `${BASE_URL}/???`;

export const UPLOAD_PHOTO_URL = `${BASE_URL}/upload`;

//course
export const DOCTOR_CLIENT_COURSE_URL = (clientUid, courseId) => `${BASE_URL}/doctors/clients/${clientUid}/correction-course/${courseId}`;
export const DOCTOR_CLIENT_COURSES_URL = (clientUid) => `${BASE_URL}/doctors/clients/${clientUid}/correction-course`;

//login
export const LOGIN_URL = `${BASE_URL}/login`;
export const UPDATE_TOKEN_URL = `${BASE_URL}/login/update-token`;
