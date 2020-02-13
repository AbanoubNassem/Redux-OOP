import _toConsumableArray from"@babel/runtime/helpers/toConsumableArray";import _objectSpread from"@babel/runtime/helpers/objectSpread";import{createStore,applyMiddleware,compose,combineReducers as reduxCombineReducers}from"redux";import thunk from"redux-thunk";import{SyncStorageActions}from"../modules/storage/sync-storage-actions";var middleware=[thunk];function combineReducers(providers){var reducers={};for(var p in providers){if(providers.hasOwnProperty(p)){var provider=providers[p];var reducerName=p.toLowerCase();reducers[reducerName]=provider.reducer();}}return reduxCombineReducers(_objectSpread({},reducers));}function initActionProviders(store,providers){var defaults={};for(var p in providers){if(providers.hasOwnProperty(p)){defaults[p]=providers[p];defaults[p].getState=function(){return store.getState();};defaults[p].dispatch=store.dispatch;defaults[p].init();}}return defaults;}export function initStore(providers){var preloadState=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var extraMiddleware=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var extraEnhancers=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var devMode=arguments.length>4&&arguments[4]!==undefined?arguments[4]:true;if(devMode){middleware.push(require("redux-logger").createLogger());}var Store=createStore(combineReducers(providers),preloadState,compose.apply(void 0,[applyMiddleware.apply(void 0,middleware.concat(_toConsumableArray(extraMiddleware)))].concat(_toConsumableArray(extraEnhancers))));var ActionProviders=initActionProviders(Store,providers);return{Store:Store,ActionProviders:ActionProviders};}export function initStoreWithModules(){var providers=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var preloadState=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var extraMiddleware=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var extraEnhancers=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var devMode=arguments.length>4&&arguments[4]!==undefined?arguments[4]:true;return initStore(_objectSpread({Storage:new SyncStorageActions()},providers),preloadState,extraMiddleware,extraEnhancers,devMode);}
//# sourceMappingURL=index.js.map