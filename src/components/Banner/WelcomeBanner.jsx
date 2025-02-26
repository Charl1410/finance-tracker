import React, { Component } from 'react'
import "./WelcomeBanner.scss"
import BalanceCard from './BalanceCard'

export class WelcomeBanner extends Component {
  render() {
    return (
      <div className="welcome-banner-container">
        <div>
          <h1>
            <span className="wave">👋</span> Hello Charlotte
          </h1>
          <p>Welcome back to your finance tracker</p>
          <p>Here's your financial update for the month</p>
        </div>
        <div className="info-cards">
          <BalanceCard />
        </div>
      </div>
    );
  }
}

export default WelcomeBanner