export async function getSubject(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Wanikani-Revision": "20170710",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subject");
  }

  return response.json();
}
