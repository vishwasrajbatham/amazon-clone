import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>   
        
            <img className='home_image' src='https://www.netrockdeals.com/blog/wp-content/uploads/2021/02/Amazon-Prime-Video.jpg'
             alt="banner"/>{/* banner which fades into the background */}

             <div className='home_row'>

                <Product id="19843"
                        title="The Lean Startup"
                        image="https://books.google.co.in/books/content?id=19forYX7NLQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2tSLRMY_UIIcdx8YBezIlpoYgFBw&w=1280"
                        price={152.36}
                        rating={3}
                />

                <Product id="5972"
                        title="Cold Justice"
                        image="https://images-na.ssl-images-amazon.com/images/I/514zpNyELbL._SX324_BO1,204,203,200_.jpg"
                        price={594}
                        rating={3}
                />

             </div>

            <div className='home_row'>

                <Product id="1688"
                        title="When I Am With You"
                        image="https://images-na.ssl-images-amazon.com/images/I/51r3iTdrzGL._SX322_BO1,204,203,200_.jpg"
                        price={125}
                        rating={3}
                />

                <Product id="8462"
                        title="It Ends With Us: A Novel: Volume 1"
                        image="https://images-na.ssl-images-amazon.com/images/I/51qX2RGyhhL._SX320_BO1,204,203,200_.jpg"
                        price={290}
                        rating={3}
                />

                <Product id="4589"
                        title="The Perfect Murder"
                        image="https://m.media-amazon.com/images/I/51KG1LCYAtL.jpg"
                        price={153}
                        rating={3}
                />

            </div>

            <div className='home_row'>

                <Product id="5624"
                        title="LG 87cm Ultra Wide Curved Gaming LCD Monitor 165Hz 1ms -QHD (2K 3440 x 1440 Pixels) sRGB HDR 10 Color Calibrated, Free Sync Premium, HDM1, 2 DP, 7W Speaker, Tilt & Height Adjust - 34WP65C Black"
                        image="https://m.media-amazon.com/images/I/61Y0JHgpWJL._SX679_.jpg"
                        price={42680}
                        rating={3}
                />

            </div>*

        </div>
    </div>
  )
}

export default Home
