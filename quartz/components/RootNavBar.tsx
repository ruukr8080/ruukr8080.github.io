import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function RootNavBar({ displayClass }: QuartzComponentProps) {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Brain", link: "/brain" },
    { text: "Project", link: "/project" },
  ]

  return (
    <nav class={`root-navbar ${displayClass ?? ""}`}>
      <div class="root-navbar-title">Dev Uni</div>
      <ul class="root-navbar-items">
        {navItems.map((item) => (
          <li key={item.text}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default (() => RootNavBar) satisfies QuartzComponentConstructor