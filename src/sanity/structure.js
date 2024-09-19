// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Réalisations")
    .items([
      S.documentTypeListItem("project").title("Projets"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["project"].includes(item.getId())
      ),
    ]);
