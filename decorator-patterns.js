// easy decorators
class MacBook {
  constructor() {
    this.price = 1000
    this.display =  11.6
  }
}

const macbook = new MacBook()

macbook.addMemory = function() {
  this.price += 100
}

console.log(macbook.price)
macbook.addMemory()
console.log(macbook.price)

// patternns-decorator

class MacBook2 {
  price() {
    return 1000
  }
}

const memory = mac => {
  const price = mac.price()
  mac.price = function() {
    return price + 100
  }
}

const macbook2 = new MacBook2()

console.log(macbook2.price())
memory(macbook2)
console.log(macbook2.price())

