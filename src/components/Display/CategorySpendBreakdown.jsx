import React, { Component } from 'react'
import "./scss/CategorySpendBreakdown.scss"

export class CategorySpendBreakdown extends Component {
  render() {
    return (
      <div className="category-spend-breakdown">
        <div className="header">
          <h1>Category Spend Breakdown</h1>
        </div>
        <div className="content">
            <div className="category-wheel"></div>
            <div className="category-code">
                <ul>
                    <li>Food</li>
                    <li>Transport</li>
                    <li>Entertainment</li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default CategorySpendBreakdown