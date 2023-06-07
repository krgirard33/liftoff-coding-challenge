// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name } is {older than / younger than / the same age as} me.

//   Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
//   Output
// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    let diff = "";

    if (other.age > this.age) {
      diff = "is older than me.";
    } else if (other.age < this.age) {
      diff = "is younger than me.";
    } else {
      diff = "is the same age as me.";
    }
    return `${other.name} ${diff}`;
  }
}