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

ReactDOM.render(<DisplayToggle />,
    document.getElementById("render-div")
)