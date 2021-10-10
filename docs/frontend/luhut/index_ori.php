<?php include 'head.php';?>
    <?php include 'mainmenu.php';?>

    <div class="container full-width">
      <!-- main photo -->
      <div class="main-photo">
        <img class="main-photo-img img-responsive" src="img/luhut-panjaitan-homepage.jpg" alt="photo main">
        <blockquote>
          <p>
            &ldquo;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum.
            &rdquo;
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
                      <?php for($i=0;$i<5;$i++) { ?>
                      <li data-target="#fade-quote-carousel" data-slide-to="<?php echo $i; ?>" <?php echo $i==0 ? 'class="active"':'' ?>></li>
                      <?php } ?>
                    </ol>
                    <!-- Carousel items -->
                    <div class="carousel-inner">
                      <?php for($i=0;$i<5;$i++) { ?>
                      <div class="item <?php echo $i==0 ? 'active':'' ?>">
                        <h3 class="title-white">QUOTES <?php echo $i; ?></h3>
                        <blockquote>
                          <p>
                            <span class="bracket-quotes">&ldquo;</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.
                            <span class="bracket-quotes">&rdquo;</span>
                          </p>
                        </blockquote>
                        <a class="btn btn-default btn-box" href="#" role="button">More Quotes</a>
                      </div>
                      <?php } ?>
                    </div>
                  </div>

              </div>
          </section>
          <!-- /.carousel -->
        </div>
        <figure class="effect-apollo col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img class="profile-photo-homepage img-responsive" src="img/profile-home-photo.png" alt="photo profile luhut at homepage">
          <figcaption>
            <h2 class="heading-profile-home">Profile <span>Luhut Panjaitan</span></h2>
            <p>Profile</p>
            <a href="#">Profile</a>
          </figcaption>
        </figure>
      </div>
      <div class="pemikiran row apollo-hover">


        <figure class="effect-apollo col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img class="profile-photo-homepage img-responsive" src="img/pemikiran-hompage.png" alt="pemikiran Luhut Panjaitan">
          <figcaption>
            <div class="slice slice-blue"><h2><span style="font-size:2em; margin-right:80px;">&plus;</span><span>PEMIKIRAN</span></h2></div>
            <p>Profile</p>
            <a href="#">Profile</a>
          </figcaption>
        </figure>
        <figure class="effect-apollo col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img class="profile-photo-homepage img-responsive" src="img/berita-hompage.png" alt="pemikiran Luhut Panjaitan">
          <figcaption>
            <div class="slice slice-red"><h2><span style="font-size:2em; margin-right:80px;">&plus;</span><span>BERITA</span></h2></div>
            <p>Profile</p>
            <a href="#">Profile</a>
          </figcaption>
        </figure>


        <div class="profile-homepage col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <div class="slice slice-blue blue-big"><h2 class="head-photo-img">PEMIKIRAN</h2></div>
          <img class="profile-photo-homepage img-responsive" src="img/photo-pemikiran-homepage.png" alt="pemikiran Luhut Panjaitan">
        </div>
        <div class="profile-homepage col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="pemikiran-homepage">
            <blockquote>
              <p>
                &ldquo;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.
                &rdquo;
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
          </div><!-- /example -->
        </div>
      </div>
      <div class="profile-home-bottom row">
        <div class="slice slice-white white-big"><h2>PROFILE</h2></div>
        <div class="photo-profile-home col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">

          <img class="img-responsive" src="img/foto-profile.png" alt="photo luhut panjaitan">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <p>
            Luhut Pandjaitan lahir 28 September 1847 di Simargala, Toba Samosir, Sumatera Utara.
          </p>
          <p>
            Luhut Pandjaitan lahir 28 September 1847 di Simargala, Toba Samosir, Sumatera Utara.
            Ia dikenal sebagai profesional yang mengawali karir militer di TNI AD selama 29 tahun, dengan pangkat terakhir sebagai Jenderal Kopassus bintang empat. Ia juga pernah menjabat sebagai Duta Besar Indonesia untuk Singapura (1999-2000) dan Menteri Perdagangan dan Industri RI (2000-2001).
          </p>
          <p>
            Eu feugait euripidis pri, mei ea congue munere constituto, in luptatum deterruisset quo. Wisi appetere temporibus ei qui. Sed tollit audiam feugiat ne, et quo sonet officiis persecuti, at quod audiam vel. Eu vis ullum facer, duo quidam virtute id. Augue mazim dicit duo ea, ei usu assum iisque repudiandae, no solum mundi mentitum sea. Accusam appareat duo cu, ut commodo debitis suscipit nam, affert dignissim vis ei. Numquam laoreet democritum per an.
          </p>
          <a class="btn btn-default btn-box" href="#" role="button">Kenal Lebih Baik</a>
        </div>
      </div>
    </div><!-- /.container -->
<?php include 'footer.php';?>
