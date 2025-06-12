const pageContentElement = document.getElementById("page-content");
export const pageContent = pageContentElement?.innerHTML ?? "";
pageContentElement?.remove();

const tocRaw = document.getElementById("mkdocs-toc")?.textContent ?? "[]";
export interface TocItem {
  id: string;
  title: string;
  children?: TocItem[];
}

let parsedToc: TocItem[] = [];
try {
  parsedToc = JSON.parse(tocRaw);
} catch (err) {
  parsedToc = [];
}
export const toc: TocItem[] = parsedToc;
