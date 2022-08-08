import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    shopping: null,
    elementsId: [],
  }

  componentDidMount() {
    const recoveryCart = JSON.parse(localStorage.getItem('cart'));
    const elementsId = [...new Set(recoveryCart.map(({ id }) => id))];
    console.log(elementsId);
    this.setState({ shopping: recoveryCart, elementsId });
  }

  render() {
    const { shopping, elementsId } = this.state;
    const items = shopping && (shopping
      .filter(({ id }) => elementsId.some((value) => value === id)));
    return (
      <div>
        { !shopping
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            items.map((product) => {
              const { id, name } = product;
              const repeat = shopping.filter(({ id: objId }) => objId === id).length;
              return (
                <div key={ id }>
                  <p>{ repeat }</p>
                  <p>{ name }</p>
                </div>
              );
            })
          )}
      </div>
    );
  }
}

/* console.log(new Set(recoveryCart.id));
const unicos = [...new Set(recoveryCart.id)];
console.log(unicos); */
