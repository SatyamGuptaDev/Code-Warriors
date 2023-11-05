import React from 'react'
import Slider from './Topic/Slider'

export function Md1() {
    const infoArray = [
      {
        name: 'Events and Event Handling',
        des: 'Learn how to work with events in web development. This includes event listeners, event handling functions, and responding to user interactions on a webpage.',
      isUnlock: false,
    },

        {
            name: 'Introduction to JavaScript',
            des: 'This module will introduce you to the fundamentals of JavaScript, explaining its role in web development and basic syntax.',
            isUnlock: true,
        },
        {
            name: 'Variables and Data Types',
            des: 'Learn how to declare and use variables, along with an understanding of data types such as strings, numbers, and booleans.',
          isUnlock: true,
        },
        {
            name: 'Operators and Expressions',
            des: 'Explore the various operators in JavaScript for arithmetic, comparison, and logical operations. Understand how to create expressions using these operators.',
          isUnlock: false,
        },
        {
            name: 'Conditional Statements (if, else if, else)',
            des: 'Discover how to implement conditional logic using if, else if, and else statements, allowing your code to make decisions based on specific conditions.',
          isUnlock: false,
        },
        {
            name: 'Loops (for, while)',
            des: 'This section covers the use of loops like "for" and "while" to execute code repeatedly. Learn how to iterate through arrays and perform other repetitive tasks efficiently.',
          isUnlock: false,
        },
        {
    
            name: 'Functions and Scope',
            des: 'Understand the concept of functions in JavaScript, how to create them, and how they relate to scope, including local and global scope.',
          isUnlock: false,
        }
        ,
        {
            name: 'Arrays and Objects',
            des: 'Dive into the manipulation of data structures in JavaScript. Explore arrays and objects, which are crucial for organizing and storing data.',
          isUnlock: false,
        },
 
      ]
    return (
        <div className=' w-full h-full bg-black' style={{backgroundColor: 'black'}} >
            <Slider infoArray={infoArray} />
        </div>

    )
}


export function Md4() {
  const infoArray = [
      {
          name: 'Project: Building a Mini Social Media Site',
          des: 'Apply your advanced JavaScript knowledge to create a mini social media site, including user authentication, posting, and interaction features.',
          isUnlock: false,
        },
        
      {
        name: 'Closures and Callback Functions',
        des: 'Dive into the concept of closures in JavaScript and how they allow for data encapsulation. Explore callback functions and their use in asynchronous programming.',
        isUnlock: true,
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        des: 'Learn about the principles of Object-Oriented Programming (OOP) in JavaScript, including classes, objects, and inheritance. Apply OOP concepts to your code.',
        isUnlock: true,
      },
      {
        name: 'ES6 Features (Arrow Functions, Template Literals, etc.)',
        des: 'Explore the new features introduced in ECMAScript 6 (ES6), including arrow functions, template literals, destructuring, and more, to write more modern and concise JavaScript code.',
        isUnlock: false,
      },
      {
        name: 'Modules and Module Systems',
        des: 'Understand how to organize your JavaScript code using modules and module systems. This helps maintain code modularity and reusability.',
        isUnlock: false,
      },
      {
        name: 'Debugging JavaScript',
        des: 'Discover effective techniques and tools for debugging JavaScript code, making it easier to identify and fix issues in your applications.',
        isUnlock: false,
      },
      {
        name: 'Introduction to Frameworks (e.g., React, Angular, or Vue)',
        des: 'Get an introduction to popular JavaScript frameworks like React, Angular, or Vue, and understand their role in building modern web applications.',
        isUnlock: false,
      },

    ];

    

  return (
      <div className=' w-full h-full bg-black' style={{backgroundColor: 'black'}} >
          <Slider infoArray={infoArray} />
      </div>

  )
}



export function Md3() {
  const infoArray = [
      {
          name: 'Project: Building a Weather App',
          des: 'Apply your knowledge of asynchronous JavaScript, data retrieval, and error handling to create a weather application that fetches and displays weather information.',
          isUnlock: false,
        },
        
      {
        name: 'Asynchronous JavaScript and AJAX',
        des: 'Learn about asynchronous programming in JavaScript, including AJAX (Asynchronous JavaScript and XML), which allows you to make requests to servers without refreshing the entire page.',
        isUnlock: true,
      },
      {
        name: 'Fetch API for Data Retrieval',
        des: 'Explore the Fetch API, a modern way to make HTTP requests in JavaScript. Use it to retrieve data from servers and handle the responses.',
        isUnlock: true,
      },
      {
        name: 'Promises and Callbacks',
        des: 'Understand the concept of promises and callbacks in JavaScript, which are used to handle asynchronous operations and ensure code execution in a specific order.',
        isUnlock: false,
      },
      {
        name: 'Working with JSON',
        des: 'Discover how to work with JSON (JavaScript Object Notation), a lightweight data interchange format commonly used in web applications for data storage and transmission.',
        isUnlock: false,
      },
      {
        name: 'Error Handling',
        des: 'Learn how to handle errors in JavaScript, including techniques like try-catch blocks to gracefully manage unexpected situations in your code.',
        isUnlock: false,
      },
      {
        name: 'Local Storage',
        des: 'Explore the concept of local storage in web browsers, which allows you to store data persistently on a user\'s device. This is useful for saving user preferences or application state.',
        isUnlock: false,
      },

    ];

    
  return (
      <div className=' w-full h-full bg-black' style={{backgroundColor: 'black'}} >
          <Slider infoArray={infoArray} />
      </div>

  )
}



export function Md2() {
  const infoArray = [
      {
          name: 'Project: Building a To-Do List',
          des: 'Apply your knowledge of DOM manipulation to create a to-do list application, where you can add, update, and remove tasks.',
          isUnlock: false,
        },
        
      {
        name: 'What is the Document Object Model (DOM)?',
        des: 'Learn about the Document Object Model, its structure, and how it represents the web page, allowing for dynamic interaction and manipulation.',
        isUnlock: true,
      },
      {
        name: 'Selecting and Modifying DOM Elements',
        des: 'Discover how to select and manipulate elements on a web page using JavaScript. This includes accessing elements by their IDs, classes, and more.',
        isUnlock: true,
      },
      {
        name: 'Event Listeners and Event Handling',
        des: 'Explore how to add event listeners to DOM elements and handle events like clicks, mouseovers, and keyboard interactions.',
        isUnlock: false,
      },
      {
        name: 'Changing CSS and Styles',
        des: 'Learn how to dynamically change the CSS and styles of DOM elements, allowing for visual updates and animations on your web page.',
        isUnlock: false,
      },
      {
        name: 'Creating and Deleting Elements',
        des: 'Understand how to create new DOM elements and remove existing ones, enabling you to add content or features to your web page dynamically.',
        isUnlock: false,
      },
      {
        name: 'Form Handling and Validation',
        des: 'Explore how to work with HTML forms, including form submission, validation, and error handling in web applications.',
        isUnlock: false,
      },

    ];
    
  return (
      <div className=' w-full h-full bg-black' style={{backgroundColor: 'black'}} >
          <Slider infoArray={infoArray} />
      </div>

  )
}

