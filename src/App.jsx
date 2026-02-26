/*
Each story object has these properties:
- objectID: unique identifier (used as React key)
- title: title of the article
- url: link to the article
- author: who posted it
- points: popularity score
- num_comments: number of comments

React key: objectID
Reason: Using objectID ensures each element has a stable, unique key for React's reconciliation.

This structure is realistic because real APIs like Hacker News return each story as an object with these exact properties.
*/
const stories = [
  {
    objectID: 1,
    title: "React 18 Released",
    url: "https://reactjs.org/blog/2022/03/29/react-v18.html",
    author: "Dan Abramov",
    points: 150,
    num_comments: 30
  },
  {
    objectID: 2,
    title: "Vite 4.0 Announced",
    url: "https://vitejs.dev/blog.html",
    author: "Evan You",
    points: 120,
    num_comments: 25
  },
  {
  objectID: 3,
  title: "JavaScript ES2024 Features",
  url: "https://example.com/es2024",
  author: "TC39",
  points: 200,
  num_comments: 45
}
]
import './App.css'
const courseTitle = "React Basics"
function App() {
  const studentName = "Fatma"
  const student = { name: "Fatma", age: 20, track: "Web Development" }
  function sayHello() {
    return `Hello, ${studentName}! Welcome to ${courseTitle}.`
  }
  return (
    <div>
      <h1>Hello, my name is Toma!</h1>
      <p>My name is {studentName}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="studentInpur">Enter your name</label>
      <input type="text" id="studentInput"/>
      <p>Student Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
      {stories.map((story) => (
         <div key={story.objectID}>
    <h3>
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        {story.title}
      </a>
    </h3>
    <p>Author: {story.author}</p>
    <p>Points: {story.points}</p>
    <p>Comments: {story.num_comments}</p>
  </div>
))}
    </div>
  )
}

export default App
// One thing I understand well in this lab:
// I understand how to create a functional component and display variables inside JSX.

// One thing that is still confusing:
// Sometimes I forget when to use {} vs plain text in JSX.

// One mistake I made and fixed:
// I initially tried to render the whole object {student} directly, which caused an error, so I switched to using {student.name}, {student.age}, etc.