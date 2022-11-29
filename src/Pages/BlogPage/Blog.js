import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mx-56'>
                <div className="collapse collapse-arrow collapse-open">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>There are four main types of state you need to properly manage in your React apps:
                            <br />
                            1. Local (UI) state – Local state is data we manage in one or another component.
                            Local state is most often managed in React using the useState hook.
                            <br />
                            2. Global (UI) state – Global state is data we manage across multiple components.
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            <br />
                            3. Server state – Data that comes from an external server that must be integrated with our UI state.
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                            <br />
                            4. URL state – Data that exists on our URLs, including the pathname and query parameters.
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow collapse-open">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow collapse-open">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow collapse-open">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;