interface IPageSection {
  index: number,
  sectionHeading: string,
  sectionParagraphs: string[]
}

export default interface IPageData {
  title: string,
  data: IPageSection[]
}