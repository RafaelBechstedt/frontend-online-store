import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { image, title, price, quantity } = this.props;
    return (
      <div>
        <img src={ image } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
  quantity: propTypes.number,
}.isRequired;
