import TitleBar from "../../components/titleBar"

// landing Page
const Home =()=>{

    return(
        <section className="w-full h-full flex flex-col">
        <TitleBar role={'landing'}/>
        <main className="w-[96.4%] mx-auto primary-bg h-full rounded-tl-xxl rounded-tr-xxl overflow-y-auto my-scroll-bar ">
            <section className="w-full " name="HeroSection">
                <div className="h-[40vh] w-full flex flex-col justify-end items-center leading-line-height linear90-bg">
 <h1 className="text-cl font-bold text-accent text-center">Find Your Study Material</h1>
 <p className="font-semibold">Select your board, course, and semester to get syllabus-based study resources.</p>

                </div>
             
                <img src="src\assets\hero_image.png" className="aspect-video max-w-1/2 mx-auto my-lg"/>
           
            </section>
            <section name="Explore University" className="w-full">
                <h2 className="text-xxl font-bold text-accent text-center">Explore Universities</h2>
            </section>
          
        </main>
        </section>
        
    )
}
export default Home;