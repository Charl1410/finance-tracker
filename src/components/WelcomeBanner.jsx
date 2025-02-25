import React, { Component } from 'react'
import "./WelcomeBanner.scss"
export class WelcomeBanner extends Component {
  render() {
    return (
      <div className="welcome-banner-container">
        <h1><span className="wave">👋</span> Hello Charlotte</h1>
        <p>Welcome back to your finance tracker</p>
        <p>Here's your financial update for the month</p>
      </div>
    );
  }
}

export default WelcomeBanner