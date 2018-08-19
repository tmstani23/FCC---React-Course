//Constant vars can be JSX code and rendered use parenthesis:
const jsx = (
  <div>
    <p><strong>Example 5 Returning JSX ui with a constant variable:</strong> </p>
    <h3>Hello JSX!</h3>
  </div>
);

//Self closing tags work when the tag contains no content:
const selfClosingTag = (
    <div>
      <p><strong>Example 4 Self Closing tags:</strong> </p>
      <h3>Welcome to React!</h3> <br />
      <p>Be sure to close all tags!</p>
      </div>
);

//Basic stateless component in React:
const StatelessComponent = function() {
    return (
      <div>
        <p><strong>Example 3 Basic Stateless Component:</strong> </p>
        This is a stateless functional component
        
      </div>
    )
}

// Basic stateful React component
class StateComponent extends React.Component {
  //Should be initialized with constructor and super with props as arguments
  constructor(props) {
    super(props); //Super calls the React.component constructor to extend the prototype React component into StateComponent
  }
  render() {
    return (
      <div>
      <p><strong>Example 2 Basic Stateful Component:</strong> </p>
      <h3>Hello React!</h3>
      
    </div>
    )
  }
};

//Parent child relationship between components:
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  //When ParentComponent is Rendered ChildComponent will also render
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <p><strong>Example: Parent child relationship between components:</strong> </p>
          <h3>I am the parent</h3>
          <ChildComponent />
        </div>
      );
    }
  };

//Inline style Example
class Colorful extends React.Component {
  render() {
    return (
      
      //inline styles must be set within an object
      <div className = "basic-component">
        <h1>Basic Element Examples:</h1>
        <p><strong>Example 1: Inline Styles:</strong></p>
        <h3 style = {{color: "grey"}}>Inline Style Changed Text Color</h3>
        <ParentComponent />
        <StateComponent />
        <StatelessComponent />
        {selfClosingTag}
        {jsx}
  </div>
      
    );
  }
};
  

ReactDOM.render(
    <Colorful />,
    
    document.getElementById('basic')
);