<?php include 'head.php';?>
    <?php include 'mainmenu.php';?>
    <div class="container full-width">
        <div class="slice slice-blue blue-big page-blue-big">

            <h2 class="color-red"><span>PEMIKIRAN</span></h2>
            <div class="container page-detail">
                <img class="img-float-left" src="img/berita-thumb-item.png" alt="judul berita">
                <h1 class="color-red">Judul Pemikiran</h1>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae dolor et ante convallis mollis. Praesent non urna vitae diam lobortis sollicitudin at vitae nisl. Cras faucibus lectus id luctus fermentum. Vivamus blandit maximus elit eu luctus. Aliquam nulla sapien, ullamcorper ut hendrerit quis, bibendum at arcu. Fusce consectetur nulla eu fringilla efficitur. Pellentesque faucibus purus vel nisl ornare dictum. Donec risus mauris, pharetra nec massa placerat, ultrices dignissim dui. Praesent vestibulum quam mattis, aliquet tellus ac, fermentum nulla. Nulla sed mattis mauris. Duis laoreet, libero vel tempus iaculis, sem nisl euismod leo, eu vehicula eros justo vel orci. Etiam pulvinar lacus purus, vel convallis sapien vestibulum ut. Etiam tempus suscipit ornare. Cras metus odio, rhoncus vel diam consectetur, tempus fermentum ante. In pulvinar sem id lorem dictum dictum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </P>
                <p>
                    Quisque at neque nulla. Quisque volutpat finibus porttitor. Ut ornare nec turpis vitae maximus. Maecenas elementum pellentesque lacus nec euismod. Proin efficitur dolor eget volutpat suscipit. Sed in cursus urna. Nunc ullamcorper, leo vitae aliquet ornare, odio magna aliquet est, eget mattis nulla arcu et tellus. Duis venenatis tellus et fringilla convallis. Nulla facilisi. Ut egestas in odio nec aliquet. Aenean euismod sapien sit amet nulla laoreet hendrerit. Maecenas luctus vel arcu in sodales.
                </p>
                <p>
                    Ut et augue vitae purus molestie aliquet. Suspendisse consectetur, neque a lacinia elementum, elit ligula gravida velit, non ultricies risus enim eget urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla hendrerit, tortor et ultricies varius, odio lacus ullamcorper enim, nec posuere turpis ex a ligula. Morbi luctus odio ut rhoncus viverra. Pellentesque sollicitudin vitae metus et sodales. In porttitor erat a nisl rhoncus mattis ut at justo. Praesent cursus ex eget placerat congue. Curabitur ac tellus ac nunc semper aliquam in sed dui. Suspendisse vestibulum vehicula congue. Duis pulvinar erat ut tristique congue. In hac habitasse platea dictumst.
                </p>
                <p>
                    Mauris maximus diam at lacus elementum pulvinar. Maecenas nec egestas velit. Mauris in orci tempus, lacinia arcu egestas, ornare tortor. Fusce at dui gravida, rutrum nibh in, accumsan libero. Suspendisse laoreet laoreet turpis, non bibendum neque euismod sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus condimentum, urna at malesuada tristique, justo enim tempor ipsum, at feugiat dolor velit eget tortor. In vitae lorem porttitor lorem molestie tristique non et metus. Fusce lobortis tellus ut lorem congue, eget rhoncus libero euismod. Vivamus velit dolor, vestibulum porttitor tortor ut, mattis porta enim. Praesent a congue magna. Nam at consectetur ante. Vestibulum commodo quam non tempus egestas. Nullam quis justo eu lectus placerat convallis.
                </p>
                <p>
                    Mauris sollicitudin neque at tempor viverra. Aliquam elit magna, pulvinar eget libero vitae, ultricies tristique mauris. Morbi risus dui, lacinia tempor dictum non, vulputate sed elit. Nullam in nisl euismod, auctor dui quis, lobortis ante. Praesent hendrerit lacus ac urna consequat rhoncus. Mauris vulputate tincidunt libero. Vivamus a magna non ex tincidunt suscipit.
                </p>
            </div>
            <div class="bottom-detail">
                <div class="container">
                    <!-- carousel -->
                    <section id="carousel">
                        <div class="row">

                            <div class="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="30000">
                                <!-- Carousel indicators -->
                                <ol class="carousel-indicators">
                                    <?php for($i=0;$i<5;$i++) { ?>
                                    <li data-target="#fade-quote-carousel" data-slide-to="<?php echo $i; ?>" <?php echo $i==0 ? 'class="active"':'' ?>></li>
                                    <?php } ?>
                                </ol>
                                <!-- Carousel items -->
                                <div class="carousel-inner carousel-inner-detail">
                                    <?php for($i=0;$i<5;$i++) { ?>
                                    <div class="item <?php echo $i==0 ? 'active':'' ?>">
                                        <div class="row apollo-hover">
                                            <?php for($a=0;$a<3;$a++) { ?>
                                            <figure class="effect-apollo profile-homepage col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <img class="profile-photo-homepage img-responsive" src="img/list-berita-homepage.png" alt="thumbnail berita di homepage">
                                                <figcaption>
                                                    <div class="caption-quotes-page">
                                                        Judul Pemikiran
                                                    </div>
                                                    <a href="#">link goes here</a>
                                                </figcaption>
                                            </figure>
                                            <?php } ?>
                                        </div><!--.row-->
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>

                        </div>
                    </section>
                    <!-- /.carousel -->
                </div>
            </div>
        </div>
    </div><!-- /.container -->
<?php include 'footer.php';?>
