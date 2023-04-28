const User = require('../src/User')


let user = new User("abc", "123", 18);
// User tests here

describe('user tests', () => {
    test('user is a class', () => {
      expect(user).toBeInstanceOf(Object);
    })


  

    // test username


    test("username is correct", () => {
        expect(user.username).toBe("abc");
    });


    // test password

    test("password is correct", () => {
        expect(user.getPassword()).toBe("123");
    });

    // test age

    test("age is correct", () => {
        expect(user.age).toBe(18);
    });

    // test login

    test("login is correct", () => {
        user.login("123")
        expect(user.loggedIn).toBe(true);
    });

    test("login throws error when password is wrong", () => {
        expect(user.login("234")).toThrow("incorrect password");
    });

    // test logout

    test("logout is correct", () => {
        user.logout();
        expect(user.loggedIn).toBe(false);
    });

})