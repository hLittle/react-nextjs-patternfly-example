export function getReviews() {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Wanikani-Revision": "20170710",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  }).then((res) => res.json());
}
