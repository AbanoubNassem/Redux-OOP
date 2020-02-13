import AsyncStorage from "@react-native-community/async-storage";

import { ActionProvider } from "../../action-providers";
import { IAsyncStorageActionProvider } from "./index";
import StorageActionTypes from "./action-types";

import reducer from "./reducer";

const PREFIX = "REDUX_OOP_";

export class RNAsyncStorageActions extends ActionProvider
  implements IAsyncStorageActionProvider {
  async load() {
    const storage: any = {};

    const keys = await AsyncStorage.getAllKeys();
    const stores = await AsyncStorage.multiGet(keys as any);

    stores.map((_result: any, i: number, store: any) => {
      const key = store[i][0];
      if (key.startsWith(PREFIX)) {
        const value = store[i][1];
        storage[key.substring(PREFIX.length)] = JSON.parse(value);
        storage[key];
      }
    });

    this.dispatchAction(StorageActionTypes.STORAGE_LOADED, storage);

    return storage;
  }

  async clear() {
    const storage: any = {};

    await AsyncStorage.clear();

    this.dispatchAction(StorageActionTypes.STORAGE_CLEARED, storage);

    return storage;
  }

  async saveOrUpdate(object: any) {
    const keys = Object.keys(object);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];

      await AsyncStorage.setItem(PREFIX + key, JSON.stringify(object[key]));
    }

    return this.dispatchAction(StorageActionTypes.STORAGE_UPDATED, object);
  }

  //to be fixed!
  async remove(keys: string | Array<string> = []) {
    const deleted: any = {};

    if (Array.isArray(keys)) {
      keys.forEach(async key => {
        await AsyncStorage.removeItem(PREFIX + key);
        deleted[key] = null;
      });
    } else {
      await AsyncStorage.removeItem(PREFIX + keys);
      deleted[keys] = null;
    }

    return this.dispatchAction(StorageActionTypes.STORAGE_REMOVED, deleted);
  }

  protected reducer = () => reducer;
}
