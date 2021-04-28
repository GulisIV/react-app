import * as ActionTypes from './AppConstants';
import cogoToast from 'cogo-toast';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const notificationMessages = {
  ru: {
    error: "Ошибка! ",
    success: "Успешно! ",
    successCreate: "Успешно! Вы сможете войти в свой аккаунт после активации администратором.",
    wrongCreds: "Неверные данные!",
    processError: "Повторите попытку позже.",
    deleteError: "Ошибка удаления.",
  },
  en: {
    error: "Error! ",
    success: "Success! ",
    successCreate: "Success! You will be able to enter you account after administrators confirmation.",
    wrongCreds: "Wrong credentials!",
    processError: "Please try again later.",
    deleteError: "Deleting error.",
  },
};

const notificationOptions = { position: 'top-right', hideAfter: 7 };

const errorNotification = (msg) => cogoToast.error(notificationMessages['ru'].error + msg, notificationOptions);
const successNotification = (msg) => cogoToast.success(notificationMessages['ru'].success + msg, notificationOptions);
const successCreateNotification = (msg) => cogoToast.success(notificationMessages['ru'].successCreate + msg, notificationOptions);

const checkErrorCodes = (item) => {
  switch (item) {
    case 400:
      return errorNotification(notificationMessages['ru'].error);
    case 401:
      return errorNotification(notificationMessages['ru'].wrongCreds);
    case 422:
      return errorNotification(notificationMessages['ru'].deleteError);
    case 500:
      return errorNotification(notificationMessages['ru'].processError);
    default:
      return errorNotification(item);
  }
};

const loginHeaders = {
  'Content-Type': 'application/json',
  credentials: 'include'
};

const requestHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};

const uploadHeaders = {
  Authorization: `Bearer ${localStorage.getItem('token')}`
};

const getData = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: requestHeaders
  });

  if (!response.ok) {
    checkErrorCodes(response.status);
  }

  return await response.json();
};

const loginData = async (url, payload) => {
  const response = await fetch(url, {
    method: "POST",
    headers: loginHeaders,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    checkErrorCodes(response.status);
  }

  return await response.json();
};

const createData = async (url, payload) => {
  const response = await fetch(url, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    checkErrorCodes(response.status);
  }

  return await response.json();
};

const uploadFileData = async (url, file) => {
  const data = new FormData() 
  data.append('file', file)
  const response = await fetch(url, {
    method: "POST",
    headers: uploadHeaders,
    body: data
    
  });

  if (!response.ok) {
    checkErrorCodes(response.status);
  }

  return await response.json();
};

const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('login');
};

const deleteData = async (url, payload) => {
  const response = await fetch(url, { method: "DELETE", headers: requestHeaders, body: JSON.stringify(payload) });
  return await response.json();
};

export const authLoginFetch = (authError) => ({
  type: ActionTypes.AUTH_LOGIN_ERROR,
  payload: authError
});

export const authPassFetch = (authError) => ({
  type: ActionTypes.AUTH_PASS_ERROR,
  payload: authError
});

export const registerLoginFetch = (registerError) => ({
  type: ActionTypes.REGISTER_LOGIN_ERROR,
  payload: registerError
});

export const registerPassFetch = (registerError) => ({
  type: ActionTypes.REGISTER_PASS_ERROR,
  payload: registerError
});

export const registerConfirmPassFetch = (registerError) => ({
  type: ActionTypes.REGISTER_CONFIRM_PASS_ERROR,
  payload: registerError
});

export const registerNameFetch = (registerError) => ({
  type: ActionTypes.REGISTER_NAME_ERROR,
  payload: registerError
});

export const registerSurnameFetch = (registerError) => ({
  type: ActionTypes.REGISTER_SURNAME_ERROR,
  payload: registerError
});

export const sendLoginData = (payload) => ({
  type: ActionTypes.LOGIN,
  payload: loginData(ActionTypes.LOGIN_URL, payload)
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
  payload: clearLocalStorage()
});

export const uploadDoctorPhoto = (photo) => ({
  type: ActionTypes.UPLOAD_DOCTOR_PHOTO,
  payload: uploadFileData(ActionTypes.UPLOAD_PHOTO_URL, photo)
});

