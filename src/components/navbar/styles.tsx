import styled, { css } from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const StyledDiv = styled.div`
    background-color: #101320;
    color: white;
    .MuiSvgIcon-root {
            color:white;
    }
    .MuiIconButton-root{
        color:white !important;
        font-size: 12px !important;
    }
    .MuiBadge-colorSecondary{
        background-color: #14F1AF;
        color: #101320;
    }
    .MuiInputBase-root{
        background-color: #1E2131;
        color: #fff;
        margin-top: 10px;
        font-size: 0.9rem;
    }
    .MuiOutlinedInput-input{
        padding: 4.5px 18px;
    }
    @media (max-width: 1500px) and (min-width: 1280px){
        .MuiIconButton-root{
            margin-left:-30px;
        }
    }
`;
export const Title = styled(Typography)`
${(props) =>
    props.variant==="body1" &&
    css`
        font-weight: 700 !important;
        font-size: 1.5rem !important;
        padding-top: 5px;
        padding-left: 50px;
        text-align: left;
    `
}
`