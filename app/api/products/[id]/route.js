import Products from "@/models/Products";

export async function DELETE(req, { params }) {
  const { id } = params; // Extract the product ID from params

  try {
    // Find the product by ID and delete it
    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ success: true, data: deletedProduct }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error deleting product" }), {
      status: 500,
    });
  }
}
