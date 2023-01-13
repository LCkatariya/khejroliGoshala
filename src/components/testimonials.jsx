import React from "react";
export const Testimonials = (props) => {
  return (
    <section
      class="divider parallax layer-overlay overlay-deep"
      data-stellar-background-ratio="0.5"
      data-bg-img="images/bg/bg4.jpg"
    >
      <div class="container">
        <div class="section-content">
          <div class="row">
            <div class="col-md-7">
              <h3 class="line-bottom">Became a Volunteer</h3>
              <p class="mt-30 mb-30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, et
                placeat ipsam, officiis fugiat doloremque ducimus tempore
                aliquid nihil soluta, quia similique veritatis! Quidem,
                repellendus exit placeat ipsam, officiis fugiat doloremque
                ducimus tempore aliquid nihil soluta, quia similique veritatis.
              </p>
              <button class="btn btn-dark btn-theme-colored btn-lg btn-flat pull-left pl-30 pr-30">
                Join Us
              </button>
            </div>
            <div class="col-md-5">
              <div class="fluid-video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  title="lal"
                  src="https://www.youtube.com/embed/JJlqhqRt5Ac?mute=1&autoplay=1&controls=1&allowfullscreen=1"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
