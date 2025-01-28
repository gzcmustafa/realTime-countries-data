import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Learn Info About Countries" },
    { name: "description", content: "Welcome to Countries" },
  ];
}

export default function Home() {
  return (
    <div className=" container px-40 mx-auto bg-gradient-to-b from-white to-gray-50">
  
      <section className="container mx-auto px-4 pt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Every <span className="text-blue-600">Country</span> in the World
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Explore comprehensive information about countries worldwide, from culture and history to economics and geography.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
             <Link to={"/countries"}>
             <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105">
                Start Exploring →
              </button>
             </Link>
              <button className="border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:blue-indigo-600 hover:blue-indigo-600 transition-all">
                View Statistics
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="space-y-4">
                <div className="transform -rotate-6 hover:rotate-0 transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1498354178607-a79df2916198?q=80&w=1976&auto=format&fit=crop" 
                    alt=""
                    className="rounded-2xl h-48 w-full object-cover shadow-lg hover:shadow-xl transition-all"
                  />
                </div>
                <div className="transform rotate-6 hover:rotate-0 transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1573497631106-8ea431976aab?q=80&w=1974&auto=format&fit=crop" 
                    alt=""
                    className="rounded-2xl h-64 w-full object-cover shadow-lg hover:shadow-xl transition-all"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="transform rotate-6 hover:rotate-0 transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1613757874090-456665221c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHlyYW1pZHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt=""
                    className="rounded-2xl h-64 w-full object-cover shadow-lg hover:shadow-xl transition-all"
                  />
                </div>
                <div className="transform -rotate-6 hover:rotate-0 transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1974&auto=format&fit=crop" 
                    alt=""
                    className="rounded-2xl h-48 w-full object-cover shadow-lg hover:shadow-xl transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

    
      <section className="container mx-auto px-4 mt-20 pb-24">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">195+</div>
              <div className="text-indigo-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7.9B+</div>
              <div className="text-indigo-100">Population</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-indigo-100">Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-indigo-100">Currencies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
