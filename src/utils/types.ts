export type NodeType = "text" | "image" | "list" | "page" | "heading1" | "heading2" | "heading3" 
//"element" | "comment" | "document" | "documentType" | "processingInstruction" | "cdata" | "attribute" | "fragment";"table" | "heading" | "paragraph" | "code" | "blockquote" | "horizontalRule" | "link" | "linkReference" | "definition" | "footnoteDefinition" | "footnoteReference"

export type NodeData = {
    id: string;
    type: NodeType;
    value: string;
}

export type Page = {
    id: string;
    slug: string;
    title: string; 
    nodes: NodeData[];
    cover: string;
}