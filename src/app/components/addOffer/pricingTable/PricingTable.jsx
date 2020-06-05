import React from 'react'
import PriceCard from './priceCard/PriceCard'
import CountryFlag from './flag/CountryFlag'
import { pricingTable, priceCardBasic, priceCardPremium, priceCardBussiness } from '../../../../constans'

const PricingTable = ({ pl, ukFlag, plFlag, togglePl }) => {
    return (
        <div className="pricingTable">
            <div className="languageSwitch">
                <CountryFlag pl={pl} flag={ukFlag} togglePl={togglePl} value={false} />
                <CountryFlag pl={pl} flag={plFlag} togglePl={togglePl} value={true} />
            </div>
            <h1>{pl ? pricingTable.pl : pricingTable.eng}</h1>
            <div className="priceOffers">
                <PriceCard pl={pl} type={'Basic'} price={'390'} priceCard={priceCardBasic} />
                <PriceCard pl={pl} type={'Premium'} price={'490'} priceCard={priceCardPremium} />
                <PriceCard pl={pl} type={'Business'} price={'790'} priceCard={priceCardBussiness} />
            </div>
        </div>
    )
}

export default PricingTable
