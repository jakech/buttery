var React = require('react'),
    classNames = require('classnames'),
    Default =require('./layouts/Default'),
    Menu = require('../../common/components/Menu');


var Cinema = React.createClass({

    getInitialState: function() {
        return {

        };
    },

    render: function() {
        var menuArray = this.props.i18n.translateWithCache('menu', this.state.locale, {returnObjectTrees: true}),
            title = this.props.i18n.translateWithCache('app.name');

        return (
            <Default title={title}>
                <Menu items={menuArray} />
                <div className="content">
                    <div>Loading...</div>
                </div>
            </Default>
        );
    }

});

module.exports = Cinema;
