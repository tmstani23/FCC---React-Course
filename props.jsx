//Example 1: Defining and passing props:
const CurrentDate = (props) => {
    return (
      <div>
        <p>Here the date is populated by accessing the props object: </p>
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
          <p>Example 5: Defining and passing props:</p>
          <h3>What date is it?</h3>
          { /* setting the name date allows the Date object to be used within the CurrentDate component
                This is assigning the props object an attribute of date */ }
          <CurrentDate date={Date()} />
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
            <p>Example 4: Passing arrays as props and using array functions within component</p>
            <h2>To Do Lists</h2>
            <h3>Today</h3>
            { /* Here the arrays are passed as props */ }
            <List tasks = { ["run", "swim"] } />
            <h3>Tomorrow</h3>
            <List tasks = { ["code", "hike", "contemplate"] } />
            { /* Each component will run one after another and the results will be displayed sequentially
                This works even when rendering the same component with the same prop attribute names */ }
        </div>
        );
    }
};
//Example 3: Setting Default Props
const Items = (props) => {
    return <p>Current Quantity of Items in Cart: {props.quantity}</p>
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
        return (
          <div>
            <p>Example 3: Setting Default Props</p>
            <h3>Default quantity:</h3>
            <Items/>
            <h3>Quantity after update:</h3>
            <Items quantity = {10} />
          </div>
          )
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
        <p>Example 2: Rendering props in stateful child components using this.</p>
        <h3>Reset Password</h3>
        <p>We've generated a new temporary password for you.</p>
        <p>Please reset this password from your account settings ASAP.</p>
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
       <div className = "props-component">
       <h1>Props Usage Examples:</h1>
       <p>Example 1: Pass a callback method as props to a child Component</p>
        { /* The handleChange method is passed as props to the GetInput component giving it access */ }
        <GetInput input = {this.state.inputValue} handleChange = {this.handleChange}/>
        <RenderInput input = {this.state.inputValue}/>
        { /* Render input takes the updated inputValue from state and renders it to the ui */ }
        <ResetPassword />
        <ShoppingCart />
        <ToDo />
        <Calendar />
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
    <MyApp />,
    document.getElementById('props-div')
);