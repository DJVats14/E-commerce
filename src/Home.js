import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img 
                    className='home_image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg'
                    alt=''
                />
            </div>

            <div className='home_row'>
                <Product
                    id='1' 
                    title = 'Aashirvaad Iodized Salt, with 4-Step advantage, 1kg '
                    price = {49}
                    image = 'https://m.media-amazon.com/images/I/81NrftYFxsL._AC_UL480_QL65_.jpg'
                    rating = {5}
                />
                <Product
                    id='2' 
                    title = 'Happilo 100% Natural Premium Californian Almonds, 200g '
                    price = {149}
                    image = 'https://m.media-amazon.com/images/I/71Nl5jlx+oL._AC_UL480_QL65_.jpg'
                    rating = {4}
                />
            </div>

            <div className='home_row'>
                <Product 
                    id='3'
                    title = 'Himalaya Baby Powder (400g) '
                    price = {99}
                    image = 'https://m.media-amazon.com/images/I/61qHFEQe0nL._AC_UL480_QL65_.jpg'
                    rating = {1}
                />
                <Product
                    id='4' 
                    title = 'Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant '
                    price = {1999}
                    image = 'https://m.media-amazon.com/images/I/719ZywAmvOL._AC_UL480_QL65_.jpg'
                    rating = {4}
                />
                <Product
                    id='5' 
                    title = 'Milton Aqua 1000 Stainless Steel Water Bottle, 950 ml, Silver '
                    price = {499}
                    image = 'https://m.media-amazon.com/images/I/61X1b09mK0L._AC_UL480_QL65_.jpg'
                    rating = {2}
                />
            </div>
                
            <div className='home_row'>
                <Product 
                    id='6'
                    title = 'Canon Pixma G3000 All-in-One Wireless Ink Tank Colour Printer '
                    price = {14599}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/41BG7xNB4%2BL.jpg'
                    rating = {3}
                />
            </div>
        </div>
    )
}

export default Home
