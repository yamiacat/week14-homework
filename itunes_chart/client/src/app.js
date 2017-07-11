import React from 'react';
import ReactDOM from 'react-dom';
import Chart from "./containers/Chart.jsx";

window.addEventListener('load', function () {
  ReactDOM.render(
    <Chart>Hello Awful</Chart>,
    document.getElementById('app')
  );
});
