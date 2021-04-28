// import store from './store';

// export default store;
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/files/Registry';
import { FlyserStore } from '../AppReducer';
import { reducer as reduxFormReducer } from 'redux-form';

let registry;

export function init (...middleware) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    registry = getRegistry(
        {},
        [...middleware, promiseMiddleware, thunk],
        composeEnhancers
    );
    registry.register({ FlyserStore });
    registry.register({ form: reduxFormReducer });

    return registry;
}

export function getStore () {
    return registry.getStore();
}

export function register (...args) {
    return registry.register(...args);
}