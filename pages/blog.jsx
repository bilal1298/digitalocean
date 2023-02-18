import React from "react";
import classes from "../styles/Blogs.module.css";
import { blogs } from "../data/blogs";
import Link from "next/link";
import Head from "next/head";
import { getPosts } from "../data/wordpress";

export const getStaticProps = async () => {
  const data = await getPosts();
  return {
    props: { posts: data },
  };
};

const blog = ({ setHeaderBg, posts }) => {
  setHeaderBg(true);
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/blog" />
        <title>Digital Marketing Blog | Skyward Digital</title>
        <meta name="title" content="Digital Marketing Blog | Skyward Digital" />
        <meta
          name="description"
          content="Skyward Digital's blog provides the latest updates and information on topics of digital marketing, SEO, PPC, Google ads, Microsoft Ads, LinkedIn Ads, Facebook ads, Instagram Ads, Snapchat Ads and Tik Tok Ads."
        />
      </Head>
      <section className={classes.blogSection}>
        <div className="container-lg">
          <h1 className="title">
            <span className="titleBackground">Blog</span>
          </h1>
          <div className={classes.blogs}>
            {posts.map((post, i) => (
              <div className={classes.blogContainer} key={i}>
                <div className={classes.blog}>
                  <div className={classes.image}>
                    <img src={post._embedded["wp:featuredmedia"]["0"].source_url} alt="" />
                  </div>
                  <div className={classes.content}>
                    <h3>{post.title.rendered}</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                    <Link href={`blog/${post.slug}`} className={classes.readMore}>
                      Read More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

// const blog = ({ setHeaderBg, test }) => {
//   console.log(test)
//   setHeaderBg(true);
//   return (
//     <React.Fragment>
//       <Head>
//         <link rel="canonical" href="https://skywarddigital.com.au/blog" />
//         <title>Digital Marketing Blog | Skyward Digital</title>
//         <meta name="title" content="Digital Marketing Blog | Skyward Digital" />
//         <meta
//           name="description"
//           content="Skyward Digital's blog provides the latest updates and information on topics of digital marketing, SEO, PPC, Google ads, Microsoft Ads, LinkedIn Ads, Facebook ads, Instagram Ads, Snapchat Ads and Tik Tok Ads."
//         />
//       </Head>
//       <section className={classes.blogSection}>
//         <div className="container-lg">
//           <h1 className="title">
//             <span className="titleBackground">Blog</span>
//           </h1>
//           <div className={classes.blogs}>
//             {blogs.map((blog) => (
//               <div className={classes.blogContainer} key={blog.title}>
//                 <div className={classes.blog}>
//                   <div className={classes.image}>
//                     <img src={blog.image} alt="" />
//                   </div>
//                   <div className={classes.content}>
//                     <h3>{blog.title}</h3>
//                     <p>{blog.excerpt.replace(/(.{300})..+/, "$1…")}</p>
//                     <Link href={`blog/${blog.slug}`} className={classes.readMore}>
//                       Read More &gt;
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <img src={test[0]._embedded["wp:featuredmedia"]["0"].source_url} alt="" />
//         <div dangerouslySetInnerHTML={{ __html: test[0].content.rendered }}></div> */}
//       </section>
//     </React.Fragment>
//   );
// };

export default blog;
