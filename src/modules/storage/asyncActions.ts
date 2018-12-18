import { IAsyncStorageActionProvider } from "./index";
import { ActionProvider } from "../../action-providers";
import StorageActionTypes from "./actionTypes";
import reducer from "./reducer";

let AsyncStorage: any;

try {
  if (process.env.NODE_ENV !== "test") {
    AsyncStorage = require("react-native").AsyncStorage;
  }
} catch (err) {
  AsyncStorage = {};
}

export default class AsyncStorageActions extends ActionProvider
  implements IAsyncStorageActionProvider {
  load = async () => {
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
  };

  clear = async () => {
    const storage: any = {};

    await AsyncStorage.clear();

    this.dispatch({
      type: StorageActionTypes.STORAGE_CLEARED,
      payload: storage
    });

    return storage;
  };

  saveOrUpdate = async (object: any) => {
    for (let index = 0; index < Object.keys(object).length; index++) {
      const key = Object.keys(object)[index];

      await AsyncStorage.setItem(key, JSON.stringify(object[key]));
    }

    return this.dispatch({
      type: StorageActionTypes.STORAGE_UPDATED,
      payload: object
    });
  };

  remove = async (keys: string | Array<string> = []) => {
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
  };

  reducer = () => reducer;
}
