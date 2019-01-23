import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

ReactDOM.render(<App />, document.getElementById('root'));
const myStyle = {
    color: '#989',
    fontSize: 100
};

const arr = [
    "Earth",
    "Spark"
];

const state = {
    name: 'zhongmin.gao'
};

class Clock extends React.Component{
    render() {
        return <h1 data-myattribute="1213i3" style={ myStyle }>hello world { arr } 现在是 {this.props.date.toLocaleTimeString()}!!!</h1>;
    }
}

class Student extends React.Component{
    render() {
        return (<h2>{ this.props.name }</h2>);
    }
}

Student.propTypes = {
    name: PropTypes.string
};

function Trick() {
    return (
        <div>
            <Clock date={ new Date() }/>
            <Student name={ state.name }/>
        </div>
    )
}

ReactDOM.render(<Trick/>, document.getElementById('example'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
