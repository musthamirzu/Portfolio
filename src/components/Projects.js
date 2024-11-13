import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/portfolio.jpg';
import websiteImg3 from '../assets/crud.jpg';





export default function Projects() {
    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col py-5 px-10">
                    <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                    <p>These are some of my projects. I have build this with React.js and MERN and Tailwind CSS. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5 '>
                    <div className='relative '>
                        <img className='h-[200px] w-[400px]' src={websiteImg1} />
                         <div className='project-desc'>
                            <p className='text-center py-5'>A E-commerce website build with Mern-stack development.</p>
                         </div>
                    </div>
                    <div className='relative '>
                        <img className='h-[200px] w-[400px]' src={websiteImg2} />
                        <div className='project-desc' >
                            <p className='text-center py-5'> My Portfolio website build with React.js and Tailwind CSS.</p>
                         </div>
                    </div>
                    <div className='relative '>
                        <img className='h-[200px] w-[400px]' src={websiteImg3} />
                        <div className='project-desc'>
                            <p className='text-center py-5'> Crud project, specifictions like Read, Update, Create and Delete build with Json fake api and React.js</p>
                         </div>
                    </div>




                </div>
            </div>
        </section>
    )
}