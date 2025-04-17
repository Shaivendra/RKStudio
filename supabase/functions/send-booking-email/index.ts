
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingRequest = await req.json();
    const { name, email, phone, serviceType, date, timeSlot, message } = bookingData;

    // Format the email content
    const htmlContent = `
      <h1>New Booking Request</h1>
      <p>You have received a new booking request with the following details:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Service Type:</strong> ${serviceType}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${timeSlot}</li>
      </ul>
      ${message ? `<h2>Additional Message:</h2><p>${message}</p>` : ''}
    `;

    // Send email to the specified email address
    const emailResponse = await resend.emails.send({
      from: "Booking Notification <onboarding@resend.dev>",
      to: ["shivchavda85@gmail.com"],
      subject: "New Booking Request",
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
