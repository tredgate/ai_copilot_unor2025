const { expect } = require("chai");
const { describe, it } = require("mocha");
const { PasswordGenerator, NameGenerator } = require("./generators");

describe("PasswordGenerator", () => {
  describe("generateRandomPassword", () => {
    /**
     * Test case for generating a password of the specified length.
     */
    it("should generate a password of the specified length", () => {
      const length = 12;
      const password = PasswordGenerator.generateRandomPassword(length);
      expect(password).to.have.lengthOf(length);
    });

    /**
     * Test case for generating a password containing only valid characters.
     */
    it("should generate a password containing only valid characters", () => {
      const length = 12;
      const password = PasswordGenerator.generateRandomPassword(length);
      const validCharacters = /^[A-Za-z0-9]+$/;
      expect(password).to.match(validCharacters);
    });

    /**
     * Test case for generating different passwords on subsequent calls.
     */
    it("should generate different passwords on subsequent calls", () => {
      const length = 12;
      const password1 = PasswordGenerator.generateRandomPassword(length);
      const password2 = PasswordGenerator.generateRandomPassword(length);
      expect(password1).to.not.equal(password2);
    });

    /**
     * Test case for handling edge case of length 0.
     */
    it("should handle edge case of length 0", () => {
      const length = 0;
      const password = PasswordGenerator.generateRandomPassword(length);
      expect(password).to.have.lengthOf(length);
    });
  });
});

describe("NameGenerator", () => {
  describe("generateRandomName", () => {
    /**
     * Test case for generating a random name.
     */
    it("should generate a random name", () => {
      const name = NameGenerator.generateRandomName();
      expect(name).to.be.a("string");
    });

    /**
     * Test case for generating a female name when gender is 'female'.
     */
    it("should generate a female name when gender is 'female'", () => {
      const femaleNames = [
        "Emma",
        "Olivia",
        "Ava",
        "Isabella",
        "Sophia",
        "Charlotte",
        "Mia",
        "Amelia",
        "Harper",
        "Evelyn",
      ];
      const name = NameGenerator.generateRandomName("female");
      expect(femaleNames).to.include(name);
    });

    /**
     * Test case for generating a male name when gender is 'male'.
     */
    it("should generate a male name when gender is 'male'", () => {
      const maleNames = [
        "James",
        "Liam",
        "William",
        "Benjamin",
        "Oliver",
        "Elijah",
        "Lucas",
        "Mason",
        "Logan",
        "Alexander",
      ];
      const name = NameGenerator.generateRandomName("male");
      expect(maleNames).to.include(name);
    });

    /**
     * Test case for generating a name regardless of case.
     */
    it("should generate a name regardless of case", () => {
      const femaleNames = [
        "Emma",
        "Olivia",
        "Ava",
        "Isabella",
        "Sophia",
        "Charlotte",
        "Mia",
        "Amelia",
        "Harper",
        "Evelyn",
      ];
      const name = NameGenerator.generateRandomName("Female");
      expect(femaleNames).to.include(name);
    });
  });
});
