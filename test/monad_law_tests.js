// Test monad laws.
// Monad laws are described in http://www.haskell.org/haskellwiki/Monad_Laws

test("return a >>= f should be equivalent to f a", function() {
  var f = function(a) { return Maybe.return(a * 3); };
  var lhs = Maybe.return(5).bind(f);
  var rhs = f(5);
  deepEqual(lhs, rhs, "equivalent");
});

test("m >>= return should be equivalent to m", function() {
  var m = Maybe.return(5);
  var lhs = m.bind(Maybe.return);
  deepEqual(lhs, m, "equivalent");
});

test("(m >>= f) >>= g should be equivalent to m >>= (\\x -> fx >>= g)",
    function() {
  var f = function(a) { return Maybe.return(a * 3); };
  var g = function(a) { return Maybe.return(a * 5); };
  var m = Maybe.return(7);
  var lhs = m.bind(f).bind(g);
  var rhs = m.bind(function(x) { return f(x).bind(g); });
  deepEqual(lhs, rhs, "equivalent");
});
