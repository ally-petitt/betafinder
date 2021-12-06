import React from 'react'

function Iframe({iframe}) {
    return (
        <div dangerouslySetInnerHTML={ {__html:iframe?iframe:""}} />
    )
}

export default Iframe
