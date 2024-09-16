
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo-box'>
        <img src="./1.png" alt="logo" className='logo'></img>
        <h2>Sign in to Twitter</h2>
        <button>
          <img src="./2.png" alt="logo" ></img>
          Sign in with Google
        </button>
        <button>
          <img src="./3.png" alt="logo" ></img>
          Sign in with Apple
        </button>
        <hr></hr>
        <span>Or</span>
        <form>
          <input type="text" placeholder='Phone, email, or username'></input>
          <button>Next</button>
        </form>

        <button>Forget Password</button>
        <p>Don't have an account <a>Sign up</a></p>
      </div>
      
    </div>
  );
}

export default App;
