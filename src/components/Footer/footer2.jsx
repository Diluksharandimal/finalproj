import React from "react";

const Footer2=()=>{
    return(
        <div>
            <footer class="flex flex-col space-y-10 justify-center mt-44">
    <hr></hr>
<nav class="flex justify-center flex-wrap gap-24 text-gray-500 font-medium">
    <a class="hover:text-gray-900" href="#">Home</a>
    <a class="hover:text-gray-900" href="dep">Department</a>
    <a class="hover:text-gray-900" href="#">School</a>
    <a class="hover:text-gray-900" href="#">Customer</a>
    <a class="hover:text-gray-900" href="#">Contact</a>
</nav>

<div class="flex justify-center space-x-24 m-14">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p class="text-center text-gray-700 font-medium">&copy;2023 E-license All rights reservered.</p>
</footer>
        </div>
    )
}

export default Footer2;