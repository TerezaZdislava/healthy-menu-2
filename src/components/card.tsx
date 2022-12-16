import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import '../styles/components/card.scss';
import { SvgIcon } from '@mui/material';

function Card() {
  const data = [
    {
      icon: FlagRoundedIcon,
      name: 'Goal',
      selected: 'Reduce weight',
      text: 'lorem ipsum lorem ipsum lorem ipsum ',
    },
    {
      icon: ElectricBoltRoundedIcon,
      name: 'Calories',
      selected: '1893 kcal',
      text: 'lorem ipsum lorem ipsum lorem ipsum ',
    },
    {
      icon: RestaurantRoundedIcon,
      name: 'Diet',
      selected: 'Lactose free',
      text: 'lorem ipsum lorem ipsum lorem ipsum ',
    },
  ];
  return (
    <div className="cardsContainer">
      {data.map(function (card: any, i: number) {
        return (
          <div className="card" key={i}>
            <div className="icon-background">
              <SvgIcon component={card.icon} />
              {/* <img className="img1" /> */}
            </div>
            <div className="text">
              <span className="top-headline">{card.name}</span>
              <h2>{card.selected}</h2>
              <span>{card.text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
