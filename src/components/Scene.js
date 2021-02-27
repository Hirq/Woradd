import React, { useRef, useEffect } from 'react';
import { ReactComponent as Scene1 } from 'Frame1.svg';
import gsap from 'gsap';

function Scene(){


const wrapper = useRef(null);

useEffect(() => {
  const [elements] = wrapper.current.children;
  
  const image1 = elements.getElementById('image 1');
  const ellipse1 = elements.getElementById('Ellipse 1');
  const ellipse2 = elements.getElementById('Ellipse 2');
  const ellipse3 = elements.getElementById('Ellipse 3');
  
  gsap.set([image1, ellipse1, ellipse2, ellipse3], {autoAlpha: 0});

  const t1 = gsap.timeline({defaults: {ease: 'power3.inOut'}});

  t1.fromTo(image1, {x: '-=300'}, {duration: 1, x: '+=300', autoAlpha: 1})
    .fromTo(ellipse1, {scaleY: 0}, {duration:0.4, autoAlpha: 1, scaleY: 1})
    .fromTo(ellipse2, {scaleY: 0}, {duration:0.5, autoAlpha: 1, scaleY: 1})
    .fromTo(ellipse3, {scaleY: 0}, {duration:0.6, autoAlpha: 1, scaleY: 1});
});

    //https://www.youtube.com/watch?v=vYl_dCNUK7U
    //https://undraw.co/illustrations

return (
    <div ref={wrapper} className="Scene">
        <Scene1 />
   </div>
)

}

export default Scene;