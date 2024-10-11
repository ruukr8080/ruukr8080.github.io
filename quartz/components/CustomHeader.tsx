import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function CustomHeader(props: QuartzComponentProps) {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: '1rem' }}>
        <li><a href="/about">About</a></li>
        <li><a href="/brain">Brain</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/search">Search</a></li>
      </ul>
    </nav>
  )
}

export default (() => CustomHeader) satisfies QuartzComponentConstructor