import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import AlgorithmsList from "components/algorithmsList";
import LanguagesList from "components/languagesList";
import { getAlgorithm } from "lib/algorithms";
import Section from "components/section";
import CategoriesList from "components/categoriesList";
import { Language, Languages } from "lib/models";
import classes from "./index.module.css";

export default function Home({ topAlgorithms, featuredAlgorithms }) {
  return (
    <>
      <Section title="Top algorithms">
        <AlgorithmsList noCategories algorithms={topAlgorithms} />
      </Section>
      <div id="about">
        <Section>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.twoCols}>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    What is an algorithm?
                  </Typography>
                  <Typography>
                    An algorithm is a set of rules that takes in one or more
                    inputs, then performs inner calculations and data
                    manipulations and returns an output or a set of outputs. In
                    short, algorithms make life easy. From complex data
                    manipulations and hashes, to simple arithmetic, algorithms
                    follow a set of steps to produce a useful result. One
                    example of an algorithm would be a simple function that
                    takes two input values, adds them together and returns their
                    sum.
                  </Typography>
                </div>
                <div />
                <div>
                  <Typography variant="h5" className={classes.title}>
                    About Us
                  </Typography>
                  <Typography>
                    We are a group of programmers helping each other to build
                    new things, whether it be writing complex encryption
                    programs, or simple ciphers. Our goal is to work together to
                    document and model beautiful, helpful and interesting
                    algorithms using code. We are an open-source community -
                    anyone can contribute. We check each other's work,
                    communicate and collaborate to solve problems. We strive to
                    be welcoming, respectful, yet make sure that our code
                    follows the latest programming guidelines.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
      <Section title="Featured algorithms">
        <AlgorithmsList noCategories algorithms={featuredAlgorithms} />
      </Section>
      <Section title="Top categories">
        <CategoriesList
          categories={[
            {
              name: "Sorts",
              icon: "sort",
              href: "/category/sorts",
            },
            {
              name: "Searches",
              icon: "search",
              href: "/category/searches",
            },
            {
              name: "Dynamic Programming",
              icon: "bolt",
              href: "/category/dynamicprogramming",
            },
            {
              name: "Ciphers",
              icon: "enhanced_encryption",
              href: "/category/ciphers",
            },
            {
              name: "Data Structures",
              icon: "grid_view",
              href: "/category/datastructures",
            },
            {
              name: "Basic Math",
              icon: "calculate",
              href: "/category/maths",
            },
            {
              name: "Image Processing",
              icon: "insert_photo",
              href: "/category/digitalimageprocessing",
            },
          ]}
        />
      </Section>

      <div id="contribute">
        <Section>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.twoCols}>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    Programming Languages
                  </Typography>
                  <Typography>
                    We support many programming languages. Each language has its
                    own GitHub repository where all the code for the algorithms
                    is stored. Here is a list of the current programming
                    languages:
                  </Typography>
                  <LanguagesList
                    languages={Object.keys(Languages).map(
                      (langName: Language) => ({
                        name: langName,
                        href: `/language/${langName}`,
                      })
                    )}
                    className={classes.languages}
                    outlined
                  />
                </div>
                <div />
                <div>
                  <Typography variant="h5" className={classes.title}>
                    Contribute
                  </Typography>
                  <Typography>
                    We encourage you to contribute to these repositories. If you
                    have an algorithm that you want to add, a change you want to
                    make or a bug you want to fix, please do so. But before you
                    do, make sure you have read the contributing guidelines
                    found in CONTRIBUTING.md in the repository. Make sure that
                    you are respectful, helpful and using the latest version of
                    the language. After reading the contribution guidelines,
                    please fork the repository, work on your changes and then
                    submit them as a pull request.
                  </Typography>
                  <Typography variant="h5" className={classes.title}>
                    Donate
                  </Typography>
                  <Typography>
                    Another way you can support us is to make a donation via{" "}
                    <a href="https://liberapay.com/">Liberapay</a>. Even a small
                    donation is much appreciated. By donating, it means that you
                    appreciate and like our work. If you don't like our work,
                    there's no need to donate. If you donate, top members will
                    be able to contribute further to The Algorithms projects. We
                    appreciate donations from everyone, from everywhere, no
                    matter the amount.
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.donate}
                    href="https://liberapay.com/TheAlgorithms/donate"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                      height="16"
                      width="16"
                      x="7"
                      y="7"
                    >
                      <g transform="translate(-78.37-208.06)" fill="#1a171b">
                        <path d="m104.28 271.1c-3.571 0-6.373-.466-8.41-1.396-2.037-.93-3.495-2.199-4.375-3.809-.88-1.609-1.308-3.457-1.282-5.544.025-2.086.313-4.311.868-6.675l9.579-40.05 11.69-1.81-10.484 43.44c-.202.905-.314 1.735-.339 2.489-.026.754.113 1.421.415 1.999.302.579.817 1.044 1.546 1.395.729.353 1.747.579 3.055.679l-2.263 9.278" />
                        <path d="m146.52 246.14c0 3.671-.604 7.03-1.811 10.07-1.207 3.043-2.879 5.669-5.01 7.881-2.138 2.213-4.702 3.935-7.693 5.167-2.992 1.231-6.248 1.848-9.767 1.848-1.71 0-3.42-.151-5.129-.453l-3.394 13.651h-11.162l12.52-52.19c2.01-.603 4.311-1.143 6.901-1.622 2.589-.477 5.393-.716 8.41-.716 2.815 0 5.242.428 7.278 1.282 2.037.855 3.708 2.024 5.02 3.507 1.307 1.484 2.274 3.219 2.904 5.205.627 1.987.942 4.11.942 6.373m-27.378 15.461c.854.202 1.91.302 3.167.302 1.961 0 3.746-.364 5.355-1.094 1.609-.728 2.979-1.747 4.111-3.055 1.131-1.307 2.01-2.877 2.64-4.714.628-1.835.943-3.858.943-6.071 0-2.161-.479-3.998-1.433-5.506-.956-1.508-2.615-2.263-4.978-2.263-1.61 0-3.118.151-4.525.453l-5.28 21.948" />
                      </g>
                    </svg>
                    Donate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const data = getAllAlgorithms();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      topAlgorithms: [
        getAlgorithm("binary-search"),
        getAlgorithm("quick-sort"),
        getAlgorithm("bogo-sort"),
      ],
      featuredAlgorithms: [
        getAlgorithm("coinchange"),
        getAlgorithm("caesar-cipher"),
        getAlgorithm("bellman-ford"),
      ],
    },
  };
}
