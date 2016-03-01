import React from 'react';
import ReactDOM from 'react-dom';

class Count extends React.Component {
    render() {
        return <h1>{this.props.count} notifications sent with this site!</h1>
    }
}