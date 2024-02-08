// YourComponent.jsx

import React, { useEffect } from "react";
import { sticky, theme } from "@/app/theme";
// import { css } from "@emotion/react";
import { Box, styled } from "@mui/material";

export default function StickyTabs() {
  useEffect(() => {
    window.onscroll = function () {
      tabScroll();
    };

    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;

    function tabScroll() {
      if (window.scrollY > sticky) {
        header.classList.add({sticky});
      } else {
        header.classList.remove(css(theme.sticky));
      }
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <Box className="top-container">
        <h1>Scroll Down</h1>
        <p>Scroll down to see the sticky effect.</p>
      </Box>

      <Box className="header" id="myHeader">
        <h2>My Header</h2>
      </Box>

      <Box className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
        quibusdam soluta modi, dolorum illo quod pariatur quas suscipit aut
        sunt? Asperiores temporibus laboriosam beatae totam quibusdam, nam quasi
        a? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        doloremque commodi architecto blanditiis, optio dicta odio impedit
        deleniti. Voluptatum quo voluptatem laboriosam consequatur repellendus
        atque ea nesciunt blanditiis fugiat quis. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Numquam quibusdam soluta modi, dolorum
        illo quod pariatur quas suscipit aut sunt? Asperiores temporibus
        laboriosam beatae totam quibusdam, nam quasi a? Numquam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sed doloremque commodi
        architecto blanditiis, optio dicta odio impedit deleniti. Voluptatum quo
        voluptatem laboriosam consequatur repellendus atque ea nesciunt
        blanditiis fugiat quis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Numquam quibusdam soluta modi, dolorum illo quod
        pariatur quas suscipit aut sunt? Asperiores temporibus laboriosam beatae
        totam quibusdam, nam quasi a? Numquam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed doloremque commodi architecto
        blanditiis, optio dicta odio impedit deleniti. Voluptatum quo voluptatem
        laboriosam consequatur repellendus atque ea nesciunt blanditiis fugiat
        quis.
      </Box>
    </>
  );
}
