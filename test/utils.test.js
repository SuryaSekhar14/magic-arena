import { getInputStr, getInputPositiveInt, rollDice } from "../utils.js";
import readline from 'readline';

describe("getInputStr", () => {
    it("should return the input string", async () => {
        const prompt = "Enter your name: ";
        const expected = "John Doe";
        const mockInput = jest.fn().mockReturnValueOnce(expected);
        const readlineInterface = {
            question: jest.fn().mockImplementation((_, callback) => {
                callback(mockInput());
            }),
            close: jest.fn(),
        };
        jest.spyOn(readline, "createInterface").mockReturnValueOnce(readlineInterface);

        const result = await getInputStr(prompt);

        expect(result).toBe(expected);
        expect(readline.createInterface).toHaveBeenCalledWith({
            input: process.stdin,
            output: process.stdout,
        });
        expect(readlineInterface.question).toHaveBeenCalledWith(prompt, expect.any(Function));
        expect(readlineInterface.close).toHaveBeenCalled();
    });
});

describe("getInputPositiveInt", () => {
    it("should prompt again if negative integer input is provided", async () => {
        const prompt = "Enter a positive integer: ";
        const mockInputs = ["-1", "42"]; // Ensure inputs are strings
        const readlineInterface = {
            question: jest.fn().mockImplementation((_, callback) => {
                callback(mockInputs.shift());
            }),
            close: jest.fn(),
        };
        jest.spyOn(readline, "createInterface").mockReturnValueOnce(readlineInterface);

        const result = await getInputPositiveInt(prompt);

        expect(result).toBe(42);
        expect(readlineInterface.question).toHaveBeenCalledTimes(2);
        expect(readlineInterface.close).toHaveBeenCalled();
    });

    it("should prompt again if non-integer input is provided", async () => {
        const prompt = "Enter a positive integer: ";
        const mockInputs = ["abc", "42"]; // Ensure inputs are strings
        const readlineInterface = {
            question: jest.fn().mockImplementation((_, callback) => {
                callback(mockInputs.shift());
            }),
            close: jest.fn(),
        };
        jest.spyOn(readline, "createInterface").mockReturnValueOnce(readlineInterface);

        const result = await getInputPositiveInt(prompt);

        expect(result).toBe(42);
        expect(readlineInterface.question).toHaveBeenCalledTimes(2);
        expect(readlineInterface.close).toHaveBeenCalled();
    });
});

describe("rollDice", () => {
    it("should return a number between 1 and 6", () => {
        const result = rollDice();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(6);
    });
});