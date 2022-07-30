import React from 'react'


export const ArrowComponent = ({actionArrow = () => {}}) => {

    return(
        <div className='d-flex justify-content-end position-arrow'>
            <button className='arrow-right' onClick={ () => {actionArrow()} }>
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}
