import Styled from 'styled-components';
import BG from './assets/images/image.jpg'

const StyleWrapper = Styled.div`
    font-family: Roboto;
    margin: 0;
    background-image: url(${BG});
    background-position: center top;
    background-size: cover;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #2340a5;
    p {
        font-size: 16px;
        color: #999;
        transition: all 0.5s;
        line-height: 24px;
    }

    a {
        transition: all 0.5s;
        color: #000;
        text-decoration: none;
    }

    label,
    ul,
    li {
        letter-spacing: 0.5px;
        transition: all 0.5s;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        letter-spacing: 0.5px;
        transition: all 0.5s;
        font-size: 50px;
        color: #000;
    }

    * {
        text-decoration: none;
    }

    .btn-check:focus+.btn,
    .btn:focus {
        outline: 0;
        box-shadow: unset;
    }

    button,
    a:hover,
    a:focus {
        text-decoration: none;
        outline: none;
        color: #000;
    }

    input,
    textarea,
    select {
        outline: none;
        color: #898989;
    }

    input:focus,
    textarea:focus,
    select:focus,
    button:focus,
    .form-control:focus {
        outline: none;
        box-shadow: none;
    }

    ::-webkit-input-placeholder {
        /* Edge */
        color: rgba(255, 255, 255, 0.5);
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: rgba(255, 255, 255, 0.5);
    }

    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

    ul {
        padding: 0px;
        list-style-type: none;
        margin: 0;
    }

    .section-main {
        padding: 90px 0;
    }

    .banner .ri-img-cnt img {
        width: 100%;
    }

    .top-heading {
        margin-bottom: 40px;
        margin-top: 40px;
    }

    .top-heading h2 {
        color: #B2C4FF;
        font-weight: bold;
        font-size: 36px;
        line-height: 38px;
    }

    .wallet-button {
        position: absolute;
        top: 32px;
        right: 100px;
        z-index: 1;
    }
    
    .wallet-button .btn {
        background: linear-gradient(90deg, #1E3994 0%, #00186A 100%);
        box-shadow: 0px 5px 20px rgba(4, 28, 112, 0.6);
        border-radius: 10px;
        border: 0;
        color: #fff;
        padding: 12px 16px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: .5px;
        display: flex;
        align-items: center;
    }
    
    .wallet-button .btn span img {
        width: 42px;
    }
    
    .wallet-button .btn span {
        display: inline-block;
        margin-right: 10px;
    }

    .countdown-main {
        text-align: center;
        h1 {
            color: #B2C4FF;
            font-weight: bold;
            font-size: 40px;
            line-height: 38px;
        }
    }

    .countdown-main li {
        display: inline-block;
        color: #B3C4FF;
        font-size: 20px;
        list-style-type: none;
        padding: 0 20px;
        text-transform: uppercase;
        position: relative;
    }

    .countdown-main li+li:before {
        content: ":";
        position: absolute;
        left: -11px;
        top: 0px;
        background: linear-gradient(178.85deg, #FFFFFF 36.72%, #666666 48.42%, #FFFFFF 58.07%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-size: 4.5rem;
    }

    .countdown-main li .dt-mn {
        font-size: 4.5rem;
        background: radial-gradient(50% 50% at 50% 50%, #1E3994 0%, #00186A 100%);
        box-shadow: 0px 4px 30px rgb(0 0 0 / 30%);
        border-radius: 10px;
        width: 118px;
        margin-bottom: 10px;
    }

    .countdown-main li span {
        display: block;
        background: linear-gradient(178.85deg, #FFFFFF 36.72%, #666666 48.42%, #FFFFFF 58.07%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    .inputform-section {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        text-align: center;
        position: relative;
    }

    .inputform-section span {
        position: absolute;
    }

    .inputform-section .space-craft img {
        width: 318px;
    }

    .inputform-section .rocket img {
        width: 190px;
    }

    .inputform-section .space-craft {
        bottom: -87px;
        left: 25px;
        z-index: 0;
    }

    .inputform-section .rocket {
        top: -202px;
        right: 30px;
        z-index: 0;
    }

    .frm-single {
        width: 400px;
        position: relative;
        margin: 0 auto;
    }

    .frm-single+.frm-single {
        margin-top: 15px;
    }

    .frm-single input {
        width: 100%;
        border: 0;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        color: #ffffff;
        padding: 16px 90px 16px 20px;
        &.social {
            padding: 16px 108px 16px 66px;
        }
    }

    .frm-icon {
        position: absolute;
        top: 8px;
        left: 15px;
    }

    .frm-single .frm-icon span {
        display: flex;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        width: 41px;
        height: 41px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .frm-single .frm-icon span img {
        width: 20px;
    }

    .btn-main {
        position: absolute;
        top: 8px;
        right: 15px;
    }

    .btn-main .btn {
        background: linear-gradient(90deg, #6002D3 0%, #1CB2E7 100%);
        border-radius: 10px;
        border: 0;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        color: #FFFFFF;
        letter-spacing: .5px;
        padding: 8px 18px;
    }

    .imgcrdbx-main ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px;
    }

    .imgcrdbx-main ul li {
        padding: 10px;
        width: 33%;
    }

    .imgcrdbx-main ul li .card-box {
        border-radius: 22px;
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    .btm-img {
        text-align: center;
    }

    .btm-img img {
        width: 100%;
        max-width: 100%;
    }

    .footer-main {
        background: #2442AA;
        padding: 16px 0;
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-main .social_list {
        display: flex;
        margin: 0 -6px;
    }

    .footer-main .social_list li {
        padding: 0 5px;
    }

    .footer-main .social_list li a {
        display: flex;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        width: 42px;
        height: 42px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .cmpny-copyright {
        color: rgba(255, 255, 255, 0.5);
        font-size: 16px;
    }

    @media screen and (max-width: 767px) {
        body {
            background-size: 100% 100%;
        }
        .frm-single {
            width: 100%;
            &.purchase {
                margin-top: 15px;
            }
        }
        .btn-main {
            right: 10px;
        }
        .btn-main .btn {
            padding: 8px 18px;
            font-size: 14px;
        }
        .frm-icon {
            left: 10px;
        }
        .frm-single input {
            padding: 16px 95px 16px 20px;
            &.social {
                padding: 16px 95px 16px 58px;
            }
        }
        .inputform-section .space-craft img {
            width: 150px;
        }
        .inputform-section .space-craft {
            bottom: -50px;
            left: 15px;
        }
        .inputform-section .rocket {
            top: -108px;
            right: 10px;
        }
        .inputform-section .rocket img {
            width: 100px;
        }
        .top-heading h2 {
            font-size: 28px;
            line-height: 25px;
        }
        .section-main {
            padding: 60px 0;
        }
        .imgcrdbx-main ul li {
            width: 50%;
        }
        
        .countdown-main li+li:before {
            display: none;
        }
        .countdown-main li+li {
            margin-top: 15px;
        }
        .countdown-main li {
            font-size: 16px;
        }
        .countdown-main ul {
            max-width: 300px;
            margin: 0 auto;
        }
        .countdown-main li .dt-mn {
            font-size: 42px;
            width: 100px;
        }
        .imgcrdbx-main ul li .card-box img {
            width: 100%;
        }
        .footer-inner {
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
        .Social_list {
            margin-bottom: 12px;
        }
        .footer-main .social_list li a {
            width: 36px;
            height: 36px;
        }
      }
      
      @media screen and (max-width: 450px) {
        .imgcrdbx-main ul {
            margin: 0 -5px;
        }
        .imgcrdbx-main ul li {
            padding: 5px;
        }
      }
`;

