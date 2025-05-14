// lib/api.js
export async function getUserProfile(token) {
  const res = await fetch("http://localhost:1545/api/v1/users/me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return res.json();
}
