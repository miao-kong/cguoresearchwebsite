// import publications from "/asset/publication.json" assert {type: "json"};
import { publications } from "/asset/publications.js";
import { setFooter, setNavbar, createTitle } from "./utils.js";
import { publication_types } from "/asset/content.js";

function createAuthor (author_list) {
    // Parse and author list and create a node

    let p = document.createElement("p");
    p.setAttribute("class", "color-light");

    let len = author_list.length;
    let count = 0;

    for (let author of author_list) {
        count += 1;

        let full_name = author.replaceAll("*", "");
        full_name = full_name.replaceAll("+", "");

        let names = full_name.trim().split(/\s+/);

        let short_name = "";
        if (names[0].includes("-")) {
            let first_names = names[0].split("-");
            for (let [id, name] of Object.entries(first_names)) {
                short_name += name[0].toUpperCase() + ".";
                if (id!=(first_names.length-1)) {
                    short_name += "-";
                } else {
                    short_name += " ";
                }
            }
        } else {
            short_name = names[0][0].toUpperCase() + ". "
        }
        if (names.length>2) {
            for (let middle_name of names.slice(1, names.length-1)) {
                short_name += middle_name[0].toUpperCase() + ". ";
            }
        }
        short_name += names[names.length - 1];

        let span = document.createElement("span");
        p.appendChild(span);
        if (full_name.toLowerCase().replaceAll(" ", "") =="chengguo") {
            span.setAttribute("class", "fw-bold color-theme");
        }

        if (author.includes("*")) {
            span.textContent = short_name + "*";
        } else {
            span.textContent = short_name;
        }

        if (author.includes("+")) {
            let sup = document.createElement("sup");
            sup.textContent = "\u2020"; // "&dagger;"
            span.appendChild(sup);
        }

        if (count==(len-1)) {
            let and = document.createElement("span");
            and.textContent = len==2 ? " and " : ", and ";
            p.appendChild(and);
        } else if (count!=len) {
            let comma = document.createElement("span");
            comma.textContent = ", ";
            p.appendChild(comma);
        }

    }

    return p
    
}

