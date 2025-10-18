export async function POST(request) {
  const { username, password } = await request.json();

  // Simple validation (hardcoded for demo)
  if (username === "admin" && password === "1234") {
    return new Response(JSON.stringify({ message: "Login successful!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials!" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
