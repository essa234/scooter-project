const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here

  constructor() {
    this.stations = {
      "london" : [],
      "paris" : [],
      "tokyo" : [],
      "berlin" : []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age){
    //if (newuser in this.registeredUsers && age >= 18){
    if((!this.registeredUsers.hasOwnProperty(username)) && age >= 18){
      let newuser = new User(username, password, age);
      this.registeredUsers.push(newuser);
      console.log("user has been registered");
      return newuser
    }else{
      let message = (age < 18) ? "too young to register" : "already registered";
      throw new Error(message);
    }
    
  }

  loginUser(username, password){
    //if(username in Object.keys(this.registeredUsers)){
    if(this.registeredUsers.hasOwnProperty(username)){
      this.registeredUsers[username].login(password);

    }else{
      throw new Error("Username or password is incorrect")
    }
  }

  logoutUser(username){
    //if(username in Object.keys(this.registeredUsers)){
    if(this.registeredUsers.hasOwnProperty(username)){
      this.registeredUsers[username].logout();
      console.log("user is logged out");
    }else{
      throw new Error("no such user is logged in")
    }
  }

  createScooter(station){
    if(station in this.stations){
      let new_scooter = new Scooter(station);
    new_scooter.station = station;
    this.stations[station].push(new_scooter);
    }else{
      throw new Error("no such station")
    }


  }

  dockScooter(scooter, station){
    if(this.stations.hasOwnProperty(station)){
      if(scooter in this.stations[station]){
        scooter.station = null;
        scooter.setUser(null);
        this.stations[station].push(scooter);
        console.log("scooter is docked");
      }else{
        throw new Error("scooter already at station");
      }
    }
    else{
      throw new Error("no such station")
    }
  }

  rentScooter(scooter, user){
    if(scooter.getUser() !== null){
      //remove scooter from that station
      scooter.rent(user);
    }else{
      throw new Error("scooter already rented")
    }
  }

  print(){
    console.log(this.registeredUsers);
    for(let station of Object.keys(this.stations)){
      console.log(station);
      console.log(Object.values(station));
    }
  }
}


module.exports = ScooterApp
