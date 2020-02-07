import React from 'react';
//TODO: dekonstrukcja propsow, czym jest fooOnBlur i fooOnChange? (zle nazwy)
const AnimatedInput = props => {
  return (
    <div className="passwordChange-input">
      <div className={props.divClass}>
        <i className={props.inputClass}></i>
      </div>

      <div className={props.className}>
        <div>
          <input
            type={props.type}
            name={props.name}
            autoComplete="off"
            required
            spellCheck="false"
            value={props.value}
            onChange={props.fooOnChange}
            onBlur={props.fooOnBlur}
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">{props.span}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AnimatedInput;
