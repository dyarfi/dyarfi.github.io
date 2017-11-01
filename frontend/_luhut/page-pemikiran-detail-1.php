<?php include 'head.php';?>
    <?php include 'mainmenu.php';?>
    <div class="container full-width">
        <div class="slice slice-blue blue-big page-blue-big">

            <h2 class="color-red"><span>PEMIKIRAN</span></h2>
            <div class="container page-detail">
                <img class="img-ctr img-responsive" src="img/items/pemikiran-1-Semangat-Baru-Peningkatan-Pajak.jpg" alt="judul berita">
                <h1 class="color-red">Semangat Baru Peningkatan Pajak</h1>
                <p>
                    Presiden Jokowi ditanya target pajak yang naik hampir 40 persen. Apakah ini bisa tercapai? Padahal tahun-tahun sebelumnya, penerimaan pajak hanya naik 5 persen per tahun. Itu pun sulit tercapai.
                </p>
                <p>
                    Dengan tegas presiden menjawab, bisa! Target kenaikan pajak tahun ini sebesar 31,4 persen bukan angka hura-hura. Pemerintah telah mengundang Kanwil-Kanwil Pajak untuk mendapat masukan, kemudian dikalkulasi, dihitung potensinya.
                </p>
                <p>
                    Menurut saya, rasio pendapatan pajak kita masih 11 persen dari Gross Domestic Product (GDP). Pemerintah ingin mencapai 13 persen di tahun ini dan membidik angka 16 persen di akhir periode pertama Presiden Jokowi. Kalau ini tercapai, maka target penerimaan pajak dan bea cukai kita yang saat ini sebesar Rp1.489,3 triliun, bukan tak mungkin menjadi dua kali lipat, yakni Rp2.500 triliun di tahun 2019.
                </p>
                <p>
                    Memang tidak mudah meningkatkan pendapatan pajak. Masalahnya, pajak di Indonesia bukan berkaitan dengan intensifikasi, melainkan ekstensifikasi. Namun potensi kita besar sekali. Saat ini pembayar pajak di Indonesia hanya 8,8 juta jiwa dan 550 ribu perusahaan dari 67 juta jiwa dan 12 juta perusahaan wajib pajak yang terdaftar. Dari angka itu, banyak golongan menengah belum punya Nomor Pokok Wajib Pajak (NPWP), jumlahnya jutaan. Pemilik NPWP baru sekitar 25 juta, terdiri 20 juta perorangan dan 5 juta perusahaan.
                </p>
                <p>
                    Bagaimana cara meningkatkan pajak? Ada tiga cara yang telah disetujui Presiden Jokowi dan Direktorat Jenderal Pajak. Pertama, menambah jumlah pegawai penarik pajak. Kedua, proses pembayaran pajak dilakukan secara elektronik, dan memberikan insentif pengurangan persentase pajak atau memberi waktu untuk mencicil.
                </p>
                <p>
                    Dengan melakukan efisiensi pajak, fiskal kita membesar, maka dana pembangunan infrastruktur juga semakin meningkat. Kalau ini terjadi, saya optimistis pertumbuhan ekonomi tumbuh di atas 7 persen dalam jangka waktu tiga tahun.
                </p>
                <p>
                    Tahun ini, alokasi anggaran infrastruktur paling besar dalam sejarah republik sekitar Rp 290 triliun. Kemudian penyertaan modal negara (PMN) ke BUMN juga terbesar dalam sejarah. Semua yang kita berikan melalui PMN juga fokus ke infrastruktur. Indonesia membutuhkan US$ 545 miliar dalam 5 tahun ke depan untuk meningkatkan kualitas infrastruktur dalam mendukung pertumbuhan ekonomi. Betapa pentingnya infrastruktur jalan, kereta api, dan lainnya.
                </p>
                <p>
                    Bila para analisis memprediksi Indonesia masuk 7 atau 5 besar ekonomi dunia, itu bukan hal yang tidak mungkin. Sangat-sangat mungkin. Bukan hal yang sulit jika ada kemauan dengan melakukan penghematan-penghematan pada hal yang tidak prioritas.
                </p>
                <p>
                    Tapi juga mesti sadar bahwa konsolidasi dan perbaikan sistem di era pemerintahan Jokowi membutuhkan waktu. Mungkin belum bisa dilihat hasilnya dalam satu tahun ke depan. Sebab pemerintah masih mengharmonisasikan berbagai macam aturan-aturan yang tumpang tindih. Bila regulasi dan sistem sudah tertata, investor dari dalam dan luar negeri akan berbondong-bondong ke Indonesia.
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
