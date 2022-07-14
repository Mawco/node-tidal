import { Client } from '../src/index';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('TIDAL.js', () => {

  it('test' , () => {
    // haven't done the tests yet :/
    expect(new Client('test')).to.have.a.property('token').that.equals('test');
  });

});
