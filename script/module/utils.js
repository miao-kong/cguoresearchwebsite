const contacts = [
    ["Google Scholar", "https://scholar.google.com/citations?user=V_-6CVIAAAAJ", "./icon/googlescholar.svg"],
    ["ResearchGate", "https://www.researchgate.net/profile/Cheng-Guo-35", "./icon/researchgate.svg"],
    ["ORCID", "https://orcid.org/0000-0003-4913-8150", "./icon/orcid.svg"],
    ["LinkedIn", "https://www.linkedin.com/in/chengguo23", "./icon/linkedin.svg"],
    ["Email", "mailto:guocheng@stanford.edu", "./icon/email.svg"]
];

const sitemap = [
    ["HOME", "./index.html", [
        ["Highlight", "./index.html#highlight"],
        ["Bio", "./index.html#bio"]
    ]],
    ["RESEARCH", "./research.html", [
        ["Weyl Semimetals", "./research.html#weyl"]
    ]],
    ["PUBLICATION", "./publication.html", [
        ["Article", "./publication.html#article"],
        ["Review", "./publication.html#review"],
        ["Book", "./publication.html#book"],
        ["Patent", "./publication.html#patent"]
    ]],
    ["NEWS", "./news.html", []]
];


export function createTitle(title) {
    // Create a section title with decoration

    let div = document.createElement("div");
    div.setAttribute("class", "d-flex justify-content-between mb-5");

    let left_node = document.createElement("img");
    left_node.setAttribute("src", "./icon/cat_stretch_left.svg");
    left_node.setAttribute("class", "chap-decor");
    div.appendChild(left_node);

    let text_node = document.createElement("h1");
    text_node.setAttribute("class", "fw-bold align-self-end mb-0");
    text_node.textContent = title;
    div.appendChild(text_node);

    let right_node = document.createElement("img");
    right_node.setAttribute("src", "./icon/cat_stretch_right.svg");
    right_node.setAttribute("class", "chap-decor");
    div.appendChild(right_node);

    return div;

}


