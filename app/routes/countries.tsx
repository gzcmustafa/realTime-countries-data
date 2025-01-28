import CardCountries from "~/components/card/CardCountries";
import type { Route } from "./+types/countries";


export async function clientLoader() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    return data;
}

export default function Countries ({loaderData}:Route.ComponentProps) {
    console.log(loaderData)
    return (
        <>
        <h2 className="w-full container px-40 mx-auto text-center p-6 text-3xl "> All Countries</h2>
        <div className="  container px-40 mx-auto p-4 mb-16"> <input className=" border border-black rounded-xl p-1 w-full" type="text" placeholder="Search..." /> </div>
        <div className="grid grid-cols-3 gap-4 container px-40 mx-auto">
         
           {
            loaderData.map((country:any,key:number)=> (
                <CardCountries key={country.cca3} country={country} />
            ))
           }
            
        </div>
        </>
       
    )
}