export default function About() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">About Real-Time Countries Data</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                    Real-Time Countries Data is an interactive web application that provides comprehensive information about countries worldwide. 
                    Users can explore detailed information about any country, including their geographical location, population, languages, currencies, and neighboring countries.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h3 className="font-semibold mb-2">Frontend</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h3 className="font-semibold mb-2">Mapping</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Leaflet</li>
                            <li>React Leaflet</li>
                            <li>OpenStreetMap</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h3 className="font-semibold mb-2">Data Source</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>REST Countries API</li>
                            <li>Real-time Data</li>
                            <li>JSON Format</li>
                        </ul>
                    </div>
                </div>
            </section>

           
        </div>
    );
}