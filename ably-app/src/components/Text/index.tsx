import type { FC, PropsWithChildren } from 'react';
import { Typography, type TypographyVariant } from '@mui/material';
import { COLOR } from '@/constants/color';

const variant = {
  large: 'subtitle1',
  medium: 'body1',
  small: 'body2',
  largeRed: 'subtitle1',
};

const color: Partial<typeof variant> = {
  large: 'black',
  medium: 'gray',
  small: 'gray',
  largeRed: COLOR.text.pink,
};

interface Props extends PropsWithChildren {
  type?: 'large' | 'medium' | 'small' | 'largeRed';
}

const style = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'block',
};

export const Text: FC<Props> = ({ children, type = 'large' }) => {
  return (
    <Typography variant={variant[type as keyof typeof variant] as TypographyVariant} color={color[type]} sx={style}>
      {children}
    </Typography>
  );
};
