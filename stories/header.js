import React from 'react';
import Header from '../src/components/header'
import App from '../App'

export default { title: 'Header' };

export const withHeader = () => {
    return (
        <App>
            <Header />
        </App>
    )
}
