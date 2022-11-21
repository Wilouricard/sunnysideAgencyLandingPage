import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Article from './components/Article'
import Colored from './components/Colored'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar />
      <Hero /> 
      <Article 
        image="\images\mobile\image-transform.jpg"
        title={"Transform your brand"}
        text={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'} />
      <Article 
        image="\images\mobile\image-stand-out.jpg"
        title={"Stand out to the right audience"}
        text={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places..'} />
      <Colored 
        image="\images\mobile\image-graphic-design.jpg"
        title={"Graphic design"}
        text={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."}
      />
    </div>
  )
}

export default App
