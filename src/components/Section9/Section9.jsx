import React from "react";

const datas = [
  {
    id: 1,
    desc: `According to Survey Conducted by The 250 Group in 2021, a fully optimized Product Manager  <strong class="text-primary"> could increase company profits by 34.2%. </strong>`,
  },
  {
    id: 2,
    desc: `The Product Manager keeps an eye on Market trends, Clients needs, user feedbacks, KPIs to control the development of the product, to test hypotheses, so that  <strong class="text-primary"> product delivers the ROI and meets customers' needs.</strong>`,
  },
  {
    id: 3,
    desc: `The Product Manager  <strong class="text-primary"> adjusts the product development according to the market needs and prioritize the feature development,</strong> ensures that every member involved in the production understands the product vision and acts accordingly for product successes.`,
  },
  {
    id: 4,
    desc: `To optimize <strong class="text-primary"> the effectiveness of your development process,</strong>  the Product Owner employs a well-defined backlog, examines that Product Increment and determines if it has been produced in accordance with the goals of the product`,
  },
];
const Section9 = () => {
  return (
    <>
      <section className="px-4 py-16 md:px-20 md:pt-32 sm:px-12 lg:px-20 xl:px-40">
        <div>
          <h2 className="max-w-[800px] mx-auto text-3xl font-bold leading-[120%]  text-center sm:text-4xl  md:text-5xl md:leading-[120%] pb-16 sm:leading-[120%]">
            Software Product Management really matters
          </h2>

          <ul className="grid lg:grid-cols-2 grid-cols-1 gap-x-[46px] gap-y-[64px] items-start">
            {datas.map((data) => (
              <li
                className="pl-4 text-lg border-l-4 border-primary font-primary "
                key={data.id}
              >
                <p
                  className="text-[#606066]"
                  dangerouslySetInnerHTML={{ __html: data.desc }}
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Section9;
