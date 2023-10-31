import React from 'react'

const Summary = () => {
  return (
    <>
          <div className="card-summary">
    <img class="hero-image" src="https://www.amazingviralnews.com/wp-content/uploads/2020/10/9BWIBjJb5t.jpg"/>
    <div class="data-container">
      <h2 class="title-order">Order Summary</h2>
      <p class="order-description">Import Address here</p>
      <p class="order-description">Service Name</p>
      <div class="amount-container">
        <img src="images/icon-music.svg" alt=""/>
        <div class="plan-description">
          <strong>Amount</strong>
          <p>$59.99</p>

        </div>
        <a href="#">Change</a>
      </div>
      <button class="proceed-button-order">Proceed to payment</button>
      <button class="cancel-button-order">Cancel order</button>
    </div>
  </div>
    </>
  )
}

export default Summary