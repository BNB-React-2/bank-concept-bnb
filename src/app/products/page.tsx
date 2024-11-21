'use client';

import { useEffect } from 'react';

export default function ProductsPage() {
  console.log('Olá mundo do Products Page');
  const postUser = async () =>
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        firstName: 'mateus',
        lastName: 'queiros',
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  // throw Error('Erro!');

  useEffect(() => {
    postUser();
  }, []);

  return <>Products Page</>;
}
