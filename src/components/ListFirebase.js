import React, {useState, useEffect } from 'react';
import firebaseApp from 'Firebase/firebase'

function useWords(){
  const [words, setWords] = useState([])

  useEffect(() => {
    const unsubscribe = 
    firebaseApp
      .firestore()
      .collection('words')
      .onSnapshot((snapshot) => {
        const newWords = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setWords(newWords)
        })
        return () => unsubscribe()
  }, [])

  return words
}

const WordsList = () => {
  const words = useWords()

  return(
    <div>
      <h2>List Word - FIREBASE</h2>
      <ol>
        {words.map((word) =>
        <li key={word.id}>
          <div>
            {word.word} --- {word.word_pl}
          </div>
        </li>
        )}
      </ol>
    </div>
  )
}

export default WordsList;