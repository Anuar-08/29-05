import './App.css'
import LoginForm from './components/LoginForm'
import backgroundImage from './assets/01.png'

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingLeft: '5vw'


        
      }}
    >
        <div
          style={{
              position: 'absolute',
              left: '27vw',
              top: '37%'
          }}
      >
      <LoginForm />
         </div> 
      </div>
     )
}

export default App