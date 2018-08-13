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

//Challenge 5: Rendering inline styles based on conditionals.
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    //Here the style object variable is declared:
    let inputStyle = {
      border: '1px solid black'
    };
    //If the user input text length is > 15:
    this.state.input.length > 15 
    //Set the inputStyle to a 3px red border
    ? inputStyle = {border: '3px solid red'}
    //Else keep it 1 px solid black
    : inputStyle = {border: '1px solid black'}
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          //Here the input element's style is set to the declared inputStyle variable
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
//Challenge 6: Using map to dynamically render user input
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    //The todolist is initialized as an empty array
    this.state = {
      userInput: "",
      toDoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    //The user input is split at a comma and added as an individual item in the array
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      //The toDoList state is updated with the new array.
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    //Each of the elements from the toDoList array are mapped into the items constant as an li element with the item as text.
    const items = this.state.toDoList.map(item => <li key={item}>{item}</li>) 
    //key is a required unique identifier it is used by react to assign elements
      //it is part of the react pre-compile process and is not rendered within the component instance or the DOM
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {/* The items are displayed within a ul element */}
          {items}
        </ul>
      </div>
    );
  }
};
ReactDOM.render(
    //<DisplayToggle />,
    //<TestAnd />,
    //<CheckUserAge />,
    //<GameOfChance />,
    //<GateKeeper />,
    <MyToDoList />,
    document.getElementById("render-div")
);