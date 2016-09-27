var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

/******************************************
    -	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/

var setREVStartSize = function () {
    try {
        var e = new Object,
            i = jQuery(window).width(),
            t = 9999,
            r = 0,
            n = 0,
            l = 0,
            f = 0,
            s = 0,
            h = 0;
        e.c = jQuery('#rev_slider_1_1');
        e.gridwidth = [1170];
        e.gridheight = [650];

        e.sliderLayout = "auto";
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
                f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
        }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
            var u = (e.c.width(), jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c) jQuery.each(c, function (e, i) {
                    u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({
            height: f
        })

    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
};

setREVStartSize();

var tpj = jQuery;

var revapi1;
tpj(document).ready(function () {
    if (tpj("#rev_slider_1_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1_1");
    } else {
        revapi1 = tpj("#rev_slider_1_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "js/",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: "metis",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 768,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 640,
                    style: "hermes",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 10,
                    tmp: ''
                }
            },
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: 1170,
            gridheight: 650,
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 55],
                type: "mouse"
            },
            shadow: 0,
            spinner: "spinner5",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
}); /*ready*/


var htmlDivCss = unescape("#rev_slider_1_1 .metis.tparrows {  background:rgba(255, 255, 255, 1); padding:10px;  transition:all 0.3s;  -webkit-transition:all 0.3s;  width:60px;  height:60px;  box-sizing:border-box; }  #rev_slider_1_1 .metis.tparrows:hover {   background:rgba(255, 255, 255, 0.75); }  #rev_slider_1_1 .metis.tparrows:before {  color:rgb(0,  0,  0);     transition:all 0.3s;  -webkit-transition:all 0.3s; }  #rev_slider_1_1 .metis.tparrows:hover:before {   transform:scale(1.5);  } .hermes.tp-bullets {}.hermes .tp-bullet {    overflow:hidden;    border-radius:50%;    width:10px;    height:10px;    background-color: rgba(0,  0,  0,  0);    box-shadow: inset 0 0 0 2px rgb(255,  255,  255);    -webkit-transition: background 0.3s ease;    transition: background 0.3s ease;    position:absolute;}.hermes .tp-bullet:hover {  background-color: rgba(111,  196,  0,  1);}.hermes .tp-bullet:after {  content: %27 %27;  position: absolute;  bottom: 0;  height: 0;  left: 0;  width: 100%;  background-color: rgb(255,  255,  255);  box-shadow: 0 0 1px rgb(255,  255,  255);  -webkit-transition: height 0.3s ease;  transition: height 0.3s ease;}.hermes .tp-bullet.selected:after {  height:100%;}");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}
