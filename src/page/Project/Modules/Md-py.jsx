import React from 'react'
import Slider from './Topic/Slider'
import quizinfo  from '../Quiz/quiz.json'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Learn from './Learn';
import Try from '../gameComp/Game';
import { useEffect,useState } from 'react';

export function PythonModule1() {
  // Module content organized according to the provided structure
  const module1 = [
    {
      title: 'Lists and Dictionaries',
      links: [
        'Link-to-lists-guide',
        'Link-to-dictionaries-guide',
      ],
      quizinfo,
      code: 'py-m1t5',
    },
    {
      title: 'Introduction to Python',
      links: [
        'https://www.python.org/',
        'https://docs.python.org/3/tutorial/index.html',
      ],
      quizinfo,
      code: 'py-m1t0',
    },
    {
      title: 'Setting Up Python Environment',
      links: [
        'Link-to-installation-guide',
        'Link-to-IDE-setup-guide',
      ],
      quizinfo,
      code: 'py-m1t1',
    },
    {
      title: 'Basic Syntax and Data Types',
      links: [
        'https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator',
        'https://docs.python.org/3/tutorial/introduction.html#strings',
      ],
      quizinfo,
      code: 'py-m1t2',
    },
    {
      title: 'Control Flow and Loops',
      links: [
        'https://docs.python.org/3/tutorial/controlflow.html',
        'https://www.geeksforgeeks.org/python-programming-language/',
      ],
      quizinfo,
      code: 'py-m1t3',
    },
    {
      title: 'Functions and Modules',
      links: [
        'https://docs.python.org/3/tutorial/controlflow.html#defining-functions',
        'https://realpython.com/defining-your-own-python-function/',
      ],
      quizinfo,
      code: 'py-m1t4',
    },

  ];

  // Information about each module topic
  const infoArray = [
    {
      name: 'Lists and Dictionaries',
      des: 'Working with lists and introduction to dictionaries.',
      isUnlock: false,
    },
    {
      name: 'Introduction to Python',
      des: 'Overview of Python, its popularity, and use cases.',
      isUnlock: true,
    },
    {
      name: 'Setting Up Python Environment',
      des: 'Installing Python and setting up an Integrated Development Environment (IDE).',
      isUnlock: true,
    },
    {
      name: 'Basic Syntax and Data Types',
      des: 'Variables and data types (int, float, str), operators, and expressions.',
      isUnlock: true,
    },
    {
      name: 'Control Flow and Loops',
      des: 'Conditional statements (if, elif, else), looping structures (for, while).',
      isUnlock: false,
    },
    {
      name: 'Functions and Modules',
      des: 'Defining and calling functions, importing and using modules.',
      isUnlock: false,
    },

  ];

  // Render the component
  return (
    <div className="w-full h-full bg-black" style={{ backgroundColor: 'black' }}>
      <Routes>
        <Route
          path="/"
          element={<Slider infoArray={infoArray} topicInfo={module1} module={'py-1'} />}
        />
        <Route
          path="/learn/:topic"
          element={<Learn topicInfo={module1} module={'py-1'} />}
        />
        <Route
          path="/quiz/:quizTopic/"
          element={<Try topicInfo={module1} quizObj={quizinfo} />}
        />
      </Routes>
    </div>
  );
}




