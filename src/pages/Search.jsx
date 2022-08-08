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
      console.log(name, value);
    });
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
                  <Products
                    key={ id }
                    name={ title }
                    price={ price }
                    image={ thumbnail }
                  />
                );
              })) : <p>Nenhum produto foi encontrado</p> }
        </section>
      </div>
    );
  }
}
// texto;
