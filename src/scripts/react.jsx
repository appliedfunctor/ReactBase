var React = require('react');
var ReactDOM = require('react-dom');


var Test = React.createClass({
    render: function(){
        return (<h1>Success</h1>);
    }
});

ReactDOM.render(<Test />, document.getElementById('app'));