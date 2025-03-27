(function(global, $) {
    //es5 strict mode
    "use strict";

    /* Script on ready
    ---------------------------------*/
    $(document).ready(function() {
        changeHeaderClass();
        nav();
        mobileMenu();
        sticky_menu();
        stickyFooter();
        hoverBars();
        sliders();
        if ($("body").hasClass("list-landing")) {
            news();
            lineSlideCats();
        }
        if ($("body").hasClass("issues")) {
            issues();
        }
        truthFeed();
        accordions();
        // if ($("body").hasClass("has-popup")) {
        if ($("body").hasClass("has-popup") && $("body").hasClass("home")) {
            popup();
        }

        if ($("body").hasClass("events") == true) {
            get_events();
        }
    });

    /* Script on resize
    ---------------------------------*/
    $(window).resize(function() {
        changeHeaderClass();
    });

    $(document).mouseup(function(e) {
        var popUpContainer = $(".popup").find(".content");
        if (!popUpContainer.is(e.target) &&
            popUpContainer.has(e.target).length === 0
        ) {
            $(".popup").attr("aria-hidden", "true");
            $(".popup").find("iframe").attr("src", "");
        }
    });

    /* Script functions
    ----------------------------------*/

    // change header class
    function changeHeaderClass() {
        if ($("#mobile-menu-trigger").css("display") == "block") {
            $("body").removeClass("is-header-desktop");
            $("body").addClass("is-header-mobile");
        } else {
            $("body").addClass("is-header-desktop");
            $("body").removeClass("is-header-mobile");
        }
    }

    // mobile menu
    function mobileMenu() {
        var level0 = $("#mobile-menu-trigger");

        level0.click(function(e) {
            if ($(this).attr("aria-expanded") == "false") {
                $("html,body").animate({
                    scrollTop: 0
                }, 0);
                $(this).attr("aria-expanded", "true");
                $(this).attr("aria-label", "Close Menu");
                $(this).stop().addClass("is-open");
                $("#header").stop().addClass("is-mobile-open");
            } else {
                $(this).attr("aria-expanded", "false");
                $(this).attr("aria-label", "Open Menu");
                $(this).stop().removeClass("is-open");
                $("#header").stop().removeClass("is-mobile-open");
            }
        });
    }

    // nav
    function nav() {
        if ($(window).width() > 768) {
            $(".nav")
                .on("mouseenter focus", ".level-1-trigger", function(e) {
                    var el = $(this);
                    el.toggleClass("has-focus");
                    el.parents(".has-dropdown-menu").attr("aria-expanded", "true");
                    el.siblings(".dropdown-menu").attr("aria-hidden", "false");
                })
                .on("mouseleave blur", ".level-1-trigger", function(e) {
                    var el = $(this);
                    el.toggleClass("has-focus");
                    setTimeout(function() {
                        if (
                            el.siblings(".dropdown-menu").attr("data-has-focus") !== "true"
                        ) {
                            el.parents(".has-dropdown-menu").attr("aria-expanded", "false");
                            el.siblings(".dropdown-menu").attr("aria-hidden", "true");
                        }
                    }, 100);
                })
                .on("mouseenter focusin", ".dropdown-menu", function(e) {
                    var el = $(this);
                    el.attr("data-has-focus", "true");
                    el.attr("aria-hidden", "false");
                })
                .on("mouseleave focusout", ".dropdown-menu", function(e) {
                    var el = $(this);
                    setTimeout(function() {
                        if (el.find(":focus").length === 0) {
                            el.attr("data-has-focus", "false");
                            el.attr("aria-hidden", "true");
                            if (el.siblings(".level-1-trigger.has-focus").length === 0) {
                                el.parents(".has-dropdown-menu").attr("aria-expanded", "false");
                                el.siblings(".dropdown-menu").attr("aria-hidden", "true");
                            }
                        }
                    }, 100);
                });
        }
    }

    function sticky_menu() {
        var stickyHeader = $("#header");
        var body = $("body");
        let hOffset = "";
        if ($(window).width() > 610) {
            hOffset = "-35";
        } else {
            hOffset = "0";
        }
        if (stickyHeader.length) {
            stickyHeader.wrap('<div class="menu-sticky-node-wrapper">');
            var wrapper = stickyHeader.parent();
            wrapper.waypoint(
                function(direction) {
                    if (direction == "down") {
                        body.addClass("header-fixed");
                        stickyHeader.addClass("is-fixed");
                    } else {
                        body.removeClass("header-fixed");
                        stickyHeader.removeClass("is-fixed");
                    }
                }, {
                    offset: hOffset,
                }
            );
        }
    }

    // footer
    function stickyFooter() {
        var ww = $(window).width();
        var Stickyfooter = $("footer").outerHeight();
        $("#wrapper").css("margin-bottom", -Stickyfooter);
        $("#wrapper").css("padding-bottom", Stickyfooter);
    }

    function hoverBars() {
        var parent = $(".hover-bars");
        var bar = $(".hover-bars .bars .bar");
        var panel = $(".hover-bars .info .panel");
        var mobilePanel = $(".hover-bars .bars .mobile-panel");
        if ($(window).width() > 677) {
            bar.on("click", function() {
                var relPanelId = $(this).attr("data-panel");
                var relPanelEl = $("#" + relPanelId);
                if ($(this).attr("aria-expanded") === "false") {
                    parent.addClass("panel-open");
                    bar.not(this).attr("aria-expanded", "false");
                    $(this).attr("aria-expanded", "true");
                    panel.not(relPanelEl).attr("aria-hidden", "true");
                    relPanelEl.attr("aria-hidden", "false");
                } else {
                    parent.removeClass("panel-open");
                    $(this).attr("aria-expanded", "false");
                    relPanelEl.attr("aria-hidden", "true");
                }
            });
        } else {
            bar.on("click", function() {
                var relPanelId = $(this).attr("data-panel");
                var relPanelEl = $("#mobile-" + relPanelId);
                if ($(this).attr("aria-expanded") === "false") {
                    bar.not(this).attr("aria-expanded", "false");
                    $(this).attr("aria-expanded", "true");
                    mobilePanel.not(relPanelEl).attr("aria-hidden", "true");
                    relPanelEl.attr("aria-hidden", "false");
                } else {
                    $(this).attr("aria-expanded", "false");
                    relPanelEl.attr("aria-hidden", "true");
                }
            });
        }
    }

    // sliders
    function sliders() {
        var videoSlider = new Swiper(".video-slider", {
            spaceBetween: 0,
            watchSlidesVisibility: true,
            slideToClickedSlide: true,
            simulateTouch: false,
            navigation: {
                nextEl: ".vid-button-next",
                prevEl: ".vid-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    loop: false,
                    centeredSlides: false,
                    autoHeight: true,
                },
                677: {
                    slidesPerView: 3,
                    loop: true,
                    centeredSlides: true,
                },
            },
        });
    }

    // line slide cats
    function lineSlideCats() {
        function onTabClick(evt) {
            setLineStyle(evt.target);
            $(".line-slide .categories .item").not(this).removeClass("active");
            $(this).addClass("active");
        }

        function setLineStyle(tab) {
            let line = document.querySelector(".line-slide .line");
            line.style.left = tab.offsetLeft + "px";
            line.style.width = tab.clientWidth + "px";
        }
        const tabs = document.querySelectorAll(".line-slide .categories .item");
        tabs.forEach((tab, index) => {
            tab.onclick = onTabClick;
            if (index == 0) setLineStyle(tab);
        });
    }

    // news list
    function news() {
        var options = {
            valueNames: ["classes", "news-title", "news-summary"],
            page: 20,
            pagination: true,
            pagination: {
                prev: true,
                next: true
            },
        };

        var newsList = new List("news", options);

        var newsPagLink = $(".news-pagination .page");

        $(
            "#news-page-first-item-number, #news-page-last-item-number, #news-record-count-total"
        ).text("0");

        updatenewsRecordTracker();

        $(document).on("click", newsPagLink, function() {
            updatenewsRecordTracker();
            hideShowFirstLast();
        });

        $(".news-pagination-inner-container").prepend(
            '<button class="page firstBtn" id="news-page-first">Go To First Page</button>'
        );
        $(".news-pagination-inner-container").append(
            '<button class="page lastBtn" id="news-page-last">Go To Last Page</button>'
        );

        newsList.on("updated", updatenewsRecordTracker);
        newsList.on("updated", createFirstLast);
        newsList.on("updated", hideShowFirstLast);
        newsList.on("updated", showHidePag);

        newsList.on("searchComplete", updatenewsRecordTracker);
        newsList.on("searchComplete", createFirstLast);
        newsList.on("searchComplete", hideShowFirstLast);
        newsList.on("searchComplete", showHidePag);

        newsList.on("filterComplete", updatenewsRecordTracker);
        newsList.on("filterComplete", createFirstLast);
        newsList.on("filterComplete", hideShowFirstLast);
        newsList.on("filterComplete", showHidePag);

        newsList.on("sortComplete", updatenewsRecordTracker);
        newsList.on("sortComplete", createFirstLast);
        newsList.on("sortComplete", hideShowFirstLast);
        newsList.on("sortComplete", showHidePag);

        function createFirstLast() {
            var total = newsList.matchingItems.length;
            $("#news-page-first").on("click", function() {
                newsList.show(1, 20);
            });
            $("#news-page-last").on("click", function() {
                var page = total % 20 || 20;
                var start = total - page + 1;
                newsList.show(start, 20);
            });
        }

        createFirstLast();
        hideShowFirstLast();

        function updatenewsRecordTracker() {
            var pageRecordCount = 20;
            var pageNumber = $("#news .pagination li.active .page").text();
            var missingPageItems = pageRecordCount - newsList.visibleItems.length;
            var firstPageItemNumber =
                pageRecordCount * pageNumber - (pageRecordCount - 1);
            var lastPageItemNumber = pageRecordCount * pageNumber - missingPageItems;

            if (
                newsList.visibleItems.length === 0 ||
                newsList.matchingItems.length === 0
            ) {
                $("#news-pagination-record").hide();
                $("#news-pagination-record-msg").show();
                $("#news-pagination-record-msg").text("No results found.");
                $(
                    "#news-page-first-item-number, #news-page-last-item-number, #news-record-count-total"
                ).text("0");
            } else {
                $("#news-pagination-record").show();
                $("#news-pagination-record-msg").hide();
                // Updates number of first record on current page
                $("#news-page-first-item-number").text(firstPageItemNumber);
                // Updates number of last record on current page
                $("#news-page-last-item-number").text(lastPageItemNumber);
                // Updates total count
                $("#news-record-count-total").text(newsList.matchingItems.length);
            }
        }

        function hideShowFirstLast() {
            if (
                newsList.visibleItems.length === 0 ||
                newsList.matchingItems.length === 0
            ) {
                $("#news-page-first").hide();
                $("#news-page-last").hide();
            } else {
                if ($("#news .pagination li:first").hasClass("active")) {
                    $("#news-page-first").hide();
                } else {
                    $("#news-page-first").show();
                }
                if ($("#news .pagination li:last").hasClass("active")) {
                    $("#news-page-last").hide();
                } else {
                    $("#news-page-last").show();
                }
            }
        }

        $(".sort-btn").on("click", function() {
            var $text = $(this).text();
            if ($(this).hasClass("active")) {
                $(".sort-btn-all").addClass("active");
                $(".sort-btn").not(this).removeClass("active");
                $(this).removeClass("active");
                newsList.filter();
            } else {
                $(".sort-btn-all").removeClass("active");
                $(".sort-btn").not(this).removeClass("active");
                $(this).addClass("active");
                newsList.filter(function(item) {
                    var toBeSplit = item.values().classes;
                    var tryThis = toBeSplit.split(",");
                    for (var i = 0, j = tryThis.length; i < j; i++) {
                        if (tryThis[i] == $text) {
                            return true;
                        }
                    }
                    if ($text == "none") {
                        return false;
                    } else {
                        return false;
                    }
                });
                return false;
            }
        });

        $(".sort-btn-all").on("click", function() {
            $(".sort-btn").removeClass("active");
            $(this).addClass("active");
            newsList.filter();
        });

        $("#expand-search-news").click(function() {
            if ($(this).attr("aria-expanded") == "false") {
                $(this).attr("aria-expanded", "true");
                $(this).siblings("form").attr("data-hidden", "false");
            } else {
                $(this).attr("aria-expanded", "false");
                $(this).siblings("form").attr("data-hidden", "true");
            }
        });

        $("#expand-search-news")
            .siblings("form")
            .submit(function(e) {
                e.preventDefault();
            });

        function showHidePag() {
            if ($(".news-pagination li").length <= 1) {
                $(".news-pagination").hide();
            } else {
                $(".news-pagination").show();
            }
        }

        if ($("body").hasClass("news")) {
            // set default filter on load to Recent News category
            $('button[data-sort="news"]').click();
        }

        if ($("body").hasClass("videos")) {
            // set default filter on load to Agenda47 Video category
            $('button[data-sort="agenda47"]').click();
        }
    }

    // truth feed url truncate
    function truthFeed() {
        var truthFeedPost = $(".truth-feed").find(".post");
        truthFeedPost.each(function() {
            var linked = $(this).find(".linked");
            if (linked.length) {
                var url = linked.find(".site").text().toLowerCase();
                var matches = url.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
                if (matches[1].indexOf("www.") >= 0) {
                    var wwwRemoved = matches[1].replace(/^www\./, "");
                    $(this).find(".site").text(wwwRemoved);
                } else {
                    $(this).find(".site").text(matches[1]);
                }
            }
        });
    }

    // accordions
    function accordions() {
        var bar = $(".accordion .section .bar");
        var panel = $(".accordion .section .panel");
        bar.on("click", function() {
            var relPanelId = $(this).attr("data-panel");
            var relPanelEl = $("#" + relPanelId);
            $(this).children(".rms").fadeToggle();
            if ($(this).attr("aria-expanded") === "false") {
                // bar.not(this).attr('aria-expanded','false');
                $(this).attr("aria-expanded", "true");
                // panel.not(relPanelEl).attr('aria-hidden','true');
                relPanelEl.attr("aria-hidden", "false");
            } else {
                $(this).attr("aria-expanded", "false");
                relPanelEl.attr("aria-hidden", "true");
            }
        });
    }

    // issues auto scroll
    function issues() {
        var url = window.location.pathname.split("/");
        var segment2 = url[2];
        if (segment2 != "") {
            var relPanel = $("#" + segment2);
            var relParent = relPanel.parents(".section");
            if (relParent.length > 0) {
                relParent.animatescroll({
                    scrollSpeed: 500,
                    padding: 70
                });
            }
        }
    }

    // popup
    function popup() {
        // Check if the body has the class 'home'

        var key = $(".popup").find(".key").text();

        $(".close-popup").click(function() {
            $(this).parents(".popup").attr("aria-hidden", "true");
            $(".popup").find("iframe").attr("src", "");
        });
        if (localStorage.getItem("popup") === null) {
            // user has never seen a popup before, show it
            $(".popup").attr("aria-hidden", "false");
            localStorage.setItem("popup", key);
        } else {
            if (localStorage.getItem("popup") == key) {
                // do nothing, key is the same so user already saw this popup
                $(".popup").attr("aria-hidden", "false");
            } else {
                // user hasn't seen popup with the current key, show popup and set new key
                localStorage.setItem("popup", key);
                $(".popup").attr("aria-hidden", "false");
            }
        }
    }

    async function get_events() {
        var url = "https://djt.campaignnucleus.com/feeds/events";
        let response = await fetch(url);
        var event_feed = await response.json();

        var url2 = "https://saveamerica.campaignnucleus.com/feeds/events";
        let response2 = await fetch(url2);
        var event_feed2 = await response2.json();

        var event_feed_data = event_feed.data.concat(event_feed2.data);

        var event_list_node =
            document.getElementById("nucleus-event-feed").children[0];
        var no_events = $("#no-events");
        if (event_feed_data.length == 0) {
            no_events.show();
        } else {
            for (var i = 0; i < event_feed_data.length; i++) {
                var tmpDiv = document.createElement("div");
                var eventDate = event_feed_data[i].starts_at;
                var eventTz = event_feed_data[i].timezone;
                if (eventTz == "US/Eastern") {
                    var eventMoment = moment.tz(eventDate, "America/New_York");
                } else if (eventTz == "US/Central") {
                    var eventMoment = moment.tz(eventDate, "America/Chicago");
                } else if (eventTz == "US/Mountain") {
                    var eventMoment = moment.tz(eventDate, "America/Denver");
                } else if (eventTz == "US/Pacific") {
                    var eventMoment = moment.tz(eventDate, "America/Los_Angeles");
                } else {
                    var eventMoment = moment.tz(eventDate, eventTz);
                }
                var eventDay = eventMoment.format("ddd, MMMM DD, YYYY");
                var eventTime = eventMoment.format("hh:mm a");
                var city = event_feed_data[i].location_city;
                var state = event_feed_data[i].location_state;

                tmpDiv.classList.add("nef-list-item");
                tmpDiv.classList.add("list-item");
                tmpDiv.classList.add("item");

                // create event html elems
                var eventDiv = document.createElement("div");
                var eventA = document.createElement("a");
                var mobDiv = document.createElement("div");
                var mobDivContain = document.createElement("div");
                var mobDivLink = document.createElement("span");
                var mobDivLinkTitle = document.createElement("span");
                var title = document.createElement("div");
                var titleHead = document.createElement("h2");
                var titleDesc = document.createElement("p");
                var tags = document.createElement("div");
                var mobArwSVG = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                );
                var mobArwSVGPath = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );
                var infoDiv = document.createElement("div");
                var infoDivCenter = document.createElement("div");
                var infoDivP = document.createElement("p");
                var infoSpan = document.createElement("span");

                // assign classes to created html elems
                eventDiv.className = "nef-list-item list-item item";
                eventA.className = "nef-event";
                mobDiv.className = "event-mobile-box";
                mobDivContain.className = "event-mobile-container";
                mobDivLink.className = "mobile-link";
                mobDivLinkTitle.className = "visually-hidden";
                title.className = "title";
                tags.className = "tags";
                infoDiv.className = "info";
                infoSpan.className = "btn";

                // create attributes for svg elems
                mobArwSVG.setAttributeNS(null, "width", "15px");
                mobArwSVG.setAttributeNS(null, "height", "24px");
                mobArwSVG.setAttributeNS(null, "viewBox", "0 0 15 24");
                mobArwSVGPath.setAttributeNS(
                    null,
                    "d",
                    "M0,3l3.1-3L15,12L3.1,24L0,21l9-9L0,3z"
                );

                // add content into elems
                infoDivP.innerHTML =
                    eventDay +
                    "<br>" +
                    "<span class='mobile-spacer'>&nbsp;|&nbsp;</span>" +
                    eventTime +
                    " (" +
                    eventTz +
                    ")";
                infoSpan.innerHTML = "Get Tickets";
                titleHead.innerHTML = event_feed_data[i].label;
                mobDivLinkTitle.innerHTML = "Go to " + event_feed_data[i].label;
                eventA.setAttribute("href", event_feed_data[i].url_public);

                // append elems to other elems to build structure
                title.appendChild(titleHead);
                infoDiv.appendChild(infoDivCenter);
                infoDivCenter.appendChild(infoDivP);
                infoDivCenter.appendChild(infoSpan);
                mobArwSVG.appendChild(mobArwSVGPath);
                mobDivLink.appendChild(mobArwSVG);
                mobDivLink.appendChild(mobDivLinkTitle);
                mobDivContain.appendChild(title);
                mobDivContain.appendChild(tags);
                mobDiv.appendChild(mobDivContain);
                mobDiv.appendChild(mobDivLink);
                eventA.appendChild(mobDiv);
                eventA.appendChild(infoDiv);
                eventDiv.appendChild(eventA);

                // check if event has description
                if (event_feed_data[i].description !== null) {
                    titleDesc.innerHTML = event_feed_data[i].description;
                    title.appendChild(titleDesc);
                }

                // check if featured
                if (event_feed_data[i].featured === true) {
                    var featTag = document.createElement("span");
                    var featTagSVG = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg"
                    );
                    var featTagSVGPoly = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "polygon"
                    );
                    featTag.className = "tag featured";
                    featTagSVG.setAttributeNS(null, "width", "100%");
                    featTagSVG.setAttributeNS(null, "height", "8px");
                    featTagSVG.setAttributeNS(null, "viewBox", "0 0 20 10");
                    featTagSVG.setAttributeNS(null, "preserveAspectRatio", "none");
                    featTagSVGPoly.setAttributeNS(null, "points", "10,10 20,0 0,0");
                    featTag.innerHTML = "Featured";
                    featTagSVG.appendChild(featTagSVGPoly);
                    featTag.appendChild(featTagSVG);
                    eventA.classList.add("has-tags", "featured");
                    tags.appendChild(featTag);
                }

                // check if city
                if (city != null) {
                    var cityTag = document.createElement("span");
                    var cityTagSVG = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg"
                    );
                    var cityTagSVGPoly = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "polygon"
                    );
                    cityTag.className = "tag city";
                    cityTagSVG.setAttributeNS(null, "width", "100%");
                    cityTagSVG.setAttributeNS(null, "height", "8px");
                    cityTagSVG.setAttributeNS(null, "viewBox", "0 0 20 10");
                    cityTagSVG.setAttributeNS(null, "preserveAspectRatio", "none");
                    cityTagSVGPoly.setAttributeNS(null, "points", "10,10 20,0 0,0");
                    cityTag.innerHTML = city + ", " + state;
                    cityTagSVG.appendChild(cityTagSVGPoly);
                    cityTag.appendChild(cityTagSVG);
                    eventA.classList.add("has-tags");
                    tags.appendChild(cityTag);
                }

                event_list_node.append(eventDiv);
            }
        }
    }
})(window, jQuery);

