import React from 'react';
import { Parallax, ParallaxLayer, ParallaxProvider } from 'react-scroll-parallax';
import Gator from "../../images/sparkle.jpg";
import './Home.css';

function Home() {
    return (
        // <ParallaxProvider>
        // <div className='App'>
        //     <Parallax strength={600} bgImage={Gator}>
        //         <div className='content'>
        //             <div className='text-content'>askdfj Parallax</div>
        //         </div>
        //     </Parallax>
        //     <div className='content'></div>
        // </div>
        // </ParallaxProvider>
        <div>
        <div class="parallax"></div>

        <div className='content'>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>

        <div class="parallax2"></div>
        </div>
    )
}


// function Component() {
//     const parallax = useParallax({
//       speed: -10,
//     });
//     return <div ref={parallax.ref} />;
//   }

// const Component = () => (
//     <Parallax translateY={[-20, 20]}>
//       <div className="my-thing" />
//     </Parallax>
//   );

// function Home() {
//     {
//         return (

//           <ParallaxProvider>
//             <p>
//                 helloworld
//             </p>
//           </ParallaxProvider>
//         );
//       }
// }

export default Home
