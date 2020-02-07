import React, { Component } from 'react';
import './AddOffer.css';
import tech from './technology_header.svg';
import plFlag from './pl.png';
import ukFlag from './uk.png';
import Doc from './znanylekarz.png';
import Owl from './owls.png';
import Vdlogo from './vdlogo.png';
import Dev from './devsdata.png';
import Schib from './schibsted.png';
import Partners from './partners.svg';
import Rocket from './rocket.svg';
import Bar from './bar.svg';
import Brain from './brain.svg';
import Medal from './medal.svg';
import Macbook from './macbook.png';
import Slider from 'infinite-react-carousel';
//TODO: Stwórz folder assets w globalnym folderze i w nim umieść odpowiednio obrazki etc również posortowane w odpowiednio nazwane foldery i stamtąd importuj (to się dotyczy assetów całego projektu)
//TODO: zamień na komponent funkcyjny
export class AddOffer extends Component {
  state = {
    counter: 1,
    style: true,
    pl: true,
    myRef: React.createRef()
  };
  //TODO: nieużywany jest nextSlide i prevSlide, więc po co tu one?
  nextSlide = () => {
    this.setState({ counter: +1 });
    this.setState({ style: true });
  };

  prevSlide = () => {
    this.setState({ counter: -1 });
    this.setState({ style: false });
  };

  changeLanguageToPL = () => {
    this.setState({ pl: true });
  };

