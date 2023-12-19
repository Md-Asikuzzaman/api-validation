import axios from 'axios';
import jwt from 'jsonwebtoken';

export default async function Home() {
  try {
  

    const token = jwt.sign({ key: Math.random().toString() }, process.env.SECRET_KEY as any);

    const res = await axios.get('http://localhost:3000/api/post', {
      headers: {
        authorization: token,
      },
    });

    const post = res.data;

    console.log(post);
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      <h1 className='text-center text-4xl font-bold py-3 tracking-wider text-green-500'>
        hello Next.js
      </h1>
    </main>
  );
}
