import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledDiv = styled.div`
    background-color: #1E2131;
    border-radius: 15px;
    .MuiButton-contained.Mui-disabled{
        color: #fff;
        background-color: #303550;
    }
    .MuiButton-containedPrimary{
        width:150px;
        font-size: 11px;
        background-color: #3F48D8;
        border-radius: 6px;
    }
    .MuiRating-root{
        color: #fff;
    }
    .MuiChip-root{
        background-color: #151829;
        color: #6a6c80;
        font-size: 0.7125rem;
        height: 20px;
    }
    img{
        height:100px;
        max-width:100px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .MuiIconButton-root {
        background-color: #303550;
        border-radius: 20%;
        font-size: 0.3rem;
        color: #fff;
        padding: 2px;
    }
    .MuiIconButton-label .MuiSvgIcon-root{
        width: 0.7em;
        height: 0.7em;
    }
    @media (max-width: 1450px) {
        .MuiButton-containedPrimary{
            width:120px;
            font-size: 7px;
            margin-right: 20px;
        }
        .MuiSvgIcon-root{
            width: 0.7em;
            height: 0.7em;
        }
      }
      @media (max-width: 1130px) {
        .MuiButton-containedPrimary{
            width:80px;
            font-size: 7px;
            margin-right: 5px;
        }
      }
      @media (min-width: 1130px) {
        .MuiGrid-spacing-xs-1{
            max-height:100px;
        }
      }
`;
export const StyledTypography = styled(Typography)`
    ${(props) =>
        props.variant==="body1" &&
        css`
            font-weight: 700 !important;
            text-align: left;
        `
    }
    ${(props) =>
        props.variant==="body2" &&
        css`
            text-align: left;
            color: #24997D;
            font-size: 0.675rem !important;
        `
    }
`