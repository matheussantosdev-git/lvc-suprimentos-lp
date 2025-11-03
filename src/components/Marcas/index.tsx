import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper.css";

function Marcas() {
  const marcas = Array.from({ length: 15 }, (_, i) => ({
    img: `/marcas/l${i + 1}.png`,
  }));

  return (
    <section id="home">
      <div className="py-20 mb-16 container mx-auto bg-gradient-to-br from-treeBlue to-blue-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Algumas das marcas que trabalhamos
        </h2>

        <p className="text-gray-900 text-xl md:text-2xl mb-8 text-center">
          Trabalhamos com as principais marcas e tecnologias do mercado.
        </p>
        <div className=" mx-auto px-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            className="pb-12"
          >
            {marcas.map((marca, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300">
                  <img
                    src={marca.img}
                    alt={`Marca ${i + 1}`}
                    className="w-32 h-20 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Marcas;
