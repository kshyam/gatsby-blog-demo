import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';
import styled from '@emotion/styled';
import { font1 } from '../../assets/globalStyles';

const Text = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 28px;
    color: #191e27;
`;
export default function PostBody({ content }) {
    return (
        <div className="flex justify-center m-10 max-w-4xl mx-auto">
            <div className="prose prose-xl prose-blue">
                <Text>
                    <StructuredText
                        data={content}
                        renderBlock={({ record }) => {
                            if (record.__typename === 'DatoCmsImageBlock') {
                                return (
                                    <GatsbyImage
                                        style={{ display: 'block' }}
                                        image={record.image.gatsbyImageData}
                                    />
                                );
                            }
                            return (
                                <>
                                    <p>Don't know how to render a block!</p>
                                    <pre>{JSON.stringify(record, null, 2)}</pre>
                                </>
                            );
                        }}
                    />
                </Text>
            </div>
        </div>
    );
}
