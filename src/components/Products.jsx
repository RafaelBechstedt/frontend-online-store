import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { name, image, price, id } = this.props;
    return (
      <Link to={ `/Product/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <img src={ image } alt={ name } />
          <h2>{ name }</h2>
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

Products.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
};

export default Products;
