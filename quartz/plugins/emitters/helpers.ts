import path from "path"
import fs from "fs"
import { BuildCtx } from "../../util/ctx"
import { FilePath, FullSlug, joinSegments } from "../../util/path"

type WriteOptions = {
  ctx: BuildCtx
  slug: FullSlug
  ext: `.${string}` | ""
  content: string | Buffer
}

export const write = async ({ ctx, slug, ext, content }: WriteOptions): Promise<FilePath> => {
  const pathToPage = joinSegments(ctx.argv.output, slug + ext) as FilePath
  const dir = path.dirname(pathToPage)
  await fs.promises.mkdir(dir, { recursive: true })
  await fs.promises.writeFile(pathToPage, content)
  return pathToPage
}


// Automatically create index.md for each folder to avoid 404 error
export const createIndexMd = async () => {  
  const contentItems = await fs.promises.readdir("content", {  
    encoding: "utf-8",  
    recursive: true,  
    withFileTypes: true,  
  })  
  
  // index.md  
  for (let item of contentItems) {  
    try {  
      if (!item.isFile() && item.name !== "image") {  
        const dir = path.join(item.path, item.name, "index.md")  
  
        // Tag processing: 1st stage - folder name, 2nd stage - parent folder name
        let tag: string[] = []  
  
        // 1 stage
        let current = filterTag(item.name)  
        tag.push(current)  
  
        // 2 stage
        const parentItem = item.path.split("/")  
        if (parentItem[parentItem.length - 1] !== "content") {  
          let parent = filterTag(parentItem[parentItem.length - 1])  
          tag.push(parent)  
        }  
  
        await fs.promises.writeFile(dir, `---\ntitle: ${item.name}\ntag: ${tag}\n---`)  
      }  
    } catch (e) {  
      console.log(e)  
    }  }  
}  
  
const filterTag = (item: string) => {  
  let result: string[] = []  
  
  item.split("").map(r => {  
    if (r !== "(" && r !== ")") {  
      if (r == " ") result.push("-")  
      else result.push(r)  
    }  
  })  
  
  return result.join('')  
}