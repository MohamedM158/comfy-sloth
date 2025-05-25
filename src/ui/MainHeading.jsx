function MainHeading({ page }) {
  return (
    <section className="bg-brown-4 py-8 sm:py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-brown-1 sm:text-4xl">
          Home <span className="text-brown-5">/ {page}</span>
        </h2>
      </div>
    </section>
  );
}

export default MainHeading;
