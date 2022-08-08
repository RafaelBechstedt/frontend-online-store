import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  state = {
    product: {},
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const request = await fetch(url);
    const response = await request.json();
    this.setState({ product: response });
  }

  render() {
    const { product: { title, price, thumbnail, attributes } } = this.state;
    console.log(attributes);
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <h3 data-testid="product-detail-price">{price}</h3>
        <img src={ thumbnail } data-testid="product-detail-image" alt={ title } />
        <section>
          <ul>
            { attributes && attributes.map((atributo) => (
              <li key={ atributo.id }>{atributo.name}</li>
            ))}
          </ul>
        </section>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

Product.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }),
}.isRequired;
