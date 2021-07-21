import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h1>Second test</h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      {Home()/* add the <Home> component here */}
      {NavBar()/* write an <About> component here */}
      {About()}
    </div>
  );
}

export default App;