export function PythonModule2() {
  const module2 = [
    {
      title: 'Working with JSON in Python',
      links: [
        'https://docs.python.org/3/library/json.html',
        'https://realpython.com/python-json/',
      ],
      quizinfo,
      code: 'py-m2t5',
    },
    {
      title: 'Lists and Tuples',
      links: [
        'https://docs.python.org/3/tutorial/introduction.html#lists',
        'https://docs.python.org/3/tutorial/introduction.html#tuples-and-sequences',
      ],
      quizinfo,
      code: 'py-m2t0',
    },
    {
      title: 'Dictionaries and Sets',
      links: [
        'https://docs.python.org/3/tutorial/datastructures.html#dictionaries',
        'https://docs.python.org/3/tutorial/datastructures.html#sets',
      ],
      quizinfo,
      code: 'py-m2t1',
    },
    {
      title: 'More on Strings',
      links: [
        'https://docs.python.org/3/tutorial/introduction.html#more-on-strings',
        'https://realpython.com/python-f-strings/',
      ],
      quizinfo,
      code: 'py-m2t2',
    },
    {
      title: 'File Handling and Exception Handling',
      links: [
        'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files',
        'https://realpython.com/read-write-files-python/',
        'https://realpython.com/python-exceptions/',
      ],
      quizinfo,
      code: 'py-m2t3',
    },
    {
      title: 'Regular Expressions in Python',
      links: [
        'https://docs.python.org/3/library/re.html',
        'https://realpython.com/regex-python/',
      ],
      quizinfo,
      code: 'py-m2t4',
    },

  ];

  const infoArray = [
    {
      name: 'Working with JSON in Python',
      des: 'Parsing and generating JSON data in Python.',
      isUnlock: false,
    },
    {
      name: 'Lists and Tuples',
      des: 'Creating and manipulating lists, understanding tuples in Python.',
      isUnlock: true,
    },
    {
      name: 'Dictionaries and Sets',
      des: 'Working with dictionaries and exploring sets in Python.',
      isUnlock: true,
    },
    {
      name: 'More on Strings',
      des: 'Advanced string manipulation and string formatting in Python.',
      isUnlock: false,
    },
    {
      name: 'File Handling and Exception Handling',
      des: 'Reading from and writing to files, handling exceptions in Python.',
      isUnlock: false,
    },
    {
      name: 'Regular Expressions in Python',
      des: 'Using regular expressions for pattern matching in Python.',
      isUnlock: false,
    },

  ];

  return (
    <div className="w-full h-full bg-black" style={{ backgroundColor: 'black' }}>
      <Routes>
        <Route
          path="/"
          element={<Slider infoArray={infoArray} topicInfo={module2} module={'py-2'} />}
        />
        <Route path="/learn/:topic" element={<Learn topicInfo={module2} module={'py-2'} />} />
        <Route
          path="/quiz/:quizTopic"
          element={<Try topicInfo={module2} quizObj={quizinfo} />}
        />
      </Routes>
    </div>
  );
}




export function PythonModule3() {
  const module3 = [
    {
      title: 'Decorators and Generators',
      links: [
        'https://realpython.com/decorators-python/',
        'https://realpython.com/introduction-to-python-generators/',
      ],
      quizinfo,
      code: 'py-m3t0',
    },
    {
      title: 'Concurrency and Parallelism',
      links: [
        'https://realpython.com/python-concurrency/',
        'https://realpython.com/python-multithreading/',
      ],
      quizinfo,
      code: 'py-m3t1',
    },
    {
      title: 'Database Interaction with Python',
      links: [
        'https://realpython.com/python-sql-libraries/',
        'https://docs.python.org/3/library/sqlite3.html',
      ],
      quizinfo,
      code: 'py-m3t2',
    },
    {
      title: 'Web Development with Flask (Basic)',
      links: [
        'https://flask.palletsprojects.com/en/2.1.x/',
        'https://realpython.com/flask-by-example-series-part-1/',
      ],
      quizinfo,
      code: 'py-m3t3',
    },
    {
      title: 'Testing and Debugging',
      links: [
        'https://realpython.com/python-testing/',
        'https://realpython.com/python-debugging-pdb/',
      ],
      quizinfo,
      code: 'py-m3t4',
    },
    {
      title: 'Version Control with Git',
      links: [
        'https://git-scm.com/book/en/v2/Getting-Started-Git-Basics',
        'https://realpython.com/tutorials/git/',
      ],
      quizinfo,
      code: 'py-m3t5',
    },
  ];

  const infoArray = [
    {
      name: 'Decorators and Generators',
      des: 'Decorators and generators in Python.',
      isUnlock: true,
    },
    {
      name: 'Concurrency and Parallelism',
      des: 'Concurrency and parallelism in Python.',
      isUnlock: true,
    },
    {
      name: 'Database Interaction with Python',
      des: 'Interacting with databases using Python.',
      isUnlock: true,
    },
    {
      name: 'Web Development with Flask (Basic)',
      des: 'Building a basic web application using Flask.',
      isUnlock: false,
    },
    {
      name: 'Testing and Debugging',
      des: 'Testing and debugging Python code.',
      isUnlock: false,
    },
    {
      name: 'Version Control with Git',
      des: 'Version control with Git and GitHub.',
      isUnlock: false,
    },
  ];

  return (
    <div className="w-full h-full bg-black" style={{ backgroundColor: 'black' }}>
      <Routes>
        <Route
          path="/"
          element={<Slider infoArray={infoArray} topicInfo={module3} module={'py-md-3'} />}
        />
        <Route
          path="/learn/:topic"
          element={<Learn topicInfo={module3} module={'py-md-3'} />}
        />
        <Route
          path="/quiz/:quizTopic"
          element={<Try topicInfo={module3} quizObj={quizinfo} />}
        />
      </Routes>
    </div>
  );
}

  

