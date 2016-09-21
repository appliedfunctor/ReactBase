'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({
    displayName: 'Test',

    render: function render() {
        return React.createElement(
            'h1',
            null,
            'Success'
        );
    }
});

ReactDOM.render(React.createElement(Test, null), document.getElementById('app'));