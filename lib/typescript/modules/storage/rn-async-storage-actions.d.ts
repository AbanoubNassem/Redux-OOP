import { ActionProvider } from "../../action-providers";
import { IAsyncStorageActionProvider } from "./index";
export declare class RNAsyncStorageActions extends ActionProvider implements IAsyncStorageActionProvider {
    load(): Promise<any>;
    clear(): Promise<any>;
    saveOrUpdate(object: any): Promise<any>;
    remove(keys?: string | Array<string>): Promise<any>;
    reducer: () => (state: {} | undefined, action: any) => any;
}
