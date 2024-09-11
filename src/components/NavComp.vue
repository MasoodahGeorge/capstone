<template>
    <div>
        <section class="nav-sec">
            <div class="fixed-top">
                <nav class="navbar navbar-expand-lg" id="nv">
                    <div class="container-fluid d-flex align-items-center justify-content-between">
                        <router-link class="navbar-brand" to="/">
                            <img id="brand-logo" src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/PrettyPottery__1_-removebg-preview.png?raw=true" alt="Logo" class="brand-logo">
                        </router-link>

                        <div class="collapse navbar-collapse justify-content-center" id="navbarMenu">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <router-link class="nav-link nav-item-link" to="/">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link nav-item-link" to="/about">About</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link nav-item-link" to="/products">Products</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link nav-item-link" to="/admin">Admin</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link nav-item-link" to="/contact">Contact</router-link>
                                </li>
                            </ul>
                        </div>

                        <!-- Login and Cart icons on the right -->
                        <div class="d-flex align-items-center">
                            <router-link class="nav-link" to="/login" id="login-link">
                                <img id="login-icon" src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/login%20(1).png?raw=true" alt="login" class="icon">
                            </router-link>
                            <router-link class="nav-link" to="/cart" id="cart-link">
                                <img id="cart-icon" src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/Untitled_design__18_-removebg-preview.png?raw=true" alt="cart" class="icon">
                            </router-link>
                        </div>

                        <!-- Custom Toggler for Mobile View -->
                        <button class="custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </button>
                    </div>
                </nav>
                <div id="nav-border" class="nav-border"></div>
            </div>
        </section>

        <!-- Offcanvas for mobile navigation (on the right) -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link nav-item-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-item-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-item-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-item-link" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-item-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavComp',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleScroll);
        const toggler = document.querySelector('.custom-toggler');
        toggler.addEventListener('click', this.toggleMenu); // Add click event to toggle the menu

    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.handleScroll);
        const toggler = document.querySelector('.custom-toggler');
        toggler.removeEventListener('click', this.toggleMenu);
    },
    methods: {
    handleScroll() {
        const nv = document.getElementById('nv');
        const brandLogo = document.getElementById('brand-logo');
        const cartIcon = document.getElementById('cart-icon');
        const loginIcon = document.getElementById('login-icon');
        const navLinks = document.querySelectorAll('.nav-item-link');
        const navBorder = document.getElementById('nav-border');
        const toggler = document.querySelector('.custom-toggler'); // Select custom toggler

        if (window.scrollY > window.innerHeight / 5) {
            nv.style.backgroundColor = '#fff';
            navLinks.forEach(link => {
                link.style.color = '#FF8FD2';
            });
            brandLogo.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/PrettyPottery-removebg-preview.png?raw=true";
            cartIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/Untitled_design__17_-removebg-preview.png?raw=true";
            loginIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/login%20(2).png?raw=true";

            toggler.querySelectorAll('div').forEach(bar => {
                bar.style.backgroundColor = 'pink'; // Change bar color when scrolling down
            });

            navBorder.classList.add('active');
        } else {
            nv.style.backgroundColor = 'transparent';
            navLinks.forEach(link => {
                link.style.color = '#fff';
            });
            brandLogo.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/PrettyPottery__1_-removebg-preview.png?raw=true";
            cartIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/Untitled_design__18_-removebg-preview.png?raw=true";
            loginIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/login%20(1).png?raw=true";

            toggler.querySelectorAll('div').forEach(bar => {
                bar.style.backgroundColor = 'white'; // Change bar color back to white
            });

            navBorder.classList.remove('active');
        }
    },
    toggleMenu() {
        const toggler = document.querySelector('.custom-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        toggler.classList.toggle('active'); // Toggle the active class for the animation
        navbarCollapse.classList.toggle('active'); // Toggle the visibility of the menu
    }
}


}
</script>

<style scoped>
/* Custom styles for the toggler */
.custom-toggler {
    display: none;
}

@media (max-width: 991px) {
    /* Show the custom toggler on smaller screens */
    .custom-toggler {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 25px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .custom-toggler div {
        width: 100%;
        height: 3px;
        background-color: white;
        transition: background-color 0.3s, transform 0.3s;
    }

    .custom-toggler.active .bar1 {
        transform: rotate(45deg);
    }

    .custom-toggler.active .bar2 {
        opacity: 0;
    }

    .custom-toggler.active .bar3 {
        transform: rotate(-45deg);
    }

    /* Hide the navbar on small screens */
    .navbar-collapse {
        display: none;
    }

    .offcanvas-body .navbar-nav .nav-item {
        margin: 10px 0;
    }
}

/* Other styles */
.brand-logo {
    height: 60px;
}

.icon {
    width: 30px;
    margin-left: 20px;
}

.navbar-nav .nav-link {
    color: white;
    font-size: 18px;
    margin-left: 30px;
    transition: color 0.3s ease;
}

#nv {
    background-color: transparent;
    transition: background-color 0.3s ease;
    border-bottom: 2px solid transparent;
}

.nav-border {
    height: 5px;
    width: 0;
    background-color: #C79B31;
    margin: 0 auto;
    opacity: 0;
    transition: width 1s ease-in-out, opacity 1s ease-in-out;
}

.nav-border.active {
    width: 100%;
    opacity: 1;
}

</style>
