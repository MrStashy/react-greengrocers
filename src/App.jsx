import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import StoreCard from './Components/StoreCard'
import { useState } from 'react'



export default function App() {
  const [cart, addToCart] = useState([])

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <StoreCard initialStoreItems={initialStoreItems} addToCart={addToCart} cart={cart}/>
        </ul>
      </header>


      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
