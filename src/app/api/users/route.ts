import { NextRequest } from 'next/server';

export async function GET() {
  const res = await fetch('https://dummyjson.com/users');
  const response = await res.json();

  return Response.json(response);
}

export async function POST(request: NextRequest) {
  const body = request.json();
  const res = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const data = res.json();

  return Response.json(data);
}
