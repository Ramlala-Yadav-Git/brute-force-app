import styled from "styled-components"
export const LowerSection = () => {



    return <MiddleSectionWrapper>
        <div className="imgLogo">
            <img src="https://i.pinimg.com/originals/ad/ed/1a/aded1af65adc72f0dfeb9d6d84d2fb01.gif" alt="logo" />
        </div>
        <div>
            <div className="tagline">
                <h1><span>See</span>, <span>book list</span> here..</h1>
            </div>
            <div className="buttons">

                <button>Click here</button>

            </div>
        </div>
    </MiddleSectionWrapper>
}

const MiddleSectionWrapper = styled.div`
/* border-bottom:1px solid  #3c0baf6d; */
padding:50px;
display:flex;
justify-content: space-between;
align-items: center;

/* margin-top: 10px; */
/* margin-bottom: 10px; */
&> div{
    width: 43%;

}
& .tagline{
    font-size: 20px;
    text-align: center;
    color:#232F3E;
}
& .buttons{
display: flex;
justify-content: center;
gap: 10px;
}
& .buttons button{
    width: 200px;
    padding: 10px;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 700;
    color:#232F3E;
    border-radius: 50px;
    border: none;
    cursor:pointer;
}
& .buttons > :nth-child(1){
    background-color:#4004e7 ;
    color: white;
}

& > .imgLogo{
    display: flex;
    justify-content: center;
    padding-right: 1%;
    
}
& > .imgLogo img{
    width: 50%;
    /* margin-right: 25%; */
    border-radius: 50%;

}
`