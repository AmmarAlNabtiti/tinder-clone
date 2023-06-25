// STYLES
import './App.css';
// FIREBASE
import { collection, getDocs } from "firebase/firestore";
import database from './data/firebase';
// COMPONENTS
import { Header, TinderCards, Chats, SwipeBtn, ChatScreen } from './components/index';
// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// REACT
import { useEffect, useState } from 'react';
// MUI
import Container from '@mui/material/Container';

function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "people"));

        const fetchedPeople = querySnapshot.docs.map((doc) => doc.data());
        setPeople(fetchedPeople);
      } catch (error) {
        console.error("Error retrieving people:", error);
      }
    };

    fetchPeople();
  }, []);

  console.log("App");
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxWidth="md">

          <Routes>
            <Route index element={<>
              <Header backIcon={false} />
              <TinderCards people={people} />
              <SwipeBtn />
            </>} />
            <Route path="/chats" element={
              <>
                <Header backIcon={true} />
                <Chats />
              </>} />
            <Route path="Chats/:person" element={
              <>
                <Header backIcon={true} />
                <ChatScreen />
              </>} />

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
