import React from 'react'
import Slider from './Topic/Slider'

function Md2() {
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

export default Md2
