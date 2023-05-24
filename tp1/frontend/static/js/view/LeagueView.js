import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Leagues-Info');
  }

  async getHtml() {
    const response = await fetch('/static/js/views/league.json');
    const data = await response.json();

    let listPosts = "<ul>";
    for (let i in data.response) {
      const league = data.response[i].league;
      const country = data.response[i].country;
      const seasons = data.response[i].seasons;

      let seasonInfo = "";
      for (let j in seasons) {
        const season = seasons[j];
        const { year, start, end } = season;
        seasonInfo += `<li>Year: ${year}, Start Date: ${start}, End Date: ${end}</li>`;
      }

      listPosts += `<li>
        <a href="/league-view/${league.id}" data-link>${league.name}</a>
        <ul>
          <li>Country: ${country.name}</li>
          ${seasonInfo}
        </ul>
      </li>`;
    }
    listPosts += "</ul>";

    return `<h1>Posts</h1>${listPosts}`;
  }
}
