import React, { Component } from 'react';
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDishID: null
    }
  }

  onDishSelect(dishID) {
    this.setState({ selectedDishID: dishID });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Menu dishes={this.state.dishes} onClick={(dishID) => { this.onDishSelect(dishID) }} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishID)[0]} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;