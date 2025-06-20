function Navbar() {
    return (
        <nav style={styles.navbar}>
            <a href="#hero" style={styles.link}>Home</a>
            <a href="#about" style={styles.link}>About</a>
            <a href="#projects" style={styles.link}>Projects</a>
            <a href="#skills" style={styles.link}>Skills</a>
            <a href="#contact" style={styles.link}>Contact</a>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#333',
        padding: '10px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    link: {
        color: '#fff',
        margin: '0 15px',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
