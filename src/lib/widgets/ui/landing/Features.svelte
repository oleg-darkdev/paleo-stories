<script>
	import {features} from '$shared';


    let step = 0;
    const prevBoardgame = () => step > 0 ? step-- : step;
    const nextBoardgame = () => step <= features.length - 2 ? step++ : step;


  $: actualFeature = features[step];
</script>

<section theme="2" class="forces-section">
      <a name='features' />

      <div class="container-fw-r">
        <div class="col-12">

          <div  class="forces-content-one">
            <div class="km-h2 split-lines">Educational boardgame with mega features</div>
          </div>




          <div class="slider-forces_component">

            <div class="slider-forces_overflow">
              <div>
                <div class="slider-forces_wrapper">
                  <div class="flex flex-row">
                      <div class="swiper-slide ">
                        <div class="km-ornamental">0{actualFeature.id}</div>
                        <div class="line-white"></div>
                        <div class="km-h4 title-force">{actualFeature.title}</div>
                        <div class="padding _1rem"></div>
                        <div class="km-big-p force-text">
                          {actualFeature.desc}
                        </div>
                        <div class="padding _3rem"></div>
                      </div>


                      <div class="swiper-slide ">
                        <div class="km-ornamental">0{features[step + 1].id}</div>
                        <div class="line-white"></div>
                        <div class="km-h4 title-force">{features[step + 1].title}</div>
                        <div class="padding _1rem"></div>
                        <div class="km-big-p force-text">
                          {features[step + 1].desc}
                        </div>
                        <div class="padding _3rem"></div>
                      </div>
                      <div class="swiper-slide ">
                        <div class="km-ornamental">0{actualFeature.id}</div>
                        <div class="line-white"></div>
                        <div class="km-h4 title-force">{actualFeature.title}</div>
                        <div class="padding _1rem"></div>
                        <div class="km-big-p force-text">
                          {actualFeature.desc}
                        </div>
                        <div class="padding _3rem"></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div element-theme="2" class="slider-gallery_button-wrapper">
              {#if step > 0}
								<button on:click={()=> prevBoardgame()}  class="slider-gallery_button swiper-prev w-inline-block">
                <div class="slider-gallery_button-icon w-embed">
                  <svg width="31" height="25" viewBox="0 0 31 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L0.792894 13.2071L0.0857874 12.5L0.792894 11.7929L1.5 12.5ZM29.625 11.5C30.1773 11.5 30.625 11.9477 30.625 12.5C30.625 13.0523 30.1773 13.5 29.625 13.5L29.625 11.5ZM12.0429 24.4571L0.792894 13.2071L2.20711 11.7929L13.4571 23.0429L12.0429 24.4571ZM0.792894 11.7929L12.0429 0.542893L13.4571 1.95711L2.20711 13.2071L0.792894 11.7929ZM1.5 11.5L29.625 11.5L29.625 13.5L1.5 13.5L1.5 11.5Z"></path>
                  </svg>
                </div>
              </button>
              {/if}
                {#if step < features.length - 2}
								<button  on:click={()=> nextBoardgame()}  class="slider-gallery_button swiper-next w-inline-block">
                <div class="slider-gallery_button-icon is-reversed w-embed">
                  <svg width="31" height="25" viewBox="0 0 31 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L0.792894 13.2071L0.0857874 12.5L0.792894 11.7929L1.5 12.5ZM29.625 11.5C30.1773 11.5 30.625 11.9477 30.625 12.5C30.625 13.0523 30.1773 13.5 29.625 13.5L29.625 11.5ZM12.0429 24.4571L0.792894 13.2071L2.20711 11.7929L13.4571 23.0429L12.0429 24.4571ZM0.792894 11.7929L12.0429 0.542893L13.4571 1.95711L2.20711 13.2071L0.792894 11.7929ZM1.5 11.5L29.625 11.5L29.625 13.5L1.5 13.5L1.5 11.5Z"></path>
                  </svg>
                </div>
              </button>
              {/if}
            </div>
          </div>
          <div  class="forces-wrapper-mobile">
                      {#each features as feature }
            <div  class="force-item">
              <div class="km-ornamental split-lines">0{feature.id}</div>
              <div class="line-white"></div>
              <div class="km-h4 split-lines">{feature.title}</div>
              <div class="padding _1rem"></div>
              <div class="km-big-p split-lines">
                {feature.desc}
              </div>
              <div class="padding _3rem"></div>
            </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
