//Challenge 1
class DisplayToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display //sets display state to false
    });
  }
  render() {
    // JS code can be run within the render function and doesn't need {} as it's not within JSX
    //This updates the code to toggle between 2 different ui elements when a button is clicked
    if(this.state.display === true) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    }
    else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    } 
  }
};
//Challenge 2
//This method displays different ui when a button is clicked
class TestAnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
    display: !this.state.display
    });
  }
  render() {
    //js code conditions can be embedded within the return and render jsx using && or operators:
    return (
      this.state.display === true &&
      <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
      </div> 
      ||
      this.state.display === false && 
      <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
      </div>
    )
  }
};

//Challenge 3
//Here some inline styles are defined as an object
const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ""
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      //Here the user age is set from the user input
      userAge: this.state.input
    });
  }
  render() {
    //Button JSX elements are set as variables
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          //The input element's style is set to the inputStyle variable
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        
        {
          //ternary operators are used to embed conditionals within the jsx.
          //if the user hasn't input an age buttonOne is shown.  
          //If the user age is less than 18 buttonThree is shown, else buttonTwo is shown.
          this.state.userAge == "" ? (buttonOne) : this.state.userAge < 18 ? (buttonThree) : (buttonTwo)
        }
      </div>
    );
  }
};
//Challenge 4: Using props and conditionals to decide which ui to render
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        //If the fiftyfifty expression from props is true generate win statement else loss statement
        this.props.fiftyFifty === true ? "You win!" : "You lose!"
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      //the counter state is increased by one each time the play button is clicked
      counter: this.state.counter += 1
    });
  }
  render() {
    let expression = Math.random() < 0.5; //expression generates a random # between 0 and 1 and checks if it's less than 0.5
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /*Render the Results component and pass the expression as props*/ }
        <Results fiftyFifty = {expression}/>
        { /* Render a paragraph that displays the turn based on the state's counter attribute */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
ReactDOM.render(
    //<DisplayToggle />,
    //<TestAnd />,
    //<CheckUserAge />,
    <GameOfChance />,
    document.getElementById("render-div")
)