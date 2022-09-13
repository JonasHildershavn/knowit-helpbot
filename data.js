module.exports = {
  vpn: {
    searchwords: ["vpn"],
    adress: "test-vpn",
  },
  printer: {
    searchwords: [
      "printer",
      "print",
      "utskrift",
      "skrive ut",
      "skriver jeg ut",
      "printeren",
    ],
    adress: "test-printer",
  },
  feriepenger: {
    searchwords: [
      "feriepenger",
      "ferielønn",
      "lønn i juli",
      "lønn i juni",
      "holiday paycheck",
    ],
    adress: "test-personalhåndbok",
  },
  personalhåndbok: {
    searchwords: ["personalhåndbok"],
    adress: "",
    message: {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Jeg har funnet ut av at du mest sannsynlig leter etter noe som finnes her :point_right: <https://handbooks.simployer.com/nb-no/handbook/100545|Personalhåndboka>",
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Hvis du har spørsmål til det som står i personalhåndboka, send melding til @jonas.hildershavn",
          },
        },
      ],
    },
  },
};
