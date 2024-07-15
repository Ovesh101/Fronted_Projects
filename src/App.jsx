


import Accordian from './components/Accordian/Accordian'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadData from './components/LoadData/LoadData'
import Rating from './components/Rating/Rating'
import { menu } from './components/SideBar/menu'
import SideBar from './components/SideBar/SideBar'

function App() {


  return (
    <>
     {/* <Accordian />
     <hr />
     <Rating noOfRating={10} />
     <hr />

     <ImageSlider limit={10} page={1} /> */}

     {/* <LoadData /> */}

     <SideBar menu={menu} />
    </>
  )
}

export default App
