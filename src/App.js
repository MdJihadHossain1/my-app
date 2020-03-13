import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks= ['Rajjak', 'Josim', 'Alomgir', 'Salman', 'Bappy', 'Shubo']
    const products= [
      {name: 'Photoshop', price: '$90.99'},
      {name: 'illustrator', price: '$60.99'},
      {name: 'PDF Reader', price: '$6.99'}
    ]
 
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        
        </ul>
        {
        products.map(product =><Product product= {product}></Product> )
        }
    
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick= { () => setCount(count+1)}>increase</button>
    </div>
  )
}

function Product(props){

  const productStyle= {
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }

  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px',
    width: '700px'
  }
  return (
  <div style= {personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
