Maybe monad written in JavaScript
=================================

This is an implementation of Maybe monad written in JavaScript.

- Create Maybe monad as `new Maybe.Just(a)` or `new Maybe.None()`.
- Monad return is `Maybe.return`. `Maybe.return(a)` is same as `Maybe.Just(a)`.
- Monad bind operator ">>=" is `bind`. "m >>= f" is `m.bind(f)`.

An example is test/db_with_maybe_tests.js. It is written using [QUnit](http://qunitjs.com/).

[The monad laws](http://www.haskell.org/haskellwiki/Monad_Laws)  are tested in test/monad_law_tests.js. It also written using [QUnit](http://qunitjs.com/).
