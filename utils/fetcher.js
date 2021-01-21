const fetcher = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin'
  });

  return res.json();
};

export default fetcher;
