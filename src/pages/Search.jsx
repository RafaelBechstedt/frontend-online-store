import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';

export default class Search extends Component {
  constructor() {
    super();

    this.inputChange = this.inputChange.bind(this);
    this.buttonSearch = this.buttonSearch.bind(this);
    this.addInCart = this.addInCart.bind(this);

    this.state = {
      search: '',
      products: [],
      category: '',
    };
  }

  inputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      if (name === 'category') this.buttonSearch();
    });
  }

  addInCart({ target }) {
    const { products } = this.state;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const trueCart = (cart) || [];
    const product = products.find((pro) => pro.id === target.id);
    trueCart.push(product);
    localStorage.setItem('cart', JSON.stringify(trueCart));
  }

  async buttonSearch() {
    const { search, category } = this.state;
    const data = await getProductsFromCategoryAndQuery(category, search);
    // console.log(data.results);
    this.setState({ products: data.results });
  }

  render() {
    const { search, products } = this.state;
    return (
      <div>
        <div>
          <input
            name="search"
            data-testid="query-input"
            type="text"
            value={ search }
            onInput={ this.inputChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.buttonSearch }
          >
            Pesquisar

          </button>
        </div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">
          Carrinho de compra
        </Link>
        <Categories
          inputChange={ this.inputChange }
        />
        <section>
          { products.length !== 0
            ? (
              products.map((product) => {
                const { price, title, thumbnail, id } = product;
                return (
                  <div key={ id }>
                    <Products
                      name={ title }
                      price={ price }
                      image={ thumbnail }
                      id={ id }
                    />
                    <button
                      type="button"
                      id={ id }
                      data-testid="product-add-to-cart"
                      onClick={ this.addInCart }
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                );
              })) : <p>Nenhum produto foi encontrado</p> }
        </section>
      </div>
    );
  }
}
// texto;
