import React from 'react'

const CardComp = ({lists , heading , bg}) => {
  return (
   <>
    <section className="px-4 pt-16 md:px-20 md:pt-32 sm:px-12 lg:px-20 xl:px-40">
      <div>
        <h1 className="max-w-screen-xl mx-auto text-3xl font-bold leading-[120%]  text-center sm:text-4xl  md:text-5xl md:leading-[120%]  sm:leading-[120%]">
          {heading}
        </h1>

        <ul className="grid grid-cols-1 py-16 text-left md:text-center sm:grid-cols-2 lg:grid-cols-3 md:py-32 gap-y-16 gap-x-40">
          {lists.map((list, index) => (
            <li
              className="flex flex-col items-start text-left md:items-center md:text-center"
              key={index}
            >
              <div className={`icon ${bg} h-[60px] w-[60px] md:h-[72px] md:w-[72px] rounded-xl flex justify-center items-center mb-4 md:mb-6`}>
                <img src={list.icon} alt={list.name} />
              </div>
              <p className="text-xl md:text-2xl leading-[150%] text-secondary font-bold pb-2 md:pb-3">
                {list.name}
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                {list.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
   </>
  )
}

export default CardComp