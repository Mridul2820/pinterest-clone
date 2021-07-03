import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillBell, AiOutlineSearch } from 'react-icons/ai'
import { GrPinterest } from 'react-icons/gr'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Header = (props) => {
    const [search, setSearch] = useState()

    const searchSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(search)
    }

    return (
        <Wrapper>
            <LogoWrapper>
                <GrPinterest size="26px" />
            </LogoWrapper>
            <HomePage>Home</HomePage>
            <Following>Today</Following>
            <SearchWrap>
                <IconButton>
                    <AiOutlineSearch size="22px" />
                </IconButton>
                
                <form onSubmit={searchSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit"></button>
                </form>
                
            </SearchWrap>
            <IconsWrapper>
                <IconButton>
                    <AiFillBell size="26px"  />
                </IconButton>
                <IconButton>
                    <BsFillChatDotsFill size="24px" />
                </IconButton>
                <IconButton>
                    <FaUserCircle size="24px"  />
                </IconButton>
                <IconButton>
                    <MdKeyboardArrowDown size="26px"  />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 66px;
    padding: 16px 4px;
    color: #000;
`

const LogoWrapper = styled.div`
    color: #e60023;
    cursor: pointer;
    margin: 0 5px;
`
const HomePage = styled.div`
    background: #000000;
    padding: 8px 16px;
    color: #fff;
    border-radius: 999px;
    font-weight: 700;
    margin: 0 5px;
`

const Following = styled(HomePage)`
    background: #fff;
    color: #222;

    &:hover {
        background: #ddd;
    }
`

const SearchWrap = styled.div`
    flex: 1;
    background: #efefef;
    display: flex;
    align-items: center;
    height: 44px;
    width: 100%;
    border-radius: 999px;
    padding: 0 10px;
    margin: 0 10px;

    form {
        flex: 1;
        display: flex;
    }
    
    input {
        border: none;
        background: transparent;
        outline: none;
        width: 100%;
    }

    button {
        display: none;
    }
`
const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const IconButton = styled.div`
    color: #777;
    margin: 0 8px;
`

export default Header
