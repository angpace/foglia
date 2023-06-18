import React from 'react'
import { useParams } from 'react-router-dom';
// import { Button } from '../../components/ButtonElements';
const Shop = () => {
    const { shop_id } = useParams();

  return (
    <div>Shop {shop_id} now!
   <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1NKNtOHDN07vd2GFwcbwYiHt"
  publishable-key="pk_test_51NCVbVHDN07vd2GFdJafHvJ1rTxtCJu8BZW5NMuvD4QiivXlf1hjnJuS5MMEC5QBz9tfIwsPIUDMtKknJBahUChZ00BZI6oWqk"
>
</stripe-buy-button>
</div>
  )
}

export default Shop