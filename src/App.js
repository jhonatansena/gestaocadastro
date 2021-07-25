import React, { Component} from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';


const products = [
  {
    name: 'iPad',
    price: 200,

  },
  {
    name: 'iPhone',
    price: 650,
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount(){
    const products = this.getProducts();

    this.setState({ products });
  }
 

  onAdd(name, price) {
    const products = this.getProducts();
    products.push({
      name,
      price
    })
    this.setLocalStorage(name, price)
    this.setState({ products });
    
  }

  setLocalStorage(name, price){
    localStorage.getItem('name', name);
    localStorage.getItem('price', price);
    

  }

  getProducts(){
    return this.state.products;
  }

  render() {
    return (
      < >
        <h1>Gerenciador de Produtos</h1>
        <AddProduct 
          onAdd={this.onAdd}
        /> 
       <h2> Lista de produtos</h2>

        {
          this.state.products.map(product => {
            return (
              <ProductItem 
                key={product.name}
                {...product}
              />
            );
          })
        }
      
    </>
    );
         
     
  }
}




export default App;