import { combineReducers } from 'redux'
import { itemsFetchDataSuccess, itemsHaveError, itemsAreLoading } from './items';

export default combineReducers({
    itemsFetchDataSuccess,
    itemsHaveError,
    itemsAreLoading
});
