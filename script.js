// reactive navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// animated background (Vanta.js)
document.addEventListener('DOMContentLoaded', function() {
    VANTA.NET({
        el: "#home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x6bb5aa, // blue, 0x{hex code}
        // color: 0xedbb36, // orange, 0x{hex code}
        backgroundColor: 0x3b3b3b, // gray, 0x{hex code}
        showDots: false,
        points: 9,
        maxDistance: 18,
    })
});

// company links in timeline
function openLink(url) {
    window.open(url, '_blank');
}

// project info
const projectNames = document.querySelectorAll('.projectName');
const projectView = document.querySelector('.projectView');
const projectInfos = [
    { 
        id: 'project1',
        content: `
            <div class="projectContent">
                <h2>Covey.Town: Shogi</h2>
                <div class="projectLinks">
                    <a href="https://github.com/ben-lischin/covey.town-shogi" target="_blank">GitHub Repo</a>
                    <a href="https://shogi-301.onrender.com/" target="_blank">Live Deployment</a>
                </div>
                <div class="projectDescription">
                    <p>This extension of the original Covey.Town codebase enables users to play and spectate real-time single or multiplayer games of Shogi. We provide various informational and assistive features to help you figure out the game. When a match starts, each player is given a 10-minute move timer which ticks down during their turn, forfeiting the game at 0. While waiting for another user to join, players have the option to begin a game against our Shogi engine. This engine is implemented using the Negamax algorithm, with adjustable search depth for scalable difficulty settings.</p>
                    <p>Firebase was integrated to support user authentication and record persistence across sessions, feeding the town leaderboard with all active player stats.</p>
                </div>
                <div class="projectSkills">
                    <div class="projectSkill">TypeScript</div>
                    <div class="projectSkill">React</div>
                    <div class="projectSkill">Firebase</div>
                    <div class="projectSkill">Jest</div>
                    <div class="projectSkill">Socket.io</div>
                </div>
            </div>
        `
    },
    // <p>At any point during a game, new users may enter the Shogi area and spectate the game in real-time. Whenever a game ends, all players and observers receive a toast notification summarizing the result.</p>
    //             <p>As you play, you have the following supportive features:</p>
    //             <ul>
    //                 <li>Hovering over a piece displays information about it and how it moves</li>
    //                 <li>Clicking a piece during your turn highlights the valid positions to move to</li>
    //                 <li>Toggle board pieces between traditional and Western themes</li>
    //             </ul>
    //             <p>In addition to the move logic for each of the 8 pieces, Shogi has additional unique rules that we support:</p>
    //             <ul>
    //                 <li>Whenever you capture your opponent’s pieces, they gather in your in-hand sidebar. On a later move, you may place one of these in-hand pieces onto the board as one of your own</li>
    //                 <li>On moves that enable a piece to be promoted, you are prompted with a popup to select if you would like to promote the piece</li>    
    //             </ul>
    { 
        id: 'project2',
        content: `
            <div class="projectContent">
                <h2>Vestio</h2>
                <div class="projectLinks">
                    <a href="https://github.com/ben-lischin/Vestio" target="_blank">GitHub Repo</a>
                    <a href="https://docs.google.com/presentation/d/1-mSYY5tT8vgVl54vgSB63c7F3QVsmnR19aIyS-rEFJA/edit?usp=sharing" target="_blank">Demo</a>
                </div>
                <div class="projectDescription">
                    <p>Vestio is a live trading app for iOS that allows email-authenticated users to invest fake currency and track their portfolio. Enabling users to practice trading in this no-risk environment, we aim to give users confidence in their investment strategies.</p>
                    <p>Users start with $1,000 to invest - they can search for companies, maintain a watchlist, and buy/sell shares to grow their wealth. At any point, the user can reset their account.</p>
                    <p>Current market data and stock prices are maintained in-app using the Alpha Vantage API.</p>
                </div>
                <div class="projectSkills">
                    <div class="projectSkill">Swift</div>
                    <div class="projectSkill">iOS</div>
                    <div class="projectSkill">Firebase</div>
                </div>
            </div>
        `
    },
    { 
        id: 'project3',
        content: `
            <div class="projectContent">
                <h2>UltraHealth</h2>
                <div class="projectLinks">
                    <a href="https://github.com/ben-lischin/UltraHealth" target="_blank">GitHub Repo</a>
                </div>
                <div class="projectDescription">
                    <p>This project is a medical web app designed to facilitate seamless interaction and data-transfer between 3 archetypal medical-space users: patients, doctors, pharmacists. A simple front-end was built using Appsmith.</p>
                    <p>The back-end includes an original normalized relational database containing 9 tables, 75+ attributes, and 500+ rows of sample user data. We also deployed a REST API with a Python Flask container in Docker, granting each user unique role-based CRUD operations.</p>
                </div>
                <div class="projectSkills">
                    <div class="projectSkill">Python</div>
                    <div class="projectSkill">MySQL</div>
                    <div class="projectSkill">REST API</div>
                    <div class="projectSkill">Docker</div>
                    <div class="projectSkill">Flask</div>
                </div>
            </div>
        `
    },
    { 
        id: 'project4',
        content: `
            <div class="projectContent">
                <h2>Image Editor</h2>
                <div class="projectLinks">
                    <a href="https://github.com/ben-lischin/ImageEditor" target="_blank">GitHub Repo</a>
                </div>
                <div class="projectDescription">
                    <p>With this processor, users may load, edit, and save images of multiple file types (JPG, JPEG, PNG, PPM, BMP, etc).</p>
                    <p>Implemented model-view-controller design pattern to support user interaction through a Swing GUI application. Alternatively, if specified through command-line arguments, the user can either pass in a script of commands or type into the terminal directly to edit an image.</p>
                    <p>Image edits include horizontal/vertical flip, blur/sharpen, brighten/darken, and various grayscale operations. The GUI additionally included a histogram to visualize the red, green, blue, and intensity components of the current version of the (edited) image.</p>
                </div>
                <div class="projectSkills">
                    <div class="projectSkill">Java</div>
                    <div class="projectSkill">Swing</div>
                    <div class="projectSkill">MVC</div>
                    <div class="projectSkill">JUnit</div>
                </div>
            </div>
        `
    },
    { 
        id: 'project5',
        content: `
            <div class="projectContent">
                <h2>Maze Solver</h2>
                <div class="projectLinks">
                    <a href="https://github.com/ben-lischin/MazeSolver" target="_blank">GitHub Repo</a>
                </div>
                <div class="projectDescription">
                    <p>The project interface loads with random maze of specified or default dimension. The maze is built by applying Kruskal's algorighm to generate a minimum spanning tree of a randomly weighted graph with edges connecting all nodes to their adjacencies.</p>
                    <p>Users may interact to visualize a breadth-first or depth-first search from the start cell to the end cell. The program utilizes a backtracking algorithm that, upon search completion, highlights the most efficient path. At any point, users may refresh with a new maze.</p>
                </div>
                <div class="projectSkills">
                    <div class="projectSkill">Java</div>
                    <div class="projectSkill">Graphs</div>
                    <div class="projectSkill">JUnit</div>
                </div>
            </div>
        `
    },
    { 
        id: 'project6',
        content: `
            <div class="projectContent">
                <h2>Hemorrhage Classification</h2>
                <div class="projectLinks">
                    <a href="https://drive.google.com/file/d/1_v3dr_aSB6B6pjKeDZIm0ZEX5avVvLyf/view?usp=sharing" target="_blank">Report</a>
                </div>
                <div class="projectDescription">
                    <p><a href="https://zetasurgical.com/">Zeta Surgical</a> partnered with Northeastern University's Experimental Network to host a challenge for the classification and segmentation of hemorhages in CT brain scans. Company data was provided for model training, which will not be shared for privacy regulation. </p>
                    <p>After preprocessing, these scans are fed into each of our 5 models for classification: (1) Logistic Regression (2) Random Forest (3) ANN (4) CNN (5) LeNet-5 Pretrained CNN.</p>
                    <p>In these supervised ML models, the images are fit into collections for the 5 hemmorage types (intraparenchymal, intraventricular, subarachnoid, subdural), a multi-class, and a control group of healthy brains.</p>                    
                </div>
                <div class="projectSkills">
                    <div class="projectSkill">Neural Network</div>
                    <div class="projectSkill">Random Forest</div>
                    <div class="projectSkill">Logistic Regression</div>
                </div>
            </div>
        `
    },
];
let activeProjectId = null;
let clickedProjectId = null;

function createProjectContent(text) {
    const contentElement = document.createElement('div');
    contentElement.classList.add('projectContent');
    contentElement.innerHTML = text;

    return contentElement;
}

projectNames.forEach((name, index) => {
    const { id } = projectInfos[index];
    name.addEventListener('click', () => {
        projectNames.forEach(n => n.classList.remove('active'));
        name.classList.add('active');
        clickedProjectId = id;
        activeProjectId = id;

        updateProjectInfo(id);
    });

    name.addEventListener('mouseover', () => {
        if (id !== activeProjectId) {
            updateProjectInfo(id);
        }
    });

    name.addEventListener('mouseout', () => {
        updateProjectInfo(clickedProjectId);
    });
});

function updateProjectInfo(id) {
    projectView.innerHTML = '';

    if (id) {
        const activeProject = projectInfos.find(project => project.id === id);
        if (activeProject) {
            const projectContent = createProjectContent(activeProject.content);
            projectView.appendChild(projectContent);
        }
    }
}