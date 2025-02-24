import React, { useRef } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import firestore from "../firebase"  // Import the Firestore instance

export default function Home() {
    const messageRef = useRef()
    const ref = collection(firestore, "messages") //if messages is not present it will create a new collection

    const handleSave = async (e) => {
        e.preventDefault()
        
        //create data object inside handleSave
        let data = {
            message: messageRef.current.value
        }
        
        //save data to firestore
        try {
            await addDoc(ref, data)
            console.log("Document successfully added!")
            messageRef.current.value = '' // Clear the input after successful submission
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={handleSave}>
            <label>Enter message</label>
            <input type="text" ref={messageRef} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
