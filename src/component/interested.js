function Interested () {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="bg-gray-100 my-4 py-20">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-4xl text-center pb-12 font-bold text-black sm:text-5xl">Are you Interested?</h2>
                {/*<form action="" id="waitlistDB2" className="mx-auto max-w-sm">*/}
                {/*    <div className="mb-4">*/}
                {/*        <input type="email" id="email2" name="email" required*/}
                {/*               className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-200"*/}
                {/*               placeholder="name@email.com"/>*/}
                {/*    </div>*/}
                {/*    <div className="text-center">*/}
                {/*        <button type="submit" className="px-4 py-2 bg-zinc-700 text-white rounded-xl">Join the*/}
                {/*            Waitlist!*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</form>*/}
                <button className="px-4 py-2 bg-zinc-700 text-white rounded-xl mx-auto block" onClick={scrollToTop}>
                    Join the Waitlist!
                </button>

            </div>
        </div>
    );
}

export default Interested;