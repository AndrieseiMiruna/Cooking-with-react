import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }
  render() {
    console.log('Render counter');
    //Daca deschizi consola vei vedea ca prima data se randeaza aplicatia si apoi componenta dinauntru. De fiecare data cand apasam pe buton se va modifica starea componentei si implicit doar aceea va fi reapelata (cu ajutorul setState) plus copii ei
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span> {this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              {' '}
              +{' '}
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
}
