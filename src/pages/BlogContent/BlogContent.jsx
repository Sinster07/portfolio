import React from "react";
import Header from "../../Components/Header/Header";
import "./BlogContent.css";
import BlogData from "../../data/blogData";
import { useLocation } from "react-router-dom";

const BlogContent = () => {
  const blogId = new URLSearchParams(useLocation().search);
  //   console.log(blogId)
  return (
    <div className="homeWrapper">
      <Header />
      <div className="main" style={{ padding: "0rem 10rem" }}>
        <div className="name" style={{ fontSize: "40px", textAlign: "center" }}>
          {BlogData.map((data, idx) => {
            return data.id === blogId.get("id") ? (
              <div>{data.title}</div>
            ) : undefined;
          })}
        </div>
        <div className="projectWrapper" style={{ textAlign: "left" }}>
          <article>
            <div className="blogHead">1. React Hook Form</div>

            <img
              className="blogSubImage"
              src="https://miro.medium.com/max/875/1*dfLFkF7yk1ahsZ_Qh9z8vQ.png"
              alt=""
            />

            <div className="blogArticle">
              I believe a project has a form if you have one. A form-free
              application is difficult to come by. This library will simplify
              your life in this situation. With the help of this library, you
              can write less code and eliminate pointless re-renders. More than
              27k stars are on it.
            </div>
          </article>
          <article>
            <div className="blogHead">2. Redux</div>

            <img
              className="blogSubImage"
              src="https://miro.medium.com/max/875/1*tE5JkK5-7Lup4AOz3EN4-g.png"
              alt=""
            />

            <div className="blogArticle">
              If you haven’t already, you should use this library in your next
              or ongoing project. With more than 57k stars and 3k forks, this
              library is among the most popular ones. It enables you to create
              apps that operate consistently across client, server, and native
              platforms and are simple to test. Redux can be used with any other
              view library in addition to React.
            </div>
          </article>
          <article>
            <div className="blogHead">3. MUI Core</div>

            <img
              className="blogSubImage"
              src="https://miro.medium.com/max/875/1*FS4NPZJJ2gFVkU8uETk5mA.png"
              alt=""
            />
            <div className="blogArticle">
              An open-source project called MUI Core (formerly known as
              Material-UI) aids in the implementation of Google’s material
              design principles in React. It has more than 77K tars on Github
              and is a well-liked UI design framework among React developers.
              Therefore, I don’t think there are many reasons not to use this.
            </div>
          </article>
          <article>
            <div className="blogHead">4. Blueprint</div>

            <img
              className="blogSubImage"
              src="https://miro.medium.com/max/875/1*6uaIojj9cZh8euLVNhxMhA.png"
              alt=""
            />
            <div className="blogArticle">
              This could be quite helpful for you if you want to build a
              sophisticated data-based user interface for desktop programs. This
              library is best for creating intricate, data-dense web interfaces
              for desktop programs that work with IE11 and contemporary
              browsers. However, keep in mind that this is not a mobile-first UI
              toolkit. On Github, it has more than 18k stars.
            </div>
          </article>
          <article>
            <div className="blogHead">5. Enzyme</div>

            <img
              className="blogSubImage"
              src="https://miro.medium.com/max/875/1*CCiZoUKsLGONf40qZjm_Hw.png"
              alt=""
            />

            <div className="blogArticle">
              One of the most crucial stages of software development is testing.
              Your app will be made impenetrable by it. Testing the output of
              your React Components is made simpler with the help of Enzyme, a
              React JavaScript Testing tool. The output can also be used in some
              ways to alter, navigate, and mimic runtime. On Github, it has more
              than 19k stars.
            </div>
          </article>
          <article>
            <div className="blogHead">6. Styled-Components</div>

            <img
              className="blogSubImage"
              src="https://miro.medium.com/max/875/1*bbLKVUirMkzWg3rvjCTDgg.png"
              alt=""
            />

            <div className="blogArticle">
              You can organize the CSS in your React app using this library. The
              tagged template literals and CSS’s styling capabilities enable you
              to create real CSS code to style your components. The mapping
              between components and styles is also eliminated. On Github, it
              has gotten more than 35k stars.
            </div>
          </article>
          <article>
            <div className="blogHead">7. React Router</div>

            <img
              className="blogSubImage"
              src="https://miro.medium.com/max/875/1*JYD8d8HlTZGz1xV94KYaSw.png"
              alt=""
            />

            <div className="blogArticle">
              This is another library you should consider using in your current
              or next project. It has more than 46k stars and 9k forks on
              Github. I believe by the name you have already understood that it
              is a fully-featured routing library for React. It is also
              lightweight.
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
