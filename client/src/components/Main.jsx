import {Telescope, Presentation,Contact, Activity,NotebookTabs, Award} from "lucide-react"

const Main = () => {
    return (
        <>
            <section
            ><div className="w-full md:max-w-[760px] mx-auto min-h-screen flex justify-center items-center flex-col">
                
                    <h1
                        className="text-[2.3rem] font-black leading-[1em]"
                    >iTECH CULB</h1>
                    <p>
                        learn the tech  that shapes the future
                    </p>
            </div>
            </section>
            <section className="bg-gray-400 py-[4rem] text-center flex items-center flex-col justify-center h-[400px]">
                <div   className="
                w-[90%] max-w-[760px] mx-auto flex justify-center items-center flex-col py-[2em] px-[0.4em]" >
                    <a href="#"   className="px-6 py-3 rounded-full bg-amber-600 font-semibold tracking-wide shadow-lg transition-all duration-300 hover:bg-amber-700 hover:scale-105 active:scale-95 mb-[2rem]  uppercase text-gray-300">
                        join the move
                    </a>
                    <p className="text-[1.2rem] font-extralight text-white">
                        become part of the revolution that is shaping the africa of the future
                    </p>
                </div>
            </section>
            <section className="mt-[2rem] mb-[3em]">
                <div className="text-center w-[90%] sm:max-w-[760px] mb-[3em] p-[0.2em] mx-auto">
                    <h2 className="text-[2rem] font-bold mb-1">why iTech club?</h2>
                    <p className="font-extralight">Discover the benefits of being part of out thriving tech community at Zetech University</p>
                </div>
                <div className="w-[90%] flex justify-center flex-col items-center gap-6  text-center mx-auto card-container ">
                    <div className="flex justify-center w-full tile max-w-[200px] py-[1.2em]  px-[.8em] items-center flex-col  rounded-3xl bg-gray-100 hover:bg-gray-300 p-[0.2em]">
                        <div className="w-[80px] h-[80px] mb-[2em] overflow-hidden rounded-full flex justify-center items-center object-cover border-[2px] border-none  text-red-500 "> 
                        <Telescope />
                        </div>
                        <h3 className="mb-[0.3em] font-bold text-[1.2rem]">Focused Learning</h3>
                        <p className="font-light mb-[2rem]">Specialize tracks in various tech dormains to help you  master your chosen field</p>   
                    </div>    
                    <div className="flex justify-center w-full max-w-[200px] py-[1.2em]  px-[.8em] items-center flex-col  rounded-3xl bg-gray-100 hover:bg-gray-300 p-[0.2em]">
                        <div className="w-[80px] h-[80px] mb-[2em] overflow-hidden rounded-full flex justify-center items-center object-cover border-[2px] border-none text-amber-400 ">
                        <Contact />    
                        </div> 
                        <h3 className="mb-[0.3em] font-bold text-[1.2rem]">Mentorship</h3>
                        <p className="font-light mb-[2rem]">Get guidance from experienced mentors and industry professionals</p>   
                    </div>   
                     <div className="flex justify-center w-full max-w-[200px] py-[1.2em]  px-[.8em] items-center flex-col  rounded-3xl bg-gray-100 hover:bg-gray-300 p-[0.2em]">
                        <div className="w-[80px] h-[80px] mb-[2em] overflow-hidden rounded-full flex justify-center items-center object-cover border-[2px] border-none text-green-500 ">
                           <Presentation />
                            </div> 
                        <h3 className="mb-[0.3em] font-bold text-[1.2rem]">Industry Projects</h3>
                        <p className="font-light mb-[2rem]">Work on real-world projects and build a profesional portfolio</p>   
                    </div>   
                    <div className="flex justify-center w-full max-w-[200px] py-[1.2em]  px-[.8em] items-center flex-col  rounded-3xl bg-gray-100 hover:bg-gray-300 p-[0.2em]">
                        <div className="w-[80px] h-[80px] mb-[2em] overflow-hidden rounded-full flex justify-center items-center object-cover border-[2px] border-none text-blue-700 ">
                            <NotebookTabs />
                        </div>
                        <h3 className="mb-[0.3em] font-bold text-[1.2rem]">Networking</h3>
                        <p className="font-light mb-[2rem]">Connect with like-minded peers and industry leaders</p>   
                    </div>   
                    <div className="flex justify-center w-full max-w-[200px] py-[1.2em]  px-[.8em] items-center flex-col  rounded-3xl bg-gray-100 hover:bg-gray-300 p-[0.2em]">
                        <div className="w-[80px] h-[80px] mb-[2em] overflow-hidden rounded-full flex justify-center items-center object-cover border-[2px] border-none text-red-900">
                            <Award />
                        </div>
                        <h3 className="mb-[0.3em] font-bold text-[1.2rem]">Competitions</h3>
                        <p className="font-light mb-[2rem]">Participate in hackathons and coding competitions</p>   
                    </div>   
                    <div className="flex justify-center w-full max-w-[200px] py-[1.2em]  px-[.8em] items-center flex-col  rounded-3xl bg-gray-100 hover:bg-gray-300 p-[0.2em]">
                        <div className="w-[80px] h-[80px] mb-[2em] overflow-hidden rounded-full flex justify-center items-center object-cover border-[2px] border-none text-fuchsia-500">
                            <Activity />
                        </div>
                        <h3 className="mb-[0.3em] font-bold text-[1.2rem]">Hands-on activities</h3>
                        <p className="font-light mb-[2rem]">Learn by doing  avoid toutorial hell .. </p>   
                    </div>   
                </div>              
            </section>
            <section className="py-[0.3em] px-[0.2em]  bg-gray-800
                    text-gray-100">
                <div className="flex-col
                    flex justify-center pt-[4em] items-center text-center  w-[90%] md:max-w-[760px]  mx-auto">
                    <h2 className="align-center mb-[ 0.2rem] font-extrabold text-4xl mb-5">
                        convinced!
                    </h2>
                    <div   className="font-[.78rem] mb-[1.2em]
                    ">join the band wagon and let's build together</div>
                    <a href="#"   className="
                    p-[.6em] rounded-2xl bg-amber-700 w-[20%] text-center
                    capitalize text-white mb-[3rem]
                    ">
                        join
                    </a>
                </div>
            </section>
        </>
    )
}
export default Main;