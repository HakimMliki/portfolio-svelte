import AboutMe from "./pages/AbouMe.svelte";
import Article from "./pages/Article.svelte";
import Contact from "./pages/Contact.svelte";
import Menu from "./components/Menu.svelte";

const path = {
  about: "me",
  blog: "blog",
  contact: "contact"
};

const navs = [
  { to: path.about, label: "About me" },
  { to: path.blog, label: "Articles" },
  { to: path.contact, label: "Contact" }
];

const routes = [
  { to: path.about, component: AboutMe },
  { to: path.blog, component: Article },
  { to: path.contact, component: Contact }
];

export { routes, navs };
