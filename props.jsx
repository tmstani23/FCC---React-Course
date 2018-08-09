//Example 1: Defining and passing props:
const CurrentDate = (props) => {
    return (
      <div>
        { /* Here the date is populated by accessing the props object*/ }
        <p>The current date is: {props.date} </p>
      </div>
    );
  };
  
class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* setting the name date allows the Date object to be used within the CurrentDate component
                This is assigning the props object an attribute of date */ }
          <CurrentDate date={Date()} />
          { /* change code above this line */ }
        </div>
      );
    }
};
//Example 2: Passing arrays as props and using array functions within component
const List = (props) => {
    { /* The props array can be accessed and array functions run inline with dot notation */ }
    return <p>{props.tasks.join(', ')}</p>
};
  
class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>To Do Lists</h1>
            <h2>Today</h2>
            { /* Here the arrays are passed as props */ }
            <List tasks = { ["run", "swim"] } />
            <h2>Tomorrow</h2>
            <List tasks = { ["code", "hike", "contemplate"] } />
            { /* Each component will run one after another and the results will be displayed sequentially
                This works even when rendering the same component with the same prop attribute names */ }
        </div>
        );
    }
};
//Example 3: Default props
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
//Here the default props are set to the Itms component
Items.defaultProps = {
quantity: 0
}
  
class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        { /* here the default props are overwritten */ }
        return <Items quantity = {10} />
        { /* values enclosed in curly braces are interpreted by JSX as Javascript */ }
    }
};
//Example 4: Rendering props in stateful child components using this.
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Here the props are called */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* The props call happens in the parent component and this references there not here in the child */ }
        </div>
    );
  }
};
  
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        { /* The ReturnTempPassword component is passed props to the stateful child component */ }
        <ReturnTempPassword tempPassword = "myTempPass"/>
        { /* When the props are rendered the props call comes from here*/ }
      </div>
    );
  }
};

//Example 5: Pass a callback method as props to a child Component
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }
        <GetInput input = {this.state.inputValue} handleChange = {this.handleChange}/>
        <RenderInput input = {this.state.inputValue}/>
        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


ReactDOM.render(
    //<Calendar />,
    //<ToDo />,
    //<ShoppingCart />,
    //<ResetPassword />,
    <MyApp />,
    document.getElementById('props-div')
);