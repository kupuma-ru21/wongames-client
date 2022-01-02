import Base from 'templates/Base';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';
import type { GameCardProps } from 'components/GameCard';
import GameCard from 'components/GameCard';
import type { ItemProps } from 'components/ExploreSidebar';
import ExploreSidebar from 'components/ExploreSidebar';
import { Grid } from 'components/Grid';
import * as S from './styles';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {
  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    return;
  };

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((item) => {
              return <GameCard key={item.title} {...item} />;
            })}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
