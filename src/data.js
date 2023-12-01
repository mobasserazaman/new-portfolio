import java from './assets/java.jpeg';
import react from './assets/react.png';
import js from './assets/js.png';

export const CORE_CONCEPTS = [
  {
    image: java,
    title: 'Java',
  },
  {
    image: js,
    title: 'JavaScript',
  },
  {
    image: react,
    title: 'React',
  },
];

export const PROJECTS = [
  {
    title : 'McGill School of Computer Science Website',
    year : 'Fall 2020',
    description : 'Developed a complete website with over 70% of the code base built from scratch. Designed a responsive and interactive front-end using HTML5, CSS and JS as a minimum. Set up a working back-end using PHP to support the dynamic update of contents and MySQL to build an on-server database, and later to connect to it. Utilized XAMPP to create a local web server on the computer to fast-track development and make local testing of the codes feasible. Used SSH to transfer files to the McGill SOCS web server. Collaborated with teammates to choose technology stack, divide tasks, design, and document the project.'
  },
  {
    title : 'Simplified Link State Routing Protocol with Java Socket Programming',
    year : 'Winter 2020',
    description : 'Designed a pure user-space program which simulates the major functionalities of a routing device running a simplified Link State Routing protocol. Implemented a router class and mapped the Process IP and Process Port of each program instance to a simulated IP address attribute used to identify the router in the simulated network space. Added a Link State Database which is a map from the router\'s IP address to the link state description which is originated by the corresponding router and Link State Advertisement structures that summarize the latest link state information of the router. Developed a command line-based terminal interface for the router to allow the user to input the following commands: attach, start, connect, disconnect, detect, neighbours, quit. Some of these commands trigger Link, State Database synchronization and update. Built a weighted graph representing the topology of the network and used Dijkstra’s algorithm to find the shortest path between routers. Implemented a message class that defines the message format transmission among routers.'
  },
  {
    title: 'Logistic Regression and Naive Bayes Winter',
    year: 'Winter 2020',
    description: 'Implemented two classification techniques in Python —logistic regression and naive Bayes from scratch on four distinct datasets and compared the accuracy of both classification techniques on the four datasets. Cleaned the datasets by removing any data with missing or malformed features and used one-hot encoding for categorical variables. Computed basic statistics such as distributions of the positive vs. negative classes, distributions of some of the numerical features, correlations between the features etcetera to get a better understanding of the data. Implemented a script to run k-fold cross validation. Compared the accuracy of naive Bayes and logistic regression on the four datasets. Compared the accuracy of the two models as a function of the size of the dataset (by controlling the training size).',
  },
  {
    title: 'Operating System using C',
    year : 'Winter 2019',
    description : 'Built an OS Shell which accepts commands such as help, quit, set VAR STRING, print VAR, exec prog1 prog2 prog3, run SCRIPT.TXT etcetera. Implemented the following data structures: CPU, PCB, ready queue, and RAM and the following algorithms: scheduler, task switch, and basic memory management. Added OS Boot Sequence (Prepare the Backing Store and Prepare RAM for paging) to create necessary OS structures. Added Memory Manager (Launcher, PCB modifications, Page Fault, Task Switch) to handle memory allocation for processes. Implemented Partition Table, File Allocation Table, Block buffer along with functions such as partition, mount, read/writeBlock etcetera to add some of the functionalities of a File System to the OS. Wrote a public IOScheduler function to handle up to 10 requests from exec programs.',
  }
];

export const EXAMPLES = {
  components: {
    description: `
Bachelor of Science in Software Engineering
McGill University, Canada      
2017 - 2021

Relevant Courses: Calculus I,II and III, 
Discrete Structures, Algorithms and Data Structures,
Algorithm Design, Operating Systems,
Concurrent Programming, Applied Machine Learning,
Computer Networks, Fund. of Computer Vision,
Software Validation, Software Delivery,
Software Design, Basics of Web Development, 
Introduction to C++`,
  },
props: {
    description:`
Software Engineer
HubSpot, Canada April 2022 - November 2022

● Designed and developed user facing features for
HubSpot Sales Chrome Extension and Outlook Add-In
● Investigated issues reported by customers and 
deployed fixes to production.
● Wrote unit tests as well as Selenium acceptance 
tests for automated quality assurance.
● Extensively used ReactJS, Redux, TS, JS, JSX, CSS, 
HTML etcetera for development`
  },
  skills: {
    description: `
Programming Languages - JavaScript, Java, HTML, 
CSS, Python, C, C++, TypeScript, C#, SQL, PHP

Web Frameworks and Libraries - React, Bootstrap, 
Django

Python Libraries - TensorFlow, Pandas, NumPy

Development Tools - Visual Studio Code, Eclipse,
Sublime Text, Atom

Publishing Software - Microsoft Word, PowerPoint, 
Outlook

Operating Systems - Linux, MacOS, Windows OS

Project Management and Communication - Slack

Version Control - GitHub

Miscellaneous - Docker, Unity, LaTeX, TravisCI, 
Maven, Gradle, Heroku
`},
};