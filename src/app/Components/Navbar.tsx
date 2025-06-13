import Search from "./Search"

const Navbar=()=>{
    return(
        <div className="flex h-20 justify-between items-center shadow-xl backdrop-blur-md px-16">

            <div className="w-1/3">
                Logo
            </div>

            <div className="flex justify-center gap-8 w-1/3">
                <div className="">
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
            </div>

            <div className="w-1/3 flex justify-end">
                <Search/>
            </div>
        </div>
    )
}

export default Navbar