import styled from 'styled-components';


// Color Vars
// const colorClear = 'rgba(255,255,255,0.15)';
const colorWhite = '#ffffff';
const colorOffWhite = '#efefef';
// const colorLight = '#aaaaaa';
// const colorLightGray = 'rgba(75,75,75,0.2)';
const colorGray = '#999999';
// const colorDark = '#232323';
// const colorBlack = '#000000';

const colorPrimary = 'rgba(61, 146, 224, 1)';
// const colorRed = '#dd1111';
// const colorDarkRed = '#a00000';

const borderRadiusSmall = 'border-radius: 3px';
const borderRadiusFlat = 'border-radius: 0';

export const LoginPageSection = styled.section`
    width: 50%;
    background-color: ${colorWhite};
    margin: 20% auto 0 auto;
    padding: 20px;
    text-align: center;
    border: 1px solid ${colorOffWhite};
    ${borderRadiusSmall};
`
export const LoginPageInput = styled.input`
    margin: 15px auto 5px auto;
    padding: 10px 5px;
    width: 75%;
    background-color: ${colorOffWhite};
    text-align: center;
    border: 0;
    border-bottom: 1px solid ${colorGray};
    font-size: 1.6rem;
    &:focus {
        outline: none;
    }
`

export const Button = styled.button`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    overflow: hidden;
    background-color: ${colorPrimary};
    color: ${colorWhite};
    font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    line-height: 36px;
    min-width: 64px;
    height: 36px;
    width: 200px;
    padding: 0 16px;
    margin-top: 16px;
    border: none;
    ${borderRadiusFlat};
    outline: none;
    -webkit-transition: box-shadow 0.2s;
    transition: box-shadow 0.2s;
    cursor: pointer;
`