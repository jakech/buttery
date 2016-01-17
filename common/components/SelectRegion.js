import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import Dropdown from './Dropdown';


export default class SelectRegion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected || 0
        };
    }

    componentDidMount() {

    }

    handleClick(index, e) {
        e.preventDefault();
        this.setState({selected: index}); // React will re-render when state changes
        this.props.handleChange(index);
    }

    render() {
        let items = this.props.items;

        return (
            <Dropdown>
                <a className="by-dropdown_trigger" href="javascript:;">{items[this.state.selected].name}</a>
                <div className="by-dropdown_content">
                    <ul className="by-menu by-menu--vertical">
                        {items.map(function(item, i) {
                            return (
                                <li key={i} onClick={this.handleClick.bind(this, i)}>
                                    <a href="javascript:;">{item.name}</a>
                                </li>
                            );
                        }, this)}
                    </ul>
                </div>
            </Dropdown>
        );
    }

}

SelectRegion.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string
};