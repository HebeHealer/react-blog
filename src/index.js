import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
const myStyle = {
    color: '#989',
    fontSize: 100
};

const arr = [
    "Earth",
    "Spark"
];

class Clock extends React.Component{
    render() {
        return <h1 data-myattribute="1213i3" style={ myStyle }>hello world { arr } 现在是 {this.props.date.toLocaleTimeString()}!!!</h1>;
    }
}

function trick() {
    ReactDOM.render(
        <Clock date={ new Date() }/>,
        document.getElementById('example'));
}
setInterval(trick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
