import StorageActionTypes from "./action-types";
export default (state = {}, action) => {
    switch (action.type) {
        case StorageActionTypes.STORAGE_REMOVED:
        case StorageActionTypes.STORAGE_UPDATED:
        case StorageActionTypes.STORAGE_LOADED: {
            return { ...state, ...action.payload };
        }
        case StorageActionTypes.STORAGE_CLEARED: {
            return {};
        }
    }
    return state;
};
//# sourceMappingURL=reducer.js.map