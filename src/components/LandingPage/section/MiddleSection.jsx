import styled from "styled-components"
export const MiddleSection = () => {



    return <MiddleSectionWrapper>
        <div>
            <div className="tagline">
                <h1><span>Sell</span>, <span>buy</span> & donate books here..</h1>
            </div>
            <div className="buttons">

                <button>Click here</button>

            </div>
        </div>
        <div className="imgLogo">
            <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/whattosell.gif?v=1600183698" alt="logo" />
        </div>
    </MiddleSectionWrapper>
}

const MiddleSectionWrapper = styled.div`
border-bottom:1px solid  #ecaa2f6e;
padding:10px;
display:flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
padding:50px;

/* margin-bottom: 100px; */
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
    background-color:#ffa806 ;
    color: white;
}

& > .imgLogo{
    display: flex;
    align-items: flex-end;
    justify-content: end;
    padding-right: 1%;
}
& > .imgLogo img{
    width: 50%;
    margin-right: 25%;

}
`