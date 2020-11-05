import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios"


type WordPairMeaning = {
  word: string
  meaning: string
}

function App() {

  const [corMeaning, setcorMeaning] = useState("Dictionairy")
  const [arrWords, setarrWord] = useState<WordPairMeaning[]>([])


  useEffect(() => {
    fetchData()
  }, [])


  async function fetchData() {
    const response = await Axios
      .get("https://raw.githubusercontent.com/Bartan89/gre-eng-test-helper/master/src/data/gre-sorted-cleaned.json")

    setarrWord(response.data)
  }



  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setcorMeaning(event.target.value)
  }



  return (
    <div className="App">


      <h1>Dictionairy:</h1>
      {arrWords.length !== 0 ? (
        <select onChange={handleChange} name="cars" id="cars">
          {arrWords.map((wpm: WordPairMeaning) => {
            return <option value={wpm.meaning}>{wpm.word}</option>
          })}
        </select>
      ) : "loading"}
      <p>{corMeaning}</p>
      <br />
    </div>
  );
}

export default App;
