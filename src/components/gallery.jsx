import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const Gallery = (props) => {
  const settings = {
    type: "loop",
    rewind: false,
    speed: 1000,
    perPage: 3,
    perMove: 1,
    gap: 7,
    autoplay: true,
    padding: 0,
    pagination: false,
    arrows: false,
    breakpoints: {
      560: {
        perPage: 1,
      },
      767: {
        perPage: 2,
      },
      991: {
        perPage: 3,
      },
      1200: {
        perPage: 4,
      },
      1400: {
        perPage: 4,
      },
      1600: {
        perPage: 6,
      },
    },
  };

  return (
    <section id="volunteers">
      <div class="container">
        <div class="section-title text-center">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <h3 class="text-uppercase mt-0">Our Volunteers</h3>
              <div class="title-icon">
                <i class="flaticon-charity-hand-holding-a-heart"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem
                <br /> voluptatem obcaecati!
              </p>
            </div>
          </div>
        </div>
        <div className="section-content" style={{ display: "flex" }}>
          <div class="row mtli-row-clearfix">
            <Splide hasTrack={false} className="" options={settings}>
              <SplideTrack>
                <SplideSlide>
                  <div class="item">
                    <div class="volunteer maxwidth400">
                      <div class="thumb">
                        <img
                          alt=""
                          src="images/team/team1.jpg"
                          class="img-fullwidth"
                        />
                      </div>
                      <div class="overlay">
                        <div class="content text-center">
                          <h4 class="author mb-0">
                            <button class="text-white">Alex Jacobson</button>
                          </h4>
                          <h6 class="title text-black font-14 mt-5 mb-15">
                            Joined: May, 15
                          </h6>
                          <ul class="styled-icons icon-gray icon-sm mt-10">
                            <li>
                              <button>
                                <i class="fa fa-facebook"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-twitter"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-google-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div class="item">
                    <div class="volunteer maxwidth400">
                      <div class="thumb">
                        <img
                          alt=""
                          src="images/team/team2.jpg"
                          class="img-fullwidth"
                        />
                      </div>
                      <div class="overlay">
                        <div class="content text-center">
                          <h4 class="author mb-0">
                            <button class="text-white">Alex Jacobson</button>
                          </h4>
                          <h6 class="title text-black font-14 mt-5 mb-15">
                            Joined: May, 15
                          </h6>
                          <ul class="styled-icons icon-gray icon-sm mt-10">
                            <li>
                              <button>
                                <i class="fa fa-facebook"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-twitter"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-google-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div class="item">
                    <div class="volunteer maxwidth400">
                      <div class="thumb">
                        <img
                          alt=""
                          src="images/team/team3.jpg"
                          class="img-fullwidth"
                        />
                      </div>
                      <div class="overlay">
                        <div class="content text-center">
                          <h4 class="author mb-0">
                            <button class="text-white">Alex Jacobson</button>
                          </h4>
                          <h6 class="title text-black font-14 mt-5 mb-15">
                            Joined: May, 15
                          </h6>
                          <ul class="styled-icons icon-gray icon-sm mt-10">
                            <li>
                              <button>
                                <i class="fa fa-facebook"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-twitter"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-google-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div class="item">
                    <div class="volunteer maxwidth400">
                      <div class="thumb">
                        <img
                          alt=""
                          src="images/team/team4.jpg"
                          class="img-fullwidth"
                        />
                      </div>
                      <div class="overlay">
                        <div class="content text-center">
                          <h4 class="author mb-0">
                            <button class="text-white">Alex Jacobson</button>
                          </h4>
                          <h6 class="title text-black font-14 mt-5 mb-15">
                            Joined: May, 15
                          </h6>
                          <ul class="styled-icons icon-gray icon-sm mt-10">
                            <li>
                              <button>
                                <i class="fa fa-facebook"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-twitter"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-google-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div class="item">
                    <div class="volunteer maxwidth400">
                      <div class="thumb">
                        <img
                          alt=""
                          src="images/team/team1.jpg"
                          class="img-fullwidth"
                        />
                      </div>
                      <div class="overlay">
                        <div class="content text-center">
                          <h4 class="author mb-0">
                            <button class="text-white">Alex Jacobson</button>
                          </h4>
                          <h6 class="title text-black font-14 mt-5 mb-15">
                            Joined: May, 15
                          </h6>
                          <ul class="styled-icons icon-gray icon-sm mt-10">
                            <li>
                              <button>
                                <i class="fa fa-facebook"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-twitter"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa fa-google-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};
