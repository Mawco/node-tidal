import { describe } from 'mocha';
import { expect } from 'chai';

import { Tidal } from '../src';

describe('search', () => {
  let tidal: Tidal;

  before(() => {
    tidal = new Tidal({
      token: process.env.TIDAL_TOKEN!,
      countryCode: 'BE',
    });
  });

  it('should return an array of 25 track objects', async () => {
    const tracks = await tidal.search('adele', 'tracks', 25);

    expect(tracks).to.be.an('array').and.to.have.lengthOf(25);

    expect(tracks[0]).to.be.an('object').and.to.have.property('trackNumber');
  });
});
