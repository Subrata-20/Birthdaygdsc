import { useState } from 'react'
import Modal from './components/Modal.jsx'
function App() {

  return (
    <div className='bg-gradient-to-tr from-fuchsia-200 to-pink-300 h-screen w-screen relative overflow-hidden' style={{
      backgroundImage: 'url(night2_LE_auto_x2.jpg)',
      backgroundSize: 'cover', // Adjust the size as needed
      backgroundPosition: 'center', // Center the image
      height: '100vh', // Adjust the height as needed
    }}>
      <Modal/>
    </div>
  )
}

export default App
