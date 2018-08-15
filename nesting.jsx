//Example: Compose React Components
//JSX elements, stateless functional components, and ES6 class components within other components can be rendered.

//NonCitrus, Citrus and Vegetables return JSX ui to be rendered in a state component(Fruits, TyoesOfFood) 
const NonCitrus = () => {
    return (
      <div>
          <h3>Non Citrus:</h3>
          <ul>
              <li>Apples</li>
              <li>Blueberries</li>
              <li>Strawberries</li>
              <li>Bananas</li>
          </ul>
      </div>
    )
}
const Citrus = () => {
    return (
        <div>
            <h3>Citrus:</h3>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Orange</li>
                <li>Grapefruit</li>
            </ul>
        </div>
    )
}
const Vegetables = () => {
    return (
        <div>
            <h2>Vegetables:</h2>
            <ul>
                <li>Lettuce</li>
                <li>Tomatoes</li>
                <li>Olives</li>
                <li>Asparagus</li>
            </ul>
        </div>
    )
}
//Fruits is a child component of TypesOfFood
    //and a parent of NonCitrus and Citrus
class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
            <NonCitrus /> {/* Here NonCitrus and Citrus are nested child components of Fruits*/}
            <Citrus />
        </div>
      );
    }
};
//Types of food is a stateful class component
    //It is able to nest both stateful (Fruits) and nonstateful (Vegetables) components
class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div className = "nesting-component">
          <h3>Types of Food:</h3>
          { /* Fruits renders two non-stateless child components. */ }
          <Fruits />
          { /* Vegetables is also a non stateless component */ }
          <Vegetables />
        </div>
      );
    }
};


ReactDOM.render(
    <TypesOfFood />,
    document.getElementById('intermediate')
);