document.addEventListener("DOMContentLoaded", function() {
    let timeoutId;

    function startSequence() {
        const messageContainer = document.querySelector(".chatter-message");
        if (!messageContainer) return;

        clearTimeout(timeoutId);

        [...messageContainer.children].forEach((el) => (el.style.display = "none"));

        let currentIndex = 0;

        function showNextElement() {
            if (currentIndex >= messageContainer.children.length) return;

            const currentElement = messageContainer.children[currentIndex];
            currentElement.style.display = "block";

            let delay = currentElement.classList.contains("loader") ? 1800 : 0;

            timeoutId = setTimeout(() => {
                if (currentElement.classList.contains("loader")) {
                    currentElement.style.display = "none";
                }

                currentIndex++;
                showNextElement();
            }, delay);
        }

        showNextElement();
    }

    const chatterElement = document.querySelector(".chatter");
    if (chatterElement) {
        chatterElement.addEventListener("click", function() {
            const chatterBox = document.querySelector(".chatter-box");
            if (chatterBox) {
                chatterBox.classList.toggle("active");
                chatterElement.classList.add("cushide");
                if (chatterBox.classList.contains("active")) {
                    startSequence();
                }
            }
        });
    }

    const minimizeIcon = document.querySelector(".chatter-icons .minimize");
    if (minimizeIcon) {
        minimizeIcon.addEventListener("click", function() {
            const chatter = document.querySelector(".chatter");
            if (chatter) {
                chatter.classList.remove("cushide");
            }
            const chatterBox = document.querySelector(".chatter-box");
            if (chatterBox) {
                chatterBox.classList.remove("active");
                clearTimeout(timeoutId);
            }
        });
    }

    const closeIcon = document.querySelector(".chatter-icons .close");
    if (closeIcon) {
        closeIcon.addEventListener("click", function() {
            const chatter = document.querySelector(".chatter");
            if (chatter) {
                chatter.style.display = "none";
            }
            const chatterBox = document.querySelector(".chatter-box");
            if (chatterBox) {
                chatterBox.classList.remove("active");
                clearTimeout(timeoutId);
            }
        });
    }
});

window.onload = function() {
    const label = document.querySelector('label[for="fields[26]-3"]');

    if (label) {
        const input = document.getElementById(label.getAttribute("for"));
        if (input) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("informer");
            newDiv.innerHTML = `
        <img src="/assets/images/icons/information.png">
        <p>Trump Captains will be responsible for turning out targeted voters from a list provided by to them. They are vital to victory in November.</p>
      `;
            label.insertAdjacentElement("afterend", newDiv);
        }
    }
};