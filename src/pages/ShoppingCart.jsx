import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>ShoppingCart
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}