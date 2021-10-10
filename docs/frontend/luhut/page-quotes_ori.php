<?php include 'head.php';?>
    <?php include 'mainmenu.php';?>

    <div class="container full-width">
        <div class="bs-example bs-example-tabs" data-example-id="togglable-tabs">



            <ul id="myTabs" class="nav nav-tabs container" role="tablist">
                <li role="presentation"><a href="#quotes" role="tab" id="quotes-tab" data-toggle="tab" aria-controls="quotes">Quotes</a></li>
                <li role="presentation" class="active"><a href="#pemikiran" id="pemikiran-tab" role="tab" data-toggle="tab" aria-controls="pemikiran" aria-expanded="true">Pemikiran</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="pemikiran" aria-labelledBy="pemikiran-tab">

                    <div class="row apollo-hover">
                        <div class="list-group">
                            <?php for($i=0;$i<8;$i++) { ?>
                            <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="slice slice-brown"><div class="plus">&plus;</div>
                                    <img class="profile-photo-homepage img-responsive" src="img/pemikiran-item.png" alt="thumbnail berita di homepage">
                                    <figcaption>
                                        <div class="caption-quotes-page">
                                            Judul Pemikiran item
                                        </div>
                                        <a href="page-pemikiran-detail.php">hidden link</a>
                                    </figcaption>
                                </div>
                            </figure>
                            <?php } ?>
                        </div>
                    </div>

                </div>
                <div role="tabpanel" class="tab-pane fade" id="quotes" aria-labelledBy="quotes-tab">

                    <div class="row apollo-hover">
                        <div class="list-group">
                            <?php for($i=0;$i<12;$i++) { ?>
                            <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <div class="slice slice-brown"><div class="plus">&plus;</div>
                                <img class="profile-photo-homepage img-responsive" src="img/quotes-item.png" alt="thumbnail berita di homepage">
                                <figcaption>
                                    <div class="caption-quotes-page">
                                        terimakasih
                                    </div>
                                    <a class="fancybox" href="img/quotes-item.png"title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">hidden link</a>
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
