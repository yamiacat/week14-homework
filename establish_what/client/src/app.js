import React from 'react';
import ReactDOM from 'react-dom';
import Controller from './containers/Controller.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    <Controller></Controller>,
    document.getElementById('app')
  );
});
