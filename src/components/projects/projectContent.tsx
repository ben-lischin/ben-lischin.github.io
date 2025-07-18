import React from 'react';

const Splinter = () => {
    return (
        <div className="projectContent">
            <h2>Range Queries in SplinterDB</h2>
            <div className="projectLinks">
                <a href="https://github.com/benmash/splinterdb" target="_blank">GitHub</a>
                <a href="https://docs.google.com/document/d/1xFWvl3AejVlAhovsn5ozmQT9LmScdhqvDo164XTmi38/edit?usp=sharing" target="_blank">Report</a>
            </div>
            <div className="projectDescription">
                <p><a href="https://www.usenix.org/system/files/atc20-conway.pdf" target="_blank">SplinterDB</a> is VMware's production-grade key-value store built on the novel Size-Tiered B<sup>&epsilon;</sup>-Tree indexing structure.</p>
                <p>This project is an exploration of SplinterDB's internal infrastructure, identifying opportunities to optimize range queries with <a href="https://arxiv.org/pdf/2408.05625" target="_blank">Memento filters</a>. An initial implementation with results and benchmarking was completed for POC. See the report above for a comprehensive analysis.</p>
            </div>
            <div className="projectSkills">
                <div className="projectSkill">C</div>
                <div className="projectSkill">Databases</div>
                <div className="projectSkill">Filters</div>
            </div>
        </div>
    );
}
const Sketching = () =>{
    return (
        <div className="projectContent">
            <h2>&phi;-Heavy Hitters</h2>
            <div className="projectLinks">
                <a href="https://github.com/ben-lischin/heavy_hitters" target="_blank">GitHub</a>
                {/* <a href="" target="_blank">Report</a> */}
            </div>
            <div className="projectDescription">
                <p><u>def</u>: Given an input stream S of size N, a &phi;-heavy hitter is an item that occurs at least &phi;N times in S.</p>
                <p>Implemented Misra-Gries, Count Sketch, and Count-Min Sketch for solving the &phi;-heavy hitters problem in a single-pass streaming context. These sketching algorithms use probabilistic data structures to approximate the frequency of items in the stream, offering significant memory reduction compared to traditional alternatives.</p>
                <p>Generated universal, pairwise independent hash families used in the Count and Count-Min Sketches to guarantee bounded error and variance with high probability. Exploited Mersenne prime properties and power-of-two counters to accelerate modular reduction in hashing by &gt;7x.</p>
                {/* <p>
                    Universal hash functions from a pairwise independent family: <code>h(x) = ((ax + b) mod p) mod m</code><br />
                    For a Mersenne prime <code>p = 2<sup>n</sup> − 1</code>, a fast reduction trick is:<br />
                    <code>x % p = (x &amp; p) + (x &gt;&gt; n)</code>
                </p> */}
                <p>Evaluated the precision, recall, update time, and space usage of the sketching algorithms against a ground truth hash table, ingesting a Zipfian disitribution stream to model naturally occurring skewed frequencies.</p>
            </div>
            <div className="projectSkills">
                <div className="projectSkill">C++</div>
                <div className="projectSkill">Streams</div>
                <div className="projectSkill">Sketches</div>
            </div>
        </div>
    );
}
const VEB = () => {
    return (
        <div className="projectContent">
            <h2>Van Emde Boas Tree</h2>
            <div className="projectLinks">
                <a href="https://github.com/ben-lischin/VanEmdeBoasTree" target="_blank">GitHub</a>
                <a href="https://docs.google.com/document/d/1vSFSN-2-h5nnO41R7dqx1Rf1waQMeApxQTPV82dTbNo/edit?usp=sharing" target="_blank">Report</a>
            </div>
            <div className="projectDescription">
                <p>A Van Emde Boas compact tree supports O(loglogU) operations on integer elements in fixed universe u: insert, delete, query, successor search.</p>
                <p>To improve runtime, I introduced a base class utilizing bitset representation for O(1) operations with minimal space, avoiding costly low-level recursion. To achieve optimal amortized runtime for inserts and deletes, min is lazily propagated into recursive levels. Lazy loading was also used to reduce unnecessary memory overhead for allocating empty nested VEB structures, especially for small set representation.</p>
                <p>This implementation outperformed the std::set balanced binary search tree, especially with larger set representation. See the report above for a more in-depth performance analysis.</p>
            </div>
            <div className="projectSkills">
                <div className="projectSkill">C++</div>
                <div className="projectSkill">Compact Trees</div>
            </div>
        </div>
    );
}
const UTTT = () => {
    return (
        <div className="projectContent">
            <h2>Ultimate Tic-Tac-Toe Agentic AI</h2>
            <div className="projectLinks">
                <a href="https://github.com/ben-lischin/ultimate_tictactoe" target="_blank">GitHub</a>
                <a href="https://drive.google.com/file/d/18W7IUlr39F0vKJJ4Cq-WUaHWkKBkCHAi/view?usp=sharing" target="_blank">Report</a>
            </div>
            <div className="projectDescription">
                <p>This project is a comparative analysis of 3 AI Agents in Ultimate Tic-Tac-Toe: Minimax, Monte Carlo Tree Search, Deep Q-Learning.</p>
                <p>We modeled the game using compact bit representation for subboards, enabling efficient forward-simulation of game states in search-based agents where deepcopy becomes a performance bottleneck. All agents implement a standardized predict(state: UTTT) API, allowing the game engine to simulate matchups between any two strategies. In testing, we also introduce a new random-move agent as a control baseline.</p>
                <p>Our results highlight the strength of traditional adversarial search with domain-specific heuristics in a deterministic, fully observable environment, while revealing flaws with both stochastic planning and learning-based approaches in this situation.</p>
            </div>
            <div className="projectSkills">
                <div className="projectSkill">Python</div>
            </div>
        </div>
    );
}
const Shogi = () => {
    return (
        <div className="projectContent">
            <h2>Covey.Town: Shogi</h2>
            <div className="projectLinks">
                <a href="https://github.com/ben-lischin/covey.town-shogi" target="_blank">GitHub</a>
                {/* <a href="https://shogi-301.onrender.com/" target="_blank">Live Deployment</a> */}
            </div>
            <div className="projectDescription">
                <p>This extension of the original Covey.Town codebase enables users to play and spectate real-time single or multiplayer games of Shogi. We provide various informational and assistive features to help you figure out the game. When a match starts, each player is given a 10-minute move clock, forfeiting the game at 0. While waiting for another user to join, players have the option to begin a game against our Shogi engine. This engine is implemented using the Negamax algorithm, with adjustable search depth for scalable difficulty settings.</p>
                <p>Integrated Firebase to support user authentication and record persistence across sessions, feeding the town leaderboard with all active player stats.</p>
            </div>
            <div className="projectSkills">
                <div className="projectSkill">TypeScript</div>
                <div className="projectSkill">React</div>
                <div className="projectSkill">Firebase</div>
                <div className="projectSkill">Jest</div>
                {/* <div className="projectSkill">Socket.io</div> */}
            </div>
        </div>
    );
}
// const Vestio = () => {
//     return (
//         <div className="projectContent">
//             <h2>Vestio</h2>
//             <div className="projectLinks">
//                 <a href="https://github.com/ben-lischin/Vestio" target="_blank">GitHub</a>
//                 {/* <a href="https://docs.google.com/presentation/d/1-mSYY5tT8vgVl54vgSB63c7F3QVsmnR19aIyS-rEFJA/edit?usp=sharing" target="_blank">Demo</a> */}
//             </div>
//             <div className="projectDescription">
//                 <p>Vestio is a live trading app for iOS that allows email-authenticated users to invest fake currency and track their portfolio. Enabling users to practice trading in this no-risk environment, we aim to give users confidence in their investment strategies.</p>
//                 <p>Users start with $1,000 to invest - they can search for companies, maintain a watchlist, and buy/sell shares to grow their wealth. At any point, the user can reset their account.</p>
//                 <p>Current market data and stock prices are maintained in-app using the Alpha Vantage API.</p>
//             </div>
//             <div className="projectSkills">
//                 <div className="projectSkill">Swift</div>
//                 <div className="projectSkill">iOS</div>
//                 <div className="projectSkill">Firebase</div>
//             </div>
//         </div>
//     );
// }
// const UH = () => {
//     return (
//         <div className="projectContent">
//             <h2>UltraHealth</h2>
//             <div className="projectLinks">
//                 <a href="https://github.com/ben-lischin/UltraHealth" target="_blank">GitHub</a>
//             </div>
//             <div className="projectDescription">
//                 <p>This project is a medical web app designed to facilitate seamless interaction and data-transfer between 3 archetypal medical-space users: patients, doctors, pharmacists. A simple frontend was built using Appsmith.</p>
//                 <p>The backend includes an original normalized relational database containing 9 tables and 75+ attributes, filled with sample data. We also built a REST API with Flask, exposing 9 endpoints granting each user unique role-based CRUD operations.</p>
//             </div>
//             <div className="projectSkills">
//                 <div className="projectSkill">Python</div>
//                 <div className="projectSkill">MySQL</div>
//                 <div className="projectSkill">REST API</div>
//                 <div className="projectSkill">Docker</div>
//                 <div className="projectSkill">Flask</div>
//             </div>
//         </div>
//     );
// }
// const Image = () => {
//     return (
//         <div className="projectContent">
//             <h2>Image Editor</h2>
//             <div className="projectLinks">
//                 <a href="https://github.com/ben-lischin/ImageEditor" target="_blank">GitHub</a>
//             </div>
//             <div className="projectDescription">
//                 <p>With this processor, users may load, edit, and save images of multiple file types (JPG, JPEG, PNG, PPM, BMP, etc).</p>
//                 <p>Implemented model-view-controller design pattern to support user interaction through a Swing GUI application. Alternatively, if specified through command-line arguments, the user can either pass in a script of commands or type into the terminal directly to edit an image.</p>
//                 {/* <p>Image edits include horizontal/vertical flip, blur/sharpen, brighten/darken, and various grayscale operations. The GUI additionally included a histogram to visualize the red, green, blue, and intensity components of the current version of the (edited) image.</p> */}
//             </div>
//             <div className="projectSkills">
//                 <div className="projectSkill">Java</div>
//                 <div className="projectSkill">Swing</div>
//                 <div className="projectSkill">MVC</div>
//                 <div className="projectSkill">JUnit</div>
//             </div>
//         </div>
//     );
// }
// const Maze = () => {
//     return (
//         <div className="projectContent">
//             <h2>Maze Solver</h2>
//             <div className="projectLinks">
//                 <a href="https://github.com/ben-lischin/MazeSolver" target="_blank">GitHub</a>
//             </div>
//             <div className="projectDescription">
//                 <p>The project interface loads with random maze of specified or default dimension. The maze builds with Kruskal's algorithm, generating a minimum spanning tree of a randomly weighted graph with edges connecting all nodes to their adjacencies.</p>
//                 <p>Users may interact to visualize a breadth-first or depth-first search from the start cell to the end cell. The program utilizes a backtracking algorithm that, upon search completion, highlights the most efficient path. At any point, users may pause/play the animation or refresh with a new maze.</p>
//             </div>
//             <div className="projectSkills">
//                 <div className="projectSkill">Java</div>
//                 <div className="projectSkill">Graphs</div>
//                 <div className="projectSkill">JUnit</div>
//             </div>
//         </div>
// );
// }
// const Hem = () => {
//     return (
//         <div className="projectContent">
//             <h2>Hemorrhage Classification</h2>
//             <div className="projectLinks">
//                 <a href="https://drive.google.com/file/d/1_v3dr_aSB6B6pjKeDZIm0ZEX5avVvLyf/view?usp=sharing" target="_blank">Report</a>
//             </div>
//             <div className="projectDescription">
//                 <p><a href="https://zetasurgical.com/" target="_blank">Zeta Surgical</a> partnered with Northeastern University's Experimental Network to host a challenge for the classification and segmentation of hemorhages in CT brain scans. Company data was provided for model training, which will not be shared for privacy regulation. </p>
//                 <p>After preprocessing, these scans are fed into each of our 5 models for classification: (1) Logistic Regression (2) Random Forest (3) ANN (4) CNN (5) LeNet-5 pretrained CNN.</p>
//                 <p>In these supervised ML models, the images are fit into collections for the 5 hemmorage types (intraparenchymal, intraventricular, subarachnoid, subdural), a multi-class, and a control group of healthy brains.</p>                    
//             </div>
//             <div className="projectSkills">
//                 <div className="projectSkill">Python</div>
//                 <div className="projectSkill">Machine Learning</div>
//             </div>
//         </div>
//     );
// }

const ProjectContent: { [key: string]: React.ReactNode } = {
    "SplinterDB": <Splinter />,
    "Heavy Hitters": <Sketching />,
    "VEB Tree": <VEB />,
    "UTTT": <UTTT />,
    "Shogi": <Shogi />,
    // "Vestio": <Vestio />,
    // "UltraHealth": <UH />,
    // "Image Editor": <Image />,
    // "Maze Solver": <Maze />,
    // "Hemorrhage Classification": <Hem />,
}

export default ProjectContent;
