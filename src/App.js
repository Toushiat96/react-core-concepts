import React ,{ useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {
    const products =[
      {name : 'Photoshop', price : '$90.90'},
      {name : 'Illustrator',price : '$100.90'},
      {name : 'PDF Reader',price : '$69.90'},
      {name :'Acrobat', price :'50$'}
    ]
  return (
    <div className="App">
      <header className="App-header">
        <p> I am react person</p>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd =><Product product ={pd}></Product>)
        }
        {/* <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Product product ={products[2]}></Product> */}
      </header>
    </div>
  ); 
}
function Counter(){
  const [count  ,setCount ] = useState(0);
  const handleIncrease = () => setCount(count+1);
  const handledecrease =() =>setCount(count-1);
    // const newCount = count + 1;
    // setCount(newCount);

  return(
  <div>
    <h1>Count: {count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handledecrease}>Decrease</button>
  </div>
  )
}
function Users(){
  const [users , setUsers]=useState([]);
  useEffect(() =>{
     fetch ('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data))
  })
  return(
       <div>
         <h3>Dynamic User:{users.length}</h3>
         <ul>
           {
             users.map(user => <li>{user.name}</li>)
           }
         </ul>
       </div>
  )
}
function Product(props){
  const productStyle ={
    border :'1px solid gray',
    borderRadius :'5px',
    backgroundColor:'lightgray',
    height :'200px',
    width :'200px',
    margin :'2px',
    float :'left'
  }
  const{name,price} =props.product;
  return(
    <div style ={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
   
}

export default App;
