var tony = { name: "Tony", parent: undefined };
var steve = { name: "Steve", parent: tony };
var dave = { name: "Dave", parent: steve};
var bob = { name: "Bob", parent: dave };

function findGrandGrandFather(p) {
  if (p.parent) {
    if (p.parent.parent) {
      return p.parent.parent.parent;
    }
  }
  return undefined;
}

test("Bob's grand grand father should be Tony", function() {
  equal(findGrandGrandFather(bob).name, "Tony", "is Tony");
});

test("Tony's grand grand father should be undefined", function() {
  equal(findGrandGrandFather(tony), undefined, "is undefined");
});
