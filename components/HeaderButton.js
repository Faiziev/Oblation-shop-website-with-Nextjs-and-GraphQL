import Link from 'next/link'
import { Stack } from "@mui/material"
import { ADLink } from './../lib/links';
import { Span } from '../utils/styling';

export const HeaderButton = ({href, title}) => {
  return <Link href={`/${href}`} onClick={() => console.log("reset-password")} >
    <Span kind="a3">
      {title}
    </Span>
  </Link>
}