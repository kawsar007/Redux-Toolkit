import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../redux/features/modalSlice';
import CartItems from './CartItems';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { amount, cartItems, total } = useSelector((store) => store.cart);
    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItems key={item.id} {...item} />
                } )}
            </div>
            <footer>
                <hr/>
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button 
                onClick={() => {
                    dispatch(openModal());
                  }} className='btn clear-btn'>
                    clear cart
                </button>
            </footer>
        </section>
    )
}

export default CartContainer;