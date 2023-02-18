import React, { useState, useEffect } from "react";
import Banner from "../components/HomePage/Banner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import About from "../components/HomePage/About";
import TrustedBy from "../components/HomePage/TrustedBy";
import WhyUs from "../components/HomePage/WhyUs";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Blog from "../components/HomePage/Blog";
import banner from "../public/banner.png";
import Section from "../components/UI/Section";
import FlipBox from "../components/ServicesPage/FlipBox";
import { blogs } from "../data/blogs";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Faqs from "../components/UI/Faqs";
import Schema from "../data/Schema";
import { useRouter } from "next/router";

export default function Home({ setHeaderBg, uqid, utm, referrer }) {
  setHeaderBg(false);
  const router = useRouter()
  console.log(router.query['utm_campaign'])
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
  const testimonials = [
    {
      designation: "FG Telecom",
      text: "As a Telecom company, it was crucial for us to have a strong presence on search engines. Skyward Digital's team provided us with a comprehensive SEO strategy that helped us increase our visibility and drive more leads. Their expertise in running PR campaigns, acquiring links and onsite optimisation helped us establish a strong SEO presence in Victoria.Additionally, their ability to track and analyse campaign performances allowed for regular adjustments which helped us achieve our goals and improve our online reputation.",
      business: "/Client logo 4.png",
    },
    {
      designation: "Lowes Food",
      text: "Skyward Digital's SEO service was a game changer for our e-commerce store. Their team effectively optimized our website and product pages for search engines by implementing various techniques such as meta tags optimization, internal linking, and schema markup. They also provided us with guidance on how to create effective product descriptions, title tags and other on-page elements, which greatly contributed to our website's ranking. Their understanding of the latest SEO trends and techniques allowed them to continuously improve and adapt their strategy as needed. As a result, we observed a marked increase in organic traffic, conversion rates and revenue for our e-commerce store.",
      business: "/client logo 3.png",
    },
    {
      designation: "Estes Express",
      text: "Hiring Skyward Digital for our International SEO needs was a wise decision for our company as we expand globally. Their team of experts helped us to optimize our website for multiple languages and cultures and created a targeted strategy for international keyword research. This helped us improve our visibility in global search results and drive more traffic to our website. While there were some challenges during the process, the team at Skyward Digital was always available to help us work through them. They are also able to track and analyze our campaign performance to make necessary adjustments, this helped us reach our goals. We are satisfied with the results.",
      business: "/Client logo17.png",
    },
    {
      designation: "Juliana Silva Studio",
      text: "We retained Skyward Digital's services for E-commerce SEO, and the experience was nothing short of exceptional. Their team executed a range of optimization techniques for our fashion E-commerce website including technical optimization, keyword research and content optimization. Their proficiency in promoting our products and educating our target market led to a substantial increase in website traffic, online visibility, and sales. Their ability to monitor and assess our campaign performance in real-time facilitated regular adjustments which greatly contributed to achieving our objectives. We appreciate their prompt communication and attention to detail throughout the project.",
      business: "/client logo20.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Search Engine Optimization",
      desc: "We provide SEO services that deliver real results. No beating around the bush with metrics like impressions, traffic or clicks. Our ROI-focused strategies focus on the most important metric for your business - conversions. With a range of services from local SEO, E-Commerce SEO to National/International services, we make sure your business is seen.",
      icon: "/seo.png",
      href: "/seo-agency-melbourne",
      id: 1,
    },
    {
      title: "Social Media Marketing",
      desc: "Getting likes is easy but it doesn’t help your business generate revenue. We transform businesses into lead generation machines through effective advertising on Facebook, Instagram, and Tik Tok. Cut through the clutter with social campaigns that are designed to keep you one step ahead of the competition.",
      icon: "/social media marketing.png",
      href: "/social-media-agency-melbourne",
      id: 2,
    },
    {
      title: "Pay Per Click Marketing",
      desc: "Turn your ad spend on paid search and social platforms into game changing revenue through our proprietary strategies. We have services with Google ads, Microsoft ads, LinkedIn ads, and whatever platform you want to translate clicks into success.",
      icon: "/ppc.png",
      href: "/ppc-agency-melbourne",
      id: 3,
      color: "#000",
    },
    {
      title: "Web Design",
      desc: "Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue. We reimagine your website with cost-effective packages and transparent reporting to ignite your business growth.",
      icon: "/webdesign.png",
      href: "/web-design-melbourne",
      id: 4,
    },
    {
      title: "Email Marketing",
      desc: "Is Email marketing dead? Only if you don’t know how to do it right. Skyward specializes in email marketing strategies that will help you stand out in a cluttered inbox. We offer a range of services from email marketing to email campaign management.",
      icon: "/email.png",
      href: "/email-marketing-agency",
      id: 5,
    },
    {
      title: "White Label Services",
      desc: "We can support your agency with our white-label service, comprising a dedicated team of developers, designers, and digital marketers. When you partner with Skyward Digital, we help your agency reduce costs and improve productivity. And we know how important your clients are to your agency, so we treat them just like their own.",
      icon: "/whitelabel.png",
      href: "/white-label-agency",
      id: 6,
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://skywarddigital.com.au/#organization",
        name: "Skyward Digital Agency",
        url: "https://skywarddigital.com.au/",
        sameAs: [
          "https://www.facebook.com/skywarddigitalmarketing",
          "https://www.instagram.com/skywarddigitalmarketing/",
          "https://www.linkedin.com/company/skyward-digital-solutions/",
          "https://www.youtube.com/@skywarddigitalmarketing",
          "https://twitter.com/skywardigitalau",
        ],
        logo: {
          "@type": "ImageObject",
          "@id": "https://skywarddigital.com.au/#logo",
          inLanguage: "en-AU",
          url: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
          contentUrl: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
          width: 645,
          height: 172,
          caption: "Skyward Digital",
        },
        image: {
          "@id": "https://skywarddigital.com.au/#logo",
        },
        founder: {
          "@type": "Person",
          name: "Devendra Oza",
          url: "https://skywarddigital.com.au/",
          sameAs: "https://skywarddigital.com.au/",
        },
        numberOfEmployees: 50,
        slogan: "Premier Digital Marketing Agency in Melbourne",
        description: "Maximize your online presence with Skyward Digital. Leading Digital Marketing Agency in Melbourne. Contact us today to grow your business.",
        legalName: "Skyward Digital Agency",
      },
      {
        "@type": "WebSite",
        "@id": "https://skywarddigital.com.au/#website",
        url: "https://skywarddigital.com.au/",
        name: "Skyward Digital Agency",
        description: "Premier Digital Marketing Agency in Melbourne",
        publisher: {
          "@id": "https://skywarddigital.com.au/#organization",
        },
        inLanguage: "en-AU",
        copyrightHolder: {
          "@id": "https://skywarddigital.com.au/#organization",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "https://skywarddigital.com.au/#primaryimage",
        inLanguage: "en-AU",
        url: "https://skywarddigital.com.au/banner.png",
        contentUrl: "https://skywarddigital.com.au/banner.png",
        width: 322,
        height: 617,
      },
      {
        "@type": "WebPage",
        "@id": "https://skywarddigital.com.au/#webpage",
        url: "https://skywarddigital.com.au/",
        name: "Premier Digital Marketing Agency in Melbourne",
        isPartOf: {
          "@id": "https://skywarddigital.com.au/#website",
        },
        about: {
          "@id": "https://skywarddigital.com.au/#organization",
        },
        description: "Maximize your online presence with Skyward Digital. Leading Digital Marketing Agency in Melbourne. Contact us today to grow your business.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What Is Digital Marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital marketing is the art and science of promoting your business online. It involves creating a digital presence for your brand, utilising various digital channels to reach your target audience, and using data and analytics to measure and improve your efforts. From social media advertising, to email marketing, to search engine optimization, digital marketing provides a wealth of opportunities to connect with customers, build relationships, and grow your business. It’s an essential component of any modern marketing strategy, as more and more consumers are relying on the internet to find and research products and services. By investing in digital marketing, you’re not just reaching more people, you’re reaching the right people, at the right time, with the right message.",
        },
      },
      {
        "@type": "Question",
        name: "How Will Your Agency Generate Leads Or Revenue For My Business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our agency generates leads and revenue for businesses by utilising a data-driven, results-oriented approach to digital marketing. With years of industry experience, we have a proven track record of success in creating effective campaigns that drive traffic, engagement, and conversions. We use a combination of tactics, including search engine optimization, social media advertising, and email marketing, to reach your target audience and build relationships with them. We also utilise analytics and data to track the performance of our campaigns and continuously refine and improve our strategies, ensuring that your business is getting the most out of its marketing budget. With a focus on generating measurable results, our goal is to help your business grow and succeed in the competitive digital landscape.",
        },
      },
      {
        "@type": "Question",
        name: "What Is A Full-service Digital Agency? What Can They Do For Me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A full-service digital agency is a one-stop-shop for all your digital marketing needs. They offer a comprehensive range of services designed to help you achieve your marketing goals and drive growth for your business. These services can include everything from website design and development, to search engine optimization, social media management, content marketing, and email marketing. By working with a full-service digital agency, you’re able to streamline your marketing efforts, benefit from their expertise and knowledge, and ensure that your digital presence is working as hard as possible for you. Whether you’re looking to boost your online visibility, increase website traffic, or drive more sales, a full-service digital agency has the skills, experience, and tools to help you achieve your objectives and reach your target audience.",
        },
      },
      {
        "@type": "Question",
        name: "How Do I Choose The Best Digital Marketing Agency In Melbourne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choosing the best digital marketing agency in Melbourne requires careful consideration and research. Start by defining your marketing goals and identifying your target audience. Then, research potential agencies and look for those that specialise in your industry and have a track record of success. Consider their services and approach to digital marketing, and ask for references or case studies from previous clients. Schedule a consultation with each agency to discuss your goals and see how they plan to achieve them. Be sure to ask about their process, experience, and the metrics they use to measure success. Finally, choose the agency that you feel best understands your needs and has a solid plan in place to help you reach your goals. Don't be afraid to ask questions, communicate openly, and trust your instincts. A good digital marketing agency should be a partner, not just a vendor. It’s not an easy decision to make, but whether you’re a marketing manager or a business owner, check out our case studies and testimonials to see how Skyward Digital has helped businesses like yours thrive in highly competitive niches.",
        },
      },
      {
        "@type": "Question",
        name: "What Is SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO, or Search Engine Optimization, is the process of improving the visibility of a website in search engine results pages (SERPs). This is achieved through a combination of technical optimizations, keyword research and analysis, and high-quality content creation. The goal of SEO is to improve the ranking of a website in search engines such as Google, Bing, and Yahoo. This higher ranking increases the chances that potential customers will find your website and become familiar with your brand. A good SEO strategy should consider the user experience, the relevancy of your website to search terms, and the authority of your website in your industry. By investing in SEO, you can improve your online visibility, drive more organic traffic to your website, and ultimately grow your business. However, it's important to understand that SEO is not a one-time solution but rather an ongoing process that requires careful planning, research, and execution to achieve long-term success.",
        },
      },
      {
        "@type": "Question",
        name: "What Is PPC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PPC stands for Pay-Per-Click and it is a type of digital advertising that allows businesses to show their ads to potential customers through search engines (like Google, Yahoo, Bing, etc.), social media (like Facebook, Instagram, LinkedIn, Tik Tok, Snapchat, etc.), and other websites. With PPC, businesses only pay when someone clicks on their ad, hence the name \"Pay-Per-Click.\" This type of advertising is highly targeted, allowing you to reach your desired audience through specific keywords, demographics, and geographic locations. PPC advertising can be an effective way to generate leads, increase website traffic, and drive sales for your business. It requires careful planning, ongoing management, and expert optimization to be successful, so it's important to work with a digital marketing agency or a PPC professional to ensure the best results. Whether you're a small business owner, an established brand, or a startup, PPC can help you reach your marketing goals and grow your business online.",
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Head>
        <link rel="preload" href="/banner.png" as="image" />
        <link rel="preload" href="/verona_bold-webfont.woff" as="font" />
        <link rel="preload" href="/verona_bold-webfont.woff2" as="font" />
        <link rel="canonical" href="https://skywarddigital.com.au" />
        <title>Skyward Digital | Premier Digital Marketing Agency in Melbourne</title>
        <meta name="title" content="Skyward Digital | Premier Digital Marketing Agency in Melbourne" />
        <meta name="description" content="Maximize your online presence with Skyward Digital. Leading Digital Marketing Agency in Melbourne. Contact us today to grow your business." />
        <meta name="facebook-domain-verification" content="akomuc0096u745m6e2ag7ugomz36cp" />
        <Schema jsonSchema={JSON_SCHEMA} />
        <Schema jsonSchema={FAQ_SCHEMA} />
      </Head>

      <Banner
        title={<h1>Skyrocket Business Growth and Fuel Your Revenue</h1>}
        desc={
          <p>
            Skyward Digital is a full-service Melbourne-based digital marketing agency. Our crew of trusted flight commanders are on a mission to help businesses like yours. We find you the right
            traffic that delivers genuine leads and lands more customers.
            <br />
            <br />
            We grow your business by designing digital marketing strategies and campaigns, including search engine optimisation (SEO), social media marketing, Google Ads, social ads, web design, email
            marketing and white-label services.
            <br />
            <br />
            <strong style={{ color: "#fece1a" }}>Get in touch today to organise a free audit of your website, valued at $2000. Let us help you unlock your business’ potential.</strong>
          </p>
        }
        heroImg={banner}
        bg={true}
        setPopup={setPopup}
      />
      {popup && <PopupForm setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer}></PopupForm>}
      <NumberStrip
        items={[
          {
            title: (
              <>
                500+
                <br />
                Happy Clients
              </>
            ),
            icon: "/happyclients.png",
          },
          {
            title: (
              <>
                Award
                <br />
                Winning Agency
              </>
            ),
            icon: "/award.png",
          },
          {
            title: (
              <>
                After Hours
                <br />
                Support
              </>
            ),
            icon: "/support.png",
          },
          {
            title: (
              <>
                Guaranteed
                <br />
                Results
              </>
            ),
            icon: "/guaranteed.png",
          },
        ]}
      />
      <About setPopup={setPopup} />
      <FlipBox
        title={
          <>
            Our <span className="titleBackground">Services</span>
          </>
        }
        background={"#fff"}
        items={flipboxItems}
      />
      <TrustedBy />
      <WhyUs background={"#fff"} setPopup={setPopup} />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
      <CaseStudies background={"#dde3ff"} caseStudies={caseStudies} />
      <Industries setPopup={setPopup} />
      <Blog blogs={blogs} />
      <Section title={<span className="titleBackground">FAQs</span>} padding={"70px 0"} background={"#fff"}>
        <Faqs
          faqs={[
            {
              title: "What Is Digital Marketing?",
              desc: (
                <>
                  Digital marketing is the art and science of promoting your business online. It involves creating a digital presence for your brand, utilising various digital channels to reach your
                  target audience, and using data and analytics to measure and improve your efforts.
                  <br />
                  <br />
                  From social media advertising, to email marketing, to search engine optimization, digital marketing provides a wealth of opportunities to connect with customers, build relationships,
                  and grow your business. It’s an essential component of any modern marketing strategy, as more and more consumers are relying on the internet to find and research products and
                  services. By investing in digital marketing, you’re not just reaching more people, you’re reaching the right people, at the right time, with the right message.
                </>
              ),
            },
            {
              title: "How Will Your Agency Generate Leads Or Revenue For My Business?",
              desc: (
                <>
                  Our agency generates leads and revenue for businesses by utilising a data-driven, results-oriented approach to digital marketing. With years of industry experience, we have a proven
                  track record of success in creating effective campaigns that drive traffic, engagement, and conversions.
                  <br />
                  <br />
                  We use a combination of tactics, including search engine optimization, social media advertising, and email marketing, to reach your target audience and build relationships with them.
                  We also utilise analytics and data to track the performance of our campaigns and continuously refine and improve our strategies, ensuring that your business is getting the most out
                  of its marketing budget. With a focus on generating measurable results, our goal is to help your business grow and succeed in the competitive digital landscape.
                </>
              ),
            },
            {
              title: 'What Is A "Full-service Digital Agency"? What Can They Do For Me?',
              desc: (
                <>
                  A full-service digital agency is a one-stop-shop for all your digital marketing needs. They offer a comprehensive range of services designed to help you achieve your marketing goals
                  and drive growth for your business. These services can include everything from website design and development, to search engine optimization, social media management, content
                  marketing, and email marketing.
                  <br />
                  <br />
                  By working with a full-service digital agency, you’re able to streamline your marketing efforts, benefit from their expertise and knowledge, and ensure that your digital presence is
                  working as hard as possible for you. Whether you’re looking to boost your online visibility, increase website traffic, or drive more sales, a full-service digital agency has the
                  skills, experience, and tools to help you achieve your objectives and reach your target audience.
                </>
              ),
            },
            {
              title: "How Do I Choose The Best Digital Marketing Agency In Melbourne?",
              desc: (
                <>
                  Choosing the best digital marketing agency in Melbourne requires careful consideration and research. Start by defining your marketing goals and identifying your target audience.
                  Then, research potential agencies and look for those that specialise in your industry and have a track record of success. Consider their services and approach to digital marketing,
                  and ask for references or case studies from previous clients. Schedule a consultation with each agency to discuss your goals and see how they plan to achieve them. Be sure to ask
                  about their process, experience, and the metrics they use to measure success.
                  <br />
                  <br />
                  Finally, choose the agency that you feel best understands your needs and has a solid plan in place to help you reach your goals. Don't be afraid to ask questions, communicate openly,
                  and trust your instincts. A good digital marketing agency should be a partner, not just a vendor.
                  <br />
                  <br />
                  It’s not an easy decision to make, but whether you’re a marketing manager or a business owner, check out our case studies and testimonials to see how Skyward Digital has helped
                  businesses like yours thrive in highly competitive niches.
                </>
              ),
            },
            {
              title: "What Is SEO?",
              desc: (
                <>
                  SEO, or Search Engine Optimization, is the process of improving the visibility of a website in search engine results pages (SERPs). This is achieved through a combination of
                  technical optimizations, keyword research and analysis, and high-quality content creation. The goal of SEO is to improve the ranking of a website in search engines such as Google,
                  Bing, and Yahoo. This higher ranking increases the chances that potential customers will find your website and become familiar with your brand.
                  <br />
                  <br />A good SEO strategy should consider the user experience, the relevancy of your website to search terms, and the authority of your website in your industry. By investing in SEO,
                  you can improve your online visibility, drive more organic traffic to your website, and ultimately grow your business. However, it's important to understand that SEO is not a
                  one-time solution but rather an ongoing process that requires careful planning, research, and execution to achieve long-term success.
                </>
              ),
            },
            {
              title: "What Is PPC?",
              desc: (
                <>
                  PPC stands for Pay-Per-Click and it is a type of digital advertising that allows businesses to show their ads to potential customers through search engines (like Google, Yahoo, Bing,
                  etc.), social media (like Facebook, Instagram, LinkedIn, Tik Tok, Snapchat, etc.), and other websites. With PPC, businesses only pay when someone clicks on their ad, hence the name
                  "Pay-Per-Click." This type of advertising is highly targeted, allowing you to reach your desired audience through specific keywords, demographics, and geographic locations.
                  <br />
                  <br />
                  PPC advertising can be an effective way to generate leads, increase website traffic, and drive sales for your business. It requires careful planning, ongoing management, and expert
                  optimization to be successful, so it's important to work with a digital marketing agency or a PPC professional to ensure the best results. Whether you're a small business owner, an
                  established brand, or a startup, PPC can help you reach your marketing goals and grow your business online.
                </>
              ),
            },
          ]}
        ></Faqs>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
    </React.Fragment>
  );
}
