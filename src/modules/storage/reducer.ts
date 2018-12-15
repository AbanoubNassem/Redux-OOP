import { StorageActionTypes } from "./actions";

export default (state = {}, action: any) => {
  switch (action.type) {
    case StorageActionTypes.REMOVE_STORAGE:
    case StorageActionTypes.UPDATE_STORAGE:
    case StorageActionTypes.STORAGE_LOADED: {
      return { ...state, ...action.payload };
    }
    case StorageActionTypes.CLEAR_STORAGE: {
      return {};
    }
  }
  return state;
};
