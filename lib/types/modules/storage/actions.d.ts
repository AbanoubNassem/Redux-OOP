import { IStorageActionProvider } from "./index";
import { ActionProvider } from "../../action-providers";
export declare enum StorageActionTypes {
    STORAGE_LOADED = "STORAGE_LOADED",
    STORAGE_CLEARED = "CLEAR_STORAGE",
    STORAGE_UPDATED = "STORAGE_UPDATED",
    STORAGE_REMOVED = "STORAGE_REMOVED"
}
export declare class StorageActions extends ActionProvider implements IStorageActionProvider {
    load: () => any;
    clear: () => any;
    saveOrUpdate: (object: any) => Promise<void>;
    remove: (keys?: string | string[]) => Promise<void>;
    reducer: () => (state: {} | undefined, action: any) => any;
}
