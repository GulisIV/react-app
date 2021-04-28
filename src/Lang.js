/* eslint-disable no-console */
import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from './locales/data';

class Lang extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lang: 'ru' };
        this.changeLang = this.changeLang.bind(this);        
    }

    changeLang(lang) {
        this.setState({ lang });
    }

    render() {
        return <IntlProvider locale={'ru'} messages={messages['ru']} onError={console.log} { ...this.props } />;
    }
};

export default Lang;
