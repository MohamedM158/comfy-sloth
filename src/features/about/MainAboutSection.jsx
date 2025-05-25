import MainHeading from '../../ui/MainHeading';

function MainAboutSection() {
  return (
    <>
      <MainHeading page="About" />
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <article>
              <img
                className="block h-[500px] w-full rounded object-cover"
                src="/images/about/about.jpeg"
                alt="About"
              />
            </article>
            <article>
              <h3 className="mb-6 text-4xl font-bold text-grey-1">Our Story</h3>
              <p className="leading-loose text-grey-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainAboutSection;
