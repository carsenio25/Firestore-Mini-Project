import { useState } from "react";
import "./App.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function App() {
    //const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "answers"), {
            answer: answer,
            upvotes: 1,
        });
        console.log("created doc with id: ", docRef.id);
    };

    return (
        <>
            <h1>What's the deal with airline food?</h1>
            <form onSubmit={handleSubmit}>
                <label>Add an answer:</label>
                <input type="text" onChange={(e) => setAnswer(e.target.value)}></input>
                <br></br>
                {/* <label>Last Name:</label>
                <input type="text" onChange={(e) => setLast(e.target.value)}></input>
                <br></br> */}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;