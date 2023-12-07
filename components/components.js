
/* =================== Custom elements ==================== */



/* ===================== General Components ==================== */


class Nav_bar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="nav-container">
      <nav>
          <div class="nav-logo">
              <!-- <span>NOU Apparels</span> -->

              <a href="../index.html">
                  <svg width="60" height="185" viewBox="0 0 337 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_15_32)">
                      <path d="M164.909 0.0964989C156.458 0.411095 148.226 2.06272 141.132 4.86787C125.473 11.0637 114.289 22.8173 108.956 38.6782C107.292 43.6244 106.25 48.9113 105.742 54.9236C105.549 57.1345 105.523 63.0769 105.689 65.6286C106.276 74.5247 108.15 82.2323 111.434 89.3195C115.647 98.3728 122.084 105.862 130.377 111.359C138.715 116.89 148.76 120.298 159.917 121.382C163.096 121.688 164.708 121.758 168.281 121.758C175.296 121.758 181.243 121.067 187.347 119.547C204.039 115.37 216.878 105.626 224.27 91.4954C228.184 84.015 230.435 75.6345 231.136 65.9782C231.355 62.8934 231.25 57.2569 230.891 53.5254C229.358 37.2538 222.579 23.6388 211.326 14.1834C199.564 4.30859 183.388 -0.602604 164.909 0.0964989ZM170.952 27.8771C172.861 27.9994 174.184 28.1742 176.005 28.5412C180.673 29.4763 184.562 31.1279 188.135 33.6971C194.484 38.2675 198.671 45.6168 199.932 54.3993C201.158 62.9633 200.046 71.2826 196.788 77.7755C195.194 80.9652 193.609 83.1411 191.086 85.5967C186.208 90.3506 180.025 93.0334 172.003 93.8636C170.576 94.0122 166.092 94.0209 164.603 93.8724C158.901 93.3043 153.971 91.6702 149.881 88.9786C148.086 87.7989 146.965 86.8813 145.423 85.3346C140.563 80.4671 137.69 74.0441 136.753 65.9782C136.683 65.3315 136.569 63.7323 136.517 62.439C136.14 53.6041 138.312 45.6168 142.752 39.5608C148.769 31.3551 158.98 27.1255 170.952 27.8771Z" fill="black"/>
                      <path d="M4.01128 0.463226C2.81146 0.804039 1.99699 1.82648 1.5591 3.54802L1.35767 4.32577V60.385C1.35767 113.63 1.36642 116.471 1.51531 116.881C1.83059 117.799 2.32978 118.271 3.25811 118.542C3.68724 118.664 5.07973 118.673 16.4298 118.655L29.1199 118.629L29.5665 118.428C30.1183 118.175 30.5824 117.711 30.8452 117.143L31.0466 116.706L31.0904 88.5851L31.1342 60.4637L63.2753 89.6687C80.9573 105.731 95.7492 119.145 96.1608 119.468C96.9928 120.141 98.3941 120.875 99.1472 121.041C99.8829 121.189 100.846 121.111 101.363 120.857C101.985 120.543 102.65 119.774 102.983 118.996C103.561 117.589 103.517 122.544 103.5 60.9968C103.474 7.2183 103.465 5.18217 103.316 4.78892C103.088 4.21216 102.554 3.64414 102.029 3.41693C101.783 3.31207 101.258 3.18973 100.864 3.14603C100.452 3.0936 95.2763 3.05864 88.6291 3.05864C81.9819 3.05864 76.8061 3.0936 76.3945 3.14603C76.0004 3.18973 75.4749 3.31207 75.2297 3.41693C74.7042 3.64414 74.17 4.21216 73.9423 4.78892C73.7934 5.18217 73.7846 6.32695 73.7409 32.2811L73.6971 59.3713L41.1356 30.7344C23.2346 14.9871 8.37266 1.94882 8.11869 1.75657C6.61234 0.629263 5.106 0.157369 4.01128 0.463226Z" fill="black"/>
                      <path d="M234.753 3.14616C233.325 3.31219 232.511 4.03751 232.257 5.37454C232.187 5.75905 232.169 15.8611 232.187 44.3495C232.222 86.2694 232.187 83.4556 232.695 86.8462C233.57 92.7012 235.523 97.8745 238.589 102.462C241.163 106.307 245.043 110.083 249.168 112.757C253.871 115.807 259.283 118.079 265.405 119.59C271.553 121.102 277.281 121.749 284.497 121.749C290.733 121.758 295.462 121.329 300.778 120.281C305.989 119.258 310.438 117.834 314.668 115.841C322.445 112.189 328.47 106.736 332.113 100.059C334.706 95.3053 336.098 90.6039 336.755 84.3294C336.842 83.4468 336.869 75.7392 336.869 44.1747V5.11238L336.685 4.7104C336.229 3.74039 335.511 3.28598 334.206 3.13742C333.733 3.08498 328.505 3.05877 320.483 3.07625L307.53 3.10246L307.013 3.31219C306.357 3.57436 305.814 4.07247 305.551 4.65796L305.341 5.11238L305.288 39.718C305.253 65.576 305.218 74.5682 305.139 75.2848C304.675 79.5668 303.966 82.3108 302.652 84.8975C300.209 89.73 296.075 92.5526 289.927 93.5925C287.028 94.0819 282.973 94.1343 280.031 93.7236C275.643 93.1119 272.157 91.5826 269.635 89.1445C266.22 85.8587 264.442 81.2446 263.96 74.4546C263.907 73.6332 263.872 61.3727 263.872 39.4995C263.872 12.619 263.846 5.70662 263.759 5.27842C263.54 4.25598 262.953 3.58309 261.998 3.25976C261.587 3.11994 260.606 3.10246 248.459 3.09372C241.26 3.08498 235.094 3.1112 234.753 3.14616Z" fill="black"/>
                      <path d="M17.4281 142.154C17.2092 142.355 15.6415 146.051 8.70536 162.672C4.05497 173.823 0.227813 183.104 0.201539 183.296C0.166508 183.593 0.192782 183.68 0.394211 183.864C0.621914 184.082 0.639429 184.082 2.22459 184.082C3.62584 184.082 3.84478 184.065 4.06373 183.925C4.37025 183.724 4.54541 183.331 6.44585 178.734L7.92592 175.125L17.9974 175.151L28.0688 175.169L29.7854 179.32C30.7312 181.601 31.5895 183.576 31.6946 183.707C31.9836 184.065 32.4215 184.144 33.9979 184.109L35.3991 184.082L35.6181 183.829C35.7932 183.628 35.8283 183.506 35.7932 183.27C35.7582 183.112 31.931 173.849 27.2719 162.699C21.3604 148.568 18.7243 142.355 18.5579 142.171C18.2338 141.83 17.796 141.822 17.4281 142.154ZM22.2449 161.012C24.5132 166.535 26.3961 171.114 26.4224 171.167C26.4574 171.254 24.7409 171.28 18.0061 171.28C13.3557 171.28 9.54611 171.263 9.54611 171.245C9.54611 171.228 11.4203 166.675 13.7148 161.134C16.0094 155.585 17.901 150.997 17.9273 150.936C17.9536 150.875 18.0061 150.849 18.0412 150.893C18.0762 150.928 19.9679 155.48 22.2449 161.012Z" fill="black"/>
                      <path d="M157.439 142.198C157.246 142.416 155.004 147.703 148.734 162.743C144.083 173.893 140.265 183.13 140.239 183.287C140.204 183.506 140.248 183.628 140.414 183.829L140.633 184.083L141.938 184.109C142.647 184.126 143.4 184.118 143.611 184.083C144.32 183.978 144.346 183.925 146.238 179.364L147.972 175.169L158.035 175.152L168.106 175.125L169.814 179.25C170.751 181.514 171.6 183.488 171.697 183.637C171.986 184.065 172.362 184.144 173.991 184.109C175.358 184.083 175.41 184.074 175.638 183.864C175.839 183.681 175.865 183.593 175.83 183.296C175.795 183.025 160.066 145.204 158.98 142.766C158.709 142.163 158.429 141.918 158.008 141.918C157.772 141.918 157.641 141.988 157.439 142.198ZM162.317 161.082C164.612 166.649 166.486 171.219 166.486 171.245C166.486 171.263 162.676 171.28 158.026 171.28C153.358 171.28 149.583 171.245 149.601 171.202C150.468 168.965 158.043 150.849 158.087 150.893C158.122 150.937 160.031 155.516 162.317 161.082Z" fill="black"/>
                      <path d="M320.597 142.014C319.625 142.119 318.626 142.346 317.654 142.67C314.388 143.753 312.189 146.016 311.375 149.127C311.191 149.827 311.138 150.272 311.103 151.4C311.051 153.042 311.191 154.161 311.611 155.402C312.724 158.74 315.43 161.318 321.061 164.412C324.021 166.046 326.596 167.636 327.848 168.615C328.654 169.244 329.749 170.354 330.16 170.957C330.554 171.542 331.01 172.539 331.194 173.203C331.395 173.989 331.395 175.589 331.185 176.349C330.546 178.708 328.636 180.238 325.589 180.858C324.687 181.042 322.243 181.111 321.28 180.989C318.661 180.64 315.71 179.635 313.284 178.245C311.883 177.441 311.751 177.511 310.604 179.696C310.158 180.552 310.123 180.806 310.376 181.225C310.753 181.837 314.773 183.515 317.54 184.205C319.765 184.773 320.597 184.86 323.294 184.86C325.957 184.86 326.526 184.79 328.269 184.249C332.779 182.824 335.511 179.189 335.511 174.61C335.511 171.656 334.566 169.41 332.376 167.156C330.747 165.478 328.672 164.045 324.433 161.668C322.786 160.75 321.28 159.859 320.579 159.404C316.822 156.975 315.193 154.615 315.193 151.574C315.193 150.028 315.64 148.9 316.638 147.904C319.248 145.3 324.66 145.3 330.563 147.904C331.167 148.175 331.772 148.385 331.938 148.385C332.385 148.385 332.639 148.096 333.269 146.864C334.198 145.046 334.136 144.889 332.096 144.042C329.547 142.984 327.253 142.346 324.827 142.04C323.767 141.909 321.604 141.892 320.597 142.014Z" fill="black"/>
                      <path d="M53.3527 142.801C53.1776 142.853 53.0024 142.993 52.8973 143.168C52.7222 143.447 52.7222 143.745 52.7222 163.416C52.7222 179.207 52.7484 183.427 52.836 183.602C53.0462 184.022 53.4315 184.126 54.7627 184.126C55.6648 184.126 56.0326 184.092 56.2253 183.995C56.777 183.707 56.7508 184.065 56.7508 177.476V171.473L61.3311 171.429C66.1128 171.377 66.9536 171.324 69.0555 170.922C75.4662 169.69 78.9956 166.055 79.8363 159.833C79.9939 158.653 80.0115 155.979 79.8713 154.764C79.2145 148.979 76.4996 145.492 71.3325 143.806C69.5897 143.238 67.8556 142.941 65.421 142.792C63.5906 142.678 53.7468 142.687 53.3527 142.801ZM67.8294 147.057C72.8213 148 75.4311 150.736 75.9391 155.559C76.1405 157.447 75.9391 159.597 75.4311 161.126C74.424 164.158 72.0594 166.142 68.4599 166.946C66.9711 167.287 65.8676 167.348 61.2435 167.348H56.7508V157.071V146.794L61.8128 146.838C66.4632 146.873 66.9448 146.891 67.8294 147.057Z" fill="black"/>
                      <path d="M98.8143 142.766C98.5428 142.818 98.2013 143.185 98.14 143.5C98.1137 143.657 98.0874 152.649 98.0962 163.494C98.0962 178.525 98.1225 183.279 98.2013 183.515C98.3764 184.022 98.7092 184.126 100.128 184.126C101.538 184.126 101.88 184.022 102.081 183.55C102.177 183.314 102.204 182.169 102.204 177.354V171.455H105.777C107.739 171.455 109.989 171.412 110.769 171.368C116.829 171.001 120.875 169.157 123.161 165.723C123.835 164.718 124.177 163.992 124.589 162.751C125.377 160.331 125.587 157.307 125.184 154.152C124.51 148.927 121.716 145.466 116.873 143.858C115.043 143.246 113.317 142.949 110.786 142.792C109.42 142.713 99.2172 142.687 98.8143 142.766ZM111.934 146.899C118.248 147.528 121.401 150.945 121.401 157.167C121.401 160.156 120.604 162.542 119.036 164.22C118.581 164.709 117.425 165.6 116.899 165.871C116.199 166.229 115.051 166.649 114.184 166.859C112.468 167.287 111.487 167.348 106.653 167.348H102.204V157.08V146.812H106.618C109.043 146.812 111.434 146.856 111.934 146.899Z" fill="black"/>
                      <path d="M193.372 142.818C193.162 142.888 193.013 143.019 192.917 143.229C192.768 143.517 192.759 144.662 192.759 163.398C192.759 185.376 192.715 183.742 193.32 183.995C193.775 184.188 195.886 184.179 196.297 183.987C196.849 183.716 196.832 183.96 196.858 177.433L196.884 171.481L201.368 171.429C204.714 171.394 206.141 171.35 206.991 171.245C207.621 171.167 208.243 171.097 208.374 171.079C208.628 171.062 208.672 171.141 211.624 176.961C213.27 180.203 214.724 183.069 214.864 183.314C215.258 184.03 215.53 184.126 217.22 184.126C219.015 184.126 219.383 183.978 219.383 183.288C219.383 183.148 218.008 180.325 216.046 176.454C214.216 172.836 212.727 169.856 212.745 169.856C214.435 169.035 215.416 168.379 216.388 167.444C218.314 165.574 219.471 163.022 219.917 159.658C220.049 158.627 220.057 155.891 219.917 154.72C219.26 148.997 216.528 145.492 211.396 143.806C209.671 143.246 207.893 142.941 205.502 142.792C203.347 142.67 193.766 142.687 193.372 142.818ZM207.464 146.978C210.108 147.415 212.009 148.289 213.471 149.739C214.654 150.919 215.398 152.343 215.792 154.196C216.055 155.411 216.125 157.963 215.932 159.177C215.591 161.414 214.811 163.092 213.524 164.386C212.298 165.6 210.599 166.474 208.523 166.946C207.052 167.287 205.896 167.348 201.324 167.348H196.875V157.071V146.803L201.85 146.838C205.187 146.864 207.026 146.908 207.464 146.978Z" fill="black"/>
                      <path d="M239.438 142.818C239.228 142.888 239.079 143.019 238.983 143.229C238.834 143.517 238.825 144.662 238.825 163.398C238.825 180.64 238.843 183.296 238.957 183.567C239.202 184.153 238.633 184.126 249.396 184.126C258.46 184.126 259.117 184.118 259.406 183.969C259.896 183.724 259.94 183.558 259.914 182.003L259.888 180.613L259.599 180.36L259.318 180.106H251.13H242.941V175.606V171.106H249.974C256.77 171.106 257.006 171.097 257.278 170.931C257.427 170.843 257.611 170.677 257.672 170.564C257.838 170.275 257.83 168.021 257.663 167.627C257.427 167.059 257.768 167.086 249.991 167.086H242.941V156.949V146.812L251.112 146.794C258.74 146.768 259.292 146.759 259.502 146.611C259.879 146.357 259.931 146.113 259.931 144.732C259.931 143.229 259.835 142.958 259.257 142.801C258.758 142.661 239.85 142.678 239.438 142.818Z" fill="black"/>
                      <path d="M278.691 142.801C278.515 142.853 278.34 142.993 278.235 143.168C278.06 143.447 278.06 143.745 278.06 163.416C278.06 179.207 278.086 183.427 278.174 183.602C278.235 183.724 278.419 183.891 278.586 183.969C278.875 184.118 279.444 184.126 286.757 184.126C295.217 184.126 295.024 184.135 295.348 183.681C295.462 183.515 295.488 183.226 295.488 182.09V180.701L295.19 180.404L294.893 180.107H288.534H282.176V161.816C282.176 144.583 282.167 143.517 282.019 143.229C281.922 143.019 281.773 142.888 281.563 142.818C281.195 142.696 279.111 142.687 278.691 142.801Z" fill="black"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_15_32">
                      <rect width="337" height="185" fill="white"/>
                      </clipPath>
                      </defs>
                  </svg>
              </a>
                  
          </div>
          <div class="nav-links">
              <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="../pages/about-page.html">ABOUT</a></li>
                  <li><a href="../pages/services-page.html">SERVICES</a></li>
                  <li><a href="../pages/blog-page.html">BLOG</a></li>
                  <li><a href="../pages/contact-page.html">CONTACT</a></li>
              </ul>
              <div class="nav-mob">
                  <svg width="5" height="52" viewBox="0 0 14 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle  cx="7" cy="7" r="7" fill="black"/>
                      <circle  cx="7" cy="26" r="7" fill="black"/>
                      <circle  cx="7" cy="45" r="7" fill="black"/>
                      </svg>
              </div>
          </div>
          <div class="mob-nav">
              <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="../pages/about-page.html">ABOUT</a></li>
                  <li><a href="../pages/services-page.html">SERVICES</a></li>
                  <li><a href="../pages/blog-page.html">BLOG</a></li>
                  <li><a href="../pages/contact-page.html">CONTACT</a></li>
              </ul>



              <div class="mob-nav-bg">
                    <!-- <img src="../assets/images/bgels.svg" alt="" class="bg-circle"> -->
                    <div class="bg-circle"></div>
                    <div class="bg-circle"></div>
                    <div class="bg-circle"></div>
                    <div class="bg-circle"></div>
                </div>
          </div>
      </nav>
  </div>

      `;
    }
}



class Footer_section extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
                    <footer>
                    <div class="footer-container">
                        <div class="footer-sections">
                            <h2>POLICIES</h2>
                            <p>Exchange/Return Your Order</p>
                            <p>Shipping Policy</p>
                            <p>Exchange and Refund Policy</p>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Fraud Protection</p>
                        </div>
                        <div class="footer-sections">
                            <h2>CAREERS</h2>
                            <p>Build Your Brand</p>
                            <p>Global Selling</p>
                            <p>Become an Affiliate</p>
                            <p>Advertise Your Products</p>
                            <p>Pay on Merchants</p>
                        </div>
                        <div class="footer-sections">
                            <div class="footer-newsletter">
                                <h2>OUR NEWSLETTER</h2>
                                <div class="footer-input">
                                    <input type="text" placeholder="Enter your Email">
                                    <button onclick="subscribe()">
                                        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.5"
                                                d="M28.0832 1.93065L2.00204 0.366025C0.984683 0.303206 0.400818 1.39213 0.930092 2.1859L4.06334 6.86199L22.5813 4.2675C22.9372 4.21568 23.0534 4.7311 22.7086 4.83704L4.99817 10.3217L2.83359 13.6027C2.19901 14.5645 3.11053 15.7099 4.14093 15.3894L8.80755 13.9463L12.4823 19.4243C12.8997 20.0506 13.7993 20.1235 14.3167 19.5698L28.8673 3.89869C29.5491 3.16682 29.0572 1.98826 28.0832 1.93065Z"
                                                fill="white" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="footer-follow">
                                <h2>FOLLOW US</h2>
                                <div class="footer-icons">
                                    <div class="ins-icon">
                                        <a href="https://www.instagram.com/nouapparels/">
                                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.9059 9.3701C10.5339 9.3701 8.59824 11.3058 8.59824 13.6777C8.59824 16.0497 10.5339 17.9854 12.9059 17.9854C15.2778 17.9854 17.2135 16.0497 17.2135 13.6777C17.2135 11.3058 15.2778 9.3701 12.9059 9.3701ZM25.8255 13.6777C25.8255 11.8939 25.8417 10.1263 25.7415 8.3457C25.6413 6.27752 25.1695 4.44201 23.6572 2.92965C22.1416 1.41406 20.3093 0.945489 18.2411 0.845311C16.4573 0.745134 14.6897 0.761291 12.9091 0.761291C11.1253 0.761291 9.35765 0.745134 7.57707 0.845311C5.50889 0.945489 3.67338 1.41729 2.16102 2.92965C0.64543 4.44524 0.176858 6.27752 0.0766803 8.3457C-0.0234973 10.1295 -0.00733958 11.8972 -0.00733958 13.6777C-0.00733958 15.4583 -0.0234973 17.2292 0.0766803 19.0098C0.176858 21.0779 0.648662 22.9135 2.16102 24.4258C3.67661 25.9414 5.50889 26.41 7.57707 26.5102C9.36088 26.6103 11.1285 26.5942 12.9091 26.5942C14.6929 26.5942 16.4606 26.6103 18.2411 26.5102C20.3093 26.41 22.1448 25.9382 23.6572 24.4258C25.1728 22.9102 25.6413 21.0779 25.7415 19.0098C25.8449 17.2292 25.8255 15.4615 25.8255 13.6777ZM12.9059 20.3056C9.23808 20.3056 6.27799 17.3455 6.27799 13.6777C6.27799 10.0099 9.23808 7.04986 12.9059 7.04986C16.5737 7.04986 19.5337 10.0099 19.5337 13.6777C19.5337 17.3455 16.5737 20.3056 12.9059 20.3056ZM19.8052 8.32631C18.9488 8.32631 18.2573 7.63476 18.2573 6.77841C18.2573 5.92205 18.9488 5.2305 19.8052 5.2305C20.6616 5.2305 21.3531 5.92205 21.3531 6.77841C21.3534 6.98175 21.3135 7.18315 21.2358 7.37107C21.1581 7.55898 21.0441 7.72972 20.9003 7.87351C20.7565 8.0173 20.5858 8.13131 20.3979 8.209C20.2099 8.2867 20.0085 8.32657 19.8052 8.32631Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="f-icon">
                                        <a href="#">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M23.3409 0.512367H1.93172C1.1977 0.512367 0.603271 1.1068 0.603271 1.84082V23.25C0.603271 23.9841 1.1977 24.5785 1.93172 24.5785H13.457V15.2589H10.3212V11.6273H13.457V8.94754C13.457 5.8382 15.3558 4.14635 18.1294 4.14635C19.4579 4.14635 20.5986 4.24502 20.9319 4.28954V7.53847H19.009C17.5001 7.53847 17.2089 8.25564 17.2089 9.30733V11.6261H20.8056L20.3363 15.2577H17.2077V24.5785H23.3409C24.075 24.5785 24.6694 23.9841 24.6694 23.25V1.84082C24.6694 1.1068 24.075 0.512367 23.3409 0.512367Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="lndin-icon">
                                        <a href="https://in.linkedin.com/company/nou-apparels-pvt-ltd">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.710693 2.2361C0.710693 1.28399 1.50187 0.512367 2.47805 0.512367H23.0095C23.9856 0.512367 24.7768 1.28399 24.7768 2.2361V22.8547C24.7768 23.8069 23.9856 24.5785 23.0095 24.5785H2.47805C1.50187 24.5785 0.710693 23.8069 0.710693 22.8547V2.2361ZM8.14562 20.6587V9.79136H4.5342V20.6587H8.14562ZM6.34066 8.30678C7.59962 8.30678 8.38327 7.47349 8.38327 6.42962C8.36071 5.36319 7.60112 4.55247 6.36473 4.55247C5.12833 4.55247 4.32061 5.3647 4.32061 6.42962C4.32061 7.47349 5.10426 8.30678 6.31659 8.30678H6.34066ZM13.7229 20.6587V14.5895C13.7229 14.2646 13.747 13.9398 13.8433 13.7081C14.1035 13.0598 14.6976 12.3875 15.6964 12.3875C17.0035 12.3875 17.5254 13.3832 17.5254 14.8452V20.6587H21.1368V14.4256C21.1368 11.0864 19.3559 9.53415 16.9794 9.53415C15.0631 9.53415 14.2043 10.587 13.7229 11.3286V11.3662H13.6989C13.7069 11.3536 13.7149 11.3411 13.7229 11.3286V9.79136H10.113C10.1581 10.8112 10.113 20.6587 10.113 20.6587H13.7229Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                   <!-- <div class="f-icon">
                                        <a href="#">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.0612 14.3564C11.0612 13.7397 11.3575 12.759 13.6588 12.759C14.3643 12.759 14.799 12.8102 15.3826 12.941C15.1961 15.3566 14.0138 15.6755 12.8647 15.6755C12.2359 15.6755 11.0612 15.3476 11.0612 14.3564Z"
                                                    fill="white" />
                                                <path
                                                    d="M4.71382 24.5785H20.9885C22.0217 24.5785 23.0126 24.168 23.7432 23.4375C24.4738 22.7069 24.8842 21.716 24.8842 20.6828V4.40807C24.8842 3.37487 24.4738 2.38398 23.7432 1.65339C23.0126 0.922806 22.0217 0.512367 20.9885 0.512367L4.71382 0.512367C3.68061 0.512367 2.68973 0.922806 1.95914 1.65339C1.22855 2.38398 0.818115 3.37487 0.818115 4.40807L0.818115 20.6828C0.818115 21.716 1.22855 22.7069 1.95914 23.4375C2.68973 24.168 3.68061 24.5785 4.71382 24.5785ZM9.64136 9.40179C10.4942 8.18344 11.6193 7.70814 13.1761 7.70814C14.2741 7.70814 15.2081 8.07815 15.876 8.77757C16.5423 9.4785 16.9229 10.4803 17.0101 11.7603C17.3786 11.9152 17.72 12.0972 18.0299 12.3063C19.2813 13.1471 19.9702 14.4045 19.9702 15.8455C19.9702 18.9094 17.4583 21.5702 12.9128 21.5702C9.00962 21.5702 4.95448 19.299 4.95448 12.5394C4.95448 5.81594 8.88177 3.52063 12.9008 3.52063C14.7569 3.52063 19.1114 3.79438 20.7479 9.20174L19.2137 9.59883C17.9472 5.74825 15.2924 5.13457 12.8602 5.13457C8.83664 5.13457 6.5624 7.58329 6.5624 12.7951C6.5624 17.4685 9.10438 19.9503 12.9128 19.9503C16.046 19.9503 18.3819 18.3228 18.3819 15.9387C18.3819 14.3158 17.0191 13.5397 16.9484 13.5397C16.6822 14.931 15.9692 17.2729 12.8376 17.2729C11.0131 17.2729 9.4383 16.0125 9.4383 14.3609C9.4383 12.0024 11.6764 11.1481 13.4438 11.1481C14.1056 11.1481 14.9028 11.1932 15.3195 11.2774C15.3195 10.5585 14.7118 9.32809 13.1746 9.32809C11.8043 9.32809 11.4298 9.76128 10.9936 10.2667L10.9575 10.3073C10.6536 10.1042 9.64136 9.40179 9.64136 9.40179Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="f-icon">
                                        <a href="#">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21.2183 0.700302H1.94658C1.43546 0.700302 0.945278 0.908295 0.583864 1.27852C0.22245 1.64875 0.0194092 2.15089 0.0194092 2.67448V22.4162C0.0194092 22.9398 0.22245 23.4419 0.583864 23.8122C0.945278 24.1824 1.43546 24.3904 1.94658 24.3904H21.2183C21.7294 24.3904 22.2196 24.1824 22.581 23.8122C22.9424 23.4419 23.1454 22.9398 23.1454 22.4162V2.67448C23.1454 2.15089 22.9424 1.64875 22.581 1.27852C22.2196 0.908295 21.7294 0.700302 21.2183 0.700302ZM18.0457 17.7695C18.1352 17.8612 18.2062 17.9701 18.2547 18.0899C18.3031 18.2097 18.3281 18.3382 18.3281 18.4679C18.3281 18.5976 18.3031 18.726 18.2547 18.8458C18.2062 18.9656 18.1352 19.0745 18.0457 19.1662C17.9561 19.2579 17.8499 19.3307 17.7329 19.3803C17.6159 19.43 17.4905 19.4555 17.3639 19.4555C17.2373 19.4555 17.112 19.43 16.995 19.3803C16.878 19.3307 16.7717 19.2579 16.6822 19.1662L11.5824 13.9408L6.48265 19.1662C6.30185 19.3514 6.05662 19.4555 5.80092 19.4555C5.54522 19.4555 5.29999 19.3514 5.11918 19.1662C4.93837 18.981 4.8368 18.7298 4.8368 18.4679C4.8368 18.2059 4.93837 17.9547 5.11918 17.7695L10.2202 12.5453L5.11918 7.32119C4.93837 7.13597 4.8368 6.88476 4.8368 6.62282C4.8368 6.36089 4.93837 6.10968 5.11918 5.92446C5.29999 5.73924 5.54522 5.63519 5.80092 5.63519C6.05662 5.63519 6.30185 5.73924 6.48265 5.92446L11.5824 11.1498L16.6822 5.92446C16.863 5.73924 17.1082 5.63519 17.3639 5.63519C17.6196 5.63519 17.8649 5.73924 18.0457 5.92446C18.2265 6.10968 18.3281 6.36089 18.3281 6.62282C18.3281 6.88476 18.2265 7.13597 18.0457 7.32119L12.9447 12.5453L18.0457 17.7695Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="footer-bg">
                        <!-- <img src="../assets/images/charectorimg.png" alt=""> -->
                        <!-- <video src="../assets/images/FooterVid.mp4" autoplay muted loop></video> -->
                        <div 
                            class="lottie_comp" 
                            id="lottie"
                        ></div>
                        <div class="footer-copy">
                            <p>&copy; NOU APPARELS PVT LTD.</p>
                        </div>
                    </div>
                    </div>
                </footer>
      `
    }
}



