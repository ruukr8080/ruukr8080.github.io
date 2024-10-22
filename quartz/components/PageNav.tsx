import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageNav() {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: '1rem' }}>
        <li><a href="/">Home</a></li>
        <li><a href="/post">Brain</a></li>
        <li><a href="/#">Projects</a></li>
        <li><a href="/#">Search-temp</a></li>
      </ul>
    </div>
  )
}

export default (() => PageNav) satisfies QuartzComponentConstructor
