export default function Detail() {
    return (
      <section className="p-14">
        {/* Title Section */}
        <h1 className="text-8xl font-bold">
          SOFTWARE<br />
          <span className="text-textCol">ENGINEER</span>
        </h1>
  
        {/* Description */}
        <p className="mt-4 text-lg text-coloPar">
        Dedicated to crafting seamless user experiences with a focus on design excellence and robust backend solutions. 
        Skilled in turning concepts into functional, scalable, and visually stunning digital products.
        </p>


  
        {/* Statistics */}
        <div className="flex mt-16 ">
          {[
            { value: "+01", label: "YEARS OF \n EXPERIENCE" },
            { value: "+10", label: "COMPLETED \n PROJECTS" },
            { value: "+06", label: "HAPPY \n CLIENTS" },
          ].map((stat, index) => (
            <div key={index} className="text-7xl font-bold leading-none">
              {stat.value}
              <br />
              <span className="text-sm font-medium mt-2 block pr-16 text-coloPar">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  