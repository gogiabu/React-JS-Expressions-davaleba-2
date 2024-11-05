import React, { Fragment } from 'react';
import ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      number : 0
    }
    
  }
  increment2() {
    this.setState({
      number : this.state.number + 2
    })
  }

  render() {
    return(
      <Fragment>
    
       <button  onClick={() => this.increment2()}>  ok </button>
       Nunber : {this.state.number}

      </Fragment>
    )
  }

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
