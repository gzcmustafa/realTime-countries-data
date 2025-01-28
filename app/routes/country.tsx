import type { Route } from "./+types/country";
import { useEffect, useState } from 'react';

export async function clientLoader({params}:Route.LoaderArgs) {
    const countryCode = params.countryCode;

    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    const data = await res.json();
    return data;
}

export default function Country ({loaderData}:Route.ComponentProps) {
    const country = Array.isArray(loaderData) ? loaderData[0] : loaderData;
    const position: [number, number] = [country.latlng[0], country.latlng[1]];
    const [Map, setMap] = useState<any>(null);

    useEffect(() => {
        
        import('react-leaflet').then((module) => {
            const { MapContainer, TileLayer, Marker, Popup } = module;
            import('leaflet').then((L) => {
                // Marker ikonlarını düzelt
                delete (L.Icon.Default.prototype as any)._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                });

                // Harita bileşenini oluştur
                setMap(
                    <MapContainer 
                        center={position} 
                        zoom={4} 
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
                                {country.name.common}
                            </Popup>
                        </Marker>
                    </MapContainer>
                );
            });
        });
    }, []);

    return (
        <div className="container px-40 mx-auto p-9   ">
            
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-4">{country.name.common}</h1>
                    <p className="mb-4">{country.name.official}</p>

                    
                    <img src={country.flags.png} alt={`${country.name.common} flag`} width={200} className="mb-4" />

                    <p className="mb-2"><strong>Capital:</strong> {country.capital?.[0]}</p>

                    <p className="mb-2"><strong>Region:</strong> {country.region}</p>

                    <p className="mb-2"><strong>Population:</strong> {country.population.toLocaleString()}</p>

                 
                    <p className="mb-2"><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>

                    
                    <p className="mb-2"><strong>Currencies:</strong> {Object.values(country.currencies).map((c:any) => c.name).join(", ")}</p>

                    <p className="mb-2"><strong>Car Signs:</strong> {country.car.signs?.[0]}</p>

                    
                    <p className="mb-2"><strong>Phone Code:</strong> {country.idd.root}{country.idd.suffixes?.[0]}</p>
                    
                    <div className="mb-2">
                        <strong>Neighboring Countries</strong>
                        {country.borders ? (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {country.borders.map((border: string) => (
                                    <a
                                        key={border}
                                        href={`/countries/${border.toLowerCase()}`}
                                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                                    >
                                        {border}
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <p className="mt-1 text-gray-600">Island country (No neighboring countries)</p>
                        )}
                    </div>

                </div>
                

                <div className="h-[500px] w-full">
                    {Map}
                </div>
            </div>
        </div>
    )
}