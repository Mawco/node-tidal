import { describe } from 'mocha';
import { expect } from 'chai';

import { Tidal } from '../src/index.js';

describe('album', () => {
  let tidal: Tidal;

  before(() => {
    tidal = new Tidal({
      token: process.env.TIDAL_TOKEN!,
      countryCode: 'BE',
    });
  });

  describe('getAlbum', () => {
    it('should return the correct album object', async () => {
      const album = await tidal.albums.getAlbum(240189283);

      expect(album).to.be.an('object').and.to.include({ id: 240189283 });
    });
  });

  describe('getAlbumTracks', () => {
    it('should return an array with the correct number of track objects', async () => {
      const tracks = await tidal.albums.getAlbumTracks(240189283);

      expect(tracks).to.be.an('array').to.have.lengthOf(16);
      expect(tracks[0]).to.have.property('trackNumber');
    });
  });

  describe('getAlbumTracksWithCredits', () => {
    it('should return an array with the correct number of track objects with credits', async () => {
      const tracks = await tidal.albums.getAlbumTracksWithCredits(240189283);

      expect(tracks).to.be.an('array').to.have.lengthOf(10);
      expect(tracks[0].item).to.have.property('duration');
      expect(tracks[0]).to.have.property('credits');
    });
  });

  describe('getFeaturedAlbums', () => {
    it('should return an array of featured albums objects', async () => {
      const featured = await tidal.albums.getFeaturedAlbums();

      expect(featured).to.be.an('object');
    });
  });

  describe('getTopAlbums', () => {
    it('should return an array of album objects', async () => {
      const albums = await tidal.albums.getTopAlbums();

      expect(albums).to.be.an('array');
      expect(albums[0]).to.have.property('numberOfTracks');
    });
  });

  describe('getNewAlbums', () => {
    it('should return an array of album objects', async () => {
      const albums = await tidal.albums.getNewAlbums();

      expect(albums).to.be.an('array');
      expect(albums[0]).to.have.property('numberOfTracks');
    });
  });

  describe('getStaffPickAlbums', () => {
    it('should return a arrayof staff picks', async () => {
      const album = await tidal.albums.getStaffPickAlbums();

      expect(album).to.be.an('array');
    });
  });
});
