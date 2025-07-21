import { openLink } from '../utils';

const Education = () => {
    return (
        <section id="education">
            <div className="section-header">
               <h2 className="section">Education</h2>
            </div>
            {/* <hr /> */}
            <div className="educationContainer">
               <div className="education">
                  <div className="icon gt" onClick={() => openLink('https://www.gatech.edu/')}>
                     Georgia Institute of Technology
                  </div>
                  <div className="education-description">
                     <h4>Master of Science in Computer Science</h4>
                     <p className="date">Aug 2025 - Current</p>
                  </div>
               </div>
               <hr />
               <div className="education">
                  <div className="icon neu" onClick={() => openLink('https://www.northeastern.edu/')}>
                     Northeastern University
                  </div>
                  <div className="education-description">
                     <h4>Bachelor of Science in Computer Science and Mathematics</h4>
                     <p className="cum">Summa Cum Laude</p>
                     <p className="date">Sep 2021 - May 2025</p>
                     <div className="coursework">
                        <p>Coursework:</p>
                        <div className="courses">
                           <span className="course-type">[CS]:</span> Algorithms & Data Structures, Algorithms for Scalable Computing, Software Engineering, Object-Oriented Design, Databases, Computer Systems, Artificial Intelligence, iOS Development, Logic & Computation, Theory of Comutation, Discrete Structures, Cybersecurity, Data Science
                        </div>
                        <div className="courses">
                           <span className="course-type">[Math]:</span> Matrix Methods for Machine Learning, Linear Algebra, Multivariable Calculus, Statistics & Stochastic Processes, Probability & Statistics, Differential Equations, Group Theory, Number Theory, Geometry
                        </div>
                     </div>
                  </div>
               </div>
               <hr />
               <div className="education">
                  <div className="icon rhs" onClick={() => openLink('https://www.regis.org/')}>
                     <span>Regis High School</span>
                  </div>
                  <div className="education-description">
                     <h4>High School Diploma</h4>
                     <p className="date">Sep 2017 - Jun 2021</p>
                  </div>
               </div>
               {/* <hr />
               <div className="education">
                  <div className="icon ssi">
                     <span>Summer STEM Institute</span>
                  </div>
                  <div className="education-description">
                     <h4>Certificate: Data Science</h4>
                     <p className="date">Jun - Aug 2020</p>
                     <ul>
                        <li>6-week online interactive masterclass lecture series (30+ hrs/wk) on Python and its applications in data science, including data cleaning, manipulation, and visualization. Introduced modern machine learning models for supervised settings</li>
                     </ul>
                  </div>
               </div>
               <hr />
               <div className="education">
                  <div className="icon ngb" onClick={() => openLink('https://www.nextgenbootcamp.com/')}>
                     <span>NextGen Bootcamp</span>
                  </div>
                  <div className="education-description">
                     <h4>Certificate: Software Engineering</h4>
                     <p className="date">Aug 2019</p>
                     <ul>
                        <li>4-week university-level summer intensive course (42 hrs/wk) on a NYC campus that trains students for proficiency in both Java and Python</li>
                     </ul>
                  </div>
               </div> */}
            </div>
        </section>
    );
}

export default Education;