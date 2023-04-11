/* eslint-disable jsx-a11y/anchor-is-valid */
function al(){
    return(
        <div class="container s_con">

        {/* <!-- 사이드 컨트롤러 --> */}
        <ul class="side_btn">
            <li>
                <a href="#app1">
                    app1 이동
                </a>
            </li>
            <li>
                <a href="#app2">
                    app2 이동
                </a>
            </li>
            <li>
                <a href="#app3">
                    app3 이동
                </a>
            </li>
        </ul>

        {/* <!-- AppList --> */}
        <ul>
            <li class="applist">
                <div class="gray-con">
                    <div class="app-text">
                        <a name="app1">
                            <div>
                                about
                            </div>
                        </a>
                    </div>
                </div>
            </li>
    
            <li class="applist">
                <div class="gray-con">
                    <div class="app-text">
                        <a name="app2">
                            <div>
                                about
                            </div>
                        </a>
                    </div>
                </div>
            </li>
    
            <li class="applist">
                <div class="gray-con">
                    <div class="app-text">
                        <a name="app3">
                            <div>
                                about
                            </div>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    );
}

export default al;