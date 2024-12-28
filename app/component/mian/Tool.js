import ToolCard from '../toolCard'
import one from "../../assets/1.avif"
import two from "../../assets/2.avif"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
import five from "../../assets/5.png"
import six from "../../assets/6.png"



export default function Detail() {
    return (
      <section className="p-14">
        {/* Title Section */}
        <h1 className="text-8xl font-bold">
        Tools<br/>
          <span className="text-textCol">Technology</span>
        </h1>
        <div className='grid grid-cols-2 gap-x-4 mt-5'>

        <ToolCard 
            title='Next.js'
            image= {one}
            date="React Framework"
            link="https://nextjs.org/"
        />
        <ToolCard 
            title='React Native'
            image= {three}
            date="React Framework"
            link="https://chatgpt.com/"
        />
        <ToolCard 
            title='Firebase'
            image= {four}
            date="Realtime Database"
            link="https://chatgpt.com/"
        />
        <ToolCard 
            title='ChatGPT'
            image= {two}
            date="Ai Assistant"
            link="https://chatgpt.com/"
        />
        <ToolCard 
            title='FastAPI'
            image= {five}
            date="Python Api Framework"
            link="https://nextjs.org/"
        />
        <ToolCard 
            title='PostgreSQL'
            image= {six}
            date="RDBMS"
            link="https://chatgpt.com/"
        />
        <ToolCard 
            title='Firebase'
            image= {four}
            date="Realtime Database"
            link="https://chatgpt.com/"
        />
        <ToolCard 
            title='ChatGPT'
            image= {two}
            date="Ai Assistant"
            link="https://chatgpt.com/"
        />
        </div>
      </section>
    );
  }
  