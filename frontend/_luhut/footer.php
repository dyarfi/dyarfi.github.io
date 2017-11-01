  <div class="footer">
    <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-24 col-lg-2">
        <a href=""><img src="img/btn-share.png"></a>
        <a href=""><img src="img/btn-follow.png"></a>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <a href="https://www.facebook.com/luhutbinsar.pandjaitan"><img src="img/link-fb.png"></a>
        <a href="https://twitter.com/luhutpandjaitan"><img src="img/link-twitter.png"></a>
        <a href=""><img src="img/link-web.png"></a>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <form id="custom-search-form" class="form-search form-horizontal pull-right">
          <div class="input-append span12">
            <input type="text" class="search-query mac-style" placeholder="Search">
            <button type="submit" class="btn">search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Bootstrap core JavaScript
  ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="js/carousel.js"></script>
  <script src="js/jquery.viewportchecker.js"></script>
  <script src="js/tab.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.fancybox.pack.js?v=2.1.5" type="text/javascript"></script>
  <script src="js/general.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      $(".fancybox").fancybox({
        helpers : {
          title : {
            type : 'over'
          },
          overlay : {
            speedOut : 0
          }
        }
      });

      //$("#video").css("display", "none"); //HIDE THE VIDEO INITIALLY
      $(".hover-play").hover(function ()
                            {
        //$("#video").css("display", "block"); //SHOW THE VIDEO ON HOVER
        $("#video").children("video")[0].play();
      },

                            function () {
        var el =$("#video").children("video")[0];
        el.pause();
        el.currentTime = 0;
      });
    });
  </script>
  </body>
</html>
