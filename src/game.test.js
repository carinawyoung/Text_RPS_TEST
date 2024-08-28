// tell Jest which functions to import for testing
const { getUserChoice, getComputerChoice, determineWinner } = require('./game');

describe('getUserChoice', () => {
    it('should return the user input when it is valid', () => {
        // This test ensures that valid inputs return the same value
        expect(getUserChoice('rock')).toBe('rock');
        expect(getUserChoice('paper')).toBe('paper');
        expect(getUserChoice('scissors')).toBe('scissors');    
    });

    it('should handle case differences', () => {
        // This test checks if the function handles inputs with a different cases
        expect(getUserChoice('RoCk')).toBe('rock');
        expect(getUserChoice('PAPER')).toBe('paper');
    });

    it('should return error message for invalid input', () => {
        // This test makes sure the function handles invalid inputs correctly
        expect(getUserChoice('lizard')).toBe('Did not choose rock, paper, or scissors');
        expect(getUserChoice('')).toBe('Did not choose rock, paper, or scissors');
        expect(getUserChoice('123')).toBe('Did not choose rock, paper, or scissors');
    });
});