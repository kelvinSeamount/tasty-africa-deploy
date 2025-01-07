export default function Delivery() {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <h3 className="text-orange-500 font-bold text-center text-2xl">
        Quick Delivery App
      </h3>
      <div className="max-w-[1240px] max-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Limitless Convenience on-demand
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            alias amet neque molestiae natus tempora laboriosam eius reiciendis
            eos nisi vero laborum et, delectus saepe perspiciatis esse magni,
            maiores numquam! Quam repudiandae sunt fuga aut quasi beatae,
            molestiae reiciendis distinctio?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
