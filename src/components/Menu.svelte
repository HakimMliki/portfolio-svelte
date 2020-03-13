<script>
  import { Router, Link, Route, link } from "svelte-routing";
  export let routes = [];
  export let navs = [];

  const isActive = ({ isPartiallyCurrent, isCurrent }) => {
    if (isCurrent || isPartiallyCurrent) {
      return { class: "active" };
    }
    return {};
  };
</script>

<style>
  .logo {
    height: 40px;
    width: 40px;
    min-width: 40px;
  }
  .text {
    font-weight: 500;
    font-size: 14px;
    color: #333;
  }
  @media (min-width: 620px) {
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 160px;
      padding: 0 2rem;
    }
  }
</style>

<div class="row">
  <div class="twelve columns">
    <Router>
      <nav class="nav-container">
        <div class="brand">
          <a href="/" use:link>
            <img
              class="logo"
              src="https://image.flaticon.com/icons/svg/222/222506.svg"
              alt="logo" />
            <span class="text" />
          </a>
        </div>
        <div class="links">
          {#each navs as { to, label }}
            <Link getProps={isActive} {to}>{label}</Link>
          {/each}
        </div>
      </nav>

      <div>
        {#each routes as { to, component }}
          <Route path={to} {component} />
        {/each}
      </div>
    </Router>
  </div>
</div>
