import React from 'react';
import { parseISO, format } from 'date-fns';
import { font1 } from '../../assets/globalStyles';
import styled from '@emotion/styled';

const Text = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: ${(props) => (props.whiteColor ? '#ffffff' : '#5B6987')};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 27px;
    }
`;
export default function Date({ whiteColor, dateString }) {
    const date = parseISO(dateString);
    return (
        <Text whiteColor={whiteColor}>
            <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
        </Text>
    );
}
