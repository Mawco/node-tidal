import { describe } from 'mocha';
import { expect } from 'chai';

import { Tidal } from '../src/index.js'

describe('Tidal', () => {
  it('should be instantiated with custom options', async () => {
    const tidal = new Tidal({
      token: process.env.TIDAL_TOKEN!,
      countryCode: 'BE',
    });

    expect(tidal).to.be.an('object');
    expect(tidal.countryCode).to.equal('BE');
  });
});
