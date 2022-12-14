import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import { Link } from 'gatsby';

export default function CoverImage({ type, title, fluid, slug }) {
    const image = (
        <GatsbyImage
            style={{ display: 'block', borderRadius: '20px' }}
            image={fluid}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug
            })}
        />
    );
    return (
        <div className="-mx-5 sm:mx-0">
            {slug ? (
                <Link to={`/${type}/${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
