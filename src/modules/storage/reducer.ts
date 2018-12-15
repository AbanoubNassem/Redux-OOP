import { StorageActionTypes } from "./actions";

export default (state = {}, action: any) => {
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
