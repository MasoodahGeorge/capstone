<template>
    <div>
        <section class="nav-sec">
            <div class="fixed-top">
                <nav class="navbar navbar-expand-lg" id="nv">
                    <div class="container-fluid d-flex align-items-center justify-content-between">
                        <!-- Logo on the left -->
                        <router-link class="navbar-brand" to="/">
                            <img id="brand-logo" src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/PrettyPottery__1_-removebg-preview.png?raw=true" alt="Logo" class="brand-logo">
                        </router-link>

                        <!-- Center navigation links -->
                        <div class="collapse navbar-collapse justify-content-center">
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

                        <!-- Toggler for Mobile View -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <div id="nav-border" class="nav-border"></div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'NavComp',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const nv = document.getElementById('nv');
            const brandLogo = document.getElementById('brand-logo');
            const cartIcon = document.getElementById('cart-icon');
            const loginIcon = document.getElementById('login-icon');
            const navLinks = document.querySelectorAll('.nav-item-link');
            const navBorder = document.getElementById('nav-border');

            if (window.scrollY > window.innerHeight / 2) {
                nv.style.backgroundColor = '#fff';
                navLinks.forEach(link => {
                    link.style.color = '#FF8FD2';
                });
                brandLogo.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/PrettyPottery-removebg-preview.png?raw=true";
                cartIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/Untitled_design__17_-removebg-preview.png?raw=true";
                loginIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/login%20(2).png?raw=true";

                navBorder.classList.add('active');
            } else {
                nv.style.backgroundColor = 'transparent';
                navLinks.forEach(link => {
                    link.style.color = '#fff';
                });
                brandLogo.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/PrettyPottery__1_-removebg-preview.png?raw=true";
                cartIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/Untitled_design__18_-removebg-preview.png?raw=true";
                loginIcon.src = "https://github.com/MasoodahGeorge/CapstonePics/blob/main/login%20(1).png?raw=true";

                navBorder.classList.remove('active');
            }
        }
    }
}
</script>

<style scoped>
    .brand-logo {
        height: 60px;
    }

    .icon {
        width: 30px;
        margin-left: 20px;
    }

    .navbar-nav .nav-link {
        color: #FF8FD2;
        font-family: 'YourChosenFontFamily', sans-serif; /* Replace with the font family you want to use */
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
