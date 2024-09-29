import Products from "@/models/Products";

export async function GET() {
  // Fetch all products
  const products = await Products.find({});

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(req) {
  try {
    // Extract product data from the request body
    const { product_name, description, price, img } = await req.json();

    // Create a new product document
    const newProduct = new Products({
      product_name,
      description,
      price,
      img,
    });

    // Save the new product
    await newProduct.save();

    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error adding product" }), {
      status: 500,
    });
  }
}
