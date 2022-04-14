let backpack = []

backpack.push('Hatcher', 'Water')
backpack.unshift('Mac & Cheese')
backpack.push('Sleeping bag')

let belt = backpack.splice(1, 1)

backpack.pop()
backpack.push('Sleeping bag')

let backpack2 = backpack.slice(1, 3)

backpack2.push('blanket', 'knife')

// for(let i = 0; i < backpack.length; i++){console.log(backpack[i])}

// for(let i = 0; i < backpack.length; i++){console.log(backpack2[i])}

// for(let i = 0; i < 2; i++){console.log(backpack[i])
// console.log(backpack2[i])}

