/******/ (function () {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./resources/js/invitation-core.js":
      /*!*****************************************!*\
  !*** ./resources/js/invitation-core.js ***!
  \*****************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ initCoreInvitation: function () {
            return /* binding */ initCoreInvitation;
          },
          /* harmony export */
        });
        var initCoreInvitation = function initCoreInvitation() {
          var lang = document.documentElement.lang;

          // full screen
          var openFullScreen = function openFullScreen() {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              /* Safari */
              document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
              /* IE11 */
              document.documentElement.msRequestFullscreen();
            }
          };

          // watermark
          document.addEventListener("DOMContentLoaded", function () {
            var elements = {
              app: document.getElementById("app"),
              illegal: document.getElementById("illegal"),
              wm: document.getElementById("waterMark"),
              wmp: document.querySelector(".watermark-placeholder"),
              nowm: document.querySelector(".no-watermark"),
              wmLayout: document.querySelector(".watermark"),
            };
            if (elements.wm && elements.wmp && !elements.nowm) {
              elements.wm.style.display = "inherit";
              elements.wmp.innerHTML = "";
              elements.wmp.appendChild(elements.wm);
              if (elements.illegal) elements.illegal.style.display = "none";
            } else if (elements.wmLayout && !elements.wmp) {
              if (elements.app) elements.app.innerHTML = "";
              if (elements.illegal) elements.illegal.style.display = "flex";
            } else {
              if (elements.wm) elements.wm.style.display = "none";
              if (elements.illegal) elements.illegal.style.display = "none";
            }
          });

          // tampilkan nama tamu
          var guestName = satuMomen.dataset.guest;
          var guestNameSlot = document.getElementById("guestNameSlot");
          if (guestName && guestNameSlot) {
            guestNameSlot.innerHTML = guestName;
          }

          // tampilkan nama group
          var groupName = satuMomen.dataset.group;
          var groupNameSlot = document.getElementById("groupNameSlot");
          if (groupName && groupNameSlot) {
            groupNameSlot.innerHTML = groupName;
          }

          // tampilkan gift
          var showGift = function showGift(index) {
            for (var i = 0; i < btnGift.length; i++) {
              if (i != index) {
                giftContainer[i].style.display = "none";
              }
            }
            giftContainer[index].style.display = "inherit";

            // Trigger event yang bisa ditangkap dari luar
            document.dispatchEvent(new Event("showGiftEvent"));
          };
          var giftContainer = document.getElementsByClassName("gift-container");
          for (var i = 0; i < giftContainer.length; i++) {
            giftContainer[i].style.display = "none";
          }
          var btnGift = document.getElementsByClassName("btn-gift");
          var _loop = function _loop(_i) {
            btnGift[_i].onclick = function () {
              showGift(_i);
            };
          };
          for (var _i = 0; _i < btnGift.length; _i++) {
            _loop(_i);
          }

          // modal
          var body = document.getElementsByTagName("BODY")[0];
          var modalOverlay = document.getElementById("modalOverlay");
          var showModal = function showModal(target) {
            body.classList.add("modal-open");
            modalOverlay.classList.add("show");
            modalOverlay.style = "display: block;";
            target.setAttribute("aria-hidden", "false");
            target.classList.add("show");
            target.style = "display: block;";
            document.dispatchEvent(new Event("showModalEvent"));
          };
          var closeModal = function closeModal(target) {
            body.classList.remove("modal-open");
            modalOverlay.classList.remove("show");
            modalOverlay.style = "display: none;";
            target.setAttribute("aria-hidden", "true");
            target.classList.remove("show");
            target.style = "display: none;";
            document.dispatchEvent(new Event("closeModalEvent"));
          };

          // countdown
          var countdownElement =
            document.getElementsByClassName("countdown-wrapper");
          var displayCountdown = function displayCountdown(target) {
            var countDownDate = new Date(target.dataset.datetime).getTime();
            var daysEl = target.querySelector(".countdown > .day > .number");
            var hoursEl = target.querySelector(".countdown > .hour > .number");
            var minutesEl = target.querySelector(
              ".countdown > .minute > .number"
            );
            var secondsEl = target.querySelector(
              ".countdown > .second > .number"
            );

            // Update the count down every 1 second
            var x = setInterval(function () {
              // Get today's date and time
              var now = new Date().getTime();

              // Find the distance between now and the count down date
              var distance = countDownDate - now;

              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              var minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
              );
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              daysEl.innerHTML = days;
              hoursEl.innerHTML = hours;
              minutesEl.innerHTML = minutes;
              secondsEl.innerHTML = seconds;

              // If the count down is over, write some text
              if (distance < 0) {
                clearInterval(x);
                daysEl.innerHTML = "00";
                hoursEl.innerHTML = "00";
                minutesEl.innerHTML = "00";
                secondsEl.innerHTML = "00";
              }
            }, 1000);
          };
          for (var _i2 = 0; _i2 < countdownElement.length; _i2++) {
            displayCountdown(countdownElement[_i2]);
          }
          var copyText = function copyText(e) {
            var newInp = document.createElement("input");
            newInp.autofocus = false;
            newInp.value = e.target.dataset.text;
            document.body.appendChild(newInp);
            newInp.select();
            document.execCommand("copy");
            newInp.remove();
            var oldText = e.target.innerHTML;
            if (lang == "id") {
              e.target.innerHTML = "Disalin";
            } else {
              e.target.innerHTML = "Copied";
            }
            setTimeout(function () {
              e.target.innerHTML = oldText;
            }, 2000);
          };

          // copy rekening
          var accountNumber = document.getElementsByClassName("account-number");
          for (var _i3 = 0; _i3 < accountNumber.length; _i3++) {
            if (accountNumber[_i3].innerHTML) {
              if (lang == "id") {
                accountNumber[_i3].insertAdjacentHTML(
                  "afterend",
                  "<button type='button' class='btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(
                    accountNumber[_i3].innerText,
                    "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px'>Salin Rekening</button>"
                  )
                );
              } else {
                accountNumber[_i3].insertAdjacentHTML(
                  "afterend",
                  "<button type='button' class='btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(
                    accountNumber[_i3].innerText,
                    "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px'>Copy to Clipboard</button>"
                  )
                );
              }
            }
          }

          // copy alamat
          var addressText = document.getElementsByClassName("copy-address");
          for (var _i4 = 0; _i4 < addressText.length; _i4++) {
            if (addressText[_i4].innerHTML) {
              if (lang == "id") {
                addressText[_i4].insertAdjacentHTML(
                  "afterend",
                  "<button type='button' class='btn btn-sm btn-primary mt-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(
                    addressText[_i4].innerText,
                    "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px;'>Salin Alamat</button>"
                  )
                );
              } else {
                addressText[_i4].insertAdjacentHTML(
                  "afterend",
                  "<button type='button' class='btn btn-sm btn-primary mt-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(
                    addressText[_i4].innerText,
                    "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px;'>Copy to Clipboard</button>"
                  )
                );
              }
            }
          }

          // Return objek dengan fungsi yang perlu diakses dari luar
          return {
            openFullScreen: openFullScreen,
            showGift: showGift,
            showModal: showModal,
            closeModal: closeModal,
            displayCountdown: displayCountdown,
            copyText: copyText,
          };
        };
        /* harmony default export */ __webpack_exports__["default"] =
          initCoreInvitation;

        /***/
      },

    /***/ "./resources/js/invitation-lightbox.js":
      /*!*********************************************!*\
      !*** ./resources/js/invitation-lightbox.js ***!
      \*********************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ initLightBox: function () {
            return /* binding */ initLightBox;
          },
          /* harmony export */
        });
        var initLightBox = function initLightBox() {
          // lightbox gallery
          var lightboxWrapper = document.getElementById("lightboxWrapper");
          var lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
          var lightboxNextBtn = document.getElementById("lightboxNextBtn");
          var lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
          var lightboxList = document.querySelector(
            "#lightboxWrapper > .lightbox-list"
          );
          var images = document.getElementsByClassName("lightbox");
          var showLightbox = function showLightbox(i) {
            lightboxWrapper.classList.add("show");
            lightboxList.innerHTML =
              '<div class="lightbox-inner"><img src="'.concat(
                images[i].src,
                '"></div>'
              );
            lightboxNextBtn.dataset.index = i;
            lightboxPrevBtn.dataset.index = i;
            document.dispatchEvent(new Event("showLightBoxEvent"));
          };
          lightboxNextBtn.onclick = function () {
            var i = parseInt(lightboxNextBtn.dataset.index) + 1;
            if (i >= images.length) {
              i = 0;
            }
            showLightbox(i);
          };
          lightboxPrevBtn.onclick = function () {
            var i = parseInt(lightboxPrevBtn.dataset.index) - 1;
            if (i == -1) {
              i = images.length - 1;
            }
            showLightbox(i);
          };
          var closeLightbox = function closeLightbox() {
            lightboxWrapper.classList.remove("show");
            lightboxList.innerHTML = "";
            document.dispatchEvent(new Event("closeLightBoxEvent"));
          };
          var _loop = function _loop(i) {
            images[i].onclick = function () {
              showLightbox(i);
            };
          };
          for (var i = 0; i < images.length; i++) {
            _loop(i);
          }
          lightboxCloseBtn.onclick = function () {
            closeLightbox();
          };
          return {
            showLightbox: showLightbox,
            closeLightbox: closeLightbox,
          };
        };
        /* harmony default export */ __webpack_exports__["default"] =
          initLightBox;

        /***/
      },

    /***/ "./resources/js/invitation-music.js":
      /*!******************************************!*\
      !*** ./resources/js/invitation-music.js ***!
      \******************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ initMusic: function () {
            return /* binding */ initMusic;
          },
          /* harmony export */
        });
        var initMusic = function initMusic() {
          // Mendapatkan elemen dengan fallback aman
          var btnMusic = document.getElementById("btnMusic");
          var music = document.getElementById("music") || null;
          var iframeElement = document.querySelector(".sc-music > iframe");
          var widget = iframeElement ? SC.Widget(iframeElement) : null;

          // State untuk melacak status musik
          var musicPlaying = false;
          var userPausedMusic = false; // Melacak jika user sengaja mem-pause musik
          var userInteracted = false; // Melacak apakah pengguna sudah berinteraksi

          // Setup awal untuk HTML5 audio
          if (music) {
            // Set muted untuk memungkinkan autoplay
            music.muted = true;
            music.volume = 0;
          }

          // Fungsi untuk mengontrol musik dengan implementasi yang lebih bersih
          var playMusic = function playMusic(status) {
            // Jika status diberikan secara eksplisit, gunakan status tersebut
            // Jika tidak, toggle status yang ada
            var shouldPlay = status !== undefined ? status : !musicPlaying;

            // Update state
            musicPlaying = shouldPlay && !userPausedMusic;

            // Update UI
            if (btnMusic) {
              btnMusic.classList.toggle("playing", musicPlaying);
            }

            // Kontrol audio berdasarkan elemen yang tersedia
            if (music) {
              if (musicPlaying) {
                var playPromise = music.play();

                // Tangani promise untuk kompatibilitas browser
                if (playPromise !== undefined) {
                  playPromise
                    .then(function () {
                      // Jika user sudah berinteraksi, unmute audio
                      if (userInteracted) {
                        music.muted = false;
                        // Pulihkan volume secara bertahap
                        var currentVolume = 0;
                        var targetVolume = 1; // atau nilai lain yang diinginkan
                        var volumeInterval = setInterval(function () {
                          currentVolume += 0.1;
                          if (currentVolume >= targetVolume) {
                            currentVolume = targetVolume;
                            clearInterval(volumeInterval);
                          }
                          music.volume = currentVolume;
                        }, 100);
                      }
                    })
                    ["catch"](function (error) {
                      console.log("Autoplay prevented:", error);
                    });
                }
              } else {
                music.pause();
              }
            }

            // Soundcloud widget
            if (widget && SC.Widget.Events.READY) {
              musicPlaying ? widget.play() : widget.pause();
              // Untuk SoundCloud perlu implementasi khusus untuk volume
              if (widget && userInteracted) {
                widget.setVolume(100);
              } else if (widget) {
                widget.setVolume(0);
              }
            }
          };

          // Tambahkan event listeners untuk HTML5 audio
          if (music) {
            music.addEventListener("play", function () {
              musicPlaying = true;
              if (btnMusic) btnMusic.classList.add("playing");
            });
            music.addEventListener("pause", function () {
              musicPlaying = false;
              if (btnMusic) btnMusic.classList.remove("playing");
            });
          }

          // Kelola musik saat pengguna berganti tab
          document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
              // Pause musik saat pengguna meninggalkan tab
              if (musicPlaying) {
                playMusic(false);
              }
            } else {
              // Pengguna kembali ke tab
              // Nyalakan musik hanya jika tidak di-pause manual sebelumnya
              if (!userPausedMusic) {
                playMusic(true);
              }
            }
          });

          // Event listener untuk tombol musik jika ada
          if (btnMusic) {
            btnMusic.addEventListener("click", function () {
              userPausedMusic = !userPausedMusic; // Update status pause manual
              userInteracted = true; // Tandai bahwa user telah berinteraksi
              playMusic();
            });
          }

          // Coba autoplay dengan muted saat halaman dimuat
          document.addEventListener("DOMContentLoaded", function () {
            // Mulai dengan muted autoplay
            playMusic(true);
          });

          // Catat interaksi pengguna pertama dengan halaman
          var _markUserInteraction = function markUserInteraction() {
            userInteracted = true;

            // Jika musik sedang diputar, unmute
            if (musicPlaying && music && !userPausedMusic) {
              music.muted = false;
              // Pulihkan volume secara bertahap
              var currentVolume = 0;
              var targetVolume = 1; // atau nilai lain yang diinginkan
              var volumeInterval = setInterval(function () {
                currentVolume += 0.1;
                if (currentVolume >= targetVolume) {
                  currentVolume = targetVolume;
                  clearInterval(volumeInterval);
                }
                music.volume = currentVolume;
              }, 100);
            }

            // Juga atur volume SoundCloud jika digunakan
            if (widget && musicPlaying) {
              widget.setVolume(100);
            }

            // Hapus event listener setelah interaksi pertama
            ["click", "touchstart", "keydown", "scroll"].forEach(function (
              event
            ) {
              document.removeEventListener(event, _markUserInteraction);
            });
          };

          // Tambahkan event listener untuk mendeteksi interaksi pertama
          ["click", "touchstart", "keydown", "scroll"].forEach(function (
            event
          ) {
            document.addEventListener(event, _markUserInteraction);
          });

          // Return objek dengan fungsi yang perlu diakses dari luar
          return {
            playMusic: playMusic,
          };
        };

        // Export fungsi initMusic
        /* harmony default export */ __webpack_exports__["default"] = initMusic;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
  !(function () {
    /*!**********************************!*\
      !*** ./resources/js/themesv2.js ***!
      \**********************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _invitation_core_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(
        /*! ./invitation-core.js */ "./resources/js/invitation-core.js"
      );
    /* harmony import */ var _invitation_music_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ./invitation-music.js */ "./resources/js/invitation-music.js"
      );
    /* harmony import */ var _invitation_lightbox_js__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(
        /*! ./invitation-lightbox.js */ "./resources/js/invitation-lightbox.js"
      );
    var _document$querySelect;

    // Inisialisasi fungsi yang diekspos
    var _initCoreInvitation = (0,
      _invitation_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      openFullScreen = _initCoreInvitation.openFullScreen,
      showModal = _initCoreInvitation.showModal,
      closeModal = _initCoreInvitation.closeModal,
      copyText = _initCoreInvitation.copyText,
      showGift = _initCoreInvitation.showGift;
    var _initMusic = (0,
      _invitation_music_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      playMusic = _initMusic.playMusic;
    var _initLightBox = (0,
      _invitation_lightbox_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      showLightbox = _initLightBox.showLightbox,
      closeLightbox = _initLightBox.closeLightbox;
    window.showModal = showModal;
    window.closeModal = closeModal;
    window.copyText = copyText;
    window.playMusic = playMusic;
    window.showLightbox = showLightbox;
    window.closeLightbox = closeLightbox;
    var satuMomen = document.getElementById("satuMomen");
    var lang = document.documentElement.lang;

    // loader
    document.addEventListener("DOMContentLoaded", function () {
      var loader = document.getElementById("loader");
      var satuMomen = document.getElementById("satuMomen");
      if (loader && satuMomen) {
        window.addEventListener("load", function () {
          setTimeout(function () {
            loader.style.display = "none";
            satuMomen.style.display = "block"; // Gunakan "block" bukan "inherit"
          }, 100);
        });

        // Jika load event tidak terjadi dalam 5 detik, sembunyikan loader secara paksa
        setTimeout(function () {
          if (loader.style.display !== "none") {
            loader.style.display = "none";
            satuMomen.style.display = "block";
          }
        }, 5000);
      }
    });

    // rsvp
    var btnRsvp = document.getElementsByClassName("btn-rsvp");
    var rsvpPlaceholder =
      (_document$querySelect = document.querySelector(".rsvp-placeholder")) !==
        null && _document$querySelect !== void 0
        ? _document$querySelect
        : null;
    var checkRSVPForm = setInterval(function () {
      var rsvpForm = document.querySelector(".rsvp-form");
      if (rsvpForm && rsvpPlaceholder) {
        rsvpPlaceholder.innerHTML = "";
        rsvpPlaceholder.appendChild(rsvpForm);
        clearInterval(checkRSVPForm); // Hentikan pengecekan setelah elemen ditemukan
      }
    }, 500);
    for (var i = 0; i < btnRsvp.length; i++) {
      if (rsvpPlaceholder) {
        btnRsvp[i].style.display = "none";
      } else {
        btnRsvp[i].onclick = function () {
          showModal(rsvpModal);
        };
      }
    }

    // resize canvas
    var resizeWorkspace = function resizeWorkspace() {
      var workspace = document.getElementById("workspace-container");
      var canvas = document.querySelector(".canvas");
      var zoom = document.getElementById("panZoom");
      var windowWidth = Number(
        window.screen.width > 430 ? 414 : window.screen.width
      );
      var windowHeight = Number(
        window.innerHeight > 932 ? 736 : window.innerHeight
      );
      var hightRes = (windowHeight / windowWidth) * 9;
      var clientHeight = Number(window.innerHeight) / 736;
      var clientWidth = Number(window.screen.width) / 414;
      var scale = clientHeight < clientWidth ? clientHeight : clientWidth;
      var newHeight =
        (414 / 9) *
        (hightRes < 16 || window.screen.width > 430 ? 16 : hightRes);
      canvas.style.height = "".concat(newHeight, "px");
      satuMomen.style.height = "".concat(newHeight, "px");
      zoom.style.transform = "scale(".concat(scale, ") translate(0px,0px)");
    };
    resizeWorkspace();
    window.addEventListener("resize", resizeWorkspace, false);

    // Detect touch device
    var deviceType = "";
    var isTouchDevice = function isTouchDevice() {
      try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
      } catch (e) {
        deviceType = "mouse";
        return false;
      }
    };
    isTouchDevice();

    // Detect slide
    var slides = document.querySelectorAll(".satumomen_slide");
    var menus = document.querySelectorAll(".satumomen_menu_item");
    var smMenu = document.getElementById("smMenu");
    var menuContainer = document.querySelector(".satumomen_menu_list");
    var menuWidth =
      menus.length < 5
        ? smMenu.offsetWidth / menus.length
        : smMenu.offsetWidth / 5;
    var currentSlide = 0;
    var resetAllSlide = function resetAllSlide() {
      Array.from(slides).forEach(function (slide) {
        slide.style.display = "none";
      });
      Array.from(menus).forEach(function (menu) {
        menu.style.maxWidth = "".concat(menuWidth, "px");
        menu.classList.remove("active");
        menu.onclick = function (e) {
          if (e.cancelable) e.preventDefault();
          currentSlide = Array.from(menus).indexOf(menu);
          jumpSlide(currentSlide);
        };
      });
      slides[currentSlide].style.display = "";
      menus[currentSlide].classList.add("active");
    };
    resetAllSlide();

    // swipe up
    var swipeUp = function swipeUp() {
      resetAllSlide();
      currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
      jumpSlide(currentSlide, false);
      eventUp();
    };
    var swipeDown = function swipeDown() {
      resetAllSlide();
      currentSlide = currentSlide > 0 ? currentSlide - 1 : currentSlide;
      jumpSlide(currentSlide);
      eventUp();
    };
    var jumpSlide = function jumpSlide(index) {
      var pause =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : true;
      resetAllSlide();
      if (pause) {
        pauseInvitation();
      }
      var maxScroll = menuContainer.offsetWidth - menuContainer.scrollWidth;
      slides[index].style.display = "";
      menus[index].classList.add("active");
      var translateX =
        smMenu.offsetWidth / 2 - menuWidth / 2 - menus[index].offsetLeft;
      menuContainer.style.transform = "translateX(".concat(
        translateX > 0 ? 0 : translateX < maxScroll ? maxScroll : translateX,
        "px)"
      );
      currentSlide = index;
    };

    // events
    var events = {
      mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
      },
      touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
      },
    };
    var initialY = 0,
      newY = 0;
    var eventMove = function eventMove(e) {
      var newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      if (initialY - 50 > newY) {
        pauseInvitation();
        swipeUp();
      }
      if (initialY < newY - 50) {
        swipeDown();
        pauseInvitation();
      }
    };
    var eventUp = function eventUp(e) {
      window.removeEventListener(events[deviceType].move, eventMove, false);
    };
    var eventDown = function eventDown(e) {
      if (e.cancelable) e.preventDefault();
      initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      window.addEventListener(events[deviceType].up, eventUp, false);
      window.addEventListener(events[deviceType].move, eventMove, false);
    };

    // autoplay invitation
    var autoPlay;
    var invitationPlaying = false;
    var btnAutoplay = document.getElementById("btnAutoplay");
    var playInvitation = function playInvitation() {
      if (!invitationPlaying) {
        invitationPlaying = true;
        autoPlay = setInterval(function () {
          swipeUp();
        }, 15000);
        btnAutoplay.classList.add("playing");
      }
    };
    var pauseInvitation = function pauseInvitation() {
      if (invitationPlaying) {
        invitationPlaying = false;
        clearInterval(autoPlay);
        btnAutoplay.classList.remove("playing");
      }
    };
    btnAutoplay.addEventListener(
      "click",
      function (e) {
        if (e.cancelable) e.preventDefault();
        if (invitationPlaying) {
          pauseInvitation();
        } else if (!invitationPlaying && !invitationOpened) {
          openInvitation();
        } else {
          playInvitation();
        }
      },
      false
    );
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        // Pause invitation saat pengguna meninggalkan tab
        if (invitationPlaying) {
          pauseInvitation();
        }
      }
    });

    // Menggunakan listeners
    document.addEventListener("showModalEvent", function () {
      window.removeEventListener(events[deviceType].down, eventDown, false);
      pauseInvitation();
    });
    document.addEventListener("closeModalEvent", function () {
      window.addEventListener(events[deviceType].down, eventDown, false);
      playInvitation();
    });
    document.addEventListener("showLightBoxEvent", function () {
      window.removeEventListener(events[deviceType].down, eventDown, false);
      pauseInvitation();
    });
    document.addEventListener("closeLightBoxEvent", function () {
      window.addEventListener(events[deviceType].down, eventDown, false);
      playInvitation();
    });
    document.addEventListener("showGiftEvent", function () {
      pauseInvitation();
    });

    // open invitation
    var invitationOpened = false;
    var openInvitation = function openInvitation(event) {
      invitationOpened = true;
      if (invitationOpened) {
        for (var _i = 0; _i < btnOpenInvitation.length; _i++) {
          btnOpenInvitation[_i].classList.add("d-none");
        }
      }

      // play music
      playMusic(true);
      playInvitation();

      // check fullscreen
      if (
        navigator.userAgent.indexOf("UCBrowser") != -1 ||
        navigator.userAgent.indexOf("MiuiBrowser") != -1 ||
        navigator.userAgent.includes("OppoBrowser") ||
        navigator.userAgent.includes("HeyTapBrowser")
      ) {
        console.log("Browser not support portrait full screen mode");
      } else {
        openFullScreen();
      }
      document.querySelector(".not-open").classList.remove("not-open");

      // start event gesture
      window.addEventListener(events[deviceType].down, eventDown, false);
      swipeUp();
    };

    // buka undangan
    var btnOpenInvitation = document.getElementsByClassName(
      "btn-open-invitation"
    );
    for (var _i2 = 0; _i2 < btnOpenInvitation.length; _i2++) {
      btnOpenInvitation[_i2].addEventListener("click", openInvitation, false);
    }
  })();
  /******/
})();
