import { setFooter, setNavbar, createTitle } from "./module/utils.js";
import { publications } from "../asset/publications.js";
import { events } from "../asset/events.js";

function main () {

    setNavbar('NEWS');

    let section = document.querySelector("section");

    let container = document.createElement("div");
    container.setAttribute("class", "container mt-5 mb-5");
    section.appendChild(container);

    container.appendChild(createTitle("News"));

    let timeline = document.createElement("div");
    container.appendChild(timeline);

    // let current_year = (new Date().getFullYear());
    let count = 0;
    for (let [id, event] of Object.entries(events)) { 

        count += 1;
        let parity = (count %2 == 1) ? "odd" : "even";

        // if (current_year != event.year) {

        //     let year_div = document.createElement("div");
        //     year_div.setAttribute("class", "timeline d-none d-md-block");
        //     timeline.appendChild(year_div);

        //     let year = document.createElement("p");
        //     year.setAttribute("class", "timeline-year color-theme fs-5 fw-bold");
        //     year.textContent = current_year;
        //     year_div.appendChild(year);

        //     let year_line = document.createElement("div");
        //     year_line.setAttribute("class", "vertical-line");
        //     year_div.appendChild(year_line);

        //     let year_dot = document.createElement("div");
        //     year_dot.setAttribute("class", "dot");
        //     year_line.appendChild(year_dot);

        //     current_year = event.year;

        // }

        let event_div = document.createElement("div");
        event_div.setAttribute("class", "timeline");
        timeline.appendChild(event_div);

        let timeline_header = document.createElement("div");
        timeline_header.setAttribute("class", "timeline-header " + parity);
        event_div.appendChild(timeline_header);

        let date = document.createElement("div");
        date.setAttribute("class", "fw-bold color-light d-none d-md-block"); 
        date.setAttribute("id", "date");
        date.textContent = event.day + " " + event.month.substring(0, 3).toLocaleUpperCase() + " " + event.year;
        timeline_header.appendChild(date);

        let type_wrap = document.createElement("div");
        type_wrap.setAttribute("class", "d-none d-md-block");
        type_wrap.setAttribute("id", "type-wrap");
        timeline_header.appendChild(type_wrap);

        let type = document.createElement("div");
        type.setAttribute("class", "fw-bold fs-smaller color-subtheme");
        type.setAttribute("id", "type");
        type.textContent = event.type.toUpperCase();
        type_wrap.appendChild(type);

        let label = document.createElement("div");
        label.setAttribute("class", "badge bg-color-light fs-smaller");
        label.textContent = event.label;
        type_wrap.appendChild(label);
        
        let line = document.createElement("div");
        line.setAttribute("class", "vertical-line d-none d-md-block");
        event_div.appendChild(line);

        let dot = document.createElement("div");
        dot.setAttribute("class", "dot");
        line.appendChild(dot);

        let timeline_main = document.createElement("div");
        timeline_main.setAttribute("class", "timeline-main mb-5 " + parity);
        event_div.appendChild(timeline_main);

        let hr_main = document.createElement("hr");
        hr_main.setAttribute("class", "color-light mt-0 d-none d-lg-block");
        timeline_main.appendChild(hr_main);

        let title_wrap = document.createElement("div");
        title_wrap.setAttribute("class", "row mb-3");
        timeline_main.appendChild(title_wrap);

        let img_box_outer = document.createElement("a");
        img_box_outer.setAttribute("class", "col-12 col-md-4 order-first"  + ((parity=="even") ? " order-lg-last" : ""));
        title_wrap.appendChild(img_box_outer);

        let img_obj = publications[event.publication[0]].img;

        let img_box = document.createElement("div");
        img_box.setAttribute("class", "img-box" + (img_obj[1]=="white" ? " img-box-white" : ""));
        img_box_outer.appendChild(img_box);

        let img = document.createElement("img");
        img.setAttribute("src", img_obj[0]);
        img.setAttribute("class", "img-link w-100 img-fit-" + img_obj[1]);
        img_box.appendChild(img);

        let timeline_header_sm = timeline_header.cloneNode(true);
        timeline_header_sm.setAttribute("class", "col-12 d-flex d-md-none justify-content-between my-3");
        title_wrap.appendChild(timeline_header_sm);

        let date_sm = timeline_header_sm.querySelector("#date");
        date_sm.setAttribute("class", "fw-bold color-light fs-smaller")

        let type_wrap_sm = timeline_header_sm.querySelector("#type-wrap");
        type_wrap_sm.setAttribute("class", "d-flex fs-6 order-first");

        let type_sm = type_wrap_sm.querySelector("#type");
        type_sm.setAttribute("class", "fw-bold fs-smaller color-subtheme order-last")
        type_sm.textContent = "\xa0\xa0\xa0" + type_sm.textContent;

        let label_sm = type_wrap_sm.querySelector(".badge");
        label_sm.setAttribute("class", "badge bg-color-light fs-smaller order-first")

        let title = document.createElement("a");
        title.setAttribute("class", "fs-4 fw-bold text-link col-12 col-md-8");
        title.setAttribute("href", event.info[0][1]);
        title.setAttribute("target", "_blank");
        title.setAttribute("rel", "noopener");
        title.textContent = event.title;
        title_wrap.appendChild(title);

        let abstract = document.createElement("p");
        abstract.setAttribute("class", "fs-5")
        abstract.textContent = event.abstract;
        timeline_main.appendChild(abstract);

        let info = document.createElement("p");
        info.setAttribute("class", "fw-bold color-light");
        timeline_main.appendChild(info);

        let count_link = 0;
        for (let item of event.info) {

            count_link += 1;

            let a = document.createElement("a");
            a.setAttribute("class", "text-link");
            a.setAttribute("href", item[1]);
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener");
            a.textContent = item[0];
            info.appendChild(a);

            if (count_link < (event.info.length)) {
                let span = document.createElement("span");
                span.textContent = "\xa0\xa0\xa0|\xa0\xa0\xa0";
                info.appendChild(span);
            }

        }

        timeline_main.appendChild(hr_main.cloneNode(true));

        let hr = document.createElement("hr");
        hr.setAttribute("class", "color-light d-md-none mb-5");
        event_div.appendChild(hr);

    }

    setFooter();

}

main();