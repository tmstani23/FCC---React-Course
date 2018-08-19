//Challenge 1: Executing if/else Javascript logic within the render function
class DisplayToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.getDisplay = this.getDisplay.bind(this);
  }
  getDisplay() {
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
          <p>Challenge 7: Executing if/else Javascript logic within the render function.</p>
          <button onClick={this.getDisplay}>Toggle Display</button>
          <h3>UI Displayed!</h3>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>Challenge 7: Executing if/else Javascript logic within the render function.</p>
          <button onClick={this.getDisplay}>Toggle Display</button>
        </div>
      );
    } 
  }
};
//Challenge 2: Using && and || operator within render to conditionally render different ui
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
          <p>Challenge 6: Using && and || operator within render to conditionally render different ui.</p>
          <button onClick={this.toggleDisplay}>Click for UI</button>
          <h3>Displayed!</h3>
          
      </div> 
      ||
      this.state.display === false && 
      <div>
          <p>Challenge 6: Using && and || operator within render to conditionally render different ui.</p>
          <button onClick={this.toggleDisplay}>Click for UI</button>
      </div>
    )
  }
};

//Challenge 3: Using embedded ternary operators within JSX to render different ui.
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
        <p>Challenge 5: Using embedded ternary operators within JSX to render different ui.</p>
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
        <TestAnd />
        <DisplayToggle />
      </div>
    );
  }
};
//Challenge 4: Using props and conditionals to decide which ui to render
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  //If the props counter state hasn't changed don't re-render this component
  //This is so when the parent component renders from other updates this components state won't continue to trigger 
  //Win/Loss text was being auto fired by updates to the input box in the parent component
  shouldComponentUpdate(nextProps, nextState) {
    // if the condition is true update else don't update
    return (nextProps.counterProps > this.props.counterProps) ? true : false
  }
  
  render() {
    return (
      <p>
        {
        //If the fiftyfifty expression from props is true generate win statement else loss statement
        this.props.fiftyFifty === true ? "You win!" : "You lose!"
        }
      </p>
    )
  };
};
class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
    this.setState({
      //the counter state is increased by one each time the play button is clicked
      counter: this.state.counter += 1
    });
  }

  render() {
    let expression = Math.random() < 0.5; //expression generates a random # between 0 and 1 and checks if it's less than 0.5
    return (
      <div>
        <p>Challenge 4: Using props and conditionals to decide which ui to render.</p>
        <h3>The Game of Fifty/Fifty:</h3>
        <button onClick={this.buttonClick}>Play Again</button>
        { /*Render the Results component and pass the expression as props*/ }
        <Results fiftyFifty = {expression} counterProps = {this.state.counter}/>
        { /* Render a paragraph that displays the turn based on the state's counter attribute */ }
        <p>{'Turn: ' + this.state.counter}</p>
        <CheckUserAge />
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
        <p>Challenge 3: Rendering inline styles based on conditionals.</p>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          //Here the input element's style is set to the declared inputStyle variable
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
          <GameOfChance />
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
        <p>Challenge 2: Using map to dynamically render user input.</p>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h3>My "To Do" List:</h3>
        <ul>
          {/* The items are displayed within a ul element */}
          {items}
        </ul>
        <GateKeeper />
      </div>
    );
  }
};

//Challenge 7: Using filter to render only certain ui from an array
class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    //Return a new array that includes only objects with user status online === true
    const usersOnline = this.state.users.filter( user => user.online ) 
    //Map the new array of online users creating an li with the username for each user to a new array
    const renderOnline = usersOnline.map( user => <li key={user.username}>{user.username}</li>)
      return (
       <div className = "render-component">
        <h1>Render Examples:</h1>
        <p>Challenge 1: Using filter to render only certain ui from an array.</p>
        <h3>Current Online Users:</h3>
        <ul>
          {/* The final mapped array is rendered within a ul element */}
          {renderOnline}
        </ul>
        <MyToDoList />
       </div>
    );
  }
};
ReactDOM.render(
    <UsersComponent />,
    document.getElementById("render-div")
);