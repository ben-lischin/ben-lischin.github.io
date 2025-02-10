const Home = () => {
    return (
        <section id="home">
            <div className="home">
               <h1>Ben Lischin</h1>
               <hr />
               <p className="description">Software Engineer | Student</p>
               <div className="links">
                  <a href="https://www.linkedin.com/in/ben-lischin/" target="_blank">
                     <img src="/linkedin.png" alt="Linkedin" />
                   </a>
                   <a href="https://github.com/ben-lischin" target="_blank">
                     <img src="/github.png" alt="GitHub" />
                   </a>
               </div>
            </div>
        </section>
    );
}

export default Home;