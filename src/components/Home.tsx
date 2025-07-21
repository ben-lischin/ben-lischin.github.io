import { useEffect, useRef } from "react";
import SplitType from 'split-type';
import { gsap } from "gsap";

const Home = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        if (nameRef.current) {
            const split = new SplitType(nameRef.current, {
                types: ["words", "chars"]
            });

            gsap.from(split.chars, {
                opacity: 0,
                y: 30,
                stagger: 0.075,
                duration: 0.35,
                ease: "power1.out",
            });
        }
    }, []);
    
    // ·
    return (
        <>
            <section id="home">
                <div className="home">
                    <h1 ref={nameRef}>Ben Lischin</h1>
                    <hr />
                    <p className="description">Software Engineer | Student</p>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/ben-lischin/" target="_blank">
                            <img src="/res/linkedin.png" alt="Linkedin" />
                        </a>
                        <a href="https://github.com/ben-lischin" target="_blank">
                            <img src="/res/github.png" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </section>
            {/* <div className="current">
                <p className="currentText">[current]</p>
                <div>
                    <p>Software Engineer at Klaviyo, pursuing an online M.S. in Computer Science at Georgia Tech</p>
                </div>
            </div> */}
        </>
    );
}

export default Home;