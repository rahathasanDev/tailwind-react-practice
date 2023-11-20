import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >
 

    <nav className="bg-sky-500 emerald-500 p-3  ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#" className="text-black text-3xl font-serif">Free Palestine</a>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-5 text-lg font-semibold">
            <li><a href="#" className="text-green hover:text-red-500">Home</a></li>
            <li><a href="#" className="text-green hover:text-red-500">About</a></li>
            <li><a href="#" className="text-green hover:text-red-500">Services</a></li>
            <li><a href="#" className="text-green hover:text-red-500">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div >
    <h1 className='text-5xl m-3 font-semibold ' >Palestine is Ours </h1>
      <h3 className='text-3xl font-serif p-8'>In the land where olive trees stand tall,
Beneath a sky that has seen it all.
Palestine whispers tales of yore,
Of struggles endured, dreams to restore.

Amidst ancient stones, a resilient song,
Echoes of history, both bitter and strong.
In the embrace of sunsets, golden and warm,
A longing for peace weathers every storm.

Silhouettes dance on the shores of despair,
Yet hope blooms in the Palestinian air.
A tapestry woven with threads of strife,
Threads of resilience, the essence of life.

Gaza to Bethlehem, Hebron to the sea,
A mosaic of dreams, where hearts roam free.
Jerusalem's call echoes through time,
A melody of courage, an anthem to climb.

In the moonlit night, stars softly weep,
For the children of Palestine, in quiet sleep.
Yet, in every tear, a resolve takes flight,
To carve a path through the darkest night.

May peace find its way to this ancient land,
A land where love and understanding stand.
In the echo of prayers, in every sunrise,
May the world unite, where justice lies.</h3>
    </div>
 

    </div>
      
      <p className='text-2xl list-none m-6 p-4'>
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
