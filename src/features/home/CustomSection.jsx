import {
  AiOutlineControl,
  AiOutlineMacCommand,
  AiTwotoneShop,
} from 'react-icons/ai';

function CustomSection() {
  return (
    <section className="bg-brown-4 py-20">
      <div className="container">
        <article className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <h2 className="text-brown-5 text-3xl font-bold">
            Custom Furniture <br />
            Built Only For You
          </h2>
          <p className="text-brown-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col items-center justify-center rounded bg-brown-3 px-4 py-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brown-4">
              <AiOutlineControl className="text-brown-5 text-4xl" />
            </span>
            <div className="mt-2 text-center">
              <h3 className="text-brown-5 text-2xl font-bold">Mission</h3>
              <p className="mt-2 text-brown-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>

          <article className="flex flex-col items-center justify-center rounded bg-brown-3 px-4 py-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brown-4">
              <AiOutlineMacCommand className="text-brown-5 text-4xl" />
            </span>
            <div className="mt-2 text-center">
              <h3 className="text-brown-5 text-2xl font-bold">Vision</h3>
              <p className="mt-2 text-brown-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>

          <article className="flex flex-col items-center justify-center rounded bg-brown-3 px-4 py-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brown-4">
              <AiTwotoneShop className="text-brown-5 text-4xl" />
            </span>
            <div className="mt-2 text-center">
              <h3 className="text-brown-5 text-2xl font-bold">History</h3>
              <p className="mt-2 text-brown-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CustomSection;
