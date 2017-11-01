<?php include 'head.php';?>
    <?php include 'mainmenu.php';?>

    <div class="container full-width">
      <!-- main photo -->
      <div class="main-photo">
        <img class="main-photo-img img-responsive" src="img/luhut-panjaitan-homepage.jpg" alt="photo main">
        <blockquote>
          <p class="hilights">
            <span class="bracket-quotes">&ldquo;</span>
            Untuk segala sesuatu ada masanya, untuk apa pun di bawah langit ada waktunya.
            <span class="bracket-quotes">&rdquo;</span>
          </p>
        </blockquote>
      </div>
      <!-- /.main photo -->
      <div class="row quotes-home apollo-hover">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <!-- carousel -->
          <section id="carousel">
              <div class="row">

                  <div class="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                    <!-- Carousel indicators -->
                    <ol class="carousel-indicators">
                      <li data-target="#fade-quote-carousel" data-slide-to="0" class="active"></li>
                      <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                      <li data-target="#fade-quote-carousel" data-slide-to="2"></li>
                      <li data-target="#fade-quote-carousel" data-slide-to="3"></li>
                    </ol>
                    <!-- Carousel items -->
                    <div class="carousel-inner">
                      <div class="item active">
                        <h3 class="title-white">QUOTES</h3>
                        <blockquote>
                          <p>
                            <span class="bracket-quotes">&ldquo;</span>
                            Untuk segala sesuatu ada masanya, untuk apa pun di bawah langit ada waktunya.
                            <span class="bracket-quotes">&rdquo;</span>
                          </p>
                        </blockquote>
                        <a class="btn btn-default btn-box" href="#" role="button">More Quotes</a>
                      </div>

                      <div class="item">
                        <h3 class="title-white">QUOTES</h3>
                        <blockquote>
                          <p>
                            <span class="bracket-quotes">&ldquo;</span>
                            Kalau kau berbuat baik jangan kau ingat-ingat supaya kau membuat kebaikan yang lain, kalau kau berbuat jahat ingat-ingatlah perbuatan itu supaya jangan kau mengulanginya."
                            Itu kata bapak saya.
                            <span class="bracket-quotes">&rdquo;</span>
                          </p>
                        </blockquote>
                        <a class="btn btn-default btn-box" href="#" role="button">More Quotes</a>
                      </div>

                      <div class="item">
                        <h3 class="title-white">QUOTES</h3>
                        <blockquote>
                          <p>
                            <span class="bracket-quotes">&ldquo;</span>
                            Kepintaran itu penting, tapi integritas kita sebagai manusia itu lebih penting
                            <span class="bracket-quotes">&rdquo;</span>
                          </p>
                        </blockquote>
                        <a class="btn btn-default btn-box" href="#" role="button">More Quotes</a>
                      </div>

                      <div class="item">
                        <h3 class="title-white">QUOTES</h3>
                        <blockquote>
                          <p>
                            <span class="bracket-quotes">&ldquo;</span>
                            Jangan hitung untung ruginya. Membangun angkatan bersenjata memang investasi mahal jangka panjang.
                            <span class="bracket-quotes">&rdquo;</span>
                          </p>
                        </blockquote>
                        <a class="btn btn-default btn-box" href="page-quotes.php" role="button">More Quotes</a>
                      </div>
                    </div>
                  </div>

              </div>
          </section>
          <!-- /.carousel -->
        </div>
        <figure class="effect-apollo col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img class="profile-photo-homepage img-responsive" src="img/pemikiran-hompage.png" alt="pemikiran Luhut Panjaitan">
          <figcaption>
            <div class="slice slice-blue"><h2><span style="font-size:2em; margin-right:80px;">&plus;</span><span>PEMIKIRAN</span></h2></div>
            <a href="page-quotes.php">hidden link</a>
          </figcaption>
        </figure>

      </div>
      <div class="pemikiran row apollo-hover">

        <figure class="effect-apollo col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img class="profile-photo-homepage img-responsive" src="img/profile-home-photo.png" alt="photo profile luhut at homepage">
          <figcaption>
            <h2 class="heading-profile-home">Profile  <span> Luhut Pandjaitan</span></h2>
            <p>Profile</p>
            <a href="#">Profile</a>
          </figcaption>
        </figure>

        <figure class="effect-apollo hover-play col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div id ="video">
              <video preload="auto" loop width="100%">
                <source src="pemikiran.webm" type="video/webm">
                <source src="pemikiran.mp4" type="video/mp4">
                <source src="pemikiran.ogv" type="video/ogg">
              </video>
            </div>
          <figcaption>
            <div class="slice slice-red"><h2><span style="font-size:2em; margin-right:80px;">&plus;</span><span>BERITA</span></h2></div>
          </figcaption>
        </figure>


        <div class="profile-homepage col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <a href="page-pemikiran-detail-2.php">
          <div class="slice slice-blue blue-big"><h2 class="head-photo-img">PEMIKIRAN</h2></div>
          <h3 class="kebangkitan">107 Tahun Kebangkitan Nasional</h3>
          <img class="profile-photo-homepage img-responsive" src="img/photo-pemikiran-homepage.png" alt="pemikiran Luhut Panjaitan">
          </a>
        </div>
        <div class="profile-homepage col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="pemikiran-homepage">
            <blockquote>
              <p class="big-quotes">
                <span class="bracket-quotes">&ldquo;</span>
                Untuk segala sesuatu ada masanya, untuk apa pun di bawah langit ada waktunya.
                <span class="bracket-quotes">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="row apollo-hover">
        <?php for($i=0;$i<6;$i++) { ?>
        <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <img class="profile-photo-homepage img-responsive" src="img/list-berita-homepage.png" alt="thumbnail berita di homepage">
          <figcaption>
            <div class="caption-quotes-page">
              Judul berita
            </div>
            <a href="#">link goes here</a>
          </figcaption>
        </figure>
        <?php } ?>
      </div>
      <div class="list-items-news">
        <div class="slice slice-red red-big"><h2><span>BERITA</span></h2></div>
        <div class="container">
          <div class="bs-example bs-example-tabs" data-example-id="togglable-tabs">
            <ul id="myTabs" class="nav nav-tabs" role="tablist">
              <li role="presentation"><a href="#gallery" role="tab" id="profile-tab" data-toggle="tab" aria-controls="gallery">Gallery</a></li>
              <li role="presentation"><a href="#video" role="tab" id="profile-tab" data-toggle="tab" aria-controls="cideo">Video</a></li>
              <li role="presentation"><a href="#artikel" role="tab" id="profile-tab" data-toggle="tab" aria-controls="artikel">Artikel</a></li>
              <li role="presentation" class="active"><a href="#semua" id="home-tab" role="tab" data-toggle="tab" aria-controls="semua" aria-expanded="true">Semua</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="semua" aria-labelledBy="semua-tab">

                <div class="container">
                  <div class="row">
                      <div class="list-group">
                        <?php for($i=0;$i<5;$i++) { ?>
                        <a href="#" class="list-group-item">
                          <div class="media col-md-4 col-md-offset-1">
                            <img class="img-responsive"  src="img/berita-thumb-item.png" alt="judul berita disini" >
                          </div>
                          <div class="col-md-4 col-md-offset-1">
                            <h4 class="list-group-item-heading"> List group heading </h4>
                            <p class="list-group-item-text"> Qui diam libris ei, vidisse incorrupte at mel. His euismod salutandi dissentiunt eu. Habeo offendit ea mea. Nostro blandit sea ea, viris timeam molestiae an has. At nisl platonem eum.
                              Vel et nonumy gubergren, ad has tota facilis probatus. Ea legere legimus tibique cum, sale tantas vim ea, eu vivendo expetendis vim. Voluptua vituperatoribus et mel, ius no elitr deserunt mediocrem. Mea facilisi torquatos ad.
                            </p>
                          </div>
                        </a>
                        <?php } ?>
                      </div>
                  </div>
                </div>

              </div>
              <div role="tabpanel" class="tab-pane fade" id="artikel" aria-labelledBy="artikel-tab">

                <div class="container">
                  <div class="row">
                    <div class="list-group">
                      <?php for($i=0;$i<2;$i++) { ?>
                      <a href="#" class="list-group-item">
                        <div class="media col-md-4 col-md-offset-1">
                          <img class="img-responsive"  src="img/luhut-panjaitan-homepage.jpg" alt="judul berita disini" >
                        </div>
                        <div class="col-md-4 col-md-offset-1">
                          <h4 class="list-group-item-heading"> List group heading </h4>
                          <p class="list-group-item-text"> Qui diam libris ei, vidisse incorrupte at mel. His euismod salutandi dissentiunt eu. Habeo offendit ea mea. Nostro blandit sea ea, viris timeam molestiae an has. At nisl platonem eum.
                            Vel et nonumy gubergren, ad has tota facilis probatus. Ea legere legimus tibique cum, sale tantas vim ea, eu vivendo expetendis vim. Voluptua vituperatoribus et mel, ius no elitr deserunt mediocrem. Mea facilisi torquatos ad.
                          </p>
                        </div>
                      </a>
                      <?php } ?>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div> <!--example-->
        </div>
      </div>
      <div class="profile-home-bottom row">
        <div class="slice slice-white white-big"><h2>PROFILE</h2></div>
        <div class="photo-profile-home col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">

          <img class="img-responsive" src="img/foto-profile.png" alt="photo luhut panjaitan">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <p>
            Luhut Pandjaitan lahir 28 September 1947 di Simargala, Toba Samosir, Sumatera Utara.
          </p>
          <p>
            Ia dikenal sebagai profesional yang mengawali karir militer di TNI AD selama 29 tahun, dengan pangkat terakhir sebagai Jenderal Kopassus bintang empat. Ia juga pernah menjabat sebagai Duta Besar Indonesia untuk Singapura (1999-2000) dan Menteri Perdagangan dan Industri RI (2000-2001).
          </p>
          <a class="btn btn-default btn-box" href="#" role="button">Kenal Lebih Baik</a>
        </div>
      </div>
    </div><!-- /.container -->
<?php include 'footer.php';?>
