<template>
  <div class="d-flex flex-column">
    <div class="container flex-grow-1">
    </div>
    <footer class="mt-auto py-5">
      <div class="row">
        <div class="col-3">
          <h5>Help and Information</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Help</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Shipping</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Order Tracking</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          </ul>
        </div>

        <div class="col-3">
          <h5>About</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Us</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="col-4 offset-1">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex justify-content-between border-top">
        <p>&copy; 2024 PrettyPottery, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style scoped>
footer {
  background-color: #fff;
  padding: 3%;
}

.d-flex{
  border: red;
}

</style>
