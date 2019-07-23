import { initStore, initStoreWithModules } from "./store";
import ActionProvider from "./action-providers";
import { SyncStorageActions } from "./modules/storage/sync-storage-actions";
import { RNAsyncStorageActions } from "./modules/storage/rn-async-storage-actions";
declare const _default: {
    initStore: typeof initStore;
    initStoreWithModules: typeof initStoreWithModules;
    ActionProvider: typeof ActionProvider;
    SyncStorageActions: typeof SyncStorageActions;
    RNAsyncStorageActions: typeof RNAsyncStorageActions;
};
export default _default;
