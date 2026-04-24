import React, { useState } from 'react';
//For Week 01 Output Screenshots
import week1Screenshot1 from './Images/Week-01/week1-1.png';
import week1Screenshot2 from './Images/Week-01/week1-2.png';
import week1Screenshot3 from './Images/Week-01/week1-3.png';
import week1Screenshot4 from './Images/Week-01/week1-4.png';
//For Week 02 Output Screenshots
import week2Screenshot1 from './Images/Week-02/week2-1.png';
import week2Screenshot2 from './Images/Week-02/week2-2.png';
import week2Screenshot3 from './Images/Week-02/week2-3.png';
import week2Screenshot4 from './Images/Week-02/week2-4.png';
//For Week 03 Output Screenshots
import week3Screenshot1 from './Images/Week-03/week3-1.png';
import week3Screenshot2 from './Images/Week-03/week3-2.png';
import week3Screenshot3 from './Images/Week-03/week3-3.png';
import week3Screenshot4 from './Images/Week-03/week3-4.png';
//For Week 04 Output Screenshots
import week4Screenshot1 from './Images/Week-04/week4-1.png';
import week4Screenshot2 from './Images/Week-04/week4-2.png';
import week4Screenshot3 from './Images/Week-04/week4-3.png';
import week4Screenshot4 from './Images/Week-04/week4-2-1.png';
import week4Screenshot5 from './Images/Week-04/week4-3-1.png';
import week4Screenshot6 from './Images/Week-04/week4-2-2.png';
//For Week 05 Output Screenshots
import week5Screenshot1 from './Images/Week-05/week5-1.png';
import week5Screenshot2 from './Images/Week-05/week5-1-1.png';
import week5Screenshot3 from './Images/Week-05/week5-2.png';
import week5Screenshot4 from './Images/Week-05/week5-2-1.png';
import week5Screenshot5 from './Images/Week-05/week5-3.png';
import week5Screenshot6 from './Images/Week-05/week5-3-1.png';
import week5Screenshot7 from './Images/Week-05/week5-3-2.png';
import week5Screenshot8 from './Images/Week-05/week5-4.png';
import week5Screenshot9 from './Images/Week-05/week5-4-1.png';
import week5Screenshot10 from './Images/Week-05/week5-4-2.png';
import week5Screenshot11 from './Images/Week-05/week5-5.png';
import week5Screenshot12 from './Images/Week-05/week5-5-1.png';
import week5Screenshot13 from './Images/Week-05/week5-6.png';
import week5Screenshot14 from './Images/Week-05/week5-6-1.png';
import week5Screenshot15 from './Images/Week-05/week5-6-2.png';
//For Week 06 Output Screenshots
import week6Screenshot1 from './Images/Week-06/week6-1.png';
import week6Screenshot2 from './Images/Week-06/week6-2.png';
import week6Screenshot3 from './Images/Week-06/week6-3.png';
import week6Screenshot4 from './Images/Week-06/week6-4.png';
import week6Screenshot5 from './Images/Week-06/week6-5.png';
import week6Screenshot6 from './Images/Week-06/week6-6.png';
import week6Screenshot7 from './Images/Week-06/week6-7.png';
//For Week 07 Output Screenshots
import week7Screenshot1 from './Images/Week-07/week7-1.png';
import week7Screenshot2 from './Images/Week-07/week7-1-1.png';
import week7Screenshot3 from './Images/Week-07/week7-1-2.png';
import week7Screenshot4 from './Images/Week-07/week7-1-3.png';
import week7Screenshot5 from './Images/Week-07/week7-2.png';
import week7Screenshot6 from './Images/Week-07/week7-2-1.png';
import week7Screenshot7 from './Images/Week-07/week7-2-2.png';
import week7Screenshot8 from './Images/Week-07/week7-2-3.png';
//For Week 08 Output Screenshots
import week8Screenshot1 from './Images/Week-08/week8-1.png';
import week8Screenshot2 from './Images/Week-08/week8-3.png';
import week8Screenshot3 from './Images/Week-08/week8-4.png';
import week8Screenshot4 from './Images/Week-08/week8-5.png';
import week8Screenshot5 from './Images/Week-08/week8-6.png';
import week8Screenshot6 from './Images/Week-08/week8-7.png';
//For Week 09 Output Screenshots
import week9Screenshot1 from './Images/Week-09/week9-1.png';
import week9Screenshot2 from './Images/Week-09/week9-2.png';
import week9Screenshot3 from './Images/Week-09/week9-3.png';
import week9Screenshot4 from './Images/Week-09/week9-4.png';
//For Week 10 Output Screenshots
import week10Screenshot1 from './Images/Week-10/week10-1.png';
import week10Screenshot2 from './Images/Week-10/week10-2.png';
import week10Screenshot3 from './Images/Week-10/week10-3.png';
//For Week 11 Output Screenshots
import week11Screenshot1 from './Images/Week-11/week11-1.png';
import week11Screenshot2 from './Images/Week-11/week11-2.png';
import week11Screenshot3 from './Images/Week-11/week11-3.png';
import week11Screenshot4 from './Images/Week-11/week11-4.png';
import week11Screenshot5 from './Images/Week-11/week11-5.png';
import week11Screenshot6 from './Images/Week-11/week11-6.png';
import week11Screenshot7 from './Images/Week-11/week11-7.png';

