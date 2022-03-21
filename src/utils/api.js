const api = `https://www.reddit.com/r/changemyview`;
const json = ".json?print=pretty";

export function fetchMainPosts(type) {
  return fetch(`${api}/${type}/${json}`).then((res) => {
    return res.json().then((data) => {
      const posts = data.data.children;
      return posts;
    });
  });
}
// URL: https://www.reddit.com/r/changemyview/comments/tiiwju/cmv_the_us_needs_a_500_or_1000_bill/.json

export function fetchPost(id, title) {
  return fetch(`${api}/comments/${id}/${json}`).then((res) => {
    return res.json().then((data) => {
      console.log(data);
    });
  });
}
