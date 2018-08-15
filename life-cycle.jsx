//Example 1: testing componentWillMount
//componentWillMount is called before the render when a component is being mounted to the DOM
class WillMount extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // change code below this line
        console.log("Component Will Mount is called before render.")
        // change code above this line
    }
    render() {
        return (
            <div> 
                <p>Example 5 (see console): testing componentWillMount.  <br/>
                componentWillMount is called before the render when a component is being mounted to the DOM</p>
            </div>
        )
    }
};

  //Example 2: componentDidMount
  //ComponentDidMount is great for api calls where data is returned
  //Any updates to state within this method will be automatically updated when the data returns
class DidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        activeUsers: null
        };
    }
    componentDidMount() {
        //The state is automatically updated after 3.5 seconds
        setTimeout( () => {
        this.setState({
            activeUsers: 1273
        });
        }, 10000);
    }
    render() {
        return (
        <div>
            <p>Example 4 (see console): componentDidMount. Any updates to state within this method <br/>
                will be automatically updated 10 seconds after the component mounts</p>
            <h3>Active Users: { this.state.activeUsers }</h3>
        </div>
        );
    }
};

//Example 3: Event Listeners with componentDidMount and componentWillUnmount
class EventComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality. 
    //React provides a synthetic event system which wraps the native event system present in browsers. 
    //This means that the synthetic event system behaves exactly the same regardless of the user's browser - 
    //even if the native events may behave differently between different browsers.
    // The event listener is added once the component has mounted
    componentDidMount() {
        //first argument is the event and second argument is the callback function to handle the event
        document.addEventListener("keydown", this.handleKeyPress);
    }
    //Use componentWillUnmount to cleanup components before they are removed from the DOM
    //remove event listeners when the component unmounts to prevent bugs
    componentWillUnmount() {
        //use the same arguments as the addEventListener to remove the correct one.
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    // Here the state is updated with a notification
    handleEnter() {
        this.setState({
        message: this.state.message + 'You pressed the enter key! '
        });
    }
    //if enter is pressed the handleEnter method is called
    handleKeyPress(event) {
        if (event.keyCode === 13) {
        this.handleEnter();
        }
    }
    render() {
        return (
        <div>
            <p>Example 3: Event Listeners with componentDidMount and componentWillUnmount</p>
            <h3>Press Enter Key!</h3>
            <h3>{this.state.message}</h3>
        </div>
        );
    }
};

//Example 4: Manage Updating with Life-cycle methods
class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    //This method is called right before the state is updated
    componentWillUpdate() {
        console.log('Component is about to update...');
    }
    //The method is called whenever a component is receiving props.
    //This method accepts the next props as an argument
    //It is used for comparing current props against the next props after an update
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }
    //This method is called right after the state is updated
    componentDidUpdate() {
        console.log("Dialog Component has updated.")
    }
    render() {
        return <h3>{this.props.message}</h3>
    }
    };
//This component renders a message and updates the message state on button click.
class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'First Message'
        };
        this.changeMessage = this.changeMessage.bind(this);
    }
    //changeMessage is called when the button is clicked and updates the message state
    changeMessage() {
        this.setState({
        message: 'Second Message'
        });
    }
    render() {
        return (
        <div>
            <p>Example 2: This component renders a message and updates the message state on button click (see console).</p>
            <button onClick={this.changeMessage}>Update</button>
            <Dialog message={this.state.message}/>
        </div>
        );
    }
};

//Example 5: Optimizing re-renders with componentShouldUpdate
class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    //the component will only re-render if this component returns true
    //The method can check next state/props to see if there are any changes or not.
    //This allows for managing un-needed renders and makes the program more efficient
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        // If nextProps is even return true
        if(nextProps.value % 2 == 0){
            return true;
        }
        else {
            return false;
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('Receiving new props...');
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return (
            <div>
                <h3>Notification happens on even numbers...</h3>
                <h3>{this.props.value}</h3>
            </div>
        )   
    }
};  
class NumberCruncher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState({
        value: this.state.value + 1
        });
    }
    render() {
        return (
        <div className = "life-component">
            <p>Example 1: Optimizing re-renders with componentShouldUpdate (see console)</p>
            <button onClick={this.addValue}>Add</button>
            <OnlyEvens value={this.state.value}/>
            <Controller/>
            <EventComponent/>
            <DidMount/>
            <WillMount/>
        </div>
        );
    }
};

ReactDOM.render(
    //<WillMount />,
    //<DidMount />,
    //<EventComponent />,
    //<Controller />,
    <NumberCruncher />, 
    document.getElementById("life-div")
); 

