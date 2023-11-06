import React from 'react'
import Slider from './Topic/Slider'
import quizinfo  from '../Quiz/quiz.json'




export function Md1() {

  const module1 = [

    {
      title: "Events and Event Handling",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/Events",
        "https://www.w3schools.com/js/js_events.asp",
      ],
      quizinfo,
      code: "m1t7",
    },
    {
      title: "Introduction to JavaScript",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
        "https://www.codecademy.com/learn/introduction-to-javascript",
      ],
      quizinfo,
      code: "m1t0",
    },
    {
      title: "Variables and Data Types",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types",
        "https://www.w3schools.com/js/js_variables.asp",
      ],
      quizinfo,
      code: "m1t1",
    },
    {
      title: "Operators and Expressions",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators",
        "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
      ],
      quizinfo,
      code: "m1t2",
    },
    {
      title: "Conditional Statements (if, else if, else)",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_Statements",
        "https://www.codecademy.com/learn/introduction-to-javascript",
      ],
      quizinfo,
      code: "m1t3",
    },
    {
      title: "Loops (for, while)",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
        "https://www.w3schools.com/js/js_loop_for.asp",
      ],
      quizinfo,
      code: "m1t4",
    },
    {
      title: "Functions and Scope",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        "https://www.codecademy.com/learn/introduction-to-javascript",
      ],
      quizinfo,
      code: "m1t5",
    },
    {
      title: "Arrays and Objects",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
        "https://www.w3schools.com/js/js_objects.asp",
      ],
      quizinfo,
      code: "m1t6",
    },

  ];






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
            <Slider infoArray={infoArray} topicInfo={module1} />
        </div>

    )
}

export function Md2() {

  const module2 = [
  {
    title: "Project: Building a To-Do List",
    links: [],
    quizinfo,
    code: "m2t0",
  },
  {
    title: "What is the Document Object Model (DOM)?",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      "https://www.w3schools.com/js/js_htmldom.asp",
      "https://www.geeksforgeeks.org/how-to-create-a-todo-list-app-using-html-css-and-javascript/",
    ],
    quizinfo,
    code: "m2t1",
  },
  {
    title: "Selecting and Modifying DOM Elements",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      "https://www.w3schools.com/js/js_htmldom.asp",
      "https://www.geeksforgeeks.org/javascript-selecting-and-modifying-html-elements/",
    ],
    quizinfo,
    code: "m2t2",
  },
  {
    title: "Event Listeners and Event Handling",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      "https://www.w3schools.com/js/js_htmldom.asp",
      "https://www.geeksforgeeks.org/javascript-events/",
    ],
    quizinfo,
    code: "m2t3",
  },
  {
    title: "Changing CSS and Styles",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      "https://www.w3schools.com/js/js_htmldom.asp",
      "https://www.geeksforgeeks.org/javascript-changing-css/",
    ],
    quizinfo,
    code: "m2t4",
  },
  {
    title: "Creating and Deleting Elements",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      "https://www.w3schools.com/js/js_htmldom.asp",
      "https://www.geeksforgeeks.org/javascript-adding-removing-html-elements/",
    ],
    quizinfo,
    code: "m2t5",
  },
  {
    title: "Form Handling and Validation",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      "https://www.w3schools.com/js/js_htmldom.asp",
      "https://www.geeksforgeeks.org/javascript-form-validation/",
    ],
    quizinfo,
    code: "m2t6",
  },
];





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
          <Slider infoArray={infoArray} topicInfo={module2} />
      </div>

  )
}



export function Md3() {

  const module3 = [
    {
      title: "Project: Building a Weather App",
      links: [],
      quizinfo,
      code: "m3t0",
    },
    {
      title: "Asynchronous JavaScript and AJAX",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        "https://www.w3schools.com/js/js_ajax_intro.asp",
        "https://www.geeksforgeeks.org/introduction-to-ajax/",
      ],
      quizinfo,
      code: "m3t1",
    },
    {
      title: "Fetch API for Data Retrieval",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        "https://www.w3schools.com/js/js_api_fetch.asp",
        "https://www.geeksforgeeks.org/javascript-fetch-api/",
      ],
      quizinfo,
      code: "m3t2",
    },
    {
      title: "Promises and Callbacks",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        "https://www.w3schools.com/js/js_callback_intro.asp",
        "https://www.geeksforgeeks.org/javascript-callback-functions/",
      ],
      quizinfo,
      code: "m3t3",
    },
    {
      title: "Working with JSON",
      links: [
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON",
        "https://www.w3schools.com/js/js_json_intro.asp",
        "https://www.geeksforgeeks.org/json-in-javascript/",
      ],
      quizinfo,
      code: "m3t4",
    },
    {
      title: "Error Handling",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",
        "https://www.w3schools.com/js/js_errors.asp",
        "https://www.geeksforgeeks.org/error-handling-in-javascript/",
      ],
      quizinfo,
      code: "m3t5",
    },
    {
      title: "Local Storage",
      links: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
        "https://www.w3schools.com/html/html5_webstorage.asp",
        "https://www.geeksforgeeks.org/web-storage-apis/",
      ],
      quizinfo,
      code: "m3t6",
    },
  ];

  
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
          <Slider infoArray={infoArray} topicInfo={module3} />
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

    
    const module4 = [
      {
        title: "Project: Building a Mini Social Media Site",
        links: [],
        quizinfo: null,
        code: "m4t0",
      },
      {
        title: "Closures and Callback Functions",
        links: [
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          "https://www.w3schools.com/js/js_callback_functions.asp",
          "https://www.geeksforgeeks.org/javascript-closures/",
        ],
        quizinfo,
        code: "m4t1",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        links: [
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript",
          "https://www.w3schools.com/js/js_object-oriented.asp",
          "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-javascript/",
        ],
        quizinfo,
        code: "m4t2",
      },
      {
        title: "ES6 Features (Arrow Functions, Template Literals, etc.)",
        links: [
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
          "https://www.w3schools.com/js/js_es6.asp",
          "https://www.geeksforgeeks.org/es6-features-of-javascript/",
        ],
        quizinfo,
        code: "m4t3",
      },
      {
        title: "Modules and Module Systems",
        links: [
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          "https://www.w3schools.com/js/js_modules.asp",
          "https://www.geeksforgeeks.org/javascript-modules/",
        ],
        quizinfo,
        code: "m4t4",
      },
      {
        title: "Debugging JavaScript",
        links: [
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/debugger",
          "https://www.w3schools.com/js/js_debugging.asp",
          "https://www.geeksforgeeks.org/debugging-in-javascript/",
        ],
        quizinfo,
        code: "m4t5",
      },
      {
        title: "Introduction to Frameworks (e.g., React, Angular, or Vue)",
        links: [
          "https://reactjs.org/docs/getting-started.html",
          "https://angular.io/guide/setup-local",
          "https://vuejs.org/v2/guide/",
        ],
        quizinfo,
        code: "m4t6",
      },
    ];
    

  return (
      <div className=' w-full h-full bg-black' style={{backgroundColor: 'black'}} >
          <Slider infoArray={infoArray} topicInfo={module4} />
      </div>

  )
}




