import Feed from "@components/Feed";


const Home = () => (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Life-Changing Habits & Strategies</span>
        </h1>
        <p className="desc text-center">
            Momentum is your space to explore, share, and adopt habit-building techniques, transformative experiments, and inspiring success stories for a better you.        
        </p>

    < Feed/>
    </section>
);

export default Home;