import React, { useEffect, useState } from "react";

export const Navigation = (props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log("scrollY", scrollY);
  return (
    <div id="menu" class="header">
      <div
        class={`${
          scrollY <= 50
            ? "header-nav navbar-fixed-top header-dark navbar-white navbar-transparent navbar-sticky-animated animated-active"
            : "header-nav navbar-fixed-top header-dark navbar-white navbar-transparent navbar-sticky-animated"
        } `} //header-nav navbar-fixed-top header-dark navbar-white navbar-transparent navbar-sticky-animated animated-active
      >
        <div class="header-nav-wrapper">
          <div class={`container ${scrollY >= 40 ? "" : `pt-10 pb-10`}`}>
            <nav id="menuzord-right" class="menuzord orange">
              <button class="menuzord-brand">
                <img src="images/logo-wide.png" width={'150px'} alt="" />
              </button>
              <div id="side-panel-trigger" class="side-panel-trigger">
                <a href="#causes">
                  <i class="fa fa-bars font-24 text-gray"></i>
                </a>
              </div>
              <ul class="menuzord-menu onepage-nav menuzord-right menuzord-indented scrollable">
                <li class={`${scrollY < 500 ? "active" : ""}`}>
                  <a href="#home">Home</a>{" "}
                </li>
                <li class={`${scrollY >= 500&& scrollY<=1200 ? "active" : ""}`}>
                  <a href="#causes">Causes</a>
                </li>
                <li class={`${scrollY >= 1200&& scrollY<=1500 ? "active" : ""}`}>
                  <a href="#donation">Donation</a>
                </li>
                <li class={`${scrollY >= 1500&& scrollY<=2800 ? "active" : ""}`}>
                  <a href="#volunteers">Volunteers</a>
                </li>
                <li class={`${scrollY >= 2800&& scrollY<=3000 ? "active" : ""}`}>
                  <a href="#blog">News</a>
                </li>
                <li class={`${scrollY >= 3000 ? "active" : ""}`}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
