import {db} from "../firebase";
import React, {useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import Confetti from 'react-dom-confetti';

function Modal({ isOpen, onClose }) {
    const [showConfetti, setShowConfetti] = useState(false);

    // Configuration for the confetti effect
    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 1500,
        stagger: 3,
        width: "15px",
        height: "15px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    // Function to show confetti and close modal
    const closeModalWithConfetti = () => {
        setShowConfetti(false);
        onClose();
    };

    // When modal opens, show confetti
    React.useEffect(() => {
        if (isOpen) {
            setShowConfetti(true);
        }
    }, [isOpen]);

    return (
        <>
            {isOpen ? (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex justify-center items-center px-4">
                    <div className="bg-white p-8 rounded-3xl shadow-md max-w-md relative">
                        <Confetti active={showConfetti} config={config} />
                        <p className="text-xl font-semibold mb-4">Thank you for Joining the Waitlist!</p>
                        <p className="text-gray-700 mb-4">We are very much excited to bring our dream <b>Wealthify</b> to you.</p>
                        <button onClick={closeModalWithConfetti} className="px-4 py-2 bg-zinc-700 text-white rounded-xl">
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

function Front() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [emailID, setEmailID] = useState("");

    const addEmailID = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "WealthifyWaitlist"), {
                EmailID: emailID,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className="flex items-center justify-center m-6 py-20">
            <div className="mx-auto max-w-2xl">
                <h2 className="text-6xl text-center pb-12 font-bold tracking-tight text-black sm:text-8xl">Wealthify</h2>
                <br/>
                <img className="h-full w-full pb-12 rounded-full"
                     src="https://framerusercontent.com/images/3RHWZYahinLCkAECel7RC62Tv8.jpg"
                     alt="image description"/>
                <br/>
                <h2 className="text-lg text-center text-[#888888] sm:text-xl">Your Smart Wealth Advisor!</h2>
                <br/>


                <form action="" id="waitlistDB1" className="mx-auto max-w-sm" onSubmit={addEmailID}>
                    <div className="mb-4">
                        <input type="email" id="email1" name="email" required
                               value={emailID} onChange={(e) => setEmailID(e.target.value)}
                               className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-200"
                               placeholder="name@email.com"/>
                        <h2 className="text-base text-center text-[#888888] sm:text-sm">We'll never share your info with anyone.</h2>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="px-4 py-2 bg-zinc-700 text-white rounded-xl"
                                onClick={openModal}>
                            Join the Waitlist!
                        </button>
                        <Modal isOpen={isOpen} onClose={closeModal}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Front;