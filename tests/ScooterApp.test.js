const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

let app = new ScooterApp();
// ScooterApp tests here

describe('user tests', () => {
    test('user is a class', () => {
      expect(user).toBeInstanceOf(Object);
    })

    // register user

    test("can register new user", () => {
        app.registerUser("abc", "123", 19);
        expect(app.registeredUsers.length).toBe(1);
    })

    test("user under 18 throws error", () => {
        expect(app.registerUser("abc", "123", 17)).toThrow("too young to register");
    })

    test("user already registered throws error", () => {
        expect(app.registerUser("abc", "123", 17)).toThrow("already registered");
    })

    // log in

    // log out

    // rent scooter

    // dock scooter

});