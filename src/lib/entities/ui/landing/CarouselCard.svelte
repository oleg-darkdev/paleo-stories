<script>
  	import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'

    const gallery = [
    '/images/gallery/1.png',
    '/images/gallery/2.png',
    '/images/gallery/3.png',
    '/images/gallery/4.png',
    '/images/gallery/5.png',
    ]
</script>

<div  class="featured-images-mobile w-full">
    {#if browser}
    <Carousel

        duration={800}
        autoplay
        timingFunction="linear"
        dots={true}
        arrows={false}
        swiping={true}
        >
<!--                      particlesToShow={1}
        particlesToScroll={1}           autoplayDuration={0}
-->
        {#each gallery as img}
            <img src="{img}" class='object-cover object-center h-64 w-full' alt=""/>
        {/each}
    </Carousel>
    {/if}
</div>
<div class="carrusel-container">
<div  class="scroll-slider-list">
    {#if browser}
    <Carousel
        particlesToShow={3}
        particlesToScroll={1}
        duration={800}
        autoplay
        timingFunction="linear"
        dots={false}
        arrows={false}
        swiping={true}
        >
<!--                   autoplayDuration={0}
-->
        {#each gallery as img}
            <div class="carrusel-img-div mx-2" style="background-image: url({img});"></div>
        {/each}
    </Carousel>
    {/if}
</div>
</div>


  
<style>
.featured-images-mobile {
  display: none;
}


.carrusel-img-div {
  aspect-ratio: 5/3;
  
  background-position: 0 0;
  background-size: cover;
  flex: none;
  min-width: 30%;
  max-width: 35%;
  min-height: 20rem;
  max-height: 400px;
  margin-right: 0;
  overflow: hidden;
}

@media screen and (max-width: 991px) {
.featured-images-mobile {
  display: block;
}
    .carrusel-img-div {
    width: 26rem;
    min-height: auto;
  }
  
}

@media screen and (max-width: 767px) {

}

@media screen and (max-width: 479px) {
 
 
}
</style>