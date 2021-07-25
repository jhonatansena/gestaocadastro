import React, { Component} from 'react';

class ProductItem extends Component {

  render() {

        const { name, price } = this.props;
  
            return (
              < >
             
                <span>{name}</span> 
                {` | `}
                <span>{price}</span>
                <br />
              </>
            );
        }
}



export default ProductItem;