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


describe('getComputerChoice', () => {
    it('should return one of the choices: rock, paper, or scissors', () => {
        const choices = ['rock', 'paper', 'scissors'];
        const result = getComputerChoice();
        expect(choices).toContain(result); // Check if the result is one of the valid options
    });
});


describe('determineWinner', () => {
    it('should declare a tie when both choices are the same', () => {
        // Tests for a tied game
        expect(determineWinner('rock', 'rock')).toBe('Game was a tie!');
        expect(determineWinner('paper', 'paper')).toBe('Game was a tie!');
    });

    it('should declare the computer as the winner when applicable', () => {
        // Tests scenarios where the computer should win
        expect(determineWinner('rock', 'paper')).toBe('Computer won!');
        expect(determineWinner('scissors', 'rock')).toBe('Computer won!');
    });

    it('should declare the user as the winner when applicable', () => {
        // Tests scenarios where the user should win
        expect(determineWinner('rock', 'scissors')).toBe('You won!');
        expect(determineWinner('paper', 'rock')).toBe('You won!');
    });
}); 