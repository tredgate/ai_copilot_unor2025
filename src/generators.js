const crypto = require("crypto");
const excel = require("exceljs");

/**
 * Class for generating random passwords.
 */
class PasswordGenerator {
  /**
   * Generates a random password of a specified length.
   *
   * @param {number} length - The length of the password to generate.
   * @returns {string} A randomly generated password consisting of uppercase letters, lowercase letters, and digits.
   */
  static generateRandomPassword(length) {
    let password = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    const randomValues = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
      password += characters.charAt(randomValues[i] % charactersLength);
    }
    return password;
  }
}

/**
 * Class for generating random numbers.
 */
class NumberGenerator {
  /**
   * Generates a random number between the specified min and max values.
   *
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} A randomly generated number between min and max.
   */
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

/**
 * Class for generating random names.
 */
class NameGenerator {
  static femaleNames = [
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

  static maleNames = [
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

  /**
   * Generates a random name based on the specified gender.
   *
   * @param {string} [gender] - Optional parameter specifying gender ('male' or 'female'). If not provided, a random gender is selected.
   * @returns {string} A randomly generated name.
   */
  static generateRandomName(gender) {
    if (!gender) {
      gender = Math.random() < 0.5 ? "male" : "female";
    }

    gender = gender.toLowerCase();

    if (gender === "female") {
      return this.femaleNames[
        Math.floor(Math.random() * this.femaleNames.length)
      ];
    } else {
      return this.maleNames[Math.floor(Math.random() * this.maleNames.length)];
    }
  }
}

/**
 * Class for creating Excel files with test cases.
 */
class ExcelFileCreator {
  /**
   * Creates an Excel file with the provided test cases.
   *
   * @param {Array<Object>} testCases - An array of objects representing test cases.
   */
  static createExcelFile(testCases) {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Test Cases");

    worksheet.columns = [
      { header: "Test Case ID", key: "testCaseId", width: 10 },
      { header: "Name", key: "name", width: 32 },
      { header: "Steps", key: "steps", width: 50 },
      { header: "Expected", key: "expected", width: 50 },
      { header: "Priority", key: "priority", width: 10 },
      { header: "Preconditions", key: "preconditions", width: 50 },
      { header: "Status", key: "status", width: 10 },
    ];

    testCases.forEach((testCase) => {
      worksheet.addRow(testCase);
    });

    workbook.xlsx.writeFile("test-cases.xlsx");
  }
}

// Example usage
const password = PasswordGenerator.generateRandomPassword(12);
console.log(password);

const number = NumberGenerator.generateRandomNumber(5, 10);
console.log(number);

const randomName = NameGenerator.generateRandomName();
console.log(randomName);
const femaleName = NameGenerator.generateRandomName("female");
console.log(femaleName);
const maleName = NameGenerator.generateRandomName("male");
console.log(maleName);
