import React from "react";


// 컨텍스트 사용의 문제점
// 환영문구를 컨텍스트 Provider 바깥에서도 재사용해야 하는 상황이 온다면 당연히 컨텍스트 바깥에서 실행되므로 에러가 난다!
// 즉 컨텍스트 내부의 컨슈머 컴포넌트는 재사용 할 수 가 없어지는것.



const Context = React.createContext();

function 컨텍스트사용예시 () {
    const [currentUser, setCurrentUser] = React.useState(null);

    return (
        <Context.Provider value={{ currentUser , setCurrentUser }}>
            <div>
                {currentUser ? <대시보드/> : <로그인화면/> }
            </div>
        </Context.Provider>
    );
}


function 대시보드() {
    return (

        <div>
            <h2>DashBoard</h2>
            <대시보드_네비게이션 />
            <대시보드_컨텐츠/>
        </div>
    );
}

function 대시보드_네비게이션() {
    return (
        <div>
            <h3>DashBoard Nav</h3>
        </div>
    )
}

function 대시보드_컨텐츠() {
    return (
        <div>
            <h3>DashBoardContent</h3>
            <환영문구/>
        </div>
    )
}

function 환영문구() {
    const { currentUser } = React.useContext(Context);
    
    return (
        <div>
            <p> 방가방가 {currentUser.name}!!</p>
        </div>
    );
}

function 로그인화면() {
    const { setCurrentUser } = React.useContext(Context);
    
    return (

        <div>
            <h3>로그인해줘잉</h3>
            <button onClick={()=>setCurrentUser({name:'토토로'})}>Login</button>
        </div>
    );
}

export default 컨텍스트사용예시;