import { categories } from "../data/data";
export default function Categories() {
  console.log(categories);
  return (
    <div className="max-w-[1520px] m-auto py-4 px-4">
      <h1 className="text-orange-500 text-2xl py-2 text-center font.bold">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((items, id) => (
          <>
            <div
              key={id}
              className="p-4 flex justify-center items-center hover:scale-105 duration-300"
            >
              <img
                src={items.image}
                className="object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl"
                alt={items.name}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
