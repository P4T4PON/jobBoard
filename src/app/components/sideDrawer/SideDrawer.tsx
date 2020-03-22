import React, {Fragment, ReactElement} from 'react';
import BackDrop from '../backdrop/Backdrop';
import './SideDrawer.css';
import SideLink from './SideLink';
import { sideLink } from '../../../constans';
import { useSelector } from 'react-redux';
import NightMode from '../jobOffers/NightMode';
//todo: nie ma spójności w konwencji nazewnicta, w reszcie komponentów używasz camel case, dlaczego tutaj snake case? ;d
//todo: lepiej typować propsy pod konkretny komponent, props jest mocno ogólnikowe, np. interface SideDrawerProps {}


 //TODO: napisze i otypuje Ci tutaj naprostrszy komponent dla przykładu i postaraj się tak zrobić tutaj i zrozumieć co się dzieje
// interface ExampleButtonProps {
//   text?: string;
//   onClick: () => void;
// }
//
// const ExampleButton: React.FunctionComponent<ExampleButtonProps> = ({text, onClick}: ExampleButtonProps): ReactElement => {
//   return (
//       <div onClick={onClick}>
//         <p>{text ? text : 'Defaultowy text jak nie podasz propsa'}</p>
//       </div>
//   );
// };
//
// export default ExampleButton;

// jakbys robil button to można zorbić coś takiego, że tworzysz:

// type ButtonTypes = 'small' | 'medium' | 'large'
// i w interfejsie dodajesz propa np. type: ButtonTypes
// dzięki temu przy wykorzystywaniu tego, IDE samo Ci bedzie podpowiadac i mówić jakie masz opcje bez żadnego domyślania się ;)

interface Props {
  menu_active: boolean;
  toggleMenu: boolean;
}
//mala uwaga - React.FC i React.FunctionComponent to jest kwestia gustu, nie czepiam się tego :P
const SideDrawer: React.FC<Props> = props => {
  //todo: nie używamy typu "any" to jest Panie zła praktyka, która tak naprawdę Ci nic nie podpowiada
  const isDay = useSelector<any, any>(state => state.isDay);

  const renderBackdrop = () => {
    if (props.menu_active) {
      return <BackDrop toggleMenu={props.toggleMenu} />;
    }
  };

  const renderSideLinks = () => {
    return sideLink.map((link: string[], index: number) => (
      //  todo: tutaj Ci IDE daje pewną wskazówkę jak najedziesz na komponent... ;)
      <SideLink
        link={link[0]}
        target={'blanc'}
        iconClass={link[1]}
        text={link[2]}
        key={index}
        setContact
      />
    ));
  };

  return (
    <Fragment>
      {/*todo: czym jest {' '} ?*/}
      {' '}
      {renderBackdrop()}
      <nav
        className={
          isDay
            ? `side-drawer ${props.menu_active ? 'open' : null}`
            : `side-drawer side-drawerNightMode ${
                props.menu_active ? 'open' : null
              }`
        }
      >
        <h1>justjoin.it</h1>
        <div className="input-laneCenterer">
          {/*todo: diva Panie mozesz domknac*/}
          <div className="input-line"></div>
        </div>
        <ul>
          <SideLink
            link={'/users/sign_in'}
            iconClass={'fas fa-suitcase'}
            text={'Employer Panel'}
            target
            setContact
          />
          {renderSideLinks()}
        </ul>
        <NightMode noIcon={true} showOtherCities setShowOtherCities />
      </nav>
    </Fragment>
  );
};

export default SideDrawer;
