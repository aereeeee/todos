import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
const url = 'http://13.113.246.46:8081';

//로그인했냐고 물어보고 안했으면 사인업 페이지로 리다이렉팅할것임
class Todos extends Component {
    state={
        redirect: false,
    }
    componentDidMount(){
    }
    render() {
        return (
            // 리턴하는 자식이 두개 이상이면 안됨 따라서 <></>로 묶어줌
            <>
            {!this.state.redirect && <Redirect to='/signin'/>}
            {/* 리다이렉팅하고 있음  */}
            <div>
                정상 로그인 되었습니다.
            </div>
            </>
        );
    }
}

export default Todos;