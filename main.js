let skip_ad_dom_id = "ytp-skip-ad-button";

setInterval (
    () => {
        let ad_info = document.getElementsByClassName("video-ads")

        if (ad_info.length !== 0 && window.getComputedStyle(ad_info[0]).display !== "none" && window.getComputedStyle(ad_info[0]).display !== "hidden") {
            let video = document.getElementsByTagName("video");

            video[0].currentTime = video[0].duration;
            ad_info.innerHTML = "";

            let skip_ad = document.getElementsByClassName(skip_ad_dom_id)

            if (skip_ad.length !== 0) {
                skip_ad[0].click();
            }
        }

    }, 40
);
