import { useState, useEffect } from 'react'
import './App.css'

const options = [
  'Home Alone',
  'Elf',
  'Die Hard',
  'The Grinch',
  'It\'s a Wonderful Life',
  'The Polar Express',
  'A Christmas Story',
  'The Nightmare Before Christmas',
  'Love Actually',
  'Home Alone 2',
  'The Santa Clause',
  'National Lampoon\'s Christmas Vacation',
  'The Muppet Christmas Carol',
  'Miracle on 34th Street',
  'The Holiday',
  'Scrooged',
  'White Christmas',
  'The Family Stone',
  'Jingle All the Way',
  'The Snowman',
  'Arthur Christmas',
  'Bad Santa',
  'Gremlins',
  'The Shop Around the Corner',
  'The Best',
]

const Main = () => {
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    // set a list of 24 random movies
    const randomItems = []
    for (let i = 0; i < 24; i++) {
      const randomIndex = Math.floor(Math.random() * options.length)
      if (randomItems.includes(options[randomIndex])) {
        i--
        continue
      }
      randomItems.push(options[randomIndex])
    }
    // add the free space
    randomItems.push(randomItems[12])
    randomItems[12] = 'Free Space'
    setItems(randomItems)
  }, [])

  return (
    <main>
      <h1>Xmas Movie Bingo</h1>
      <div className='grid'>
        { items.map((item, i) => (
          <div
            key={i}
            className={`grid__item ${selectedItems.includes(item) ? 'selected' : ''}`}
            onClick={() => {
              if (selectedItems.includes(item)) {
                setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item))
              } else {
                setSelectedItems([...selectedItems, item])
              }
            }}
          >
            {item}
            </div>
        ))}

      </div>
    </main>
  )
}

export default Main;
