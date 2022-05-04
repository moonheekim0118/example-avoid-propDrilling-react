import React from "react";


function 컨텍스트사용예시 () {
    const [currentUser, setCurrentUser] = React.useState(null);

    return (
        <div>
            {currentUser ? 
                <대시보드>
                    <대시보드_네비게이션 />
                    <대시보드_컨텐츠>
                        <환영문구 user={currentUser}/>
                    </대시보드_컨텐츠>
                </대시보드>
            
            :
                <로그인화면 onLogin={() => setCurrentUser({ name: '토토로' })} />}
        </div>
    );
}


function 대시보드({children}) {
    return (

        <div>
            <h2>DashBoard</h2>
            {children}
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

function 대시보드_컨텐츠({children}) {
    return (
        <div>
            <h3>DashBoardContent</h3>
            {children}
        </div>
    )
}

function 환영문구({user}) {
    return (
        <div>
            <p> 방가방가 {user.name}!!</p>
        </div>
    );
}

function 로그인화면({onLogin}) {
    return (
        <div>
            <h3>로그인해줘잉</h3>
            <button onClick={onLogin}>Login</button>
        </div>
    );
}

export default 컨텍스트사용예시;