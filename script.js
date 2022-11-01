console.log("script.js loaded");

const revealToSpan = () => {
    document.querySelectorAll(".reveal").forEach((elem) => {
        let parent = document.createElement("span");
        let child = document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = "";
        elem.appendChild(parent);
    })
}

revealToSpan();

const tl = gsap.timeline();

tl
    .from(".child span", {
        x: 50,
        delay: 0.1,
        stagger: 0.2,
        duration: 1,
        ease: Expo.easeInOut,
    })
    .to(".parent .child", {
        y: "-110%",
        duration: 1,
        ease: Expo.easeInOut,
    })
    .to("#loader", {
        height: "0",
        duration: 1.4,
        ease: Expo.easeInOut,
    })
    .to("#green", {
        height: "100%",
        top: "0",
        duration: 1.4,
        ease: Expo.easeInOut,
        delay: -1.4,
    })
    .to("#green", {
        height: "0",
        duration: 1,
        delay: -0.6,
        ease: Expo.easeOut,
    })
    .to("#hero-section #nav", {
        opacity: 1,
        duration: 2,
        delay: -1,
        stagger: 0.2,
        ease: Expo.easeInOut,
    })
    .to("#hero #row1 h1", {
        y: "0%",
        opacity: 1,
        duration: 3,
        delay: -1,
        ease: Expo.easeInOut,
    })
    .to("#hero #row2>h1", {
        y: "0%",
        opacity: 1,
        duration: 3,
        delay: -3,
        ease: Expo.easeInOut,
    })
    .from("#row1 #info h5", {
        opacity: 0,
        duration: 3,
        delay: -1.5,
        stagger: 0.2,
        ease: Expo.easeInOut,
    })
    .to("#row2 #visual h1", {
        opacity: 1,
        duration: 3,
        delay: -3,
        ease: Expo.easeInOut,
    })
    .to("#hero-section #hero-mobile .parentm .childm", {
        y: "-10%",
        opacity: 1,
        duration: 2,
        delay: -6,
        ease: Expo.easeInOut,
    })
    .to("#hero-section #hero-mobile #visual h1", {
        opacity: 1,
        duration: 2,
        delay: -5,
        ease: Expo.easeInOut,
    })
    .to("#hero-section #hero-mobile #info-mobile", {
        y: "0%",
        opacity: 1,
        duration: 2,
        delay: -4,
        ease: Expo.easeInOut,
    })
    