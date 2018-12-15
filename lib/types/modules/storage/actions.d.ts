import { IStorageActionProvider } from "./index";
import { ActionProvider } from "../../action-providers";
export declare enum StorageActionTypes {
    LOAD_STORAGE = "LOAD_STORAGE",
    CLEAR_STORAGE = "CLEAR_STORAGE",
    STORAGE_LOADED = "STORAGE_LOADED",
    UPDATE_STORAGE = "UPDATE_STORAGE",
    REMOVE_STORAGE = "REMOVE_STORAGE"
}
export declare class StorageActions extends ActionProvider implements IStorageActionProvider {
    load: () => any;
    clear: () => any;
    saveOrUpdate: (object: any) => Promise<void>;
    remove: (keys?: string | string[]) => Promise<void>;
    reducer: () => (state: {} | undefined, action: any) => any;
}
