import type {
  QueryGames,
  QueryGamesVariables,
} from 'graphql/generated/QueryGames';
import { QUERY_GAMES } from 'graphql/queries/games';
import type { GamesTemplateProps } from 'templates/Games';
import GamesTemplate from 'templates/Games';
import filterItemsMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from 'utils/apollo';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => {
        return {
          title: game.name,
          developer: game.developers[0].name,
          img: `http://localhost:1337${game.cover?.url}`,
          price: new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(game.price),
        };
      }),
      filterItems: filterItemsMock,
    },
  };
}
