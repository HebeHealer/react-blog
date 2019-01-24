import React from "react";
function UserLogin() {
    return <h2>立即登录</h2>;
}
function UserRegister() {
    return <h4>立即注册</h4>;
}
function LoginButton(props) {
    return (<button onClick={ props.onClick }>登录</button>);
}
function RegisterButton(props) {
    return <button onClick={ props.onClick }>注册</button>;
}

function Greeting(props) {
    const isLogin = props.isLogin;
    if(isLogin) {
        return <UserLogin/>;
    }
    return <UserRegister/>;
}

const messages = ["hello", "word"];

function MailBox(props) {
    const unReadMessage = props.unReadMessage;
    return (
        <div>
            { unReadMessage.length > 0 && <span>您有{ unReadMessage.length }条未读信息</span> }
        </div>
    );
}

class LoginController extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLogin: true };

        //绑定this
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleLogin() {
        this.setState({ isLogin: true });
    }
    handleRegister() {
        this.setState({ isLogin: false });
    }
    render() {
        const isLogin = this.state.isLogin;
        let button = null;
        if(isLogin) {
            //登录
            button = <RegisterButton onClick={ this.handleRegister }/>
        }else{
            //注册
            button = <LoginButton onClick={ this.handleLogin }/>
        }
        return (
            <div>
                <Greeting isLogin={ isLogin }/>
                <MailBox unReadMessage={ messages }/>
                { button }
            </div>
        );
    }
}
export default LoginController;
