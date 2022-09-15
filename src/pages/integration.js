import React from "react";
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
// import ToolIntegration from "../components/tool-integration";
import Footer from "../components/footer";
import SignUp from "../components/sign-up";



import clientdossier from '../assets/images/clients/1dossier.png';
import clientauzmor from '../assets/images/clients/auzmor.png';
import clientazure from '../assets/images/clients/azure.png';
import clientbitbucket from '../assets/images/clients/bitbucket.png';
import clientdigitalocean from '../assets/images/clients/digitalocean.png';
import clienttrice from '../assets/images/clients/trice.png';

import github from '../assets/images/integration-tools/github-black.svg';
import slack from '../assets/images/integration-tools/slack.webp';
import bitbucket from '../assets/images/integration-tools/bitbucket-blue-logo.png';
import aws from '../assets/images/integration-tools/aws.png';
import digitalocean from '../assets/images/integration-tools/digital-ocean-logo.png';
import gitlab from '../assets/images/integration-tools/gitlab-logo.webp';
import firebase from '../assets/images/integration-tools/firebase-logo.png';
import googlecloud from '../assets/images/integration-tools/google-cloud.png';
import docker from '../assets/images/integration-tools/docker-blue-logo.png';
import kubernetes from '../assets/images/integration-tools/kubernetes.png';
import harbor from '../assets/images/integration-tools/harbor-logo-razorops.png'
import jfrog from '../assets/images/integration-tools/jfrog-logo-razorops.png';
import gke from '../assets/images/integration-tools/GKE-logo.png';
import ibmk8s from '../assets/images/integration-tools/IBM-kubernetes-service-logo.png';
import aks from '../assets/images/integration-tools/AKS-logo.png';
import eks from '../assets/images/integration-tools/amazon_eks_logo.png';
import grunt from '../assets/images/integration-tools/grunt-logo.svg';
import gulp from '../assets/images/integration-tools/gulp-logo.png';
import gradle from '../assets/images/integration-tools/gradle-logo.png';
import maven from '../assets/images/integration-tools/maven-logo.png';
import civo from '../assets/images/integration-tools/civo.png';
import terraform from '../assets/images/integration-tools/terraform-logo.png';
import helm from '../assets/images/integration-tools/helm.png';
import sonarqube from '../assets/images/integration-tools/sonarqube-logo-razorops.png';
import aquasecurity from '../assets/images/integration-tools/aquasecurity-logo.png';

import Container from '../components/container';
import {
    color1,
    color2,
    font1,
    font3,
    font6,
    fontSize18,
    lineHeight29
} from '../assets/globalStyles';

import '../styles/integration.css';
import HeroPost from '../components/blog/hero-post';
import MoreStories from '../components/blog/more-stories';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';



const BG = styled('div')`
    background: white;
    margin-top: 80px;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 70px 100px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 70px 20px 70px 20px;
    }
`;

// const BlueBG = styled('div')`
//     text-align: center;
//     padding-top: 20px;
//     padding-bottom: 20px;
//     background-color: #FFF;
//     margin-top: 80px;

//     @media (min-width: 900px) and (max-width: 1199px) {
//         padding: 70px 80px 70px 80px;
//     }

//     @media (min-width: 600px) and (max-width: 899px) {
//         padding: 70px 50px 70px 50px;
//     }

//     @media (min-width: 1535px) {
//         padding: 70px 100px;
//     }

//     @media (min-width: 1200px) and (max-width: 1535px) {
//         padding: 70px 100px 70px 100px;
//     }

//     @media (max-width: 600px) {
//         padding: 70px 20px 70px 20px;
//     }                   
// `;


const MainContainer = styled(Grid)`
    padding: 0px 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 1535px) {
        padding: 0px;
    }

    @media (max-width: 899px) {
        justify-content: center;
    }

    @media (max-width: 599px) {
        margin-top: 0px;
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
const SubText = styled('div')`
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




// const Slider = styled('div')`
//     height: auto;
//     margin-top: 50px !important;
//     margin: auto;
//     position: relative;
//     width:80% ;
//     place-items: center;
//     overflow: hidden;

