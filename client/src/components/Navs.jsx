const Navs =()=> {

    return (
        <>
            <header className=" 
            rounded-2xl fixed
            flex h-10   w-[99%] mx-auto items-center justify-between gap-8 px-4 sm:px-6 border-b-[1px]  border-[gray]
            " >
                <div>logo</div>
                <ul className="
                    flex items-center gap-6
                " >
                    <li>login</li>
                    <li>events</li>
                    <li>admin</li>
                </ul>
            </header>
        </>
    )
}
export default Navs;