import { parseLength } from './parseLength';

// Test cases for parseLength function
describe('parseLength', () => {
  const testCases = [
    { input: "7", expected: 84 }, // 7ft -> 7 * 12 = 84 inches
    { input: "7'", expected: 84 }, // 7ft -> 7 * 12 = 84 inches
    { input: "7\"", expected: 7 }, // 7in
    { input: "7 ", expected: 84 }, // 7ft -> 7 * 12 = 84 inches
    { input: "7 6", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7'6", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7'6\"", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7' 6\"", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7' 6", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7-6", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7'-6\"", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7' - 6\"", expected: 90 }, // 7ft 6in -> 7 * 12 + 6 = 90 inches
    { input: "7.5", expected: 90 }, // 7.5 feet -> 7.5 * 12 = 90 inches
    { input: "7.5'", expected: 90 }, // 7.5 feet -> 7.5 * 12 = 90 inches
    { input: '7.5"', expected: 7.5 }, // 7.5 inches
    { input: "7.5 6.25", expected: 96.25 }, // 7.5 feet + 6.25 inches -> 90 + 6.25 = 96.25 inches
    { input: "7' 6.25", expected: 90.25 }, // 7 feet + 6.25 inches -> 84 + 6.25 = 90.25 inches
    { input: "7.25' 6.5\"", expected: 93.5 }, // 7.25 feet + 6.5 inches -> 87 + 6.5 = 93.5 inches
    { input: "7.25' 6.\"", expected: 93 }, // 7.25 feet + 6.5 inches -> 87 + 6.5 = 93.5 inches
  ];

  testCases.forEach(({ input, expected }) => {
    test(`Input: "${input}" should be parsed as ${expected} inches`, () => {
      expect(parseLength(input)).toBe(expected);
    });
  });
});
