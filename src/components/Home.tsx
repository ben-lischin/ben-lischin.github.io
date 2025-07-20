import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="home">
                    <h1>Ben Lischin</h1>
                    <hr />
                    <p className="description">
                        <TypeAnimation
                            cursor={false}
                            className="cursor-animation"
                            speed={{type: 'keyStrokeDelayInMs', value: 75}}
                            sequence={[
                                1000,
                                'Software Engineer',
                                200,
                                'Software Engineer | Student', // ·
                                2500,
                                (el) => {
                                    el?.classList.remove("cursor-animation");
                                }
                            ]}
                        />
                    </p>
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
            <div className="current">
                <p className="currentText">[current]</p>
                <div>
                    <p>Software Engineer at Klaviyo, pursuing an online M.S. in Computer Science at Georgia Tech</p>
                </div>
            </div>
        </>
    );
}

export default Home;