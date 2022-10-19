import { expect } from 'chai';
import { describe } from 'mocha';

import { Tidal } from '../src';
import { CreatedPlaylist } from '../src/types';

describe('playlist', () => {
  let tidal: Tidal;
  let playlists: CreatedPlaylist[] = [];

  before(() => {
    tidal = new Tidal({
      token: process.env.TIDAL_TOKEN!,
      countryCode: 'BE',
    });
  });

  describe('getPlaylist', () => {
    it('should return the correct playlist object', async () => {
      const playlist = await tidal.playlists.getPlaylist('68d2c88c-f15c-43cf-80d5-08a2214ac6c5');

      expect(playlist).to.be.an('object').and.to.include({ uuid: '68d2c88c-f15c-43cf-80d5-08a2214ac6c5' });
    });
  });

  describe('getPlaylistTracks', () => {
    it('should return an array of track objects from the specified playlist', async () => {
      const { items } = await tidal.playlists.getPlaylistTracks('68d2c88c-f15c-43cf-80d5-08a2214ac6c5', 6);

      expect(items).to.be.an('array').and.to.have.lengthOf(6);
      expect(items[0].item).to.be.an('object').and.to.have.property('trackNumber');
    });
  });

  describe('getPlaylistFolders', () => {
    it('should return an array of folders', async () => {
      const { items, totalNumberOfItems } = await tidal.playlists.getPlaylistFolders();

      expect(items).to.be.an('array');
      expect(items[0]).to.be.an('object').and.to.have.property('name');

      expect(totalNumberOfItems).to.be.a('number');
    });
  });

  describe('getPlaylistImage', () => {
    it('should return an url to a playlist by its squareImage', async () => {
      const playlist = await tidal.playlists.getPlaylist('68d2c88c-f15c-43cf-80d5-08a2214ac6c5');
      const image = await tidal.playlists.getPlaylistImage(playlist.squareImage);

      expect(image).to.be.a('string');
    });
  });

  describe('createPlaylist', () => {
    it('should create a playlist with a specified name without a description', async () => {
      const playlist = await tidal.playlists.createPlaylist('Test');

      if (playlist) playlists.push(playlist);

      expect(playlist.data).to.be.an('object').and.to.have.property('uuid');
      expect(playlist.data).to.have.property('title').to.equal('Test');
      expect(playlist.data).to.have.property('description').to.equal(null);
    });

    it('should create a playlist with a specified name with a description', async () => {
      const playlist = await tidal.playlists.createPlaylist('Test description', 'Test description');

      if (playlist) playlists.push(playlist);

      expect(playlist.data).to.be.an('object').and.to.have.property('uuid');
      expect(playlist.data).and.to.have.property('title').to.equal('Test description');
      expect(playlist.data).and.to.have.property('description').to.equal('Test description');
    });
  });

  describe('deletePlaylist', () => {
    it(`should delete 2 playlists`, async () => {
      playlists.forEach(async (playlist) => {
        expect(await tidal.playlists.deletePlaylist(playlist.data.uuid)).to.be.true;
      });
    });
  });

  // describe('deleteFolder', () => {
  //   it('should delete a folder', async () => {});
  // });

  // describe('addTrackToPlaylist', () => {
  //   it('should add a track to a specified playlist', async () => {});
  // });

  // describe('deleteTrackFromPlaylist', () => {
  //   it('should delete a track from a specified playlist', async () => {});
  // });
});
