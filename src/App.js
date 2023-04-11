/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
  return (
    // 간단한 기본 메뉴
    <header>
      <div class="container">
        <div class="menu">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/applist/">MyAppList</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/applist/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/applist/aboutMe">About Me</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      List
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="/applist/appList#app1">App1</a></li>
                      <li><a class="dropdown-item" href="/applist/appList#app2">App2</a></li>
                      <li><a class="dropdown-item" href="/applist/appList#app3">App3</a></li>
                      <li>
                        <hr class="dropdown-divider"></hr>
                      </li>
                      <li><a class="dropdown-item" href="/applist/appList">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default App;
