import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Characters } from "./pages/Characters/Characters";
import { Header } from "./components/Header/Header";
import { Location } from "./pages/Location/Location";
import { ProfileContext } from "./context/Profile/Profile";
import { CharactersDetail } from "./pages/Characters/CharactersDetail/CharactersDetail";

function App() {
  const profileBase = {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  const [profile, setProfile] = useState(profileBase);


  return (
    <div className="App">
      <ProfileContext.Provider value={{profile, setProfile}}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/characters">
                <Route index element={<Characters />} />
                <Route path=":id" element={<CharactersDetail />} />
              </Route>              
              <Route path="locations" element={<Location />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
