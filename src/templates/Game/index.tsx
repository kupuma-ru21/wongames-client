import type { GalleryProps } from 'components/Gallery';
import type { GameInfoProps } from 'components/GameInfo';
import GameInfo from 'components/GameInfo';
import Base from 'templates/Base';
import * as S from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryProps;
};

const Game = ({ cover, gameInfo }: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
      </S.Main>
    </Base>
  );
};

export default Game;
