//Constant vars can be JSX code and rendered use parenthesis:
const jsx = (
<h1>Hello JSX!</h1>
);

//Self closing tags work when the tag contains no content:
const selfClosingTag = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
);

//Basic stateless component in React:
const StatelessComponent = function() {
    return (
      <div> 
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
        <h1>Hello React!</h1>
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
          <h1>I am the parent</h1>
          <ChildComponent />
        </div>
      );
    }
  };


ReactDOM.render(
    //jsx,
    //selfClosingTag,
    //<StatelessComponent />, //Components must be closed by self closing tags
    //<StateComponent />,
    <ParentComponent />,
    document.getElementById('basic')
);