import React from "react";
import PropTypes from 'prop-types';

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
        return <h1 data-myattribute="1213i3" style={ myStyle } >hello world { arr } 现在是 {this.props.date.toLocaleTimeString()}!!!</h1>;
    }
}

class Student extends React.Component{
    render() {
        return (<h2>{ this.props.name }</h2>);
    }
}

class Teacher extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name) {
        this.setState((preState) => ({
            isToggleOn: !preState.isToggleOn
        }));
        alert(name);
    }
    render() {
        return (
            <div>
                <button onClick={ this.handleClick.bind(this,'通过 bind() 方法传递参数') }> { this.state.isToggleOn ? 'ON' : 'OFF' } </button>
            </div>

        );
    }
}

Student.propTypes = {
    name: PropTypes.string
};

function Trick() {
    return (
        <div>
            <Teacher/>
            <Clock date={ new Date() }/>
            <Student name={ state.name }/>
        </div>
    )
}

class Event extends React.Component {
    render() {
        return (
            <Trick/>
        );
    }
}

export default Event;
