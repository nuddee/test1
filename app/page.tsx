import EmblaCarousel from './components/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import './css/embla.css';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Link from 'next/link';

const OPTIONS: EmblaOptionsType = { loop: true }; // Carousel options
const SLIDES = [
  '/images/s_1.PNG',
  '/images/s-2.PNG',
];

export default function Home() {
  return (
    <div>
      {/* Embla Carousel section */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      
      {/* Side by side section */}
      <div className="side-by-side-section">
        {/* Left image side */}
        <div className="section-image">
          <img src="images/sd-3.webp" alt="Pet Store" />
        </div>

        {/* Right text side */}
        <div className="section-content">
          <h2>Pet goods online store</h2>
          <p>
            Our pet goods online shop is a one-stop destination for pet lovers, offering a wide range of high-quality 
            products tailored to meet the needs of all kinds of pets.
          </p>
          <p>
            Whether you're looking for nutritious food, comfortable bedding, fun toys, or grooming essentials, we provide a carefully curated selection to ensure the happiness and well-being of your furry friends. With a user-friendly interface, seamless navigation, and a secure checkout process, our shop makes it easy for customers to find and purchase everything they need to pamper their pets.
          </p>
          <p>
            We also offer personalized services, such as product recommendations based on your pet's breed and age, making shopping convenient and enjoyable for pet owners. Whether you're a new pet parent or a seasoned owner, we're here to support your journey with trusted, top-tier products delivered right to your door.
          </p>
          <Link href="/SBP">
            <button className="virtual-tour-button flex items-center">Buy now!!</button>
          </Link>
        </div>
      </div>

      {/* Online Service & Support section */}
      <div className="service-support">
        <h2>Online Service & Support</h2>
        <div className="support-items">
          <div className="support-item">
            <div className="icon">
              <SupportAgentIcon style={{ fontSize: 50, color: 'white' }}/>
            </div>
            <h3>Customer Support</h3>
            <p>Got questions? Call 1111111111</p>
          </div>

          <div className="support-item">
            <div className="icon">
            <LocalShippingIcon style={{ fontSize: 50, color: 'white' }}/>
            </div>
            <h3>Free Shipping</h3>
            <p>On orders 1000 ₿ and over!</p>
          </div>

          <div className="support-item">
            <div className="icon">
            <SwapHorizIcon style={{ fontSize: 50, color: 'white' }}/>
            </div>
            <h3>Return Policies</h3>
            <p>View our return policies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
