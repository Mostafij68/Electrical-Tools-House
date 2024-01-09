import React from 'react';

const Blogs = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-medium mt-8 text-secondary text-center'>Blogs</h1>
            <div className="collapse px-3 mt-8 sm:w-2/3 w-full mx-auto rounded-xl border">
                <input type="checkbox" />
                <div className="collapse-title text-xl text-accent font-medium">
                    1 How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>When building an application with React app, a developer has to think a lot about how the application performance will be and what the user experience will be like in the end. We can use several techniques to speed up the application :</p>
                    <ul className='text-lg font-medium'>
                        <li>Use binding functions in constructors.</li>
                        <li>Avoid Anonymous Functions.</li>
                        <li>Avoid Adding Extra Nodes to the DOM by using React.fragment.</li>
                        <li>Use React.Suspense and React.Lazy for Lazy Loading.</li>
                        <li>Use React.memo for Component Memoization.</li>
                        <li>Virtualize a Large List Using react-window.</li>
                        <li>Use a Production build before deployment.</li>
                    </ul>
                </div>
            </div>
            <div className="collapse px-3 mt-8 sm:w-2/3 w-full mx-auto rounded-xl border">
                <input type="checkbox" />
                <div className="collapse-title text-xl text-accent font-medium">
                    2 What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>
                        There are many ways to manage a state in a React application.
                    </p>
                    <ul className='text-lg font-medium'>
                        <li className='mt-2'>1. Local state :
                            Local state is data we manage in one or another component. Its is declared in function components using useState or useReducer hooks. In React, these hooks are a way of saying, `Hey React, when these values change, re-render.`
                        </li>
                        <li className='mt-3'>2. Global state :
                            When you want to get and update data anywhere in your app, or in multiple components at least, consider global state. A common example of a global state is authenticated user state. If a user is logged into your app, it is necessary to get and change their data throughout your application.
                        </li>
                        <li className='mt-3'>3. Derived state :
                            A simple rule for declaring state: Any state that can be derived, should be derived. For example, if You're storing firstName and lastName in state, You shouldn't store fullName in state. That can be derived! In React, the derived state is accomplished by plain JavaScript.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="collapse px-3 mt-8 sm:w-2/3 w-full mx-auto rounded-xl border">
                <input type="checkbox" />
                <div className="collapse-title text-xl text-accent font-medium">
                3 How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>
                        Prototypal Inheritance is the process by which one object can be based on another. This lets the objects share each other’s properties. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;