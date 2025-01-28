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
        const[region,setRegion] = useState<string>("")
        
        const filteredCountries = loaderData.filter((country:any)=>{
            const regionSearch = !region || country.region.toLowerCase() === region.toLocaleLowerCase();


            const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
            const noCountry = country.name.common !== "Israel";
            return matchesSearch && noCountry && regionSearch;
        })

        return (
            <>
            <h2 className="w-full container px-40 mx-auto text-center p-6 text-3xl "> Hello World!</h2>
            <div className=" flex justify-center items-center container gap-4 mx-auto p-4 mb-16">
                <input 
                    className=" border border-blue-400 rounded-xl p-1 " 
                    type="text" 
                    placeholder="Search..." 
                    value={search}
                    onChange={(e)=>(setSearch(e.target.value))}
                    />
                <select className="border p-1 border-blue-400" value={region} onChange={(e)=> setRegion(e.target.value)}>
                    <option value="">All Regions</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>

                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container px-40 mx-auto">
            { filteredCountries.length === 0 ? (
                <div className="col-span-3 text-center py-10">

                <h3 className="text-2xl text-gray-600 font-semibold">No countries found matching your search text</h3>

                <p className="text-gray-500 mt-2">Try adjusting your search or filter options</p>

            </div>
            ) : 
            
                (
                    filteredCountries.map((country:any,key:number)=> (
                        <CardCountries key={country.cca3} country={country} />
                    )) 
                )
            }
                
            </div>
            </>
        
        )
    }