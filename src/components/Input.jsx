import { styled } from "styled-components";
import { colorDefault,colorDefaultFocus,colorError } from "../Global";
import { StyledDiv } from "../Global";

const StyledSpan = styled.span`
    color:lightgray;
    font-size: 22px;
    font-family: "Raleway";
`
const ErrorStyledSpan = styled(StyledSpan)`
    color:${colorError};
`

const StyledLabel = styled.label`
    font-family:"Raleway";
    font-size: 26px;
    
`
const StyledInput = styled.input`
    padding:20px;
    border: 2px ${colorDefault} solid;
    outline:none;
    width:30%;
    font-size:20px;
    border-radius: 10px;

    &::placeholder{
        color:black;
    }
    &:focus{
        border: 2px ${colorDefaultFocus} solid;
    }
    &:focus + ${StyledLabel}{
        color: ${colorDefaultFocus}
    }
`
const Error = styled(StyledInput)`
    border: 2px ${colorError} solid;
    &:focus{
        border: 2px ${colorError} solid;
    }
    &:focus + ${StyledLabel}{
        color: ${colorError}
    }
`

const LabelError = styled(StyledLabel)`
    color:${colorError};
`

const Disabled = styled(StyledInput)`
    background-color: lightgray;
    border: 1px ${colorDefault} solid;
    &::placeholder{
        color:white;
    }
`

const Input = (props) =>{
    const {placeholder,error,disabled,helperText} = props
    if(disabled){
        return(
            <StyledDiv>
                <Disabled placeholder={placeholder} id="input" disabled></Disabled>
                <StyledLabel htmlFor="input">Label</StyledLabel>
            </StyledDiv>)
    }
    else{
        if(error && helperText){
            return(
                <StyledDiv>
                    <ErrorStyledSpan>{helperText}</ErrorStyledSpan>
                    <Error style={{width:"100%"}} placeholder={placeholder} id="input" ></Error>
                    <LabelError htmlFor="input">Label</LabelError>
                </StyledDiv>)
        }
        else if(helperText){
            return(
                <StyledDiv>
                    <StyledSpan>{helperText}</StyledSpan>
                    <StyledInput style={{width:"100%"}} placeholder={placeholder} id="input" ></StyledInput>
                    <StyledLabel htmlFor="input">Label</StyledLabel>
                </StyledDiv>)
        }else{
            if(error){
                return(
                    <StyledDiv>
                        <Error placeholder={placeholder} id="input"></Error>
                        <LabelError htmlFor="input">Label</LabelError>
                    </StyledDiv>)
            }else{
                return(
                    <StyledDiv>
                        <StyledInput placeholder={placeholder} id="input"></StyledInput>
                        <StyledLabel htmlFor="input">Label</StyledLabel>
                    </StyledDiv>
                    )
            }
        } 
    } 

}

export default Input