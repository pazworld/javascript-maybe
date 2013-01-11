// DB is from http://d.hatena.ne.jp/kazu-yamamoto/20100816/1281928389

function Just(a) { this.value = a; }
Just.prototype.bind = function(f) { return f(this.value); }
Just.prototype.isJust = function(f) { return f(this.value); }

function None() {}
None.prototype.bind = function(f) { return (new None()); }
None.prototype.isJust = function() { return (new None()); }

var DB = { "Bob": "Dave", "Dave": "Steve", "Steve": "Tony" };
function lookup(db) {
  return function(x) { return db[x] ? new Just(db[x]) : new None(); }
}
