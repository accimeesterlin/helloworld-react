
import React from 'react';

// Components
// Names of component needs to be in capital letter
// Class attributes has to be className
// Returning HTML are called JSX


// Header
// Footer


// First way (Component);
// Functional, Presentational, Dum, Stateless component
function Navbar() {

  // NO State
  // No Function

  // JSX
  return(
    <navbar>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </navbar>
  );
}



// Second way (Component);
// Class, Container, Smart, Stateful components
class App extends React.Component{

  constructor(){
    super();

    this.state = {
      username:'accimeesterlin',
      age:4,
      address:'7685 Terrace Club Drive',
      status:'online'
    };

    this.getValue = this.getValue.bind(this);

  }  


  // Change State
  getValue() {
    this.setState({username: "Patrick" });
  }



  render(){
    // JSX
    return(
      <div> 
        <h4 id ="drago" > My name is {this.state.username} </h4>

        <p> I am {this.state.age} years old </p>

        <p>My address is {this.state.address}</p>

        <button onClick = {this.getValue}> Click me</button>
      </div>
    );
  }
};


export default App;



