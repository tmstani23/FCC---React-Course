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



ReactDOM.render(
    <Counter />, 
    document.getElementById("challenge-div")
);