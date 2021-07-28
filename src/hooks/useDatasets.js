import { useState, useEffect } from 'react';

export function useDatasets(url) {
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(
    () => {
      let isCurrent = true;
      fetch(
        url,
        {
          headers: new Headers([['Accept', 'application/json']]),
        },
      )
        // eslint-disable-next-line no-shadow
        .then(result => result.json())
        .then(
          // eslint-disable-next-line no-shadow
          (result) => {
            if (isCurrent) {
              setResult(result);
            }
          },
          () => {
            setError(true);
          },
        );
      return () => { isCurrent = false; };
    },
    [url],
  );

  if (error) { return {}; }
  return result;
}

export default useDatasets;
