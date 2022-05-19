import './Menu.css';

function Menu() {
    return (
      <div className="Menu">
        <header className="Menu-header">
            { /* Menu idea and code from coding.bath https://www.instagram.com/p/CPaj9QnrwMr/ */}
            <ul>
                <li>
                    <a href="#">Home
                        <span></span> <span></span> <span></span> <span></span>
                    </a>
                </li>
                <li>
                    <a href="#">Service
                        <span></span> <span></span> <span></span> <span></span>
                    </a>
                </li>
                <li>
                    <a href="#">About
                        <span></span> <span></span> <span></span> <span></span>
                    </a>
                </li>
                <li>
                    <a href="#">Contact
                        <span></span> <span></span> <span></span> <span></span>
                    </a>
                </li>
            </ul>
        </header>
      </div>
    );
  }
  
  export default Menu;