// mixin
let mixin = {
  greet() {
    console.log(`Hi ${this.name}`)
  },
  goodbye() {
    console.log(`bye ${this.name}`)
  }
}

// class
class User {
  constructor(name){
    this.name = name
  }
}

// we increase the prototype
Object.assign(User.prototype, mixin);


const user = new User('Eduardo Garcia')

user.greet()