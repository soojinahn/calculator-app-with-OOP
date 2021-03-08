[![Coverage Status](https://coveralls.io/repos/github/soojinahn/is219-calculator/badge.svg?branch=main)](https://coveralls.io/github/soojinahn/is219-calculator?branch=main)
[![Build Status](https://travis-ci.org/soojinahn/is219-calculator.svg?branch=main)](https://travis-ci.org/soojinahn/is219-calculator)

Step 1: clone repo
Step 2: "npm install"

**The 4 principles of Object-Oriented Programming**
1. Encapsulation: 
   Each object needs to keep its state private (AKA their own private variables). Other objects can only call this object by a list of public functions. Meanwhile, the object will control its own state via methods.
   For example, in the Calculation.js file, we define a Calculation class. Here, we have a constructor that sets the variables and its private state. No other object from other classes can alter this state of this specific object. They can make another Calculation object, but not alter the existing one unless we make a method to do this. 
   
        class Calculation{
    
        constructor(a,b,op){
    
        this.a = a;
        this.b = b;
        this.op = op;
        }
    
        static make(a,b, op){
            return new Calculation(a,b, op);
        }
    
        //a method so that
        GetResults(){
            return this.op(this.a, this.b);
        }
        }

         module.exports = Calculation;

2. Abstraction:
    Each object should hide its internal implementation details to other objects and classes. In our calculator program, we have operational files, such as Addition.js. Although we call these functions in our other JS files (as seen with GetResults method), how Addition.js does the operation is hidden. This is abstraction.
   
        function Addition(a,b) {
        return a+b;
        }
        module.exports = Addition;
    
        GetResults(){
        return this.op(this.a, this.b);
        }


3. Inheritance:
    It is called inheritance when there is a parent, child relationship. It is implementing a class hierarchy so that programmers can reuse the common logic and extract the unique logic into a separate class. For example, if we were to have a factorial functionality within our calculator app, the factorial class can inherit the addition functionality. 


4. Polymorphism:
    It means having many shapes. It is useful when using inheritance. When the child has the same inherited methods as the parent, but the child wants to define its own functionality for that specific method, we can use polymorphism. The easiest example of this is calculating the parameter of different shapes. A triangle child and rectangle child can inherit the parameter method from its parent, but the methods would need different code to calculator its parameters. The methods can be defined differently and called with different typed parameters to distinguish between the other methods with the same name.
       
        GetParameter(a, b, c) {
            //triangle
            return a+b+c;
        }
        GetParameter(a,b) {
            //rectangle
            return a*2 + b*2;
        }


**SOLID principles that are basic pillars of Object-Oriented Programming**
1. S - single responsibility principle:
   Single responsibility principle states that every function that you write should do exactly one thing. It is dividing the job so that every function/method has a single responsibility. In our Calculation.js we have a GetResults() method. This has a single responsibility of returning the results of the operation.

        GetResults(){
        return this.op(this.a, this.b);
        }


2. O - open-closed principle: 
   This means that your program should be open to extension, but closed to modification. All the functionalities in the calculator program should be able to make sense and no loop holes. For example, in the Division operation, it should address all the exceptions, such as dividing by zero. A good SOLID program should have exception handling such as this.

        function Division(a,b){
        return a/b;
        }
        
        module.exports = Division;
    *currently, there is no exception handling with our Division function, but it is recommended to satisfy SOLID principles. 


3. L - Liskov substitution principle: 
   This states that functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it. This requires the objects of the subclasses to behave in the same way as the objects of the superclass. Let's look at an example below. 


         class Rectangle {
            constructor(height, width){
               this.height = height;
               this.width = width;
            }
            setWidth(width){
               this.width = width;
            }
            setHeight(height){
               this.height = height;
            }
         }

   This code will act as a parent class for the child class, Square. Following the above code this test would pass:

         Rectangle rect = new Rectangle(50,20);
         setWidth(100);
         assert.equal(20, rect.height);

   However, the derived class Square from Rectangle would act differently because a square has height and width that is always equal. 

         Rectangle rect = new Square(20); //sets both width and height
         setWidth(rect, 100);
         assert.equal(20, rect.height);

   This test will fail because setting a square's width to 100 will also change its height. Therefore, Liskov's substitution principle is violated by deriving a Square from a Rectangle.
      


4. I - interface segregation principle: 
   Users should not be forced to depend upon interfaces that they do not use. In our calculator program, we collect an array of results from our calculations. This is something that is redundant since we pass a list of numbers and have a GetResult method. We can rather create a method that returns the last element of the calculation array to get rid of things we don't need.

        static Calculations = [];
        static addCalculation(calculation){
            Calculator.Calculation.push(calculation);
        }

        static getLastCalculation(){
            return this.Calculations[this.Calculations.length -1];  
        }

    addCalculation method existed before we added the getLastCalculation. In order to satisfy interface segregation principle, we added getLastCalculation, which makes use of the addCalcualtion that we weren't using before. Now, we are able to get results of operations from getting the last index of the Calculations array.


5. D - dependency inversion principle: 
   This means handing over control from the function itself to the caller of the function. For example, in our calculator app, we don't define what the operation is in our Calculation.js file. It should be up to the user to define it for their purpose. 

        class Calculation{

            constructor(a,b,op){
    
            this.a = a;
            this.b = b;
            this.op = op;
            }
            
                static make(a,b, op){
                    return new Calculation(a,b, op);
                }
            
                //a method so that
                GetResults(){
                    return this.op(this.a, this.b);
                }
        }

**OOP Design Patterns**

There are three categories of design patterns: creational, structural, and behavioral. We will look at an example from each category.

_A) _Creational__

Builder: This creational design pattern allows programmers to build a complex object using simpler objects and using a step-by-step approach. This helps produce different types and representations of an object using the same construction code.

The Builder pattern allows a collection of builders to do its own separate operation to build to the overall object. For example, in our calculator app, we had Calculator.js, Calculation.js, and the other operational files (Addition.js, Subtraction.js, etc). Here, the operational files would be the builders for the Calculator app. It is divided into different functionalities and products that will make up the calculator app to deliver the proper functions that the client needs. And often in a Builder pattern, it is recommended that there be a Director object that controls/manages what kinds of Builders to call. In our app, we can view the Calculation.js file as our manager as it calls what kinds of operations to run by passing the type of operation as one of its variables. 

Let's take a look at a specific example. When we think of a physical calculator, there are a bunch of numbers and symbols to help make a mathematical expression and perform a math operation. A calculator is a tool where we input numbers and symbols and returns a calculation. To make it simpler, it can be broken down into specific operations, as our Builder Pattern specifies. Below is our code for Calculation.js.

      class Calculation{
      constructor(a,b,op){
      
      this.a = a;
      this.b = b;
      this.op = op;
      }
      
          static make(a,b, op){
              return new Calculation(a,b, op);
          }
      
          //a method so that
          GetResults(){
              return this.op(this.a, this.b);
          }
      }
      
      module.exports = Calculation;

As we have discussed earlier, the Calculation.js acts as a director in our app and calls our different "builders" to complete a calculation. If our op variable is "Multiplication," it will call the following builder:

      function Multiplication(a, b){
      return a*b;
      }
      
      module.exports=Multiplication;

As our Calculator app becomes more complex, the Builder Pattern will prove to be highly beneficial to manage the different build states of our calculator.

_B) _Structural__

Decorator: This design pattern allows clients to add new behaviors to objects. These are called "wrappers," or "decorators" that provide optional functionality if the user calls for it. This acts similarly to how inheritance works but without sacrificing the flexibility. Using wrappers in the Decorator Pattern can allow altering the behavior of the object at runtime as well as inherit behaviors of multiple classes at the same time. You can see it as a chain of behavior that can be added on or broken down depending on the client's needs.

To apply a decorator to our calculator app, let's say you want to add an option to make our calculations round down. We are going to "wrap" the calculator with this functionality. This doesn't change the functionality of our main calculator component. It returns the calculation with the functionality that we want, which is to have it rounded to the nearest integer.

      //Calculation Component
      GetResults() {
         return this.op(this.a, this.b);
      }

      //Decorator for Calculation object, calc 
      GetResults(){
         return Math.round(this.calc.GetResults());
      }

_C) _Behavioral__

Strategy: This pattern suggests you to create specific classes that do something in a lot of different ways. These classes are called "strategies." The main class must have a field for storing references to one of the strategies. This class delegates the work to the linked strategy instead of working on its own. It is useful when you want to use different variants of al algorithm within an object and be able to switch from one algorithm to another during runtime.

In our calculator app, we can think of the different types of calculators as the different algorithms we are trying to implement with our design pattern. Let's say we want to have a basic calculator, a scientific calculator, and a graphing calculator. Our calculatorType will be the strategy that defines what type of calculator we will use.

      class Calculation{
      
         constructor(a,b,op){
            this.a = a;
            this.b = b;
            this.op = op;
         }
      
          static Create(a,b, op){
              return new Calculation(a,b, op);
          }
      
          //a method so that
          GetResults(){
              return this.op(this.a, this.b);
          }
      }

Each of these types of calculators can have a calculation functionality as seen above with our basic calculator calculation class. If we want to use a scientific calculator for unary operations (e.g. sine and cosine), the calculation class might look like the following:

      class Calculation{
         
         constructor(a, op){

         this.a = a;
         this.op = op;
         }

          static Create(a, op){
              return new Calculation(a, op);
          }

          GetResults(){
              return this.op(this.a);
          }
      }





