import assert  from 'power-assert';
import Sample  from '../src/sample.js';

describe( 'Sampleクラス', () => {
  it( 'getテスト', () => {
    const sample = new Sample(2);
    assert( sample.get() === 2 );
  } );
} );
