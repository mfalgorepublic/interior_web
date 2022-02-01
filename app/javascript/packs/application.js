// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// import "jquery"
// import {} from 'jquery-ujs'
// import "bootstrap"

require("stylesheets/application.scss")
require("vendor/bootstrap/css/bootstrap.min")
require("vendor/bootstrap-icons/bootstrap-icons")
// require("vendor/aos/aos")
// require("vendor/glightbox/css/glightbox.min")
// require("vendor/swiper/swiper-bundle.min")
require("css/main")
require("css/variables")

// Vendor JS Files 
require("vendor/bootstrap/js/bootstrap.bundle.min")
// require ("vendor/aos/aos")
// require ("vendor/glightbox/js/glightbox.min")
// require ("vendor/isotope-layout/isotope.pkgd.min")
// require ("vendor/swiper/swiper-bundle.min")
// require ("vendor/php-email-form/validate")
  // <!-- Template Main JS File -->

require("js/main")

// import AOS from 'vendor/aos/aos'
// window.AOS = AOS

// import GLightbox from 'vendor/glightbox/js/glightbox.min'
// window.GLightbox = GLightbox

// import Isotope from 'vendor/isotope-layout/isotope.pkgd.min'
// window.Isotope = Isotope
// import Swiper from 'vendor/swiper/swiper-bundle.min'
// window.Swiper = Swiper

