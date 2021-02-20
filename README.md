[![Coverage Status](https://coveralls.io/repos/github/soojinahn/is219-calculator/badge.svg?branch=main)](https://coveralls.io/github/soojinahn/is219-calculator?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/soojinahn/is219-calulator/badge.svg?branch=main)](https://coveralls.io/github/soojinahn/is219-calculator?branch=main)

Step 1: clone repo
Step 2: "npm install"

The 4 principles of Object-Oriented Programming
1. Encapsulation: 
   Each object needs to keep its state private (AKA their own private variables). Other objects can only call this object by a list of public functions. Meanwhile, the object will control its own state via methods.
   For example, in the Calculation.js file, we define a Calculation class. Here, we have a constructor that sets the variables and its private state. No other object from other classes can alter this state of this specific object. They can make another Calculation object, but not alter the existing one unless we make a method to do this. 

2. Abstraction:
    Each object should hide its internal implementation details to other objects and classes. In our calculator program, we have operational files, which include addition, subtraction, multiplication, division, and the rest. Although we call these functions in our other JS files, how they do the operations is hidden. This is abstraction.


3. Inheritance:
    It is called inheritance when there is a parent, child relationship. It is implementing a class hierarchy so that programmers can reuse the common logic and extract the unique logic into a separate class. For example, if we were to have a factorial functionality within our calculator app, the factorial class can inherit the addition functionality (in our calculator program right now, Addition is a function, not a class. For now, let's assume that it is a class). 


4. Polymorphism:
    It means having many shapes. It is useful when using inheritance. When the child has the same inherited methods as the parent, but the child wants to define its own functionality for that specific method, we can use polymorphism. The easiest example of this is calculating the parameter of different shapes. A triangle child and rectangle child can inherit the parameter method from its parent, but the methods would need different code to calculator its parameters. The methods can be defined differently and called with different typed parameters to distinguish between the other methods with the same name.


SOLID principles that are basic pillars of Object-Oriented Programming
1. S - single responsibility principle:
   Single responsibility principle states that every function that you write should do exactly one thing. It is dividing the job so that every function/method has a single responsibility. In our Calculation.js we have a GetResults() method. This has a single responsibility of returning the results of the operation. 


2. O - open-closed principle: 
   This means that your program should be open to extension, but closed to modification. All the functionalities in the calculator program should be able to make sense and no loop holes. For example, in the Division operation, it should address all the exceptions, such as dividing by zero. A good SOLID program should have exception handling such as this.


3. L - Liskov substitution principle: 
   This states that functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it. This requires the objects of the subclasses to behave in the same way as the objects of the superclass. For example, let's say that the Square class is inherited from its parent class, Rectangle. The Square class assumes that width and height are equal. When trying to find the area, substituting a rectangle with the square Area function would not work since you get area differently with a square. 


4. I - interface segregation principle: 
   Users should not be forced to depend upon interfaces that they do not use. In our calculator program, we collect an array of results from our calculations. This is something that is redundant since we pass a list of numbers and have a GetResult method. We can rather create a method that returns the last element of the calculation array to get rid of things we don't need.


5. D - dependency inversion principle: 
   This means handing over control from the function itself to the caller of the function. For example, in our calculator app, we shouldn't define what the Operation is in our Calculation.js file. It should be up to the user to define it for their purpose. 