const LabPortfolio = () => {
  const [expandedTask, setExpandedTask] = useState(null);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    header: {
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '30px 20px'
    },
    h1: {
      color: 'white',
      fontSize: '2.5em',
      marginBottom: '10px',
      fontWeight: 700,
      margin: 0
    },
    headerP: {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '1.1em',
      margin: 0
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    introSection: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '30px',
      marginBottom: '40px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
    },
    introHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '20px'
    },
    icon: {
      fontSize: '2em'
    },
    h2: {
      color: '#333',
      fontSize: '2em',
      margin: 0
    },
    introP: {
      color: '#555',
      fontSize: '1.1em',
      lineHeight: '1.8'
    },
    tasksContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px'
    },
    taskCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    taskHeader: {
      width: '100%',
      padding: '25px',
      background: 'white',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'left',
      transition: 'background 0.3s ease'
    },
    taskHeaderLeft: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px',
      flex: 1
    },
    h3: {
      color: '#333',
      fontSize: '1.5em',
      marginBottom: '8px',
      fontWeight: 600,
      margin: '0 0 8px 0'
    },
    taskDescription: {
      color: '#666',
      fontSize: '1em',
      margin: 0
    },
    chevron: {
      fontSize: '1.5em',
      color: '#667eea'
    },
    taskContent: {
      padding: '0 25px 25px'
    },
    section: {
      marginBottom: '30px'
    },
    h4: {
      color: '#333',
      fontSize: '1.3em',
      marginBottom: '15px',
      fontWeight: 600
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    techTag: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '0.9em',
      fontWeight: 500
    },
    screenshotsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    screenshotItem: {
      background: '#f5f5f5',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    screenshotImg: {
      width: '100%',
      height: 'auto',
      display: 'block'
    },
    screenshotCaption: {
      padding: '12px',
      color: '#555',
      fontSize: '0.95em',
      background: 'white'
    },
    reflectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '15px'
    },
    reflectionBox: {
      background: '#f9f9f9',
      borderLeft: '4px solid #667eea',
      padding: '20px',
      borderRadius: '8px'
    },
    reflectionP: {
      color: '#555',
      lineHeight: '1.8',
      fontSize: '1.05em',
      margin: 0,
      whiteSpace: 'pre-wrap'
    },
    footer: {
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px'
    },
    footerP: {
      color: 'white',
      fontSize: '1.2em'
    },
    footerStrong: {
      color: '#ffd700',
      fontSize: '1.4em'
    }
  };

  // ADD YOUR WEEKLY TASKS HERE - Just copy and paste for Week 1 to Week 11
  const labTasks = [
    {
      id: 1,
      week: "Week 1",
      title: "Writing your First program using Visual Studio Code",
      description: "Learning to set up VS Code, Node.js, and running JavaScript program",
      screenshots: [
        { 
          // Put your image in src/assets/week1-1.png and use: /src/assets/week1-1.png
          src: week1Screenshot1, 
          caption: "Exercise: 1" 
        },
        { 
          src: week1Screenshot2, 
          caption: "Exercise: 2" 
        },
        { 
          src: week1Screenshot3,
          caption: "Exercise: 3" 
        },
        { 
          src: week1Screenshot4,
          caption: "Exercise: 4" 
        }
        
      ],
      technologies: ["JavaScript", "Node.js", "VS Code", "Terminal"],
      reflection: "In this week's lab, I learned how to set up the development environment using Visual Studio Code and Node.js and how to write and run my first JavaScript program. I practiced creating JavaScript files, using the console.log() statement, and executing programs through the terminal. This helped me understand how JavaScript works outside the browser using Node.js.\n\nOne of the main challenges I faced was running the program from the correct directory. Initially, I encountered errors because the terminal path did not match the file location. However, this challenge helped me understand the importance of directory structure and how to navigate folders using terminal commands like cd. I also learned the importance of using correct syntax, such as proper quotation marks and file names.\n\nOverall, this lab was a valuable learning experience. It improved my confidence in using Visual Studio Code, working with the terminal, and understanding the basics of JavaScript execution. The key insight gained was that small mistakes in file paths or commands can cause errors, and careful attention to detail is essential in programming."
    },
    {
      id: 2,
      week: "Week 2",
      title: "Managing Data With Compass (CRUD)",
      description: "Learning MongoDB CRUD operations using MongoDB Compass.",
      screenshots: [
        { 
          src: week2Screenshot1,
          caption: "1: Repeat the same process to search education for Master and .Find the avg,min,max age and avg min max Salary of the people group by marital status." 
        },
        { 
          src: week2Screenshot2,
          caption: "2. find min,max average salary of each age group of female." 
        },
        { 
          src: week2Screenshot3,
          caption: "3. find min,max average salary of each age group of male." 
        },
        { 
          src: week2Screenshot4,
          caption: "4. Count married and unmarried females and males." 
        }

      ],
      technologies: ["MongoDB", "MongoDB Compass", "NoSQL Database", "Aggregation Pipeline", "JSON"],
      reflection: "This week, I learned how to work with MongoDB using MongoDB Compass. I created a database called PeopleDB and imported data from a CSV file. The main tasks included performing CRUD operations like inserting, updating, and deleting documents in the collection.\n\nThe most interesting part was learning aggregation pipelines. I used $match to filter documents and $group to calculate statistics like average age and salary by gender. For example, I filtered people with Bachelor's degrees older than 21 and found their average age grouped by gender. I also completed queries for Master's degree holders and salary analysis by age groups.\n\nThe main challenge was understanding MongoDB's case-sensitive field names and the $ syntax for referencing fields. At first, I got errors because I didn't use the exact field names from the CSV file. Once I understood this, writing queries became much easier.\n\nOverall, this lab helped me understand how NoSQL databases work differently from traditional SQL databases. MongoDB's flexible document structure and aggregation features are powerful tools for data analysis."
    },
    {
      id: 3,
      week: "Week 3",
      title: "How Module works in JS",
      description: "Learning JavaScript functions, modules, and Node.js core modules using Visual Studio Code.",
      screenshots: [
        { 
          src: week3Screenshot1, 
          caption: "Exercise 1: requires you to write the code in a file name  it index.js" 
        },
        { 
          src: week3Screenshot2, 
          caption: "Exercise 2 : Create Arrow Functions" 
        },
        { 
          src: week3Screenshot3, 
          caption: "Exercise 3 : Creating Local Module in NodeJS" 
        },
        { 
          src: week3Screenshot4, 
          caption: "Exercise 4: NodeJS core Modules" 
        },
      ],
      technologies: ["JavaScript", "Node.js", "VS Code", "Arrow Functions", "ES6 Modules", "OS Module", "Util Module"],
      reflection: "This week I learned about JavaScript functions and how to create modules in Node.js. I practiced writing traditional functions and arrow functions, which are more concise. For example, I created an EmployeeInfo function and an EmpSkills arrow function to see how they work differently.\n\nThe most important part was learning about modules. I created three files: StudentInfo.js, Person.js, and index.js. I learned to export functions using exports and module. exports, then import them with require. The StudentInfo module had functions like getStudentName, while Person.js used a class with a constructor. This showed me how to organize code across multiple files instead of writing everything in one file.\n\nI also used the os core module to display system information like hostname, memory, CPU, and network details. This was interesting because it showed how Node.js can access computer system information.\n\nThe challenge was understanding when to use exports versus module.exports. I learned that exports works for multiple functions, while module.exports is better for a single class. I also had to remember to use ./ before local file names in require statements.\n\nThis lab taught me how modular programming makes code reusable and organized, which is essential for building larger applications."
    },
    // ADD MORE WEEKS HERE - Just copy the structure above
    {
      id: 4,
      week: "Week 4",
      title: "How to use Node JS  Express to Create REST",
      description: " Learning the working principle of the express framework REST API methods.",
      screenshots: [
        { 
          src: week4Screenshot1, 
          caption: "Exercise 1: write the code for the basic express hello application . NodeJS  Core module used: “express”" 
        },
        { 
          src: week4Screenshot2,  
        },
        { 
          src: week4Screenshot4,  
        },
        { 
          src: week4Screenshot6,  
          caption: "Exercise 2: Add two more URLs in the index.js using following code:"
        },
        { 
          src: week4Screenshot3, 
        },
        { 
          src: week4Screenshot5, 
          caption: "Exercise 3:" 
        },
      ],
      technologies: ["Node.js", "Express.js", "JavaScript", "Rest API"],
      reflection: "This week's lab session provided a hands-on introduction to creating REST APIs using Node.js and Express. I successfully set up a basic Express application, added multiple routes to handle different requests, and worked with JSON files to which was use for data storage and retrieval. The exercises helped me understand how to handle both GET and POST requests, parse form data, and dynamically respond based on URL parameters. While I encountered some initial challenges with routing and JSON parsing, experimenting with different approaches and referring to documentation allowed me to overcome these obstacles. This experience solidified my understanding of Express and prepared me for more complex web development tasks."
    },
    {
      id: 5,
      week: "Week 5",
      title: "React Programming using VSC",
      description: "Learning React programming by creating functional components, using props, handling click events, and dynamically changing UI elements using Visual Studio Code.",
      screenshots: [
        { 
          src: week5Screenshot1, 
        },
        { 
          src: week5Screenshot2, 
          caption: "Task 1: Change the text appearing into your React Application" 
        },
        { 
          src: week5Screenshot3, 
        },
        { 
          src: week5Screenshot4, 
          caption: "Task 2: Change the background color of your application" 
        },
        { 
          src: week5Screenshot5, 
        },
        { 
          src: week5Screenshot6, 
        },
        { 
          src: week5Screenshot7, 
          caption: "Task 3: Creating stateless function component using React" 
        },
         { 
          src: week5Screenshot8, 
        },
         { 
          src: week5Screenshot9, 
        },
        { 
          src: week5Screenshot10, 
          caption: "Task 4: Creating the Functional Component using properties" 
        },
         { 
          src: week5Screenshot11, 
        },
        { 
          src: week5Screenshot12, 
          caption: "Task 5: Use the same GreetingElementwithProp to display seven days of week greeting message" 
        },
        { 
          src: week5Screenshot13, 
        },
        { 
          src: week5Screenshot14, 
        },
        { 
          src: week5Screenshot15, 
          caption: "Task 6: Functional Components using properties and HTML elements such as buttons" 
        },
      ],
      technologies: ["React.js", "JavaScript (ES6)", "JSX", "Node.js", "npm / npx", "Visual Studio Code","CSS"],
      reflection: "Today, I completed the React programming lab tutorial, and it was an enlightening experience. I started by setting up my first React application, which was a bit challenging at first, but I managed to get it running with some guidance. The process of creating a React app using the `npx create-react-app` command was straightforward once I understood the steps.\n\nI learned how to change the text and background color of my application, which helped me understand the basics of manipulating components in React. Creating stateless functional components was a new concept for me, but the examples provided made it easier to grasp. I was able to create a greeting message component and even pass properties to it, which was exciting.\n\nThe tasks involving event handling, like changing the background color on a button click, were particularly interesting. I realized how powerful React is in terms of interactivity. I also learned about JSX, which allows me to write HTML within JavaScript, making it easier to create dynamic user interfaces.\n\nThis lab has given me a solid foundation in React programming. I feel more confident in my ability to create and manipulate components, handle events, and understand the basic structure of a React application. I look forward to exploring more advanced topics in future labs.\n\n"
    },
    {
      id: 6,
      week: "Week 6",
      title: "Calculator demonstrates the functional component of  React without Hook.",
      description: "Learning React programming by creating functional components without Hooks, handling click events, performing arithmetic operations, and dynamically updating the user interface using Visual Studio Code.",
      screenshots: [
        { 
          src: week6Screenshot1,  
        },
        { 
          src: week6Screenshot2,  
        },
        { 
          src: week6Screenshot3, 
          caption: "Calculator" 
        },
        { 
          src: week6Screenshot4, 
          caption: "Addition Operation:" 
        },
        { 
          src: week6Screenshot5, 
          caption: "Subtraction Operation:" 
        },
        { 
          src: week6Screenshot6, 
          caption: "Division Operation:" 
        },
        { 
          src: week6Screenshot7, 
          caption: "Multiplication Operation:" 
        },
      ],
      technologies: ["React.js","JavaScript (ES6)","JSX","Node.js","npm / npx","Visual Studio Code","CSS"],
      reflection: " Explaining how the code works:\n\nThis project is a simple calculator application developed using React functional components without using Hooks. The main component, named Calculator, is defined in the file SimpleCalculator.js. The component renders two number input fields, a dropdown menu for selecting an arithmetic operator (Addition, Subtraction, Multiplication, Division), and a Calculate button.\n\nWhen the user clicks the Calculate button, the calculate() function is executed. This function retrieves the input values using the document.getElementById, converts the numeric values using parseFloat, and determines the selected operator. A switch statement is used to perform the appropriate arithmetic operation. For division, an additional check prevents division by zero and displays a proper error message. The final result is displayed dynamically on the screen inside a paragraph element.\n\nThe component was executed by importing Calculator from SimpleCalculator.js into the index.js file and rendering it inside React.StrictMode using ReactDOM.createRoot. After compiling and running the project, all calculator operations (addition, subtraction, multiplication, and division) were tested successfully, and screenshots were captured to demonstrate correct functionality."
    },
    {
      id: 7,
      week: "Week 7",
      title: "Creating Functional  React Component using Hook",
      description: "Learning React Hook API by creating functional components using useState and useEffect, managing component state, handling click events, and dynamically updating the user interface with counters and emoji-based interactions using Visual Studio Code.",
      screenshots: [
        { 
          src: week7Screenshot1,  
        },
        { 
          src: week7Screenshot2,  
        },
        { 
          src: week7Screenshot3,  
        },
        { 
          src: week7Screenshot4, 
          caption: "Task 1" 
        },
        { 
          src: week7Screenshot5,  
        },
        { 
          src: week7Screenshot6,  
        },
        { 
          src: week7Screenshot7,  
        },
        { 
          src: week7Screenshot8, 
          caption: "Task 2: Emoji Center" 
        },
      ],
      technologies: ["React.js","React Hooks (useState, useEffect)","JavaScript (ES6)","JSX","Node.js","npm / npx","Visual Studio Code","CSS","Image Handling in React"],
      reflection: "Building the My Mood Weather Widget deepened my understanding of React's component-based architecture and state management. I learned how to effectively use useState to manage multiple state variables—one for tracking the weather image dynamically and another for counting user interactions. The useEffect hook proved crucial for updating the displayed weather image based on the props.pic value passed from the parent component, ensuring the correct image is rendered whenever the prop changes. This demonstrated the power of React's reactive programming model.\n\nThe main challenge I encountered was ensuring the image paths were correctly imported and that useEffect's dependency array was properly configured to avoid infinite re-renders. I solved this by carefully reviewing the props being passed and testing each weather condition individually. This task directly built upon the Emoji Counter exercise by applying the same fundamental concepts—props for dynamic content, useState for click tracking, and useEffect for conditional rendering—but in a new, practical context. The similarity reinforced my understanding while the weather theme made the application more relatable and engaging, showing how reusable component patterns can be adapted across different use cases."
    },
    {
      id: 8,
      week: "Week 8",
      title: "Using MongoDB CRUD Operations in a Programming Application",
      description: "Learning how to connect a Node.js application with MongoDB using Mongoose, create databases and collections, insert single and multiple documents, fetch data using queries, update and delete records, and handle asynchronous operations using promises in Visual Studio Code.",
      screenshots: [
        { 
          src: week8Screenshot1, 
          caption: "Task 1:\n\nPurpose of doc1.save:\nThe doc1.save() method is used to persist a document to the MongoDB database. When we create a new document instance using the model (e.g., new person_doc()), it exists only in memory. The .save() method writes this document to the specified collection in the database, making it permanently stored.\n\nPurpose of .then():\nThe .then() method is used to handle promises in JavaScript. Since doc1.save() is an asynchronous operation that returns a promise, .then() allows us to execute code after the save operation successfully completes. This ensures proper flow control - we can access the saved document, display confirmation messages, or perform subsequent operations only after the database write is confirmed." 
        },
        { 
          caption: "Task 2:\n\nThe insertMany() method is specifically designed to insert multiple documents into a collection in a single operation. This is more efficient than calling save() multiple times for individual documents.\n\nperson_doc.insertMany(manyPersons)\n\nExplanation\n•	insertMany() accepts an array of document objects\n•	It performs a bulk insert operation, which is faster than individual inserts\n•	Returns a promise that resolves when all documents are successfully inserted\n•	If any document fails validation, the entire operation can be rolled back (depending on options)" 
        },
        { 
          src: week8Screenshot2, 
          caption: "Task 3: " 
        },
        { 
          src: week8Screenshot3, 
          caption: "Task 4:" 
        },
        { 
          src: week8Screenshot4, 
          caption: "Task 5:" 
        },
        { 
          src: week8Screenshot5, 
          caption: "Task 6:" 
        },
        { 
          src: week8Screenshot6, 
          caption: "Task 7:\n\n Explanation:\nThe updateMany() method modifies multiple documents that match the specified filter criteria." 
        },
      ],
      technologies: ["MongoDB","Mongoose","Node.js","JavaScript (ES6)","Visual Studio Code","MongoDB Compass","npm"],
      reflection: "MongoDB CRUD Operations Using Node.js and Mongoose\n\nThis week's lab was really helpful for understanding how MongoDB works with Node.js through Mongoose. At first, I found it a bit confusing trying to figure out how everything connects together, but once I started working through the tasks one by one, things started making more sense.\n\nThe biggest thing I learned was the difference between saving one document at a time versus adding multiple documents at once. Using save() for a single document is straightforward, but when you need to add several documents, insertMany() is way more efficient because it does everything in one go instead of making separate trips to the database each time.\n\nI'll be honest, the whole promise thing with .then() and .catch() was tricky at first. I kept wondering why we needed them and what they actually do. But after using them in different tasks, I started to get it - they basically make sure things happen in the right order. Like, you don't want to try showing data before it's actually saved to the database. That would just cause errors and confusion.\n\nThe filtering and querying parts were actually pretty interesting. Learning operators like $gt (greater than) and $gte (greater than or equal to) made me realize how flexible MongoDB is when you need to find specific data. It's not just about getting everything - you can be really precise about what you want to pull from the database.\n\nOne thing that made me nervous was the delete and update operations. It hit me that if you mess up your filter criteria, you could accidentally delete or change the wrong documents. That's why I made sure to double-check my code before running those commands. Seeing the matchedCount and modifiedCount in the results was reassuring though - it's like a confirmation that you actually changed what you intended to change.\n\nI had some moments where I got stuck, especially trying to understand when to use .exec() and when I didn't need it. After some trial and error and looking things up, I figured out it's mainly for returning promises consistently, which makes the code cleaner and easier to debug when something goes wrong."
    },
    {
      id: 9,
      week: "Week 9",
      title: "How to create React Class Components",
      description: "This week, I learned to create React class components that maintain state internally and handle events. I developed two components: FacebookEmojiCounter, which counts how many times an emoji button is clicked, and ToggleMode, which toggles between Sad and Happy emojis on each button click. These exercises demonstrate state management, event handling, and dynamic UI updates in class components without using React Hooks.",
      screenshots: [
        { 
          src: week9Screenshot1,  
        },
        { 
          src: week9Screenshot2,  
        },
        { 
          src: week9Screenshot3, 
        },
        { 
          src: week9Screenshot4,  
        },
      ],
      technologies: ["React.js", "JavaScript (ES6)", "HTML & CSS", "Visual Studio Code", "npm", "Class Components", "State Management", "Event Handling"],
      reflection: "This week's lab was an interesting shift as I worked with React class components after using functional components in previous weeks. The experience really highlighted how different these two approaches are in terms of structure and how they handle state management.\n\nKey Differences\n\nThe first thing I noticed was how much more setup class components require. I had to write a constructor to initialize the state, explicitly bind event handlers like this.increment = this.increment.bind(this), and include a render method for displaying the UI. With functional components, everything felt lighter and more straightforward - just declare a component function, use hooks like useState, and return JSX directly.\n\nState management also works quite differently. In the FacebookEmojiCounter class component, I had to use this.state = {number: 0} in the constructor and then update it with this.setState((prevState) => {return {number: prevState.number+1}}). It's more verbose compared to functional components where I could just write const [number, setNumber] = useState(0) and update with setNumber(number + 1). The functional approach feels cleaner and easier to read.\n\nAnother thing I found a bit tedious was accessing props. In class components, I constantly had to write this.props.type, while in functional components, props are just passed as parameters. The ToggleMode component was fun to build though - watching the emoji switch between happy and sad on each click really showed how state changes work in class components.\n\nOverall, while class components helped me understand React's underlying concepts and gave me a more traditional object-oriented perspective, I definitely prefer functional components with hooks. They're simpler, require less code, and feel more natural to work with. That said, learning both approaches was valuable since I might encounter class components in older codebases."
    },
    {
      id: 10,
      week: "Week 10",
      title: "Developing a an online Library React Single Page application with MongoDB Mongoose, Node express and axios",
      description: "Learning how to develop a full-stack single page application using the MERN stack by creating a RESTful backend with Node.js, Express, MongoDB, and Mongoose, and connecting it to a React frontend using Axios to perform CRUD operations such as adding, updating, deleting, and displaying books.",
      screenshots: [
        { 
          src: week10Screenshot1, 
          caption: "BooksSchema.js" 
        },
        { 
          src: week10Screenshot2, 
          caption: "MongoDBConnect.js" 
        },
        { 
          src: week10Screenshot3, 
          caption: "Server.js \n\n Connection Successfull✅ "
        },
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Axios", "JavaScript (ES6)", "REST API", "Visual Studio Code", "npm", "CORS"],
      reflection: "This week's lab provided valuable hands-on experience in building a complete backend REST API using the MERN stack. I learned how to structure a Node.js application properly by separating concerns into different files (schema, database connection, and server logic). The transition from callback-based to promise-based code in Mongoose v7+ was initially challenging, but it made the code cleaner and more maintainable. Understanding how middleware like body-parser and CORS work was crucial for enabling communication between frontend and backend. The most significant learning point was grasping how RESTful principles map to CRUD operations and how MongoDB's document-based structure differs from traditional relational databases. Implementing error handling and validation taught me the importance of robust API design. Moving forward, I feel more confident in developing scalable backend systems and understand the critical role of proper API documentation. This foundational knowledge will be essential when integrating the React frontend in the next phase of the project."
    },
    {
      id: 11,
      week: "Week 11",
      title: "React Front End Application for online Library",
      description: "Learning how to build a React single-page front-end application using Axios and React Router to perform CRUD operations by communicating with a backend REST API",
      screenshots: [
        { 
          src: week11Screenshot1, 
          caption: "AddBooks.js" 
        },
        { 
          src: week11Screenshot2, 
          caption: "BookUpdate.js" 
        },
        { 
          src: week11Screenshot3, 
          caption: "Delete_Books.js" 
        },
        { 
          src: week11Screenshot4, 
          caption: "DisplayData.js" 
        },
        { 
          src: week11Screenshot5, 
          caption: "Dsply_fnCompt.js" 
        },
         { 
          src: week11Screenshot6, 
          caption: "App.js" 
        },
         { 
          src: week11Screenshot7, 
          caption: "Successfully Run!" 
        },
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Axios", "JavaScript (ES6)", "REST API", "Visual Studio Code", "npm", "CORS"],
      reflection: "Reflection on Front-End Development with React, Axios, and REST API\n\nCreating the front-end for the online library application was an interesting learning experience that helped me understand how React communicates with a backend server through REST APIs.\n\nFront-End Creation Process\n\nThe front-end development started with setting up a React application and installing necessary packages like react-router-dom, axios, and bootstrap. The main App.js file serves as the entry point, where I implemented React Router to create a single-page application with multiple views. This allows users to navigate between different pages without reloading the entire application.\n\nCommunication with Backend Using Axios and REST API\n\nThe communication between front-end and backend is handled through Axios, which is simpler than the Fetch API because it works directly with JSON data. I used different HTTP methods for various operations:\n\nGET - to retrieve all books from the database\nPOST - to add new books\nPUT/UPDATE - to modify existing book records\nDELETE - to remove books\n\nThe Axios calls target specific REST API endpoints running on the backend server (localhost:5000). For example, axios.post sends new book data to the server, which then stores it in MongoDB.",
    },
  ];

  const toggleTask = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.h1}>Lab Tasks Portfolio</h1>
          <p style={styles.headerP}>A comprehensive collection of my learning journey</p>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Introduction */}
        <div style={styles.introSection}>
          <div style={styles.introHeader}>
            <span style={styles.icon}>📚</span>
            <h2 style={styles.h2}>About This Portfolio</h2>
          </div>
          <p style={styles.introP}>
            This portfolio showcases my completed lab tasks throughout the course. Each task includes 
            screenshots demonstrating the implementation and a reflection on what I learned, challenges 
            faced, and key takeaways. Click on any task below to expand and view details.
          </p>
        </div>

        {/* Tasks List */}
        <div style={styles.tasksContainer}>
          {labTasks.map((task) => (
            <div key={task.id} style={styles.taskCard}>
              {/* Task Header */}
              <button
                onClick={() => toggleTask(task.id)}
                style={styles.taskHeader}
              >
                <div style={styles.taskHeaderLeft}>
                  <span style={{fontSize: '1.8em', marginTop: '5px'}}>💻</span>
                  <div>
                    <h3 style={styles.h3}>{task.week}: {task.title}</h3>
                    <p style={styles.taskDescription}>{task.description}</p>
                  </div>
                </div>
                <span style={styles.chevron}>
                  {expandedTask === task.id ? '▲' : '▼'}
                </span>
              </button>

              {/* Expanded Content */}
              {expandedTask === task.id && (
                <div style={styles.taskContent}>
                  {/* Technologies */}
                  <div style={styles.section}>
                    <h4 style={styles.h4}>Technologies Used</h4>
                    <div style={styles.techTags}>
                      {task.technologies.map((tech, idx) => (
                        <span key={idx} style={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Screenshots */}
                  <div style={styles.section}>
                    <h4 style={styles.h4}>Screenshots</h4>
                    <div style={styles.screenshotsGrid}>
                      {task.screenshots.map((screenshot, idx) => (
                        <div key={idx} style={styles.screenshotItem}>
                          <img 
                            src={screenshot.src} 
                            alt={screenshot.caption}
                            style={styles.screenshotImg}
                          />
                          <p style={styles.screenshotCaption}>{screenshot.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reflection */}
                  <div style={styles.section}>
                    <div style={styles.reflectionHeader}>
                      <span style={{fontSize: '1.5em'}}>💡</span>
                      <h4 style={styles.h4}>Reflection</h4>
                    </div>
                    <div style={styles.reflectionBox}>
                      <p style={styles.reflectionP}>{task.reflection}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerP}>
            Total Tasks Completed: <strong style={styles.footerStrong}>{labTasks.length}</strong>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LabPortfolio;