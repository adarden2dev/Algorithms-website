import React from "react";
import AlgorithmsList from "components/algorithmsList";
import { getAllAlgorithms } from "lib/algorithms";
import Section from "components/section";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function All({ algorithms }) {
  const { t } = useTranslation();

  return (
    <>
      <Section title={t("allAlgorithmsFooter")}>
        <AlgorithmsList algorithms={algorithms} />
      </Section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      algorithms: getAllAlgorithms(),
      ...(await serverSideTranslations(locale, ["common", "categories"])),
    },
  };
}
