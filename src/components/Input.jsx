import { styled } from "styled-components";
import { colorDefault,colorDefaultFocus,colorError } from "../Global";
import { StyledDiv } from "../Global";
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';

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
    position:relative;

    &::placeholder{
        color:gray;
    }
    &:focus{
        border: 2px ${colorDefaultFocus} solid;
    }
    &:focus + ${StyledLabel}{
        color: ${colorDefaultFocus}
    }
`
const Multiline = styled.textarea`
    padding: 20px;
    border: 2px ${colorDefault} solid;
    outline:none;
    width:30%;
    font-size:20px;
    border-radius: 10px;

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
const IconStart = styled(StyledInput)`
    padding-left:75px;
`
const SmallInput = styled(StyledInput)`
    padding:10px;
`
const Fullwidth = styled(StyledInput)`
    width:100%;
`

const Input = (props) =>{
    const {placeholder,error,disabled,helperText,startIcon,endIcon,value,size,fullwidth,multiline,rows} = props

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
            }
            else if(startIcon){
                return(
                <StyledDiv>
                    <CallIcon style={{position:"absolute", top:"50%", left:"75px" ,zIndex:2}} fontSize="large" sx={{color: "gray"}}/>
                    <IconStart style={{width:"100%"}} placeholder={placeholder} id="input"></IconStart>
                    <StyledLabel htmlFor="input">Label</StyledLabel>
                </StyledDiv>)
            } else if(endIcon){
                return(
                    <StyledDiv>
                        <LockIcon style={{position:"absolute", top:"50%", left:"265px" ,zIndex:2}} fontSize="large" sx={{color: "gray"}}/>
                        <StyledInput style={{width:"100%"}} placeholder={placeholder} id="input"></StyledInput>
                        <StyledLabel htmlFor="input">Label</StyledLabel>
                    </StyledDiv>)
            } else if(value){
                return(<StyledDiv>
                    <StyledInput placeholder={placeholder} id="input" value={value}></StyledInput>
                    <StyledLabel htmlFor="input">Label</StyledLabel>
                </StyledDiv>)
            }
            else if(size === "sm"){
                return (<StyledDiv>
                    <SmallInput placeholder={placeholder} id="input"></SmallInput>
                    <StyledLabel htmlFor="input">Label</StyledLabel>
                </StyledDiv>)
            }
            else if(fullwidth){
                return (<StyledDiv>
                    <Fullwidth placeholder={placeholder} id="input"></Fullwidth>
                    <StyledLabel htmlFor="input">Label</StyledLabel>
                </StyledDiv>)
            }
            else if(multiline){
                return (<StyledDiv>
                    <Multiline placeholder={placeholder} id="input" rows={rows}></Multiline>
                    <StyledLabel htmlFor="input">Label</StyledLabel>
                </StyledDiv>
                )
            }
            else{
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