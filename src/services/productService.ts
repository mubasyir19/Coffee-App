export async function getProductBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/product/slug/${slug}`,
    );
    if (!res.ok) throw new Error("Failed fetch detail product");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed fetch product", error);
    return null;
  }
}
