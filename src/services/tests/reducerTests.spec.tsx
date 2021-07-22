import currencyReducer from '../reducers/currency';
import { Currencies } from '../../types';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(currencyReducer(undefined, {})).toEqual(
      {
        currency: Currencies.dollars,
        currencyMultiplier: 1
      }
    )
  });
});