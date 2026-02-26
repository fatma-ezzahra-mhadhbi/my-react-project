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
    </div>
  )
}

export default App