import React, { Component } from 'react';

import './TermsAndPolicies.css';

export default class TermsAndPolicies extends Component {
  render() {
    return (
      <div className="backGround">
        <div className="card wide">
          <div className="content">
            <h1>Terms</h1>
            <h3>
              Latest / Aktualny:
              <a
                href="https://bucket.justjoin.it/Regulamin+Just+Join+IT+z+dn.+23.05.2019.pdf"
                target="blanc"
              >
                Terms
                <i class="far fa-file-pdf"></i>
              </a>
            </h3>
            <h3>
              Valid for deals finalized before 23.05.2019 / Dla umów sprzedaży
              zawartych do 23.05.2019:
              <a
                href="https://bucket.justjoin.it/Regulamin+Just+Join+IT+do+dn.+23.05.2019+.pdf"
                target="blanc"
              >
                Terms
                <i class="far fa-file-pdf"></i>
              </a>
            </h3>
          </div>
          <div className="content">
            <h1>Privacy Policies</h1>
            <h3>
              Latest / Aktualny:
              <a
                href="https://bucket.justjoin.it/Polityka+Prywatnos%CC%81ci+Just+Join+IT+z+dn.+23.05.2019.pdf"
                target="blanc"
              >
                Policies
                <i class="far fa-file-pdf"></i>
              </a>
            </h3>
            <h3>
              Valid up to 23.05.2019 / Ważna do 23.05.2019:
              <a
                href="https://bucket.justjoin.it/Polityka+Prywatnos%CC%81ci+Just+Join+IT+do+dn.+23.05.2019.pdf"
                target="blanc"
              >
                Policies
                <i class="far fa-file-pdf"></i>
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
