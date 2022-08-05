import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import MusicForm from "./Components/MusicForm/MusicForm";
import NavBar from "./Components/NavBar/NavBar";
import { Container } from "react-bootstrap";
function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get(
      "https://cors-everywhere-me.herokuapp.com/mltest-env.eba-up25azi7.us-east-1.elasticbeanstalk.com/api/music/"
    );
    setSongs(response.data);
  }

  async function AddNewMusic(newSong) {
    let response = await axios.post(
      "https://cors-everywhere-me.herokuapp.com/mltest-env.eba-up25azi7.us-east-1.elasticbeanstalk.com/api/music/",
      newSong
    );
    if (response.status === 201) {
      getAllSongs();
    }
  }

  return (
    <>
      <NavBar />
      <MusicTable songs={songs} />
      <Container>
        <MusicForm addNewMusic={AddNewMusic} />
      </Container>
    </>
  );
}

export default App;
