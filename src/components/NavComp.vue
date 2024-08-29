<template>
    <div>
        <section class="nav-sec">
            <div class="fixed-top">
                <nav class="navbar navbar-expand-lg" id="nv">
                    <div class="container-fluid">
                        <router-link class="navbar-brand" to="/">
                            <img src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/PrettyPottery-removebg-preview.png?raw=true" alt="Logo" class="d-inline-block align-text-top">
                        </router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
    
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item active">
                                        <router-link class="nav-link" to="/">Home</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/about">About</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/products">Products</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/contact">Contact</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/admin">Admin</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/cart" style="color: rgb(219, 111, 255);">
                                            <img src="https://i.postimg.cc/fLRj09kc/cart.png" alt="cart" class="cart">
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'NavComp',
}
</script>

<style scoped>
    .cart {
    width: 5%;
    height: 5%;
}

.d-inline-block {
    width: 100%;
    height: 60px;
}

#nv {
    background-color: #ffffff;
    height: 50%;
    border-bottom: #333;
}

.nav-link {
    color: rgb(255, 210, 218);
}


</style>