import Image from "next/image";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

const page = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen ">
      <section className="text-center">
      {/* HEADER INFO */}
        <h1>Create an account</h1>
        <p>Let’s get started with your 30 days free trial.</p>
      {/* FORM SECTION */}

        <form className="" action="">
          <input className=" flex w-full" type="text" name="full name" placeholder="Full Name" />
          <input className=" flex w-full" type="email" name="email" placeholder="Email Address" />
          <input className=" flex w-full" type="password" name="password" placeholder="Password" />
          <div id="wrapper">
            <Checkbox />
            <Link href={"/terms"}>Accept terms and conditions</Link>
          </div>
        </form>

        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        </section>
    </main>
  );
};

export default page;
