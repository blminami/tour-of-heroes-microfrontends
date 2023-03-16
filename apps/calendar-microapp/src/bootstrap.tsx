import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
class MainApp extends React.Component {
  override render() {
    return <App />;
  }
}
class Mfe4Element extends HTMLElement {
  connectedCallback() {
    window.React = React;
    ReactDOM.render(<MainApp />, this);
  }
}
customElements.define('calendar-element', Mfe4Element);