import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="aboutUsContainer bg-[#EAFDFC] pt-[3.2rem] xsm:pt-[3.6rem] ">
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="aboutUsWrapper  py-4 xsm:py-5 sm:py-6 md:py-8 px-3 w-[99%] xsm:w-[96%] lg:w-[90%] m-auto  ">
        <h1 className="  font-bold text-3xl xsm:text-4xl mb-6 xsm:mb-7 sm:mb-9 dancingFont  ">
          Resto
        </h1>

        <h1 className="  font-semibold text-lg xsm:text-xl mb-3 youngSerifFont ">
          What is One way data binding?
        </h1>

        <h1 className="  mb-8 robotoFont text-sm xsm:text-base ">
          One-way data binding is a fundamental concept in web development that
          simplifies the management of data and its presentation on a web page.
          In one-way data binding, data flows in a single direction, typically
          from a source or model to a target or view. This means that changes
          made in the source automatically update the target, ensuring that the
          displayed information is always in sync with the underlying data.
          However, the reverse is not true: changes in the target, such as user
          interactions or modifications, do not affect the source data.
          <br />
          <br />
          This approach offers several advantages. It promotes data consistency
          by preventing accidental modifications in the view layer from altering
          the original data. It also simplifies application logic by reducing
          the need for complex event handling and data synchronization code.
          One-way data binding is a key feature in many modern web frameworks
          and libraries, such as React and Angular, making it easier for
          developers to build robust and maintainable web applications.
        </h1>

        <h1 className="  mb-3 font-semibold text-lg xsm:text-xl youngSerifFont ">
          What is NPM in node.js?
        </h1>
        <h1 className="  mb-6 robotoFont text-sm xsm:text-base ">
          NPM, or Node Package Manager, is a package manager and online
          repository for Node.js packages and modules. It provides a
          command-line interface and a central repository of open-source
          libraries, tools, and frameworks that can be easily installed and
          managed in Node.js applications. Developers use NPM to install,
          update, and share packages, making it an essential tool for building
          Node.js applications efficiently. NPM is automatically included with
          Node.js installation, allowing developers to access a vast ecosystem
          of pre-built packages and streamline their development process. It is
          also used for managing project dependencies and scripts, making it a
          crucial component of many Node.js projects.
        </h1>

        <h1 className="  mb-3 youngSerifFont font-semibold text-lg xsm:text-xl ">
          Different between Mongodb database vs mySQL database.
        </h1>
        <h1 className="  mb-6 robotoFont text-sm xsm:text-base ">
          MongoDB is a NoSQL database that uses a flexible, schema-less data
          model, allowing for easy handling of unstructured or semi-structured
          data. It excels in horizontal scalability and suits applications with
          evolving data needs. In contrast, MySQL is a relational database that
          enforces a structured schema, making it ideal for applications with
          well-defined data structures and a strong requirement for data
          integrity. MongoDB employs a JSON-like query language, while MySQL
          uses SQL. Both databases have distinct strengths and are chosen based
          on specific application requirements and data complexities.
        </h1>

        {/*  */}
      </div>
    </div>
  );
};

export default Blog;
