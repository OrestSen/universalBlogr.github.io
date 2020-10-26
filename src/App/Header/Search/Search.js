import React from 'react'

const Search = () => {
    return (
        <div className="other">
            <div className="search__header">
                <div className="wrap">
                    <form>
                        <input type="text" className="input" placeholder="" />
                    </form>
                    <i className="fa fa-search" aria-hidden="true" ></i>
                </div>
            </div>
        </div>
    )
}

export default Search