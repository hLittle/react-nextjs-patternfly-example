export function getSummary() {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/summary`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Wanikani-Revision": "20170710",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  }).then((res) => res.json());
}
