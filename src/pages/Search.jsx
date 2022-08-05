import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">
          Carrinho de compra
        </Link>
      </div>
    );
  }
}
