    import CardCountries from "~/components/card/CardCountries";
    import type { Route } from "./+types/countries";
    import { useState } from "react";


    export async function clientLoader() {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        return data;
    }

    export default function Countries ({loaderData}:Route.ComponentProps) {
        const [search,setSearch] = useState<string>("")
        
        const filteredCountries = loaderData.filter((country:any)=>{
            const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
            const noCountry = country.name.common !== "Israel";
            return matchesSearch && noCountry;
        })

        return (
            <>
            <h2 className="w-full container px-40 mx-auto text-center p-6 text-3xl "> All Countries</h2>
            <div className="  container px-40 mx-auto p-4 mb-16">
                <input 
                    className=" border border-black rounded-xl p-1 w-full" 
                    type="text" 
                    placeholder="Search..." 
                    value={search}
                    onChange={(e)=>(setSearch(e.target.value))}
                    />
            </div>
            <div className="grid grid-cols-3 gap-4 container px-40 mx-auto">
            
            {
                filteredCountries.map((country:any,key:number)=> (
                    <CardCountries key={country.cca3} country={country} />
                ))
            }
                
            </div>
            </>
        
        )
    }