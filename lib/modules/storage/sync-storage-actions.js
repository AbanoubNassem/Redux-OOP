import StorageActionTypes from "./action-types";
import ActionProvider from "../../action-providers";
import reducer from "./reducer";
export class SyncStorageActions extends ActionProvider {
    constructor() {
        super(...arguments);
        this.load = () => {
            const storage = {};
            for (let i = 0, len = localStorage.length; i < len; i++) {
                let key = localStorage.key(i);
                let value = localStorage[key];
                storage[key] = JSON.parse(value);
            }
            this.dispatch({
                type: StorageActionTypes.STORAGE_LOADED,
                payload: storage
            });
            return storage;
        };
        this.clear = () => {
            const storage = {};
            localStorage.clear();
            this.dispatch({
                type: StorageActionTypes.STORAGE_CLEARED,
                payload: storage
            });
            return storage;
        };
        this.saveOrUpdate = (object) => {
            for (let index = 0; index < Object.keys(object).length; index++) {
                const key = Object.keys(object)[index];
                localStorage.setItem(key, JSON.stringify(object[key]));
            }
            return this.dispatch({
                type: StorageActionTypes.STORAGE_UPDATED,
                payload: object
            });
        };
        this.remove = (keys = []) => {
            let deleted = {};
            if (Array.isArray(keys)) {
                keys.forEach(key => {
                    localStorage.removeItem(key);
                    deleted[key] = null;
                });
            }
            else {
                localStorage.removeItem(keys);
                deleted[keys] = null;
            }
            return this.dispatch({
                type: StorageActionTypes.STORAGE_REMOVED,
                payload: deleted
            });
        };
        this.reducer = () => reducer;
    }
}
//# sourceMappingURL=sync-storage-actions.js.map