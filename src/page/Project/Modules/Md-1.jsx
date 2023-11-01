import React from 'react'
import Slider from './Topic/Slider'

function Md1() {
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

export default Md1
