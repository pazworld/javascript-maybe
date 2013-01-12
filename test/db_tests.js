var DB = {
  "Bob": "Dave",
  "Dave": "Steve",
  "Steve": "Tony"
};

function lookup(db, x) {
  return db[x];
}

function findGrandGrandFather(db, x) {
  var father = lookup(db, x);
  if (father) {
    var grandFather = lookup(db, father);
    if (grandFather) {
      return lookup(db, grandFather);
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

test("Bob's grand grand father should be Tony", function() {
  equal(findGrandGrandFather(DB, "Bob"), "Tony", "is Tony");
});

test("Tony's grand grand father should be undefined", function() {
  equal(findGrandGrandFather(DB, "Tony"), undefined, "is undefined");
});
