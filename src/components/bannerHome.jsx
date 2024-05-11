import {React} from "react";
import BannerFirst from "../img/banner01.jpg";
import BannerSecond from "../img/banner02.jpg"
import BannerThird from "../img/banner03.jpg"
import {Swiper, SwiperSlide} from 'swiper/react'
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();


const BannerHomeComponent = () =>{

    const data = [
         {id:1, image:<img src={BannerFirst} alt="Banner" />},
         {id:2, image: <img src={BannerSecond} alt="Banner" />},
         {id:3, image: <img src={BannerThird} alt="Banner" />}
    ];           

    return(
        <div className="BannerImgAlign">  
            <Swiper                
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id} >
                        {item.image}
                    </SwiperSlide>
                ))}
            </Swiper>                 
        </div>
    );
} 

export default BannerHomeComponent;