import { useContext, forwardRef } from 'react';
import NextLink from 'next/link';
import { Link } from '@mui/material';
// import { observer } from "mobx-react"

// import { CurrentUserContext } from "../../data/user"
import { useRouter } from 'next/router';

export function ADBaseLink({ style, children, ...props }) {
  return (
    <Link
      underline="hover"
      style={{ userSelect: 'none', cursor: 'pointer', ...style }}
      {...props}
    >{children}
    </Link>
  );
}

export function ADLink({ href, children, style, ...other }) {
  const TheLink = forwardRef(({ onClick, href }, ref) => (
    <Link
      ref={ref}
      href={href}
      onClick={onClick}
      underline="hover"
      style={{ userSelect: 'none', cursor: 'pointer', width: 'fit-content', ...style }}
      {...other}
    >{children}
    </Link>
  ));
  TheLink.displayName = 'TheLink';

  return (
    <NextLink href={href} passHref>
      <TheLink />
    </NextLink>
  );
}

// export const ADProtectedLink = observer(({ href, children, style, ...other }) => {
//   const currentUser = useContext(CurrentUserContext)
//   const router = useRouter()

//   if (currentUser.loggedIn)
//     return <ADLink
//       href={href}
//       style={style}
//       {...other}
//     >{children}</ADLink>

//   return <ADBaseLink
//     style={style}
//     onClick={() => currentUser.fail(() => router.push(href))}
//     {...other}
//   >{children}</ADBaseLink>
// })
