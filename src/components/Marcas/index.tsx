import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

function Marcas() {
  const marcas = Array.from({ length: 15 }, (_, i) => ({
    img: `/marcas/l${i + 1}.png`,
  }));

  return (
    <section id="marcas" className="py-20 bg-[#0e0e0e] text-center text-white">
      <h3 className="text-3xl md:text-5xl font-bold mb-10 text-[#0077C8]">
        Marcas que trabalhamos
      </h3>
      <p className="text-gray-300 text-xl md:text-2xl mb-8">
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
                <img src={marca.img} alt={`Marca ${i + 1}`} className="h-30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Marcas;
