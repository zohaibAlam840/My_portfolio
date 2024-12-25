import ProCard from '../projeCard'

export default function Detail() {
    return (
      <section className="p-14">
        {/* Title Section */}
        <h1 className="text-8xl font-bold">
        RECENT<br/>
          <span className="text-textCol">PROJECTS</span>
        </h1>
        <div className='flex flex-col gap-y-4 mt-5'>
        <ProCard
        title="PixelForge Studios"
        description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
        date="Jan 2020 – Present"
        link="https://example.com"
      />
        <ProCard
        title="PixelForge Studios"
        description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
        date="Jan 2020 – Present"
        link="https://example.com"
      />

        <ProCard
        title="PixelForge Studios"
        description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
        date="Jan 2020 – Present"
        link="https://example.com"
      />
        </div>
      </section>
    );
  }
  