import './App.css';

function App() {
  return (
    <header>
      <div className='header-main'>
        <div className='header-subdiv'>
          <div className='header-subdiv-item'>GITHUB</div>
          <div className='header-subdiv-item'>LINKED-IN</div>
        </div>
      </div>
      <div className='intro-div'>
        <div className='name-div'>
          <h2>Hi...</h2>
          <br />
          <h2>My name is Saad Nadeem Khan</h2>
        </div>
        <img className='profile-img'  src='./assets/profile-picture.jpg' alt=''/>
        <div className="skill-div">
          I'm a React JS Developer X Frontend Developer
        </div>
      </div>
    </header>
  );
}

export default App;
