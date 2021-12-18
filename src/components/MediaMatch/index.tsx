import React from 'react';
import * as S from './styles';
import type { MediaMatchProps } from './styles';

type Props = { children: React.ReactNode } & MediaMatchProps;

const MediaMatch = ({ children, ...rest }: Props) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
};

export default MediaMatch;
