import AbstractView from "./AbstractView.js";
export default class extends AbstractView
{
    constructor(params)
    {
        super(params);
        this.setTitle('Leagues');
    }

    async getHtml ()
    {
      async function getData(url){
        const response = await fetch(url)
        return response.json()
      } 

      const data = await getData('/static/js/views/league.json')
     / console.log(data);

   
      let listPosts ="<ul>"
      for (let i in data) 
      {
            listPosts += "<li> <a href='/league-view/"+data[i]['id']+" ' data-link>" +data[i]['name']+"</a></li>"
      }
      listPosts +="</ul>"

      return `<h1>Leagues  </h1> 
      `+listPosts
    }
}