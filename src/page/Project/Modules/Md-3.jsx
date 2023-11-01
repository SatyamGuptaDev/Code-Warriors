import React from 'react'
import Slider from './Topic/Slider'

function Md3() {
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

export default Md3
