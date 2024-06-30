let text;

function runSplit() {
  let currentElement = $(".split-lines");
  text = new SplitType(currentElement, { types: "lines, words" });
  $(".line").append("<div class='line-mask'></div>");
  runAnimation();
}

runSplit();

window.addEventListener("resize", function () {
  text.revert();
  runSplit();
});

function runAnimation() {
  $(".line").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".line-mask");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    tl.to(targetElement, {
      width: "0%",
      duration: 1,
    });
  });
}
