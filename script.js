const completionBar = document.getElementById('completion-bar');

document.addEventListener("DOMContentLoaded", function () { 
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress-bar');

    
    taskList.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('task-item')) {
            target.classList.toggle('completed');
            updateProgressBar();
        }

                // Remove task when clicking the remove button
            if (target.classList.contains('remove-btn')) {
                    const taskItem = target.closest('.task-item');
                    if (taskItem) {
                        taskItem.remove();
                        updateProgressBar();
                    }
                }
            });

    // Particle.js initialization
    particlesJS('main-container', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const completionBar = document.getElementById('completion-bar');
    const taskText = taskInput.value.trim();


    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.textContent = taskText;

        // Add a remove button to each task
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.textContent = 'Remove';
        taskItem.appendChild(removeButton);

        taskList.appendChild(taskItem);

        updateProgressBar();

        taskInput.value = ''; // Clear the input field
    }
}

function updateProgressBar() {
    const totalTasks = document.querySelectorAll('.task-item').length;
    const completedTasks = document.querySelectorAll('.task-item.completed').length;
    const completionPercentage = (completedTasks / totalTasks) * 100;
    completionBar.style.width = `${completionPercentage}%`;
}
