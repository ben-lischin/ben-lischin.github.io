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
        color: 0x6bb5aa, // Hexadecimal color code without #
        backgroundColor: 0x3b3b3b, // Hexadecimal color code without #
        showDots: false
    })
});

// company links in timeline
function openLink(url) {
    window.open(url, '_blank');
}
// project info
// const projectNames = document.querySelectorAll('.projectName');
// const projectInfos = document.querySelectorAll('.projectInfo');
// const projectView = document.querySelector('.projectView');

// let clickedProject = null;

// projectNames.forEach((name, index) => {
//     name.addEventListener('click', () => {
//         projectNames.forEach(n => n.classList.remove('active'));
//         name.classList.add('active');
//         projectInfos.forEach(info => info.style.display = 'none');
//         projectInfos[index].style.display = 'block';
//         clickedProject = projectInfos[index];
//     });

//     name.addEventListener('mouseover', () => {
//         if (clickedProject != projectInfos[index]) {
//             // set this info to the top
//             if (clickedProject) {
//                 clickedProject.display = 'none';
//             }
//             projectInfos[index].style.display = 'block';
//             // projectInfos[index].style.zIndex = '99';
//         }
//     });

//     name.addEventListener('mouseout', () => {
//         if (clickedProject != projectInfos[index]) {
//             projectInfos[index].style.display = 'none';
//             if (clickedProject) {
//                 clickedProject.style.display = 'block';

//             }
//         }
//     });
// });
const projectNames = document.querySelectorAll('.projectName');
const projectView = document.querySelector('.projectView');
const projectInfos = [
    { 
        id: 'project1',
        content: `
            <div class="projectContent">
                <h2>Shogi Info</h2>
                <p>Details about Shogi...</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </div>
        `
    },
    { 
        id: 'project2',
        content: `
            <div class="projectContent">
                <h2>Vestio Info</h2>
                <p>Details about Vestio...</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </div>
        `
    },
    { 
        id: 'project3',
        content: `
            <div class="projectContent">
                <h2>UltraHealth Info</h2>
                <p>Details about UltraHealth...</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </div>
        `
    },
    { 
        id: 'project4',
        content: `
            <div class="projectContent">
                <h2>Image Editor Info</h2>
                <p>Details about image editor...</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </div>
        `
    },
    { 
        id: 'project5',
        content: `
            <div class="projectContent">
                <h2>Maze Solver Info</h2>
                <p>Details about maze solver...</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </div>
        `
    },
    // Add similar structures for other projects
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