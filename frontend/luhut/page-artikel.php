<?php include 'head.php';?>
    <?php include 'mainmenu.php';?>

    <div class="container full-width">
        <div class="bs-example bs-example-tabs" data-example-id="togglable-tabs">

            <ul id="myTabs" class="nav nav-tabs container" role="tablist">
                <li role="presentation"><a href="#galerry" role="tab" id="galerry-tab" data-toggle="tab" aria-controls="galerry">Gallery</a></li>
                <li role="presentation"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">Video</a></li>
                <li role="presentation" class="active"><a href="#artikel" id="artikel-tab" role="tab" data-toggle="tab" aria-controls="artikel" aria-expanded="true">Artikel</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="artikel" aria-labelledBy="artikel-tab">
                    <div class="slice slice-red red-big"><h2><span>Artikel</span></h2></div>
                    <div class="container">
                        <div class="row">
                            <div class="list-group">
                                <?php for($i=0;$i<5;$i++) { ?>
                                <a href="page-artikel-detail.php" class="list-group-item">
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
                <div role="tabpanel" class="tab-pane fade" id="video" aria-labelledBy="video-tab">

                    <div class="row apollo-hover">
                        <div class="list-group">
                            <?php for($i=0;$i<12;$i++) { ?>
                            <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="slice slice-brown"><div class="plus">&plus;</div>
                                <img class="profile-photo-homepage img-responsive" src="img/pemikiran-item.png" alt="thumbnail berita di homepage">
                                <figcaption>
                                    <div class="caption-quotes-page">
                                        Judul Video disini
                                    </div>
                                    <a class="fancybox" href="img/pemikiran-item.png"title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">hidden link</a>
                                </figcaption>
                                </div>
                            </figure>
                            <?php } ?>
                        </div>
                    </div>

                </div>
                <div role="tabpanel" class="tab-pane fade" id="galerry" aria-labelledBy="galerry-tab">

                    <div class="row apollo-hover">
                        <div class="list-group">
                            <?php for($i=0;$i<12;$i++) { ?>
                            <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="slice slice-brown"><div class="plus">&plus;</div>
                                    <img class="profile-photo-homepage img-responsive" src="img/list-berita-homepage.png" alt="thumbnail berita di homepage">
                                    <figcaption>
                                        <div class="caption-quotes-page">
                                            Judul Gallery disini
                                        </div>
                                        <a class="fancybox" href="img/pemikiran-item.png"title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">hidden link</a>
                                    </figcaption>
                                </div>
                            </figure>
                            <?php } ?>
                        </div>
                    </div>

                </div>
            </div>
        </div><!-- /example -->
    </div><!-- /.container -->
<?php include 'footer.php';?>
