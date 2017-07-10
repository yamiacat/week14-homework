import React from 'react';
import ReactDOM from 'react-dom';
import List from "./components/List.jsx";

window.addEventListener('load', function () {
  ReactDOM.render(
    <List/>,
    document.getElementById('app')
  );
});
