import React, { Component } from 'react'
import "./WelcomeBanner.scss"
import BalanceCard from '../Banner/BannerCards/BalanceCard'
import TotalMonthSpend from '../Banner/BannerCards/TotalMonthSpend'

export class WelcomeBanner extends Component {
  render() {
    return (
      <div className="welcome-banner-container">
        <div className="welcome-banner-text">
          <h1>
            <span className="wave">👋</span> Hello Charlotte
          </h1>
          <p>Welcome back to your finance tracker</p>
          <p>Here's your financial update for the month</p>
        </div>
        <div className="info-cards">
          <BalanceCard />
          <TotalMonthSpend />
          <BalanceCard />
        </div>
      </div>
    );
  }
}

export default WelcomeBanner