import React from 'react'

import newsDataС from './newsDataC'
import ListItemC from './ListItemC'


const ListC = () => {
    return (
        <div className="news__type-c">
            {
                newsDataС.map(({
                    id,
                    theme,
                    title,
                    description,
                    name,
                    date,
                    image,
                    author,
                }) => (
                    <div key={id}>
                        <ListItemC 
                            theme={theme}
                            title={title}
                            description={description}
                            name={name}
                            date={date}
                            image={image}
                            author={author}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default ListC