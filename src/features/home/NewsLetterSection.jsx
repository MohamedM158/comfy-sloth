function NewsLetterSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-wider text-grey-1 md:text-left">
          Join our newsletter and get 20% off
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-40">
          <p className="text-center leading-relaxed text-grey-3 md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="flex flex-col items-center justify-center gap-2">
            <input
              className="border-grey-4 rounded-full border px-2 py-2"
              type="email"
              placeholder="Enter Email"
            />
            <button
              className="block w-[198.67px] rounded-full bg-brown-2 px-2 py-2 text-white"
              onClick={(e) => e.preventDefault()}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterSection;
