<template>
  <div>
    <footer class="overflow-hidden">
      <img
        class="footer-img"
        loading="lazy"
        src="../public/img/watercolor-footer.png"
      />
      <section class="footer-information">
        <div class="footer-container">
        <div class="footer-nav-info">
        <img src="../public/img/greenhouse-long-wordmark.png" class="long-wordmark">
        <div class="square-wordmark-container">
        <img src="../public/img/greenhouse-studios-square-logo.png" class="square-wordmark">
      </div>
        <div class="nav-links">
          <NuxtLink  class="footer-link" to="/"
            >Home
            </NuxtLink>
         <NuxtLink  class="footer-link" to="/people"
            >People
          </NuxtLink>
        <NuxtLink  class="footer-link" to="/projects"
            >Projects</NuxtLink>
          <NuxtLink  class="footer-link" to="/page/join-us"
            >Join Us
          </NuxtLink>
          <NuxtLink to="/blog" class="footer-link"
            >Blog
          </NuxtLink>
      </div>
      <div class="footer-info-container">
        <div class="address">
          <p>Homer Babbidge Library, Level One</p>
          <p>369 Fairfield Way, Unit 1005</p>
          <p>Storrs, CT 06269-1005</p>
        </div>
        <div class="copyright f4-ns f5" id="footer-links">
          <a href="https://accessibility.uconn.edu/" id="link"><p>Accessibility</p></a>
          <a href="https://uconn.edu" id="link"><p>© University of Connecticut</p></a>
          <a href="https://uconn.edu/disclaimers-privacy-copyright/" id="link"
 ><p>Disclaimers, Privacy & Copyright</p></a>
        </div>
      </div>
    </div>
        <div class="footer-2">
          <div class="icons">
        <a href="mailto:greenhousestudios@uconn.edu" >
          <FontAwesome icon="envelope" class="fa text-white white" />
        </a>
        </div>
        <div class="icons">
            <a href="https://www.instagram.com/greenhousestudiosuconn/?hl=en" 
              >
            <FontAwesome icon="instagram" class="fa text-white white" />
            </a>
            </div>
            <div class="icons">
            <a href="https://www.youtube.com/channel/UCuDO0yPZYSaXBE3G7ArmQjw"
              >
            <FontAwesome icon="youtube" class="fa text-white white" />
            </a>
            </div>
            <div class="icons">
            <a href="https://www.facebook.com/GreenhouseStudiosUConn/" 
              >
            <FontAwesome icon="facebook" class="fa text-white white" />
            </a>
              </div>
              <div class="icons">
            <a href="https://twitter.com/greenhouseuconn?lang=en"
              >
            <FontAwesome icon="twitter" class="fa text-white white" />
            </a>
              </div>
              <div class="icons">
            <a href="https://www.linkedin.com/company/greenhousestudiosuconn" 
              >
            <FontAwesome icon="linkedin" class="fa text-white white" />
            </a>
              </div>
    </div>
    </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.fa {
  display: flex;
  color: #dff1cb;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  
}

#link, #link:hover {
  color:black;
  font-size: 14px;
}

NuxtLink {
  color: black;
  text-decoration: none;
  font-family: Libre Franklin;
}

NuxtLink:hover {
  text-decoration: underline;
}


.footer-2 {
  display: flex;
  margin: 20px;
}

.icons:hover {
  transition: transform .25s ;
transform: scale(1.2) ;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin: 10px;
  height: 30px;
  width: 30px;
  border-radius: 100%;
}

.footer-link {
  color: black;
  text-decoration: none;
  font-family: Libre Franklin;
  font-weight: 700;
  font-size: 14px;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-img {
  position: absolute;
  margin: 0;
  width: 100%;
  padding-top: 200px;
  height: 750px;
  z-index: -1;
  bottom: 0%
}
.footer-information {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align:left;
  padding-top: 200px;
}
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
}

.footer-info-container {
  display: flex;
  justify-content: space-between;
}

.long-wordmark {
  margin: 25px 0px;
}

.footer-nav-info {
display: flex;
flex-direction: column;
justify-content: space-around;
max-width: 750px;
}

.nav-links {
  display: flex;
  justify-content: space-between;
padding: 10px 0px 15px 0px;
}

.nav-links NuxtLink {
  text-decoration: underline;
  color: black;
  font-size: 16px;
}

.address p {
  font-size: 14px;
}

.social-media,
.copyright {
  padding: 20px;
}
section {
  padding-bottom: 30px;
}
footer {
  position: relative;
  margin-top: 25px
}

.copyright {
  padding: 0px;
  text-align: end;
}

p {
  margin: 5px 0px;
}
.grants {
  position: relative;
}

.square-wordmark-container {
  display: flex;
  justify-content: center;
}



.footer-img {
  width: 100%;
}

.social-icon {
  padding: 5px;
}
a > img {
  height: 30px;
}
.long-wordmark {
  display: none;
}
.square-wordmark {
  display: flex;
  width: 100%;
  max-width: 200px;
}

@media screen and (min-width: 650px) {
  .footer-info-container p {
  font-size: 18px;
  }

  .address p {
 font-size: 18px;
  }

.footer-link {
  font-size: 18px;
}

a > img {
  height: 40px;
}

.square-wordmark {
  display: none;
}

#link, #link:hover {
  color:black;
  font-size: 18px;
}

.long-wordmark {
  display: block;
  width: 100%;
}

NuxtLink {
  font-size: 30px;
}

.icons {
  width: 40px;
  height: 40px;
}

.fa {
  font-size: 18px;
}

}

</style>