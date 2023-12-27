const completionBar = document.getElementById('completion-bar');

document.addEventListener("DOMContentLoaded", function () { 
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress-bar');

    // Add this variable at the beginning of your script
    let lastFrameTime = Date.now();

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
                value: 160,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'star',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 6,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 2000,
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
                    mode: 'bubble'
                },
                onclick: {
                    enable: true,
                    mode: 'repulse'
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
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 3,
                    speed: 5
                },
                repulse: {
                    distance: 400,
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

// Add this function to check frame rate and reset particles if needed
function checkFrameRate() {
    const currentTime = Date.now();
    const elapsed = currentTime - lastFrameTime;
    lastFrameTime = currentTime;

    // Calculate frames per second (fps)
    const fps = 1000 / elapsed;

    // Define a threshold for lag (adjust as needed)
    const lagThreshold = 30;

    // Check if frame rate is below the threshold
    if (fps < lagThreshold) {
        // Reset particles
   // Particle.js initialization
      // Particle.js initialization
      particlesJS('main-container', {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'star',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 6,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 2000,
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
                    mode: 'bubble'
                },
                onclick: {
                    enable: true,
                    mode: 'repulse'
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
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 3,
                    speed: 5
                },
                repulse: {
                    distance: 400,
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
}
    // Schedule the next check
    requestAnimationFrame(checkFrameRate);
}

// Start monitoring frame rate
checkFrameRate();

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

        // Add a click event listener to the remove button
        removeButton.addEventListener('click', function () {
            taskItem.remove();
            updateProgressBar();
            saveProgress();
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        updateProgressBar();
        saveProgress();

        taskInput.value = ''; // Clear the input field
    }
}

function updateProgressBar() {
    const totalTasks = document.querySelectorAll('.task-item').length;
    const completedTasks = document.querySelectorAll('.task-item.completed').length;
    const completionPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    completionBar.style.width = `${completionPercentage}%`;

    saveProgress(); // Save progress after each update
}

function saveProgress() {
    const taskItems = document.querySelectorAll('.task-item');
    const completedTasks = document.querySelectorAll('.task-item.completed');

    // Store the task items and completed tasks count in session storage
    sessionStorage.setItem('tasks', JSON.stringify(Array.from(taskItems, item => item.textContent)));
    sessionStorage.setItem('completedTasks', completedTasks.length);
}

// Load saved progress on page load
// Load saved progress on page load
window.addEventListener('load', function () {
    const savedTasks = sessionStorage.getItem('tasks');
    const completedTasksCount = parseInt(sessionStorage.getItem('completedTasks')) || 0;
    const taskList = document.getElementById('task-list');

    if (savedTasks) {
        taskList.innerHTML = ''; // Clear existing tasks

        const tasks = JSON.parse(savedTasks);
        tasks.forEach(taskText => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.textContent = taskText;

            // Add a remove button to each task
            const removeButton = document.createElement('button');
            removeButton.className = 'remove-btn';
            removeButton.textContent = 'Remove';

            // Add a click event listener to the remove button
            removeButton.addEventListener('click', function () {
                taskItem.remove();
                updateProgressBar();
                saveProgress();
            });

            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
        });

        // Set completed class for completed tasks
        const completedTasks = document.querySelectorAll('.task-item');
        for (let i = 0; i < completedTasksCount; i++) {
            completedTasks[i].classList.add('completed');
        }

        updateProgressBar(); // Update progress bar based on loaded data
    }
});