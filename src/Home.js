import React from 'react';
import './Home.css'
import Product from './Product';
function Home() {
   return (
      <div className="home">
         <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61FrNwOdnlL._SX1500_.jpg"
            
            alt=""
         />
         {/* Product id,title,price,rating,image */}
         <div className="home__row">
         <Product
            id="12321341"
            title="The lean Startup:How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            
            <Product
            id="12321342"
            title="Stand Mixer, POWWA 7.5 Quart Electric Mixer, 6+1 Speed 660W Tilt-Head Kitchen Food Mixers with Whisk, Dough Hook, Mixing Beater & Splash Guard for Baking, Cake, Cookie, Kneading, ETL Certified"
            price={198.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71DNBIi6T8L._AC_SL1500_.jpg"
            />
            
         </div>


         <div className="home__row">
         <Product
            id="12321343"
            title="Amazfit Band 5 Fitness Tracker with Alexa Built-in, 15-Day Battery Life, Blood Oxygen, Heart Rate"
            price={199.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61xSjdpeU0L._AC_SL1500_.jpg"
            />
            
            <Product
            id="12321344"
            title="I-STAR Smart Speaker for Amazon Echo Dot 2nd Generation,Portable Audio Stereo Speaker"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/711eN7F6sTL._AC_SL1500_.jpg"
            />

            <Product
            id="12321345"
            title="Samsung Galaxy Z Fold 2 5G | Factory Unlocked Android Cell Phone | 256GB Storage"
            price={1121.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71K7LHNK7DL._AC_SL1500_.jpg"
            />

            
         </div>

         <div className="home__row">
         <Product
            id="12321346"
            title="Davis & Sanford Pocket Tripod for Smartphone and Compact Cameras, iPhone 12 Pro, Samsung S21, Galaxy Note, "
            price={199.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/310Vb3KpARS._AC_SL1023_.jpg"
            />
            
            <Product
            id="12321347"
            title="Tiffen 77VND 77mm Variable Neutral Density Filter for Camera Lenses, Black"
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81kO0B7tNFL._AC_SL1500_.jpg"
            />

            <Product
            id="12321348"
            title="Oculus Rift S PC-Powered VR Gaming Headset"
            price={549.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg"
            />
         </div>
         <div className="home__row">
         <Product
            id="12321349"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB "
            price={399.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
            />
            </div>

      </div>
   );
}

export default Home;