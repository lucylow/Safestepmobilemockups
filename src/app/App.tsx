import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    // Block MetaMask / injected wallet auto-connect attempts.
    // This is a UI mockup — no real wallet interaction is needed.
    try {
      Object.defineProperty(window, "ethereum", {
        get: () => undefined,
        configurable: true,
      });
    } catch {
      // Property may already be non-configurable in some environments; safe to ignore.
    }
  }, []);

  return (
    <div className="dark min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}