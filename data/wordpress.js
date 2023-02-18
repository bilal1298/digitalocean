export const getPosts = async () => {
  const posts = await fetch("https://e.skywarddigital.com.au/blog/wp-json/wp/v2/posts?_embed");
  const data = await posts.json();
  return data;
};

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getSlugs() {
  let elements = [];
  elements = await getPosts();
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
