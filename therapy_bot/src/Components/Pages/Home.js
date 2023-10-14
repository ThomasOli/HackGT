import React from 'react';
import { Parallax, ParallaxLayer } from 'react-scroll-parallax';
import Gator from "../../images/gator.png";
import './Home.css';

function Home() {
    return (
        <div className='App'>
            <Parallax strength={600} bgImage={Gator}>
                <div className='content'>
                    <div className='text-content'>Normal Parallax</div>
                </div>
            </Parallax>
            <div className='content'></div>
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
