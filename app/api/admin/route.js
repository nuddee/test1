import Admin from "@/models/Admin";

export async function GET() {
  return Response.json(await Admin.find());
}

// export async function GET() {
//   // Query the Products collection to retrieve only the `product_name` field
//   const admin = await Admin.find({}, "username");
  
//   return new Response(JSON.stringify(admin), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }