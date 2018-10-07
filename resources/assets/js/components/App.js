import React from 'react';

import AppDispatcher from '../dispatcher.js';
import AppStore from '../stores/AppStore.js';

import {
  LOAD_TODOS,
  MAIN_ID
} from '../constants.js';

export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      exampleMessage: ExampleStore.getExampleMessage()
    }
  }

  _onChange() {
    this.setState({
      exampleMessage: ExampleStore.getExampleMessage()
    })
  }

  componentDidMount() {
    ExampleStore.on(MAIN_ID, this._onChange.bind(this));

    AppDispatcher.dispatch({
      action: LOAD_TODOS,
      id: 1,
      emitOn: [{
        store: AppStore,
        componentIds: [MAIN_ID]
      }]
    })
  }

  componentWillUnmount() {
    ExampleStore.removeListener(MAIN_ID, this._onChange.bind(this));
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
