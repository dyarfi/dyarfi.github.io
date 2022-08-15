<template>
  <div class="container w-1/9">
    <!-- Tabs -->
    <ul class="tab-list" role="tablist">
      <li
        v-for="menu in menuList"
        :key="menu.label"
        :class="`tab-item${currentActive(menu.active)}`"
        role="presentation"
      >
        <a
          :rel="menu.label"
          :aria-controls="menu.label"
          role="tab"
          data-toggle="tab"
          @click="activeTab($event)"
        >
          <span
            :class="`${menu.icon}${currentActive(menu.active) && ' fa-beat'}`"
          ></span
          >&nbsp;&nbsp;{{ menu.label }}
        </a>
      </li>
    </ul>
    <!-- Tab CONTENT -->
    <div class="tab-content">
      <div id="About" role="tabpanel" class="tab-pane active">
        <div class="bg-white px-3">
          <div class="row">
            <h5>What I Do</h5>
            <div>
              Hello, my name is Defrian and I work in a startup company in
              Jakarta, Indonesia. Most of the time my job was developing web
              pages, handling servers, and exploring new techniques on the web.
              I've been in these industries for quite sometimes and there's a
              lot of things to keep up with our standard line of work. The
              Internet is always evolving themself into something more than they
              are right now. Websites are becoming less boring than they were
              first discovered in the 90s. Today, more people used the internet
              for their daily bassist and more devices to support them to
              connect to the internet. In my line, web development is what I do
              to support them.
            </div>
            <h5>Specialized</h5>
            <div>
              <p>
                Web programming with PHP frameworks such as Laravel, CakePHP,
                Yii, CodeIgniter, or native PHP, also found joy slicing PSD to
                HTML for Frontend Development. CMS such as WordPress, OpenCart,
                and Drupal has been also part of my working environment. UI
                Development for frontend and backend with HTML, CSS, and
                Javascript / Ajax also ActionScript 2/3 in the past.
              </p>
              <br /><br />
              Familiar with :
              <a href="http://laravel.com/" title="http://laravel.com/"
                >Laravel</a
              >,
              <a
                href="http://yiiframework.com/"
                title="http://yiiframework.com/"
                >Yii</a
              >,
              <a href="http://cakephp.org/" title="http://cakephp.org/"
                >CakePHP</a
              >,
              <a
                href="http://ellislab.com/codeigniter"
                title="http://ellislab.com/codeigniter"
                >CodeIgniter</a
              >,
              <a
                href="http://kohanaframework.org/"
                title="http://kohanaframework.org/"
                >Kohana</a
              >, <a href="http://jquery.com" title="jQuery">jQuery</a>,
              <a href="http://jqueryui.com/" title="jQuery UI">jQuery UI</a>,
              <a href="http://getbootstrap.com/" title="Bootstrap">Bootstrap</a
              >, <a href="https://gulpjs.com">Gulp</a>,
              <a href="https://webpack.js.org/">Webpack</a>,
              <a href="https://reactjs.org/" title="React JS">React</a>,
              <a
                href="https://jekyllrb.com/"
                title="Jekyll | Transform your plain text into static websites and blogs"
                >Jekyll</a
              >, HTML 5, CSS / SASS, Javascript &amp; Ajax and RESTful API.
              <br />
              Development Tools : NetBeans 7.0 / Visual Studio Code / Sublime
              Text, XAMPP / Laragon / Homestead / Docker / Node, Adobe CS3, Git
              &amp; SVN, Terminal, Shell, Win 7 and Mac OSX.<br /><br />
              Related day to day knowledge
              <ul>
                <li>
                  HTML, CSS / SCSS, Javascript and
                  <a href="https://amp.dev" rel="nofollow">AMP Pages</a>
                </li>
                <li>
                  PHP &amp; MySQL, PostgreSQL, SQLite &amp; MongoDB / Firebase
                  (NoSQL)
                </li>
                <li>
                  Slicing Zeplin, Figma, XD and PSD to HTML Template / Webpack
                  &amp; Gulp
                </li>
                <li>HTML Email Templates (Marketing Automation / Mailchimp)</li>
                <li>NodeJS, ReactJS, NextJS, VueJS, NuxtJS, NVM &amp; NPM</li>
                <li>
                  <a href="https://www.arduino.cc/">Arduino</a> and
                  <a href="https://www.hackster.io/esp">ESP8266</a> (Internet of
                  Things) / C++
                </li>
              </ul>
              <blockquote>
                <p>
                  <img
                    :src="require(`../static/img/5X6.jpg`)"
                    alt="My Photos"
                    class="img-responsive img-thumbnail"
                  />
                  <cite class="text-small hide"
                    >" My father works in a construction sites and it's runs on
                    the family after all. "
                  </cite>
                </p>
                <footer>
                  Defrian Yarfi
                  <!--cite title="Source Title">A.MD</cite-->
                </footer>
              </blockquote>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div id="Interest" role="tabpanel" class="tab-pane">
        <div class="bg-white px-3">
          <div class="row">
            <div>
              <h5>What i like to do</h5>
              Modular Frameworks development was used because of its ability for
              reused, re-enhanced or redeveloped from the current set of modules
              that already being part of the system core that we used in our own
              CMS (Content Management System). Modular Frameworks was also a
              part of
              <abbr title="Rapid Application Development"
                >Rapid Application Development</abbr
              >
              (RAD) in software development methodology. I used it because of
              it's fast and robust rapid prototyping, allowing to cut production
              time becoming even faster for new projects to come. Authentication
              is the most vital in web development, therefore
              <abbr title="Role-Based Access Control"
                >Role Based Access Control</abbr
              >
              was the variety used widely in web development protocols which
              happens I've used it practically.
            </div>
            <div>
              <h5>UI Design and Frontend Development</h5>
              User interfaces are also an important aspect for users to
              interact, communicate with browsers, and having an experience of
              how it all works. For me, designing UI and developing Frontend is
              to get to know how a user is experiencing a process that allows
              them to keep them having the use of my works.
            </div>
            <div>
              <h5>Cloud Computing</h5>
              These amazing toolsets was part of modern Web Application
              Development. From Amazon to Microsoft and Google had taken their
              part in these tools. By happens some of my projects were also
              implemented in cloud computing services. I am familiar and had
              been working with Azure, AWS, GoDaddy, Google Cloud, and Digital
              Ocean Servers.
            </div>
            <!--div>
              <h5>Mobile Application Development</h5>
              WebView in Android Apps makes development possible to create a Native Application that can communicate with mobile hardware using just only HTML, CSS and Javascript so we can defined it as Hybrid Android App. People like me in web development field can jump right in just using HTML5, CSS, Javascript to create an Android Apps and having to get familiar about java language little bit at a time. IDE used for the practices was Netbeans 7.1.2 with NBAndroid Plugins, JQuery Mobile or Bootstrap for the apps. PhoneGap for the hardware connector used for the development process. API, Json and RESTFul web service used for data retrieval or just plain HTML5 data storage. Mobile Application Development is possible with all the mobile handset that have webview / UiWebView property.
              And now <a href="https://facebook.github.io/react-native/" title="Facebook React Native">React Native</a> showed me another level of mobile aplication development.
            </div-->
            <div>
              <h5>Internet of Things</h5>
              With the rise of microcontrollers and microprocessors around the
              globe, the rise of connected things will be inevitable and will be
              playing in the key role for some businesses to happens. Some
              companies already started to focusing on the products to make the
              future of Connected Things. For me, this a step up for the
              challenge to get more advantages with the use of internet on
              different media. My fun projects with the used of IoT :
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    class="link-video h5"
                    data-rel="https://www.youtube.com/embed/NaDBe4ZnQls?ecver=2&amp;controls=0&amp;showinfo=0&amp;rel=0"
                    >Arduino Uno using Node JS with Firebase Dashboard<span
                      class="hide"
                      >This is a sample that uses Arduino with NodeJS and
                      Firebase Database featuring real time Database
                      Update</span
                    ></a
                  >
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                          height="324"
                          width="640"
                          src="https://www.youtube.com/embed/NaDBe4ZnQls"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                          class="embed-responsive-item"
                          style="display: block"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class="link-video h5"
                    data-rel="https://www.youtube.com/embed/REdQcWAdcCU?ecver=2"
                    >Arduino Proximity with X-Mas Lamp Relay with Firebase
                    Dashboard<span class="hide"
                      >This is a sample that uses Proximity Sensors with NodeJS
                      and Firebase Database with real time Database Update</span
                    ></a
                  >
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                          height="324"
                          width="640"
                          src="https://www.youtube.com/embed/REdQcWAdcCU"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                          class="embed-responsive-item"
                          style="display: block"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class="link-video h5"
                    data-rel="https://www.youtube.com/embed/jrqWEvmJ2z0?ecver=2"
                    >Wemos D1 Mini (ESP8266) IOT on Weather Station with
                    Firebase Dashboard<span class="hide"
                      >This is a sample uses D11 Humidity / Temperature Sensors
                      that uses Wemos D1 Mini (ESP8266) Internet of Things and
                      Firebase Database with real time Database Update on
                      Weather Station Display</span
                    ></a
                  >
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                          height="324"
                          width="640"
                          src="https://www.youtube.com/embed/jrqWEvmJ2z0"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                          class="embed-responsive-item"
                          style="display: block"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="Works" role="tabpanel" class="tab-pane">
        <div class="bg-white px-3">
          <div class="row">
            <h5>What I have done</h5>
            <p>Here are some links to my past recent work with my co-worker.</p>
            <a
              href="https://asiatrade.co.id"
              target="_blank"
              title="Asiatrade ID"
              >https://asiatrade.co.id/</a
            ><br />
            <a
              rel="nofollow"
              href="https://lottechocopieindonesia.com/"
              target="_blank"
              >https://lottechocopieindonesia.com/</a
            ><br />
            <!--a href="https://dykraf.bitbucket.io/theme/decorplus" target="_blank" title="Decorplus ID">http://decorplus.id/</a><br-->
            <a rel="nofollow" href="http://canoprint.com/" target="_blank"
              >http://canoprint.com/</a
            ><br />
            <a rel="nofollow" href="https://hondadutamotor.com/" target="_blank"
              >https://hondadutamotor.com/</a
            ><br />
            <a rel="nofollow" href="http://pemulihan.or.id/" target="_blank"
              >http://pemulihan.or.id/</a
            ><br />
            <a
              rel="nofollow"
              href="http://pemulihan.or.id/tmp/Pemulihan.apk"
              target="_blank"
              >http://pemulihan.or.id/tmp/Pemulihan.apk</a
            >
            (Android Phonegap Apps)<br />
            <br />
            <p>Frontend / HTML Static Pages :</p>
            <a rel="follow" href="https://foodtale.netlify.app/" target="_blank"
              >foodtale</a
            ><br />
            <a
              rel="follow"
              href="https://restaurant-juan.netlify.app/"
              target="_blank"
              >restaurant-juan</a
            ><br />
            <a rel="nofollow" href="frontend/hospital/" target="_blank"
              >+hospital</a
            ><br />
            <a
              rel="nofollow"
              href="https://nextjs-reactstrap.now.sh/"
              target="_blank"
              >nextjs-reactstrap</a
            ><br />
            <a
              rel="nofollow"
              href="https://gerimis-app.vercel.app/"
              target="_blank"
              >gerimis-app</a
            ><br />
            <a rel="follow" href="frontend/restaurant/" target="_blank"
              >restoem</a
            ><br />
            <a rel="nofollow" href="frontend/iotagency/" target="_blank"
              >iotagency</a
            ><br />
            <a rel="follow" href="frontend/motomobs/" target="_blank"
              >motomobs</a
            ><br />
            <a rel="nofollow" href="frontend/shopped/" target="_blank"
              >shopped</a
            ><br />
            <a rel="nofollow" href="frontend/thinkpad/" target="_blank"
              >thinkpad</a
            ><br />
            <a rel="nofollow" href="frontend/marizafoods/" target="_blank"
              >marizafoods</a
            ><br />
            <a rel="nofollow" href="frontend/andhikakencana/" target="_blank"
              >andhikakencana</a
            ><br />
            <a rel="nofollow" href="frontend/unisadhuguna/" target="_blank"
              >unisadhuguna</a
            ><br />
            <a rel="nofollow" href="frontend/bnisyariah/" target="_blank"
              >bnisyariah</a
            ><br />
            <a rel="nofollow" href="frontend/health/" target="_blank">health</a
            ><br />
            <a rel="nofollow" href="frontend/vavacaca.com/" target="_blank"
              >vavacaca.com</a
            ><br />
            <a rel="nofollow" href="frontend/arcadia/" target="_blank"
              >arcadia</a
            ><br /><br />
            <br />
            <p>
              Wireframes
              <a rel="nofollow" href="wireframes/" target="_blank">Mockups</a>
            </p>
            <br />
          </div>
        </div>
      </div>
      <div id="Contact" role="tabpanel" class="tab-pane">
        <div class="bg-white px-3">
          <div class="row">
            <h5>Contact Me</h5>
            <div class="container-fluid">
              <div class="pull-left absolute">
                <div id="loader"></div>
                <div id="result_callback"></div>
              </div>
              <form
                id="contact_form"
                class="w-full"
                method="post"
                action="process.php"
              >
                <div class="form-group">
                  <label for="name">Name :</label>
                  <input
                    id="name"
                    type="text"
                    disabled=""
                    class="form-control w-1/2 block"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email :</label>
                  <input
                    id="email"
                    type="text"
                    disabled=""
                    class="form-control w-1/2 block"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <label for="message">Message :</label>
                  <textarea
                    id="message"
                    rows="5"
                    cols="3"
                    disabled=""
                    class="form-control w-1/2 block"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>
                <div class="form-group w-1/2 block">
                  <div class="clearfix"></div>
                  <input
                    type="submit"
                    disabled=""
                    value="Submit"
                    name="submit"
                    class="btn btn-large btn-danger"
                  />
                  &nbsp; <span class="text-warning">Disabled Temporary</span>
                </div>
              </form>
              <br />
              <div class="clearfix">
                <del
                  >Contact me at anytime, and I'll reply your email as soon as
                  possible</del
                >
              </div>
              <br />
              <div class="clearfix">
                <div class="clearfix">Or you can Contact me at :</div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/defrian-yarfi-26ba3842/"
                  class="btn btn-primary btn-sm"
                  ><span class="fa fa-linkedin"></span> LinkedIn</a
                >
                <a
                  target="_blank"
                  href="https://github.com/dyarfi/"
                  class="btn btn-default btn-sm"
                  ><span class="fa fa-github"></span> GitHub</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          label: 'About',
          icon: 'fa fa-share-alt',
          active: true,
        },
        {
          label: 'Interest',
          icon: 'fa fa-star',
          active: false,
        },
        {
          label: 'Works',
          icon: 'fa fa-rocket',
          active: false,
        },
        {
          label: 'Contact',
          icon: 'fa fa-envelope',
          active: false,
        },
      ],
      classActive: '',
    }
  },
  // created() {
  //   const vm = this
  //   vm.menuList.forEach((elm, i) => {
  //     if (i === 0) {
  //       elm.active = true
  //     }
  //   })
  // },
  methods: {
    clickOnTabLink: (e) => {
      // this.menuList.map(
      //   (list) => console.log(list)
      //   // return { ...list, active: e.target.getAttribute('rel') === list.label }
      // )
      // console.log(this.$menuList)
    },
    currentActive(active) {
      return active ? ' active' : ''
    },
    activeTab(event) {
      const siblings = event.currentTarget.parentNode.querySelectorAll('li')
      for (const item of siblings) {
        item.children[0].innerHTML = 'Inactive'
        // item.children[1].classList.add('hidden')
        item.classList.add('text-gray-600')
        item.classList.remove('text-indigo-700')
      }
      event.currentTarget.children[0].innerHTML = 'Active'
      // event.currentTarget.children[1].classList.remove('hidden')
      event.currentTarget.classList.remove('text-gray-600')
      event.currentTarget.classList.add('text-indigo-700')
    },
  },
}
</script>
