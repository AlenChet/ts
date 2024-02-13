import Validator from '../regex';

test('Username validation', () => {
    const validator = new Validator();
    
    expect(validator.validateUsername('user_123')).toBeTruthy();
    expect(validator.validateUsername('user-123')).toBeTruthy();
    expect(validator.validateUsername('user')).toBeTruthy();
    expect(validator.validateUsername('user123')).toBeTruthy();
    expect(validator.validateUsername('123user')).toBeFalsy();
    expect(validator.validateUsername('user----')).toBeFalsy();
    expect(validator.validateUsername('user_')).toBeFalsy();
    expect(validator.validateUsername('user1234')).toBeFalsy();
});