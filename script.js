document.addEventListener('DOMContentLoaded', () => {
    // Menu functionality
    const menuButton = document.querySelector('.menu-text');
    const navBrand = document.querySelector('.nav-brand');
    const menuOverlay = document.querySelector('.menu-overlay');
    let isMenuOpen = false;
    let peekTimeout;

    window.updateMenuButtonText = () => {
        menuButton.style.opacity = '0';
        setTimeout(() => {
            menuButton.textContent = menuButton.textContent === 'Menu' ? 'Close' : 'Menu';
            menuButton.style.opacity = '1';
        }, 300);
    };

    const toggleMenu = () => {
        if (!isMenuOpen) {
            menuOverlay.style.display = 'block';
            menuOverlay.classList.remove('peeking'); // Remove peek class
            document.body.classList.add('menu-open');
            requestAnimationFrame(() => {
                menuOverlay.classList.add('active');
            });
            isMenuOpen = true;
        } else {
            menuOverlay.classList.remove('active');
            menuOverlay.classList.remove('peeking');
            document.body.classList.remove('menu-open');
            setTimeout(() => {
                menuOverlay.style.display = 'none';
            }, 500);
            isMenuOpen = false;
        }
        updateMenuButtonText();
    };

    // Add peek effect on hover
    if (menuButton) {
        menuButton.addEventListener('mouseenter', () => {
            if (!isMenuOpen) {
                clearTimeout(peekTimeout);
                menuOverlay.style.display = 'block';
                requestAnimationFrame(() => {
                    menuOverlay.classList.add('peeking');
                });
            }
        });

        menuButton.addEventListener('mouseleave', () => {
            if (!isMenuOpen && menuOverlay.classList.contains('peeking')) {
                menuOverlay.classList.remove('peeking');
                peekTimeout = setTimeout(() => {
                    if (!isMenuOpen) {
                        menuOverlay.style.display = 'none';
                    }
                }, 500);
            }
        });

        menuButton.addEventListener('click', toggleMenu);
    }

    if (navBrand) {
        navBrand.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
    }

    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '10101!<>-_\\/[]{}—=+*^?#________';
            this.currentText = el.innerText;
            this.frameRequest = null;
        }

        setText(newText) {
            // Cancel any ongoing animation
            if (this.frameRequest) {
                cancelAnimationFrame(this.frameRequest);
            }

            // If the text is already what we want, do nothing
            if (this.currentText === newText) return Promise.resolve();

            this.currentText = newText;
            const length = Math.max(this.el.innerText.length, newText.length);
            const steps = 8; // Number of scramble steps
            let step = 0;

            return new Promise(resolve => {
                const update = () => {
                    let output = '';
                    for (let i = 0; i < length; i++) {
                        const to = newText[i] || '';
                        if (step === steps) {
                            output += to;
                        } else if (!to) {
                            output += '';
                        } else {
                            output += this.chars[Math.floor(Math.random() * this.chars.length)];
                        }
                    }

                    this.el.innerText = output;

                    if (step < steps) {
                        step++;
                        setTimeout(() => {
                            this.frameRequest = requestAnimationFrame(update);
                        }, 50);
                    } else {
                        this.frameRequest = null;
                        resolve();
                    }
                };

                this.frameRequest = requestAnimationFrame(update);
            });
        }
    }

    // Content for different sections
    const texts = {
        default: {
            title: "Hi, I'm Somar",
            description: "Welcome to my portfolio. I create digital interactive experiences and 3D visual effects."
        },
        ar: {
            title: "Augmented Reality",
            description: "I'm an award winning AR artist, garnering 200+ million impressions on Instagram."
        },
        vfx: {
            title: "3D Visual Effects",
            description: "I supported VFX Artists on blockbusters like Guardians of the Galaxy 3."
        },
        gamedev: {
            title: "Game Development",
            description: "I love creating playful interactive experiences."
        },
        design: {
            title: "About Me",
            description: "???"
        }
    };

    // Initialize scramblers
    const titleElement = document.querySelector('.side-content h2');
    const descriptionElement = document.querySelector('.side-content p');

    if (titleElement && descriptionElement) {
        const titleScrambler = new TextScramble(titleElement);
        const descriptionScrambler = new TextScramble(descriptionElement);

        // Keep track of current hover state
        let currentlyHovered = 'default';

        // Function to update text with scramble effect
        const updateText = (textKey) => {
            currentlyHovered = textKey;
            const content = texts[textKey];

            titleScrambler.setText(content.title);
            descriptionScrambler.setText(content.description);
        };

        // Add hover listeners to video containers
        document.querySelectorAll('.video-container').forEach(container => {
            const type = container.classList.contains('ar-video') ? 'ar' :
                container.classList.contains('vfx-video') ? 'vfx' :
                    container.classList.contains('games-video') ? 'gamedev' :
                        container.classList.contains('design-box') ? 'design' : 'default';

            container.addEventListener('mouseenter', () => {
                updateText(type);
            });

            container.addEventListener('mouseleave', () => {
                // Only update to default if we're not hovering over another element
                if (currentlyHovered === type) {
                    updateText('default');
                }
            });
        });
    }
});

// Menu trigger code - removed since we're using the main menu button now
// This was for a separate trigger which we don't need anymore