/* ============================================================= */



/* ====================== Home Page Components ============================== */



class Hero_section extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <main>
      <div class="hero-container">
          <div class="hero-text">
              <span>EVOLVING FOR A</span><br>
              SUSTAINABLE FUTURE
          </div>
          <img id="hero-bg" src="../assets/images/Hero-Mobile.jpg" alt="hero" loading="lazy">
      </div>
    </main>
      `
    }   
}




/* ========================================================================== */


/* ====================== Proximity Components ============================== */

class Proximity_comp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="proximity-el">
            <div class="pro-main">
                <img src="../assets/images/BAGhalf.png" alt="Bag img" loading="lazy">
                <img src="../assets/images/BAG.png" alt="Bag img" loading="lazy">
            </div>
            <div class="pro-el">
                <img id="proximity-element" src="../assets/images/Card01.png" alt="Proximity-element" loading="lazy">
                <img id="proximity-element" src="../assets/images/Card02.png" alt="Proximity-element" loading="lazy">
            </div>
            <div class="pro-txt">

                <p>
                    BRANDING-BRANDING-BRANDING-BRANDING-BRANDING-
                </p>

            </div>
        </div>
    `
  }
}



class RoadMap_comp extends HTMLElement{
    connectedCallback(){
    this.innerHTML=`
    <section class="route-map">
    <div class="road-els">


    <div class="route-squares">

        <div class="rout-path">
            <div class="r-path-points">
                <p class="r-para-1">
                    <span style="font-size: 14px;
                        font-weight: 600;">Foundation</span><br />
                    In the initial stage, the focus is on establishing the foundational elements of
                    sustainability within NOU Apparels.
                </p>
                <div class="r-circle-1"></div>
                <p class="r-para-2">
                    <span style="font-size: 14px;
                        font-weight: 600;">Growth and Integration</span><br />
                    In the second stage, the focus shifts toward integrating sustainability into core business
                    functions and expanding efforts.
                </p>
                <div class="r-circle-2"></div>
                <p class="r-para-3">
                    <span style="font-size: 14px;
                        font-weight: 600;">Full Sustainability</span><br />
                    In the final stage, NOU Apparels achieves full sustainability by embedding eco-friendly
                    practices throughout the entire business model.
                </p>
                <div class="r-circle-3"></div>
            </div>
            <div class="r-path">
                <svg width="100%" height="1106" viewBox="0 0 275 1106" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M99 1C99 1 303.5 86.5 270 265C236.5 443.5 44.5 563.5 8.5 736C-40.4289 970.451 169.5 1105 169.5 1105"
                        stroke="#393939" stroke-width="2" />
                </svg>
            </div>
            <div class="r-path-tab">
                <svg width="407" height="1065" viewBox="0 0 407 1065" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.49992 1.5C1.49992 1.5 490.503 143.771 392 348C317 503.5 -11.2094 551.109 1.49992 724C14.2092 896.891 287.5 1063.5 287.5 1063.5"
                        stroke="#393939" stroke-width="2" />
                </svg>
            </div>
            <div class="r-path-desk">
                <svg width="632" height="1002" viewBox="0 0 632 1002" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2"
                        d="M25.5002 1C245 1 129.5 77.5004 517 227.5C904.5 377.5 185 440 32.0001 630C-121 820 338 1000.5 523 1000.5"
                        stroke="white" stroke-width="2" />
                </svg>
            </div>
        </div>

            <div class="r-square">
                <img src="../assets/images/Plant01.png" alt="">
            </div>
            <div class="r-square">
                <img src="../assets/images/Plant02.png" alt="">
            </div>
            <div class="r-square">
                <img src="../assets/images/Plant03.png" alt="">
            </div>
            <div class="r-square">
                <img src="../assets/images/Plant04.png" alt="">
            </div>
    </div>

    <div class="r-content">
        <h2>
            <span class="type-anim"></span>
        </h2>
        <p>
            <span class="p-coma">''</span> Cheap fashion is really far from that. It may be cheap in terms of the financial cost, but
            very expensive when it comes to the environment and the cost of human life <span class="p-coma">,,</span>
        </p>
    </div>
</div>

    <div class="path-bg-el"></div>
    <div class="path-bg-el"></div>
    <div class="path-bg-el"></div>
    <div class="path-bg-el"></div>
    <div class="path-bg-el"></div>
    <div class="path-bg-el"></div>

</section>
    `
}
}


/* ========================================================================== */



/* ================= Defining all custom elements ================ */

customElements.define('nav-bar',Nav_bar);
customElements.define('hero-sec',Hero_section);
customElements.define('footer-sec',Footer_section);
customElements.define('proximity-el',Proximity_comp);
customElements.define('road-map',RoadMap_comp);






/* =============== Lottie ============ */


document.addEventListener("DOMContentLoaded",()=>{
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie'),
        path: '../assets/Events/ChristmasTree.json', 
        renderer: 'svg',
        loop: true, 
        autoplay: true, 
        })

        animation.play();
})