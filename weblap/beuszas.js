window.onload = function (){
    
    const beuszasok = document.querySelectorAll(".beuszas");

    const beuszasOpciok = {
        //threshold: 1,
        rootMargin: "0px 0px -100px 0px",
    };

    const beuszasokGorgetesre = new IntersectionObserver
    (function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            } 
            else {
                entry.target.classList.add("megjelenes");
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    beuszasOpciok
    );

    beuszasok.forEach(fader => {
        beuszasokGorgetesre.observe(fader);
    });





}
    