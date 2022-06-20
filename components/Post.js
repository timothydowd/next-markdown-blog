import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <Link href={`/blog/${post.slug}`}>
        <div style={{ cursor: 'pointer'}}>
      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

          <p>{post.frontmatter.excerpt}</p>
          </div>
      </Link>
      

      {/* <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link> */}
    </div>
  )
}
