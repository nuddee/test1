import Category from "@/models/Category";

export async function GET() {
    return Response.json(await Category.find());
  }