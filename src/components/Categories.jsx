import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    categories: [],
  }

  componentDidMount = async () => {
    const categories = await getCategories();
    this.setState({ categories });
    console.log(categories);
  }

  render() {
    const { categories } = this.state;
    return (
      <form>
        { categories.map((category) => (
          <label key={ category.id } htmlFor={ category.id } data-testid="category">
            <input
              type="radio"
              id={ category.id }
              name="category"
              value={ category.name }
            />
            { category.name }
          </label>
        )) }
      </form>
    );
  }
}
