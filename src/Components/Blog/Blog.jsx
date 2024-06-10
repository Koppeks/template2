import "./Blog.css"
import BlogPostCard from "./BlogPostCard/BlogPostCard";

export default function Blog() {

  const blogPosts = [
    {
      image: "./backgroundBlog.jpg",
      creator: "Alice Johnson",
      date: "2024-01-15",
      tags: ["Cloud", "Innovation"],
      title: "The Future of Cloud Computing",
      content: "Cloud computing has revolutionized the way businesses operate, providing scalable and cost-effective solutions. In this article, we explore the latest trends and future prospects in cloud technology."
    },
    {
      image: "./backgroundBlog.jpg",
      creator: "Bob Smith",
      date: "2024-02-20",
      tags: ["Cybersecurity"],
      title: "Cybersecurity Best Practices",
      content: "In today's digital age, cybersecurity is more important than ever. This post outlines essential practices to protect your business from cyber threats and ensure data integrity."
    },
    {
      image: "./backgroundBlog.jpg",
      creator: "Catherine Green",
      date: "2024-03-10",
      tags: ["AI", "Innovation"],
      title: "The Rise of Artificial Intelligence",
      content: "Artificial Intelligence (AI) is transforming industries across the globe. We delve into the advancements in AI and its implications for the IT service sector."
    },
    {
      image: "./backgroundBlog.jpg",
      creator: "Daniel Lewis",
      date: "2024-04-05",
      tags: ["Managment"],
      title: "Top IT Service Management Tools",
      content: "Choosing the right IT service management tools can streamline your operations. Here, we review the top tools available in 2024 and their key features."
    },
    // {
    //   image: "./backgroundBlog.jpg",
    //   creator: "Emma Brown",
    //   date: "2024-05-18",
    //   tags: ["Innovation", "Connectivity"],
    //   title: "5G Technology and Its Impact on IT Services",
    //   content: "5G technology is set to revolutionize connectivity and IT services. This article explores the potential impact of 5G on various IT service applications and business operations."
    // }
  ];


  return(
    <div className="blog_container">
      <div className="title">
        <h2>Blog</h2>
        <p>Checkout out lastest entries and stay up to date</p>
      </div>
      <div className="blog_list">
        {blogPosts.map((blog, index) => (
          <BlogPostCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  )
}