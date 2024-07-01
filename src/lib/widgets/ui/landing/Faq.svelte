<script>
  const faqData = [
    {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      desc: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      ]
    }
  ]
</script>

<section  theme="2" class="faqs">
      <div class="container relative">
        <div class="w-full">
          <div  class="faqs-content-one">
            <h2 class="km-h4 fqq">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div class="faqs-content-two">
            <div class="faqs-header-one">
              <div class="km-h3 fw">Have questions? We have answers, find the most common ones below:</div>
            </div>
            <div class="padding _6rem"></div>
            <div class="faqs-wrapper">
              <div class="accordion js-accordion">
                {#each faqData as faq}
                <div class="accordion__item js-accordion-item active">
                  <div class="accordion-header js-accordion-header">
                    <div class="km-h5">{faq.title}</div>
                    <div class="html-embed-7 js-accordion-icon active w-embed">
                      <svg width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5 22.5L38.2071 21.7929L38.9142 22.5L38.2071 23.2071L37.5 22.5ZM9.375 23.5C8.82272 23.5 8.375 23.0523 8.375 22.5C8.375 21.9477 8.82272 21.5 9.375 21.5V23.5ZM26.9571 10.5429L38.2071 21.7929L36.7929 23.2071L25.5429 11.9571L26.9571 10.5429ZM38.2071 23.2071L26.9571 34.4571L25.5429 33.0429L36.7929 21.7929L38.2071 23.2071ZM37.5 23.5H9.375V21.5H37.5V23.5Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="accordion-body js-accordion-body">
                    <div class="km-p w-richtext">
                      {#each faq.desc as desc}
                      <p class="p-faq">
                        {desc}
                         <br>
                      </p>
                      {/each}
                    </div>
                  </div>
                </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