export function PythonModule4() {
  const module4 = [
    {
      title: 'Final Project',
      topics: [
        'Capstone project to bring together all learned concepts',
        'Emphasis on good coding practices and project structure',
      ],
      links: [
        'https://realpython.com/python-projects/',
        'https://realpython.com/python-application-layouts/',
      ],
      quizinfo,
      code: 'py-m4t5',
    },
    {
      title: 'Web Development with Django (Advanced)',
      topics: [
        'Building a more complex web application',
        'Django models, views, and templates',
      ],
      links: [
        'https://docs.djangoproject.com/en/3.2/',
        'https://docs.djangoproject.com/en/3.2/topics/templates/',
      ],
      quizinfo,
      code: 'py-m4t0',
    },
    {
      title: 'Data Science and Machine Learning with Python',
      topics: [
        'Overview of data science and machine learning',
        'Basic machine learning algorithms with scikit-learn',
      ],
      links: [
        'https://scikit-learn.org/stable/documentation.html',
        'https://www.datacamp.com/community/tutorials/machine-learning-python',
      ],
      quizinfo,
      code: 'py-m4t1',
    },
    {
      title: 'Network Programming',
      topics: [
        'Socket programming in Python',
        'Working with protocols like HTTP',
      ],
      links: [
        'https://realpython.com/python-sockets/',
        'https://developer.mozilla.org/en-US/docs/Web/HTTP',
      ],
      quizinfo,
      code: 'py-m4t2',
    },
    {
      title: 'Building a RESTful API',
      topics: [
        'Design principles of REST',
        'Creating a RESTful API with Flask or Django',
      ],
      links: [
        'https://restfulapi.net/',
        'https://www.django-rest-framework.org/',
      ],
      quizinfo,
      code: 'py-m4t3',
    },
    {
      title: 'Cybersecurity with Python',
      topics: [
        'Introduction to ethical hacking',
        'Using Python for cybersecurity tasks',
      ],
      links: [
        'https://www.ethicalhacker.net/',
        'https://realpython.com/python-cybersecurity/',
      ],
      quizinfo,
      code: 'py-m4t4',
    },

  ];

  const infoArray = [
    {
      name: 'Final Project',
      des: 'Capstone project emphasizing good coding practices and project structure.',
      isUnlock: false,
    },
    {
      name: 'Web Development with Django (Advanced)',
      des: 'Building a more complex web application using Django models, views, and templates.',
      isUnlock: true,
    },
    {
      name: 'Data Science and Machine Learning with Python',
      des: 'Overview of data science and basic machine learning algorithms with scikit-learn.',
      isUnlock: true,
    },
    {
      name: 'Network Programming',
      des: 'Socket programming in Python and working with protocols like HTTP.',
      isUnlock: false,
    },
    {
      name: 'Building a RESTful API',
      des: 'Design principles of REST and creating a RESTful API with Flask or Django.',
      isUnlock: false,
    },
    {
      name: 'Cybersecurity with Python',
      des: 'Introduction to ethical hacking and using Python for cybersecurity tasks.',
      isUnlock: false,
    },

  ];

  return (
    <div className="w-full h-full bg-black" style={{ backgroundColor: 'black' }}>
      <Routes>
        <Route
          path="/"
          element={<Slider infoArray={infoArray} topicInfo={module4} module={'py-4'} />}
        />
        <Route
          path="/learn/:topic"
          element={<Learn topicInfo={module4} module={'py-4'} />}
        />
        <Route
          path="/quiz/:quizTopic"
          element={<Try topicInfo={module4} quizObj={quizinfo} />}
        />
      </Routes>
    </div>
  );
}

