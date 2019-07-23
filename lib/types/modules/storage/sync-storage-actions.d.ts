import { IStorageActionProvider } from "./index";
import ActionProvider from "../../action-providers";
export declare class SyncStorageActions extends ActionProvider implements IStorageActionProvider {
    load: () => any;
    clear: () => any;
    saveOrUpdate: (object: any) => void;
    remove: (keys?: string | string[]) => void;
    reducer: () => (state: {} | undefined, action: any) => any;
}
