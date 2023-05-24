import Home from "./views/Home.js"
import League from "./views/League.js" 
import Settings from "./views/Settings.js"
import LeagueView from "./views/LeagueView.js"

//10 Regex 
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

//11 Get params 
const getParms = match =>{
    const values = match.result.slice(1)
    const Key = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result=>result[1])

    return Object.fromEntries(Key.map((key, i)=> {
        return [key, values[i]]
    }))
}
// router
const router = async() =>{
    // test Regex 
    //console.log(pathToRegex("/post-view/:id"));
    const routes = [
        {path:"/home", view: Home},
        {path:"/leagues", view: League},
        {path:"/settings", view: Settings},
        {path:"/leagues/:id", view: LeagueView}
    ]

    //2 match  function

    const potentialMatches = routes.map(route =>{
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }   
    })
    //console.log(potentialMatches)
  //3 find view 

    let match =  potentialMatches.find(potentialMatches => potentialMatches.result!== null);
    if(!match)
    {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    console.log(match.result);

    //console.log(match.route.view());
    //8 Render view
    const view = new match.route.view(getParms(match));
    document.querySelector("#app").innerHTML = await view.getHtml();  
}

//9 
 window.addEventListener("popstate", router)

// 5 navigate state
const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
}

document.addEventListener("DOMContentLoaded", ()=>{

    document.body.addEventListener("click", e=>{
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});