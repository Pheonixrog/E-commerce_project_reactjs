import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product} = props;
    const{addToCart} =useContext(ShopContext);

  return (
    <div className="productdisplay">
     <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />

        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
     </div>
     <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />

            <img src={star_icon} alt="" />

            <img src={star_icon} alt="" />

            <img src={star_dull_icon} alt="" />

            <p>(122)</p>


        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Distinctio quasi, ad harum quidem porro praesentium ipsa 
         laborum atque totam soluta ratione quam dolorem tempora 
         numquam minus facere, impedit tempore! Commodi in quod 
         sint expedita, dolor alias exercitationem officia, ad 
         itaque repellendus quidem quam. Perferendis quasi ipsum 
         animi cum minima? Quis aperiam eum vel qui minima!

            
        </div>
        <div className="productdisplay-right-size">
            <h1>Selevt Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>Xl</div>
                <div>XXL</div>

            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} >Add To Cart</button>
        <p className="productdisplay-right-category">
            <span>
                Category:
            </span>
            Women , T-shit ,Crop top
        </p>
        <p className="productdisplay-right-category">
            <span>
                Tags:
            </span>
            Morden , Latest 
        </p>
        
     </div>
    </div>
  )
}

export default ProductDisplay