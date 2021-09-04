import React from "react";
import dynamic from "next/dynamic";

const Card = dynamic(
    import("components/Card")
);

const Footer = dynamic(
    import("components/Footer")
);

const Home = () => {
    return (
        <>
            <section class="pt-5 mt-0 text-center container">
                <div class="row pt-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Project X</h1>
                        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </p>
                    </div>
                </div>
            </section>
            <section class='py-5 bg-light'>
                <div class='container' >
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                        <div class='col'><Card /></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default Home;