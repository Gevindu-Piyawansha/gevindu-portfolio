function Navbar() {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>Gevindu Piyawansha</div>
            <div>
                <a href="#hero" style={styles.link}>Home</a>
                <a href="#about" style={styles.link}>About</a>
                <a href="#projects" style={styles.link}>Projects</a>
                <a href="#skills" style={styles.link}>Skills</a>
                <a href="#contact" style={styles.link}>Contact</a>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222',
        padding: '15px 30px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    link: {
        color: '#fff',
        marginLeft: '20px',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Navbar;
