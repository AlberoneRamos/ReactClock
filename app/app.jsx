var React = require('react');
var ReactDOM = require('react-dom');

var objetoUm = {
    nome: "Henrique",
    cidade: "BH"
}

var objetoDois = {
    idade: 17,
    ...objetoUm
}

console.log(objetoDois);

ReactDOM.render(
    <h1>Panela de pressão, mané</h1>,
    document.getElementById('app')
);