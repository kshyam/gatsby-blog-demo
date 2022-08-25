import * as React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { font6, fontSize22, lineHeight29 } from '../assets/globalStyles';
import dossier from '../assets/images/clients/1dossier.png';
import auzmor from '../assets/images/clients/auzmor.png';
import azure from '../assets/images/clients/azure.png';
import bitbucket from '../assets/images/clients/bitbucket.png';
import digitalocean from '../assets/images/clients/digitalocean.png';
import trice from '../assets/images/clients/trice.png';

const BG = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;

    @media (max-width: 1199px) {
        overflow-x: auto;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 20px calc((100% - 852px) / 2) 10px calc((100% - 852px) / 2);
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px calc((100% - 552px) / 2) 10px calc((100% - 552px) / 2);
    }

    @media (min-width: 1535px) {
        padding: 20px 100px 10px 100px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 20px calc((100% - 1152px) / 2) 10px calc((100% - 1152px) / 2);
    }
    @media (max-width: 600px) {
        padding: 20px calc((100% - 335px) / 2) 10px calc((100% - 335px) / 2);
    }
`;

const Title = styled('div')`
    padding: 100px 0px 0px 0px;
    ${font6};
    font-size: ${fontSize22};
    line-height: ${lineHeight29};
    text-align: center;
    color: #5b5b5b;
`;

const TopGrid = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 899px) {
        min-width: 1000px;
        justify-content: flex-start;
    }
`;

const ImageGrid = styled(Grid)`
    display: flex;
    align-items: center;
    padding: 5px;

    @media (max-width: 600px) {
        margin-right: 10px;
    }
`;

const Img = styled('img')`
    width: 150px;
    filter: gray;
    -webkit-filter: grayscale(1);
    -webkit-transition: all 0.8s ease-in-out;
    &:hover {
        filter: none;
        -webkit-filter: grayscale(0);
        -webkit-transform: scale(1.01);
    }
    @media (max-width: 899px) {
        width: 130px;
    }
`;

export default function TrustedBy() {
    return (
        <>
            <Title>Trusted By</Title>
            <BG>
                <TopGrid container>
                    <ImageGrid item>
                        <Img src={dossier} alt="" />
                    </ImageGrid>
                    <ImageGrid item>
                        <Img src={auzmor} alt="" />
                    </ImageGrid>
                    <ImageGrid item>
                        <Img src={azure} alt="" />
                    </ImageGrid>
                    <ImageGrid item>
                        <Img src={bitbucket} alt="" />
                    </ImageGrid>
                    <ImageGrid item>
                        <Img src={digitalocean} alt="" />
                    </ImageGrid>
                    <ImageGrid item>
                        <Img src={trice} alt="" />
                    </ImageGrid>
                </TopGrid>
            </BG>
        </>
    );
}