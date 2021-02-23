import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img 
                    className='checkout_ad'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/Dec_2020/V2/Modern_1500X200_RevisedD.jpg'
                    alt=''
                />

                <div>
                    <h4>Hello, {user?.email}</h4> 
                    <h2 className='checkout_title'>
                        Your Shopping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id= {item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating= {item.rating} 
                        />
                    ))}
                </div>
            </div>

            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
