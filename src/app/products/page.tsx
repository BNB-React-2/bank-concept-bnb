export default async function ProductsPage() {
  console.log('Olá mundo do Products Page');
  const response = await new Promise((res, rej) =>
    setTimeout(() => res(1), 2000)
  );
  // throw Error('Erro!');
  return <>Products Page</>;
}
