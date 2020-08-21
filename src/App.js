import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Josim', 'Alomgir', 'Bappa' ]
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
       <h3>I am a React Person</h3>
       <Counter></Counter>
       <Users></Users>
       <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product =><li>{product.name}</li>)
         }
       </ul>
        <Person name="Rubel" nayika="Moushumi"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="BappaRaz" nayika="Cheka"></Person>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = ;

  return(
    <div>
     <h1>Count: {count}</h1>
     <button onClick={() => setCount(count -1)}>Decrease</button>
     <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px', 
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
  <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  const personStyle={
    border: "2px solid gold",
    margin: "10px",
    padding: "5px"
  }
   return (
     <div style = {personStyle}>
       <h2>Nayok: {props.name} </h2>
   <h4>Hero of {props.nayika}</h4>
     </div>
   )
}

export default App;
