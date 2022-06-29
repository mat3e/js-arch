import { filterByProjectUserName } from '../project.service';

describe('filterByProjectUserName', () => {
  it('should return empty array when empty input', () => {
    // when
    const result = filterByProjectUserName('anything', []);

    // then
    expect(result).toEqual([]);
  });

  it('should limit to results containing a phrase in a name', () => {
    // given
    const phrase = 'oo';

    // when
    const result = filterByProjectUserName(phrase, TWO_DOUBLE_O_NAMES_OUT_OF_FIVE);

    // then
    expect(result.length).toBe(2);
    // and
    expect(result.map(({name}) => name)).toEqual(expect.arrayContaining(['Cool dude', 'oooo']));
  });

  it('should be case insensitive', () => {
    // given
    const phrase = 'oO';

    // when
    const result = filterByProjectUserName(phrase, TWO_DOUBLE_O_NAMES_OUT_OF_FIVE);

    // then
    expect(result.length).toBe(2);
    // and
    expect(result.map(({name}) => name)).toEqual(expect.arrayContaining(['Cool dude', 'oooo']));
  });
});

const TWO_DOUBLE_O_NAMES_OUT_OF_FIVE = [{
  id: 1,
  name: 'Test',
  image: ''
}, {
  id: 2,
  name: 'Cool dude',
  image: ''
}, {
  id: 10,
  name: 'oooo',
  image: ''
}, {
  id: 100,
  name: 'Another one',
  image: ''
}, {
  id: 1000,
  name: 'Whom',
  image: ''
}];
