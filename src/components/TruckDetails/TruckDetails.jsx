import { useMediaQuery } from '@mui/material';
import Icons from '../../img/Icons/Icons.jsx';
import css from './TruckDetails.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function TruckDetails({ item }) {
  const [country, city] = item?.location?.split(', ') || [];
  const location = city && country ? `${city}, ${country}` : '';

  const isMobileOrTablet = useMediaQuery('(max-width:768px)');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={css.wrapDetails}>
      <div>
        <h2 className={css.title}>{item.name}</h2>
        <div className={css.boxRatMap}>
          <div className={css.rating}>
            <Icons iconName="icon-star" className={css.colorStar} />
            <p>{`${item.rating}/(${item.reviews.length} Reviews)`}</p>
          </div>
          <div className={css.rating}>
            <Icons iconName="icon-map" />
            <p>{location}</p>
          </div>
        </div>
        <h2 className={css.price}>€8000,00</h2>
      </div>

      {isMobileOrTablet ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={swiper => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          className={css.swiper}
        >
          {item.gallery.map(gal => (
            <SwiperSlide key={gal.thumb}>
              <img className={css.imgThumb} src={gal.thumb} alt={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className={css.imgList}>
          {item.gallery.map(gal => (
            <li key={gal.thumb}>
              <img
                className={css.imgThumb}
                src={gal.thumb}
                alt={item.name}
                width={350}
              />
            </li>
          ))}
        </ul>
      )}

      <div className={css.description}>{item.description}</div>
    </div>
  );
}
