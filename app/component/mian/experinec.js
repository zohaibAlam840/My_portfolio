import ExpCard from '../expCard'

export default function Detail() {
    return (
      <section className="p-14">
        {/* Title Section */}
        <h1 className="text-8xl font-bold">
        +1 YEAR OF<br/>
          <span className="text-textCol">EXPERIENCE</span>
        </h1>
        <div className='flex flex-col gap-y-4 mt-5'>
        <ExpCard
        title="PixelForge Studios"
        description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
        date="Jan 2020 – Present"
        link="https://example.com"
      />
        <ExpCard
        title="PixelForge Studios"
        description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
        date="Jan 2020 – Present"
        link="https://example.com"
      />

        <ExpCard
        title="PixelForge Studios"
        description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
        date="Jan 2020 – Present"
        link="https://example.com"
      />
        </div>
      </section>
    );
  }
  