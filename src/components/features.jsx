import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const Features = (props) => {
  const settings = {
    type: "loop",
    rewind: false,
    speed: 1000,
    // perPage: 3,
    perMove: 1,
    gap: 0,
    autoplay: true,
    padding: 0,
    pagination: false,
    arrows: true,
    pagination: true,
    autoWidth: true,
    breakpoints: {
      560: {
        perPage: 1,
      },
    },
  };

  return (
    <section id="home" class="">
      <Splide hasTrack={false} className="" options={settings}>
        <SplideTrack>
          <SplideSlide>
            <img
              src="images/bg/bg6.jpg"
              width={window.innerWidth}
              height={window.innerHeight}
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="images/bg/bg5.jpg"
              width={window.innerWidth}
              height={window.innerHeight}
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="images/bg/bg1.jpg"
              width={window.innerWidth}
              height={window.innerHeight}
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="images/bg/bg5.jpg"
              width={window.innerWidth}
              height={window.innerHeight}
              alt=""
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>
      <div
        class="tp-mask-wrap" style={{fontSize:'56px', fontWeight:600 ,position:'absolute', top:'500', left:'20px'}}
        // style="position: absolute; z-index: 0; overflow: hidden; transform: matrix(1, 0, 0, 1, 0, 0); height: auto; width: auto;"
      >
        <div
          class="tp-caption BigBold-Title tp-resizeme rs-parallaxlevel-0 text-uppercase"
          // style="z-index: 6; white-space: nowrap; visibility: inherit; transition: none 0s ease 0s; line-height: 43px; border-width: 0px; margin: 0px; padding: 7px 0px; letter-spacing: 0px; font-weight: 800; font-size: 56px; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;"
        >
          <span
            class="text-theme-colored"
            style={{fontWidth:800}}
            // style="transition: none 0s ease 0s; line-height: 43px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 800; font-size: 56px;"
          >
            SAVE
          </span>{" "}
         THE COW
        </div>
      </div>
      <div
        class="tp-caption btn btn-default btn-transparent btn-flat btn-lg pl-40 pr-40 rs-parallaxlevel-0 noSwipe rs-hover-ready"
        style={{position:'absolute', top:'600', left:'30px', whiteSpace:'nowrap'}}
        // style="z-index: 8; white-space: nowrap; border-color: rgba(255, 255, 255, 0.25); outline: none; box-shadow: none; box-sizing: border-box; visibility: inherit; transition: none 0s ease 0s; border-radius: 0px; font-style: normal; color: rgb(255, 255, 255); border-width: 1px; border-style: solid; background-color: rgba(0, 0, 0, 0); line-height: 13px; margin: 0px; padding: 7px 29px; letter-spacing: 0px; font-weight: 400; font-size: 10px; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px; cursor: pointer;"
      >
        DONATE NOW
      </div>
    </section>
  );
};
