import { setFooter, setNavbar, createTitle } from "./utils.js";
import { research_interest } from "/asset/content.js";
import { publications } from "/asset/publications.js";

function main () {

    setNavbar("HOME");

    // About page CTA buttons

    let button = document.querySelector("#about-cta");
    button.setAttribute("class", "d-flex justify-content-evenly flex-wrap mb-3");

    let pub_div = document.createElement("a");
    pub_div.setAttribute("class", "btn button-subtheme mb-3");
    pub_div.setAttribute("href", "./publication.html");
    pub_div.setAttribute("role", "button");
    pub_div.textContent = "Full List of Publications";
    button.appendChild(pub_div);

    let news_div = document.createElement("a");
    news_div.setAttribute("class", "btn button-subtheme mb-3");
    news_div.setAttribute("href", "./news.html");
    news_div.setAttribute("role", "button");
    news_div.textContent = "News and Latest Events";
    button.appendChild(news_div);

    // research_interest

    let research_container = document.querySelector("#research-interest");
    research_container.setAttribute("class", "container mt-5 mb-5");

    research_container.appendChild(createTitle("Research Interest"));

    // ============================== option 1: vertical card (don't use)

    // let research_div = document.createElement("div");
    // research_div.setAttribute("class", "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 mb-5 d-none");
    // research_container.appendChild(research_div);

    // for (let [id, research_area] of Object.entries(research_interest)) {

    //     let publication = publications[research_area.publication[0]];

    //     let area_outer_div = document.createElement("div");
    //     area_outer_div.setAttribute("class", "col");
    //     research_div.appendChild(area_outer_div);

    //     let area_card = document.createElement("a");
    //     area_card.setAttribute("class", "card h-100 border-secondary text-decoration-none text-reset");
    //     area_card.setAttribute("href", "./research.html#" + id);
    //     area_outer_div.appendChild(area_card);

    //     let card_img = document.createElement("img");
    //     card_img.setAttribute("class", "card-img-top card-img-standout");
    //     card_img.setAttribute("src", publication.img[0]);
    //     area_card.appendChild(card_img);

    //     let card_body = document.createElement("div");
    //     card_body.setAttribute("class", "card-body");
    //     area_card.appendChild(card_body);

    //     let card_title = document.createElement("h5");
    //     card_title.setAttribute("class", "card-title fw-bold");
    //     // card_title.textContent = "Reciprocity Constraints on Reflection"; // change to title short
    //     card_title.textContent = research_area.name;
    //     card_body.appendChild(card_title);

    //     let card_text = document.createElement("p");
    //     card_text.setAttribute("class", "card-text");
    //     // card_text.textContent = "Loretnz reciprocity is known to impose constraints on transmission, absorption, and emission. We reveal reciprocity constraints on reflection." // change to brief abstract
    //     card_text.textContent = research_area.abstract_short;
    //     card_body.appendChild(card_text);

    //     let card_footer = document.createElement("div");
    //     card_footer.setAttribute("class", "card-footer color-subtheme fw-bold");
    //     // card_footer.textContent = publication.info[0]; // change to abbreviation ?
    //     card_footer.textContent = "Learn More >>";
    //     area_card.appendChild(card_footer);

    // } 

    // ============================== option 2: horizontal card (use this)

    for (let [id, research_area] of Object.entries(research_interest)) {

        let publication = publications[research_area.publication[0]];
        let img_src = publication.img[publication.img_index.main];

        let card = document.createElement("a");
        card.setAttribute("class", "card h-100 border-0 text-decoration-none text-reset mb-5");
        card.setAttribute("href", "./research.html#" + id);
        research_container.appendChild(card);

        let row = document.createElement("div");
        row.setAttribute("class", "d-flex justify-content-between flex-column flex-md-row");
        card.appendChild(row);

        let card_img_outer = document.createElement("div");
        card_img_outer.setAttribute("class", "me-md-5");
        row.appendChild(card_img_outer);

        let card_img_box = document.createElement("div");
        card_img_box.setAttribute("class", "overflow-hidden" + (img_src.background=="white" ? " img-box-white" : ""));
        card_img_outer.appendChild(card_img_box);

        let card_img = document.createElement("img");
        card_img.setAttribute("class", "img-size-area img-fit-" + img_src.background);
        card_img.setAttribute("src", img_src.path);
        card_img_box.appendChild(card_img);

        let card_body = document.createElement("div");
        card_body.setAttribute("class", "d-flex flex-column justify-content-between m-3 m-md-0");
        row.appendChild(card_body);

        let card_title_wrap = document.createElement("div");
        card_body.append(card_title_wrap);

        let card_title = document.createElement("p");
        card_title.setAttribute("class", "fs-4 fw-bold"); 
        card_title.textContent = research_area.name;
        card_title_wrap.appendChild(card_title);

        let card_text = document.createElement("p");
        card_text.setAttribute("class", "fs-5"); 
        card_text.textContent = research_area.abstract_short;
        card_title_wrap.appendChild(card_text);

        let card_footer = document.createElement("div");
        card_footer.setAttribute("class", "text-start text-md-end color-subtheme fw-bold");
        card_footer.textContent = "Learn More >>";
        card_body.appendChild(card_footer);

    }

    setFooter();

}

main();