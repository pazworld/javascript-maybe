# Maybe monad written in JavaScript

This is an implementation of Maybe monad written in JavaScript.


Create Maybe value as `new Maybe.Just(3)` or `new Maybe.None()`.

Monad return is `Maybe.return`. `Maybe.return(3)` is same as `Maybe.Just(3)`.

Monad bind operator ">>=" is `bind`. "m >>= f" is `m.bind(f)`.

An example is test/db_with_maybe_tests.js . It is written using [QUnit](http://qunitjs.com/).

[The monad law](http://www.haskell.org/haskellwiki/Monad_Laws) tests are written in test/monad_law_tests.js .
