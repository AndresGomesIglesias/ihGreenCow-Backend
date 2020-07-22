import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routers from '../Routers';

import Store from '../config/configStore'
// import "./Modal.css";

const Index = () => {
        return (
            
            <Provider store={Store}>
                <Routers />
            </Provider>
        )
    
}
export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
