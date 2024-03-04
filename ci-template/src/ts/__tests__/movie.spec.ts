import Movie from '../movie';

describe('Movie', () => {
  it('should implement Buyable interface', () => {
    const movie = new Movie(1, 'Movie Name', 10, 2022, 'USA', 'Slogan', ['Action'], '2:00');

    expect(movie.id).toBe(1);
    expect(movie.name).toBe('Movie Name');
    expect(movie.price).toBe(10);
  });

  it('should set properties correctly in constructor', () => {
    const movie = new Movie(1, 'Movie Name', 10, 2022, 'USA', 'Slogan', ['Action'], '2:00');

    expect(movie.year).toBe(2022);
    expect(movie.country).toBe('USA');
    expect(movie.slogan).toBe('Slogan');
    expect(movie.genre).toEqual(['Action']);
    expect(movie.duration).toBe('2:00');
  });
});