import React, { useState, useEffect } from "react";
import classes from "../../styles/Blogs.module.css";
import Link from "next/link";
import { getSlugs, getPost, getPosts } from "../../data/wordpress";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const paths = await getSlugs();
  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  const posts = await getPosts();
  return {
    props: {
      post,
      posts,
    },
    revalidate: 10, // In seconds
  };
}

const BlogSingle = ({ post, setHeaderBg, posts }) => {
  const router = useRouter();
  setHeaderBg(true);
  const [toc, setToc] = useState([]);
  useEffect(() => {
    const content = post.content.rendered;
    let parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    let h2 = doc.getElementsByTagName("h2");
    let h2a = [...h2];
    let h2i = [];
    h2a.map((item) => {
      h2i.push(item.innerHTML);
    });
    setToc(h2i);
  }, [router.asPath]);
  return (
    <section className={classes.blogSection}>
      <div className="container-lg">
        <div className={classes.singleBlogContainer}>
          <div className={classes.singleBlog}>
            <h1 className={"title"}>{post.title.rendered}</h1>
            <img src={post._embedded["wp:featuredmedia"]["0"].source_url} alt="" className={classes.feauturedImage} />
            {toc.length > 0 && (
              <div className={classes.toc}>
                <h3>Table of contents</h3>
                {toc.map((item, i) => (
                  <ul>
                    <li>
                      <Link href={`#${i}`}>
                        {i + 1}. {item}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          </div>
          <div className={classes.sidebar}>
            <h3>Latest Blogs</h3>
            {posts.map((post, index) => (
              <>
                {index < 3 && (
                  <div className={classes.thumbnail}>
                    <img src={post._embedded["wp:featuredmedia"]["0"].source_url} />
                    <Link href={`${post.slug}`}>
                      <h4>{post.title.rendered.replace(/(.{100})..+/, "$1…")}</h4>
                    </Link>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className={classes.authorBox}>
          <div className={classes.authorImage}>
            <img src="/dev-oza.png" alt="" />
          </div>
          <div className={classes.authorBio}>
            <Link href="/author/dev">
              <h3>Dev Oza</h3>
            </Link>
            <p className={classes.designation}>CEO</p>
            <p>
              Meet Dev, a digital marketer with a passion for crafting impactful online experiences. With 12 years of expertise, Dev has a proven track record of boosting engagement, conversions and
              online visibility. Combining creative vision, tech know-how, and a data-driven approach, Dev creates marketing magic that delivers results and makes a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
// import React from "react";
// import classes from "../../styles/Blogs.module.css";
// import { blogs } from "../../data/blogs";
// import { deserialize } from "react-serialize";
// import Link from "next/link";

// export const getStaticPaths = () => {
//   const paths = blogs.map((item) => {
//     return {
//       params: { slug: item.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = (context) => {
//   const slug = context.params.slug;
//   const data = blogs.find((item) => item.slug === slug);
//   return {
//     props: { blog: data },
//   };
// };

// const BlogSingle = ({ blog, setHeaderBg }) => {
//   setHeaderBg(true);
//   return (
//     <section className={classes.blogSection}>
//       <div className="container-lg">
//         <div className={classes.singleBlogContainer}>
//           <div className={classes.singleBlog}>
//             <h1 className={"title"}>{blog.title}</h1>
//             <img src={blog.image} alt="" className={classes.feauturedImage} />
//             {blog.toc && (
//               <div className={classes.toc}>
//                 <h3>Table of contents</h3>
//                 {blog.toc.map((item, i) => (
//                   <ul>
//                     <li>
//                       <Link href={`#${item.href}`}>
//                         {i + 1}. {item.name}
//                       </Link>
//                     </li>
//                   </ul>
//                 ))}
//               </div>
//             )}
//             <div>{deserialize(blog.desc)}</div>
//           </div>
//           <div className={classes.sidebar}>
//             <h3>Latest Blogs</h3>
//             {blogs.map((blog, index) => (
//               <>
//                 {index < 3 && (
//                   <div className={classes.thumbnail}>
//                     <img src={blog.image} />
//                     <Link href={`${blog.slug}`}>
//                       <h4>{blog.title.replace(/(.{100})..+/, "$1…")}</h4>
//                     </Link>
//                   </div>
//                 )}
//               </>
//             ))}
//           </div>
//         </div>
//         <div className={classes.authorBox}>
//           <div className={classes.authorImage}>
//             <img src="/dev-oza.png" alt="" />
//           </div>
//           <div className={classes.authorBio}>
//             <Link href="/author/dev">
//               <h3>Dev Oza</h3>
//             </Link>
//             <p className={classes.designation}>CEO</p>
//             <p>
//               Meet Dev, a digital marketer with a passion for crafting impactful online experiences. With 12 years of expertise, Dev has a proven track record of boosting engagement, conversions and
//               online visibility. Combining creative vision, tech know-how, and a data-driven approach, Dev creates marketing magic that delivers results and makes a real impact.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSingle;
