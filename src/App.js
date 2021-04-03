import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['nur','sani','hossain'];
  const Products = [
    {name:'photoshop',price:'$36.32'},
    {name:'illustrator',price:'$6.32'}
  
  ]
  // var person = {
  //   name: "Dr. Mahfuz",
  //   job: "Singer"
  // }
  // var style= {
  //   color: 'red'
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <h1 style={style}>My Heading: {person.name + " " + person.job}</h1> */}
        <p>I am react person</p>
        <Counter></Counter>
        {/* <Product name={Products[0].name} price={Products[0].price}></Product> */}
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* {
            products.map(product => <li>{product.name}</li>)
          } */}

        </ul>
        <Product product ={Products[0]}></Product>
        <Product product ={Products[1]}></Product>
        {/* <Person name="Nur Hossain" job="student"></Person>
        <Person name="sani" job="bekar"></Person> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
  function Counter(){
    const [count,setCount] = useState(10);
    return(
      <div>
        <h1>Count:{count} </h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    )

  }
  function Product(props){
    const style={
      border:'2px solid gray',
      borderRadius:'5px',
      backgroundColor:'lightgray',
      height:'200px',
      width:'200px',
      float:'left',
      margin:'20px'
    }
    return(
      <div style={style}>
        <h3>{props.product.name}</h3>
        <h5>{props.product.price}</h5>
        <button>Buy now</button>
      </div>
    )

  }
  // function Person(props){
  //     return(
  //      <div style={{border:'2px solid red',margin:'10px'}}>
  //       <h1>Name:{props.name} </h1>
  //       <h3>Job:{props.job} </h3>
  //      </div>
  //     )

  // }
}

export default App;
