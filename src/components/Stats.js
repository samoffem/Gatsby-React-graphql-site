import React from 'react'
import styled from 'styled-components'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

const data = [
    {
        icon: (<GiEarthAfricaEurope css={`color: #047bf1;`} />),
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique places",
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e;`} />),
        title: "1 Million Trips Made",
        desc: "Over 1 Million trips completed last year",
    },
    {
        icon: (<MdTimer  css={`color: #f34f2e;`}/>),
        title: "Fastest Support",
        desc: "Access our support team 24/7",
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576;`} />),
        title: "Best Deal",
        desc: "We Offer the best prices",
    },
]
const Stats = () => {
    return (
        <StatsContainer id="careers">
            <Heading>Why Choose Us?</Heading>
            <Wrapper>
                {data.map((item, index)=>{
                    return(
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) /2);
`
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    padding: 0 2rem;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`
const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`
const Icon = styled.div`
    font-size:3rem;
    margin-bottom: 1rem;
`
const Title = styled.h3`
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin-bottom: 0.5rem;
`
const Description = styled.p`
    font-size: 1.3rem;
`