  changeLanguageToENG = () => {
    this.setState({ pl: false });
  };
//TODO: przeogromny komponent, porozbijaj go na wiele mniejsze komponenty, a tam gdzie coś powielasz to po zrób jeden reużywalny komponent i po nim mapuj
  //TODO: popraw wszystkie puste w środku tagi, aby były samozamykające się
  //TODO: pamiętaj o dekonstrukcji propsów (w tym wypadku wartości state'a, ale i tak proszę, abyś zamienił to na funkcyjny komponent
  render() {
    return (
      <div className="add-offer">
        <div className="intro-header">
          <div className="intro-inner">
            <div className="text">
              <p>
                {this.state.pl
                  ? 'Dzięki nam dotrzesz skutecznie do społeczności ponad 200 tysięcy polskich programistów'
                  : 'Thanks to us you will effectively reach the community of over 200,000 Polish developers '}
              </p>
              <img src={tech} alt="" />
            </div>
          </div>
        </div>

        <div className="pricing-table">
          <div className="language-switch">
            <div className={this.state.pl ? 'flag opacity' : 'flag '}>
              <img src={ukFlag} onClick={this.changeLanguageToENG} alt="" />
            </div>
            <div className={this.state.pl ? 'flag' : 'flag opacity'}>
              <img src={plFlag} onClick={this.changeLanguageToPL} alt="" />
            </div>
          </div>
          <h1>
            {this.state.pl
              ? 'Poznaj ogłoszenia na Just Join IT'
              : 'Get to know job ads on Just Join IT'}
          </h1>

          <div className="price-offers">
            <div className="price-card">
              <div className="card-header">
                <div className="header">Basic</div>
                <div className="price">
                  <div className="value">390</div>
                  <div className="currency">PLN</div>
                </div>
                <span className="after"></span>
              </div>
              <div className="description">
                <ul className="benefits">
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Ogłoszenie na 30 dni'
                      : 'Offer for 30 days '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>
                    {this.state.pl
                      ? 'Ogłoszenie w prasówce technologicznej'
                      : 'Job ad in technological summaries'}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Brak Customer Care'
                      : 'No Individual Customer Care '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl ? 'Bez odświeżeń' : 'No bump ups '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Brak promocji w Social Media'
                      : 'No promotion in Social Media '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Brak indywidualnego copy'
                      : 'No individual copy '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Brak Social Boost - płatna kampania marketignowa w social media na budżecie klienta'
                      : 'No Social boost - paid job ads promotion in social media with budget provided by the client '}
                  </li>
                </ul>
                <div className="widdth">
                  {' '}
                  <div className="price-button">
                    {this.state.pl ? 'Kup ogłoszenie' : 'Post a job'}
                  </div>
                </div>
              </div>
            </div>

            <div className="price-card">
              <div className="recomended-text">
                {this.state.pl ? 'Najczęściej wybierany' : 'Recommended'}
              </div>
              <div className="card-header no-padding">
                <div className="header">Premium</div>
                <div className="price ">
                  <div className="value">490</div>
                  <div className="currency">PLN</div>
                </div>
                <span className="after margin-btm"></span>
              </div>
              <div className="description">
                <ul className="benefits no-padd">
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>
                    {this.state.pl
                      ? 'Ogłoszenie na 30 dni'
                      : 'Offer for 30 days '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>
                    {this.state.pl
                      ? 'Ogłoszenie w prasówce technologicznej'
                      : 'Job ad in technological summaries'}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Dedykowany opiekun Customer Care'
                      : 'Individual Customer Care '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'automatyczne odświeżenie'
                      : '1 automatic bump-up '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Brak promocji w Social Media'
                      : 'No promotion in Social Media '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Brak indywidualnego copy'
                      : 'No individual copy '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-frown"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Brak Social Boost - płatna kampania marketignowa w social media na budżecie klienta'
                      : 'No Social boost - paid job ads promotion in social media with budget provided by the client '}
                  </li>
                </ul>
                <div className="widdth">
                  {' '}
                  <div className="price-button">
                    {' '}
                    {this.state.pl ? 'Kup ogłoszenie' : 'Post a job'}
                  </div>
                </div>
              </div>
            </div>

            <div className="price-card">
              <div className="card-header">
                <div className="header">Business</div>
                <div className="price">
                  <div className="value">790</div>
                  <div className="currency">PLN</div>
                </div>
                <span className="after"></span>
              </div>
              <div className="description">
                <ul className="benefits">
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>
                    {this.state.pl
                      ? 'Ogłoszenie na 30 dni'
                      : 'Offer for 30 days '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>
                    {this.state.pl
                      ? 'Ogłoszenie w prasówce technologicznej'
                      : 'Job ad in technological summaries'}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>
                    {this.state.pl
                      ? 'Dedykowany opiekun Customer Care'
                      : 'Individual Customer Care '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>{' '}
                    {this.state.pl
                      ? '2 automatyczne odświeżenia'
                      : '2 automatic bump-ups '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Indywidualna promocja w Social Media'
                      : 'Individual promotion in Social Media '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Indywidualne copy ogłoszenia + audyt'
                      : 'Individual job ad copy + audit '}
                  </li>
                  <li>
                    <div>
                      <i className="far fa-check-circle"></i>
                    </div>{' '}
                    {this.state.pl
                      ? 'Możliwy Social Boost - płatna kampania marketignowa w social media na budżecie klienta'
                      : ' Optional Social boost - paid job ads promotion in social media with budget provided by the client '}
                  </li>
                </ul>
                <div className="widdth">
                  {' '}
                  <div className="price-button">
                    {' '}
                    {this.state.pl ? 'Kup ogłoszenie' : 'Post a job'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recomendation-card">
          <div className="main-grid">
            <div className="row">
              <h1>Rekomendacje</h1>
              <div className="carousel-box">
                <div className="side-nav">
                  <div className="prev" onClick={this.state.myRef.slickPrev}>
                    {' '}
                    <i className="fas fa-arrow-left"></i>{' '}
                  </div>
                  <div className="next" onClick={this.state.myRef.slickNext}>
                    {' '}
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>

                <Slider dots ref={this.myRef} dotsClass="carousel-dots">
                  <div className="slide">
                    <div className="slide-title">Marta Serafin</div>
                    <div className="slide-sub_title">
                      HR Specialist - DocPlanner / ZnanyLekarz
                    </div>
                    <div className="slide-text">
                      JustJoinIt to portal dla firm, które oczekują dwóch
                      rzeczy. Po pierwsze: wyników. JJIT z porównaniem do
                      konkurencji na rynku po prostu "dowozi". Bez obiecywania
                      niemożliwego oraz bez tracenia czasu dociera do
                      kandydatów, do których nikt wcześniej nie dotarł. Po
                      drugie: to portal, dla tych, którzy szukają
                      nieszablonowego podejścia do marketingu w rekrutacji.
                      Pisaliśmy wspólnie artykuły, braliśmy udział w streamingu,
                      wspólnie stworzyliśmy nasz profil brandowy. JJIT to dla
                      nas nie tablica ogłoszeń o pracę. Dla nas to Partner{' '}
                    </div>
                    <img src={Doc} alt=""></img>
                  </div>
                  <div className="slide correct">
                    <div className="slide-title">Anastazja Shelepava</div>
                    <div className="slide-sub_title">
                      Talent Acquisition Partner - Schibsted Tech Polska
                    </div>
                    <div className="slide-text">
                      Dzięki Justjoin.it udało nam się zatrudnić 5 mocnych
                      developerów w zeszłym roku, co jest dobrym wynikiem w
                      porównaniu do innych portali ogłoszeniowych - otrzymujemy
                      mniej zgłoszeń, ale są one zdecydowanie bardziej
                      wartościowe dla nas. Jesteśmy bardzo zadowoleni ze
                      współpracy, dziękujemy!
                    </div>
                    <img src={Schib} alt=""></img>
                  </div>

                  <div className="slide">
                    <div className="slide-title">Tomasz Potański</div>
                    <div className="slide-sub_title">
                      Managing Partner at DevsData
                    </div>
                    <div className="slide-text">
                      W moim biznesie bardzo ważna jest szybkość reakcji, oferty
                      są pilne, a konkurencja - duża. JJ.it dobrze to rozumie -
                      zapewniając personalny kontakt z klientem - uruchamiało
                      promocje marketingowa i social boost juz tego samego dnia,
                      ktorego dostali zgłoszenie. Jakość kandydatow jest bardzo
                      dobra, i - w przeciwieństwie do pewnego konkurencyjnego
                      portalu na polskim rynku - bardzo podoba mi się to, ze
                      mogę elastycznie, opisowo wyrazić, z czym oferta jest
                      związana, co będzie zadaniem kandydata i jakie są dokładne
                      wymagania. Moim zdaniem najlepszy portal i usługa tego
                      typu w Polsce.
                    </div>
                    <img src={Dev} alt=""></img>
                  </div>
                  <div className="slide owl correct">
                    <div className="slide-title">Jakub Przyborowski</div>
                    <div className="slide-sub_title">
                      Co-Founder & Lead Dev - Owls Department
                    </div>
                    <div className="slide-text">
                      justjoin.it wywróciło branżę do góry nogami. Teraz każda
                      kolejna rekrutacja kończy się dla nas sukcesem, a proces
                      rozwoju zespołu przestał być karkołomny. Najbardziej cenię
                      sobie to, że za portal odpowiadają świetni i zaangażowani
                      ludzie, którzy skutecznie starają się ułatwiać życie
                      pracodawcom i kandydatom.
                    </div>
                    <img src={Owl} alt=""></img>
                  </div>
                  <div className="slide correct">
                    <div className="slide-title">Paulina Brzezińska</div>
                    <div className="slide-sub_title">
                      Recruitment Lead - VentureDevs
                    </div>
                    <div className="slide-text">
                      JustJoin IT to wielowymiarowy portal, w pełni
                      przystosowany do wymogów profesjonalnej rekrutacji IT.
                      Przejrzystość i transparentność ofert to kluczowe
                      kryteria, dla których ten portal wybierają najlepsze firmy
                      i najlepiej wykwalifikowani kandydaci. Oferty pracy,
                      BrandStory oraz inicjatywy takie jak justgeek.it skupiają
                      wokół JustJoin najlepszych specjalistów w branży.
                    </div>
                    <img src={Vdlogo} alt=""></img>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="main-grid">
            <div className="partners-header">
              <div className="partners-text">
                <h1>
                  {this.state.pl
                    ? 'Stali Partnerzy mają \n jeszcze lepiej!'
                    : 'Regular Partners have even more benefits!'}
                </h1>
                {this.state.pl
                  ? 'Proponujemy atrakcyjne warunki za pakiety ogłoszeń'
                  : ' We offer attractive conditions for job ad packages'}
                <p>
                  {this.state.pl
                    ? 'masz pytania?'
                    : 'Do you have any questions?'}
                </p>
              </div>
              <div className="partners-img">
                <img src={Partners} alt=""></img>
              </div>
            </div>
          </div>
          <div className="partners-row">
            <div className="card-section">
              <div className="card-text">
                {this.state.pl
                  ? 'Skontaktuj się z nami pod numerem:'
                  : 'Contact us at:'}
              </div>
              <div className="card-number">+48 737 175 805</div>
            </div>
            <div className="card-section">
              <div className="card-text">
                {this.state.pl ? 'lub napisz do nas:' : 'Or write to us:'}
              </div>
              <div className="card-number">sales@justjoin.it</div>
            </div>
          </div>
        </div>
        <div className="moreaboutus">
          <div className="more-main">
            <div className="text-col">
              <h1>
                {this.state.pl ? 'Nieco więcej o:' : 'A bit more about:'}
                <div className="card-number bigger">Justjoin.it</div>
              </h1>

              <div className="items">
                <div className="item">
                  <div className="more-logo">
                    <img src={Rocket} alt="" />
                  </div>
                  <div className="more-text">
                    <b>
                      {this.state.pl
                        ? 'Najszybciej rozwijający'
                        : 'The Fastest growing'}{' '}
                    </b>
                    {this.state.pl
                      ? 'się portal pracy w branży IT w Polsce'
                      : 'IT job board in Poland'}
                  </div>
                </div>
                <div className="item">
                  <div className="more-logo">
                    <img src={Bar} alt="" />
                  </div>
                  <div className="more-text">
                    {this.state.pl ? 'Ponad' : 'Over'}
                    <b> {this.state.pl ? '8.5 milionów' : '8.5 million'} </b>
                    {this.state.pl
                      ? 'odsłon ogłoszeń w 2018'
                      : 'job ad pageviews in 2018'}
                  </div>
                </div>
                <div className="item">
                  <div className="more-logo">
                    <img src={Brain} alt="" />
                  </div>
                  <div className="more-text">
                    {this.state.pl
                      ? 'Fantastyczna społeczność, wraz z którą rozwijamy nasz'
                      : 'Fantastic community, together with which we develop our'}{' '}
                    <b>job board </b>
                  </div>
                </div>
                <div className="item">
                  <div className="more-logo">
                    <img src={Medal} alt="" />
                  </div>
                  <div className="more-text">
                    {this.state.pl ? 'W ciągu' : 'In the period of'}{' '}
                    <b>{this.state.pl ? '24 miesięcy' : '24 months'}</b>{' '}
                    {this.state.pl
                      ? 'zaufało nam już ponad 1500 marek z 15 krajów'
                      : 'period we’ve been trusted by over 1500 brands from 15 countries'}
                  </div>
                </div>
              </div>
            </div>
            <div className="img-col">
              <img src={Macbook} alt="" />
            </div>
          </div>
          <div className="button-center">
            <div className="price-button foot">
              {this.state.pl ? 'Kup ogłoszenie' : 'Post a job'}
            </div>
          </div>
          <div className="more-footer">
            <div className="made-by">
              <p>made by:</p> justjoin.it{' '}
            </div>
            <div className="more-links">
              <a href="/" target="_blank">
                Just Join IT
              </a>
              <a
                href="/brands/story/just-join-it"
                target="_blank"
                rel="noopener noreferrer"
              >
                About us
              </a>
              <a href="/brands" target="_blank">
                Brand Stories
              </a>
              <a
                href="https://rocketjobs.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rocket Jobs
              </a>
              <a
                href="/terms-and-privacy-policies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms<i className="far fa-file-pdf"></i>
              </a>
              <a
                href="/terms-and-privacy-policies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy<i className="far fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOffer;