//     &::before,
//     &::after{
//         background: linear-gradient(to right,#345def1c 0%,rgba(255,255,255,0) 100%);
//         content: "";
//         height: 100%;
//         position: absolute;
//         width: 15%;
//         z-index: 2;
//     }
//     &::before{
//         left:0;
//         top:0;
//     }
   
//     &::after{
//        right:0;
//        top:0;
//        transform: rotateZ(180deg);
//    }
// `;

// const SlideTrack = styled('div')`
//     display: flex;;
//     width: calc(250px * 17);
//     animation: scroll 40s linear infinite;

//     @keyframes scroll {
//         0%{
//             transform: translateX(0);
//         }
//         100%{
//             transform: translateX(calc(-250px * 9));
//         }
//     }

//     &:hover{
//         animation-play-state: paused;
//     }
// `;

// const SlideBox = styled('div')`
//     height: 200px;
//     width: 240px;
//     display: flex;
//     align-items: center;
//     padding: 8px;
//     perspective: 100px;
// `;

// const Img = styled('img')`
//     width: 210px;
//     margin-right: 10px;
//     transition: transform 1s;
    

//     &:hover{
//         transform: translateZ(20px);
//     }
// `;
const Content = styled('div')`
    display: flex;
    align-items: center;
`;

const Text = styled('span')`
    padding: 0px 0px 0px 10px;
    ${font6};
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: #161614;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 32px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 18px;
        line-height: 32px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const BoxContainer = styled('div')`
    display: flex;
    align-items: center;
    padding: 30px;
    margin: 15px;
    background: #ffffff;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    width: 327px;

    @media (max-width: 1199px) {
        width: -webkit-fill-available;
    }

    @media (max-width: 599px) {
        padding: 20px 10px;
        margin: 0px;
    }
`;

const LeftImg = styled('img')`
    width: 50px;
    height: 50px;

    @media (max-width: 599px) {
        width: 35px;
        height: 35px;
    }
`;

const SubHeading = styled('h1')`
    ${font3}
    color :  #000;
    font-size: 24px;
    font-weight: 900;
    margin-top: 60px;
    margin-bottom: -30px;
