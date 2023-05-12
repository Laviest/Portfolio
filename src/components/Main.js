import React from 'react'
import { gsap } from "gsap"

export default function Main() {

    const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

    tl.fromTo('.scribble2', {y:0}, {y: -10, yoyo: true, duration: 3, repeat: -1})
    tl.fromTo('.scribble3', {width: 0}, {width: 20, yoyo: true, duration: 3, repeat: -1})
    tl.fromTo('.scribble5', {width: 0}, {width: 20, yoyo: true, duration: 3, repeat: -1})
    // tl.fromTo('.scribble4', {y:0}, {y: -7, yoyo: true, repeat: -1})


    return(
        <div>
            <img className='scribble2' src="../images/scribble2.png"/>
            <img className='scribble3' src="../images/scribble3.png"/>
            <img className='scribble5' src="../images/scribble3.png"/>
            <img className='scribble4' src="../images/scribble5.png"/>
            <img className='scribble6' src="../images/scribble6.png"/>
            <div className='main--hero-div'>
                <img className='scribble1' src="../images/scribble.png"/>
                <div>
                    <h3>Hello! I am</h3>
                    <h1>Petar <span style={{color: "#1c9fbb"}}>Joshevski</span></h1>
                    <h3><span style={{fontWeight: "600"}}>A</span> Front End Web Developer</h3>
                    <div className='hero-buttons' style={{display: "flex"}}>
                        <button className='button1' onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccqGTSzwCQQssGjpgQCZqmRsSCkLXjczbKQDCTdPChbFghlbjqqCLjFclghnNfJWxlPl", '_blank').focus()}>Hire Me</button>
                        <button className='button2' onClick={() => window.open("https://github.com/Laviest?tab=repositories", '_blank').focus()}>View portfolio</button>
                    </div>
                </div>
                <img className='main--pf' src="../images/pf.png"/>
                {/* <img className='pf-bg' src="../images/pf-bg.png"/> */}
            </div>
            <div className='about-me'>
                {/* <img className='about-me-img' src="../images/person_coding.jpg"/>
                <img className='about-me-img2' src="../images/person_smiling.jpg"/> */}
                <div className='svg-animation'>
                <svg width="736" height="740" viewBox="0 0 736 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="undraw_feeling_proud_qne1 1">
                    <g id="computer">
                    <path id="Vector" d="M542.012 442.412V632.467L572.817 684.277L575.161 688.218H696.711L699.167 442.412H542.012Z" fill="#E6E6E6"/>
                    <path id="Vector_2" opacity="0.1" d="M542.012 442.412V632.467L572.817 684.277L574.707 442.412H542.012Z" fill="black"/>
                    <path id="Vector_3" d="M248.573 437.343V627.399L217.768 679.209L215.423 683.149H93.8734L91.4174 437.343H248.573Z" fill="#E6E6E6"/>
                    <path id="Vector_4" opacity="0.1" d="M248.573 437.343V627.399L217.768 679.209L215.877 437.343H248.573Z" fill="black"/>
                    <path id="Vector_5" d="M736 433.543V444.946H75.4563V428.474L136.845 395.531H681.978L736 433.543Z" fill="#E6E6E6"/>
                    <path id="Vector_6" opacity="0.1" d="M736 433.543V444.946H75.4563V428.474L736 433.543Z" fill="black"/>
                    <path id="Vector_7" d="M169.996 490.559H140.528L128.251 481.69H183.501L169.996 490.559Z" fill="#3F3D56"/>
                    <path id="Vector_8" d="M169.996 527.303H140.528L128.251 518.434H183.501L169.996 527.303Z" fill="#3F3D56"/>
                    <path id="Vector_9" d="M169.996 579.253H140.528L128.251 570.382H183.501L169.996 579.253Z" fill="#3F3D56"/>
                    <path id="Vector_10" d="M169.996 631.201H140.528L128.251 622.331H183.501L169.996 631.201Z" fill="#3F3D56"/>
                    <path id="Vector_11" d="M620.589 495.627H650.056L662.334 486.758H607.084L620.589 495.627Z" fill="#3F3D56"/>
                    <path id="Vector_12" d="M620.589 532.371H650.056L662.334 523.502H607.084L620.589 532.371Z" fill="#3F3D56"/>
                    <path id="Vector_13" d="M620.589 584.321H650.056L662.334 575.451H607.084L620.589 584.321Z" fill="#3F3D56"/>
                    <path id="Vector_14" d="M620.589 636.269H650.056L662.334 627.399H607.084L620.589 636.269Z" fill="#3F3D56"/>
                    <path id="Vector_15" d="M640.655 175.751H392.587C391.355 175.751 390.135 176.001 388.996 176.488C387.858 176.974 386.824 177.687 385.953 178.586C385.081 179.485 384.39 180.553 383.919 181.727C383.448 182.902 383.205 184.161 383.205 185.433V357.882C383.205 359.153 383.448 360.412 383.919 361.587C384.39 362.762 385.081 363.829 385.953 364.728C386.824 365.627 387.858 366.34 388.996 366.827C390.135 367.313 391.355 367.563 392.587 367.563H486.756L483.228 390.808C483.228 390.808 463.066 401.862 477.242 402.187C491.419 402.512 558.205 402.187 558.205 402.187C558.205 402.187 571.122 402.187 550.644 390.483L547.326 367.563H640.655C641.887 367.563 643.107 367.313 644.246 366.827C645.384 366.34 646.418 365.627 647.289 364.728C648.161 363.829 648.852 362.762 649.323 361.587C649.794 360.412 650.037 359.153 650.037 357.882V185.433C650.037 184.161 649.794 182.902 649.323 181.727C648.852 180.553 648.161 179.485 647.289 178.586C646.418 177.687 645.384 176.974 644.246 176.488C643.107 176.001 641.887 175.751 640.655 175.751Z" fill="#3F3D56"/>
                    <path id="Vector_16" d="M641.058 185.992H392.184V329.689H641.058V185.992Z" fill="#F2F2F2"/>
                    <path id="Vector_17" d="M516.621 183.066C517.491 183.066 518.196 182.338 518.196 181.44C518.196 180.543 517.491 179.815 516.621 179.815C515.751 179.815 515.046 180.543 515.046 181.44C515.046 182.338 515.751 183.066 516.621 183.066Z" fill="#F2F2F2"/>
                    <path id="Vector_18" d="M516.621 360.574C519.927 360.574 522.607 357.808 522.607 354.397C522.607 350.985 519.927 348.22 516.621 348.22C513.315 348.22 510.635 350.985 510.635 354.397C510.635 357.808 513.315 360.574 516.621 360.574Z" fill="#F2F2F2"/>
                    <path id="Vector_19" d="M507.294 419.743V422.994H337.807V420.393L338.04 419.743L342.217 408.039H503.828L507.294 419.743Z" fill="#3F3D56"/>
                    <path id="Vector_20" d="M572.518 416.56C572.209 417.922 571.043 419.359 568.41 420.718C558.959 425.595 539.742 419.418 539.742 419.418C539.742 419.418 524.935 416.817 524.935 409.99C525.351 409.696 525.785 409.43 526.233 409.193C530.207 407.024 543.381 401.671 566.741 409.42C568.462 409.977 570 411.017 571.182 412.423C571.706 412.954 572.1 413.606 572.332 414.326C572.564 415.045 572.628 415.811 572.518 416.56Z" fill="#3F3D56"/>
                    <path id="Vector_21" opacity="0.1" d="M572.518 416.56C560.95 421.134 550.639 421.476 540.057 413.891C536.055 410.838 531.21 409.191 526.233 409.193C530.207 407.024 543.381 401.671 566.741 409.42C568.462 409.977 570 411.017 571.182 412.423C571.706 412.954 572.1 413.606 572.332 414.326C572.564 415.045 572.628 415.811 572.518 416.56Z" fill="black"/>
                    <path id="Vector_22" d="M558.014 413.891C560.275 413.891 562.109 413.309 562.109 412.591C562.109 411.872 560.275 411.29 558.014 411.29C555.752 411.29 553.918 411.872 553.918 412.591C553.918 413.309 555.752 413.891 558.014 413.891Z" fill="#F2F2F2"/>
                    <path id="Vector_23" opacity="0.1" d="M507.294 419.743V422.994H337.807V420.393L338.04 419.743H507.294Z" fill="black"/>
                    </g>
                    <path id="neck" d="M109.77 128.954C109.77 128.954 113.207 158.52 100.602 160.885C87.996 163.25 112.061 203.459 112.061 203.459L169.36 210.555L155.609 163.25C155.609 163.25 146.441 159.702 152.171 136.05C157.901 112.397 109.77 128.954 109.77 128.954Z" fill="#FFB8B8"/>
                    <path id="legs" d="M57.6276 388.54C57.6276 388.54 58.7735 457.132 65.6495 479.602C72.5254 502.071 71.3793 503.254 70.2334 506.802C69.0874 510.35 67.9414 507.985 67.9414 513.898C67.9414 519.811 65.6495 613.238 67.9414 621.516C70.2334 629.795 61.0656 643.986 67.9414 645.169C74.8173 646.351 106.905 645.169 108.051 638.073C109.197 630.977 98.8828 628.612 103.467 623.881C108.051 619.151 114.926 522.176 114.926 522.176L130.97 454.766L160.765 419.288H223.794L243.276 497.341C243.276 497.341 235.254 519.811 240.984 519.811C246.714 519.811 281.093 526.906 281.093 500.889C281.093 474.871 269.633 398.001 267.341 395.635C265.049 393.27 268.487 384.992 265.049 381.444C261.611 377.896 221.502 353.061 206.605 348.33C191.707 343.6 170.808 337.97 170.808 337.97L57.6276 388.54Z" fill="#2F2E41"/>
                    <g id="face">
                    <path id="Vector_24" d="M122.237 52.0001C120.517 51.8544 118.795 52.2515 117.298 53.1388C115.829 54.1772 114.903 55.9965 113.957 57.6894C110.343 64.2394 105.45 69.9434 99.5877 74.44C95.318 77.6679 89.8897 81.6928 90.6202 87.6442C91.0056 89.6097 91.7091 91.494 92.7014 93.2181C96.6403 101.424 107.389 107.765 106.332 117.128C110.245 110.367 105.011 107.024 108.924 100.263C110.788 97.0432 114.025 93.4088 116.839 95.4307C117.781 96.1078 118.4 97.322 119.381 97.9161C121.721 99.3335 124.211 96.6237 126.283 94.7042C133.428 88.0854 143.588 89.8194 152.479 91.8817C156.677 92.8552 161.287 94.1326 163.768 98.2725C167.03 103.716 160.669 109.594 159.061 115.748C158.93 116.273 158.924 116.822 159.043 117.349C159.163 117.877 159.404 118.367 159.747 118.777C160.089 119.187 160.523 119.505 161.011 119.705C161.499 119.904 162.027 119.978 162.548 119.922C165.216 119.65 168.376 119.427 168.534 118.219C171.891 118.343 176.003 117.95 177.441 114.344C177.881 112.917 178.113 111.43 178.131 109.933C178.659 103.874 181.15 98.3473 182.801 92.5811C184.452 86.8148 185.169 80.0571 182.384 74.9447C181.39 73.2437 180.16 71.7016 178.734 70.3673C162.926 54.5802 142.143 51.9767 122.237 52.0001Z" fill="#2F2E41"/>
                    <path id="Vector_25" d="M135.554 148.467C154.541 148.467 169.933 132.583 169.933 112.989C169.933 93.3943 154.541 77.5099 135.554 77.5099C116.567 77.5099 101.175 93.3943 101.175 112.989C101.175 132.583 116.567 148.467 135.554 148.467Z" fill="#FFB8B8"/>
                    <path id="Vector_26" d="M123.912 61.2831C122.526 61.1771 121.138 61.4549 119.891 62.0878C118.764 62.9375 117.835 64.0364 117.172 65.3042C114.115 70.0491 110.131 74.0818 105.474 77.1434C101.999 79.4249 97.5797 82.2696 98.1744 86.4761C98.4972 87.8864 99.0717 89.2224 99.8686 90.4157C103.086 96.2738 104.367 103.054 103.517 109.731L113.074 95.3949C114.592 93.1192 117.227 90.5504 119.517 91.9796C120.284 92.4581 120.788 93.3163 121.587 93.7362C123.492 94.738 125.519 92.8227 127.206 91.4661C133.022 86.7879 141.293 88.0135 148.53 89.4711C151.947 90.1592 155.7 91.062 157.72 93.9881C161.076 98.8507 157.572 105.877 159.531 111.494C160.079 111.098 160.545 110.592 160.9 110.007C161.255 109.421 161.493 108.768 161.6 108.086C164.332 108.173 167.68 107.896 168.851 105.347C169.207 104.348 169.396 103.294 169.412 102.23C169.841 97.9475 171.87 94.0409 173.213 89.9654C174.557 85.8898 175.141 81.1135 172.874 77.5001C172.044 76.2758 171.043 75.1854 169.903 74.2648C157.035 63.1066 140.116 61.2665 123.912 61.2831Z" fill="#2F2E41"/>
                    </g>
                    <g id="left-leg">
                    <path id="Vector_27" d="M74.8172 636.89L79.4016 701.935H103.466L96.5912 636.89H74.8172Z" fill="#FFB8B8"/>
                    <path id="Vector_28" d="M76.405 693.338C73.6415 697.214 74.1956 702.754 71.7476 706.849C69.6258 710.399 65.6268 712.26 62.9728 715.405C62.1259 716.45 61.3709 717.571 60.7168 718.754C58.2548 723.01 56.2536 728.465 58.6784 732.743C60.6289 736.185 64.7289 737.53 68.4892 738.447C73.2418 739.606 78.1799 740.533 82.9874 739.648C87.7949 738.762 92.4935 735.724 94.2076 731.005C94.5445 729.819 94.945 728.652 95.4073 727.512C98.013 722.218 106.186 722.161 108.853 716.899C110.719 713.217 109.004 708.766 107.289 705.007L102.051 693.524C100.313 689.713 93.2673 691.905 89.594 690.992C84.8034 689.801 79.8513 688.489 76.405 693.338Z" fill="#2F2E41"/>
                    </g>
                    <g id="right-leg">
                    <path id="Vector_29" d="M251.298 513.898L254.735 568.298L281.093 556.472L270.779 511.533L251.298 513.898Z" fill="#FFB8B8"/>
                    <path id="Vector_30" d="M281.093 547.011C281.093 547.011 263.903 541.098 255.881 558.837C247.86 576.577 251.298 581.307 251.298 581.307C251.298 581.307 277.655 590.768 282.239 586.038C284.233 583.979 290.566 583.264 297.085 583.113C307.013 582.884 309.654 568.388 300.278 565.013C299.998 564.912 299.715 564.825 299.429 564.75C290.261 562.385 281.093 547.011 281.093 547.011Z" fill="#2F2E41"/>
                    </g>
                    <g id="shirt">
                    <path id="Vector_31" d="M90.8609 175.668C90.8609 175.668 147.014 187.494 160.765 168.572C174.517 149.65 180.247 221.79 180.247 221.79L187.123 297.478L176.809 338.87C176.809 338.87 122.948 383.809 105.759 387.357C88.569 390.905 62.2115 393.27 62.2115 393.27C62.2115 393.27 70.2334 261.999 70.2334 259.634C70.2334 257.269 90.8609 175.668 90.8609 175.668Z" fill="white"/>
                    <path id="Vector_32" d="M107.938 153.488C107.938 153.488 95.4448 146.102 92.0069 153.198C88.569 160.294 56.4816 178.033 53.0437 178.033C49.6058 178.033 59.9196 276.19 55.3357 288.017C50.7518 299.843 28.9782 386.174 41.584 393.27C54.1897 400.366 45.0219 386.174 57.6276 403.914C70.2334 421.653 132.116 421.653 135.554 414.557C138.992 407.462 108.051 354.244 113.78 304.573C119.51 254.903 128.678 186.311 120.656 176.85C112.634 167.389 107.938 153.488 107.938 153.488Z" fill="#2F2E41"/>
                    <path id="Vector_33" d="M149.306 161.476L150.902 155.807C150.902 155.807 198.583 172.12 200.875 182.763C203.167 193.407 202.021 267.912 193.999 273.825C185.977 279.738 174.517 289.199 182.539 303.391C190.561 317.582 199.729 332.956 206.605 334.139C213.48 335.322 226.086 343.6 222.648 351.878C219.21 360.157 177.955 344.783 177.955 344.783C177.955 344.783 150.452 323.495 151.598 290.382C152.744 257.269 149.306 161.476 149.306 161.476Z" fill="#2F2E41"/>
                    </g>
                    <g id="right-arm">
                    <path id="Vector_34" d="M199.265 305.482L177.135 362.902C177.135 362.902 142.085 410.61 164.417 413.231C186.749 415.853 195.357 369.62 195.357 369.62L220.432 321.706L199.265 305.482Z" fill="#FFB8B8"/>
                    <path id="Vector_35" d="M189.516 179L199.976 180.963C199.976 180.963 228.986 246.061 227.059 292.837C225.132 339.612 221.088 330.219 221.088 330.219C221.088 330.219 210.618 309.225 191.232 316.109L189.516 179Z" fill="#2F2E41"/>
                    </g>
                    <g id="left-arm">
                    <path id="Vector_36" d="M6.7206 118.43L26.8573 33.8782C26.8573 33.8782 41.9469 -10.691 55.7092 2.60548C69.4714 15.9019 41.0763 55.3938 41.0763 55.3938L31.1092 118.569L6.7206 118.43Z" fill="#FFB8B8"/>
                    <path id="Vector_37" d="M72.8014 242.055L65.2024 247.013C65.2024 247.013 46.7413 247.265 34.9659 226.12C23.1905 204.976 -4.14137 113.724 0.698682 110.893C5.53874 108.063 31.6968 117.923 33.776 113.258C35.8551 108.593 31.6131 130.361 37.9975 138.971C44.3819 147.581 72.8014 242.055 72.8014 242.055Z" fill="#2F2E41"/>
                    </g>
                    <g id="Group 13">
                    <path id="Rectangle 55" d="M493.065 233.187H463.446V240.545H493.065V233.187Z" fill="white"/>
                    <path id="Rectangle 56" d="M595.635 233.187H585.213V240.545H595.635V233.187Z" fill="white"/>
                    <path id="Rectangle 57" d="M616.478 233.187H606.056V240.545H616.478V233.187Z" fill="white"/>
                    <path id="Rectangle 58" d="M574.243 233.187H503.487V240.545H574.243V233.187Z" fill="white"/>
                    <path id="Rectangle 59" d="M455.767 280.734H426.148V288.093H455.767V280.734Z" fill="white"/>
                    <path id="Rectangle 60" d="M558.337 280.734H547.915V288.093H558.337V280.734Z" fill="white"/>
                    <path id="Rectangle 61" d="M579.18 280.734H568.758V288.093H579.18V280.734Z" fill="white"/>
                    <path id="Rectangle 62" d="M536.945 280.734H466.189V288.093H536.945V280.734Z" fill="white"/>
                    <path id="Rectangle 63" d="M578.083 249.602H548.464V256.96H578.083V249.602Z" fill="white"/>
                    <path id="Rectangle 64" d="M618.123 249.602H588.504V256.96H618.123V249.602Z" fill="white"/>
                    <path id="Rectangle 66" d="M436.57 249.602H426.148V256.96H436.57V249.602Z" fill="white"/>
                    <path id="Rectangle 67" d="M457.413 249.602H446.991V256.96H457.413V249.602Z" fill="white"/>
                    <path id="Rectangle 68" d="M538.591 249.602H467.834V256.96H538.591V249.602Z" fill="white"/>
                    <path id="Rectangle 69" d="M516.651 265.451H487.032V272.809H516.651V265.451Z" fill="white"/>
                    <path id="Rectangle 70" d="M476.61 265.451H446.991V272.809H476.61V265.451Z" fill="white"/>
                    <path id="Rectangle 71" d="M436.57 265.451H426.148V272.809H436.57V265.451Z" fill="white"/>
                    <path id="Rectangle 73" d="M618.123 265.451H607.702V272.809H618.123V265.451Z" fill="white"/>
                    <path id="Rectangle 74" d="M597.28 265.451H526.524V272.809H597.28V265.451Z" fill="white"/>
                    </g>
                    </g>
                </svg>
                </div>

                <div className='about-me-text'>
                    <h1>About Me</h1>
                    <p>I'm a front end web developer, always looking to improve my skills and keep up with the latest technologies. I have a strong work ethic, bringing forth with me a 
                        disciplined attitude. <br></br>I am an excellent team player that loves interacting with people, which makes my communication skills reliable.</p>
                    <div>
                        <div style={{display: "flex", width:"1000px"}}>
                            <img className='about-me-code-icon' src="../images/coding-icon.png "/>
                            <p className='coding-for-1'>Coding: for 3.5 years (Web developement for 7 months).</p>
                            <p className='coding-for-2'>Coding: for 3.5 years<br></br> (Web developement for 7 months).</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className='about-me-code-icon' src="../images/hobbies-icon.png "/>
                            <p className='coding-for'>Hobbies: bodybuilding and reading.</p>
                        </div>
                        <div style={{display: "flex"}}>
                            <img className='about-me-code-icon-2' src="../images/mail.png "/>
                            <p className='coding-for'>Gmail: petarjoshevski7@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <img className='programming-title' src="../images/title.png"/> */}
                {/* <img className='programming-title' src="../images/title2.png"/> */}
                <h1 className='programming-skills'>Skills</h1>

                <div className='p-div'>
                    <div>
                        <img className='p-skills' src="../images/html.png"/>
                        <h1 className='p-text' style={{textAlign: "center"}}>HTML</h1>
                    </div>
                    <div>
                        <img className='p-skills' src="../images/css.png"/>
                        <h1 className='p-text' style={{textAlign: "center"}}>CSS</h1>
                    </div>
                    <div>
                        <img className='p-skills-js' src="../images/javascript3.png"/>
                        <h1 className='p-text' style={{textAlign: "center"}}>JavaScript</h1>
                    </div>
                    <div>
                        <img className='p-skills' src="../images/react.png"/>
                        <h1 className='p-text' style={{textAlign: "center"}}>React</h1>
                    </div>
                    <div>
                        <img className='p-skills-bs' src="../images/bootstrap3.png"/>
                        <h1 className='p-text' style={{textAlign: "center"}}>Bootstrap</h1>
                    </div>
                    <div>
                        <img className='p-skills' src="../images/python.png"/>
                        <h1 className='p-text' style={{textAlign: "center"}}>Python</h1>
                    </div>
                    <div>
                        <img className='p-skills' src="../images/java.png"/>
                        <h1 className='p-text' style={{textAlign: "center"}}>Java</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='my-projects'>My Projects</h1>
                <div className='project1-div'>
                    <a href="https://645c84662fd19144afe401d4--plantplanet.netlify.app/" target="_blank"><div className='project-image-overlay'></div></a>
                    <a href="https://645c84662fd19144afe401d4--plantplanet.netlify.app/" target="_blank"><img src="../images/plantplanet.png"/></a>
                    <div className='project1-text'>
                        <h2>PlantPlanet</h2>
                        <p>A website for a plant design company</p>
                        <div className='project-library'>
                            <p>Library mainly used: React</p>
                            <img className='projects-react' src="../images/react.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lets-connect'>
                <h1>Let's connect!</h1>        
                <div className='connect-images'>       
                    <a href="https://github.com/Laviest?tab=repositories" target="_blank"><img className='c-img' src="../images/github-white.png"/></a>
                    <a href='https://www.linkedin.com/in/petar-josevski-54126625b/' target="_blank"><img className='c-img' src="../images/linkedin-white.png"/></a>
                    <a href='https://www.instagram.com/petarjoshev/' target="_blank"><img className='c-img' src="../images/instagram-white.png"/></a>
                </div> 
                <p>All rights reserved © 2023 Petar Joshevski</p>
            </div>
        </div>
    )
}