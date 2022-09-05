import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { color2, font1, fontSize20, lineHeight26, lineHeight29 } from '../assets/globalStyles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import path from '../assets/images/dottedPath.png';
import line from '../assets/images/line.png';
import verticalLine from '../assets/images/vertical-line.png';

import { color1, font3, font6, fontSize18 } from '../assets/globalStyles';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: white;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 200px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 70px 0px 30px 0px;
    }
`;

const MainContainer = styled(Grid)`
    margin-top: 40px;
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 599px) {
        margin-top: 30px;
        justify-content: center;
        flex-direction: column;
    }
`;

const Title = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: ${color1};

    @media (max-width: 600px) {
        font-size: 22px;
        line-height: 27px;
    }
`;

const Sub = styled('div')`
    padding: 20px 0px;
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    text-align: center;
    white-space: pre-wrap;
    color: ${color2};

    @media (max-width: 600px) {
        white-space: inherit;
    }
`;

const SubText = styled('div')`
    ${font1};
    font-size: ${fontSize20};
    line-height: 28px;
    color: #9c9494;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 25px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

const Text = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 29px;
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 18px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

const Container = styled(Grid)`
    padding: 32px;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.06);
        border-radius: 20px;

        @media (max-width: 599px) {
            background: none;
            box-shadow: none;
            border-radius: none;
        }
    }

    @media (max-width: 599px) {
        padding: 0px;
    }
`;

const TitleText = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 29px;
    color: ${color1};
    margin: 20px 0px 0px 0px;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 18px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 27px;
        margin: 0px 0px 0px 10px;
    }
`;

const Line1 = styled('img')`
    position: absolute;
    top: 130px;
    left: 100px;
    width: 80%;
    height: 1px;

    @media (max-width: 899px) {
        display: none;
    }

    @media (min-width: 1535px) {
        width: 85%;
    }
`;

const Line2 = styled('img')`
    position: absolute;
    top: 530px;
    left: 100px;
    width: 80%;
    height: 1px;

    @media (max-width: 899px) {
        display: none;
    }

    @media (min-width: 1535px) {
        width: 85%;
    }
`;

const Line3 = styled('img')`
    display: none;

    @media (max-width: 599px) {
        display: flex;
        position: absolute;
        top: 100px;
        left: 140px;
        width: 1px;
        height: 90%;
    }
`;

const Path = styled('img')`
    position: absolute;
    height: 400px;
    right: -110px;
    top: 130px;
    @media (max-width: 899px) {
        display: none;
    }
`;

const GetStartedGrid = styled(Grid)`
    @media (max-width: 599px) {
        display: none;
    }
`;

const GetStarted = styled(Button)`
    padding: 10px;
    background: #345eef;
    border-radius: 15px;
    text-transform: capitalize;
    &:hover {
        background: #345eef;
    }
`;

const ButtonText = styled('span')`
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
`;

const IconGrid = styled(Grid)`
    display: flex;
    flex-direction: column;

    @media (max-width: 599px) {
        flex-direction: row;
        margin: 0px 0px 0px -42px;
    }
`;

const GridContainer = styled(Grid)`
    height: 400px;

    @media (max-width: 599px) {
        height: 100%;
    }
`;

const GetStartedButton = styled(Button)`
    display: none;

    @media (max-width: 599px) {
        display: flex;
        width: 313px;
        height: 50px;
        padding: 10px;
        margin: 50px 0px 0px 50px;
        background: #345eef;
        border-radius: 15px;
        text-transform: capitalize;

        &:hover {
            background: #345eef;
        }
    }
`;

const data = [
    {
        id: 1,
        iconColor: '#ACE49E',
        text: 'Pipeline as code',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 2,
        iconColor: '#FBB8F0',
        text: 'Test Performance',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 3,
        iconColor: '#94D1F4',
        text: 'Test Coverage Reports',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 4,
        iconColor: '#FFD88E',
        text: 'Docker Caching',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 5,
        iconColor: '#FCAEAE',
        text: 'Language Caching',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 6,
        iconColor: '#FFC897',
        text: 'Artifacts Storage',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    }
];

export default function RazoropsPipeline() {
    const [showButton, setShowButton] = useState(0);
    return (
        <BG>
            <Title>Razorops Pipeline</Title>
            <Sub>
                {'Nowadays, the increasingly growing number of mobile\nand computing devices'}
            </Sub>
            <MainContainer container spacing={10}>
                <Line1 src={line} />
                <Line2 src={line} />
                <Path src={path} />
                <Line3 src={verticalLine} />

                {data.map((i) => (
                    <GridContainer key={i.id} item xs={8} sm={6} md={4} lg={4}>
                        <Container
                            onMouseEnter={() => setShowButton(i.id)}
                            onMouseLeave={() => setShowButton(0)}
                            container
                            item
                            spacing={2}>
                            <IconGrid item>
                                <CheckCircleIcon
                                    fontSize={'large'}
                                    sx={{
                                        position: 'relative',
                                        fill: i.iconColor,
                                        background: '#fff'
                                    }}
                                />
                                <TitleText>{i.text}</TitleText>
                            </IconGrid>
                            <Grid item>
                                <SubText>{i.subText}</SubText>
                            </Grid>
                            {showButton === i.id && (
                                <GetStartedGrid item>
                                    <GetStarted>
                                        <ButtonText>Get Started</ButtonText>
                                    </GetStarted>
                                </GetStartedGrid>
                            )}
                        </Container>
                    </GridContainer>
                ))}
                <GetStartedButton>
                    <ButtonText>Get Started</ButtonText>
                </GetStartedButton>
            </MainContainer>
        </BG>
    );
}