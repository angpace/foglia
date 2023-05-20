import { useParallax } from "react-scroll-parallax";
import Foglia from "/Users/ap/Development/foglia/client/src/components/Foglia.png";

function Landing () {
    const parallax = useParallax<HTMLDivElement>({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, 100],
      });

    return (
        <div>
            <div ref={parallax.ref}>
                <h1>Welcome to Foglia</h1>
            </div>
            {/* <img style={{size: "20%"}}src={Foglia} /> */}
        </div>
    )
}

export default Landing;
