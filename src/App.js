import React, { Component } from 'react';
import './App.css';
import Kashif from './Components/Child1'
import Rizwan from './Components/Child2'

class App extends Component {

  state = {
    parentState: false
  }

  onLogin (){
    this.setState({
      user: true
    })
  }

  child1Called = () => {
    this.setState({
      parentState: true
    })
  }

  render() {
    const { parentState } = this.state
    console.log("App.js parentState ---> ", parentState)
    return (
      <div className="App">
        <header className="App-header">
          <Kashif jabBtnClickHo={this.child1Called}/>

          <br />
          <div style={{border: '2px solid white'}}>
          <Rizwan parentState={parentState}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

/*
Child se Parent ki state change karne ke 3 steps:
1) Create a function in Parent (App.js) that will change it's state
2) Pass it to the child component (Login.js) via props
3) Call that function in Child Component on any event
*/

/*
COMMON ERRORS:
1) `state of undefined` or `setState of undefined`: iska matlab ap ke function me parent/component ka `this`
nahi mil raha. 
2) `Parsing error: Adjacent JSX elements must be wrapped in an enclosing`: iska matlab
ap ne render me multiple cheezen return ki hain, halaanke render me sirf ek element
return hota hai
*/

/*
  Child se Child ki state change karne ka tariqa

  Child1 -> App.js -> Child2

  1) Create a function in Parent (App.js) that will change it's state
  2) Pass it to the child component (Login.js) via props
  3) Call that function in Child Component on any event
*/