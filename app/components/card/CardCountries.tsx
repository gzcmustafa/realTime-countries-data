import React from 'react'
import { Link } from 'react-router'

interface CountryProps {
    country: {
        cca3: string;  
        flags: {
            svg: string;
        };
        name: {
            common: string;
        };
        population: number;
        area: number;
        region: string;
        capital: string[];
        timezones:string[];
        
    }
}

export default function CardCountries({country}: CountryProps) {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
        <Link to={`/countries/${country.cca3.toLowerCase()}`}> 
            <div className="h-48 w-full overflow-hidden">
                <img 
                    className="w-full h-full object-cover rounded-t-lg" 
                    src={country.flags.svg} 
                    alt={`Flag of ${country.name.common}`} 
                />
            </div>
        </Link>
        <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {country.name.common} ({country.cca3})
            </h5>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Timezones:</strong> {country.timezones.join(", ")}</p>
                

                <p><span className="font-semibold">Land Area:</span> {country.area.toLocaleString()} km²</p>
                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            </div>
        </div>
    </div>
  )
}
