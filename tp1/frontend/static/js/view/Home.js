import AbstractView from "./AbstractView.js";
export default class extends AbstractView
{
    constructor(params)
    {
        super(params);
        this.setTitle('Home');
    }

    async getHtml ()
    {
        return `
            <h1> Bienvene à Football SPA</h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aliquid consectetur quisquam sit velit dolorem debitis, enim facilis repellat natus error nostrum magnam officiis, obcaecati quis! Sequi deleniti quibusdam modi.</p>
            <a href="/posts" data-link> Voir les articles </a>
        `
    }
}