function main () {

    setNavbar("PUBLICATION");

    let section = document.querySelector("section");

    for (let chapter of publication_types) {

        let container = document.createElement("div");
        container.setAttribute("class", "container mt-5 mb-5");
        container.setAttribute("id", chapter);
        section.appendChild(container);

        container.appendChild(createTitle(chapter[0].toUpperCase() + chapter.slice(1, chapter.length)));
        
    }
    
    for (let [id, publication] of Object.entries(publications)) { 

        let pub_year = document.querySelector("#" + publication.type + '-' + (publication.preprint ? "preprint" : publication.year));

        if (pub_year==null) {
    
            let pub_section = document.querySelector("#" + publication.type);

            pub_year = document.createElement("div");
            pub_year.setAttribute("class", "d-flex flex-column flex-md-row");
            pub_year.setAttribute("id", publication.type + '-' + (publication.preprint ? "preprint" : publication.year));
            pub_section.appendChild(pub_year); 
    
            let text_year = document.createElement("h2");
            text_year.setAttribute("class", publication.preprint ? "color-theme fs-4 wd-yr flex-shrink-0" : "color-theme wd-yr flex-shrink-0");
            text_year.textContent = publication.preprint ? "Preprint" : publication.year;
            pub_year.appendChild(text_year);
    
            let h_year_divider = document.createElement("hr");
            h_year_divider.setAttribute("class", "color-theme d-md-none");
            pub_year.appendChild(h_year_divider);
    
            let pub_list = document.createElement("ul");
            pub_list.setAttribute("class", "list-unstyled mt-1 flex-grow-1");
            pub_year.appendChild(pub_list);

        }
    
        let ul = pub_year.querySelector("ul");
        
        let li = document.createElement("li");
        li.setAttribute("class", "d-flex");
        li.setAttribute("id", id);
        ul.appendChild(li);
        
        let p = document.createElement("p");
        p.setAttribute("class", "color-light fw-bold wd-num flex-shrink-0");
        p.textContent = publication.place; 
        li.appendChild(p);
    
        let div_outer = document.createElement("div");
        div_outer.setAttribute("class", "d-flex justify-content-between flex-grow-1");
        li.appendChild(div_outer);
    
        let div_inner = document.createElement("div");
        div_inner.setAttribute("class", "me-2");
        div_outer.appendChild(div_inner);
    
        let title_wrap = document.createElement("p");
        div_inner.appendChild(title_wrap);

        let title = document.createElement("span");
        title.setAttribute("class", "fw-bold");
        title.textContent = publication.title;
        title_wrap.appendChild(title);

        if (publication.label) {

            title.textContent += "\xa0\xa0\xa0";

            let label = document.createElement("div");
            // label.setAttribute("class", "badge bg-color-light");
            label.setAttribute("class", "d-inline-block label-light-inv label-size");
            label.textContent = publication.label;
            title_wrap.append(label)

        }

        let a_headerlink = document.createElement("a");
        a_headerlink.setAttribute("class", "headerlink");
        a_headerlink.setAttribute("href", "#" + id);
        a_headerlink.textContent = "#";
        title_wrap.appendChild(a_headerlink);

        if (publication.subtitle) {
            let p_subtitle = document.createElement("p");
            p_subtitle.setAttribute("class", "color-light");
            p_subtitle.textContent = publication.subtitle;
            div_inner.appendChild(p_subtitle);
        }

        div_inner.appendChild(createAuthor(publication.author));
    
        let p_info = document.createElement("p");
        p_info.setAttribute("class", "color-light");
        div_inner.appendChild(p_info);
    
        let category = document.createElement("span");
        category.setAttribute("class", "fw-bold me-2");
        category.textContent = publication.info[0];
        p_info.appendChild(category);
    
        let number = document.createElement("span");
        number.setAttribute("class", "me-2");
        number.textContent = " " + publication.info[1];
        p_info.appendChild(number);
    
        let time = document.createElement("span");
        time.setAttribute("class", "me-3 nobr");
        time.textContent = " " + publication.month.substring(0, 3) + " " + publication.year;
        p_info.appendChild(time);
    
        let resource = document.createElement("span");
        resource.setAttribute("class", "nobr");
        p_info.appendChild(resource);

        for (let [link_name, link] of Object.entries(publication.resource)) {

            let a = document.createElement("a");
            a.setAttribute("class", "button-subtheme label-size text-decoration-none me-2");
            a.setAttribute("href", link);
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener");
            resource.appendChild(a);

            let img_src = "./icon/doi.svg";
            let img_height = 10;
            switch (link_name) {
                case "pdf":
                    link_name = "PDF";
                    img_src = "./icon/pdf.svg";
                    // img_height = 10.5;
                    a.removeAttribute("rel");
                    break;
                case "arxiv":
                    link_name = "arXiv";
                    break;
                case "si":
                    link_name = "SI";
                    img_src = "./icon/si.svg";
                    // img_height = 10.5;
                    a.removeAttribute("rel");
                    break;
            }

            // a.textContent = " " + link_name + " ";

            let img = document.createElement("img");
            img.setAttribute("class", "img-filter-subtheme mb-1");
            img.setAttribute("src", img_src);
            img.setAttribute("height", img_height);
            a.appendChild(img);

            let a_text = document.createTextNode(" " + link_name);
            a.appendChild(a_text);

        }

        //[todo] add bibtex

        // let cite_button = document.createElement("a");
        // cite_button.setAttribute("class", "color-subtheme text-decoration-none me-2");
        // cite_button.setAttribute("href", "#" + id + "-cite");
        // cite_button.setAttribute("role", "button");
        // cite_button.setAttribute("data-bs-toggle", "collapse");
        // cite_button.setAttribute("aria-expanded", "false");
        // cite_button.setAttribute("aria-controls", id + "-cite");
        // cite_button.textContent = " Cite "; //"BibTeX";
        // resource.appendChild(cite_button);

        // let cite_img = document.createElement("img");
        // cite_img.setAttribute("class", "mb-1");
        // cite_img.setAttribute("src", "./icon/cite.svg");
        // cite_img.setAttribute("height", 13.5);
        // cite_button.appendChild(cite_img);

        // let cite_collapse = document.createElement("div");
        // cite_collapse.setAttribute("class", "collapse");
        // cite_collapse.setAttribute("id", id + "-cite");
        // div_inner.appendChild(cite_collapse);

        // let cite_card = document.createElement("div");
        // cite_card.setAttribute("class", "card card-body mb-3");
        // cite_card.textContent = "Test bibtex citation";
        // cite_collapse.appendChild(cite_card);

        // let cite_copy = document.createElement("button");
        // cite_copy.textContent = "copy";
        // cite_card.appendChild(cite_copy);

        // cite_copy.addEventListener("click", () => {
        //     navigator.clipboard.writeText(cite_card.textContent);
        //     alert("Copied to clipboard: " + cite_card.textContent);
        // });


        


        //finish bibtex

        if ((publication.img_index != null) && (publication.img_index.main != null)) {

            let img_src = publication.img[publication.img_index.main];

            // This div ensures the integrity of image during webpage size adjustment
            // let img_box_outer = document.createElement("div");
            // img_box_outer.setAttribute("class", "d-none d-md-block");
            // div_outer.appendChild(img_box_outer);

            let img_box_outer = document.createElement("a");
            img_box_outer.setAttribute("class", "d-none d-md-block");
            img_box_outer.setAttribute("href", publication.resource["pdf"]);
            img_box_outer.setAttribute("target", "_blank");
            img_box_outer.setAttribute("rel", "noopener");
            div_outer.appendChild(img_box_outer);

            let img_box = document.createElement("div");
            img_box.setAttribute("class", "overflow-hidden" + (img_src.background=="white" ? " img-box-white" : ""));
            img_box_outer.appendChild(img_box);
    
            let img = document.createElement("img");
            img.setAttribute("class", "img-link img-size-pub img-fit-" + img_src.background);
            img.setAttribute("src", img_src.path);
            img_box.appendChild(img);

        }

        let h_li_divider = document.createElement("hr");
        h_li_divider.setAttribute("class", "color-light d-none d-md-block");
        ul.appendChild(h_li_divider);
    
    }

    //Remove the last <hr> divider of each section
    for (let chapter of publication_types) {
        let hr = document.querySelector("#" + chapter).querySelectorAll("hr");
        hr[hr.length - 1].remove();
    }

    setFooter();
    
}

main();
