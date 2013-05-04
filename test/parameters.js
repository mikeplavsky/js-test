var assert = require( "assert" )

describe( "Function parameters", function () {

  it( "More arguments", function () {

    function baz(a,b,c) {
      assert.equal( arguments.length, 5 );
      assert.equal( arguments[3], 4 );
    }

    baz(1,2,3,4,5);

  })

  it( "Less arguments", function () {

    function bar(a,b,c) {
      assert.equal( arguments.length, 1 );
      assert.equal( arguments[0], 1 );
      assert.equal( arguments[1], undefined );
    }

    bar(1);

  })

})
