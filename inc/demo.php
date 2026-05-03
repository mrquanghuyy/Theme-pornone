<?php

function add_theme_widgets() {
    $activate = array(
        'widget-footer' => array(
            'wg_footer-0',
        )
    );
    update_option('widget_wg_footer', array(
        0 => array('footer' => '<footer class="clear-both w-full leading-3 text-center text-gray-900 align-baseline bg-white  border-t border-white-five dark:bg-black-dark dark:border-black-a2">
    <div class="w-full">
      <div class="hidden md:block container text-center align-baseline sm:relative">
        <a href="/" title="pornone.com"><img src="https://th-eu3.pornone.com/images/logo-grey-dark.svg" id="footerlogo" class="inline-block float-left mt-[40px] cursor-pointer" alt="Pornone Logo" loading="lazy"></a>

        <div class="grid grid-cols-4 overflow-hidden flex-wrap flex-initial w-2/3 sm:w-1/2 mx-auto text-gray-900  dark:text-white align-baseline">
          <div class="px-2">
            <ul class="footlist">
              <li class="foothead">Main</li>
              <li class="footlink"><a href="/" title="Home" class="foottext">PornOne</a></li>
            </ul>
          </div>
          <div class="px-2 md:hidden">​</div>
          <div class="px-2">
            <ul class="footlist">
              <li class="foothead" title="Information">Information</li>
              <li class="footlink"><a href="/terms/" title="Terms &amp; Conditions" class="foottext">Terms &amp; Conditions</a></li>
              <li class="footlink"><a href="/privacy/" title="Privacy Policy" class="foottext">Privacy Policy</a></li>
              <li class="footlink"><a href="/terms/#dmca" title="DMCA" class="foottext">DMCA</a></li>
              <li class="footlink"><a href="/18usc2257/" title="2257 Statement" class="foottext">2257 Statement</a></li>
              <li class="footlink"><a href="/cookie-policy/" title="Cookie Policy" class="foottext">Cookie Policy</a></li>
            </ul>
          </div>
          <div class="px-2 md:hidden">​</div>
          <div class=" px-2 ">
            <ul class="footlist">
              <li class="foothead">Work with Us</li>
              <li class="footlink"><a href="/contact/?subject=content%20partner" title="Content Partners" class="foottext">Content Partners</a></li>
              <li class="footlink"><a href="/contact/?subject=advertisement" title="Advertise" class="foottext">Advertise</a></li>
            </ul>
          </div>
          <div class="px-2 md:hidden">​</div>
          <div class=" px-2 ">
            <ul class="footlist">
              <li class="foothead" title="Support">Support</li>
              <li class="footlink"><a href="/contact/" title="Contact Us" class="foottext">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="md:hidden container mx-auto dark:text-white">
          <div class="rounded overflow-hidden">
            <div class="footmobtab group" tabindex="0">
              <div class="footmobhead">
                <div class="footmobtitle">
                  Main                </div>
                <div class="footmobicon">
                    <span class="pointfIcon footmobpoint"></span>
                </div>
              </div>
              <div class="footmobblock">
                <ul class="footmobul">
                  <li class="footmoblist"><a href="/" title="Home" class="footmobtext">PornOne</a></li>
                </ul>
              </div>
            </div>
            <div class="footmobtab group" tabindex="0">
              <div class="footmobhead">
                <div class="footmobtitle">
                  Information                </div>
                <div class="footmobicon">
                    <span class="pointfIcon footmobpoint"></span>
                </div>
              </div>
              <div class="footmobblock">
                <ul class="footmobul">
                  <li class="footmoblist"><a href="/terms/" title="Terms &amp; Conditions" class="footmobtext">Terms &amp; Conditions</a></li>
                  <li class="footmoblist"><a href="/privacy/" title="Privacy Policy" class="footmobtext">Privacy Policy</a></li>
                  <li class="footmoblist"><a href="/terms/#dmca" title="DMCA" class="footmobtext">DMCA</a></li>
                  <li class="footmoblist"><a href="/18usc2257/" title="2257 Statement" class="footmobtext">2257 Statement</a></li>
                  <li class="footmoblist"><a href="/cookie-policy/" title="Cookie Policy" class="footmobtext">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div class="footmobtab group" tabindex="0">
              <div class="footmobhead">
                <div class="footmobtitle">
                  Work with us                </div>
                <div class="footmobicon">
                    <span class="pointfIcon footmobpoint"></span>
                </div>
              </div>
              <div class="footmobblock">
                <ul class="footmobul">
                  <li class="footmoblist"><a href="/contact/?subject=content%20partner" title="Content Partners" class="footmobtext">Content Partners</a></li>
                  <li class="footmoblist"><a href="/contact/?subject=advertisement" title="Advertise" class="footmobtext">Advertise</a></li>
                </ul>
              </div>
            </div>
            <div class="footmobtab group" tabindex="0">
              <div class="footmobhead">
                <div class="footmobtitle">
                 Support                </div>
                <div class="footmobicon">
                    <span class="pointfIcon footmobpoint"></span>
                </div>
              </div>
              <div class="footmobblock">
                <ul class="footmobul">
                  <li class="block h-10 text-f13 text-left align-baseline"><a href="/contact/" title="Contact Us" class="footmobtext">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="container flex-grow flex-shrink-0 px-2 mt-7 max-w-full h-12 text-base leading-5 text-warm-grey-two"><span>2011-2026 © PORNONE. All rights reserved.</span>
            </div>

            <nav class="portrait:grid grid-cols-5 hidden w-full h-14 fixed z-10 bottom-0 left-0 bg-white-two dark:bg-black-dark border-t dark:border-black-33 rounded-t-lg font-semibold text-f12 dark:text-white">
                <a href="/newest/" class="pt-2"><span class="myvideosIcon block mx-auto h-5 w-5 bg-gray-500 dark:bg-white fill-current"></span><span class="mt-1 inline-block truncate w-full">Newest</span></a>
                <a href="/categories/" class="pt-2"><span class="categoriesIcon block mx-auto h-5 w-5 bg-gray-500 dark:bg-white fill-current"></span><span class="mt-1 inline-block truncate w-full">Categories</span></a>
                <a href="javascript:void(0);" id="search-bottom" class="pt-2"><span class="searchIcon block mx-auto h-5 w-5 bg-gray-500 dark:bg-white fill-current"></span><span class="mt-1 inline-block truncate w-full">Search</span></a>
                <a href="/pornstars/" class="pt-2"><span class="pornstarsIcon block mx-auto h-5 w-5 bg-gray-500 dark:bg-white fill-current"></span><span class="mt-1 inline-block truncate w-full">Pornstars</span></a>
            </nav>
    <div class="portrait:block hidden mb-13"></div>
  </footer>')
    ));
    update_option('sidebars_widgets',  $activate);

}

add_action('after_switch_theme', 'add_theme_widgets', 10, 2);