import React from "react";
import {
  confluence,
  googleDrive,
  jira,
  zoom,
  googleMeet,
  slack,
  meetingBlack,
} from "../../assets";

const datas = [
  {
    id: 1,
    heading: "Documentation management",
    inneer: [
      {
        icon: confluence,
        name: "Atlassian confluence",
      },
      {
        icon: googleDrive,
        name: "Google Drive",
      },
    ],
  },
  {
    id: 2,
    heading: "Ticket/Bug Tracking",
    inneer: [
      {
        icon: jira,
        name: "Atlassian Jira",
      },
    ],
  },
  {
    id: 3,
    heading: "Communication",
    inneer: [
      {
        icon: zoom,
        name: "Zoom",
      },
      {
        icon: googleMeet,
        name: "Google Meet",
      },
      {
        icon: slack,
        name: "Slack",
      },
      {
        icon: meetingBlack,
        name: "Onsite Workshops",
      },
    ],
  },
];

const Section8 = () => {
  return (
    <>
      <section className="px-4 py-16 md:px-20 md:pt-32 sm:px-12 lg:px-20 xl:px-40">
        <div>
          <h2 className="max-w-[885px] pb-[98px] mx-auto text-3xl font-bold leading-[120%]  text-center sm:text-4xl  md:text-5xl md:leading-[120%]  sm:leading-[120%]">
            Key Tools We Use for Product Management Consultancy
          </h2>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {datas.map((data) => (
              <>
                <li className="p-8 border border-gray-200 rounded-xl">
                  <h3 className="text-2xl leading-[150%] font-bold text-[#ff7200] pb-6">
                    {data.heading}
                  </h3>
                  <ul className="flex flex-col gap-y-4">
                    {data.inneer.map((det) => (
                      <li className="flex items-center gap-6">
                        <div
                          className={`flex items-center justify-center w-14 h-14 border border-[#e1e1e1] rounded-lg ${
                            det.name == "Zoom" ? "zoom" : ""
                          }`}
                        >
                          <img src={det.icon} alt={det.name} />
                        </div>
                        <p className="text-[#22222a] leading-[150%]">
                          {det.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Section8;
