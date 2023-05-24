import AbstractView from "./AbstractView.js";

export default class extends AbstractView
{
    constructor(params)
    {
        super(params)
        this.setTitle('Visualiser Article')
    }

    async getHtml()
    {
        const nu = Number(this.params.id)

        async function getData(url){
            const response =  await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/posts.json')
        const article = data.find(item =>item.id == nu)

        return `
        <h1>`+ article.title + `</h1>
        <p>` + article.descr + `</p>
        <strong>` + article.author + `</strong>
        <br>
        <a href = '/posts' data-link> Retourner </a>`
    }
}