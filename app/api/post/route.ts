import { NextResponse, NextRequest } from 'next/server';
import { headers } from 'next/headers';

import jwt from 'jsonwebtoken';

export async function GET(req: Request) {
  try {
    const header = headers();

    const verified = jwt.verify(
      header.get('authorization') as any,
      process.env.SECRET_KEY as any
    );

    if (verified) {
      return NextResponse.json({ name: 'asik', email: 'asik@gmail.com' });
    }
  } catch (error) {
    return NextResponse.json({ Error: 'Unauthorized request!!!' });
  }
}
