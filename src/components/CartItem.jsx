import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { image, title, price, quantity,
      id, incrementItem, reduceItem, removeItem } = this.props;
    return (
      <div>
        <img src={ image } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price }</p>
        <div>
          <button
            onClick={ incrementItem }
            name={ id }
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          <button
            onClick={ reduceItem }
            name={ id }
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <br />
          <br />
          <button
            onClick={ removeItem }
            name={ id }
            type="button"
            data-testid="remove-product"
          >
            Remover
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
  quantity: propTypes.number,
  incrementItem: propTypes.func,
  reduceItem: propTypes.func,
  id: propTypes.string,
  removeItem: propTypes.func,
}.isRequired;
