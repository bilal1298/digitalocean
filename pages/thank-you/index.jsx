import React from "react";
import classes from "../../styles/ThankYou.module.css";
import Head from "next/head";
import Button from "../../components/UI/Button";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { serialize, deserialize } from "react-serialize";

const slugs = [
  "digital-marketing-agency-australia",
  "seo-agency-melbourne",
  "local-seo-melbourne",
  "ecommerce-seo-agency",
  "international-seo-agency",
  "email-marketing-agency",
  "social-media-agency-melbourne",
  "web-design-melbourne",
  "wordpress-web-design",
  "ecommerce-website-design",
  "business-website-design",
  "educational-website-design",
  "medical-website-design",
  "white-label-agency",
  "white-label-seo-reseller",
  "white-label-web-design",
  "white-label-ppc-agency",
  "white-label-content-writing-services",
  "graphic-design-melbourne",
  "logo-design-services",
  "copywriting-melbourne",
];

const ThankYou = ({setHeaderBg}) => {
    setHeaderBg(true)
  const blogs = [
    {
      title: "The Benefits of White Label Services for Digital Marketing Agencies",
      slug: "the-benefits-of-white-label-services-for-digital-marketing-agencies",
      desc: serialize(
        <div>
          <p>
            In the digital marketing industry, competition is fierce. Agencies are constantly looking for ways to stand out, grow their client base, and increase revenue. One way to achieve this is by
            offering white label services to other agencies.
            <br />
            <br />
            White label services refer to the practice of one company providing services or products to another company, who then rebrands and sells them as their own. In the case of digital
            marketing, this could include SEO, PPC, social media marketing, web design and development, and more.
            <br />
            <br />
            There are several benefits of white label services for digital marketing agencies:
            <br />
            <br />
          </p>
          <img src={"/digital marketing.jpg"} />
          <br />
          <br />
          <p>
            Increased revenue: White label services provide an additional revenue stream for agencies. By reselling services to other agencies, they can increase their revenue without having to invest
            in additional resources or staff.
            <br />
            <br />
            Cost-effective: White label services are often more cost-effective than developing and offering services in-house. Agencies can purchase services at a lower cost and resell them at a
            markup, generating profit without the added expenses of development and maintenance.
            <br />
            <br />
            Scalability: White label services allow agencies to scale their services quickly and efficiently. By reselling services, agencies can take on more clients without having to invest in
            additional resources.
            <br />
            <br />
          </p>
          <img src={"/SCALABLE.jpg"} />
          <br />
          <br />
          <p>
            Specialisation: White label services allow agencies to specialise in specific areas of digital marketing. For example, an agency may not have the resources to develop a robust PPC
            campaign, but by reselling white label PPC services, they can still offer that service to their clients.
            <br />
            <br />
            Increased credibility: By reselling white label services, agencies can offer a wider range of services to their clients, which can increase their credibility and reputation in the
            industry.
            <br />
            <br />
            However, it's essential to choose the right white label provider. Agencies should thoroughly research potential providers, looking at their experience, reputation, and the quality of their
            services. By partnering with a reputable white label provider, agencies can ensure that they are offering high-quality services to their clients.
            <br />
            <br />
            <img src={"/reputation.jpg"} />
            <br />
            <br />
            According to a study by MarketsandMarkets, the global white label services market is expected to grow from $19.4 billion in 2020 to $32.4 billion by 2025, at a CAGR of 10.7%. This growth
            is driven by the increasing demand for outsourcing and the need for cost-effective solutions.
            <br />
            <br />
            In conclusion, white label services offer a range of benefits for digital marketing agencies. They provide an additional revenue stream, are cost-effective, scalable, and allow agencies to
            specialise in specific areas of digital marketing. By partnering with a reputable white label provider, agencies can ensure that they are offering high-quality services to their clients
            and increase their credibility in the industry. With the increasing demand for outsourcing and the need for cost-effective solutions, the global white label services market is expected to
            grow significantly in the coming years.
          </p>
        </div>
      ),
      image: "/The Benefits of White Label Services for Digital Marketing Agencies.jpg",
      excerpt:
        "In the digital marketing industry, competition is fierce. Agencies are constantly looking for ways to stand out, grow their client base, and increase revenue. One way to achieve this is by offering white label services to other agencies. White label services refer to the practice of one company providing services or products to another company, who then rebrands and sells them as their own. In the case of digital marketing, this could include SEO, PPC, social media marketing, web design and development, and more.",
    },
    {
      title: "How to Improve Your PPC Campaigns for Better ROI",
      slug: "how-to-improve-your-ppc-campaigns-for-better-roi",
      desc: serialize(
        <div>
          <p>
            Pay-per-click (PPC) advertising is a powerful tool for driving traffic and conversions to your website. However, with so many businesses using PPC advertising, it can be challenging to
            stand out and achieve a positive return on investment (ROI). In this blog post, we will explore several strategies for improving your PPC campaigns and achieving better ROI.
            <br />
            <br />
            <img src="/Target Audience.jpg" />
            <br />
            <br />
            Use Negative Keywords: Negative keywords are keywords that you don't want your ads to show up for. By using negative keywords, you can prevent your ads from being shown to users who are
            not likely to convert. This can help improve your ROI by reducing the number of irrelevant clicks on your ads.
            <br />
            <br />
            Test Ad Copy and Landing Pages: PPC advertising is an ongoing process of testing and optimization. By testing different ad copy and landing pages, you can find the combination that
            generates the highest click-through rate (CTR) and conversion rate. Additionally, by using A/B testing, you can identify which ad copy and landing page elements are most effective.
            <br />
            <br />
            <img src="/Landing Page (1).jpg" />
            <br />
            <br />
            Monitor and Analyze Your Campaigns: PPC advertising is data-driven, and it's essential to monitor and analyze your campaigns regularly. By monitoring your campaigns, you can identify which
            keywords and ad groups are performing well and which are not. Additionally, by analyzing your campaigns, you can identify trends and patterns that can help you make data-driven decisions.
          </p>
        </div>
      ),
      image: "/How to Improve Your PPC Campaigns for Better ROI.jpg",
      excerpt:
        "Pay-per-click (PPC) advertising is a powerful tool for driving traffic and conversions to your website. However, with so many businesses using PPC advertising, it can be challenging to stand out and achieve a positive return on investment (ROI). In this blog post, we will explore several strategies for improving your PPC campaigns and achieving better ROI.",
    },
    {
      title: "The Role of Social Media in Building Brand Awareness",
      slug: "the-role-of-social-media-in-building-brand-awareness",
      desc: serialize(
        <div>
          <p>
            Social media has become an integral part of our daily lives, and it's no surprise that it has also become a crucial component of digital marketing. With over 3 billion active users on
            social media, it's an excellent platform for businesses to connect with their target audience, build brand awareness, and drive conversions. In this blog post, we will explore the role of
            social media in building brand awareness and the best practices for creating a successful social media marketing strategy.
            <br />
            <br />
            First, it's essential to understand that social media is not just about promoting products or services. It's about building relationships with your audience and creating a community around
            your brand. By consistently providing valuable content, businesses can establish trust and credibility with their followers, making them more likely to engage with their brand and
            recommend it to others.
            <br />
            <br />
            One of the best ways to build brand awareness on social media is by creating visually appealing content. The use of images and videos can increase engagement and reach, making it more
            likely that your content will be shared and seen by a larger audience. Additionally, using relevant hashtags and targeting specific demographics can also help increase visibility and
            reach.
            <br />
            <br />
            Another important aspect of social media is engaging with your audience. Responding to comments and messages, hosting live Q&A sessions, and running contests and giveaways can not only
            increase engagement but also foster a sense of community around your brand.
            <br />
            <br />
            However, it's essential to remember that social media is not a one-size-fits-all solution. Different platforms have different audiences and purposes, so it's important to understand where
            your target audience is most active and tailor your content accordingly. For example, Instagram is great for visually-driven content, while LinkedIn is a better platform for B2B marketing.
            <br />
            <br />
            <img src={"/Building Relationship.gif"} />
            <br />
            <br />
            According to a recent study by Sprout Social, businesses that use social media for brand awareness see an average of 18% more engagement than those that don't. Furthermore, businesses that
            actively engage with their audience on social media see a 5.7% increase in website traffic, and a 9.8% increase in conversion rates.
            <br />
            <br />
            <img src={"/target audience.png"} />
            <br />
            <br />
            According to a recent study by Sprout Social, businesses that use social media for brand awareness see an average of 18% more engagement than those that don't. Furthermore, businesses that
            actively engage with their audience on social media see a 5.7% increase in website traffic, and a 9.8% increase in conversion rates.
            <br />
            <br />
            <img src="/increase in website traffic.png" />
            <br />
            <br />
            In conclusion, social media is a powerful tool for building brand awareness, and businesses that use it strategically can see significant benefits in terms of engagement and conversions.
            By creating visually appealing content, engaging with your audience, and understanding where your target audience is most active, businesses can establish trust and credibility with their
            followers and increase visibility and reach.
          </p>
        </div>
      ),
      image: "/The Role of Social Media in Building Brand Awareness.png",
      excerpt:
        "Social media has become an integral part of our daily lives, and it's no surprise that it has also become a crucial component of digital marketing. With over 3 billion active users on social media, it's an excellent platform for businesses to connect with their target audience, build brand awareness, and drive conversions. In this blog post, we will explore the role of social media in building brand awareness and the best practices for creating a successful social media marketing strategy.",
    },
  ];
  const caseStudies = [
    {
      image: "/client logo 61.png",
      slug: "zest-technologies",
      problem: `At Skyward Digital, we specialize in helping companies like SaaS companies increase their website conversions through our Digital Marketing Services. One of our clients Zest Technologies, a provider in the project management space, was facing challenges in converting website visitors into paying customers. They had tried various tactics to improve their website and digital marketing strategy, but nothing seemed to be working.
        
        That's when they contacted us for help. Our team of experts conducted an in-depth analysis of their website, identifying areas that needed improvement and making suggestions for changes. We worked closely with them to redesign their pricing page, simplify their messaging, and improve the overall design of their website. Additionally, we helped them optimize their customer journey to ensure that their website visitors had the best experience possible. Using tools such as heatmap and analytics, we were able to understand user behavior and identify bottlenecks.
         
        We also helped them with their paid advertising campaigns, by creating targeted ads, managing the budget and monitoring the performance. We also did a thorough keyword research and helped them optimize their website's SEO. This helped them reach a larger audience and increase brand awareness.
        
        The results of our efforts were astounding. Within just a few months of working with us, our client's website conversions increased by a staggering 50%. This directly led to a significant increase in their revenue and allowed them to scale their business.
        
        At Skyward Digital, we pride ourselves on providing exceptional service to our clients. Our team is composed of experts in their field who are dedicated to helping our clients achieve their goals. We were always available to answer their questions and provide guidance and support. Our client was impressed with our ability to understand their business and provide valuable insights.
        `,
    },
    {
      image: "/Client logo9.png",
      slug: "abstract-creative",
      problem: `At Skyward Digital, we understand the importance of a strong online presence for creative agencies, particularly when it comes to increasing organic traffic. That's why we were excited to work with Abstract Creative, a branding agency that was struggling to increase their organic traffic.`,
    },
    {
      image: "/Client logo7.png",
      slug: "protech",
      problem: `We were approached by ProTech Solutions, a B2B software company that specialises in providing a platform for project management. The company had been in business for several years and had a solid customer base, but they were struggling to generate new leads and increase their revenue. They had been using Google Ads for a while but were not seeing the results they were expecting. They were looking for a solution to improve their online presence and generate more leads at a lower cost.
     
        The company had been in business for several years and had a solid customer base, but they were struggling to generate new leads and increase their revenue. They had been using Google Ads for a while but were not seeing the results they were expecting. They were looking for a solution to improve their online presence and generate more leads at a lower cost.
         
        The main problem was that the company's cost per lead was too high, and their conversion rate was low. They were not reaching their target audience effectively and needed to improve their campaign. Their website was not generating enough traffic and they were not appearing on the first page of Google search results. Their cost per lead was high, and they were not seeing a good return on their investment.
        `,
    },
  ];
  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <section className={classes.thankYouSection}>
        <div className="container-lg">
          <h1 className="title">
            <span className="titleBackground">Thank You</span>
          </h1>
          <p className="subtitle">We have received your contact details. We'll get back to you shortly. In the meantime, check out some online marketing case studies and blogs.</p>
          <Button href={"/"} position={"center"}>
            Back To Home
          </Button>
        </div>
      </section>
      <section className={classes.caseStudies}>
        <div className="container-lg">
          <h2 className="title">
            Case <span className="titleBackground">Studies</span>
          </h2>
          <Swiper
            className="caseStudiesSwiper"
            style={{ padding: "35px" }}
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
            }}
          >
            {caseStudies.map((item) => (
              <SwiperSlide key={item.slug}>
                <div className={classes.caseStudy}>
                  <div className={classes.title}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={classes.content}>
                    <p>{JSON.stringify(item.problem).replace(/(.{150})..+/, "$1…")}</p>
                  </div>
                  <Link className={classes.readMore} href={`/case-study/${item.slug}`}>
                    Read More &gt;
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className={classes.blogSection}>
        <div className="container-lg">
          <h2 className="title">
            <span className="titleBackground">Blog</span>
          </h2>
          <div className={`${classes.blogs}`}>
            {blogs.map((item) => (
              <div className={classes.blog} key={item.title}>
                <div className={classes.blogImage}>
                  <img src={item.image} alt="" />
                </div>
                <div className={classes.blogTitle}>
                  <h3>{item.title}</h3>
                  <p className={classes.excerpt}>{item.excerpt.replace(/(.{300})..+/, "$1…")}</p>
                </div>
                <div className={classes.button}>
                  <Link className={classes.readMore} href={`/blog/${item.slug}`}>
                    Read More &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ThankYou;
