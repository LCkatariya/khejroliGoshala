import React from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
const arr = ['lalchand', 'suresh', 'saini', 'lucky', 'lalchand', 'suresh', 'saini', 'lucky', 'lalchand', 'suresh', 'saini', 'lucky'
, 'lalchand', 'suresh', 'saini', 'lucky']
export const Review = () => (
  <div style={{ height: "500px" }}>
  <Marquee velocity={12} minScale={0.7} resetAfterTries={200} scatterRandomly>
    {arr.map((item,index) => (
      <Motion
        key={`child-${index}`}
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "yellow",
            textAlign: "center",
            lineHeight: "50px",
          }}
        >
          {item}
        </div>
      </Motion>
    ))}
  </Marquee>
</div>
);










// import React from 'react'

// export const Logo = () => {
//   return (
//     <section class="divider parallax layer-overlay overlay-deep" data-stellar-background-ratio="0.5" data-bg-img="images/bg/bg4.jpg">
//     <div class="container pt-30 pb-30">
//       <div class="row">
//         <div class="col-md-12">
//           <div class="clients-logo carousel">
//             <div class="item"> <a href="#"><img src="images/clients/1.png" alt="" /></a> </div>
//             <div class="item"> <a href="#"><img src="images/clients/2.png" alt="" /></a> </div>
//             <div class="item"> <a href="#"><img src="images/clients/3.png" alt="" /></a> </div>
//             <div class="item"> <a href="#"><img src="images/clients/4.png" alt="" /></a> </div>
//             <div class="item"> <a href="#"><img src="images/clients/5.png" alt="" /></a> </div>
//             <div class="item"> <a href="#"><img src="images/clients/6.png" alt="" /></a> </div>
//             <div class="item"> <a href="#"><img src="images/clients/1.png" alt="" /></a> </div>
//             <div class="item"> <a href="#"><img src="images/clients/2.png" alt="" /></a> </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }
