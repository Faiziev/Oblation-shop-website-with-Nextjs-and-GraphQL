import Link from 'next/link';
import { Span } from '../utils/styling';

export function HeaderButton({ href, title }) {
  return (
    <Link href={`/${href}`} onClick={() => console.log('reset-password')}>
      <Span kind="a3" className="text-gradient">
        {title}
      </Span>
    </Link>
  );
}
