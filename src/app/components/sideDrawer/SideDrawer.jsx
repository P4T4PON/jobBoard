// ewidentnie jest to jakiś wygenerowany kawałek kodu w es5, co to jest i o co wgl chodzi z tym varami tutaj??????????
// poprawnie to to nie jest Panie kolego :O

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Backdrop_1 = require("../backdrop/Backdrop");
require("./SideDrawer.css");
var SideLink_1 = require("./SideLink");
var constans_1 = require("../../../constans");
var react_redux_1 = require("react-redux");
var NightMode_1 = require("../jobOffers/NightMode");
var SideDrawer = function (props) {
    var isDay = react_redux_1.useSelector(function (state) { return state.isDay; });
    var renderBackdrop = function () {
        if (props.menu_active) {
            return <Backdrop_1.default toggleMenu={props.toggleMenu}/>;
        }
    };
    var renderSideLinks = function () {
        return constans_1.sideLink.map(function (link, index) { return (<SideLink_1.default link={link[0]} target={'blanc'} iconClass={link[1]} text={link[2]} key={index} setContact/>); });
    };
    return (<react_1.Fragment>
      {' '}
      {renderBackdrop()}
      <nav className={isDay
        ? "side-drawer " + (props.menu_active ? 'open' : null)
        : "side-drawer side-drawerNightMode " + (props.menu_active ? 'open' : null)}>
        <h1>justjoin.it</h1>
        <div className="input-laneCenterer">
          <div className="input-line"></div>
        </div>
        <ul>
          <SideLink_1.default link={'/users/sign_in'} iconClass={'fas fa-suitcase'} text={'Employer Panel'} target setContact/>
          {renderSideLinks()}
        </ul>
        <NightMode_1.default noIcon={true} showOtherCities setShowOtherCities/>
      </nav>
    </react_1.Fragment>);
};
exports["default"] = SideDrawer;
