// import publications from "../asset/publication.json" assert {type: "json"};
import { publications } from "../asset/publication.js";
import { setFooter, setNavbar, createTitle } from "./module/utils.js";

// Format: [id, title, list_of_publications, abstract]
const research_areas = [
    ["weyl", "Weyl Semimetals", ["rv-guo2023", "rt-guo2020c", "rt-asadchy2020a", "rt-zhao2020", "rt-zheng2017", "rt-zhang2017b", "rt-xu2016b", "rt-belopolski2016", "rt-zheng2016", "rt-xu2015b"], "Weyl semimetals possess many unusual electronic, thermal, and optical properties. For example, they exhibit surface Fermi arc states, chiral anomaly, unconventional charge and heat transport, strain-induced axial gauge fields, novel collective modes, unusual magneto-optical conductivity, and so on ..."],
];


function main () {

    setNavbar("RESEARCH");

    let section = document.querySelector("section");

    for (let research of research_areas) {

        let container = document.createElement("div");
        container.setAttribute("class", "container mt-5 mb-5");
        container.setAttribute("id", research[0]);
        section.appendChild(container);

        container.appendChild(createTitle(research[1]));

        //[todo] add image 

        let abstract = document.createElement("p");
        abstract.setAttribute("class", "fs-5 mb-5");
        abstract.textContent = research[3];
        container.appendChild(abstract);

        let related = document.createElement("h5");
        related.setAttribute("class", "fw-bold color-subtheme");
        related.textContent = "Related Publications";
        container.appendChild(related);
        
        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-unstyled mt-1 flex-grow-1 fs-6");
        container.appendChild(ul);

        for (let id of research[2]) {

            let paper = publications[id];

            let li = document.createElement("li");
            ul.appendChild(li);
            li.setAttribute("class", "d-flex");
            
            let div_bullet = document.createElement("div");
            div_bullet.setAttribute("class", "wd-num flex-shrink-0 d-inline-block");
            li.appendChild(div_bullet);

            let img = document.createElement("img");
            div_bullet.appendChild(img);
            img.setAttribute("src", "./icon/orange.svg");
            img.setAttribute("height", 13);
            img.setAttribute("alight", "left");
            img.setAttribute("class", "mt-1");
            
            let div_item = document.createElement("div");
            li.appendChild(div_item);

            let a_link = document.createElement("a");
            div_item.appendChild(a_link);
            a_link.setAttribute("class", "fw-bold text-link");
            a_link.setAttribute("href", "./publication.html#" + id);
            a_link.setAttribute("target", "_blank");
            a_link.setAttribute("rel", "noopener");
            a_link.textContent = paper.title;

            let div_ref = document.createElement("div");
            div_item.appendChild(div_ref);
            div_ref.setAttribute("class", "fs-smaller");

            let span_article = document.createElement("span");
            div_ref.appendChild(span_article);
            span_article.setAttribute("class", "fw-bold color-subtheme");
            span_article.textContent = paper.type.toUpperCase();

            let span_sp = document.createElement("span");
            div_ref.appendChild(span_sp);
            span_sp.setAttribute("class", "fw-bold color-light");
            span_sp.textContent = "\xa0\xa0\xa0|\xa0\xa0\xa0"; // white space "&nbsp;"

            let span_journal = document.createElement("span");
            div_ref.appendChild(span_journal);
            span_journal.setAttribute("class", "fw-bold color-light");
            span_journal.textContent = paper.info[0];

            div_ref.appendChild(span_sp.cloneNode(true));

            let span_date = document.createElement("span");
            div_ref.appendChild(span_date);
            span_date.setAttribute("class", "fw-bold color-theme");
            span_date.textContent = paper.month.substring(0, 3) + " " + paper.year; 

        }

    }

    setFooter();

}

main();


