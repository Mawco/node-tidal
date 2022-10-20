import { describe } from 'mocha';
import { expect } from 'chai';

import { Tidal } from '../src';

describe('artists', () => {
  let tidal: Tidal;

  before(() => {
    tidal = new Tidal({
      token: process.env.TIDAL_TOKEN!,
      countryCode: 'BE',
    });
  });

  describe('getArtist', () => {
    it('should return a specified artist', async () => {
      const artist = await tidal.artists.getArtist(3529689);

      expect(artist).to.be.an('object').and.to.have.property('id');
    });
  });

  describe('getArtistBio', () => {
    it('should return the bio of a specified artist', async () => {
      const artistBio = await tidal.artists.getArtistBio(3529689);

      expect(artistBio).to.be.an('object').and.to.have.property('text');
    });
  });

  describe('getArtistMix', () => {
    it('should return a artist mix', async () => {
      const artistMix = await tidal.artists.getArtistMix(3529689);

      expect(artistMix).to.be.an('object').and.to.have.property('id');
    });
  });

  describe('getArtistTopTracks', () => {
    it('should return a artist top tracks', async () => {
      const artistTopTracks = await tidal.artists.getArtistTopTracks(3529689, 2);

      expect(artistTopTracks).to.be.an('array').and.to.have.lengthOf(2);
    });
  });

  describe('getArtistVideos', () => {
    it('should return videos of a specified artist', async () => {
      const artistVideos = await tidal.artists.getArtistVideos(3529689);

      // Need subscription to test this
      expect(artistVideos).to.be.an('array');
    });
  });

  describe('getArtistAlbums', () => {
    it('should return albums from a specified artist', async () => {
      const artistAlbums = await tidal.artists.getArtistAlbums(3529689, 2);

      expect(artistAlbums).to.be.an('array').and.to.have.lengthOf(2);
    });
  });
});
