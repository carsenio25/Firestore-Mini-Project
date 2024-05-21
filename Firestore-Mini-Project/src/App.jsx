import { useState, useEffect } from "react";
import "./App.css";
import { db } from "../firebase";
import { addDoc, collection, getDocs, updateDoc, doc } from "firebase/firestore";

function App() {
    const [answer, setAnswer] = useState("");
    const [answers, setAnswers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "answers"), {
                answer: answer,
                upvotes: 1,
            });
            console.log("Created doc with ID: ", docRef.id);
            setAnswer("");
            fetchAnswers();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const fetchAnswers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "answers"));
            let answersArray = [];
            querySnapshot.forEach((doc) => {
                answersArray.push({ id: doc.id, ...doc.data() });
            });
            answersArray.sort((a, b) => b.upvotes - a.upvotes);
            setAnswers(answersArray);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    };

    const upvoteAnswer = async (id, currentUpvotes) => {
        try {
            const answerDocRef = doc(db, "answers", id);
            console.log(`Upvoting doc with ID: ${id}`);
            await updateDoc(answerDocRef, {
                upvotes: currentUpvotes + 1,
            });
            fetchAnswers();
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    useEffect(() => {
        fetchAnswers();
    }, []);

    return (
        <>
            <h1>What's the deal with airline food?</h1>
            <form onSubmit={handleSubmit}>
                <label>Add an answer:</label>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                ></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
            <h2>Answers:</h2>
            <ul>
                {answers.map((answer) => (
                    <li key={answer.id}>
                        {answer.answer} (Upvotes: {answer.upvotes})
                        <button onClick={() => upvoteAnswer(answer.id, answer.upvotes)}>Upvote</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;