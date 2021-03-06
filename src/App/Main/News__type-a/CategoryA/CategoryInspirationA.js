import React from "react"

import newsDataA from '../newsDataA'
import ListItemA from '../ListItemA'

const CategoryInspirationA = () => {
    return (
        <div className="news__type-a">
            {
                newsDataA.filter((item) => item.theme === "INSPIRATION").map(({
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
                            <ListItemA
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

export default CategoryInspirationA