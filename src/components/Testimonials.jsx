import React from "react";
import Client from "./Client";

export default function Testimonials() {
  return (
    <div className="text-center">
      <h1 className="uppercase tracking-[4px] py-20">Client Testimonials</h1>
      <Client 
        image="\images\image-emily.jpg"
        text=" We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit."
        who="Emily R."
        position="Marketing Director" />
      <Client 
        image="\images\image-thomas.jpg"
        text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
        who="Thomas S."
        position="Chief Operating Officer" />
      <Client 
        image="\images\image-jennie.jpg"
        text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
        who="Jennie F."
        position="Business Owner" />
    </div>
  );
}
