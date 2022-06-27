//01 - Batmobile

class Car {
  constructor (brand, speed) {
    this.brand = brand
    this.speed = speed
  }

  accelerate = (faster) => {
    this.speed = this.speed + faster
  }

  brake = (slower) => {
    this.speed = this.speed - slower
  }

  describe = () => {
    console.log(`${this.brand} is running at ${this.speed} km/h`)
  }
}

const ford = new Car ("Ford", 0)
console.log(ford)

ford.accelerate(50)
console.log(ford)

ford.brake(25)
console.log(ford)

const renault = new Car ("Renault", 0)
console.log(renault)

renault.accelerate(135)
console.log(renault)

renault.brake(45)
console.log(renault)




//02 - TV

// class TV {
//   constructor (brand, channel, volume) {
//     this.channel = 1
//     this.volume = 50
//   }

//   volumeUp(num) {
//     this.volume = this.volume + volumeUp
//   }

//   volumeDown(num) {
//     this.volume = this.volume - this.volumeDown
//   }