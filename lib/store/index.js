import { createStore, applyMiddleware, compose, combineReducers as reduxCombineReducers } from "redux";
import thunk from "redux-thunk";
import { SyncStorageActions } from "../modules/storage/sync-storage-actions";
let middleware = [thunk];
function combineReducers(providers) {
    let reducers = {};
    for (let p in providers) {
        if (providers.hasOwnProperty(p)) {
            const provider = providers[p];
            const reducerName = p.toLowerCase();
            reducers[reducerName] = provider.reducer();
        }
    }
    return reduxCombineReducers({
        ...reducers
    });
}
function initActionProviders(store, providers) {
    let defaults = {};
    for (let p in providers) {
        if (providers.hasOwnProperty(p)) {
            defaults[p] = providers[p];
            defaults[p].dispatch = store.dispatch;
        }
    }
    return defaults;
}
export function initStore(providers, preloadState = {}, extraMiddleware = [], extraEnhancers = [], devMode = true) {
    if (devMode) {
        middleware.push(require("redux-logger").createLogger());
    }
    const Store = createStore(combineReducers(providers), preloadState, compose(applyMiddleware(...[...middleware, ...extraMiddleware]), ...extraEnhancers));
    const ActionProviders = initActionProviders(Store, providers);
    return {
        Store,
        ActionProviders
    };
}
export function initStoreWithModules(providers = {}, preloadState = {}, extraMiddleware = [], extraEnhancers = [], devMode = true) {
    return initStore({
        Storage: new SyncStorageActions(),
        ...providers
    }, preloadState, extraMiddleware, extraEnhancers, devMode);
}
//# sourceMappingURL=index.js.map