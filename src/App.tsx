import MobileUI from './mobileUI'
import DesktopUI from './desktopUI'
import './App.css'

function App() {
  return (
    <>
      <div className='scroll-smooth'>
        <DesktopUI />
        <MobileUI />
      </div>
    </>
  )
}

export default App