import Selfie from "../../images/Selfie.png"
function AboutMe() {
    return (
        // <div class="container my-5">
        //     <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        //         <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        //             <h1 class="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
        //             <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        //             <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        //                 <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
        //                 <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        //             </div>
        //         </div>
        //         <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        //             <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"></img>
        //         </div>
        //     </div>
        // </div>
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={Selfie} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
                </div>
                <div class="col-lg-6">
                    <h3 class="fst-italic">Hey!</h3>
                    <h2 class="fw-bold lh-1 mb-3">I'm Mike Gonzalez.</h2>
                    <h5 class="fw-bold">Front-End Developer | Web Designer | Content Creator</h5>
                    <p class="lead">I love to learn new tech, and have been known to build a few things that live on the internet. Some of the technologies I work with are: <i class="fab bi-filetype-html fs-4 text-primary">,</i> <i class="fab fa-css3-alt fs-4 text-primary">,</i> <i class="fab fa-js-square fs-4 text-primary">,</i> <i class="fab fa-bootstrap fs-4 text-primary">,</i> <i class="fab fa-react fs-4 text-primary">,</i> <i class="fab fa-node fs-4 text-primary">,</i> <i class="fab fa-sass fs-4 text-primary">,</i> <i class="fab fa-wix fs-4 text-primary">, and</i> <i class="fab fa-wordpress fs-4 text-primary">.</i>
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start ">
                        {/* <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
                        {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                        <h1><i class="bi bi-arrow-down"></i></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