const PurchaseStyle = Styled.div`
    // padding-top: 60px;
    // font-family: Montserrat, sans-serif;
    // padding-bottom: 50px;
    // position: relative;
    // .right-panel {
    //     position: relative;
    // }
    // // .row {
    // //     padding: 20px 0;
    // // }
    // img.site-item {
    //     position: absolute;
    //     &.item1 {
    //         width: 200px;
    //         right: 0;
    //         top: 30px;
    //     }
    //     &.item2 {
    //         width: 300px;
    //         left: 10px;
    //         top: 300px;
    //     }
    //     &.item3 {
    //         width: 200px;
    //         right: 10px;
    //         top: 600px;
    //     }
    //     &.item4 {
    //         width: 200px;
    //         left: 10px;
    //         top: 1000px;
    //     }
    // }
    
    // .count-down {
    //     text-align: center;
    //     padding: 50px 0;
    //     position: relative;
    //     display: flex;
    //         .item {
    //             position: relative;
    //             &:after, &:before {
    //                 content: " ";
    //                 position: absolute;
    //                 width: 10px;
    //                 height: 10px;
    //                 border-radius: 50%;
    //                 background-color: white;
    //                 right: -7px;
    //             }
    //             &:before {
    //                 top: 50px;
    //             }
    //             &:after {
    //                 top: 100px;
    //             }
    //             &:last-child {
    //                 &:after, &:before {
    //                     display: none;
    //                 }
    //             }
    //             >div {
    //                 margin: 0 auto;
    //                 padding: 10px;
    //                 width: 150px;
    //                 height: 150px;
    //                 background-color: #350d52;
    //                 border-radius: 5px;
    //                 display: flex;
    //                 align-items: center;
    //                 justify-content: center;
    //                 h2 {
    //                     font-size: 70px;
    //                     opacity: 0.7;
    //                 }
                    
    //             }
    //             p {
    //                 margin-top: 10px;
    //                 font-size: 20px;
    //                 opacity: 0.7;
    //             }
    //         }
    //     @media(max-width: 768px) {
    //         .item {
    //             &:after, &:before { 
    //                 width: 5px;
    //                 height: 5px;
    //                 right: 0px;
    //             }
    //             &:before {
    //                 top: 10px;
    //             }
    //             &:after {
    //                 top: 40px;
    //             }
    //             >div {
    //                 width: 60px;
    //                 height: 60px;
    //                 h2 {
    //                     font-size: 40px;
    //                 }
    //             }
    //             p {
    //                 font-size: 13px;
    //             }
    //         }
    //     }
    // }

    // .input-wrapper {
    //     .input-group {
    //         input {
    //             width: 100%;
    //             height: 48px;
    //         }
    //         .input-group-append {
    //             position: absolute;
    //             top: 5px;
    //             right: 5px;
    //             z-index: 100;
    //         }
    //     }
    // }
`;

const NFTsStyle = Styled.div`
    padding: 100px 0;
    position: relative;
    .row {
        .item {
            .image {
                border: 1px solid #333;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 20px auto;
                background: linear-gradient(to bottom, white, #4facf3);
                border-radius: 20px;
                img {
                    width: 100%;
                }
            }
        }
    }
`;


export {
    StyleWrapper,
    PurchaseStyle,
    NFTsStyle,
};