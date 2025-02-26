import React, { useRef, useState, useEffect } from "react";
import { addDoc, collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import firestore from "../../firebase"; // Import the Firestore instance
import "../Forms/scss/YourPayments.scss"
import { AddPayment } from "./AddPayment";


export default function YourPayments() {
    const paymentRef = useRef();
    const ref = collection(firestore, "payments");
    const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false);
    const [payments, setPayments] = useState([]); //new array to store payments

    // Add useEffect to fetch payments this only runs once when the component mounts
    useEffect(() => {
      //unsubscribe is a function that stops the subscription to the payments collection
      const unsubscribe = onSnapshot(ref, (snapshot) => {
        //grabbing the data from the snapshot
        const paymentsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
        setPayments(paymentsData);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);

    //when we click on the add payment button this sets isAddPaymentOpen to true which redereds the AddPayment component
    const openAddPayment = () => {
      setIsAddPaymentOpen(true);
    }

    //passed into the onClose prop of the AddPayment component
    const closeAddPayment = () => {
      setIsAddPaymentOpen(false);
    }

    // Add this new function to handle deletion
    const handleDelete = async (paymentId) => {
        try {
            await deleteDoc(doc(firestore, "payments", paymentId));
        } catch (error) {
            console.error("Error deleting payment:", error);
        }
    };

    // Add this helper function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        
        // Add ordinal suffix to day
        const suffix = ["th", "st", "nd", "rd"];
        const v = day % 100;
        const ordinal = suffix[(v - 20) % 10] || suffix[v] || suffix[0];
        
        return `${day}${ordinal} ${month}`;
    };

    return (
      <div className="your-payments">
        <form>
          <div className="payment-header">
            <h1>Your payments</h1>
            <a onClick={openAddPayment}>Add payment</a>
          </div>
        </form>

        {isAddPaymentOpen && (
          <div className="modal-overlay">
            <AddPayment onClose={closeAddPayment}/>
          </div>
          )
        }

        <table className="payment-list">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="payment-item">
                <td className="cost">£{payment.amount}</td>
                <td className="date">{formatDate(payment.date)}</td>
                <td className="description">{payment.description}</td>
                <td className="category">{payment.category}</td>
                <td>
                    <button 
                        onClick={() => handleDelete(payment.id)}
                        className="delete-btn"
                    >
                        Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ); 
}


