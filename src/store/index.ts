import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers as reduxCombineReducers,
  Reducer
} from "redux";
import thunk from "redux-thunk";

import { ActionProvider, IActionProviders } from "../action-providers";
import IModulesActionProviders from "../modules";
import StorageActions from "../modules/storage/actions";

let middleware: any = [thunk];

function combineReducers<T extends IActionProviders>(providers: T): Reducer {
  let reducers: any = {};

  for (let p in providers) {
    if (providers.hasOwnProperty(p)) {
      const provider = (providers as any)[p] as ActionProvider;
      const reducerName = p.toLowerCase();
      reducers[reducerName] = provider.reducer();
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
  let defaults: any = {};

  for (let p in providers) {
    if (providers.hasOwnProperty(p)) {
      defaults[p] = (providers as any)[p];
      defaults[p].dispatch = store.dispatch;
    }
  }

  return defaults;
}

export function initStore<T extends IActionProviders>(
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
  providers: IActionProviders = {},
  preloadState: any = {},
  extraMiddleware: Array<any> = [],
  extraEnhancers: Array<any> = [],
  devMode: boolean = true
) {
  return initStore<IModulesActionProviders>(
    {
      Storage: new StorageActions(),
      ...providers
    },
    preloadState,
    extraMiddleware,
    extraEnhancers,
    devMode
  );
}
