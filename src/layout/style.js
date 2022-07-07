import Styled from 'styled-components';

const HeaderStyle = Styled.div`
    .container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px 0;
        .navbar {
            .toggler {
                font-size: 22px;
                margin-right: 20px;
                display: none;
                @media(max-width: 991px) {
                    display: block;
                }    
            }
            button {
                
            }
        }
    }
`;

const FooterStyle = Styled.div`
    footer {
        background-size: cover;
        padding: 70px 0 20px;
        min-height: 700px;
        display: flex;
        align-items: flex-end;
        .row {
            display: flex;
            justify-content: space-between;
            a.social {
                font-size: 15px;
                cursor: pointer;
                color: white;
                text-decoration: none;
                svg {
                    width: 30px;
                    margin-right: 20px;
                }
                &:hover {
                    text-decoration: underline;
                }
            }
            p {
                text-align: right;
                padding-top: 8px;
            }
        }
    }
`;

export {
    HeaderStyle,
    FooterStyle,
    
};