import React from "react"

import newsDataB from '../newsDataB'
import ListItemB from '../ListItemB'

const CategoryLifestyleB = () => {
    return (
        <div className="news__type-b">
            {
                newsDataB.filter((item) => item.theme === "LIFESTYLE").map(({
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

export default CategoryLifestyleB