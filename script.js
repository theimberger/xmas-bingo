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

const generateRandomList = () => {
  const randomItems = []
  for (let i = 0; i < 24; i++) {
    const randomIndex = Math.floor(Math.random() * options.length)
    if (randomItems.includes(options[randomIndex])) {
      i--
      continue
    }
    randomItems.push(options[randomIndex])
  }
  randomItems.push(randomItems[12])
  randomItems[12] = 'They kiss (Free Space)'
  return randomItems
}

function toggleSelected(index) {
  const item = document.querySelector(`.grid__item[key='${index}']`)
  item.classList.toggle('selected')
}

let items = []

function generateListHtml() {
  items = generateRandomList()
  const selectedItems = ['They kiss (Free Space)']
  const existingMainElement = document.querySelector('main')
  const main = existingMainElement || document.createElement('main')
  main.innerHTML = `
    <h1>Xmas Movie Bingo</h1>
    <div class='grid'>
      ${items.map((item, i) => `
        <div
          key=${i}
          class='grid__item ${selectedItems.includes(item) ? 'selected' : ''}'
          onclick='toggleSelected(${i})'
        >
          ${item}
        </div>
      `).join('')}
    </div>
    <div class='reroll' onclick='generateListHtml()'>Reroll card</div>
  `
  document.body.appendChild(main)
}

window.onload = () => {
  generateListHtml()
}