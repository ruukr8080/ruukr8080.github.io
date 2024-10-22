// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { PageNav } from "."

// const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
//   return <div id="quartz-body">{children}</div>
// }

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
    const PageNavComponent = PageNav()
  return (
    <>
      <div>
    <PageNavComponent/>
        </div>
    <div id="quartz-body">{children}</div>
      </>
  )
}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor