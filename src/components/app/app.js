import * as React from 'react';
import {Provider} from 'react-redux'

import {store} from '../../store';
import {Peoples} from '../peoples';

export const App = () => {    
    return (
        <Provider store={store}>
            <Peoples />
        </Provider>
    )
}