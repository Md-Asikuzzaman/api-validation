import { NextResponse, NextRequest } from 'next/server';

import { z } from 'zod';

const createPostSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, { message: 'Email is required' })
    .max(255, { message: 'Email Address too long' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Should be at least 6 char' })
    .max(20, { message: 'Should be at most 20 char' })
    .trim(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = createPostSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json(body, { status: 200 });
}