`;

const data1 = [
    { id: 1, img: github, text: 'Github' },
    { id: 2, img: bitbucket, text: 'Bitbucket' },
    { id: 3, img: gitlab, text: 'Gitlab' },
    
   
];

const data2 = [
    { id: 1, img: grunt, text: 'Grunt' },
    { id: 2, img: gulp, text: 'Gulp' },
    { id: 3, img: maven, text: 'Maven' },
    { id: 4, img: gradle, text: 'Gradle' },
];

const data5 = [
    { id: 1, img: harbor, text: 'Harbor' },
    { id: 2, img: jfrog, text: 'JFrog' },
    { id: 3, img: docker, text: 'Docker' },

];

const data6 = [
    { id: 1, img: gke, text: 'GKE' },
    { id: 2, img: ibmk8s, text: 'IBM K8s' },
    { id: 3, img: aks, text: 'AKS' },
    { id: 4, img: eks, text: 'EKS' },
    { id: 5, img: civo, text: 'CIVO' },
    

];


const data7 = [
    { id: 1, img: terraform, text: 'Terraform' },
    { id: 2, img: helm, text: 'Helm Chart' },
    { id: 3, img: sonarqube, text: 'Sonarqube' },
    { id: 4, img: aquasecurity, text: 'Aqua Security' },
    
];


export default function Integration({data : {allguides}}){
    const heroPost = allguides.nodes[0];
    const heroPost2 = allguides.nodes;
    const morePosts = allguides.nodes.slice(1);

    
    return(
        <Container>
            <BG>
                <Title>RazorOps Integration</Title>
                <SubText>
                    {'Nowadays, the increasingly growing number of mobile\nand computing devices'}
                </SubText>

                <SubHeading>{'SCM'}</SubHeading>    
                <MainContainer container spacing={3}>
                   
                    {data1.map((i) => (
                        <Grid
                            key={i.id}
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            display={'flex'}
                            justifyContent={'center'}>
                            <BoxContainer>
                                <Content>
                                    <LeftImg alt="" src={i.img} />
                                    <Text>{i.text}</Text>
                                </Content>
                            </BoxContainer>
                        </Grid>
                    ))}
                 </MainContainer>


                 <SubHeading>{'Build Tools'}</SubHeading>      
                 <MainContainer container spacing={3}>
                    
                    {heroPost2.map((i) => (
                        <Grid
                            key={i.id}
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            display={'flex'}
                            justifyContent={'center'}>
                            <BoxContainer>
                                <Content>
                                    <LeftImg alt="" src={i.coverImage} />
                                    <Text>{i.title}</Text>
                                </Content>
                            </BoxContainer>
                        </Grid>
                    ))}

                    {

                    }
                 </MainContainer>

                 <SubHeading>{'Unit Testing Tools'}</SubHeading>      
                 <MainContainer container spacing={3}>
                    
                    {data1.map((i) => (
                        <Grid
                            key={i.id}
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            display={'flex'}
                            justifyContent={'center'}>
                            <BoxContainer>
                                <Content>
                                    <LeftImg alt="" src={i.img} />
                                    <Text>{i.text}</Text>
                                </Content>
                            </BoxContainer>
                        </Grid>
                    ))}
                 </MainContainer>

                 <SubHeading>{'Test Coverage Report Tools'}</SubHeading>      
                 <MainContainer container spacing={3}>
                    
                    {data1.map((i) => (
                        <Grid
                            key={i.id}
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            display={'flex'}
                            justifyContent={'center'}>
                            <BoxContainer>
                                <Content>
                                    <LeftImg alt="" src={i.img} />
                                    <Text>{i.text}</Text>
                                </Content>
                            </BoxContainer>
                        </Grid>
                    ))}
                 </MainContainer>

                 <SubHeading>{'Container Registries'}</SubHeading>      
                 <MainContainer container spacing={3}>
                    
                    {data5.map((i) => (
                        <Grid
                            key={i.id}
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            display={'flex'}
                            justifyContent={'center'}>
                            <BoxContainer>
                                <Content>
                                    <LeftImg alt="" src={i.img} />
                                    <Text>{i.text}</Text>
                                </Content>
                            </BoxContainer>
                        </Grid>
                    ))}
                 </MainContainer>

                 <SubHeading>{'Development Tools- Kubernetes'}</SubHeading>      
                 <MainContainer container spacing={3}>
                    
                    {data6.map((i) => (
                        <Grid
                            key={i.id}
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            display={'flex'}
                            justifyContent={'center'}>
                            <BoxContainer>
                                <Content>
                                    <LeftImg alt="" src={i.img} />
                                    <Text>{i.text}</Text>
                                </Content>
                            </BoxContainer>
                        </Grid>
                    ))}
                 </MainContainer>  

                  <SubHeading>{'Other Tools'}</SubHeading>      
                 <MainContainer container spacing={3}>
                    
                    {data7.map((i) => (
                        <Grid
                            key={i.id}
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            display={'flex'}
                            justifyContent={'center'}>
                            <BoxContainer>
                                <Content>
                                    <LeftImg alt="" src={i.img} />
                                    <Text>{i.text}</Text>
                                </Content>
                            </BoxContainer>
                        </Grid>
                    ))}
                 </MainContainer>  

                 <Container>
            {heroPost && (
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
                      
            </BG>
            {/* <ToolIntegration/> */}
            {/* <BlueBG>
                <Slider>
                    <SlideTrack>
                    {clientdata.map((i)=>(
                        <SlideBox id={i.id}>
                            <Img src={i.img} alt=""/>
                        </SlideBox>
                    ))}
                        
                    </SlideTrack>
                </Slider>
            </BlueBG> */}
            <SignUp />
            <Footer />
        </Container>
    );
};



export const query2 = graphql`
 {
   
    allguides: allDatoCmsHowToGuide(sort: { fields: date, order: DESC }, limit: 20) {
        nodes {
            title
            slug
            excerpt
            date
            coverImage {
                large: gatsbyImageData(width: 1500)
                small: gatsbyImageData(width: 760)
            }
            author {
                name
                picture {
                    gatsbyImageData(
                        layout: FIXED
                        width: 48
                        height: 48
                        imgixParams: { sat: -100 }
                    )
                }
            }
        }
    }
  }
`  