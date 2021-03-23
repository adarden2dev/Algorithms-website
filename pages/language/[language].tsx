import React from "react";
import { Typography, Button, Icon } from "@material-ui/core";
import AlgorithmsList from "components/algorithmsList";
import Section from "components/section";
import Head from "components/head";
import { getLanguage, getLanguages } from "lib/languages";
import { getLanguageName, Language } from "lib/models";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./style.module.css";

export default function LanguagePage({
  language,
}: {
  language: { name: Language; algorithms: Algorithm[] };
}) {
  return (
    <>
      <Head title={getLanguageName(language.name)} />
      <Section>
        <div className={classes.titleContainer}>
          <Typography variant="h4">{getLanguageName(language.name)}</Typography>
          <div>
            <Button
              startIcon={<Icon>open_in_new</Icon>}
              href={`https://github.com/TheAlgorithms/${language.name}`}
            >
              Github Repo
            </Button>
            {["c", "c-plus-plus"].includes(language.name.toLowerCase()) && (
              <Button
                startIcon={<Icon>open_in_new</Icon>}
                href={`https://thealgorithms.github.io/${language.name
                  .replace(/^c$/, "C")
                  .replace(/^c-plus-plus$/, "C-Plus-Plus")}`}
              >
                Documentation
              </Button>
            )}
          </div>
        </div>
        <AlgorithmsList algorithms={language.algorithms} />
      </Section>
    </>
  );
}

export async function getStaticProps({ params, locale }) {
  const language = getLanguage(params.language);
  return {
    props: {
      language,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export async function getStaticPaths() {
  const paths = getLanguages();
  return {
    paths,
    fallback: false,
  };
}
