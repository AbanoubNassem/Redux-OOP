import { IStorageActionProvider } from "./index";
import { ActionProvider } from "../../action-providers";
export default class StorageActions extends ActionProvider
  implements IStorageActionProvider {
  load: () => any;
  clear: () => any;
  saveOrUpdate: (object: any) => Promise<void>;
  remove: (keys?: string | string[]) => Promise<void>;
  reducer: () => (state: {} | undefined, action: any) => any;
}
