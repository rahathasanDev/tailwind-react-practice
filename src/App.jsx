import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl m-3 ' >Palestine is Ours </h1>
      <p className='text-xl list-none m-6 p-4'>
        <li className='li'>1. "The only way to do great work is to love what you do." - Steve Jobs</li>
        <li>2. "Believe you can and you're halfway there." - Theodore Roosevelt
        </li>
        <li>3. "Be the change that you wish to see in the world." - Mahatma Gandhi
        </li>
        <li>
          4. "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</li>
        <li>
          5. "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt</li>
        <li>6. "In the middle of difficulty lies opportunity." - Albert Einstein</li>
        <li>

          7. "The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt</li>
        <li>
          8. "Your time is limited, don't waste it living someone else's life." - Steve Jobs
        </li>
        <li>

          9. "Do not wait to strike till the iron is hot, but make it hot by striking." - William Butler Yeats</li>
        <li>  10. "The best way to predict the future is to create it." - Peter Drucker
        </li>
        










        Feel free to reflect on these quotes and let them inspire you in different aspects of your life.</p>

    </>
  )
}

export default App
