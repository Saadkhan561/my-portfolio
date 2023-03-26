import "./App.css";

function App() {
  return (
    <header>
      <div className="header-main">
        <div className="header-subdiv">
          <button className="moon">
            <img src="./assets/moon.png" alt="" height={30} width={30}/>
          </button>
          <div className="header-subdiv-item">GITHUB</div>
          <div className="header-subdiv-item">LINKED-IN</div>
        </div>
      </div>
      <div className="intro-div">
        <div className="name-div">
          <h2 id="name-1">Hi...</h2>
          <br />
          <h2 id="name-2">Saad Here...</h2>
        </div>
        <img
          className="profile-img"
          src="./assets/profile-picture.jpg"
          alt=""
        />
        <div className="skill-div">
          <h2>I'm a React JS developer</h2>
        </div>
      </div>
    </header>
  );
}

export default App;
