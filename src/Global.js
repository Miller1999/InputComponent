import styled , {createGlobalStyle} from "styled-components"

//Colors
export const colorDefault = "#828282"
export const colorError = "#d32f2f"
export const colorDefaultFocus = "#2962ff"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Raleway";
        font-weight:900;
        font-size:20px;
        box-sizing:border-box;
    }
    body{
        width:100%;
        height:100vh;
        padding:20px 150px;
    }
    h1{
        font-family: "Raleway";
        font-weight:900;
        font-size:40px;
    }
    h2{
        padding:20px;
        font-family: "Raleway";
        font-weight:900;
        font-size:20px;
        color:gray;
    }
`
export const StyledDiv = styled.div`
    display:flex;
    flex-direction:column-reverse;
    padding: 0px 50px;
    gap:10px;
    margin:10px;
    position: relative;
`


export default GlobalStyle