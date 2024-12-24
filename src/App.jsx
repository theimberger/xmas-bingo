import { useState, useEffect } from 'react'
import './App.css'

const options = [
  'Snowball fight',
  'Santa Claus',
  'Santa is real',
  'Dead realtive',
  'Wrong S.O.',
  'Ice skating',
  'Small town v big city',
  'They go to a bakery',
  'Cookie baking / decorating',
  'Royalty',
  'Nosy neighbor / parents',
  'Sudden snowfall',
  'Caroling',
  'Decorating the tree',
  "Someone doesn't like xmas",
  'Office romance',
  'Small town Xmas festival',
  'Almost kiss',
  'Old flame',
  'Xmas ghost',
  'Fake dating',
  'Someone says they look in love',
  'Save a family business',
  'Fixing the family home',
  'Xmas fundraiser',
  'C-List celebrity',
  'Rediscovers love of xmas',
  'Just got back home',
  'Xmas song rock cover',
  'Festive montage',
  'Toxic ex returns',
  'Enemies to lovers',
  'Drama from misunderstanding',
  'Cute older couple',
  'Main character is a workaholic',
  'Character guesses they did',
  'Quirky character gives advice',
  'Kid ships couple',
  'Child wise beyond years',
  "Actor you can't place",
  'Identity reveal',
]

const Main = () => {
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState([])


  const getRandomList = () => {
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
    randomItems[12] = 'They kiss (Free Space)'
    setItems(randomItems)
    setSelectedItems(['They kiss (Free Space)'])
  }

  useEffect(() => {
    getRandomList()
  }, ['They kiss (Free Space)'])

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
      <div className='reroll' onClick={() => getRandomList()}>Reroll card</div>
    </main>
  )
}

export default Main;
