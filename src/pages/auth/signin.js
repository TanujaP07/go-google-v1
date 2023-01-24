import React from "react";
import Header from "components/Header";
import {getProviders, signIn} from "next-auth/react"

export default function signin({providers}){
    return(
    <>
        <Header/>
        <div className = "mt-40">
            {/* we need to get the providers here*/}
            {Object.values(providers).map(provider =>(
                <div key = {provider.name} className = "flex flex-col items-center">
                    <img 
                    className = "w-52 object-cover"
                    src = "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt = "google-logo"/>
                    <p className ="text-sm italic my=10 text-center"> This website is created for learning purposes</p>
                    <button className =" bg-purple-400 rounded-lg text-white p-2 hover:bg-purple-500" onClick = {()=>signIn(provider.id, {callbackUrl: "/"})}> 
                    Sign in with {provider.name} 
                    </button>
                </div>
            ))}
        </div>
        </>    
    );
}
{/*server side rendering function - exclusive to next-js*/}
export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props: {providers},
    };
}