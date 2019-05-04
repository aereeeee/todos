import React, { Component } from 'react';
import axios from 'axios';
import {url} from './const';

class Signup extends Component {
    state={
        email:'',
        password:'',
    }
    // componentDidMount(){
    //     console.log(this.props);
    // }
    goBack = () => {
        this.props.history.goBack()
    }
    onSubmit = (e) => {
        const {email,password}=this.state;
        e.preventDefault();
        const result= axios.post(`${url}/users`,{
            email,
            password,
        })
        console.log(result);
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const { email, password } = this.state;
        return (
           <>
            <form onSubmit={this.onSubmit}>
                {/* htmlfor는 아이디따라서 포커싱해주는 역할  */}
                <label htmlFor='email'>email</label>
                <br/>
                <input type='text' name='email' id='email' value={email} onChange={this.onChange}></input>
                <br/>         
                <label htmlFor='password'>password</label>
                <br/>
                <input type='password' name='password' id='password' value={password} onChange={this.onChange}></input>
                <br/>
                <button type='submit'>회원가입</button>
            </form>
           <button onClick={this.goBack}>이전</button>
            {/* a태그쓰면(서버사이드라우팅) SPA에서 페이지 다시 렌더함 링크(클라이언트라우팅)는 새로고침없이 옮겨줌 */}
           </>
        );
    }
}

export default Signup;