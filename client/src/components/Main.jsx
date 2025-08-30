const Main = () => {
    return (
        <>
            <section
            ><div className="w-full md:max-w-[700px] mx-auto min-h-screen flex justify-center items-center flex-col">
                
                    <h1
                        className="text-[2.3rem] font-black leading-[1em]"
                    >iTECH CULB</h1>
                    <p>
                        learn the tech  that shapes the future
                    </p>
            </div>
            </section>
            <section className="call-to-action">
                <div   className="
                w-[90%] max-w-[700px] mx-auto flex justify-center items-center flex-col py-[2em] px-[0.4em]" >
                    <a href="#"   className="p-[0.5em] text-[1rem] rounded-[26px] 
  bg-[linear-gradient(37deg,#171111_5%_-6%,#16168b_34%,blue,#455ae2,transparent)] 
  uppercase text-white font-medium mb-[0.7em]">
                        join the move
                    </a>
                    <p className="text-[0.4rem] font-light">
                        become part of the revolution that is shaping the africa of the future
                    </p>
                </div>
            </section>
            <section>
                <h2 className="text-center
                    mb-[0.2em] text-2xl font-bold
                ">
                    our gallery
                </h2>
                <div className=" w-full md:max-w-[700px]
                    flex justify-evenly items-center py-3
                ">
                    <tile  className="
                        py-1 px-2.5 rounded-2xl bg-gray-200 flex justify-center items-center
                    ">
                        <img src="#"    alt="" />
                        <div className="title"></div>
                        <div className="p">
                            description
                        </div>
                    </tile>
                    <tile>
                        <img src="#"    alt="" />
                        <div className="title"></div>
                        <div className="p">
                            description
                        </div>
                    </tile>
                    <tile>
                        <img src="#"    alt="" />
                        <div className="title"></div>
                        <div className="p">
                            description
                        </div>
                    </tile>
                </div>
            </section>
            <section className="py-[0.3em] px-[0.2em]">
                <div className="flex-col
                    flex justify-center items-center  w-[90%] md:max-w-[700px]  mx-auto
                ">
                    <h2 className="align-center mb-[ 0.2rem]   text-[2rem] ">
                        convinced!
                    </h2>
                    <div   className="font-[.78rem] mb-[1.2em]
                    ">join the band wagon and let's build together</div>
                    <a href="#"   className="
                    py-[.2em] px-[.4em] rounded-2xl border-2 w-[20%] text-center mb-1
                    ">
                        join
                    </a>
                </div>
            </section>
        </>
    )
}
export default Main;