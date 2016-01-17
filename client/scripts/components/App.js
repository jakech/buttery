import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import i18n from 'i18next-client';
import { changeRegion, resetErrorMessage } from '../actions';

import Header from '../../../common/components/Header';
import Menu from '../../../common/components/Menu';


// connect with decorator
@connect(mapStateToProps, {changeRegion, resetErrorMessage, pushState})
export default class App extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        changeRegion: PropTypes.func.isRequired,
        resetErrorMessage: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    constructor(props) {
        super(props)
    }

    changeRegion(index) {
        this.props.changeRegion(index);
    }

    render() {
        const { children, inputValue } = this.props;

        var title = i18n.t('app.name'),
            arrayMenu = i18n.t('menu', {returnObjectTrees: true}),
            arrayRegion = [
                {id: 1, name: 'Hong Kong'},
                {id: 2, name: 'Kownloon'},
                {id: 3, name: 'New Territories'}
            ];

        return (
            <div title={title}>
                <Header menu={arrayMenu}
                        region={arrayRegion}
                        changeRegion={this.changeRegion.bind(this)} />
                <h1>{title}</h1>
                <p className="subheading">{i18n.t('app.tagline')}</p>
                <div className="content">
                    {children}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { changeRegion } = state;

    return {
        changeRegion: state.changeRegion,
        errorMessage: state.errorMessage,
        inputValue: state.router.location.pathname.substring(1)
    }
}

// connect without decorator
//export default connect(mapStateToProps, mapDispatchToProps(dispatch))(App);
