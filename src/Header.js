import './styles/Homepage/Header.css'

function Header() {
    return (
        <header>
            <nav id='menu-items'>
                <button className='menu-item'>Home</button>
                <button className='menu-item'>Projects</button>
                <button className='menu-item'>CV</button>
                <button className='menu-item'>About Me</button>  
                <button className='menu-item'>Contact Me</button>
            </nav>
        </header>
    );
}

export default Header;