class Scooter{
  // scooter code here

  static nextSerial = 1;
  #user;
  #serial;

  constructor(station) {
    this.station = station;
    this.#user = null;
    this.#serial = Scooter.nextSerial;
    this.nextSerial += 1;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user){
    if(this.charge > 20 && !this.isBroken){
      this.#user = user;
      this.station = null;
    }else{
      let message = (this.isBroken) ? "scooter needs repair" : "scooter needs charge";
      throw new Error(message);
    }
  }

  dock(station){
    this.station = station;
    this.#user = null;
  }


  getUser(){
    return this.#user;
  }

  setUser(user){
    this.#user = user;
  }

  getSerial(){
    return this.#serial;
  }

}
module.exports = Scooter
