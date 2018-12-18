import { IActionProviders } from "../action-providers";
import { IAsyncStorageActionProvider, IStorageActionProvider } from "./storage";
export default interface IModulesActionProviders extends IActionProviders {
  Storage?: IStorageActionProvider | IAsyncStorageActionProvider;
}
