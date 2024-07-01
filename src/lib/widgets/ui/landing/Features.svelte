<script>
  const features = [
    {
      id: 1,
      title: 'Lorem Ipsum is simply dummy text of the printing',
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 2,
      title: 'Lorem Ipsum is simply dummy text of the printing',
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 3,
      title: 'Lorem Ipsum is simply dummy text of the printing',
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 4,
      title: 'Lorem Ipsum is simply dummy text of the printing',
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
  ]
</script>

<section theme="2" class="forces-section">
      <div class="container-fw-r">
        <div class="col-12">
          <div  class="forces-content-one">
            <div class="km-h2 split-lines">Gamification with mega features</div>
          </div>
          <div class="slider-forces_component">
            <div class="slider-forces_overflow">
              <div>
                <div class="slider-forces_wrapper">
                  <div class="flex flex-row">
                      {#each features as feature }
                      <div class="swiper-slide ">
                        <div class="km-ornamental">0{feature.id}</div>
                        <div class="line-white"></div>
                        <div class="km-h4 title-force">{feature.title}</div>
                        <div class="padding _1rem"></div>
                        <div class="km-big-p force-text">
                          {feature.desc}
                        </div>
                        <div class="padding _3rem"></div>
                      </div>
                      {/each}
                  </div>
                </div>
              </div>
            </div>
            <div element-theme="2" class="slider-gallery_button-wrapper">
              <a href="#" class="slider-gallery_button swiper-prev w-inline-block">
                <div class="slider-gallery_button-icon w-embed">
                  <svg width="31" height="25" viewBox="0 0 31 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L0.792894 13.2071L0.0857874 12.5L0.792894 11.7929L1.5 12.5ZM29.625 11.5C30.1773 11.5 30.625 11.9477 30.625 12.5C30.625 13.0523 30.1773 13.5 29.625 13.5L29.625 11.5ZM12.0429 24.4571L0.792894 13.2071L2.20711 11.7929L13.4571 23.0429L12.0429 24.4571ZM0.792894 11.7929L12.0429 0.542893L13.4571 1.95711L2.20711 13.2071L0.792894 11.7929ZM1.5 11.5L29.625 11.5L29.625 13.5L1.5 13.5L1.5 11.5Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" class="slider-gallery_button swiper-next w-inline-block">
                <div class="slider-gallery_button-icon is-reversed w-embed">
                  <svg width="31" height="25" viewBox="0 0 31 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L0.792894 13.2071L0.0857874 12.5L0.792894 11.7929L1.5 12.5ZM29.625 11.5C30.1773 11.5 30.625 11.9477 30.625 12.5C30.625 13.0523 30.1773 13.5 29.625 13.5L29.625 11.5ZM12.0429 24.4571L0.792894 13.2071L2.20711 11.7929L13.4571 23.0429L12.0429 24.4571ZM0.792894 11.7929L12.0429 0.542893L13.4571 1.95711L2.20711 13.2071L0.792894 11.7929ZM1.5 11.5L29.625 11.5L29.625 13.5L1.5 13.5L1.5 11.5Z"></path>
                  </svg>
                </div>
              </a>
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
