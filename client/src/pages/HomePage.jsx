const HomePage = () => {
    return(
        <div className="home-page-main-container">
            <h1>Welcome to my chat app</h1>
            <div className="home-page-links-containe">
                <a href="/login">Login to chat</a><br /><br />
                <a href="/register">Register and start chatting</a>
            </div>
        </div>
    );
};

export default HomePage;