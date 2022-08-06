import React, { Component } from 'react';
import propTypes from 'prop-types';

class Products extends Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div data-testid="product">
        <img src={ image } alt={ name } />
        <h2>{ name }</h2>
        <p>{ price }</p>
      </div>
    );
  }
}

Products.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default Products;
