import {useEffect} from "react";

export function PersonalDetails() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);
    return (
        <div className="text-start">
            <h5 className="fw-bold">Contact me directly:</h5>

            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light"
                 data-type="HORIZONTAL" data-vanity="pdhanush" data-version="v1"><a
                className="badge-base__link LI-simple-link"
                href="https://www.linkedin.com/in/pdhanush?trk=profile-badge"></a></div>
            <p>
                {/*<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
                {/*    <path*/}
                {/*        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.021 17.824c-3.907 0-6.021-2.438-6.021-5.586 0-3.363 2.381-6.062 6.638-6.062 3.107 0 5.362 2.019 5.362 4.801 0 4.356-5.165 5.506-4.906 3.021-.354.555-.927 1.177-2.026 1.177-1.257 0-2.04-.92-2.04-2.403 0-2.222 1.461-4.1 3.19-4.1.829 0 1.399.438 1.638 1.11l.232-.816h1.169c-.122.416-1.161 4.264-1.161 4.264-.323 1.333.675 1.356 1.562.648 1.665-1.29 1.75-4.664-.499-6.071-2.411-1.445-7.897-.551-7.897 4.347 0 2.806 1.976 4.691 4.914 4.691 1.719 0 2.771-.465 3.648-.974l.588.849c-.856.482-2.231 1.104-4.391 1.104zm-1.172-7.153c-.357.67-.588 1.538-.588 2.212 0 1.805 1.761 1.816 2.626.12.356-.697.586-1.586.586-2.265 0-1.458-1.748-1.717-2.624-.067z"/>*/}
                {/*</svg>*/}
                <img className="pe-1" src="/assets/images/email_552486.png" alt="phone" width="24"
                     height="24"/>
                dhanushpakanati@gmail.com <br/>
                {/*<svg className="me-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"*/}
                {/*     clip-rule="evenodd">*/}
                {/*    <path*/}
                {/*        d="M2.59 1.322l2.844-1.322 4.041 7.889-2.724 1.342c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-.598.273-1.215.399-1.842.397-5.649-.019-12.086-10.43-12.133-17.33-.016-2.407.745-4.387 2.59-5.348zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.972-.474-2.271-4.383-1.026.501c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.498-2.252-4.398zm15.48 14.404h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z"/>*/}
                {/*</svg>*/}
                <img className="pe-1" src="/assets/images/telephone-call_3059606.png" alt="phone" width="24"
                     height="24"/>
                +1 (380)-213-7125
            </p>

            {/*<br/>*/}
            <p>Work location preference: No Preference, Open to relocate</p>
            <p>I'm on Social:</p>
            <div className="d-flex">
                <a className="nav-link me-3" href="https://www.linkedin.com/in/pdhanush/" target="_blank"
                   rel="noopener noreferrer">
                    <img src="assets/images/linkedin_2504923.png" alt="linkedin" width="24" height="24"/>
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
                    {/*    <path*/}
                    {/*        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>*/}
                    {/*</svg>*/}
                </a>

                <a className="nav-link me-3" href="https://github.com/dpakanati" target="_blank"
                   rel="noopener noreferrer">
                    <img src="assets/images/github_733553.png" alt="github" width="24" height="24"/>
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
                    {/*    <path*/}
                    {/*        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>*/}
                    {/*</svg>*/}
                </a>
                <a className="nav-link me-3" href="mailto:dhanushpakanati@gmail.com" target="_blank"
                   rel="noopener noreferrer">
                    <img src="assets/images/email_552486.png" alt="github" width="24" height="24"/>
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
                    {/*    <path*/}
                    {/*        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>*/}
                    {/*</svg>*/}
                </a>


            </div>
        </div>
    )
}

export default PersonalDetails;