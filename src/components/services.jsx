import React from "react";

export const Services = (props) => {
  return (
    <section id="donation" class="bg-theme-colored">
      <div class="container pt-40 pb-40">
        <div class="row">
          <div class="row">
            <div class="col-md-7">
              <h3 class="line-bottom">DONATION</h3>
              <p
                class="mt-30 mb-30"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: "system-ui",
                }}
              >
                Instructions: "To donation, simply scan the QR code using your
                smartphone or tablet camera. Make sure you have an internet
                connection and a QR code reader app installed. Happy exploring!"
              </p>
              <button
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: "system-ui",
                }}
                class="btn btn-dark btn-theme-colored btn-lg btn-flat pull-left pl-30 pr-30"
              >
                Join Us
              </button>
            </div>
            <div class="col-md-5">
              <div class="fluid-video-wrapper">
                <img
                  src="images/qrCode.jpg"
                  width="440"
                  height="700"
                  alt="lal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
