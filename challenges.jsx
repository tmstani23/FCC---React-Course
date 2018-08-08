//Challenge 1: This Component increment/decrements a counter in the state when a button is clicked.
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Here this is bound to each method within the Counter Class
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
    // These methods update the state count attribute by + or - 1 and reset back to 0
    increment() {
      this.setState( {count: this.state.count + 1} )
    }
    decrement() {
      this.setState( {count: this.state.count - 1} )
    }
    reset() {
      this.setState( {count: 0} )
    }
    // The buttons are rendered which call each method and the current state is shown as an h1:
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

  //Challenge 2: This component takes a user update and updates the state as the user types
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  //This method takes the event object from the jsx input and updates the component input state
  handleChange(event) {
    this.setState( {input: event.target.value} ) //evemt is an object containing the input information and value is the text
  }
  //The render function runs over and over and is constantly updated by React with the component state.
  render() {
    return (
      <div>
        { /* When the input value changes call the handle change component method */}
        <input onChange = {this.handleChange} value = {this.state.input} />
        { /* The input text value is set to the component's input state*/}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

//Example 3: A form is rendered that takes user input and saves it to state when the submit button is clicked
//Then the input text is rendered
class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  //This method updates the submit state with the text entered from the input state
  handleSubmit(event) {
    this.setState( {submit: this.state.input} );
    event.preventDefault(); //this code prevents default form behavior from refreshing the page
  }
  render() {
    return (
      <div>
        { /* The onsubmit method is called when the user clicks the form submit button */ }
        <form onSubmit={this.handleSubmit}>
          <input onChange = {this.handleChange} value = {this.state.input}/>
          <button type='submit'>Submit!</button>
        </form>
        { /* The component's submit text is rendered in an h1 */ }
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};

ReactDOM.render(
    //<Counter />,
    //<ControlledInput />,
    <BasicForm />, 
    document.getElementById("challenge-div")
);