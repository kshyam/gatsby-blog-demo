import React, { useState } from 'react';
import Container from '../components/container';
import HeroPost from '../components/common/hero-post';
import MoreStories from '../components/common/more-stories';
import { graphql, Link } from 'gatsby';
import SearchBar from '../components/common/search';
import { useFlexSearch } from 'react-use-flexsearch';
import styled from '@emotion/styled';
import bgPattern from '../assets/images/backgroundPattern.png';
import bg from '../assets/images/bg.png';
import { font1, font5 } from '../assets/globalStyles';
import { Grid, IconButton } from '@mui/material';
import Footer from '../components/footer';
import GetStarted from '../components/get-started';
import SignUp from '../components/sign-up';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import HomeIcon from '@mui/icons-material/Home';

const MainContainer = styled('div')`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 20px 80px 20px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 50px 20px 50px;
    }

    @media (min-width: 1535px) {
        padding: 80px 140px 50px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 30px 100px 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 20px 40px 20px 40px;
    }
`;

const PostsContainer = styled('div')`
    background-image: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 60px 80px 40px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px 50px 20px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 140px 50px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 60px 100px 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 40px 20px 40px;
    }
`;

const Title = styled('span')`
    ${font5};
    font-size: 60px;
    line-height: 90px;
    color: #ffffff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 50px;
        line-height: 77px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 39px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 29px;
        line-height: 32px;
    }

    @media (max-width: 599px) {
        font-size: 24px;
        line-height: 27px;
    }
`;

const Sub = styled('span')`
    padding: 20px 0px 0px 0px;
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #ffffff;
    text-align: left;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 1199px) {
        padding: 10px 0px 0px 0px;
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        padding: 10px 0px 0px 0px;
        font-size: 12px;
        line-height: 20px;
    }
`;

const TextContainer = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0px 40px 0px;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

const SearchGrid = styled(Grid)`
    @media (max-width: 1199px) {
        padding: 20px;
    }
`;

const NoResultsGrid = styled(Grid)`
    padding: 100px;
    display: flex;
    justify-content: center;
    @media (max-width: 1199px) {
        padding: 0px 0px 40px 0px;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const Text = styled('span')`
    ${font1};
    font-size: 14px;
    line-height: 27px;
    color: #ffffff;
    text-align: left;
`;

export default function Blog({
    data: {
        localSearchBlog: { index, store },
        allBlogs,
        site,
        blog
    }
}) {
    const { search } = typeof window !== 'undefined' && window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const results = useFlexSearch(searchQuery, index, store);

    const posts = allBlogs.nodes;
    const allPostsData = posts.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <Container>
            {/* <HelmetDatoCms seo={blog.seo} favicon={site.favicon} /> */}
            <MainContainer>
                <Grid item>
                    <Grid container alignItems={'center'}>
                        <Grid item>
                            <NavLink to="/">
                                <IconButton>
                                    <HomeIcon style={{ color: '#ffffff' }} />
                                </IconButton>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <Text>/ Blog</Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <TextContainer container>
                        <Grid item display={'flex'} flexDirection={'column'}>
                            <Title>{'Blog'}</Title>
                            <Sub>{'Simplest Container Native CI/CD Platform'}</Sub>
                        </Grid>
                        <SearchGrid item>
                            <SearchBar
                                label={'Search in Blog'}
                                type="blog"
                                searchResults={searchQuery ? results : null}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                            />
                        </SearchGrid>
                    </TextContainer>
                </Grid>
                {allPostsData.length > 0 && (
                    <HeroPost
                        type={'blog'}
                        title={allPostsData[0].title}
                        coverImage={allPostsData[0].coverImage}
                        date={allPostsData[0].date}
                        author={allPostsData[0].author}
                        slug={allPostsData[0].slug}
                        description={allPostsData[0].description}
                    />
                )}

                {allPostsData.length === 0 && (
                    <NoResultsGrid container>
                        <Title>{'No results found'}</Title>
                    </NoResultsGrid>
                )}
            </MainContainer>
            {allPostsData.length > 1 && (
                <PostsContainer>
                    <MoreStories type={'blog'} posts={allPostsData.slice(1)} />
                </PostsContainer>
            )}
            <GetStarted />
            <SignUp />
            <Footer />
        </Container>
    );
}

export const query = graphql`
    {
        localSearchBlog {
            index
            store
        }
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        blog: datoCmsBlog {
            seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
        }
        allBlogs: allDatoCmsBlog(sort: { fields: date, order: DESC }, limit: 20) {
            nodes {
                title
                slug
                description
                date
                content {
                    value
                }
                coverImage {
                    large: gatsbyImageData(width: 1500)
                    small: gatsbyImageData(width: 760)
                }
                author {
                    name
                    role
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
`;
