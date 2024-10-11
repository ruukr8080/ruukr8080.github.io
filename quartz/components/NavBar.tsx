// quartz/components/NavBar.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function NavBar({ displayClass }: QuartzComponentProps) {
    return (
      <nav class={`navbar ${displayClass ?? ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tags">Tags</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    )
  }

  NavBar.css = `
    .navbar ul {
      display: flex;
      list-style-type: none;
      padding: 0;
    }
    .navbar li {
      margin-right: 1rem;
    }
  `
  return NavBar
}) satisfies QuartzComponentConstructor