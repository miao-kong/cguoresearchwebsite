export const sitemap = [
    ["HOME", "./index.html", [
        ["About", "./index.html#about"],
        ["Research Interest", "./index.html#research-interest"],
        ["Bio", "./index.html#bio"]
    ]],
    ["RESEARCH", "./research.html", [
        ["Topological Scattering", "./research.html#topology"],
        ["Nonlocal Photonics", "./research.html#wavevector"],
        ["Thermal Photonics", "./research.html#thermal"],
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

export const research_interest = {
    "topology": {
        "name": "Topological Scattering",
        "publication": ["rt-guo2023a", "rt-long2023", "rt-long2021", "rt-wang2021g", "rt-zhu2021a"],
        "abstract": "Topology offers a powerful framework for comprehending physical phenomena. While existing studies predominantly examine the topology of the Hamiltonian, the scattering matrix is also vital in characterizing physical systems. Recognizing the lack of a comprehensive topological theory for scattering matrices, I have developed such a framework, focusing on the singular values and vectors which are fundamental characteristics of scattering matrices. Through this theory, I have identified the topological nature of known effects like coherent perfect absorption and introduced new topological scattering phenomena, including coherent perfect extinction.",
        "abstract_short": "Topology offers a powerful framework for comprehending physical phenomena. While existing studies predominantly examine the topology of the Hamiltonian, the scattering matrix is also vital in characterizing physical systems ...",
    },
    "wavevector": {
        "name": "Nonlocal Photonics",
        "publication": ["rt-guo2021", "rt-guo2020b", "rt-guo2018a", "rt-guo2018b", "rt-wang2020b", "rt-long2021", "rt-long2022", "bk-guo2019a", "pt-guo2021c"],
        "abstract": "Conventional nanophotonic devices like metalens manipulate light with space-dependent transfer functions. However, modern optical information processing tasks increasingly demand wavevector-dependent transfer functions. These functionalities are conventionally achieved through bulky Fourier optics setups, like 4f systems, which limit their practical applications. To address this challenge, I have developed wavevector-space nanophotonics, offering a simpler and more efficient alternative. I proposed a compact 2D Laplace optical differentiator and image filters, optimized for high-throughput, low-latency applications, including bioimaging and optical deep learning. I introduced a device capable of compressing free space, which can significantly miniaturize optical systems. I also proposed a wavevector-space metasurface for generating 3D space-time light bullets, which can propagate in free space without diffraction and with adjustable group velocities.",
        "abstract_short": "Conventional nanophotonic devices like metalens manipulate light with space-dependent transfer functions. However, modern optical information processing tasks increasingly demand wavevector-dependent transfer functions ...",
    },
    "thermal": {
        "name": "Thermal Photonics",
        "publication": ["rt-guo2023b", "rt-guo2022a", "rt-guo2021a", "rt-guo2020c", "rt-guo2020a", "rt-guo2019", "rt-zhao2020", "rt-ghanekar2022", "rt-zhao2021a", "rt-park2021"],
        "abstract": "Thermal radiation is a fundamental phenomenon with important technological implications. Kirchhoff's law, the fundamental law that relates an object's angular spectral absorptivity and emissivity for a reciprocal object, can be violated by nonreciprocal emitters, offering opportunities for achieving ultimate efficiency in solar energy harvesting. I have extended Kirchhoff's law to nonreciprocal thermal emitters, laying a theoretical basis for their design. Another key challenge in thermal photonics is effectively controlling absorption and emission without altering existing photonic structures. To resolve this, I introduced the concept of unitary control. This approach enables efficient control of absorption and emission in multiple modes.",
        "abstract_short": "Thermal radiation is a fundamental phenomenon with important technological implications. Kirchhoff's law, the fundamental law that relates an object's angular spectral absorptivity and emissivity for a reciprocal object, can be violated by nonreciprocal emitters, offering opportunities for achieving ultimate efficiency in solar energy harvesting ...",
    },
    "weyl": {
        "name": "Weyl Semimetals",
        "publication": ["rv-guo2023", "rt-guo2020c", "rt-asadchy2020a", "rt-zhao2020", "rt-zheng2017", "rt-zhang2017b", "rt-xu2016b", "rt-belopolski2016", "rt-zheng2016", "rt-xu2015b"],
        "abstract": "Breaking Lorentz reciprocity is essential for advancing photonic applications like isolation, circulation, and nonreciprocal thermal radiation. Traditional nonreciprocal materials often exhibit weak effects at optical wavelengths and typically require external magnetic fields, leading to bulky and complicated components. Recognizing the need for new optical materials with inherent strong nonreciprocity, I have explored the potential of Weyl semimetals based on my prior work in synthesizing the first family of Weyl semimetals. Weyl semimetals can exhibit pronounced nonreciprocity due to internal Berry curvatures near Weyl nodes, which act as effective magnetic fields. I have investigated their novel applications in creating compact optical isolators and efficient nonreciprocal thermal emitters. I have also authored a comprehensive tutorial review to foster further research in this emerging field.",
        "abstract_short": "Breaking Lorentz reciprocity is essential for advancing photonic applications like isolation, circulation, and nonreciprocal thermal radiation. Weyl semimetals can exhibit pronounced nonreciprocity due to internal Berry curvatures near Weyl nodes, which act as effective magnetic fields ...",
    },
};

export const publication_types = ["article", "review", "book", "patent"];

export const contacts = [
    ["Google Scholar", "https://scholar.google.com/citations?user=V_-6CVIAAAAJ", "./icon/googlescholar.svg"],
    ["ResearchGate", "https://www.researchgate.net/profile/Cheng-Guo-35", "./icon/researchgate.svg"],
    ["ORCID", "https://orcid.org/0000-0003-4913-8150", "./icon/orcid.svg"],
    ["LinkedIn", "https://www.linkedin.com/in/chengguo23", "./icon/linkedin.svg"],
    ["Twitter", "https://www.twitter.com/chengguo23", "./icon/twitter.svg"],
    // ["Email", "mailto:guocheng@stanford.edu", "./icon/email.svg"],
    ["Email", "mailto:chengguo@utexas.edu", "./icon/email.svg"]
];



