import ProCard from '../projeCard'
import porjetOne from "../../assets/p1.png"
import porjetTwo from "../../assets/P2.png"
import porjetThree from "../../assets/p3.png"
import porjetFour from "../../assets/app.jpg"
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
        title="TechTax"
        image={porjetThree}
        date="Jan 2024 – Present"
        link="https://example.com"
      />
        <ProCard
        title="ARC Urdu News"
        image={porjetTwo}
        date="Jan 2024 – Present"
        link="https://www.arcurdunews.com/"
      />
    <ProCard
        title="BeautyBuddyAi"
        image={porjetFour}
        date="Jan 2024 – Present"
        link="https://finanzbucht.vercel.app"
      />
    <ProCard
        title="Finanzbucht"
        image={porjetOne}
        date="Jan 2024 – Present"
        link="https://finanzbucht.vercel.app"
      />
        </div>
      </section>
    );
  }
  