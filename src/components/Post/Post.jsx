import DOMPurify from "dompurify";

export const Post = ({createdDate, author, content}) => {

  const cleanContent = DOMPurify.sanitize(content);

  return (
    <article itemScope itemType="http://schema.org/BlogPosting" className="post">
      <header>

        <h2 itemProp="headline">
          Post Title 1
        </h2>

        {/* publication date  */}
        <div className="date">
          <strong>Publish Date</strong>
          <span itemProp="datePublished">
            <time dateTime="2016-05-01">
              {createdDate || "May 1, 2016"}
            </time>
          </span>
        </div>

        <div className="author">
          <strong>Author</strong>
          <span itemProp="author">
            {author || 'Joe Dane'}
          </span>
        </div>

      </header>

        <div
          itemProp="articleBody"
          className="content"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

    </article>
  )
}
