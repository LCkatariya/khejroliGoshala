import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const Team = (props) => {
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
        perPage: 3,
      },
      1400: {
        perPage: 3,
      },
      1600: {
        perPage: 6,
      },
    },
  };

  return (
    <section id="blog"> 
      <div class="container pt-70">
        <div class="section-title text-center">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <h3 class="text-uppercase mt-0">Recent News</h3>
              <div class="title-icon">
                <i class="flaticon-charity-hand-holding-a-heart"></i>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem<br/> voluptatem obcaecati!</p>
            </div>
          </div>
        </div>
        <div class="row" style={{ display: "flex" }}>
          <div class="col-md-12">
            <Splide hasTrack={false} className="" options={settings}>
              <SplideTrack>
                <SplideSlide>
                <div class="item">
                <article class="post clearfix maxwidth600 mb-sm-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb"> <img src="images/blog/1.jpg" alt="" class="img-responsive img-fullwidth"/> </div>
                    <div class="entry-meta meta-absolute text-center pl-15 pr-15">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <ul>
                          <li><button class="text-white" ><i class="fa fa-thumbs-o-up"></i> 265 <br/> Likes</button></li>
                          <li class="mt-20"><button class="text-white" ><i class="fa fa-comments-o"></i> 72 <br/> comments</button></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20">
                    <h5 class="entry-title mt-0 pt-0"><button>Sponsor a child today</button></h5>
                    <p class="text-left mb-20 mt-15 font-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <button class="btn btn-flat btn-dark btn-theme-colored btn-sm pull-left" >Read more</button>
                    <ul class="list-inline entry-date pull-right font-12 mt-5">
                      <li><button class="text-theme-colored" >Admin |</button></li>
                      <li><span class="text-theme-colored">Nov 13, 2015</span></li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </article>
              </div>
                </SplideSlide>
                <SplideSlide>
                <div class="item">
                <article class="post clearfix maxwidth600 mb-sm-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb"> <img src="images/blog/2.jpg" alt="" class="img-responsive img-fullwidth"/> </div>
                    <div class="entry-meta meta-absolute text-center pl-15 pr-15">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <ul>
                          <li><button class="text-white" ><i class="fa fa-thumbs-o-up"></i> 265 <br/> Likes</button></li>
                          <li class="mt-20"><button class="text-white" ><i class="fa fa-comments-o"></i> 72 <br/> comments</button></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20">
                    <h5 class="entry-title mt-0 pt-0"><button>Sponsor a child today</button></h5>
                    <p class="text-left mb-20 mt-15 font-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <button class="btn btn-flat btn-dark btn-theme-colored btn-sm pull-left" >Read more</button>
                    <ul class="list-inline entry-date pull-right font-12 mt-5">
                      <li><button class="text-theme-colored" >Admin |</button></li>
                      <li><span class="text-theme-colored">Nov 13, 2015</span></li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </article>
              </div>
                </SplideSlide>
                <SplideSlide>
                <div class="item">
                <article class="post clearfix maxwidth600 mb-sm-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb"> <img src="images/blog/3.jpg" alt="" class="img-responsive img-fullwidth"/> </div>
                    <div class="entry-meta meta-absolute text-center pl-15 pr-15">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <ul>
                          <li><button class="text-white" ><i class="fa fa-thumbs-o-up"></i> 265 <br/> Likes</button></li>
                          <li class="mt-20"><button class="text-white" ><i class="fa fa-comments-o"></i> 72 <br/> comments</button></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20">
                    <h5 class="entry-title mt-0 pt-0"><button>Sponsor a child today</button></h5>
                    <p class="text-left mb-20 mt-15 font-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <button class="btn btn-flat btn-dark btn-theme-colored btn-sm pull-left" >Read more</button>
                    <ul class="list-inline entry-date pull-right font-12 mt-5">
                      <li><button class="text-theme-colored" >Admin |</button></li>
                      <li><span class="text-theme-colored">Nov 13, 2015</span></li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </article>
              </div>
                </SplideSlide>
                <SplideSlide>
                <div class="item">
                <article class="post clearfix maxwidth600 mb-sm-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb"> <img src="images/blog/3.jpg" alt="" class="img-responsive img-fullwidth"/> </div>
                    <div class="entry-meta meta-absolute text-center pl-15 pr-15">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <ul>
                          <li><button class="text-white" ><i class="fa fa-thumbs-o-up"></i> 265 <br/> Likes</button></li>
                          <li class="mt-20"><button class="text-white" ><i class="fa fa-comments-o"></i> 72 <br/> comments</button></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20">
                    <h5 class="entry-title mt-0 pt-0"><button>Sponsor a child today</button></h5>
                    <p class="text-left mb-20 mt-15 font-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <button class="btn btn-flat btn-dark btn-theme-colored btn-sm pull-left" >Read more</button>
                    <ul class="list-inline entry-date pull-right font-12 mt-5">
                      <li><button class="text-theme-colored" >Admin |</button></li>
                      <li><span class="text-theme-colored">Nov 13, 2015</span></li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </article>
              </div>
                </SplideSlide>
                <SplideSlide>
                <div class="item">
                <article class="post clearfix maxwidth600 mb-sm-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb"> <img src="images/blog/3.jpg" alt="" class="img-responsive img-fullwidth"/> </div>
                    <div class="entry-meta meta-absolute text-center pl-15 pr-15">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <ul>
                          <li><button class="text-white" ><i class="fa fa-thumbs-o-up"></i> 265 <br/> Likes</button></li>
                          <li class="mt-20"><button class="text-white" ><i class="fa fa-comments-o"></i> 72 <br/> comments</button></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20">
                    <h5 class="entry-title mt-0 pt-0"><button>Sponsor a child today</button></h5>
                    <p class="text-left mb-20 mt-15 font-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <button class="btn btn-flat btn-dark btn-theme-colored btn-sm pull-left" >Read more</button>
                    <ul class="list-inline entry-date pull-right font-12 mt-5">
                      <li><button class="text-theme-colored" >Admin |</button></li>
                      <li><span class="text-theme-colored">Nov 13, 2015</span></li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </article>
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