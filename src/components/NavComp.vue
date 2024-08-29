<template>
    <div>
        <section class="nav-sec">
            <div class="fixed-top">
                <nav class="navbar navbar-expand-lg" id="nv">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/index.html">
                            <img src="https://i.postimg.cc/pLfnPJR0/B-1-removebg-preview.png" alt="Logo" class="d-inline-block align-text-top">
                        </a>
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
                                        <a class="nav-link" href="/index.html">Home<span class="sr-only"></span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/html/about.html">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/html/products.html">Products</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/html/contact.html">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/html/admin.html">Admin</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/html/cart.html" style="color: rgb(219, 111, 255);">
                                            <img src="https://i.postimg.cc/fLRj09kc/cart.png" alt="cart" class="cart">
                                        </a>
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
    background-color: #F8E3E7;
    height: 50%;
    border-bottom: #333;
}
</style>