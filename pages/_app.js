import '../styles/globals.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div key={router.asPath} className="page-transition">
      <Component {...pageProps} />
    </div>
  );
}
