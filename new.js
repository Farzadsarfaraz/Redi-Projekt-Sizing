const scrollRevealoption ={
    distance: "200px",
    origin: "top",
    duration: 1000,
};

ScrollReveal().reveal("wrapper h1", {
    ...scrollRevealoption,
});
ScrollReveal().reveal(".wrapper ul", {
    ...scrollRevealoption,
    origin: "right",
    delay: 1000,
});
ScrollReveal().reveal(".part2 img", {
    ...scrollRevealoption,
    origin: "left",
    delay: 1000,
});
ScrollReveal().reveal(".miniphotos div", {
    ...scrollRevealoption,
    origin:"top",
    delay: 500,
});
ScrollReveal().reveal(".second span", {
    ...scrollRevealoption,
    distance: "500px",
    origin: "right",
    delay: 500,
    });