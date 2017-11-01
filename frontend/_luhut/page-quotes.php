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
                            <?php for($a=0;$a<4;$a++) {
                                $pemikiran = array(
                                    "pemikiran-1-Semangat-Baru-Peningkatan-Pajak.jpg",
                                    "pemikiran-2-107-tahun-kebangkitan-nasional.jpg",
                                    "Pemikiran-3-Kesombongan-Rohani.jpg",
                                    "Pemikiran-4-Kisah-Bertemu-Saddam-Hussein.jpg"
                                );

                                $title_pemikiran = array(
                                    "Semangat Baru Peningkatan Pajak",
                                    "107 Tahun Kebangkitan Nasional",
                                    "Kesombongan Rohani",
                                    "Kisah Bertemu Saddam Hussein"
                                );

                                $link_pemikiran = array(
                                    "page-pemikiran-detail-1.php",
                                    "page-pemikiran-detail-2.php",
                                    "page-pemikiran-detail-3.php",
                                    "page-pemikiran-detail-4.php"
                                );
                            ?>
                            <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="slice slice-brown"><div class="plus">&plus;</div>
                                    <div class="img-thumbnail-listing">
                                        <img class="profile-photo-homepage img-responsive" src="img/items/<?php  echo $pemikiran[$a]; ?>" alt="thumbnail berita di homepage">
                                    </div>
                                    <figcaption>
                                        <div class="caption-quotes-page">
                                            <?php  echo $title_pemikiran[$a]; ?>
                                        </div>
                                        <a href="<?php  echo $link_pemikiran[$a]; ?>">hidden link</a>
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

                            <?php for($i=0;$i<12;$i++) {

                                  $quotes = array(
                                      "anak-muda-indonesia-2.png",
                                      "cukup-dan-terima-kasih-indonesia-1.png",
                                      "eksport-teknologi-1.jpg",
                                      "kabinet-kerja.jpg",
                                      "kearifan-1.png",
                                      "musuh-abadi-1.jpg",
                                      "pesan-bapak-saya-1.png",
                                      "presiden-beri-contoh-2-2-1.jpg",
                                      "saya-juga-manusia-1.jpg",
                                      "semua-persoalan-bisa-diatasi.jpg",
                                      "speak-up-1.jpg",
                                      "teamwork-3.jpg"
                                  );

                            ?>

                            <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <div class="slice slice-brown"><div class="plus">&plus;</div>
                                    <div class="img-thumbnail-listing">
                                        <img class="profile-photo-homepage img-responsive" src="img/items/<?php  echo $quotes[$i]; ?>" alt="quotes">
                                    </div>
                                <figcaption>
                                    <div class="caption-quotes-page">
                                        terimakasih
                                    </div>
                                    <a class="fancybox" href="img/items/<?php  echo $quotes[$i]; ?>" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">hidden link</a>
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
