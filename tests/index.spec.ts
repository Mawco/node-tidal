import { describe } from 'mocha';
import { expect } from 'chai';

import { Tidal } from '../src';

describe('Tidal', () => {
  it('should be instantiated with custom options', async () => {
    const tidal = new Tidal({
      token: process.env.TIDAL_TOKEN!,
      countryCode: 'BE',
    });

    expect(tidal.countryCode).to.equal('BE');
  });
});
