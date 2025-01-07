import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function TopPicks() {
  return (
    <>
      <h1 className="text-orange-500 text-2xl py-2 text-center font.bold">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w[1520px] m-auto py-2 px-2">
        <Splide
          options={{ perPage: 4, gap: "1rem", drag: "free", arrows: false }}
        >
          {topPicks.map((item, id) => (
            <>
              <SplideSlide key={id}>
                <div className="relative rounded-3xl">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl  text-white">
                    <p className="px-2 pt-4 font-bold text-2xl">{item.title}</p>
                    <p className="px-2 ">{item.price}</p>
                    <button className="border-dotted border-white mx-2 absolute bottom-4 text-white">
                      Add to cart{" "}
                    </button>
                  </div>
                  <img
                    src={item.img}
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105  ease-out duration-300"
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            </>
          ))}
        </Splide>
      </div>
    </>
  );
}
