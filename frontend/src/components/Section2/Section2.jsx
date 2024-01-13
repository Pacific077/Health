import React from "react";
import "./Section2.css";
import Section21 from "../Section21/Section21";
import Section22 from "../Section22/Section22";
import Section23 from "../section23/Section23";
import DescCard from "../Section21/DescCard";
import Desccard2 from "../Cards/Desccard2";
import Section24 from "../section24/Section24";
import Section25 from "../Section25/Section25";
import Testimonials from "../Testimonials/Testimonials";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import DescCardArr from "../Section21/DescCardArr";
import Sec22Arr from "../Section22/Sec22Arr";
const Section2 = () => {
  return (
    <div className="sec2">
      <Section21 />
      <DescCard
        frst={DescCardArr[0].greentext}
        head={DescCardArr[0].head}
        desc={DescCardArr[0].desc}
        btn1={DescCardArr[0].btn1}
        btn2={DescCardArr[0].btn2}
        navigate={DescCardArr[0].navigate}
      />
      <Section22 arr={Sec22Arr[0]}/>
      <Section23 />
      <DescCard
      frst={DescCardArr[1].greentext}
      head={DescCardArr[1].head}
      desc={DescCardArr[1].desc}
      btn1={DescCardArr[1].btn1}
      navigate={DescCardArr[1].navigate} />
      <Section22 arr={Sec22Arr[1]} />
      <Section24 />
      <DescCard
      frst={DescCardArr[2].greentext}
      head={DescCardArr[2].head}
      desc={DescCardArr[2].desc}
      btn1={DescCardArr[2].btn1}
      btn2={DescCardArr[2].btn2}
      navigate={DescCardArr[2].navigate} />
      <Section22 arr={Sec22Arr[2]}/>
      <Desccard2 />
      <Section25 />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Section2;
