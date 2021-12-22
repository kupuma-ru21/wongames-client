import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  return <h1>{router.query.slug}</h1>;
}
