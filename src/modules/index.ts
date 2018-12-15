import { IActionProviders } from "../action-providers";
import { IStorageActionProvider } from "./storage";

export default interface IModulesActionProviders extends IActionProviders {
  Storage: IStorageActionProvider;
}
