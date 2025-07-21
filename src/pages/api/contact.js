import { connectDB } from "../../utils/database.js";

export async function POST({ request }) {
  console.log("Contact API hit");
  try {
    const data = await request.json();
    console.log('Received data:', data); 
    const { firstName, lastName, email, phone, company, industry, message } =
      data;

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !company ||
      !industry ||
      !message
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const db = await connectDB();
    const submissions = db.collection("submissions");
    const result = await submissions.insertOne({
      firstName,
      lastName,
      email,
      phone,
      company,
      industry,
      message,
      submittedAt: new Date(),
    });
    console.log("Insert result:", result);

    console.log("Returning success response");
    return new Response(
      JSON.stringify({ success: true, message: "Submission received." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
