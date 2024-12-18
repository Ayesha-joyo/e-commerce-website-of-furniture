
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LiaSearchPlusSolid } from "react-icons/lia";



export default function Home(){
  return(
    <div className="main-div">
<div className="contact">

<ul>
  
<MdOutlineMailOutline className="mail-logo" />

  <li className="email">mhhasanul@gmail.com</li>
  <FiPhoneCall  className="call-logo"/>
  <li className="call">(12345)6789</li>
  <li className="english">English</li>
  <MdOutlineExpandMore  className="more"/>
  <li className="usd">USD</li>
  <MdOutlineExpandMore  className="more1"/>
  <li className="login">Login</li>
  <IoPersonOutline  className="login-icon"/>
  <li className="wishlist">Wishlist</li>
  <CiHeart  className="heart"/>
  <CiShoppingCart  className="cart"/>
</ul>
</div>
<div className="main1">
<ul>
  <li className="hekto">Hekto</li>
  <li className="home">Home</li>
  <MdOutlineExpandMore  className="more2"/>
  <li className="pages">Pages</li>
  <li className="products">Products</li>
  <li className="blog">Blog</li>
  <li className="shop">Shop</li>
  <li className="contact1">Contact</li>
  <li className="bar"></li>
  <li className="pink"></li>
  <CiSearch  className="search"/>

</ul>
</div>
<div className="main2">
<img src="bulb.png" alt="pic" className="image"></img>
<div className="headings">
<h1 className="first-heading">Best Furniture For Your Castle...</h1>
<h2 className="second-heading"> <b>New Furniture Collection <br />  Trends in 2020</b></h2>
<h3 className="third-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.</h3>
</div>
<div className="shop-now-button">
 <h1 className="shop-now">Shop Now</h1>
</div>
<div className="pink-sofa">
  

<img src="pink-sofa1.png" alt="pink-sofa" className="pink-sofa1" style={{ display: 'block' }} />
</div>


<div>
  <div className="main3">
  Featured Products
  </div>
  <div className="first-item">
    


  <div className="first">
    <img src="first-item.png" alt="chair" className="chair"></img>
    </div>
    <h1 className="name-of-chair">
    Cantilever Chair
    </h1>
    
    <div  className="chair-line1">
    </div>
    <div className="chair-line2">
      
    </div>
    <div className="chair-line3">
      
    </div>
    <h2 className="chair-code">Code - Y523201</h2>
    <h3 className="chair-price">$42.00</h3>
  </div>
  <div className="second-item">
    <div className="second">
      <img src="second-item.png" alt="chair" className="chair2"></img>
      <CiShoppingCart  className="cart2"/>
      <CiHeart  className="heart2"/>
      <LiaSearchPlusSolid  className="search2" />
      <div className="view-details-button">
      <h1 className="view-details">  View Details</h1>
      </div>
      <h1 className="chair2-name">Cantilever Chair</h1>
      <div className="chair2-line1"></div>
    </div>
    <div className="chair2-line2">
      
    </div>
    <div className="chair2-line3">
      
    </div>
<h1 className="chair2-code">Code - Y523201</h1>
<h3 className="chair2-price">$42.00</h3>
  </div>
  <div className="third-item">
  <div className="third">
    <img src="third-item.png"alt="chair"className="chair3"></img>
  </div>
  <h1 className="chair3-name">Cantilever Chair</h1>
  <div className="chair3-line1">

  </div>
  <div className="chair3-line2">
      
      </div>
      <div className="chair3-line3">
        
      </div>
      <h1 className="chair3-code">Code - Y523201</h1>
<h3 className="chair3-price">$42.00</h3>
    </div>
    <div className="forth-item">
  <div className="forth">
    <img src="forth-item.png"alt="chair"className="chair4"></img>
  </div>
  <h1 className="chair4-name">Cantilever Chair</h1>
  <div className="chair4-line1">

  </div>
  <div className="chair4-line2">
      
      </div>
      <div className="chair4-line3">
        
      </div>
      <h1 className="chair4-code">Code - Y523201</h1>
<h3 className="chair4-price">$42.00</h3>
    </div>
    <div className="main4"> Leatest Products</div>
    <ul className="ul-li2">
      <li className="new-arrival">New Arrival </li>
      <li className="best-seller">Best Seller</li>
      <li className="featured">Featured</li>
      <li className="special-offer">Special Offer</li>
    </ul>
    </div>
    <div className="items">
      <img src="item1.png" alt="picture" className="item1"></img>
      <h1 className="item1-name">Comfort Handy Craft</h1>
      <h2 className="item1-price">$42.00</h2>
      <h3 className="item1-price2">$65.00</h3>
    </div>
    <div className="items2">
<img src="item2.png" alt="picture" className="item2-pic"></img>
<CiShoppingCart  className="cart3"/>
<CiHeart  className="heart3"/>
<LiaSearchPlusSolid  className="search3" />
<h1 className="item2-name">Comfort Handy Craft</h1>
      <h2 className="item2-price">$42.00</h2>
      <h3 className="item2-price2">$65.00</h3>
    </div>
    <div className="item3">
<img src="first-item.png" alt="pic" className="item3-pic"></img>
<h1 className="item3-name">Comfort Handy Craft</h1>
      <h2 className="item3-price">$42.00</h2>
      <h3 className="item3-price2">$65.00</h3>
    </div>
    <div className="item4">
      <img src="item4-pic.png" alt="picture" className="item4-pic"></img>
      <h1 className="item4-name">Comfort Handy Craft</h1>
      <h2 className="item4-price">$42.00</h2>
      <h3 className="item4-price2">$65.00</h3>
    </div>
    <div className="item5">
      <img src="item5-pic.png" alt="picture" className="item5-pic"></img>
      <h1 className="item5-name">Comfort Handy Craft</h1>
      <h2 className="item5-price">$42.00</h2>
      <h3 className="item5-price2">$65.00</h3>
    </div>
    <div className="item6">
      <img src="item6-pic.png" alt="picture" className="item6-pic"></img>
      <h1 className="item6-name">Comfort Handy Craft</h1>
      <h2 className="item6-price">$42.00</h2>
      <h3 className="item6-price2">$65.00</h3>
    </div>
    
    <div className="main5">What Shopex Offer!

    </div>
    <div className="service1">
      <img src="service1-pic.png" alt="picture" className="service1-pic"></img>
      <h1 className="service1-name">24/7 Support</h1>
      <h2 className="service1-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h2>
    </div>
    <div className="service2">
      <img src="service2-pic.png" alt="picture" className="service2-pic"></img>
      <h1 className="service2-name">24/7 Support</h1>
      <h2 className="service2-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h2>
    </div>
    <div className="service3">
      <img src="service3-pic.png" alt="picture" className="service3-pic"></img>
      <h1 className="service3-name">24/7 Support</h1>
      <h2 className="service3-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h2>
    </div>
    <div className="service4">
      <img src="service4-pic.png" alt="picture" className="service4-pic"></img>
      <h1 className="service4-name">24/7 Support</h1>
      <h2 className="service4-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h2>
    </div>
<div className="main6">
<div className="main6-1">
  <img src="blue-sofa-back.png" alt="pink" className="blue-sofa-back"></img>
  <img src="blue-sofa-pic.png" alt="blue-sofa" className="blue-sofa-pic"></img>
  <h1 className="blue-sofa-name"><b>Unique Features Of leatest & <br/>
  Trending Poducts</b></h1>
  <img src="pink-dot.png" alt="pink-dot"className="pink-dot"></img>
  <h2 className="pink-dot-text">All frames constructed with hardwood solids and laminates</h2>
  <img src="blue-dot.png"alt="blue-dot" className="blue-dot"></img>
  <h3 className="blue-dot-text">Reinforced with double wood dowels, glue, screw - nails corner <br/>
  blocks and machine nails</h3>
  <img src="green-dot.png" alt="green-dot" className="green-dot"></img>
  <h4 className="green-dot-text">Arms, backs and seats are structurally reinforced</h4>
  <div className="add-to-cart-button">
    <h1 className="add-to-cart">Add to Cart</h1>
    <h2 className="italian-sofa"><b>B&B Italian Sofa </b></h2>
    <h3 className="blue-sofa-price">$32.00</h3>
  </div>
</div>
<div className="trending-products">
<b>Trending Products</b>

</div>
<div className="trending-product1">
<div className="product1-div">
  <img src="trending-product1.png"alt="chair" className="trending-product1-pic"></img>
  </div>
  <h1 className="trending-product1-name">Cantilever chair</h1>
<h2 className="trending-product1-price">$26.00 </h2>
<h3 className="trending-product1-price2">$42.00</h3>
</div>
<div className="trending-product2">
<div className="product2-div">
  <img src="trending-product2.png"alt="chair" className="trending-product2-pic"></img>
  </div>
  <h1 className="trending-product2-name">Cantilever chair</h1>
<h2 className="trending-product2-price">$26.00 </h2>
<h3 className="trending-product2-price2">$42.00</h3>
</div>
<div className="trending-product3">
<div className="product3-div">
  <img src="trending-product3.png"alt="chair" className="trending-product3-pic"></img>
  </div>
  <h1 className="trending-product3-name">Cantilever chair</h1>
<h2 className="trending-product3-price">$26.00 </h2>
<h3 className="trending-product3-price2">$42.00</h3>
</div>
<div className="trending-product4">
<div className="product4-div">
  <img src="trending-product4.png"alt="chair" className="trending-product4-pic"></img>
  </div>
  <h1 className="trending-product4-name">Cantilever chair</h1>
<h2 className="trending-product4-price">$26.00 </h2>
<h3 className="trending-product4-price2">$42.00</h3>
</div>
<div className="black-clock">
  <h1 className="twenty-three-off">23% off in all products</h1>
  <h2 className="pink-shop-now">Shop Now</h2>
  <img src="black-clock-pic.png"alt="black-clock" className="black-clock-pic"></img>
</div>
<div className="cabnet">
  <h1 className="twenty-three-off2">23% off in all products</h1>
  <h2 className="pink-view-collection">View Collection</h2>
  <img src="cabnet-pic.png"alt="black-clock" className="cabnet-pic"></img>
</div>
<div className="seat-chair1">
<div className="seat-chair1-div">
<img src="seat-chair1-pic.png"alt="chair"className="seat-chair1-pic"></img>
</div>
<h1 className="seat-chair1-name">Executive Seat chair</h1>
<h2 className="seat-chair1-price">$32.00</h2>
</div>
<div className="seat-chair2">
<div className="seat-chair2-div">
<img src="seat-chair2-pic.png"alt="chair"className="seat-chair2-pic"></img>
</div>
<h1 className="seat-chair2-name">Executive Seat chair</h1>
<h2 className="seat-chair2-price">$32.00</h2>
</div>
<div className="seat-chair3">
<div className="seat-chair3-div">
<img src="seat-chair3-pic.png"alt="chair"className="seat-chair3-pic"></img>
</div>
<h1 className="seat-chair3-name">Executive Seat chair</h1>
<h2 className="seat-chair3-price">$32.00</h2>
</div>
<div className="main9">Discount Item</div>
<div className="categories">
  <ul>
    <li className="wood-chair">Wood Chair.</li>
    <li className="plastic-chair">Plastic Chair</li>
    <li className="sofa-collection">Sofa Colletion</li>
  </ul>
</div>
<div className="discount-items">

</div>
</div>
    
</div>
</div>
      )
}

