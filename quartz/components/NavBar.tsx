import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function NavBar({ displayClass }: QuartzComponentProps) {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Brain", link: "/brain" },
    { text: "Project", link: "/project" },
  ]

  return (
    <nav class={`navbar ${displayClass ?? ""}`}>
      <div class="navbar-title">Dev Uni</div>
      <ul class="navbar-items">
        {navItems.map((item) => (
          <li key={item.text}>n
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavBar.css = `
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1b26;
  color: #fff;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-items {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar-items li {
  margin-left: 1rem;
}

.navbar-items a {
  color: #fff;
  text-decoration: none;
}

.navbar-items a:hover {
  text-decoration: underline;
}
`

export default (() => NavBar) satisfies QuartzComponentConstructor