import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <FooterMain>
            <p>
                Copyright &copy; {year} by 
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/Mridul2820">
                    Mridul
                </a> 
                . This is a Clone Version. 
            </p>
        </FooterMain>
    )
}

const FooterMain = styled.footer`
    padding: 15px 0;
    text-align: center;
    font-size: 15px;
    color: #555;
    border-top: 1px solid #ccc;
    height: 45px;

    a {
        margin-left: 5px;
        color: #333;
    }
`

export default Footer