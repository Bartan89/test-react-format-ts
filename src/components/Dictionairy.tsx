import React, { useEffect, useState } from 'react';
import Axios from "axios"
import Header from './Header';



export default function Dictionairy(props: any) {


  // function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   setcorMeaning(event.target.value)
  // }]

  const [sum, setSum] = useState(1)

  function handleSumClick() {
    setSum(sum + 10)
  }

  <button onClick={handleSumClick}>click me</button>

  return (
    <div>

      <Header />

      {/* {arrWords.length !== 0 ? (
        <select onChange={handleChange} name="cars" id="cars">
          {arrWords.map((wpm: WordPairMeaning, i) => {
            return <option key={i} value={wpm.meaning}>{wpm.word}</option>
          })}
        </select>
      ) : "loading"}
      <p>{corMeaning}</p> */}


      <p>{sum}</p>
      <br />
    </div>
  )
}







