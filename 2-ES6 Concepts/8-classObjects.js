// class and Objects in ES6

class Tarining {
  // Data Members
  constructor(trainingName, trainingDuration, trainingCost) {
    this.trainingName = trainingName;
    this.trainingDuration = trainingDuration;
    this.trainingCost = trainingCost;
  }

  // Member Function
  displayDetails() {
    console.log(
      `Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingDuration} Hours\nTraining Cost = ${this.trainingCost} $`
    );
  }
}

// Inheritance 
class University extends Tarining
{

}



let t1 = new Tarining("React", 40, 1500);
let t2 = new Tarining("Angular", 60, 2000);
t2.displayDetails();

let U1 = new University("Summer Training", 60, 200);
U1.displayDetails();
