var assert = require( "assert" )

describe( "hoisting", function () {

  it( "should see var", function () {

    var foo = 1;
    (function bar () {
      if (!foo) {
        var foo = 10;
      }             
     assert.equal( foo, 10 ); 
    })()

    assert.equal( foo, 1 ); 

  }) 

  it( "w/o var sees foo", function () {

    var foo = 1;

    (function bar () {
      if (!foo) {
        foo = 10;
      }             
     assert.equal( foo, 1 ); 
     foo = 12;
     assert.equal( foo, 12 ); 
    })()

    assert.equal(foo, 12); 

  }) 

  it( "sees function declararion", function () {

    var a = 1;

    function b() {

      assert.equal(typeof a, 'function');
      a = 10;

      assert.equal(typeof a, 'number');
      assert.equal(a,10);
      return;

      function a() {}
    }

    b();
    assert.equal( a, 1 );
  
  })

})  
