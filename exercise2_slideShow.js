
let slideIndex = 1;
visibleSlide(slideIndex);


function changeSlides(x)
{
    visibleSlide(slideIndex += x);
}


function visibleSlide(x)
{
    let slides = document.getElementsByClassName("slides");

    if (x > slides.length)
    {
        slideIndex = 1;
    }

    if (x < 1)
    {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}