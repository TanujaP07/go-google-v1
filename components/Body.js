import Image from 'next/image'
import {MagnifyingGlassIcon, MicrophoneIcon} from "@heroicons/react/24/solid";
import {useRef} from "react";
import {useRouter} from "next/router";

export default function Body(){
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event){
    event.preventDefault();
    const term= searchInputRef.current.value;
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }
    return(
        <body>
        <form className = "flex flex-col items-center mt-40">
        <Image width = "300" height = "100" 
        src= "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt = "google-logo"/>
        <div className = "flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm: max-width-xl lg: max-w-2xl">
          <MagnifyingGlassIcon className = "h-5 text-gray-500 mr-3"/>
          <input ref ={searchInputRef} type = "text" className ="flex-grow focus:outline-none"/>
          <MicrophoneIcon className = "h-5"/>
        </div>
        <div className = "flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-6 justify-center">
        <button onClick={search} className = "btn"> Google Search </button>
        <button className = "btn"> I'm Feeling Lucky</button>
        </div>
      </form>
      </body>
    );
}
