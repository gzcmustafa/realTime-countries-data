import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Learn Info About Countries" },
    { name: "description", content: "Welcome to Countries" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen  px-40   py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Explore All Countries with Real-Time Data
          </h1>
          <p className="text-xl text-gray-600">
            Discover comprehensive, real-time information about countries worldwide. From population statistics 
            to economic indicators, explore detailed insights about every nation. 
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Get started →
            </button>
            <button className="text-gray-600 px-6 py-3 rounded-lg font-semibold hover:text-gray-900 transition flex items-center">
              More
            </button>
          </div>
        </div>

        
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-12 gap-4">
            
            <div className="col-span-8 col-start-5 row-start-1">
              <img 
                src="https://images.unsplash.com/photo-1498354178607-a79df2916198?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Team meeting"
                className="rounded-2xl w-full h-40 object-cover"
              />
            </div>
            
            
            <div className="col-span-5 col-start-1 row-start-2">
              <img 
                src="https://images.unsplash.com/photo-1531257240678-d5b1922e672d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Person working"
                className="rounded-2xl w-full h-40 object-cover"
              />
            </div>
            
          
            <div className="col-span-4 col-start-7 row-start-2">
              <img 
                src="https://images.unsplash.com/photo-1573497631106-8ea431976aab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Person on laptop"
                className="rounded-2xl w-full h-40 object-cover"
              />
            </div>
            
          
          </div>
          
      
          <div className="absolute -right-4 -bottom-4 -z-10 w-72 h-72 bg-pink-100 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -left-4 -top-4 -z-10 w-72 h-72 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
        </div>
      </div>
    </div>
  );
}
