import { IActionProviders } from "../action-providers";
import IModulesActionProviders from "../modules";
export declare function initStore<T extends IActionProviders>(
  providers: T,
  preloadState?: any,
  extraMiddleware?: Array<any>,
  extraEnhancers?: Array<any>,
  devMode?: boolean
): {
  Store: import("redux").Store<any, import("redux").AnyAction> & {
    dispatch: {};
  };
  ActionProviders: T;
};
export declare function initStoreWithModules(
  providers?: IActionProviders,
  preloadState?: any,
  extraMiddleware?: Array<any>,
  extraEnhancers?: Array<any>,
  devMode?: boolean
): {
  Store: import("redux").Store<any, import("redux").AnyAction> & {
    dispatch: {};
  };
  ActionProviders: IModulesActionProviders;
};
