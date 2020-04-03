import React, { Fragment } from 'react';
//nieuzywany import

const AdditionalInfo = ({ name, companyAddress }) => {
  return (
    <div className="offer-additional-info">
      Informujemy, że administratorem danych jest {name} Sp. z o. o. z siedzibą
      w {companyAddress} (dalej jako "administrator"). Masz prawo do żądania
      dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub
      ograniczenia przetwarzania, prawo do wniesienia sprzeciwu wobec
      przetwarzania, a także prawo do przenoszenia danych oraz wniesienia skargi
      do organu nadzorczego. Dane osobowe przetwarzane będą w celu realizacji
      procesu rekrutacji. Podanie danych w zakresie wynikającym z ustawy z dnia
      26 czerwca 1974 r. Kodeks pracy jest obowiązkowe. W pozostałym zakresie
      podanie danych jest dobrowolne. Odmowa podania danych obowiązkowych może
      skutkować brakiem możliwości przeprowadzenia procesu rekrutacji.
      Administrator przetwarza dane obowiązkowe na podstawie ciążącego na nim
      obowiązku prawnego, zaś w zakresie danych dodatkowych podstawą
      przetwarzania jest zgoda. Dane osobowe będą przetwarzane do czasu
      zakończenia postępowania rekrutacyjnego i przez okres możliwości
      dochodzenia ewentualnych roszczeń, a w przypadku wyrażenia zgody na udział
      w przyszłych postępowaniach rekrutacyjnych - do czasu wycofania tej zgody.
      Zgoda na przetwarzanie danych osobowych może zostać wycofana w dowolnym
      momencie. Odbiorcą danych jest serwis Just Join IT oraz inne podmioty,
      którym powierzyliśmy przetwarzanie danych w związku z rekrutacją.
    </div>
  );
};

export default AdditionalInfo;