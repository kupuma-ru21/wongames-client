import type { GamesTemplateProps } from 'templates/Games';
import GamesTemplate from 'templates/Games';
import filterItemsMock from 'components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getServerSideProps() {
  return { props: { games: gamesMock, filterItems: filterItemsMock } };
}
