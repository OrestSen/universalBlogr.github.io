import React from "react"

import newsDataC from '../newsDataC'
import ListItemC from '../ListItemC'

const CategoryInspirationC = () => {
    return (
        <div className="news__type-b">
            {
                newsDataC.filter((item) => item.theme === "INSPIRATION").map(({
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

export default CategoryInspirationC