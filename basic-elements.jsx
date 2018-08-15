//Constant vars can be JSX code and rendered use parenthesis:
const jsx = (
  <div>
    <h3>Hello JSX!</h3>
  </div>
);

//Self closing tags work when the tag contains no content:
const selfClosingTag = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>

      {jsx}
    </div>
);

//Basic stateless component in React:
const StatelessComponent = function() {
    return (
      <div> 
        This is a stateless functional component
        {selfClosingTag}
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
        <h3>Hello React!</h3>
        <StatelessComponent />
      </div>
      )
    }
  };

//Parent child relationship between components:
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
        <StateComponent />
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
      <div style = {{color: "red", fontSize: 16, margin: 50}}>Big Red
        <ParentComponent />
      </div>
      
    );
  }
};
  

ReactDOM.render(
    //jsx,
    //selfClosingTag,
    //<StatelessComponent />, //Components must be closed by self closing tags
    //<StateComponent />,
    //<ParentComponent />,
    <Colorful />,
    document.getElementById('basic')
);