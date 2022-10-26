import { useState } from 'react';
import Image from 'next/future/image';
import { InputLabel, MenuItem, Select, Stack, FormControl, useMediaQuery } from '@mui/material';
import { Span, BORDERRADIUS, screens } from '../utils/styling';
import { BorderedTextField } from './Inputs';
import { CardButton } from './Buttons';

export function ProductImage({ image }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <Stack width={tablet ? '100%' : '60%'} spacing={2}>
      <Image src={image.url} alt={image.alt} sizes="100%" style={{ width: '100%', height: 'auto', borderRadius: BORDERRADIUS[2] }} />
    </Stack>
  );
}

export function ProductDetail({ data }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  return (
    <Stack width={tablet ? '100%' : '40%'}>
      <Stack direction="row" spacing={2}>
        <Span kind="b8">{data.title}</Span>
        <Span kind="b8">•</Span>
        <Span kind="b8" style={{ opacity: 0.7 }}>{data.category}</Span>
      </Stack>
    </Stack>
  );
}

export function ProductForm({ data }) {
  const [type, setType] = useState('');
  const [count, setCount] = useState('');
  const counter = Array.from(Array(15).keys());
  // const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  const border = { border: '1px solid transparent !important', '.MuiOutlinedInput-notchedOutline': { border: '1px solid #D7D4D4 !important' } };

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleCounter = (event) => {
    setCount(event.target.value);
  };
  return (
    <Stack height="100%" justifyContent="space-between">
      <style jsx global>{`
          .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
            background-color: rgba(0, 0, 0, 0.05) !important;
          }
        `}
      </style>
      <Stack spacing={4.7}>
        <Stack direction="row" spacing={2}>
          <Stack width="30%">
            <FormControl fullWidth>
              <InputLabel><Span kind="v3">Adet</Span></InputLabel>
              <Select fullWidth value={count} label="Adet" onChange={handleCounter} sx={border}>
                {counter.map((value) => (
                  <MenuItem value={value} key={value}>
                    <Span kind="h3">{value + 1}</Span>
                  </MenuItem>
                ),)}
              </Select>
            </FormControl>
          </Stack>
          <Stack width="70%">
            <FormControl fullWidth>
              <InputLabel><Span kind="v3">Büyüklüğü</Span></InputLabel>
              <Select fullWidth value={type} label="Büyüklüğü" onChange={handleChange} sx={border}>
                <MenuItem value={10}><Span kind="h3">küçük</Span></MenuItem>
                <MenuItem value={20}><Span kind="h3">orta</Span></MenuItem>
                <MenuItem value={30}><Span kind="h3">büyük</Span></MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <BorderedTextField placeHolder="Ad" />
            <BorderedTextField placeHolder="Soyad" />
          </Stack>
          <BorderedTextField placeHolder="@email" />
        </Stack>
      </Stack>
      <Stack width="100%" direction="row" justifyContent="flex-start" alignItems="flex-end" marginTop="50px">
        <Stack paddingRight="20px">
          <Span kind="b7">{data.price * (count + 1)}₺</Span>
        </Stack>
        <Stack width="100%">
          <CardButton style={{ height: 40, margin: 0 }}>Gönder</CardButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
