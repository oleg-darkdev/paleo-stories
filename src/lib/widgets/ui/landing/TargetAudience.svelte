<script>
  const targetAudience = [
    [
      {
        title: 'Lorem Ipsum is simply dummy text',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown`
      },
      {
        title: 'Lorem Ipsum is simply dummy text',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown`
      },
    ],
    [
      {
        title: 'Lorem Ipsum is simply dummy text',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown`
      },
      {
        title: 'Lorem Ipsum is simply dummy text',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown`
      },
    ],
  ]
</script>

<section  theme="2" class="why-kommuna">
      <div class="center-div">
        <div class="km-h4 whyus">Gamification of paleontology by using technologies.</div>
         <a name='use-cases' />
         
        <div class="padding _1rem"></div>
        <div class="km-h3">Say goodbye to the traditional way of doing things. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        
        
       

        <div class="padding"></div>
        {#each targetAudience as audience}
        <div class="row-why">
          <div class="why-item">
            <div class="km-h4">{audience[0].title}</div>
            <div class="line-white why"></div>
            <div class="km-p">{audience[0].desc}</div>
          </div>
          <div  class="why-item">
            <div class="km-h4 title-experience">{audience[1].title}</div>
            <div class="line-white why"></div>
            <div class="km-p">
            {audience[1].desc}
            </div>
          </div>
        </div>
        <div class="padding why"></div>
        {/each}
      </div>
    </section>
