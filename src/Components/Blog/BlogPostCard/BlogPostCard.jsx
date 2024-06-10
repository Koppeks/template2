
import propTypes from "prop-types"
import "./BlogPostCard.css"


BlogPostCard.propTypes = {
  blog: propTypes.shape({
    title: propTypes.string.isRequired,
    creator: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    tags: propTypes.arrayOf(propTypes.string).isRequired,
    content: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  })
}

export default function BlogPostCard({blog}) {
  return (
    <article className="blog_post_card_container">
      <img className="image" src={blog.image} alt="image of the blog"/>
      <div className="tag_container">
      {
        blog.tags.length > 0 && blog.tags.map((tag, index) => (
          <p className="tag" key={index}>{tag}</p>
        ))
      }
      </div>
      <div className="main_content">
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
      <div className="blog_card_footer">
        <p>{blog.creator}</p>
        <p>{blog.date}</p>
      </div>
    </article>
  );
}
