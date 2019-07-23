import { IAsyncStorageActionProvider } from "./index";
import ActionProvider from "../../action-providers";
export declare class RNAsyncStorageActions extends ActionProvider implements IAsyncStorageActionProvider {
    load(): Promise<any>;
    clear(): Promise<any>;
    saveOrUpdate(object: any): Promise<void>;
    remove(keys?: string | Array<string>): Promise<void>;
    reducer: () => (state: {} | undefined, action: any) => any;
}
