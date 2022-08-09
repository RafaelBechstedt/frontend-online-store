import React, { Component } from 'react';
import CartItem from '../components/CartItem';

export default class ShoppingCart extends Component {
  state = {
    shopping: null,
    elementsId: [],
  }

  componentDidMount() {
    const recoveryCart = JSON.parse(localStorage.getItem('cart'));
    const elementsId = recoveryCart && [...new Set(recoveryCart.map(({ id }) => id))];
    console.log(elementsId);
    this.setState({ shopping: recoveryCart, elementsId });
  }

  render() {
    const { shopping, elementsId } = this.state;
    return (
      <div>
        { !shopping
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            elementsId.map((elemento) => {
              const products = shopping.filter(({ id }) => elemento === id);
              const [{ title, id, price, thumbnail }] = products;
              return (
                <CartItem
                  key={ id }
                  title={ title }
                  price={ price }
                  image={ thumbnail }
                  quantity={ products.length }
                />
              );
            }))}
      </div>
    );
  }
}
