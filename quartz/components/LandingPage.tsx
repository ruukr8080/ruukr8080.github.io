import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const LandingPage: QuartzComponentConstructor = () => {
  function LandingPage({ displayClass }: QuartzComponentProps) {
    return (
      <article class={`landing-page ${displayClass ?? ""}`}>
        <h1>Welcome to My Digital Garden</h1>
        <p>This is where I cultivate my thoughts and ideas.</p>
        <nav>
          <a href="/notes">Enter the Garden</a>
          <a href="/about">About Me</a>
        </nav>
      </article>
    )
  }

  LandingPage.css = `
    .landing-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - var(--header-height));
      text-align: center;
    }
    .landing-page h1 {
      font-size: 2.5em;
      margin-bottom: 0.5em;
    }
    .landing-page p {
      font-size: 1.2em;
      margin-bottom: 2em;
    }
    .landing-page nav {
      display: flex;
      gap: 1em;
    }
    .landing-page nav a {
      padding: 0.5em 1em;
      border: 2px solid var(--darkgray);
      border-radius: 5px;
      text-decoration: none;
      color: var(--darkgray);
      transition: all 0.3s ease;
    }
    .landing-page nav a:hover {
      background-color: var(--darkgray);
      color: var(--light);
    }
  `

  return LandingPage
}

export default LandingPage