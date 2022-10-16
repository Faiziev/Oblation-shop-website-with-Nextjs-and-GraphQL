import { Link } from '@mui/material';

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
