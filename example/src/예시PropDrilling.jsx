import React from "react";


function PropDrillingComponents () {
    const [currentUser, setCurrentUser] = React.useState(null);

    return (
        <div>
            {currentUser ? <대시보드 user={currentUser} /> :
                <로그인화면 onLogin={() => setCurrentUser({ name: '토토로' })} />}
        </div>
    );
}


function 대시보드({user}) {
    return (

        <div>
            <h2>DashBoard</h2>
            <대시보드_네비게이션 />
            <대시보드_컨텐츠 user={user}/>
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

function 대시보드_컨텐츠({user}) {
    return (
        <div>
            <h3>DashBoardContent</h3>
            <환영문구 user={user} />
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

export default PropDrillingComponents;