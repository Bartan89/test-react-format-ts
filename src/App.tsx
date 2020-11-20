import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Dictionairy from './components/Dictionairy';
import Header from './components/Header';

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



  return (
    <div>

      <Dictionairy />
    </div>
  );
}

export default App;



//local state
// > useState() (the hook)
// pass down local state (we did that with: sum)
// lift state up (we have not done that)

//global state manager
