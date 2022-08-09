import React, { Component } from 'react';
import CartItem from '../components/CartItem';

export default class ShoppingCart extends Component {
  state = {
    shopping: [],
    elementsId: [],
  }

  componentDidMount() {
    const recoveryCart = JSON.parse(localStorage.getItem('cart'));
    const elementsId = recoveryCart && [...new Set(recoveryCart.map(({ id }) => id))];
    console.log(elementsId);
    this.setState({ shopping: recoveryCart || [], elementsId });
  }

  incrementItem = ({ target }) => {
    const { shopping } = this.state;
    const item = shopping.find(({ id }) => target.name === id);
    shopping.push(item);
    this.setState({ shopping });
    localStorage.setItem('cart', JSON.stringify(shopping));
  };

  reduceItem = ({ target }) => {
    const { shopping } = this.state;
    const validation = shopping.filter(({ id }) => id === target.name).length;
    if (validation !== 1) {
      const item = shopping.find(({ id }) => target.name === id);
      const index = shopping.indexOf(item);
      const products = shopping.filter((_, ind) => ind !== index);
      this.setState({ shopping: products });
      localStorage.setItem('cart', JSON.stringify(products));
    }
  };

  removeItem = ({ target }) => {
    const { shopping, elementsId } = this.state;
    const products = shopping.filter(({ id }) => id !== target.name);
    const ids = elementsId.filter((id) => id !== target.name);
    localStorage.setItem('cart', JSON.stringify(products));
    this.setState({
      shopping: products,
      elementsId: ids,
    });
  };

  render() {
    const { shopping, elementsId } = this.state;
    return (
      <div>
        { (!shopping.length)
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
                  incrementItem={ this.incrementItem }
                  id={ id }
                  reduceItem={ this.reduceItem }
                  removeItem={ this.removeItem }
                />
              );
            }))}
      </div>
    );
  }
}
