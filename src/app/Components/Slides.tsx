"use client"

import { useEffect, useState } from "react";

const Slides = () => {
    const [started, setStarted] = useState(false);

    useEffect(()=>{
        setStarted(true);
    },[]);
    
    return(
        <div className="flex h-[calc(100vh-80px)] gap-16 justify-center items-center">
            <div className="flex flex-col gap-16">
                <div className={`shadow-xl p-8 h-80 w-80 rounded-xl bg-gray-100 transition-all ease-out duration-1000 ${!started && "-translate-x-[500%]"}`}>
                    <p className={`text-red-500 transition-all ease-in-out duration-[1500ms] delay-1000 ${!started && "opacity-0"}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt facilis ad, aspernatur consequatur modi animi laboriosam temporibus nostrum vel veniam sint aliquid assumenda tenetur consequuntur! Illo vitae iste provident.</p>
                </div>
                <div className={`shadow-xl p-8 h-80 w-80 rounded-xl bg-gray-100 transition-all ease-out duration-[1500ms] ${!started && "-translate-x-[500%]"}`}>
                    <p className={`text-green-500 transition-all ease-in-out duration-[1500ms] delay-[1500ms] ${!started && "opacity-0"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia voluptatibus ducimus quibusdam consequatur, rerum cupiditate blanditiis hic minima suscipit est nostrum, debitis id enim ut? Maxime rem ipsa tempore ipsam!</p>
                </div>
            </div>
            <div className="flex flex-col gap-16">
                <div className={`shadow-xl p-8 h-80 w-80 rounded-xl bg-gray-100 transition-all ease-out duration-1000 ${!started && "translate-x-[500%]"}`}>
                    <p className={`text-blue-500 transition-all ease-in-out duration-[1500ms] delay-1000 ${!started && "opacity-0"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, dolorum commodi, dignissimos dolores mollitia, velit aliquam tenetur earum id repellat ullam perspiciatis amet corrupti. Tenetur ea dolores error qui sapiente!</p>
                </div>
                <div className={`shadow-xl p-8 h-80 w-80 rounded-xl bg-gray-100 transition-all ease-out duration-[1500ms] ${!started && "translate-x-[500%]"}`}>
                    <p className={`text-orange-500 transition-all ease-in-out duration-[1500ms] delay-[1500ms] ${!started && "opacity-0"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quos odit nulla veniam nam harum commodi perspiciatis sapiente neque a, ea aut amet blanditiis cum iste reprehenderit fugiat labore incidunt?</p>
                </div>
            </div>
        </div>
    );
}

export default Slides