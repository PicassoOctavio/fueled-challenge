import DOMPurify from "dompurify";

export const AboutPost = ({ content }) => {

  const cleanContent = DOMPurify.sanitize(content.rendered);

  return (
    <div
      itemProp="articleBody"
      className="content"
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  )
}
