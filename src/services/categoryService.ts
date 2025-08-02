export async function getCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/categories`,
      {
        next: {
          revalidate: 60,
        },
      },
    );

    if (!res.ok) throw new Error("Failed to fetch categories");

    return res.json();
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}
