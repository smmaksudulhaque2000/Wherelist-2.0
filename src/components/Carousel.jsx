import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';

import bgimg1 from '../assets/images/1.jpg';
import bgimg2 from '../assets/images/2.png';
import bgimg3 from '../assets/images/3.jpg';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='mb-10 mx-auto'>
      <Slider {...settings}>
        <Slide image={bgimg1} text='Lost or Found, Find a Solution Together'/>
        <Slide image={bgimg2} text='Help Others Recover Their Lost Items or Return Found Ones' />
        <Slide image={bgimg3} text='If You Find Something Lost, You Can Return It!' />
      </Slider>
    </div>
  );
}
