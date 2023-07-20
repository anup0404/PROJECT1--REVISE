import './Hero.css';

const Hero=()=>{
return<>
<main className="hero">
    <div className="hero-content">
<h1>
YOUR FEET 
DESERVE
THE BEST
</h1>
<p>
YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
</p>
<div className="hero-button"> 
    <button>Shop Now</button>
    <button className="secondary_btn">Category</button>
</div>
<div className="shoping">
    Also Available On
</div>
<div className="brand-icons">
    <img src="/images/amazon.png" alt="amazon-logo" />
    <img src="/images/flipkart.png" alt="flipkart-logo" />
</div>
    </div>
    <div className="hero-image">
    <img src="/images/shoe_image.png" alt="hero-img" />

    </div>

</main>
</>
};
export default Hero;