export function setNavbar (current) {
    // Add content to navbar

    let nav = document.querySelector("nav");
    nav.setAttribute("class", "navbar sticky-top navbar-expand-lg navbar-light bg-white navbar-opacity");

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    nav.append(container);

    let brand = document.createElement("a");
    brand.setAttribute("class", "navbar-brand");
    brand.setAttribute("href", "./index.html");
    container.append(brand);

    let brand_img = document.createElement("img");
    brand_img.setAttribute("src", "./icon/orange.svg");
    brand_img.setAttribute("class", "d-inline-block align-text-top");
    brand_img.setAttribute("width", 30);
    brand_img.setAttribute("height", 24);
    brand.appendChild(brand_img);

    let brand_text = document.createElement("span");
    brand_text.textContent = " CHENG GUO";
    brand.appendChild(brand_text);

    let toggler = document.createElement("button");
    toggler.setAttribute("class", "navbar-toggler");
    toggler.setAttribute("type", "button");
    toggler.setAttribute("data-bs-toggle", "offcanvas");
    toggler.setAttribute("data-bs-target", "#navbarNavDropdown");
    toggler.setAttribute("aria-controls", "navbarNavDropdown");
    toggler.setAttribute("aria-expanded", "false");
    container.append(toggler);

    let toggler_icon = document.createElement("span");
    toggler_icon.setAttribute("class", "navbar-toggler-icon");
    toggler.appendChild(toggler_icon);

    let offcanvas = document.createElement("div");
    offcanvas.setAttribute("class", "offcanvas offcanvas-start flex-lg-row");
    offcanvas.setAttribute("id", "navbarNavDropdown");
    container.appendChild(offcanvas);

    let offcanvas_header = document.createElement("div");
    offcanvas_header.setAttribute("class", "offcanvas-header");
    offcanvas.appendChild(offcanvas_header);

    let offcanvas_brand = brand.cloneNode(true);
    offcanvas_brand.setAttribute("class", "navbar-brand d-lg-none d-xl-none");
    offcanvas_header.appendChild(offcanvas_brand);

    let offcanvas_toggler = document.createElement("button");
    offcanvas_toggler.setAttribute("class", "btn-close text-reset");
    offcanvas_toggler.setAttribute("type", "button");
    offcanvas_toggler.setAttribute("data-bs-dismiss", "offcanvas");
    offcanvas_toggler.setAttribute("aria-label", "Close");
    offcanvas_header.append(offcanvas_toggler);

    let logo_right = document.createElement("a");
    logo_right.setAttribute("class", "d-none d-lg-block order-lg-last");
    logo_right.setAttribute("href", "#");
    offcanvas.appendChild(logo_right);

    let logo_right_img = document.createElement("img");
    logo_right_img.setAttribute("src", "./icon/cat.svg");
    logo_right_img.setAttribute("width", 35);
    logo_right.appendChild(logo_right_img);

    let map = document.createElement("ul");
    map.setAttribute("class", "navbar-nav mx-lg-auto offcanvas-body");
    offcanvas.appendChild(map);

    for (let tree of sitemap) {
    
        let li_tree = document.createElement("li");
        li_tree.setAttribute("class", "nav-item dropdown");
        map.appendChild(li_tree);

        let div_small = document.createElement("div");
        div_small.setAttribute("class", "container d-flex justify-content-between flex-wrap d-lg-none");
        li_tree.appendChild(div_small);

        let a_title = document.createElement("a"); 
        a_title.setAttribute("class", current==tree[0] ? "nav-link active" : "nav-link"); 
        a_title.setAttribute("href", tree[1]); 
        a_title.textContent = tree[0];
        div_small.appendChild(a_title);

        let div_large = document.createElement("div");
        div_large.setAttribute("class", "container d-none d-lg-block me-3");
        li_tree.appendChild(div_large);

        div_large.appendChild(a_title.cloneNode(true));

        if (tree[2].length > 0) {

            let a_toggle = document.createElement("a");
            a_toggle.setAttribute("class", current==tree[0] ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle");
            a_toggle.setAttribute("id", "navbarDropdownMenuLink");
            a_toggle.setAttribute("role", "button");
            a_toggle.setAttribute("data-bs-toggle", "dropdown");
            a_toggle.setAttribute("aria-expanded", "false");
            div_small.appendChild(a_toggle);

            let div_break = document.createElement("div");
            div_break.setAttribute("class", "flex-row-break");
            div_small.appendChild(div_break);
            
            let ul = document.createElement("ul"); 
            ul.setAttribute("class", "dropdown-menu border-0");
            ul.setAttribute("aria-labelledby", "navbarDropdownMenuLink");
            div_small.appendChild(ul);
    
            for (let leaf of tree[2]) {
    
                let li = document.createElement("li");
                ul.appendChild(li);
        
                let a = document.createElement("a");
                a.setAttribute("class", "dropdown-item");
                a.setAttribute("href", leaf[1]);
                a.textContent = leaf[0];
                li.appendChild(a);
    
            }

            let ul_large = ul.cloneNode(true);
            ul_large.setAttribute("class", "dropdown-menu");
            div_large.appendChild(ul_large);

        }

    }

}


export function setFooter () {
    // Add content to footer

    let footer = document.querySelector("footer");
    footer.setAttribute("class", "container");

    footer.appendChild(document.createElement("hr"));

    let div_container = document.createElement("div");
    div_container.setAttribute("class", "row justify-content-between");
    footer.appendChild(div_container);

    let div_connect = document.createElement("div");
    div_connect.setAttribute("class", "col-md-12 col-lg-4 pr-0 text-left text-lg-left mb-5");
    div_container.appendChild(div_connect);

    let connect_title = document.createElement("h5");
    connect_title.textContent = "CONNECT";
    div_connect.appendChild(connect_title);

    let ul_connect = document.createElement("ul");
    ul_connect.setAttribute("class", "list-unstyled");
    div_connect.appendChild(ul_connect);

    for (let contact of contacts) {

        let li = document.createElement("li");
        li.setAttribute("class", "mb-3");
        ul_connect.appendChild(li);

        let a = document.createElement("a");
        a.setAttribute("class", "text-secondary text-decoration-none");
        a.setAttribute("href", contact[1]);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
        li.appendChild(a);

        let img = document.createElement("img");
        img.setAttribute("src", contact[2]);
        img.setAttribute("class", "me-1");
        img.setAttribute("width", 30);
        a.appendChild(img);

        let span = document.createElement("span");
        span.textContent = " " + contact[0];
        a.appendChild(span);

    }

    let div_columns = document.createElement("div");
    div_columns.setAttribute("class", "col-md-12 col-lg-8 row justify-content-start");
    div_container.appendChild(div_columns);

    for (let tree of sitemap) {

        let div = document.createElement("div");
        div.setAttribute("class", "col-6 col-md-3 col-lg-3 pr-0 mb-3");
        div_columns.appendChild(div);

        let h5_title = document.createElement("h5");
        div.appendChild(h5_title);

        let a_title = document.createElement("a");
        a_title.setAttribute("class", "text-reset text-decoration-none");
        a_title.setAttribute("href", tree[1]);
        a_title.textContent = tree[0];
        h5_title.appendChild(a_title);

        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-unstyled mb-0");
        div.appendChild(ul);

        for (let leaf of tree[2]) {

            let li = document.createElement("li");
            ul.appendChild(li);
    
            let a = document.createElement("a");
            a.setAttribute("class", "text-secondary text-decoration-none");
            a.setAttribute("href", leaf[1]);
            a.textContent = leaf[0];
            li.appendChild(a);

        }

    }
    
    footer.appendChild(document.createElement("hr"));

    let p = document.createElement("p");
    p.setAttribute("class", "text-center");
    p.textContent = "Copyright \xa9 2022-" + (new Date().getFullYear()) + "\xa0 Cheng Guo. All rights reserved."; // "\xa9" is "&copy;" and "\xa0" is "&nbsp;"
    footer.appendChild(p);

}


