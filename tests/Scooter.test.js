const Scooter = require('../src/Scooter')
const User = require('../src/User')



let scooter = new Scooter("london");
let user =  new User("abc", "123", 18);
let station = "paris";


//typeof scooter === object
describe('scooter is object', () => {
  test('scooter is a class', () => {
    expect(scooter).toBeInstanceOf(Object);
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  
  test(("rent method works when charge is above 20% and not broken"), () => {
    scooter.charge = 100;
    scooter.isBroken = false;
    scooter.rent(user)
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBe(null);
  });

  test(("rent method dosen't work when charge is above 20% is broken"), () => {
    scooter.charge = 100;
    scooter.isBroken = true;
    expect(scooter.rent(user)).toThrow("scooter needs repair");
  });

  test(("rent method dosen't work when charge below 20%"), () => {
    scooter.charge = 10;
    scooter.isBroken = false;
    expect(scooter.rent(user)).toThrow("scooter needs charge");
  });

  //dock method

  test("station and user are correct when docked", () => {
    scooter.dock(station);
    expect(scooter.user).toBe(null);
    expect(scooter.station).toBe(station);
  })

  //requestRepair method

  //charge method

})
