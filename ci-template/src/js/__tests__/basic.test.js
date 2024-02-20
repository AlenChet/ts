import ErrorRepository from '../basic';

test('ErrorRepository class', () => {
    const errorRepository = new ErrorRepository();

    errorRepository.addError(404, 'Not Found');
    errorRepository.addError(500, 'Internal Server Error');

    expect(errorRepository.translate(404)).toBe('Not Found');
    expect(errorRepository.translate(500)).toBe('Internal Server Error');
    expect(errorRepository.translate(200)).toBe('Unknown error');

    errorRepository.deleteError(404);
    expect(errorRepository.translate(404)).toBe('Unknown error');

    errorRepository.clearErrors();
    expect(errorRepository.translate(500)).toBe('Unknown error');
});
