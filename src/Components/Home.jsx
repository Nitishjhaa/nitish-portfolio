import { useState,useRef,useEffect} from 'react'
import Welcome from './Welcome'
import Layout from './Layout'

function Home() {
  const [view, setView] = useState(true)
  let ref = useRef()
  
  useEffect( () => {
    setTimeout( () => {
      setView(false)
    },3710)
  },[])

  return (
  <>
  <div ref={ref} className=''>
    {view?<Welcome />:<Layout />}
  </div>
   
  </>
  )
}

export default Home