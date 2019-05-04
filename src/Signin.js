import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Signin extends Component {
    state={
        email:'',
        password:'',
    }
    onChange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const { email, password } = this.state;
        return (
           <>
            <form>
                {/* htmlfor는 아이디따라서 포커싱해주는 역할  */}
                <label htmlFor='email'>email</label>
                <br/>
                <input type='text' name='email' id='email' value={email} onChange={this.onChange}></input>
                <br/>         
                <label htmlFor='password'>password</label>
                <br/>
                <input type='password' name='password' id='password' value={password} onChange={this.onChange}></input>
                <br/>
                <button>로그인</button>
            </form>
            <Link to='/signup'>회원가입</Link>
            {/* a태그쓰면(서버사이드라우팅) SPA에서 페이지 다시 렌더함 링크(클라이언트라우팅)는 새로고침없이 옮겨줌 */}
           </>
        );
    }
}

export default Signin;