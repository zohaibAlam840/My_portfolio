export default function Detail() {
    return (
      <section className="p-14">
        {/* Title Section */}
        <h1 className="text-8xl font-bold">
          SOFTWARE<br />
          <span className="text-textCol">ENGINEER</span>
        </h1>
  
        {/* Description */}
        <p className="mt-4 text-lg text-white">
          Passionate about creating intuitive and engaging <br/>user experiences. 
          Specialize in transforming ideas <br/>into beautifully crafted products.
        </p>
  
        {/* Statistics */}
        <div className="flex mt-10">
          {[
            { value: "+1", label: "YEARS OF \n EXPERIENCE" },
            { value: "+10", label: "COMPLETED \n PROJECTS" },
            { value: "+6", label: "HAPPY \n CLIENTS" },
          ].map((stat, index) => (
            <div key={index} className="text-7xl font-bold leading-none">
              {stat.value}
              <br />
              <span className="text-lg font-medium text-white mt-2 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  