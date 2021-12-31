import Profile from 'templates/Profile';
import type { CardsListProps } from 'components/CardsList';
import CardsList from 'components/CardsList';
import mockCards from 'components/PaymentOptions/mock';

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps() {
  return { props: { cards: mockCards } };
}
