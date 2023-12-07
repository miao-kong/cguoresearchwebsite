// import publications from "../asset/publication.json" assert {type: "json"};
import { publications } from "../asset/publications.js";
import { setFooter, setNavbar, createTitle } from "./module/utils.js";

// Format: [id, title, list_of_publications, abstract]
const research_areas = [ 
    ["topology", "Topological Phenomena in Wave Scattering", ["rt-guo2023a", "rt-long2023", "rt-long2021", "rt-wang2021g", "rt-zhu2021a"], "Topology offers a powerful framework for comprehending physical phenomena. While existing studies predominantly examine the topology of the Hamiltonian, the scattering matrix is also vital in characterizing physical systems. Recognizing the lack of a comprehensive topological theory for scattering matrices, I have developed such a framework, focusing on the singular values and vectors which are fundamental characteristics of scattering matrices. Through this theory, I have identified the topological nature of known effects like coherent perfect absorption and introduced new topological scattering phenomena, including coherent perfect extinction."],
    ["wavevector", "Wavevector-Space Nanophotonics", ["rt-guo2021", "rt-guo2020b", "rt-guo2018a", "rt-guo2018b", "rt-wang2020b", "rt-long2021", "rt-long2022", "bk-guo2019a", "pt-guo2021c"], "Conventional nanophotonic devices like metalens manipulate light with space-dependent transfer functions. However, modern optical information processing tasks increasingly demand wavevector-dependent transfer functions. These functionalities are conventionally achieved through bulky Fourier optics setups, like 4f systems, which limit their practical applications. To address this challenge, I have developed wavevector-space nanophotonics, offering a simpler and more efficient alternative. I proposed a compact 2D Laplace optical differentiator and image filters, optimized for high-throughput, low-latency applications, including bioimaging and optical deep learning. I introduced a device capable of compressing free space, which can significantly miniaturize optical systems. I also proposed a wavevector-space metasurface for generating 3D space-time light bullets, which can propagate in free space without diffraction and with adjustable group velocities."],
    ["thermal", "Fundamental Concepts in Thermal Photonics", ["rt-guo2023b", "rt-guo2022a", "rt-guo2021a", "rt-guo2020c", "rt-guo2020a", "rt-guo2019", "rt-zhao2020", "rt-ghanekar2022", "rt-zhao2021a", "rt-park2021"], "Thermal radiation is a fundamental phenomenon with important technological implications. Kirchhoff's law, the fundamental law that relates an object's angular spectral absorptivity and emissivity for a reciprocal object, can be violated by nonreciprocal emitters, offering opportunities for achieving ultimate efficiency in solar energy harvesting. I have extended Kirchhoff's law to nonreciprocal thermal emitters, laying a theoretical basis for their design. Another key challenge in thermal photonics is effectively controlling absorption and emission without altering existing photonic structures. To resolve this, I introduced the concept of unitary control. This approach enables efficient control of absorption and emission in multiple modes."],
    ["weyl", "Photonics Based on Weyl Semimetals", ["rv-guo2023", "rt-guo2020c", "rt-asadchy2020a", "rt-zhao2020", "rt-zheng2017", "rt-zhang2017b", "rt-xu2016b", "rt-belopolski2016", "rt-zheng2016", "rt-xu2015b"], "Breaking Lorentz reciprocity is essential for advancing photonic applications like isolation, circulation, and nonreciprocal thermal radiation. Traditional nonreciprocal materials often exhibit weak effects at optical wavelengths and typically require external magnetic fields, leading to bulky and complicated components. Recognizing the need for new optical materials with inherent strong nonreciprocity, I have explored the potential of Weyl semimetals based on my prior work in synthesizing the first family of Weyl semimetals. Weyl semimetals can exhibit pronounced nonreciprocity due to internal Berry curvatures near Weyl nodes, which act as effective magnetic fields. I have investigated their novel applications in creating compact optical isolators and efficient nonreciprocal thermal emitters. I have also authored a comprehensive tutorial review to foster further research in this emerging field."],
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

        let gallery_wrapper = document.createElement("div");
        gallery_wrapper.setAttribute("class", "d-flex align-items-center justify-content-center mb-5");
        container.appendChild(gallery_wrapper);

        let back_button = document.createElement("img");
        back_button.setAttribute("src", "./icon/back_arrow.svg");
        back_button.setAttribute("id", "back-button");
        gallery_wrapper.appendChild(back_button);

        let gallery = document.createElement("div");
        gallery.setAttribute("class", "gallery"); 
        gallery_wrapper.appendChild(gallery);

        let img_cnt = 0;
        let img_threshold = 6;

        for (let id of research[2]) {

            let paper = publications[id];

            if (paper.img != null) {

                let img_frame = document.createElement("div");
                gallery.appendChild(img_frame);

                let img = document.createElement("img");
                img.setAttribute("src", paper.img[0]);
                img_frame.appendChild(img);

                img_cnt += 1;

            }

        }

        if (img_cnt < img_threshold) {

            for (let id of research[2]) {

                let paper = publications[id];

                if (paper.imgs != null) {

                    for (let item of paper.imgs) {

                        let img_frame = document.createElement("div");
                        gallery.appendChild(img_frame);

                        let img = document.createElement("img");
                        img.setAttribute("src", item[0]);
                        img_frame.appendChild(img);

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
        forward_button.setAttribute("src", "./icon/forward_arrow.svg");
        forward_button.setAttribute("id", "forward-button");
        gallery_wrapper.appendChild(forward_button);

        back_button.addEventListener("click", () => {
            gallery.style.scrollBehavior = "smooth";
            gallery.scrollLeft -= 300;
        });

        forward_button.addEventListener("click", () => {
            gallery.style.scrollBehavior = "smooth";
            gallery.scrollLeft += 300;
        });

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


