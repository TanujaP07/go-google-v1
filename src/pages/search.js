import Head from "next/head";
import SearchHeader from "components/SearchHeader";
import { useRouter } from "next/router";

export default function search({results}){
    console.log(results);
    const router = useRouter();
    return(
        <div>
            <Head>
                <title>{router.query.term} - Search Page </title>
            </Head>
            {/*Search Header*/}
            <SearchHeader/>

            {/*Search Results*/}
        </div>
    );
}

export async function getServerSideProps(context){
    const mockData = falsead
    const data = mockData ? Response 
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
    ).then((response)=>response.json());
    return{
        props:{
            results: data,
        },
    };
}