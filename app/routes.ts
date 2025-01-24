import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),

    ...prefix("countries",[
        index("routes/countries.tsx"),  // if there isn't path we'll use index , if there is a path name we'll use route.
        route(":countryName","routes/country.tsx")    
    ])

 

] satisfies RouteConfig;
