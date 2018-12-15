import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers as reduxCombineReducers,
  Reducer
} from "redux";
import thunk from "redux-thunk";

import { IActionProviders } from "./action-providers";
import ActionProvider from "./action-providers/action-provider";
import IModulesActionProviders from "./modules";
import { StorageActions } from "./modules/storage/actions";

let middleware: any = [thunk];

function combineReducers<T extends IActionProviders>(providers: T): Reducer {
  let reducers: any = {};

  for (let p in providers) {
    if (providers.hasOwnProperty(p)) {
      const provider = (providers as any)[p] as ActionProvider;
      const reducerName = provider.constructor.name.replace("Actions", "");
      reducers[reducerName] = provider.reducer;
    }
  }

  return reduxCombineReducers({
    ...reducers
  });
}

function initActionProviders<T extends IActionProviders>(
  store: any,
  providers: T
): T {
  let defaults: T = {} as any;

  // allow extra providers
  for (let p in providers) {
    if (providers.hasOwnProperty(p))
      defaults[p] = new (providers as any)[p].constructor(store.dispatch);
  }

  return defaults;
}

function initStore<T extends IActionProviders>(
  providers: T,
  preloadState: any = {},
  extraMiddleware: Array<any> = [],
  extraEnhancers: Array<any> = [],
  devMode: boolean = true
) {
  if (devMode) {
    middleware.push(require("redux-logger").createLogger());
  }

  const Store = createStore(
    combineReducers(providers),
    preloadState,
    compose(
      applyMiddleware(...[...middleware, ...extraMiddleware]),
      ...extraEnhancers
    )
  );

  const ActionProviders: T = initActionProviders(Store, providers);
  return {
    Store,
    ActionProviders
  };
}

export function initStoreWithModules(
  preloadState: any = {},
  extraMiddleware: Array<any> = [],
  extraEnhancers: Array<any> = [],
  devMode: boolean = true
) {
  return initStore<IModulesActionProviders>(
    {
      Storage: new StorageActions()
    },
    preloadState,
    extraMiddleware,
    extraEnhancers,
    devMode
  );
}

export default initStore;
