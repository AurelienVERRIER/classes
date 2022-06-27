//01 - Batmobile

// class Car {
//   constructor (brand, speed) {
//     this.brand = brand
//     this.speed = speed
//   }

//   accelerate = (faster) => {
//     this.speed = this.speed + faster
//   }

//   brake = (slower) => {
//     this.speed = this.speed - slower
//   }

//   describe = () => {
//     console.log(`${this.brand} is running at ${this.speed} km/h`)
//   }
// }

// const ford = new Car ("Ford", 0)
// console.log(ford)

// ford.accelerate(50)
// console.log(ford)

// ford.brake(25)
// console.log(ford)

// const renault = new Car ("Renault", 0)
// console.log(renault)

// renault.accelerate(135)
// console.log(renault)

// renault.brake(45)
// console.log(renault)




//02 - TV

class TV {
  constructor (brand, channel, volume) {
    this.brand = brand
    this.channel = 1
    this.volume = 50
  }

  volumeUp = (up) => {
    if (this.volume + up < 100){
    this.volume = this.volume + up
    } else {
    this.volume = 100
    }
  }

  volumeDown = (down) => {
    if (this.volume - down > 0){
    this.volume = this.volume - down
    } else {
      this.volume = 0
    }
  }

  channelUp = (up) => {
    if (this.chanel + up >50){
      this.chanel = this.chanel
    } else{
      this.channel = this.channel + up
    }
  }

  channelDown = (down) => {
    if (this.channel - down < 1){
      this.channel = this.channel
    } else {
      this.channel = this.channel - down
    }
  }

  describe = () =>{
    console.log(`Your ${this.brand} is on channel ${this.channel} and the volume level is ${this.volume}`)
  }

}

panasonic = new TV ("Panasonic", this.channel , this.volume)
console.log(panasonic)

panasonic.volumeUp(52)
console.log(panasonic)

panasonic.volumeDown(30)
console.log(panasonic)

panasonic.channelUp(33)
console.log(panasonic)

panasonic.channelDown(53)
console.log(panasonic)
