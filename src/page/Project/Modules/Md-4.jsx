import React from 'react'
import Slider from './Topic/Slider'

function Md4() {
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

export default Md4
