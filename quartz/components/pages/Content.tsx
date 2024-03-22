import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import fs from 'fs';

const commentFilePath = '/comment.html'; // Update the path to your comment.html file
const comment = fs.readFileSync(commentFilePath, 'utf8');


const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return (
    <div> 
      {/* Support for annotations using hypothes.is */}
      <script src="https://hypothes.is/embed.js" async></script>

      <article class={classString}>{content}</article>

      {/* Support for comments using giscus */}
      {/* <script src="https://giscus.app/client.js"
        data-repo="neowang0122/neowang0122.github.io"
        data-repo-id="R_kgDOLi3ZYQ"
        data-category="giscus"
        data-category-id="DIC_kwDOLi3ZYc4CeGQg"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
      </script> */}
      
      <div dangerouslySetInnerHTML={{ __html: comment }} />
      

      
    </div>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
