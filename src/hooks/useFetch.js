import { useEffect, useState } from 'react';

export function useFetch(fetchFn, arg, { skip = false } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (skip) return;

    let ignore = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFn(arg);
        if (!ignore) setData(result);
      } catch (err) {
        console.error(err);
        if (!ignore) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [fetchFn, arg, skip]);

  return { data, loading, error };
}