import { Link } from 'react-router-dom';

function MainHomeSection() {
  return (
    <section className="m-auto max-w-[1170px] py-20">
      <div className="container grid-cols-2 gap-[8rem] lg:grid">
        <article className="flex flex-col items-center sm:block">
          <h1 className="mb-6 text-center text-5xl font-bold text-black-1 sm:text-left sm:text-6xl">
            Design Your Comfort Zone
          </h1>
          <p className="mb-8 w-full text-center text-xl leading-loose text-grey-3 sm:text-left lg:max-w-[25rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link
            className="w-fit rounded bg-brown-2 px-4 py-2 uppercase text-white transition hover:bg-brown-1"
            to="/products"
          >
            Shop Now
          </Link>
        </article>
        <article className="relative hidden h-[500px] grid-cols-1 after:absolute after:left-[-40px] after:top-20 after:-z-10 after:h-[300px] after:w-20 after:rounded after:bg-brown-4 after:content-[''] lg:block">
          <img
            className="absolute bottom-0 h-full w-full rounded object-cover"
            src="/images/home/home.jpeg"
            alt="Home"
          />
          <img
            className="absolute bottom-0 left-0 w-64 translate-x-[-50%] rounded"
            src="/images/home/table-man.jpeg"
            alt="Table"
          />
        </article>
      </div>
    </section>
  );
}

export default MainHomeSection;
