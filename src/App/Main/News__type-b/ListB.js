import React from 'react'

import ListItemB from './ListItemB'
import newsDataB from './newsDataB'

const ListB = () => {
    return (
        <div className="news__type-b">
            {
                newsDataB.map(({
                    id,
                    theme,
                    title,
                    description,
                    name,
                    date,
                    image,
                    author,
                })=>(
                    <div key={id}>
                        <ListItemB
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
export default ListB