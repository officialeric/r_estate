import Searchbar from '../../components/searchbar/Searchbar'
import './homepage.scss'

function Homepage() {
  return (
    <div className="homepage">
        <div className="textContainer">
            <div className="wrapper">

            <h1 className='title'>
                Find Real Estate & Get Your Dream Place
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, a ipsum. 
                Atque error ipsum ad distinctio, earum doloribus nihil aperiam repellendus ex. 
                Laboriosam minus ducimus unde necessitatibus sapiente? 
            </p>
            <Searchbar />

            <div className="boxes">
                <div className="box">
                    <h2>16+</h2>
                    <h3>Years of Experience</h3>
                </div>
                <div className="box">
                    <h2>200</h2>
                    <h3>Award Gained</h3>
                </div>
                <div className="box">
                    <h2>1200+</h2>
                    <h3>Property Ready </h3>
                </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default Homepage