export const uploadClientPhoto = (photo) => ({
  type: ActionTypes.UPLOAD_CLIENT_PHOTO,
  payload: uploadFileData(ActionTypes.UPLOAD_PHOTO_URL, photo)
});

export const createDoctor = (payload) => ({
  type: ActionTypes.DOCTOR_CREATE,
  payload: loginData(ActionTypes.DOCTOR_CREATE_URL, payload)
});

export const createClient = (payload) => ({
  type: ActionTypes.CLIENT_CREATE,
  payload: createData(ActionTypes.DOCTOR_CREATE_CLIENT_URL, payload)
});

export const editDoctor = (payload) => ({
  type: ActionTypes.DOCTOR_EDIT,
  payload: loginData(ActionTypes.DOCTOR_CREATE_URL, payload)
});

export const getDoctorInfo = (payload) => ({
  type: ActionTypes.DOCTOR_INFO,
  payload: getData(ActionTypes.DOCTOR_INFO_URL, payload)
});

export const getDoctorClients = (payload) => ({
  type: ActionTypes.DOCTOR_CLIENTS_FETCH,
  payload: getData(ActionTypes.DOCTOR_GET_CLIENTS_URL, payload)
});

export const getDoctorClientsActivations = (payload) => ({
  type: ActionTypes.DOCTOR_CLIENTS_FETCH,
  payload: getData(ActionTypes.DOCTOR_GET_CLIENTS_URL, payload)
});

export const getDoctorMessages = (payload) => ({
  type: ActionTypes.DOCTOR_MESSAGES,
  payload: getData(ActionTypes.DOCTOR_GET_MESSAGES_URL, payload)
});

export const getClientGames = (id, payload) => ({
  type: ActionTypes.CLIENT_GAMES_FETCH,
  payload: getData(ActionTypes.DOCTOR_CLIENT_COURSES_URL(id), payload)
});

export const updateToken = (payload) => ({
  type: ActionTypes.UPDATE_TOKEN,
  payload: loginData(ActionTypes.UPDATE_TOKEN_URL, payload)
});

export const login = (payload) => {
  return (dispatch) => {
    const response = dispatch(sendLoginData(payload));

    response.then((data) => {
      localStorage.setItem('login', data.value.login)
      localStorage.setItem('token', data.value.refreshToken)
      localStorage.setItem('userRole', data.value.role)      
    }).catch(error => {console.log("Error: ", error)});
  }
};

export const uploadDoctorPhotoAndFetch = (photo) => {
  return (dispatch) => {
    const response = dispatch(uploadDoctorPhoto(photo));

    response.then((data) => {
      console.log('Upload photo action data: ', data);
    
    }).catch(error => {console.log("Error: ", error)});
  }
};

export const uploadClientPhotoAndFetch = (photo) => {
  return (dispatch) => {
    const response = dispatch(uploadClientPhoto(photo));

    response.then((data) => {
      console.log('Upload photo action data: ', data);
   
    }).catch(error => {console.log("Error: ", error)});
  }
};

export const refreshToken = () => {
  return (dispatch) => {
      const refreshPayload = {
        "login": localStorage.getItem('login'),
        "refreshToken": localStorage.getItem('token')
      };
      const refreshToken = dispatch(updateToken(refreshPayload));
      refreshToken.then((refreshData) => {
        localStorage.setItem('token', refreshData.value.token);      
    }).catch(error => {console.log("Error: ", error)});
  }
};

export const createDoctorAndFetch = (payload) => {
  return (dispatch) => {
    const response = dispatch(createDoctor(payload));

    response.then(() => {
      successCreateNotification('');
    }).catch(error => console.log(error));
  }
};

export const createClientAndFetch = (payload) => {
  return (dispatch) => {

    const response = dispatch(createClient(payload));

    response.then(() => {
      successNotification('');
    }).catch(error => console.log(error));
  }
};

export const getAllDoctors = async () => {
  const res = await getData(`/admin/not-enabled-doctors`);
  return res.results;
};

// get user role action

export const getUserRole = () => ({
    type: ActionTypes.USER_ROLE,
    role: localStorage.getItem('userRole')
});
