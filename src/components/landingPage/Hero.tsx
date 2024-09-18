import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Edward's Marketplace{" "}
              <strong className="font-extrabold text-primary sm:block">
                Access Free Source Code & Assets
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Perfect for developers, designers, and tech enthusiasts looking to
              enhance their projects with free resources.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button>Get Started</Button>
              <Button variant={"secondary"}>Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
