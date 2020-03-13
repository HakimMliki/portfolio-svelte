<script>
  import { routes, navs } from "./routes.js";
  import Menu from "./components/Menu.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>

</style>

<main>

  <!-- .container is main centered wrapper -->
  <div class="container">
    <Menu {routes} {navs} />
    <Footer />
  </div>
</main>
