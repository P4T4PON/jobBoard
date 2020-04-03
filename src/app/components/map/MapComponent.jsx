import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { mapItems } from '../../../constans'

const MapComponent = () => {

    const zoom = 6;

    const renderIcons = () => {
        return mapItems.map((item, index) => (
            <Marker key={index} position={[item.propLat, item.propLng]} icon={L.icon(
                {
                    iconUrl: item.icon.iconUrl,
                    iconSize: [40, 40],
                    iconAnchor: [0, 0],
                    popupAnchor: [20, 0]
                }

            )}>
                <Popup>
                    {item.popup1} <br /> {item.popup2}
                </Popup>
            </Marker>
        ));
    };

    return (
        <div className='boxBox' >
            <div className='mapBox'>
                <Map className='map' center={51.944636, 19.567038} zoom={zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {renderIcons()}
                </Map>
            </div>
        </div >
    )
}

export default MapComponent


//'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAHFAAABxQG6eNsrAAAMlUlEQVR42u2dXWxb1R3Af+c6sWrnpU6cTKRtvNKypl3y0JCOSk0LEmpLX6AjPEDKQPRrfejXQJq0ou4FtWmLEIxViLVM09qm0IkOMh4KZTyQdBKDJjwkbRKJpCTQoCWh5iV2FNv37OFcf8b2vXauHYN6pMr2jX19zq//7/NhIaVkoVrouedrAI/xrwKEBygnpUsSkfhiGpgGYTzyP+ffX55YqDGIYgIM7fydB6gBliJFTZruRCFlA5j83nibQIpvgQnnuVP+nwzA0M7DThDLgVVKyqIgBDYDTLznNDAE3HKeOzX7owQY2nW4AmhEstxksIUAmNhuIUWf8/zJ6R8FwBg4WB4f8IICjF6/BdgO0jaAoV2HnCAaDFVNGXBJAIy2IaDfef7kbMkADO06VAOsB1Ext/MlB9CwkeIz5/kTEwsKMLT7kBNoQEalLt2gShJg9PNDSPqdF07MFh1gaPehCmATsDj7oHIG6ENSkQHgNJJRGwGC5Aegy3nhxHTRAIZ2H/SAeBgoN5eKrIP1Ac3Az43n3lQpzCB9U8Ao8DVw3XieL0CAEPCJ88IJf8EBhnYfvBdoAlFuTa3mXF9jSG4z4J47OEsAUwEFDJBdwM08zUUIRK/zQvtIwQAa8B6YMwgrAIXchOQJEN7sg8sLYOKrKRDvguzK3d4KgP/mAtEywGR4OQBU0vYE4E2rzvYDVH+XTAHvImRXjgBzgmgJYGjPQQ+SuM2zBtAH7DMeM9vDwgGMtlHgzZidtAbQsInt/nkDDO05UAFiGzIRnglAIVuRtM4d6IIAjF67DPKyRYAKouSKs6N9Om+AoT0HnMDDIBan6VC6gbkR8qgRilAQgG4XBGbyAQiSUYR8CQhYABgNcT5xdrRnjBM1EwltABZbtKc+hHw9SWULkbx7PTh+vSXfj/uQIpc+LjYYkDPA0J4DNXPy2uzwjgLuQtff5Ng4jq0b53MLN1IczQHiqtkdR2pyAmio7vpSgxdrrkWIutpiQlw/u+OIMxcJbEgqfmaDR3HhRcEJt2u+t8oFYkUmVdbSe11LqutGyBeKKnmAdr8ahwwE7bidG4TVMaya3XGkwooENloTBf0FlbsWsbldOLZuguAMcmzcrrt6keIFi+9tzAowtPdABdFKcvbgpxVYTZFb2Y7HwLWISPcXdt96NVK0Wnjf8lQp1PKQvmqgtdjwHFs2orU0Q3CGyHsfF8K6thpjy0kKtbj07XdalL59RYe3fQuOtscACHd0gj32L13Za58lKWyLe+RECVxu4cNriq26ZbufxLFdBc76tevo6dTX7ULb2GyPKqsxmkKM9S/Ry5SS9AlvJY5DzyGW1cbghc++M8cjay3NCLeL8JlL9kmhkAfNPDJqckoBDO3d7zGN+4RcUyyvK+pXUHZwJ7gWxeG9FYenbWzGsX0LosJF+Owl9Os37Px6ryGFN7PFhbNtL3qcF4/5oxJYY8nzZiqZ2xnntazDsevJ2OvIxU4iV7vV3+pX4NjzJMLrQQ6OMHv0VcMe2twvKVoR8qbJu2qAGMClJnesLobtS4IXnCFy9m0ivTdiXjjqSCLvf0zkvauF7MpqpKgGOZnlPUuBIWsSKGguOLymRhy7noq9Dre/gRy7DQjlhQ1HEn7rEnr39WJYkmbgiokEooX27q+xINObCp5h7I7Di7zdacAz1NaAF7nand4LFyakMR3zbNuLNRrwM/N8sbA1Pq2pIeYw5Pd+9Kvx+SBtS3wc+kfdxYygfBZyZI9m0fsWPGSJQUqAp+D+Mi4UU3eKG8FLsWb+AAssfalgoqqbrRJTZCnMWuayArDgEqj39qeVxqhKx1K6tsfUnEjRmqkEWgJY+HpfIIje+ZHqclOylOk9iXDnNR+Sl3uzApCFVmHlYbuQ34yjrW1A1K+IX3//KgRnkqsyCX9fYBVGo1RaIEjkrbchOIOjbXvS9XBHZ3KnNzaXTLdLB6DhQMIn3lCFhO1b42p87YtYOpfOTt4FmAaitnUTom5JsiqncTp3AWaC2P5GLPdNDnn8RExSOVFXi/B6itLXsoWCJOpXIpYtUerodiF7+9F7+5IgRi52IryVyKk7KlsJzhD+098yVqQdOx5F89WC24Wou0fBvvABes+NnwZAUbcEbfNDaE2NyEAQee1z9KtdGTMMOXYbiUDU1aI1NTD7/LGs5atIx7+IGNUPrf5eyg4/S9nhZwi/dg6952bBAIYgdeVVAb7o9/sRq1bGguPIydMKnIUao5zyE379byCVAxHeSqj2qOd1tRCYIfJhd9JUpz4wQqT7Oo6tLTge31wogNNlgN+knDWAzbVAUeWh7NRR5DfjmSeIEldNVbhipf1YC86gDwyj9/ajd/Wkv8XACGxtQdTdk29XB6wANFudPmkHwPCp04iqSkTdUsSyJTE7aCp9gRnk4DD09COn/DB5B33suxTwIkPurAoRcnAk325PWpXAbDNyo3YWDeSUH6LOohNEVVWKDcxjgWU6KffVom28X9nGD6/l22Ozsfs1A2C2ks5oIYyH1tRI2ct/LEhxQNTVUn7ktwree//O3wsLU+Hxl5WfOT0R2rs/25tuAgE7iwqibgmO/TsVyC2bkINfKckEmPLHJdLtQosG026XEd8pxyGqK9WMXE9yUK2tXkHZoWeV2Xjt3HxCmABkn1hyXjw2EQ1jJiw4kvttVeWhYcSqFWgb1sGGdXndx7F9M0wH0QdGwO2i7OlHEfX3EvnomlLb+a1gMHMgE4lx4LfZAYovQNoGkECQ8MnTSprWNiLq4gF1Om8rR1WRVR8bh6k7yNHv0AeHk3TNsbEZvfs6+plLpF8jnauaSLPJl28TAU6Y2MEuhHzG7tqgnLqDTCnh5+tEIvbOlwTU/hJzCdQAys+c9lsIZ7pst/ZuF4627UmVlxJpZmOddl485k9N5YaApixSeAV4xM5eOna1oa1tQH7vx+F2QSCIHBtXq09lVNYEeCsRXo+h6h4IzBA++07c8djuxuUVk3cMpcuFb5kAnETILtTWLXtUePArWNuAqPIgNud22/JXjhRqhUKXhQD6Vpx1wkab0N4D69UhEXMDIkMiqhGyPW4LReaNKimbaoS3UlVfli1FTt1B/8/n6vqypWgt6xBNjYgqkxKUkb7JwWH0aGai/nMz9TfLtbR9DSDkH2IA09vcW86O459lqsb0mWQlk6jlDq2WbdzmBxEbfqX609uH/mU/pExjRi7ehovvJ6d3KZ3Xx8ZhOmg9E/F60B5pIXLhg1yk74oF6evLWM4qP/Pn6dCeA7eyQpTiMkI2YzLhom14AMdTj4NrEfqXfURO/zXz5usktR7O7IWtmjCvB8fTj+b6sVFE4l669Krr7Dg+bVYPNJNCkOJNQ5UzO4idbXGYaxth/y6VcXwzrmyfjWmbcLvVo69Wlbfci9C7e4j88+NYUcG0nCXkmxa+rm/ux9JsNgztOdBE0orVNDZFsA34TSa7In6xEm3zQ8pzVqWfBJJDwwlVlyAYq7GSJTBaA/QkmYbUnUpycAR9dBzZe0NlJtKQxMc3Q4WL8KvnstnA88rzigwlNXVAhbPjeG+6gmq61o9a/1aRNawR0pfJK8uhr4gkAIoWU7VV96kLdUviu43cLrRVK2BtQ0bnEc1GAPTeG9B7Q4U8kyozSZRIx9YWxOoVaE1r0HtvEv7LP7J7XfOwZdpggiUJNKSwBng4q1dTqI7G64WZvXD0mqi/L5bOybHbee8XVqrrQvhqoaoSLUF9Ccyg99xQqd3ASDYvPADypYx1xfj3feLsOD6RE8BkVc4GELcB0WcFIAi0pkYV0tSvhOgcb+q8iExX41sSWwYXTwf9MOVHHx1XjwPDyLHvrIQxau+wJGACcMjZ0d6biZHZpFI/av3g4qx5oxQvGfvmLFWu9d4+VVTtTI7hkirUMlO8ZlSpE7d6ZZLibJUWIV8xynTZ2g+ZVNeSBBpSaH3Lv2BfzCYWasc6Fu+RWQK7lMctwpb/OMQcDp0QchPwDBJ3iQEMIDlnpKMU7dCJ2B1zO/bEB3IfCF+JAExzckcRjz1JD9FSnW6bkfa5FwhgALhM2tX2RT54JwViLkc/uY2ge1t6tS4IwACSK0Z8FyiZo58SIOZz+Jgb5IMgtpG4ZcxegFOGtH2a5GFL6fCxOMR5HX/nAx5E7QjyzRPgKFIMIOSnGadgS+34uwSIdhzA6EYdf7caqAZRbXxudQrAAQPgJIhJlUXwtbmkUZoHMCaBvHsEKHZAvHsIrT0g7x6DbC/IuwdxzxPk3aPg7YR598cI7AU69+cwKoCKHH4Oww/4F/LnMP4PhccDxEU0JlAAAAAASUVORK5CYII='