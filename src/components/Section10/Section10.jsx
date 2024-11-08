import React from "react";

const datas = [
  {
    id: 1,
    heading: "Moving gears from the first meeting",
    desc:
      "We want you to get a clear understanding of what you get. Our team provides research on your project and comes up with a balanced solution between your idea and market need.",
  },
  {
    id: 2,
    heading: "15% of deviation of delivery time",
    desc:
      "We are used to working with tight deadlines. This approach brought us to the concept of precise estimates and minor deviations. It helps set clear expectations and excludes overpromising.",
  },
  {
    id: 3,
    heading: "2x faster development with pre-made engines",
    desc:
      "While other companies deploy web solutions within a couple of years, we do it faster. Save time with our pre-made engines that can be customized for your future product.",
  },
  {
    id: 4,
    heading: "We employ brilliant IT talents",
    desc:
      "All our Product Managers Consultants and Product Owners are very qualified and highly experienced in multiple industries and projects of different complexity.",
  },
];
const Section10 = () => {
  return (
    <>
      <section className="px-4 py-16 md:px-20 md:pt-32 sm:px-12 lg:px-20 xl:px-40">
        <div>
          <h2 className="max-w-[800px] mx-auto text-3xl font-bold leading-[120%]  text-center sm:text-4xl  md:text-5xl md:leading-[120%] pb-16 sm:leading-[120%]">
            Why work with us?
          </h2>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {datas.map((data) => (
              <li key={data.id}>
                <p className="text-[72px] leading-[110%] font-extrabold font-montserrat text-primary pb-6">
                  {data.id}
                </p>
                <h3 className="font-bold text-[#22222a] text-[24px] pb-6 leading-[150%]">
                  {data.heading}
                </h3>
                <p className="text-[#606066]">{data.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Section10;
