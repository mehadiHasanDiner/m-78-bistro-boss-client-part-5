import FoodCard from "../../../components/FoodCard/FoodCard";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pageSize = 6;
  const pageCount = Math.ceil(items.length / pageSize);

  const slides = [...new Array(pageCount).keys()];
  // console.log(slides);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + index + 1 + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((index) => (
          <>
            <SwiperSlide>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {items
                  .slice(index * pageSize, (index + 1) * pageSize)
                  .map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                  ))}
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
