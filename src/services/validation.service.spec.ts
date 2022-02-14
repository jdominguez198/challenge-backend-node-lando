import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let validationService: ValidationService;

  beforeEach(() => {
    validationService = new ValidationService();
  });

  it('should return true with valid parameters', () => {
    const validParameters = {
      protocols: [],
      scan: [{ enemies: {}, coordinates: {} }],
    };
    expect(validationService.validate(validParameters)).toBeTruthy();
  });

  it('should return false with missing parameters', () => {
    const missingParameters = null;
    expect(validationService.validate(missingParameters)).toBeFalsy();
  });

  it('should return false with wrong parameters', () => {
    const wrongParameters = {
      wrongParameter1: null,
      wrongParameter2: null,
      wrongParameter3: null,
    };
    expect(validationService.validate(wrongParameters)).toBeFalsy();
  });
});
