import React from 'react';

function Home() {
    return (
        <div>
            <header>
                <h1>
                    HomePage
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid blanditiis consectetur, consequatur doloremque expedita itaque nisi officiis quidem quo quos sint voluptatibus. Architecto corporis fuga labore laudantium libero odio quas saepe tenetur vero. Alias amet animi, asperiores dignissimos ea facilis id incidunt labore laudantium libero repudiandae rerum tempore voluptatum!</p>
            </header>
            <nav>
                <ul>
                    <li>
                        <a href={"/tracks"}>Tracks</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;