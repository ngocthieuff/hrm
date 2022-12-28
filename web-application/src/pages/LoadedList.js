import ItemList from '../components/Item'
import configureStore from '../stores/configureStore';
import { Provider } from 'react-redux';

export function LoadedList() {
    const store = configureStore();

    return <>
        <p>Ngocccccc</p>
        <Provider store={store}>

        <ItemList />
        </Provider>
    </>
}
