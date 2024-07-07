import { useEffect, useState } from "react";

export default function useLoadingAndError(f: () => Promise<void>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        await f();
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error };
}
