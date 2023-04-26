// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// import Navbar from './Components/Navbar'
// import TextForm from './Components/TextForm'
// import About from './Components/About'
import App from './App'
// import asabenehImage from './images/asabeneh.jpg'

// Header Component
// const Header = () => (
//   <>

//   <Navbar title="TextUtils" />
//   <div class="container my-3">
//     {/* <TextForm heading = "Enter the text to analyze" /> */}
//     <About />
//   </div>

//   </>

// )


const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)