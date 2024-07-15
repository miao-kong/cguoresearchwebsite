// import publications from "/asset/publication.json" assert {type: "json"};
import { publications } from "/asset/publications.js";
import { setFooter, setNavbar, createTitle } from "/script/utils.js";
import { research_interest } from "/asset/content.js";

function createGalleryCard (img_source, title_short, abstract_short, link) {

    let card_container = document.createElement("div");
    card_container.setAttribute("class", "flip-frame");

    let card = document.createElement("div");
    card.setAttribute("class", "flip d-flex justify-content-center align-items-center");
    card_container.appendChild(card);

    let img = document.createElement("img");
    img.setAttribute("class", "front");
    img.setAttribute("src", img_source);
    card.appendChild(img);

    let info = document.createElement("div");
    info.setAttribute("class", "back d-flex flex-column justify-content-between");
    card.appendChild(info);

    let title_wrap = document.createElement("div");
    title_wrap.setAttribute("class", "overflow-hidden");
    info.append(title_wrap);

    let title = document.createElement("p");
    title.setAttribute("class", "fw-bold");
    title.textContent = title_short;
    title_wrap.appendChild(title);

    let text = document.createElement("p");
    text.textContent = abstract_short;
    title_wrap.appendChild(text);
    
    let footer = document.createElement("a");
    footer.setAttribute("class", "text-decoration-none color-subtheme fw-bold mt-3");
    footer.setAttribute("href", link);
    footer.textContent = "Learn More >>";
    info.appendChild(footer);

    return card_container;
}

function main () {

    setNavbar("RESEARCH");

    let section = document.querySelector("section");

    for (let [id, research] of Object.entries(research_interest)) {

        let container = document.createElement("div");
        container.setAttribute("class", "container mt-5 mb-5");
        container.setAttribute("id", id);
        section.appendChild(container);

        container.appendChild(createTitle(research.name));

        let gallery_wrapper = document.createElement("div");
        gallery_wrapper.setAttribute("class", "d-flex align-items-center justify-content-center mb-5");
        container.appendChild(gallery_wrapper);

        let back_button = document.createElement("img");
        back_button.setAttribute("src", "/icon/back_arrow.svg");
        back_button.setAttribute("id", "back-button");
        gallery_wrapper.appendChild(back_button);

        back_button.addEventListener("click", () => {
            gallery.style.scrollBehavior = "smooth";
            gallery.scrollLeft -= 300;
        }); 

        let gallery = document.createElement("div");
        gallery.setAttribute("class", "gallery"); 
        gallery_wrapper.appendChild(gallery);

        let img_cnt = 0;
        let img_threshold = 6; // maximum number images to include in each gallery

        // add the main image of each publication to gallery
        for (let id of research.publication) {
            let paper = publications[id];
            if ((paper.img_index != null) && (paper.img_index.main != null)) {
                let img_id = paper.img_index.main;
                gallery.appendChild(createGalleryCard(paper.img[img_id].path, paper.title, paper.abstract_short, "/publication.html#" + id));
                img_cnt += 1;
            }
        }

        // add the other images of each publication to gallery
        if (img_cnt < img_threshold) {
            for (let id of research.publication) {
                let paper = publications[id];
                if ((paper.img_index != null) && (paper.img_index.other != null)) {
                    for (let img_id of paper.img_index.other) {
                        gallery.appendChild(createGalleryCard(paper.img[img_id].path, paper.title, paper.abstract_short, "/publication.html#" + id));
                        img_cnt += 1;
                        if (img_cnt >= img_threshold) {
                            break;
                        }
                    }
                }
                if (img_cnt >= img_threshold) {
                    break;
                }
            }
        }

        let forward_button = document.createElement("img");
        forward_button.setAttribute("src", "/icon/forward_arrow.svg");
        forward_button.setAttribute("id", "forward-button");
        gallery_wrapper.appendChild(forward_button);

        forward_button.addEventListener("click", () => {
            gallery.style.scrollBehavior = "smooth";
            gallery.scrollLeft += 300;
        });

        // Abstract

        let abstract = document.createElement("p");
        abstract.setAttribute("class", "fs-5 mb-5");
        abstract.textContent = research.abstract;
        container.appendChild(abstract);

        // Related publications

        let related = document.createElement("h5");
        related.setAttribute("class", "fw-bold");
        related.textContent = "Related Publications";
        container.appendChild(related);
        
        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-unstyled mt-1 flex-grow-1 fs-6");
        container.appendChild(ul);

        for (let id of research.publication) {

            let paper = publications[id];

            let li = document.createElement("li");
            ul.appendChild(li);
            li.setAttribute("class", "d-flex");
            
            let div_bullet = document.createElement("div");
            div_bullet.setAttribute("class", "wd-num flex-shrink-0 d-inline-block");
            li.appendChild(div_bullet);

            let img = document.createElement("img");
            div_bullet.appendChild(img);
            img.setAttribute("src", "/icon/orange.svg");
            img.setAttribute("height", 13);
            img.setAttribute("alight", "left");
            img.setAttribute("class", "mt-1");
            
            let div_item = document.createElement("div");
            li.appendChild(div_item);

            let a_link = document.createElement("a");
            div_item.appendChild(a_link);
            a_link.setAttribute("class", "fw-bold text-link-hover");
            a_link.setAttribute("href", "/publication.html#" + id);
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


