import Image from "next/image";
import{useRouter} from "next/router";
import {useRef} from "react";
import {MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon} from "@heroicons/react/24/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";
export default function SearchHeader(){
    const router = useRouter();
    const searchInputRef = useRef(null);
    function search(event){
        event.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) return;
        router.push(`/search?term = ${term.trim()}&searchType=`);
    }
    return(
        <header className="sticky top-0 bg-white">
            <div className =" flex w-full p-6 items-center">
            <Image 
            onClick={() => router.push("/")}
            width = "120" objectFit = "contain" height = "40" className= "cursor-pointer"
            src= "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt = "google-logo"/>
            <form className = "flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
                <input type ="text" defaultValue ={router.query.term} ref ={searchInputRef}
                className= "w-full focus:outline-none"/>
                <XMarkIcon onClick={()=>(searchInputRef.current.value = "")} className = "h-7 text-gray-500 cursor-pointer sm: mr-3"/>
                <MicrophoneIcon className = "h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 m3-3"/>
                <MagnifyingGlassIcon className = "h-6 hidden sm:inline-flex text-blue-500"/>
            <button onClick ={search} type="submit" hidden></button>
            </form>
            <User className ="ml-auto whitespace-nowrap"/>
            </div>
            <SearchHeaderOptions/>
        </header>
    )
}