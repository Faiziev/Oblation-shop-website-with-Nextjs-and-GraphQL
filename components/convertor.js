import { Span, screens } from "../utils/styling";
import { useMediaQuery } from '@mui/material';

export const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  if (obj) {
    if (obj.bold) {
      modifiedText = (<Span kind={tablet ? 'b3' : 'b1'} key={index}>{text}</Span>);
    }

    if (obj.italic) {
      modifiedText = (<Span kind={tablet ? 'i3' : 'i1'} key={index}>{text}</Span>);
    }

    if (obj.underline) {
      modifiedText = (<Span kind={tablet ? 'u3' : 'u1'} key={index}>{text}</Span>);
    }
  }

  switch (type) {
    case 'heading-three':
      return <Span kind={tablet ? 'b3' : 'b1'} key={index} style={{ marginBottom: 4, fontWeight: 500, whiteSpace: 'nowrap', textOverflow: '"-"' }} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</Span>;
    case 'paragraph':
      return <Span kind={tablet ? 'h3' : 'h1'} key={index} style={{ marginBottom: 8 }}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</Span>;
    case 'heading-four':
      return <Span kind={tablet ? 'b3' : 'b1'} key={index} style={{ marginBottom: 4 }} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</Span>;
    case 'image':
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
  }
};