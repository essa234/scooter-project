class User {
  // User code here
  #password;
  constructor(username, password, age){
    this.username = username;
    this.#password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password){
    if (this.#password === password){
      this.loggedIn = true; 
    }else{
      throw new Error("incorrect password")
    }
  }

  logout(){
    this.loggedIn = false;
  }

  getPassword(){
    return this.#password;
  }
}

module.exports = User
