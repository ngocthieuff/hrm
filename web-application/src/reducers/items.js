import axios from 'axios'
/**
    this reducer (function) will be called after dispatch like:
        dispatch(itemsHaveError(true))

    action:
        export function itemsHaveError(bool) {
        return {
            type: 'ITEMS_HAVE_ERROR',
            hasError: bool
        };

    and then dispatch:
        dispatch(itemsHaveError(true))
*/
export function itemsHaveError(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAVE_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function itemsAreLoading(bool) {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

/*
    what is dispatch here?
    dispatch belike:... built in function of redux ???
    like, window is built in variable of chrome ???
    so we don't need to pass it or init it, just use

    and why dispatch is not used by import like normal (useState...)
    because it is originated from components/ItemList.js
    
    in that file, we import 'connect' from 'redux', 
    and I think dispatch is generated from that
*/
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsAreLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}
