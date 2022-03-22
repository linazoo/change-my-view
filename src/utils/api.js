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

export function fetchPost(id, title) {
  return fetch(`${api}/comments/${id}/${json}`).then((res) => {
    return res.json().then((data) => {
      return data;
    });
  });
}
