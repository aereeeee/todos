import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Todos from './Todos';

class App extends Component {
  render(){
    return (
        <Router>
          {/* 라우터 컴포넌트로 랩핑을 해야지 히스토리나 로케이션같은 프롭을 전달 받을수 있음 */}
            <Route exact path="/" component={Todos} />  
            <Route exact path="/signin" component={Signin} />  
            <Route exact path="/signup" component={Signup} />  
            {/* 시프트 옵션 아래로 한줄복사 */}
            {/* 루트 패쓰로 들어오면 투두스 컴포넌트 렌더해주겠다. */}
            {/* exact 를 쓰면 경로가 완전히 일치할때만 렌더 안쓰면 경로 포함되면 다 렌더 */}
        </Router>
      );
  }
}

export default App;
