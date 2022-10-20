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

  describe('tracks', () => {
    it('should return an array of 25 track objects', async () => {
      const tracks = await tidal.search('adele', 'tracks', 25);

      expect(tracks).to.be.an('array').and.to.have.lengthOf(25);
      expect(tracks[0]).to.be.an('object').and.to.have.property('trackNumber');
    });
  });

  describe('albums', () => {
    it('should return an array of 25 album objects', async () => {
      const albums = await tidal.search('adele', 'albums', 25);

      expect(albums).to.be.an('array').and.to.have.lengthOf(25);
      expect(albums[0]).to.be.an('object').and.to.have.property('numberOfTracks');
    });
  });

  describe('artists', () => {
    it('should return an array of 25 artist objects', async () => {
      const artists = await tidal.search('adele', 'artists', 25);

      expect(artists).to.be.an('array').and.to.have.lengthOf(25);
      expect(artists[0]).to.be.an('object').and.to.have.property('id');
    });
  });

  describe('playlists', () => {
    it('should return an array of 25 playlist objects', async () => {
      const playlists = await tidal.search('adele', 'playlists', 25);

      expect(playlists).to.be.an('array').and.to.have.lengthOf(25);
      expect(playlists[0]).to.be.an('object').and.to.have.property('uuid');
    });
  });

  describe('videos', () => {
    it('should return an array of 25 video objects', async () => {
      const videos = await tidal.search('adele', 'videos', 25);

      expect(videos).to.be.an('array').and.to.have.lengthOf(25);
      expect(videos[0]).to.be.an('object').and.to.have.property('id');
    });
  });
});
