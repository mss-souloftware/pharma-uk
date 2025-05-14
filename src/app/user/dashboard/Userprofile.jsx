import { useEffect, useState } from "react";
import { getUserProfile } from "./api";

export function useDashboard() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token not found");
          setLoading(false);
          return;
        }

        const res = await getUserProfile(token);
        console.log("API Response:", res); // It's already the user object

        setUser(res);
        // If your user has no orders, skip setOrders
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { user, orders, error, loading };
}
