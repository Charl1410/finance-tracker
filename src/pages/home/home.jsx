import React, { useRef } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import firestore from "../../firebase"  // Import the Firestore instance
import "./home.scss"
import WelcomeBanner from '../../components/Banner/WelcomeBanner'
import YourPayments from '../../components/Forms/YourPayments'
import CategorySpendBreakdown from '../../components/Display/CategorySpendBreakdown'

export default function Home() {
  return (
    <div className="home">
      <WelcomeBanner />
      <div className="home-content">
        <YourPayments />
        <CategorySpendBreakdown />
      </div>
    </div>
  );
}
