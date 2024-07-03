<script>
  	import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'

const gallery = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
]
</script>

<section theme="2" class="about-home-section">
      <div  class="container">
        <div class="w-full flex flex-row justify-between flex-wrap">
          <div  class="about-content-one">
            <h2 class="km-h4">ABOUT</h2>
          </div>
          <div  class="ab-content-two">
            <p class="km-h2 about split-lines">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p class="km-h2 about split-lines">
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            </p>
            <div class="padding _6rem"></div>
          </div>
          <div class="div-block-102"></div>
          <div >
            <div  class="km-h4">Paleo Stories - educational boardgame</div>
            <div class="padding _6rem"></div>
          </div>
        </div>
      </div>

      <div  class="featured-images-mobile">
        <div class="ft-image-item _1"></div>
        <div class="ft-image-item _2"></div>
        <div class="ft-image-item _4"></div>
        <div  class="ft-image-item _3"></div>
      </div>
      <div class="carrusel-container">

        <a name='about' />
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
    </section>
