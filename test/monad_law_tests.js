// Test monad laws.
// Monad laws are described in http://www.haskell.org/haskellwiki/Monad_Laws

test("return a >>= f is equivalent to f a", function() {
  var f = function(a) { return a * 3 };
  var lh = (new Just(5)).bind(f);
  var rh = f(5);
  deepEqual(lh, rh, "equivalent");
});

test("m >>= return is equivalent to m", function() {
  var m = new Just(5);
  var lh = m.bind(function(a) { return new Just(a); });
  deepEqual(lh, m, "equivalent");
});

test("(m >>= f) >>= g is equivalent to m >>= (\\x -> fx >>= g)", function() {
  var f = function(a) { return new Just(a * 3); };
  var g = function(a) { return new Just(a * 5); };
  var m = new Just(7);
  var lh = m.bind(f).bind(g);
  var rh = m.bind(function(a) { return f(a).bind(g); });
  deepEqual(lh, rh, "equivalent");
});
