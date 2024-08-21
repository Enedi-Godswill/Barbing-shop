
const createFooter = () => {
    const footerEl = document.querySelector(".footer");
    footerEl.innerHTML = `
            <h2>Eddie's Barbing</h2>
            <p>Providing you with the comfort of a good haircut from your home.</p>
            <div class="footer-links">
                <div class="normal-links links">
                    <a href="#">contact</a>
                    <a href="#">terms and conditions</a>
                    <a href="#">services</a>
                </div>
                <div class="social-links links">
                    <a href="#">facebook</a>
                    <a href="#">twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">gmail</a>
                </div>
            </div>
        `;

}
createFooter();
