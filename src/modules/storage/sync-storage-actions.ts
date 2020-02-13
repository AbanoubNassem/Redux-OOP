import { IStorageActionProvider } from "./index";
import StorageActionTypes from "./action-types";
import { ActionProvider } from "../../action-providers";

import reducer from "./reducer";

const PREFIX = "REDUX_OOP_";

export class SyncStorageActions extends ActionProvider
  implements IStorageActionProvider {
  load = () => {
    const storage: any = {};

    for (let i = 0, len = localStorage.length; i < len; i++) {
      let key: any = localStorage.key(i);
      if (key.startsWith(PREFIX)) {
        let value = localStorage[key];
        storage[key] = JSON.parse(value);
      }
    }

    this.dispatchAction(StorageActionTypes.STORAGE_LOADED, storage);

    return storage;
  };

  clear = () => {
    const storage: any = {};

    localStorage.clear();
    this.dispatchAction(StorageActionTypes.STORAGE_CLEARED, storage);

    return storage;
  };

  saveOrUpdate = (object: any) => {
    for (let index = 0; index < Object.keys(object).length; index++) {
      const key = Object.keys(object)[index];

      localStorage.setItem(PREFIX + key, JSON.stringify(object[key]));
    }

    return this.dispatchAction(StorageActionTypes.STORAGE_UPDATED, object);
  };

  remove = (keys: string | Array<string> = []) => {
    let deleted: any = {};

    if (Array.isArray(keys)) {
      keys.forEach(key => {
        localStorage.removeItem(PREFIX + key);
        deleted[key] = null;
      });
    } else {
      localStorage.removeItem(PREFIX + keys);
      deleted[keys] = null;
    }

    return this.dispatchAction(StorageActionTypes.STORAGE_REMOVED, deleted);
  };

  protected reducer = () => reducer;
}
