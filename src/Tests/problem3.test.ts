import { generateId } from "../Problems/Problem3";

describe("generateId", () => {
  test("generates IDs with the correct format", () => {
    const idPattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

    for (let i = 0; i < 10; i++) {
      const id = generateId();
      expect(id).toMatch(idPattern);
    }
  });
});