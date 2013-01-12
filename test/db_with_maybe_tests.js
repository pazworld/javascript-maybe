var tony = { name: "Tony", parent: undefined };
var steve = { name: "Steve", parent: tony };
var dave = { name: "Dave", parent: steve};
var bob = { name: "Bob", parent: dave };

function father(p) {
  return (p.parent) ? new Maybe.Just(p.parent) : new Maybe.None();
}

function findGrandGrandFatherM(p) {
  return Maybe.return(p).bind(father).bind(father).bind(father);
}

test("Bob's grand grand father should be Tony (use Maybe)", function() {
  equal(findGrandGrandFatherM(bob).value.name, "Tony", "is Tony");
});

test("Tony's grand grand father should be None() (use Maybe)", function() {
  deepEqual(findGrandGrandFatherM(tony), new Maybe.None(), "is None()");
});
