// Maybe monad.

var Maybe = {
  Just: function(a) {
    this.value = a;
    this.bind = function(f) { return f(this.value); };
  },
  None: function() {
    this.bind = function() {};
  },
  return: function(a) { return new Maybe.Just(a); }
};
