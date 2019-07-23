import AsyncStorage from "@react-native-community/async-storage";

import { IAsyncStorageActionProvider } from "./index";
import ActionProvider from "../../action-providers";
import StorageActionTypes from "./action-types";

import reducer from "./reducer";

export class RNAsyncStorageActions extends ActionProvider
  implements IAsyncStorageActionProvider {
  async load() {
    const storage: any = {};

    const keys = await AsyncStorage.getAllKeys();
    const stores = await AsyncStorage.multiGet(keys as any);

    stores.map((_result: any, i: number, store: any) => {
      const key = store[i][0];
      const value = store[i][1];
      storage[key] = JSON.parse(value);
      return storage[key];
    });

    this.dispatch({
      type: StorageActionTypes.STORAGE_LOADED,
      payload: storage
    });

    return storage;
  }

  async clear() {
    const storage: any = {};

    await AsyncStorage.clear();

    this.dispatch({
      type: StorageActionTypes.STORAGE_CLEARED,
      payload: storage
    });

    return storage;
  }

  async saveOrUpdate(object: any) {
    const keys = Object.keys(object);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];

      await AsyncStorage.setItem(key, JSON.stringify(object[key]));
    }

    return this.dispatch({
      type: StorageActionTypes.STORAGE_UPDATED,
      payload: object
    });
  }

  async remove(keys: string | Array<string> = []) {
    let deleted: any = {};

    if (Array.isArray(keys)) {
      keys.forEach(async key => {
        await AsyncStorage.removeItem(key);
        deleted[key] = null;
      });
    } else {
      await AsyncStorage.removeItem(keys);
      deleted[keys] = null;
    }

    return this.dispatch({
      type: StorageActionTypes.STORAGE_REMOVED,
      payload: deleted
    });
  }

  reducer = () => reducer;
}
