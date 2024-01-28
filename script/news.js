import { setFooter, setNavbar, createTitle } from "/script/utils.js";
import { events } from "/asset/events.js";
import { logos } from "/asset/resources.js";

function main () {

    setNavbar('NEWS');

    let section = document.querySelector("section");

    let container = document.createElement("div");
    container.setAttribute("class", "container mt-5 mb-5");
    section.appendChild(container);

    container.appendChild(createTitle("News"));

    // timeline: all events
    // event_div: one event
    // - timeline_header: date, location (moved to timeline_name under title_wrap on <= small screen)
    // - line: vertical line divider (only display on >=medium screen)
    // - timeline_main: main event content, including:
    //   - title_wrap: organizer logo, title
    //   - (timeline_header: when <= small screen)
    //   - type_wrap: event type, label
    //   - abstract: if any
    //   - info and link: additional info, resources or links

    let timeline = document.createElement("div");
    container.appendChild(timeline);

    // let current_year = (new Date().getFullYear());
    let count = 0;
    for (let [id, event] of Object.entries(events)) { 

        if (event.display == false) {
            continue;
        }

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

        // Add horizontal divider for small screen
        // let hr = document.createElement("hr");
        // hr.setAttribute("class", "color-light d-md-none");
        // event_div.appendChild(hr);

        // timeline_header

        let timeline_header = document.createElement("div");
        timeline_header.setAttribute("class", "d-none d-md-block timeline-header " + parity);
        event_div.appendChild(timeline_header);

        let date = document.createElement("div");
        date.setAttribute("class", "fw-bold color-theme");
        date.textContent = event.day + " " + event.month.substring(0, 3).toLocaleUpperCase() + " " + event.year;
        timeline_header.appendChild(date);

        if (event.location != null) {
            let location = document.createElement("div");
            location.setAttribute("class", "fw-bold color-theme");
            location.textContent = event.location;
            timeline_header.appendChild(location);
        }

        // line

        let line = document.createElement("div");
        line.setAttribute("class", "vertical-line d-none d-md-block");
        event_div.appendChild(line);

        let dot = document.createElement("div");
        dot.setAttribute("class", "dot");
        line.appendChild(dot);

        // timeline_main

        let timeline_main = document.createElement("div");
        timeline_main.setAttribute("class", "timeline-main mb-0 mb-md-5 " + parity);
        event_div.appendChild(timeline_main);

        // Add horizontal divider for timeline_main on large screen
        // let hr_main = document.createElement("hr");
        // hr_main.setAttribute("class", "color-light mt-0 d-none d-lg-block");
        // timeline_main.appendChild(hr_main);

        // timeline_main / title_wrap

        let title_wrap = document.createElement("div");
        title_wrap.setAttribute("class", "row mb-3");
        timeline_main.appendChild(title_wrap);

        let img_box_outer = document.createElement("a");
        img_box_outer.setAttribute("class", "col-12 col-md-4 order-first mb-3"  + ((parity=="even") ? " order-lg-last" : ""));
        title_wrap.appendChild(img_box_outer);

        let img_box = document.createElement("div");
        img_box.setAttribute("class", "overflow-hidden img-box-white img-size-news p-3 d-flex justify-content-center align-items-center");
        img_box_outer.appendChild(img_box);

        let img = document.createElement("img");
        img.setAttribute("src", logos[event.organizer]);
        // img.setAttribute("height", 50)
        img.setAttribute("class", "w-100 img-fit-white");
        img_box.appendChild(img);

        let title = document.createElement("p");
        title.setAttribute("class", "fs-5 fw-bold col-12 col-md-8");
        title.textContent = event.title;
        title_wrap.appendChild(title);

        // timeline_header for <= small screen

        let timeline_header_sm = timeline_header.cloneNode(true);
        timeline_header_sm.setAttribute("class", "d-flex d-md-none justify-content-between my-3");
        timeline_main.appendChild(timeline_header_sm);

        // timeline_main / type_wrap

        let type_wrap = document.createElement("div");
        type_wrap.setAttribute("class", "d-flex justify-content-between justify-content-md-start mb-3" + ((parity=="even") ? " flex-lg-row-reverse" : ""));
        timeline_main.appendChild(type_wrap);

        let type = document.createElement("div");
        type.setAttribute("class", "fw-bold color-light me-3" + ((parity=="even") ? " me-lg-0 ms-lg-3" : ""));
        // type.setAttribute("class", "label-light-inv label-size me-3" + ((parity=="even") ? " me-lg-0 ms-lg-3" : ""));
        type.textContent = event.type.toUpperCase();
        type_wrap.appendChild(type);

        if (event.label != null) {
            let label = document.createElement("div");
            // label.setAttribute("class", "badge bg-color-light fs-smaller");
            label.setAttribute("class", "label-light label-size");
            label.textContent = event.label;
            type_wrap.appendChild(label);
        }

        if (event.abstract != null) {
            let abstract = document.createElement("p");
            abstract.textContent = event.abstract;
            timeline_main.appendChild(abstract);
        }

        if (event.info != null) {
            let info = document.createElement("p");
            info.setAttribute("class", "fw-bold color-light");
            info.textContent = event.info;
            timeline_main.appendChild(info);
        }

        if (event.link != null) {

            let links = document.createElement("p");
            links.setAttribute("class", "fw-bold color-subtheme");
            timeline_main.appendChild(links);

            let count_link = 0;
            for (let item of event.link) {

                count_link += 1;

                let a = document.createElement("a");
                a.setAttribute("class", "text-link-hover");
                a.setAttribute("href", item[1]);
                a.setAttribute("target", "_blank");
                a.setAttribute("rel", "noopener");
                a.textContent = item[0];
                links.appendChild(a);

                if (count_link < (event.link.length)) {
                    let span = document.createElement("span");
                    span.textContent = "\xa0\xa0\xa0|\xa0\xa0\xa0";
                    links.appendChild(span);
                }

            }

        }

        // Add horizontal divider (bottom) for timeline_main on large screen
        // timeline_main.appendChild(hr_main.cloneNode(true));

    }

    setFooter();

}

main();