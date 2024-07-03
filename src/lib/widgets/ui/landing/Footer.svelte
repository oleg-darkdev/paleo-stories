<script>
 	import {navigation} from '$shared';
</script>

<div theme="2" class="footer-wrapper">
      <section  theme="2" class="cta">
        <div class="cta-container">
          <div class="cta-wrap">
            <h1 class="km-h2">Let's get you Marketing superpowers now. <br>
              Contact us to create innovative gamification of the learning process together.  </h1>
            <div class="padding _1rem"></div>
            <a name='contact' />

            <div class="button-div">
              <a button-style="1" theme="2" href="/" class="button-main-with-link w-inline-block">
                <svg viewBox="0 0 15 15" fill="none" class="btn_main_icon">
                  <path d="M2.28604 12.214C3.21839 13.1463 4.40627 13.7813 5.69948 14.0385C6.99269 14.2957 8.33313 14.1637 9.5513 13.6591C10.7695 13.1545 11.8107 12.3 12.5432 11.2037C13.2758 10.1074 13.6667 8.81846 13.6667 7.49992C13.6667 6.18138 13.2758 4.89245 12.5432 3.79612C11.8107 2.69979 10.7695 1.84531 9.5513 1.34072C8.33313 0.836138 6.99269 0.704115 5.69948 0.96135C4.40627 1.21858 3.21839 1.85352 2.28604 2.78587" stroke="currentColor" stroke-width="1"></path>
                  <path d="M9 7.50008L9.39043 7.18773L9.64031 7.50008L9.39043 7.81243L9 7.50008ZM1 8.00008C0.723858 8.00008 0.5 7.77622 0.5 7.50008C0.5 7.22394 0.723858 7.00008 1 7.00008V8.00008ZM6.72377 3.8544L9.39043 7.18773L8.60957 7.81243L5.9429 4.4791L6.72377 3.8544ZM9.39043 7.81243L6.72377 11.1458L5.9429 10.5211L8.60957 7.18773L9.39043 7.81243ZM9 8.00008H1V7.00008H9V8.00008Z" stroke="currentColor" stroke-width="0.3" fill="currentColor"></path>
                </svg>
                <div class="button-text">CONTACT</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer theme="2" class="footer">
        <div class="container transparent">
          <div class="line-white"></div>
          <div class="col-12 footer">
            <div class="footer-up w-full">
              <a href="/" class="brand-small w-nav-brand w--current">
                <div class="w-embed">
                  <img src="/images/logo.svg" class='w-auto h-16' alt="Logo image">
                </div>
              </a>
              <div class="flex justify-between  w-full">
                {#each navigation as link}
                    <a theme="2" href="{link.href}"  class="km-footer-link w--current">{link.title}</a>
                {/each}
              </div>
            </div>
            <div class="footer-down w-full">
              <div class="footer-div-ct">
                <div class="km-small-p ftte">All Rights Reserved.</div>
                <!-- © -->
                <div class="km-small-p ftte">2024. <br>
                </div>
              </div>
              <div  class="footer-div-ct rt">
                <div class="social-icons-div">
                  <a  href="/" target="_blank" class="social-link w-inline-block">
                    <div class="social-icon w-embed">
                      <svg width="1.5rem" height="1.5rem" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.76914 4.53054C9.76914 7.00155 7.82763 8.94306 5.35662 8.94306C2.8856 8.94306 0.944092 7.00155 0.944092 4.53054C0.944092 2.05952 2.8856 0.118011 5.35662 0.118011C7.82763 0.118011 9.76914 2.05952 9.76914 4.53054ZM9.76914 12.4731H0.944092V40.7133H9.76914V12.4731ZM23.8892 12.4731H15.0642V40.7133H23.8892V25.8872C23.8892 17.5916 34.4793 16.8856 34.4793 25.8872V40.7133H43.3043V22.8866C43.3043 8.94306 27.5957 9.47257 23.8892 16.3561V12.4731Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </a>

                </div>
                <div class="km-small-p right">An <a href="https://oleg-darkdev.vercel.app" theme="1" target="_blank" class="avg-link"> Author & Creator </a> Oleg Medvedev. </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
