"use strict";
exports.__esModule = true;
var react_1 = require("react");
// Type 'boolean' is not assignable to type '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined'.
var SideLink = function (_a) {
    var link = _a.link, target = _a.target, setContact = _a.setContact, iconClass = _a.iconClass, text = _a.text;
    return (<a href={link} target={target}>
      <li onClick={setContact}>
        <i className={iconClass}></i>
        {text}
      </li>
    </a>);
};
exports["default"] = SideLink;
